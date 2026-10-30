import {pitchClass} from './pitch.js';
export {midi,frequency,pitchClass} from './pitch.js';
// Chapter 6.5 pitch and harmonic reference. Scientific pitch notation; A4=440 Hz.
export const CHORDS=Object.freeze({
 C:{name:'C major',notes:['C4','E4','G4'],semitones:[0,4,7],numeral:'I'},
 Cm:{name:'C minor',notes:['C4','Eb4','G4'],semitones:[0,3,7]},
 Cdim:{name:'C diminished',notes:['C4','Eb4','Gb4'],semitones:[0,3,6]},
 Caug:{name:'C augmented',notes:['C4','E4','G#4'],semitones:[0,4,8]},
 Dm:{name:'D minor',notes:['D4','F4','A4'],numeral:'ii'},
 Em:{name:'E minor',notes:['E4','G4','B4'],numeral:'iii'},
 F:{name:'F major',notes:['F4','A4','C5'],numeral:'IV'},
 G:{name:'G major',notes:['G4','B4','D5'],numeral:'V'},
 Am:{name:'A minor',notes:['A4','C5','E5'],numeral:'vi'},
 Bdim:{name:'B diminished',notes:['B3','D4','F4'],numeral:'vii°'},
 'C/E':{name:'C major, first inversion',notes:['E4','G4','C5'],bass:'E4'},
 'C/G':{name:'C major, second inversion',notes:['G3','C4','E4'],bass:'G3'},
 Cmaj7:{name:'C major seventh',notes:['C4','E4','G4','B4']},
 C7:{name:'C dominant seventh',notes:['C4','E4','G4','Bb4']},
 Cm7:{name:'C minor seventh',notes:['C4','Eb4','G4','Bb4']},
 G7:{name:'G dominant seventh',notes:['G4','B4','D5','F5'],numeral:'V7'},
});
export const DIATONIC=['C','Dm','Em','F','G','Am','Bdim'];
export const THEME_A=['C','G','Am','F','C','F','G','C'];
export function chordPcs(id){return CHORDS[id].notes.map(pitchClass)}
