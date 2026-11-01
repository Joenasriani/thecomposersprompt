import {playNotes} from '../../music/audio-engine.js';
import {renderPiano} from '../../music/piano-renderer.js';
import {renderCompactChord} from '../../music/compact-notation.js';
import {attachPianoInteraction,noteFromMidi} from '../../music/interactive-piano.js';
import {CASES,STEPS} from './definition.js';
const $=id=>document.getElementById(id);let selected=CASES[0];
const pretty=s=>s.replaceAll('b','♭').replaceAll('#','♯');
function show(c){selected=c;renderPiano($('harmonic-keyboard'),{notes:c.notes,root:c.notes[0],playable:true,label:c.label});renderCompactChord($('harmonic-staff'),{name:c.label,notes:c.notes});$('selected-chord').textContent=c.label+' · '+c.notes.map(pretty).join(' · ');document.querySelectorAll('[data-chord]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chord===c.id)));}
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function play(c){try{await playNotes(c.notes,{duration:.62,level:.065});$('audio-status').textContent='Played '+c.label;}catch{$('audio-status').textContent='Audio unavailable. Pitches remain visible.';}}
document.querySelectorAll('[data-chord]').forEach(b=>b.addEventListener('click',()=>{const c=CASES.find(x=>x.id===b.dataset.chord);show(c);play(c);}));
document.querySelectorAll('[data-sequence]').forEach(b=>b.addEventListener('click',async()=>{for(const id of STEPS[Number(b.dataset.sequence)]){const c=CASES.find(x=>x.id===id);show(c);await play(c);await pause(700);}}));
attachPianoInteraction($('harmonic-keyboard'),{onNote:async note=>{try{await playNotes([note],{duration:.5,level:.085,replace:false});$('audio-status').textContent='Played '+noteFromMidi(note);}catch{$('audio-status').textContent='Audio unavailable';}}});
$('play').addEventListener('click',()=>play(selected));
document.querySelectorAll('[data-correct]').forEach(b=>b.addEventListener('click',()=>{$('feedback').textContent=b.dataset.correct==='true'?'Correct. Compare the engraved accidental and hear the harmonic change.':'Not quite. Compare the highlighted notes, then retry.';$('feedback').dataset.correct=b.dataset.correct;}));
$('copy-prompt').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('prompt').value);$('copy-status').textContent='Copied';}catch{$('prompt').select();$('copy-status').textContent='Select and copy the prompt';}});
const theme=$('theme'),media=matchMedia('(prefers-color-scheme: dark)');let stored='system';try{stored=localStorage.getItem('composer-theme')||'system'}catch{}if(!['system','light','dark'].includes(stored))stored='system';theme.value=stored;
function applyTheme(){const light=theme.value==='light'||(theme.value==='system'&&!media.matches);document.documentElement.dataset.theme=light?'light':'dark';document.querySelector('meta[name="theme-color"]').content=light?'#f8f7f3':'#111219';}
theme.addEventListener('change',()=>{try{localStorage.setItem('composer-theme',theme.value)}catch{}applyTheme()});media.addEventListener?.('change',applyTheme);applyTheme();show(selected);
