import assert from 'node:assert/strict';
import {ENVELOPE,playNotes} from '../music/audio-engine.js';
const calls=[];
class Gain {
 constructor(){const gain=this.gain={cancelScheduledValues:t=>calls.push(['cancel',t]),setTargetAtTime:(v,t)=>calls.push(['fade',v,t]),setValueAtTime:(v,t)=>calls.push(['set',v,t]),linearRampToValueAtTime:(v,t)=>calls.push(['ramp',v,t])};}
 connect(){return this;}
}
class Osc {
 constructor(){this.frequency={value:0};this.type='sine';}
 connect(g){return g;}
 start(t){calls.push(['start',t,this.frequency.value]);}
 stop(t){calls.push(['stop',t]);}
}
globalThis.AudioContext=class{
 constructor(){this.currentTime=5;this.destination={};}
 async resume(){}
 createOscillator(){return new Osc();}
 createGain(){return new Gain();}
};
await playNotes(['C4','E4','G4']);
assert.equal(calls.filter(c=>c[0]==='start').length,3);
assert.equal(calls.filter(c=>c[0]==='ramp'&&c[1]===0).length,3,'Each note must fade to zero before oscillator stops');
assert.ok(calls.filter(c=>c[0]==='ramp'&&c[1]>0).every(c=>c[2]>=5+ENVELOPE.lead+ENVELOPE.attack));
for(const c of calls.filter(c=>c[0]==='start'))assert.ok(c[2]>0);
await playNotes(['D4']);
assert.ok(calls.some(c=>c[0]==='fade'),'Replacement must fade previous voices');
await assert.rejects(()=>playNotes(['H4']));
console.log('PASS: smooth onset, fade-out, chord voices, replacement, invalid pitch');
