import {staffSteps,displayAccidental,staffForPitch} from '../../music/staff-model.js';
import {CHORDS,THEME_A,frequency,midi,pitchClass} from '../../music/chapter-6-5.js';
let audio;
const NS='http://www.w3.org/2000/svg';
const whiteClasses=new Set([0,2,4,5,7,9,11]);
const sharpNames=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
function element(svg,tag,attributes){const el=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attributes))el.setAttribute(k,String(v));svg.appendChild(el);return el;}
export function keyboardGeometry(notes){
 const midis=notes.map(midi);
 const low=Math.min(...midis),high=Math.max(...midis);
 // Include the surrounding white key context but avoid unused octaves.
 let start=low;while(!whiteClasses.has(start%12))start--;
 let end=high;while(!whiteClasses.has(end%12))end++;
 const naturals=[];for(let n=start;n<=end;n++)if(whiteClasses.has(n%12))naturals.push(n);
 if(naturals.length<5){while(naturals.length<5){const next=naturals.at(-1)+1;let candidate=next;while(!whiteClasses.has(candidate%12))candidate++;naturals.push(candidate);}}
 return {naturals,active:new Set(midis),rootPc:pitchClass(notes[0]),width:naturals.length*48};
}
function renderStaff(chord){
 const svg=document.getElementById('harmonic-staff');if(!svg)return;
 svg.replaceChildren();
 const groups=['treble','bass'].filter(clef=>chord.notes.some(n=>staffForPitch(n)===clef));
 const height=groups.length===2?250:148;
 svg.setAttribute('viewBox',`0 0 420 ${height}`);
 svg.setAttribute('aria-label',chord.name+': '+chord.notes.join(', ')+' displayed on '+groups.join(' and ')+' staff');
 groups.forEach((clef,g)=>{
  const top=37+g*115, bottom=top+40;
  // Five lines: bottom is E4 in treble or G2 in bass.
  for(let i=0;i<5;i++)element(svg,'line',{x1:68,x2:399,y1:top+i*10,y2:top+i*10,stroke:'currentColor','stroke-width':.85,opacity:.6});
  element(svg,'text',{x:8,y:top+22,fill:'currentColor','font-size':12}).textContent=clef==='treble'?'Treble':'Bass';
  chord.notes.filter(n=>staffForPitch(n)===clef).forEach((note,j)=>{
   const step=staffSteps(note,clef),y=bottom-step*5,x=210;
   // Ledger lines are spaced every two diatonic steps outside the staff.
   if(step<0){for(let st=-2;st>=step;st-=2)element(svg,'line',{x1:x-18,x2:x+18,y1:bottom-st*5,y2:bottom-st*5,stroke:'currentColor'});}
   if(step>8){for(let st=10;st<=step;st+=2)element(svg,'line',{x1:x-18,x2:x+18,y1:bottom-st*5,y2:bottom-st*5,stroke:'currentColor'});}
   element(svg,'ellipse',{cx:x,cy:y,rx:8,ry:5.5,fill:'currentColor',transform:`rotate(-15 ${x} ${y})`});
   const accidental=displayAccidental(note);if(accidental)element(svg,'text',{x:x-32-((j%2)*17),y:y+5,fill:'currentColor','font-size':21}).textContent=accidental;
  });
 });
}

function renderChord(id){
 const chord=CHORDS[id],svg=document.getElementById('harmonic-keyboard');
 if(!chord||!svg)return;
 const layout=keyboardGeometry(chord.notes);svg.replaceChildren();renderStaff(chord);
 svg.setAttribute('viewBox',`0 0 ${layout.width} 154`);
 svg.setAttribute('aria-label',`${chord.name}: ${chord.notes.join(', ')}`);
 layout.naturals.forEach((n,i)=>{
  const x=i*48;element(svg,'rect',{x,y:3,width:48,height:126,rx:1,class:'white-key'});
  if(layout.active.has(n))element(svg,'circle',{cx:x+24,cy:107,r:5,class:(id==='C/E'||id==='C/G'?0:pitchClass(chord.notes[0]))===n%12?'active-root':'active-note'});
  element(svg,'text',{x:x+24,y:148,'text-anchor':'middle',class:'key-label'}).textContent=sharpNames[n%12];
 });
 for(let i=0;i<layout.naturals.length-1;i++){
  const lower=layout.naturals[i],higher=layout.naturals[i+1];
  if(higher-lower!==2)continue;
  const n=lower+1,x=(i+1)*48-15;
  element(svg,'rect',{x,y:3,width:30,height:73,rx:2,class:'black-key'});
  if(layout.active.has(n))element(svg,'circle',{cx:x+15,cy:57,r:5,class:'active-note'});
 }
 document.getElementById('selected-chord').textContent=`${chord.name} · ${chord.notes.map(n=>n.replace('b','♭').replace('#','♯')).join(' · ')}`;
}
function bind(group,output){
 const el=document.getElementById(group),result=document.getElementById(output);
 el.addEventListener('click',async e=>{
  const button=e.target.closest('button[data-chord],button[data-bar]');if(!button||!el.contains(button))return;
  const bar=button.dataset.bar;
  const id=bar===undefined?button.dataset.chord:THEME_A[Number(bar)];
  const chord=CHORDS[id];if(!chord)return;
  el.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  result.textContent=(bar!==undefined?'Bar '+(Number(bar)+1)+' · ':'')+(chord.numeral?chord.numeral+' · ':'')+chord.name+': '+chord.notes.map(n=>n.replace('b','♭').replace('#','♯')).join(' · ');
  renderChord(id);
  try{
   audio??=new (window.AudioContext||window.webkitAudioContext)();await audio.resume();const at=audio.currentTime+.025;
   chord.notes.forEach(n=>{const oscillator=audio.createOscillator(),gain=audio.createGain();oscillator.type='sine';oscillator.frequency.value=frequency(n);gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(.065,at+.025);gain.gain.exponentialRampToValueAtTime(.0001,at+.65);oscillator.connect(gain).connect(audio.destination);oscillator.start(at);oscillator.stop(at+.67)});
  }catch(e){result.textContent+=' (Audio unavailable; note spelling remains visible.)';}
 });
}
['qualities','diatonic','inversions','sevenths','progression'].forEach(group=>bind(group+'-choices',group+'-result'));
renderChord('C');
