import assert from 'node:assert/strict';
import {defineLesson} from '../lessons/lesson-contract.js';
import {lesson} from '../lessons/chapter-6-5/definition.js';
assert.equal(lesson.id,'chapter-6-5');
assert.ok(lesson.sections.length>=7);
assert.ok(Object.isFrozen(lesson));
assert.ok(Object.isFrozen(lesson.sections));
assert.throws(()=>defineLesson({id:'bad',title:'x',sections:[{id:'a',title:'A'}]}));
assert.throws(()=>defineLesson({id:'chapter-1',title:'x',sections:[{id:'a',title:'A'},{id:'a',title:'B'}]}));
console.log('PASS: lesson schema and first chapter definition');

import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL(p,import.meta.url),'utf8');
const inventory=JSON.parse(read('../lessons/chapter-inventory.json'));
assert.equal(inventory.chapters.length,37);
for(const id of ['chapter-1','chapter-2']){
 const html=read('../lessons/'+id+'/index.html'),script=read('../lessons/'+id+'/main.js');
 assert.match(html,/lesson\.css/);assert.match(html,/main\.js/);
 assert.match(script,/mountLesson/);assert.match(script,/defineLesson/);
}
assert.match(read('../index.html'),/lessons\/chapter-1/);
assert.match(read('../index.html'),/lessons\/chapter-2/);
console.log('PASS: canonical chapter inventory and two pilot entrypoints');
