import {midi} from '../music/pitch.js';
export function defineLesson(definition){
 if(!definition||typeof definition!=='object')throw new TypeError('Lesson must be an object');
 const {id,title,sections}=definition;
 if(!/^chapter-\d+(?:-\d+)*$/.test(id||''))throw new Error('Invalid lesson id');
 if(typeof title!=='string'||!title.trim())throw new Error('Lesson title required');
 if(!Array.isArray(sections)||!sections.length)throw new Error('Sections required');
 const ids=new Set();
 for(const s of sections){
  if(!s||typeof s.id!=='string'||!s.id.trim()||ids.has(s.id)||typeof s.title!=='string'||!s.title.trim())throw new Error('Invalid or duplicate section');
  ids.add(s.id);
 }
 return Object.freeze({...definition,sections:Object.freeze(sections.map(s=>Object.freeze({...s})))});
}
export function validateExamples(definition,examples){
 if(!Array.isArray(examples)||examples.length!==definition.sections.length)throw new Error('Lesson sections and examples must align');
 for(let i=0;i<examples.length;i++){
  const x=examples[i],s=definition.sections[i];
  if(x.id!==s.id||x.title!==s.title||!Array.isArray(x.paragraphs)||!x.paragraphs.length)throw new Error('Example does not match section: '+s.id);
  if(x.notes)for(const note of x.notes)midi(note);
  if(x.question){
   const q=x.question;
   if(!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.options.length||!q.correct||!q.incorrect)throw new Error('Invalid exercise in '+s.id);
  }
 }
 return true;
}
