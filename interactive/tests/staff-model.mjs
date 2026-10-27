import assert from 'node:assert/strict';
import {parseStaffPitch,diatonicIndex,staffSteps,displayAccidental,staffForPitch} from '../music/staff-model.js';
assert.deepEqual(parseStaffPitch('Eb4'),{letter:'E',accidental:'b',octave:4});
assert.equal(diatonicIndex('E4'),diatonicIndex('Eb4'));
assert.equal(staffSteps('E4'),0); // treble bottom line
assert.equal(staffSteps('F4'),1); // adjacent space
assert.equal(staffSteps('G4'),2);
assert.equal(staffSteps('C4'),-2); // ledger below treble
assert.equal(staffSteps('G2','bass'),0); // bass bottom line
assert.equal(staffSteps('B3','bass'),9);
assert.equal(displayAccidental('Gb4'),'♭');
assert.equal(displayAccidental('G#4'),'♯');
assert.equal(staffForPitch('G3'),'bass');
assert.equal(staffForPitch('C4'),'treble');
assert.throws(()=>parseStaffPitch('H4'));
console.log('PASS: staff diatonic positions, accidental spelling and clef ranges');
