import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(process.cwd());
const source = resolve(root, 'websites/landing/index.html');
const pdf = resolve(root, 'book/The_Composers_Prompt_Joe_Nasr.pdf');
const destination = resolve(root, 'websites/landing/dist');
const html = await readFile(source, 'utf8');
if (!html.includes('The Composer’s Prompt') || !html.includes('./The_Composers_Prompt_Joe_Nasr.pdf')) {
  throw new Error('Landing-page references are missing');
}
const data = await readFile(pdf);
const blob = createHash('sha1')
  .update(Buffer.from('blob ' + data.length + '\0'))
  .update(data)
  .digest('hex');
if (blob !== '8a94b66dfe6aa2f4a42c2ddb9925269b117652b7') {
  throw new Error('Canonical locked PDF checksum mismatch; deployment aborted');
}
await mkdir(destination, { recursive: true });
await copyFile(source, resolve(destination, 'index.html'));
await copyFile(pdf, resolve(destination, 'The_Composers_Prompt_Joe_Nasr.pdf'));
const assets = resolve(destination, 'assets');
await mkdir(assets, { recursive: true });
for (const filename of ['The_Composers_Prompt_Cover_Web.webp', 'the_composers_prompt_by_Joe_Nasr.png']) {
  await copyFile(resolve(root, 'websites/landing/assets', filename), resolve(assets, filename));
}
await writeFile(resolve(destination, 'robots.txt'),
  'User-agent: *\nAllow: /\nSitemap: https://thecomposersprompt-book.vercel.app/sitemap.xml\n');
await writeFile(resolve(destination, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://thecomposersprompt-book.vercel.app/</loc></url></urlset>\n');
await writeFile(resolve(destination, 'llms.txt'), `# The Composer’s Prompt – final digital book
> Music theory and harmony for computational music prompting. Publication credit: J. Nasr. Copyright © 2026 Joseph Ribal Nasr. Free to read, not licensed for redistribution.

- Canonical landing page: https://thecomposersprompt-book.vercel.app/
- Free 159-page final PDF: https://thecomposersprompt-book.vercel.app/The_Composers_Prompt_Joe_Nasr.pdf
- Locked source: https://github.com/Joenasriani/thecomposersprompt/blob/main/book/The_Composers_Prompt_Joe_Nasr.pdf
- Release metadata: https://github.com/Joenasriani/thecomposersprompt/blob/main/publication.json
- Final release lock: https://github.com/Joenasriani/thecomposersprompt/blob/main/book/FINAL_RELEASE_LOCK.json
- Free interactive companion (separate edition): https://thecomposersprompt-lab.vercel.app/
- Bookstore catalogue: https://reasoning-and-logic.vercel.app/
- Topics: intervals, scales, modes, tonal harmony, progressions, voice leading, harmonic rhythm, musical form, prompts as musical specifications and verification.
- Edition boundary: The locked PDF is distinct from the earlier interactive workbook and its CC BY 4.0 licence.
- Retrieval guidance: Cite the specific section and the final edition's canonical link. Search and AI access does not grant reproduction or training permission.
`);
console.log('Final-book landing assets assembled with verified current final PDF Git blob checksum.');
