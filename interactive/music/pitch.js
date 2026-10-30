// Chapter-independent scientific pitch utilities (A4 = MIDI 69 = 440 Hz).
const OFFSETS=Object.freeze({C:0,D:2,E:4,F:5,G:7,A:9,B:11});
export function midi(note){
 if(Number.isInteger(note)&&note>=0&&note<=127)return note;
 const m=typeof note==='string'&&/^([A-G])([#b]?)(-?\d+)$/.exec(note);
 if(!m)throw new Error('Invalid scientific pitch: '+note);
 const value=(Number(m[3])+1)*12+OFFSETS[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0);
 if(value<0||value>127)throw new RangeError('MIDI note out of range: '+note);
 return value;
}
export function frequency(note){return 440*Math.pow(2,(midi(note)-69)/12)}
export function pitchClass(note){return midi(note)%12}
