/**
 * Lesson definition contract. UI components own rendering; lessons own content.
 * Keep this dependency-free so every chapter can validate at build time.
 */
export function defineLesson(definition){
 if(!definition||typeof definition!=='object')throw new TypeError('Lesson must be an object');
 const {id,title,sections}=definition;
 if(!/^chapter-\d+(?:-\d+)*$/.test(id||''))throw new Error('Invalid lesson id');
 if(typeof title!=='string'||!title.trim())throw new Error('Lesson title required');
 if(!Array.isArray(sections)||sections.length===0)throw new Error('Sections required');
 const ids=new Set();
 for(const section of sections){
  if(!section||typeof section.id!=='string'||!section.id.trim()||ids.has(section.id))throw new Error('Section ids must be unique');
  if(typeof section.title!=='string'||!section.title.trim())throw new Error('Section title required');
  ids.add(section.id);
 }
 return Object.freeze({...definition,sections:Object.freeze(sections.map(section=>Object.freeze({...section})))});
}
