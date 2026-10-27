import assert from 'node:assert/strict';
import {noteFromMidi} from '../music/interactive-piano.js';
import {midi} from '../music/chapter-6-5.js';
for(const note of [48,59,60,61,63,64,66,67,69,71,72,76,79])assert.equal(midi(noteFromMidi(note)),note);
assert.equal(noteFromMidi(60),'C4');
assert.equal(noteFromMidi(63),'Eb4');
assert.equal(noteFromMidi(69),'A4');
assert.throws(()=>noteFromMidi(-1),RangeError);
console.log('PASS: playable piano key names map exactly to MIDI sounding pitches');
