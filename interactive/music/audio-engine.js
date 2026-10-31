import {midi,frequency} from './pitch.js';

// Piano-like additive synthesis: hammer onset, decaying harmonics, damper release.
// Self-contained Web Audio implementation; no external samples or CDN dependency.
export const ENVELOPE=Object.freeze({attack:.008,release:.095,lead:.012});
export const PARTIALS=Object.freeze([
 Object.freeze({ratio:1,amplitude:.72,decay:1}),
 Object.freeze({ratio:2,amplitude:.19,decay:2.9}),
 Object.freeze({ratio:3,amplitude:.09,decay:5.1})
]);
let context=null;
let voices=[];

export async function playNotes(notes,{duration=.9,level=.065,replace=true}={}){
 if(!Array.isArray(notes)||notes.length===0)throw new Error('Nonempty note array required');
 if(!(duration>ENVELOPE.attack+ENVELOPE.release)||!(level>0&&level<=1))throw new RangeError('Invalid playback envelope');
 const pitches=notes.map(note=>frequency(midi(note)));
 const Audio=globalThis.AudioContext||globalThis.webkitAudioContext;
 if(!Audio)throw new Error('Web Audio is unavailable');
 context??=new Audio();
 await context.resume();
 const at=context.currentTime+ENVELOPE.lead;
 // Keep old notes intact until gain has tapered off; a hard cut causes clicks.
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
 const next=[];
 for(const pitch of pitches){
  for(const partial of PARTIALS){
   const osc=context.createOscillator(),gain=context.createGain();
   osc.type='sine';osc.frequency.value=pitch*partial.ratio;
   const amplitude=level*partial.amplitude;
   const attackEnd=at+ENVELOPE.attack;
   const releaseStart=at+duration-ENVELOPE.release;
   const decayAtRelease=amplitude*Math.exp(-partial.decay*(releaseStart-attackEnd));
   gain.gain.setValueAtTime(0,at);
   gain.gain.linearRampToValueAtTime(amplitude,attackEnd);
   gain.gain.exponentialRampToValueAtTime(Math.max(.00001,decayAtRelease),releaseStart);
   gain.gain.linearRampToValueAtTime(0,at+duration);
   osc.connect(gain).connect(context.destination);
   osc.start(at);osc.stop(at+duration+.015);
   next.push({osc,gain});
  }
 }
 voices.push(...next);
}
