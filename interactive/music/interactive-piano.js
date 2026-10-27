// Reusable SVG piano interactions. This module does not change keyboard geometry.
export function attachPianoInteraction(svg,{onNote}={}){
 if(!svg||typeof onNote!=='function')throw new Error('Piano element and onNote required');
 function activate(target){
  const key=target?.closest?.('[data-midi]');
  if(!key||!svg.contains(key))return;
  const value=Number(key.dataset.midi);
  if(!Number.isInteger(value))return;
  onNote(value);
 }
 svg.addEventListener('pointerdown',event=>{const target=event.target?.closest?.('[data-midi]');if(!target)return;event.preventDefault();activate(target);});
 svg.addEventListener('keydown',event=>{if(event.key!=='Enter'&&event.key!==' ')return;const target=event.target?.closest?.('[data-midi]');if(!target)return;event.preventDefault();activate(target);});
 return {activate};
}
export function noteFromMidi(value){
 const names=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
 if(!Number.isInteger(value)||value<0||value>127)throw new RangeError('MIDI note out of range');
 return names[value%12]+(Math.floor(value/12)-1);
}
