import {CHORDS,THEME_A,frequency} from '../../music/chapter-6-5.js';
let audio;
function render(group,output,extra=()=>'',ids=null){
 const el=document.getElementById(group),result=document.getElementById(output);
 el.addEventListener('click',async e=>{const button=e.target.closest('button[data-chord],button[data-bar]');if(!button||!el.contains(button))return;
 const bar=button.dataset.bar;const id=bar===undefined?button.dataset.chord:THEME_A[Number(bar)];
 const chord=CHORDS[id];if(!chord)return;
 el.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 result.textContent=(bar!==undefined?'Bar '+(Number(bar)+1)+' · ':'')+(chord.numeral?chord.numeral+' · ':'')+chord.name+': '+chord.notes.map(n=>n.replace(/b(?=\d)/,'♭').replace(/#(?=\d)/,'♯')).join(' · ');
 try{audio??=new (window.AudioContext||window.webkitAudioContext)();await audio.resume();const at=audio.currentTime+.025;
 chord.notes.forEach(n=>{const oscillator=audio.createOscillator(),gain=audio.createGain();oscillator.type='sine';oscillator.frequency.value=frequency(n);gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(.065,at+.025);gain.gain.exponentialRampToValueAtTime(.0001,at+.65);oscillator.connect(gain).connect(audio.destination);oscillator.start(at);oscillator.stop(at+.67)});
 }catch(e){result.textContent+=' (Audio unavailable; note spelling remains visible.)';}
 });
}
render('qualities-choices','qualities-result');
render('diatonic-choices','diatonic-result');
render('inversions-choices','inversions-result');
render('sevenths-choices','sevenths-result');
render('progression-choices','progression-result');
