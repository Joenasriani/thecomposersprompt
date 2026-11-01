import {renderPiano} from '../music/piano-renderer.js';
import {playNotes} from '../music/audio-engine.js';
import {attachPianoInteraction,noteFromMidi} from '../music/interactive-piano.js';
import {renderCompactChord} from '../music/compact-notation.js';
const data=JSON.parse(document.getElementById('chapter-data').textContent),$=id=>document.getElementById(id);let selected=0;
const chapter=(location.pathname.split('/').find(segment=>segment.startsWith('chapter-'))||'').slice(8);
const names={'6':['C major · Ionian','A minor · Aeolian','D Dorian'],'12':['Passing tone · C–D–E','Upper neighbor · C–D–C'],'13':['Close-position triad','Open-position triad'],'14':['Major triad','Major seventh','Suspended fourth'],'15':['C major · tonic','F minor · borrowed iv'],'16':['A7 · V/ii','D minor · ii'],'17':['C major · root position','C/E · first inversion'],'18':['C major · parallel planing','D major · parallel planing'],'19':['Cmaj7 · tonic color','Dm7 · predominant color'],'20':['C major · initial tonic','D7 · dominant of G','G major · destination tonic'],'21':['Low-register layer','High-register layer'],'22':['Specified tonic','Contrasting tonic'],'23':['Major baseline','Minor-third variation'],'24':['Included sonority','Contrasting sonority'],'25':['Original harmony','Replacement harmony'],'26':['Major-triad reference','Minor-triad reference'],'27':['Major third','Minor third'],'28':['Major-triad identification','Minor-triad confusion'],'28-5':['A minor baseline','A major alteration'],'29':['Major-triad reference','Minor-triad reference'],'30':['Major-triad reference','Minor-triad reference'],'31':['C-major source','D-major transposition'],'31-5':['C-major theoretical reference','D-minor theoretical reference'],'32':['Tonic · I','Predominant · IV','Dominant seventh · V7']};
if(names[chapter])data.examples=data.examples.map((a,i)=>[names[chapter][i]||a[0],...a.slice(1)]);
const display=n=>n.replace(/b(?=\d)/,'♭').replace(/#(?=\d)/,'♯');
function render(){const item=data.examples[selected],notes=item.slice(1);$('reference-controls').replaceChildren();data.examples.forEach((entry,i)=>{let b=document.createElement('button');b.type='button';b.textContent=entry[0];b.setAttribute('aria-pressed',String(i===selected));b.addEventListener('click',()=>{selected=i;render()});$('reference-controls').append(b)});$('current-pitches').textContent=item[0]+' · '+notes.map(display).join(' · ');renderPiano($('reference-piano'),{notes,root:notes[0],playable:true,label:item[0]+': '+notes.join(', ')});renderCompactChord($('reference-staff'),{name:item[0],notes});$('reference-piano-feedback').textContent='Tap a piano key to hear its pitch.';}
attachPianoInteraction($('reference-piano'),{onNote:async midi=>{try{await playNotes([midi],{duration:.55,level:.085,replace:false});$('reference-piano-feedback').textContent='Played '+noteFromMidi(midi)}catch{$('reference-piano-feedback').textContent='Audio unavailable; selected '+noteFromMidi(midi)}}});
$('play-reference').addEventListener('click',async()=>{let notes=data.examples[selected].slice(1);try{await playNotes(notes,{duration:.5,level:.075,spacing:data.kind==='chord'||data.kind==='text'?0:.49});$('reference-piano-feedback').textContent='Played '+data.examples[selected][0]}catch{$('reference-piano-feedback').textContent='Audio unavailable; written pitch reference remains visible.'}});
$('copy-reference').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(data.prompt);$('copy-status').textContent='Copied'}catch{$('copy-status').textContent='Clipboard unavailable; select the specification to copy.'}});
const theme=$('theme');let stored='system';try{stored=localStorage.getItem('composer-theme')||'system'}catch{}theme.value=['system','light','dark'].includes(stored)?stored:'system';const media=matchMedia('(prefers-color-scheme: dark)');function applyTheme(){document.documentElement.dataset.theme=theme.value==='dark'||(theme.value==='system'&&media.matches)?'dark':'light';try{localStorage.setItem('composer-theme',theme.value)}catch{}}theme.addEventListener('change',applyTheme);media.addEventListener?.('change',applyTheme);applyTheme();render();
// Universal prompt-panel control: every copyable prompt, including manuscript examples.
const COPY_ICON='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
function addCopyControl(panel,{textSource,existingButton=null}={}){
  panel.classList.add('copyable-prompt');
  const button=existingButton||document.createElement('button');
  button.type='button';button.className='prompt-copy-icon';button.setAttribute('aria-label','Copy prompt to clipboard');button.title='Copy prompt';button.innerHTML=COPY_ICON;
  const status=document.createElement('span');status.className='prompt-copy-feedback';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  if(existingButton)existingButton.replaceWith(document.createComment('copy moved into prompt'));panel.prepend(button,status);
  button.addEventListener('click',async()=>{
    const text=typeof textSource==='function'?textSource():(()=>{const clone=panel.cloneNode(true);clone.querySelectorAll('.prompt-copy-icon,.prompt-copy-feedback').forEach(e=>e.remove());return clone.innerText.trim()})();
    try{
      if(!navigator.clipboard?.writeText)throw Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(text);status.textContent='Copied';button.title='Copied';
    }catch{
      const fallback=document.createElement('textarea');fallback.value=text;fallback.setAttribute('readonly','');fallback.style.position='fixed';fallback.style.left='-9999px';document.body.append(fallback);fallback.select();
      let ok=false;try{ok=document.execCommand('copy')}catch{}fallback.remove();
      status.textContent=ok?'Copied':'Select the prompt text to copy';
    }
  });
}
addCopyControl($('reference-prompt'),{textSource:()=>data.prompt,existingButton:$('copy-reference')});
for(const block of document.querySelectorAll('.chapter-manuscript blockquote')){
  addCopyControl(block,{textSource:()=>Array.from(block.children).filter(el=>!el.classList.contains('prompt-copy-icon')&&!el.classList.contains('prompt-copy-feedback')).map(el=>el.innerText).join('\n\n').trim()});
}

// Add icon controls to standalone manuscript code samples and multiline preformatted prompts.
for(const block of document.querySelectorAll('.chapter-manuscript pre')){
  if(!block.closest('.copyable-prompt'))addCopyControl(block,{textSource:()=>block.querySelector('code')?.textContent||block.textContent});
}
// A scale or melodic collection must never be presented as an engraved simultaneous chord.
if(data.kind==='scale'||data.kind==='interval'){
 const label=document.createElement('p');label.className='reference-help';
 label.textContent=data.kind==='scale'?'Notation shows the pitch collection; the playable example is sequential, not a simultaneous chord.':'Notation shows the pitch set; hear the selected pitches sequentially to study melodic interval distance.';
 $('reference-staff').after(label);
}

import './chapter-practice.js';
