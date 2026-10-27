import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
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
const assets = resolve(destination, 'assets');
await mkdir(assets, { recursive: true });
for (const filename of ['The_Composers_Prompt_Cover_Web.webp', 'the_composers_prompt_by_Joe_Nasr.png']) {
  await copyFile(resolve(root, 'websites/landing/assets', filename), resolve(assets, filename));
}
await writeFile(resolve(destination, 'robots.txt'),
  'User-agent: *\\nAllow: /\\nSitemap: https://thecomposersprompt-book.vercel.app/sitemap.xml\\n');
await writeFile(resolve(destination, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://thecomposersprompt-book.vercel.app/</loc></url></urlset>\\n');
console.log('Final-book landing assets assembled with verified locked PDF checksum.');
