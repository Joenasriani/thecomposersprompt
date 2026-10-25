import './style.css';
import * as THREE from 'three';
import * as Tone from 'tone';
import { Renderer, Stave, StaveNote, Voice, Formatter, Accidental } from 'vexflow';

const data = {
 maj7:{name:'Cmaj7',notes:['C4','E4','G4','B4'],steps:[0,4,7,11],keys:['c/4','e/4','g/4','b/4'],acc:[]},
 minor:{name:'Cm',notes:['C4','Eb4','G4'],steps:[0,3,7],keys:['c/4','e/4','g/4'],acc:[[1,'b']]},
 sus4:{name:'Csus4',notes:['C4','F4','G4'],steps:[0,5,7],keys:['c/4','f/4','g/4'],acc:[]},
 dom7:{name:'C7',notes:['C4','E4','G4','Bb4'],steps:[0,4,7,10],keys:['c/4','e/4','g/4','b/4'],acc:[[3,'b']]}
};
const $=id=>document.getElementById(id),select=$('harmony'),visual=$('visual'),engine=$('engine'),score=$('score'),status=$('status');
let synth=null,webgl=null,scene,camera,group,renderer,animation,resizeObserver;
function noteVisuals(chord){
 if(!group)return;
 while(group.children.length){const obj=group.children[0];group.remove(obj);obj.traverse?.(item=>{item.geometry?.dispose?.();item.material?.dispose?.()})}
 const pts=chord.steps.map(step=>{const a=step*Math.PI/6-Math.PI/2;return new THREE.Vector3(Math.cos(a)*2.45,Math.sin(a)*2.45,Math.sin(a*2)*.55)});
 pts.forEach((p,i)=>{const sphere=new THREE.Mesh(new THREE.SphereGeometry(i===0?.19:.12,24,16),new THREE.MeshStandardMaterial({color:i===0?0xdcf46c:0xe8eaf0,roughness:.45}));sphere.position.copy(p);group.add(sphere)});
 const linePoints=[...pts,pts[0]];if(linePoints.length>2){const geom=new THREE.BufferGeometry().setFromPoints(linePoints);group.add(new THREE.Line(geom,new THREE.LineBasicMaterial({color:0x8795a6,transparent:true,opacity:.8})))}
}
function init3d(){
 try{
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));
 visual.appendChild(renderer.domElement);$('fallback').style.display='none';
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(46,1,.1,100);camera.position.set(0,0,11);
 group=new THREE.Group();scene.add(group);scene.add(new THREE.AmbientLight(0xffffff,1.6));const light=new THREE.PointLight(0xffffff,65,30);light.position.set(4,4,7);scene.add(light);
 const guide=new THREE.Mesh(new THREE.TorusGeometry(2.45,.008,4,128),new THREE.MeshBasicMaterial({color:0x657080,transparent:true,opacity:.55}));scene.add(guide);
 const resize=()=>{const w=Math.max(1,visual.clientWidth),h=Math.max(1,visual.clientHeight);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
 resizeObserver=new ResizeObserver(resize);resizeObserver.observe(visual);resize();
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const frame=()=>{if(!reduce)group.rotation.y+=.0015;renderer.render(scene,camera);animation=requestAnimationFrame(frame)};frame();engine.textContent='THREE.JS / LIVE';webgl=true;
 }catch(err){console.warn('WebGL disabled',err);renderer?.domElement?.remove();renderer?.dispose();engine.textContent='2D FALLBACK';webgl=false;initFallback()}
}
function initFallback(){
 const canvas=$('fallback'),ctx=canvas.getContext('2d');if(!ctx)return;
 const render=()=>{const w=visual.clientWidth,h=visual.clientHeight,d=Math.min(devicePixelRatio||1,2);canvas.width=w*d;canvas.height=h*d;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);
 const pts=data[select.value].steps.map(step=>{const a=step*Math.PI/6-Math.PI/2;return [w/2+Math.cos(a)*Math.min(w,h)*.32,h/2+Math.sin(a)*Math.min(w,h)*.32]});ctx.strokeStyle='#8191a1';ctx.lineWidth=1.5;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.stroke();pts.forEach((p,i)=>{ctx.beginPath();ctx.arc(...p,i===0?9:6,0,Math.PI*2);ctx.fillStyle=i===0?'#dcf46c':'#efeee7';ctx.fill()})};
 window.addEventListener('resize',render);select.addEventListener('change',render);render();
}
function notation(chord){
 score.replaceChildren();try{
 const inner=document.createElement('div');score.appendChild(inner);
 const vex=new Renderer(inner,Renderer.Backends.SVG);vex.resize(330,112);const ctx=vex.getContext();ctx.setFillStyle('#f1efe7');ctx.setStrokeStyle('#f1efe7');
 const stave=new Stave(5,10,320);stave.addClef('treble').setContext(ctx).draw();
 const note=new StaveNote({clef:'treble',keys:chord.keys,duration:'w'});chord.acc.forEach(([i,type])=>note.addModifier(new Accidental(type),i));
 const voice=new Voice({numBeats:4,beatValue:4});voice.addTickables([note]);new Formatter().joinVoices([voice]).format([voice],240);voice.draw(ctx,stave);
 }catch(e){console.warn('Notation error',e);score.textContent='Notation unavailable on this device.'}
}
async function sound(notes){
 try{await Tone.start();if(!synth){synth=new Tone.PolySynth(Tone.Synth,{oscillator:{type:'sine'},envelope:{attack:.025,decay:.2,sustain:.35,release:.7}}).toDestination();synth.volume.value=-11}
 synth.triggerAttackRelease(notes,'2n');status.textContent=notes.join(' · ')+' sounding';$('state').textContent='SOUNDING';setTimeout(()=>{$('state').textContent='READY'},1100)
 }catch(error){status.textContent='Audio unavailable – check your browser sound settings.';console.error(error)}
}
function update(){
 const chord=data[select.value];$('pitches').replaceChildren();
 chord.notes.forEach(note=>{const button=document.createElement('button');button.type='button';button.textContent=note;button.setAttribute('aria-label','Play '+note);button.addEventListener('click',()=>sound([note]));$('pitches').appendChild(button)});
 notation(chord);if(webgl)noteVisuals(chord);status.textContent=chord.name+' selected. Press play to hear it.';$('state').textContent=chord.name.toUpperCase();
}
select.addEventListener('change',update);$('play').addEventListener('click',()=>sound(data[select.value].notes));
init3d();update();
