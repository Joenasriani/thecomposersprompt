import {midi,pitchClass} from './chapter-6-5.js';
import {noteFromMidi} from './interactive-piano.js';
const NS='http://www.w3.org/2000/svg';
const WHITE=new Set([0,2,4,5,7,9,11]);
const NAMES=['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
export function pianoGeometry(notes){
 const values=notes.map(n=>typeof n==='number'?n:midi(n));
 if(!values.length)throw Error('At least one pitch is required');
 let start=Math.min(...values),end=Math.max(...values);
 while(!WHITE.has(start%12))start--;
 while(!WHITE.has(end%12))end++;
 const naturals=[];for(let n=start;n<=end;n++)if(WHITE.has(n%12))naturals.push(n);
 while(naturals.length<7){let next=naturals.at(-1)+1;while(!WHITE.has(next%12))next++;naturals.push(next);}
 return {naturals,active:new Set(values),width:naturals.length*48};
}
function make(svg,tag,attributes){const el=document.createElementNS(NS,tag);for(const [key,val] of Object.entries(attributes))el.setAttribute(key,String(val));svg.appendChild(el);return el;}
export function renderPiano(svg,{notes,root=notes[0],playable=false,label='Piano keyboard'}){
 const geometry=pianoGeometry(notes),rootPc=pitchClass(typeof root==='number'?noteFromMidi(root):root);
 svg.replaceChildren();svg.setAttribute('viewBox',`0 0 ${geometry.width} 154`);
 svg.setAttribute('preserveAspectRatio','xMidYMid meet');
 svg.setAttribute('aria-label',label);
 geometry.naturals.forEach((n,i)=>{
  const x=i*48,attrs={x,y:3,width:48,height:126,rx:1,class:'white-key'};
  if(playable)Object.assign(attrs,{'data-midi':n,tabindex:0,role:'button','aria-label':'Play '+noteFromMidi(n),class:'white-key piano-touch'});
  make(svg,'rect',attrs);
  if(geometry.active.has(n))make(svg,'circle',{cx:x+24,cy:107,r:5,class:n%12===rootPc?'active-root':'active-note'});
  make(svg,'text',{x:x+24,y:148,'text-anchor':'middle',class:'key-label'}).textContent=NAMES[n%12];
 });
 for(let i=0;i<geometry.naturals.length-1;i++){
  const low=geometry.naturals[i],high=geometry.naturals[i+1];if(high-low!==2)continue;
  const n=low+1,x=(i+1)*48-15,attrs={x,y:3,width:30,height:73,rx:2,class:'black-key'};
  if(playable)Object.assign(attrs,{'data-midi':n,tabindex:0,role:'button','aria-label':'Play '+noteFromMidi(n),class:'black-key piano-touch'});
  make(svg,'rect',attrs);
  if(geometry.active.has(n))make(svg,'circle',{cx:x+15,cy:57,r:5,class:n%12===rootPc?'active-root':'active-note'});
 }
 return geometry;
}
