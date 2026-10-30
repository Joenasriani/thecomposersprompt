import assert from 'node:assert/strict';
import {CHORDS,DIATONIC,THEME_A,midi,frequency,pitchClass,chordPcs} from '../music/chapter-6-5.js';
assert.equal(midi('A4'),69);
assert.ok(Math.abs(frequency('A4')-440)<.00001);
assert.equal(midi('Eb4'),63);
assert.equal(midi('D#4'),63);
assert.equal(pitchClass('C5'),0);
const triads={C:[0,4,7],Cm:[0,3,7],Cdim:[0,3,6],Caug:[0,4,8]};
for(const [id,offsets] of Object.entries(triads)){const base=midi(CHORDS[id].notes[0]);assert.deepEqual(CHORDS[id].notes.map(n=>midi(n)-base),offsets,id);}
assert.deepEqual(DIATONIC,['C','Dm','Em','F','G','Am','Bdim']);
assert.deepEqual(THEME_A,['C','G','Am','F','C','F','G','C']);
assert.deepEqual(CHORDS['C/E'].notes,['E4','G4','C5']);
assert.deepEqual(CHORDS['C/G'].notes,['G3','C4','E4']);
for(const id of ['C','C/E','C/G'])assert.deepEqual(new Set(chordPcs(id)),new Set([0,4,7]));
assert.deepEqual(CHORDS.Cmaj7.notes,['C4','E4','G4','B4']);
assert.deepEqual(CHORDS.C7.notes,['C4','E4','G4','Bb4']);
assert.deepEqual(CHORDS.G7.notes,['G4','B4','D5','F5']);
for(const id of [...DIATONIC,...THEME_A]) assert.ok(CHORDS[id],id);
assert.throws(()=>midi('H4'));
console.log('PASS: pitches, enharmonics, quality intervals, diatonic triads, inversions, sevenths, Theme A.');

import {midi as coreMidi,frequency as coreFrequency,pitchClass as corePc} from '../music/pitch.js';
assert.equal(coreMidi('C4'),60);assert.equal(coreMidi('D#4'),coreMidi('Eb4'));assert.equal(coreFrequency('A4'),440);assert.equal(corePc('B3'),11);assert.throws(()=>coreMidi('H4'));assert.throws(()=>coreMidi('C-5'));
