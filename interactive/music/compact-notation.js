import {staffForPitch} from './staff-model.js';
/**
 * Optional compact notation. Keyboard and audio never depend on this module.
 * VexFlow 5.0.0 is loaded separately, pinned by the lesson HTML.
 */
export function renderCompactChord(container,chord){
 const VF=globalThis.VexFlow;
 if(!VF?.Renderer||!VF?.StaveNote||!VF?.Formatter){container.textContent='Notation unavailable; use the keyboard and note names.';return false;}
 const groups=['treble','bass'].filter(clef=>chord.notes.some(n=>staffForPitch(n)===clef));
 const width=420,height=groups.length*115+25;
 container.replaceChildren();
 try{
  const renderer=new VF.Renderer(container,VF.Renderer.Backends.SVG);
  renderer.resize(width,height);
  const ctx=renderer.getContext();
  ctx.setFillStyle('currentColor');ctx.setStrokeStyle('currentColor');
  groups.forEach((clef,i)=>{
   const stave=new VF.Stave(12,16+i*115,390);
   stave.addClef(clef).setContext(ctx).draw();
   const pitches=chord.notes.filter(n=>staffForPitch(n)===clef);
   const keys=pitches.map(n=>{const m=/^([A-G])([#b]?)(-?\d+)$/.exec(n);if(!m)throw Error('Unsupported pitch: '+n);return m[1].toLowerCase()+'/'+m[3];});
   const note=new VF.StaveNote({clef,keys,duration:'w'});
   pitches.forEach((n,k)=>{const accidental=n.match(/^[A-G]([#b])/);if(accidental)note.addModifier(new VF.Accidental(accidental[1]),k);});
   const voice=new VF.Voice({num_beats:4,beat_value:4});
   voice.addTickables([note]);
   new VF.Formatter().joinVoices([voice]).format([voice],180);
   voice.draw(ctx,stave);
  });
  const image=container.querySelector('svg');
  if(image){image.setAttribute('role','img');image.setAttribute('aria-label',chord.name+' notation: '+chord.notes.join(', '));image.setAttribute('viewBox',`0 0 ${width} ${height}`);image.setAttribute('preserveAspectRatio','xMidYMid meet');image.style.display='block';image.style.width='100%';image.style.maxWidth='100%';image.style.height='auto';image.style.color='var(--text)';image.style.overflow='hidden';}
  return true;
 }catch(err){container.replaceChildren();container.textContent='Notation unavailable; keyboard and note names remain available.';return false;}
}
