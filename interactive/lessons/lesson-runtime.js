import {playNotes} from '../music/audio-engine.js';
export function mountLesson({definition, examples}){
 if(!definition||!Array.isArray(examples))throw Error('Validated lesson and examples required');
 const root=document.querySelector('[data-lesson-root]');if(!root)throw Error('Lesson root missing');
 const article=(title,body)=>{const s=document.createElement('section');s.className='section';const h=document.createElement('h2');h.textContent=title;s.append(h);for(const paragraph of body){const p=document.createElement('p');p.textContent=paragraph;s.append(p);}return s;};
 const h=document.createElement('div');h.className='intro';const eyebrow=document.createElement('p');eyebrow.className='eyebrow';eyebrow.textContent=definition.id.replace('chapter-','Chapter ').replace('-','.');const title=document.createElement('h1');title.textContent=definition.title;h.append(eyebrow,title);root.append(h);
 for(const example of examples){
  const section=article(example.title,example.paragraphs);
  if(example.notes?.length){const panel=document.createElement('div');panel.className='panel';const key=document.createElement('p');key.className='meta';key.textContent='Pitch specification: '+example.notes.join(' · ');panel.append(key);const btn=document.createElement('button');btn.textContent='Hear the specified notes';btn.type='button';btn.addEventListener('click',()=>playNotes(example.notes).catch(()=>{btn.textContent='Audio unavailable; note names remain visible.'}));panel.append(btn);section.append(panel);}
  if(example.prompt){const box=document.createElement('div');box.className='panel';const label=document.createElement('p');label.className='eyebrow';label.textContent='Compositional prompt';const pre=document.createElement('p');pre.className='spec-output';pre.textContent=example.prompt;box.append(label,pre);section.append(box);}
  if(example.question){const box=document.createElement('div');box.className='panel';const question=document.createElement('p');question.textContent=example.question.text;box.append(question);const feedback=document.createElement('p');feedback.setAttribute('role','status');const controls=document.createElement('div');controls.className='controls';example.question.options.forEach((option,i)=>{const btn=document.createElement('button');btn.type='button';btn.textContent=option;btn.addEventListener('click',()=>{for(const b of controls.querySelectorAll('button'))b.setAttribute('aria-pressed',String(b===btn));feedback.textContent=i===example.question.answer?example.question.correct:example.question.incorrect;});controls.append(btn);});box.append(controls,feedback);section.append(box);}
  root.append(section);
 }
 return {destroy:()=>root.replaceChildren()};
}
