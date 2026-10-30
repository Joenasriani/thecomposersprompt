import {playNotes} from '../../music/audio-engine.js';
import {renderPiano} from '../../music/piano-renderer.js';
const $=id=>document.getElementById(id);
const modes={major:{label:'C major',notes:['C4','E4','G4'],pcs:[0,4,7],description:'Major third: E is 4 semitones above C. The perfect fifth G is 7 semitones above C.'},minor:{label:'C minor',notes:['C4','Eb4','G4'],pcs:[0,3,7],description:'Minor third: E♭ is 3 semitones above C. The perfect fifth G remains 7 semitones above C.'}};
let mode='major';
function renderKeyboard(){const data=modes[mode];renderPiano($('keyboard'),{notes:data.notes,root:data.notes[0],label:data.label+' notes highlighted: '+data.notes.join(', ')});}
function setMode(next){mode=next;for(const k of Object.keys(modes)){$(k).setAttribute('aria-pressed',String(k===mode));}
 const data=modes[mode];$('explanation').textContent=data.description;$('chord-name').textContent=data.label.toUpperCase();$('notes').textContent=data.notes.map(n=>n.replace('Eb','E♭')).join(' · ');$('play').textContent='▶ Play '+data.label;renderKeyboard();}
$('major').addEventListener('click',()=>setMode('major'));$('minor').addEventListener('click',()=>setMode('minor'));
$('play').addEventListener('click',async()=>{try{await playNotes(modes[mode].notes,{duration:.72,level:.095});}catch(err){$('feedback').textContent='Audio unavailable in this browser.';console.error(err);}});
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const correct=b.dataset.answer==='E';$('feedback').textContent=correct?'Correct. E4 becomes E♭4, lowering the third by one semitone.':'Not quite. C stays the root and G stays the fifth; compare the middle note.';$('feedback').dataset.correct=String(correct);}));
const theme=$('theme'),media=matchMedia('(prefers-color-scheme: dark)');let stored='system';try{stored=localStorage.getItem('composer-theme')||'system'}catch{}if(!['system','light','dark'].includes(stored))stored='system';theme.value=stored;
function applyTheme(){const light=theme.value==='light'||(theme.value==='system'&&!media.matches);document.documentElement.dataset.theme=light?'light':'dark';document.querySelector('meta[name="theme-color"]').content=light?'#f8f7f3':'#111219';}
theme.addEventListener('change',()=>{try{localStorage.setItem('composer-theme',theme.value)}catch{}applyTheme()});media.addEventListener?.('change',applyTheme);applyTheme();setMode('major');
