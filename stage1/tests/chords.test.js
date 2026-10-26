import test from 'node:test';
import assert from 'node:assert/strict';
import {CHORDS,pitchClass,validateChords} from '../src/music/chords.js';
test('the canonical chord definitions are internally consistent',()=>assert.equal(validateChords(),true));
test('four chord options have expected pitch classes',()=>{
 assert.deepEqual(CHORDS.maj7.steps,[0,4,7,11]);
 assert.deepEqual(CHORDS.minor.steps,[0,3,7]);
 assert.deepEqual(CHORDS.sus4.steps,[0,5,7]);
 assert.deepEqual(CHORDS.dom7.steps,[0,4,7,10]);
});
test('enharmonic pitch spelling maps to a pitch class correctly',()=>{
 assert.equal(pitchClass('Eb4'),3);assert.equal(pitchClass('Bb4'),10);assert.equal(pitchClass('C4'),0);
});
test('incorrect music cannot enter the rendering pipeline',()=>{
 assert.throws(()=>validateChords({bad:{name:'X',notes:['C4','Eb4'],keys:['c/4','e/4'],steps:[0,4],acc:[[1,'b']]}}),/Pitch mismatch/);
});
