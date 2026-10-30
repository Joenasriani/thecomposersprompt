import {playNotes} from '../../music/audio-engine.js';
import {renderPiano,pianoGeometry} from '../../music/piano-renderer.js';
import {attachPianoInteraction,noteFromMidi} from '../../music/interactive-piano.js';
import {renderCompactChord} from '../../music/compact-notation.js';
import {CHORDS,THEME_A} from '../../music/chapter-6-5.js';
export const keyboardGeometry=pianoGeometry;

function renderChord(id){
 const chord=CHORDS[id],svg=document.getElementById('harmonic-keyboard');
 if(!chord||!svg)return;
 renderCompactChord(document.getElementById('harmonic-staff'),chord);
 renderPiano(svg,{notes:chord.notes,root:(id==='C/E'||id==='C/G'?'C4':chord.notes[0]),playable:true,label:`${chord.name}: ${chord.notes.join(', ')}`});
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
  try{await playNotes(chord.notes,{duration:.65,level:.065});}
  catch(e){result.textContent+=' (Audio unavailable; note spelling remains visible.)';}
 });
}
['qualities','diatonic','inversions','sevenths','progression'].forEach(group=>bind(group+'-choices',group+'-result'));
async function playPianoMidi(value){
 const readout=document.getElementById('piano-note-feedback');
 try{await playNotes([value],{duration:.55,level:.085,replace:false});if(readout)readout.textContent='Played '+noteFromMidi(value);}
 catch{if(readout)readout.textContent='Audio unavailable; selected note '+noteFromMidi(value);}
}

attachPianoInteraction(document.getElementById('harmonic-keyboard'),{onNote:playPianoMidi});

renderChord('C');
