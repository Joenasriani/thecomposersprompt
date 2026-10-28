import {renderPiano,pianoGeometry} from '../../music/piano-renderer.js';
import {attachPianoInteraction,noteFromMidi} from '../../music/interactive-piano.js';
import {renderCompactChord} from '../../music/compact-notation.js';
import {CHORDS,THEME_A,frequency,midi} from '../../music/chapter-6-5.js';
let audio;
export const keyboardGeometry=pianoGeometry;

function renderChord(id){
 const chord=CHORDS[id],svg=document.getElementById('harmonic-keyboard');
 if(!chord||!svg)return;
 renderCompactChord(document.getElementById('harmonic-staff'),chord);
 renderPiano(svg,{notes:chord.notes,root:chord.notes[0],playable:true,label:`${chord.name}: ${chord.notes.join(', ')}`});
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
async function playPianoMidi(value){
 try{
  audio??=new (window.AudioContext||window.webkitAudioContext)();
  await audio.resume();
  const at=audio.currentTime+.012;
  const oscillator=audio.createOscillator(),gain=audio.createGain();
  oscillator.type='sine';oscillator.frequency.value=440*Math.pow(2,(value-69)/12);
  gain.gain.setValueAtTime(.0001,at);
  gain.gain.exponentialRampToValueAtTime(.085,at+.016);
  gain.gain.exponentialRampToValueAtTime(.0001,at+.55);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(at);oscillator.stop(at+.57);
  const readout=document.getElementById('piano-note-feedback');
  if(readout)readout.textContent='Played '+noteFromMidi(value);
 }catch{
  const readout=document.getElementById('piano-note-feedback');
  if(readout)readout.textContent='Audio unavailable; selected note '+noteFromMidi(value);
 }
}
attachPianoInteraction(document.getElementById('harmonic-keyboard'),{onNote:playPianoMidi});

renderChord('C');
