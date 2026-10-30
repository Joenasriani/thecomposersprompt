import {midi,frequency} from './pitch.js';
// One AudioContext shared across lessons; always called from a user gesture.
let context=null;let voices=[];
export async function playNotes(notes,{duration=.67,level=.065,replace=true}={}){
 const Audio=globalThis.AudioContext||globalThis.webkitAudioContext;
 if(!Audio)throw new Error('Web Audio is unavailable');
 context??=new Audio();
 await context.resume();
 const at=context.currentTime+.025;
 if(replace){for(const voice of voices){try{voice.gain.gain.cancelScheduledValues(at);voice.gain.gain.setTargetAtTime(0,at,.012);voice.osc.stop(at+.1);}catch{}}voices=[];}
 for(const note of notes){const osc=context.createOscillator(),gain=context.createGain();
  osc.type='sine';osc.frequency.value=frequency(midi(note));
  gain.gain.setValueAtTime(.0001,at);
  gain.gain.exponentialRampToValueAtTime(level,at+.025);
  gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
  osc.connect(gain).connect(context.destination);osc.start(at);osc.stop(at+duration+.02);
  voices.push({osc,gain});
 }
}
