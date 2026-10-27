import { mkdir, copyFile, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(process.cwd());
const source = resolve(root, 'websites/landing/index.html');
const pdf = resolve(root, 'book/THE_COMPOSERS_PROMPT.pdf');
const destination = resolve(root, 'websites/landing/dist');
const html = await readFile(source, 'utf8');
if (!html.includes('The Composer’s Prompt') || !html.includes('./THE_COMPOSERS_PROMPT.pdf')) {
  throw new Error('Landing-page references are missing');
}
const data = await readFile(pdf);
const blob = createHash('sha1')
  .update(Buffer.from('blob ' + data.length + '\0'))
  .update(data)
  .digest('hex');
if (data.length !== 5204343 || blob !== 'fe10bb14c36bdd22ec791031b02d43fb5d8fabde') {
  throw new Error('Canonical locked PDF checksum mismatch; deployment aborted');
}
await mkdir(destination, { recursive: true });
await copyFile(source, resolve(destination, 'index.html'));
await copyFile(pdf, resolve(destination, 'THE_COMPOSERS_PROMPT.pdf'));
console.log('Final-book landing assets assembled with verified locked PDF checksum.');
