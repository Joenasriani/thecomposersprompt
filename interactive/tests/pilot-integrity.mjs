import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL(p,import.meta.url),'utf8');
const inventory=JSON.parse(read('../lessons/chapter-inventory.json'));
assert.equal(inventory.chapters.length,37);
for(const num of [1,2]){
 const script=read(`../lessons/chapter-${num}/main.js`);
 const page=read(`../lessons/chapter-${num}/index.html`);
 assert.match(script,/defineLesson/);assert.match(script,/mountLesson/);
 assert.match(page,/data-lesson-root/);assert.match(page,/main\.js/);
 assert.match(read('../index.html'),new RegExp(`lessons/chapter-${num}/`));
}
assert.match(read('../lessons/lesson-runtime.js'),/playNotes/);
console.log('PASS: pilot pages, shared renderer and book inventory registration');
