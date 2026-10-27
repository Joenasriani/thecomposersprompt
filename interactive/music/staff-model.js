// Deterministic diatonic staff coordinates, independent of enharmonic MIDI pitch.
// Treble bottom line E4; bass bottom line G2. One staff step = line/space.
const LETTERS=['C','D','E','F','G','A','B'];
export function parseStaffPitch(note){
 const m=/^([A-G])([#b]?)(-?\d+)$/.exec(note);
 if(!m)throw new Error('Invalid staff note: '+note);
 return {letter:m[1],accidental:m[2],octave:Number(m[3])};
}
export function diatonicIndex(note){
 const p=parseStaffPitch(note);
 return p.octave*7+LETTERS.indexOf(p.letter);
}
export function staffSteps(note,clef='treble'){
 if(!['treble','bass'].includes(clef))throw new Error('Unknown clef');
 return diatonicIndex(note)-diatonicIndex(clef==='treble'?'E4':'G2');
}
export function displayAccidental(note){
 const a=parseStaffPitch(note).accidental;
 return a==='#'?'♯':a==='b'?'♭':'';
}
export function staffForPitch(note){
 return diatonicIndex(note)<diatonicIndex('C4')?'bass':'treble';
}
