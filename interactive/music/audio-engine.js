import {midi,frequency} from './pitch.js';

// Soft, click-free synthesizer envelope. The same timing applies to notes and chords.
export const ENVELOPE=Object.freeze({attack:.035,release:.085,lead:.012});
let context=null;
let voices=[];

export async function playNotes(notes,{duration=.67,level=.065,replace=true}={}){
 if(!Array.isArray(notes)||notes.length===0)throw new Error('Nonempty note array required');
 if(!(duration>ENVELOPE.attack+ENVELOPE.release)||!(level>0&&level<=1))throw new RangeError('Invalid playback envelope');
 const pitches=notes.map(note=>frequency(midi(note)));
 const Audio=globalThis.AudioContext||globalThis.webkitAudioContext;
 if(!Audio)throw new Error('Web Audio is unavailable');
 context??=new Audio();
 await context.resume();
 const at=context.currentTime+ENVELOPE.lead;
 // Fade old voices, rather than abruptly interrupting oscillators and causing clicks.
 if(replace){
  for(const voice of voices){
   try{
    voice.gain.gain.cancelScheduledValues(at);
    voice.gain.gain.setTargetAtTime(0,at,.014);
    voice.osc.stop(at+.1);
   }catch{}
  }
  voices=[];
 }
 for(const pitch of pitches){
  const osc=context.createOscillator(),gain=context.createGain();
  osc.type='sine';osc.frequency.value=pitch;
  gain.gain.setValueAtTime(0,at);
  gain.gain.linearRampToValueAtTime(level,at+ENVELOPE.attack);
  gain.gain.setValueAtTime(level,at+duration-ENVELOPE.release);
  gain.gain.linearRampToValueAtTime(0,at+duration);
  osc.connect(gain).connect(context.destination);
  osc.start(at);osc.stop(at+duration+.015);
  voices.push({osc,gain});
 }
}
