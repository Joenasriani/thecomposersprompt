import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(readFileSync(new URL('../CHAPTER-6-5-FREEZE.json',import.meta.url),'utf8'));
for(const [path,sha] of Object.entries(manifest.files)){
 const bytes=readFileSync(new URL('../'+path,import.meta.url));
 const gitSha=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
 assert.equal(gitSha,sha,'Frozen reference changed without an approved migration: '+path);
}
console.log('PASS: Chapter 6.5 frozen reference files unchanged');
