import './lesson.css';
const $=id=>document.getElementById(id);
const modes={major:{label:'C major',notes:['C4','E4','G4'],pcs:[0,4,7],description:'Major third: E is 4 semitones above C. The perfect fifth G is 7 semitones above C.'},minor:{label:'C minor',notes:['C4','Eb4','G4'],pcs:[0,3,7],description:'Minor third: E♭ is 3 semitones above C. The perfect fifth G remains 7 semitones above C.'}};
let mode='major';
const white=[0,2,4,5,7,9,11,12], blacks=[{pc:1,left:0},{pc:3,left:1},{pc:6,left:3},{pc:8,left:4},{pc:10,left:5}];
const NS='http://www.w3.org/2000/svg';
function node(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));parent.appendChild(e);return e;}
function renderKeyboard(){
 const svg=$('keyboard');svg.replaceChildren();const w=52,x=2,y=9,h=133;
 white.forEach((pc,i)=>{const isOn=modes[mode].pcs.includes(pc);node('rect',{x:x+i*w,y,width:w,height:h,rx:2,class:'white-key'},svg);if(isOn)node('circle',{cx:x+i*w+w/2,cy:114,r:6,class:pc===0?'active-root':'active-note'},svg);const names=['C','D','E','F','G','A','B','C'];node('text',{x:x+i*w+w/2,y:153,'text-anchor':'middle',class:'key-label'},svg).textContent=names[i];});
 blacks.forEach(({pc,left})=>{const leftEdge=x+(left+1)*w-16;node('rect',{x:leftEdge,y,width:32,height:78,rx:2,class:'black-key'},svg);if(modes[mode].pcs.includes(pc))node('circle',{cx:leftEdge+16,cy:61,r:6,class:'active-note'},svg);});
 svg.setAttribute('aria-label',modes[mode].label+' notes highlighted: '+modes[mode].notes.join(', '));
}
function setMode(next){mode=next;for(const k of Object.keys(modes)){$(k).setAttribute('aria-pressed',String(k===mode));}
 const data=modes[mode];$('explanation').textContent=data.description;$('chord-name').textContent=data.label.toUpperCase();$('notes').textContent=data.notes.map(n=>n.replace('Eb','E♭')).join(' · ');$('play').textContent='▶ Play '+data.label;renderKeyboard();}
$('major').addEventListener('click',()=>setMode('major'));$('minor').addEventListener('click',()=>setMode('minor'));
let ctx=null,activeVoices=[];
function stopVoices(){const now=ctx?.currentTime||0;for(const v of activeVoices){try{v.gain.gain.cancelScheduledValues(now);v.gain.gain.setTargetAtTime(0,now,.016);v.osc.stop(now+.12);}catch{}}activeVoices=[];}
function hz(note){const m=/^([A-G])([#b]?)(\d)$/.exec(note);const base={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]];const semitone=base+(m[2]==='#'?1:m[2]==='b'?-1:0);return 440*Math.pow(2,((+m[3]+1)*12+semitone-69)/12);}
$('play').addEventListener('click',async()=>{try{ctx??=new (window.AudioContext||window.webkitAudioContext)();await ctx.resume();stopVoices();const now=ctx.currentTime+.045;for(const note of modes[mode].notes){const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sine';osc.frequency.value=hz(note);gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(.095,now+.014);gain.gain.exponentialRampToValueAtTime(.035,now+.18);gain.gain.setValueAtTime(.035,now+.53);gain.gain.exponentialRampToValueAtTime(.0001,now+.72);osc.connect(gain).connect(ctx.destination);osc.start(now);osc.stop(now+.74);activeVoices.push({osc,gain});}}catch(err){$('feedback').textContent='Audio unavailable in this browser.';console.error(err);}});
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const correct=b.dataset.answer==='E';$('feedback').textContent=correct?'Correct. E4 becomes E♭4, lowering the third by one semitone.':'Not quite. C stays the root and G stays the fifth; compare the middle note.';$('feedback').dataset.correct=String(correct);}));
const theme=$('theme'),media=matchMedia('(prefers-color-scheme: dark)');let stored='system';try{stored=localStorage.getItem('composer-theme')||'system'}catch{}if(!['system','light','dark'].includes(stored))stored='system';theme.value=stored;
function applyTheme(){const light=theme.value==='light'||(theme.value==='system'&&!media.matches);document.documentElement.dataset.theme=light?'light':'dark';document.querySelector('meta[name="theme-color"]').content=light?'#f8f7f3':'#111219';}
theme.addEventListener('change',()=>{try{localStorage.setItem('composer-theme',theme.value)}catch{}applyTheme()});media.addEventListener?.('change',applyTheme);applyTheme();setMode('major');
