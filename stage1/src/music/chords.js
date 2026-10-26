// Single source of truth for the Stage 1 chord study.
// Spellings (Eb/Bb), pitch classes, and VexFlow notation are intentionally explicit.
export const CHORDS = Object.freeze({
 maj7:{name:'Cmaj7',notes:['C4','E4','G4','B4'],steps:[0,4,7,11],keys:['c/4','e/4','g/4','b/4'],acc:[]},
 minor:{name:'Cm',notes:['C4','Eb4','G4'],steps:[0,3,7],keys:['c/4','e/4','g/4'],acc:[[1,'b']]},
 sus4:{name:'Csus4',notes:['C4','F4','G4'],steps:[0,5,7],keys:['c/4','f/4','g/4'],acc:[]},
 dom7:{name:'C7',notes:['C4','E4','G4','Bb4'],steps:[0,4,7,10],keys:['c/4','e/4','g/4','b/4'],acc:[[3,'b']]}
});
export function pitchClass(note){
 const m=/^([A-G])([#b]?)(-?\d+)$/.exec(note);
 if(!m)throw new Error('Invalid scientific pitch: '+note);
 const base={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]];
 return (base+(m[2]==='#'?1:m[2]==='b'?-1:0)+12)%12;
}
export function validateChords(chords=CHORDS){
 for(const [id,chord] of Object.entries(chords)){
  if(!chord.name||!Array.isArray(chord.notes)||chord.notes.length<2)throw new Error('Invalid chord: '+id);
  if(chord.notes.length!==chord.steps.length||chord.notes.length!==chord.keys.length)throw new Error('Mismatched musical arrays: '+id);
  if(chord.notes.some((note,i)=>pitchClass(note)!==chord.steps[i]))throw new Error('Pitch mismatch: '+id);
  for(const [index,accidental] of chord.acc){
   if(index<0||index>=chord.notes.length||!['b','#','n'].includes(accidental))throw new Error('Invalid accidental: '+id);
  }
 }
 return true;
}
validateChords();
