import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(resolve(root,p),'utf8');
const home=read('index.html');
const lesson=read('lessons/chapter-6-5/index.html');
const titleLogo=read('assets/composers-prompt-title.svg');
assert.match(titleLogo,/data:image\/webp;base64,/,'Supplied title logo must be embedded in repository asset');
assert.match(home,/The Composer’s Prompt/,'Home text title missing');
const cssLogo=read('lessons/chapter-6-5/lesson.css');
assert.match(cssLogo,/\.header \.brand\{/,'Responsive text title rules missing');
assert.match(home,/href="\.\/lessons\/chapter-6-5\/"/,'Interactive home must link Chapter 6.5');
assert.match(lesson,/class="brand" href="\.\.\/\.\.\/index\.html"/,'Lesson must return to interactive home');
assert.match(lesson,/src="\.\/extensions\.js"/,'Full lesson audio controls must load');
assert.ok(existsSync(resolve(root,'lessons/chapter-6-5/extensions.js')),'Chapter extension module missing');
assert.ok(existsSync(resolve(root,'music/chapter-6-5.js')),'Theory model missing');
const css=read('lessons/chapter-6-5/lesson.css');
assert.match(css,/@media\s*\(max-width:/,'Responsive CSS breakpoint required');
assert.match(css,/#keyboard\s*\{width:100%/,'Keyboard must resize with container');
for (const file of ['lesson.js','lesson.css']) assert.ok(existsSync(resolve(root,'lessons/chapter-6-5',file)),file+' missing');
assert.match(lesson,/href="\.\/lesson\.css"/);
assert.match(lesson,/src="\.\/lesson\.js"/);
const js=read('lessons/chapter-6-5/lesson.js');
assert.doesNotMatch(js,/^import\s+['"]\.\/lesson\.css['"]/m,'Standalone browser cannot import CSS as JS');
assert.match(js,/C4','E4','G4/);
assert.match(js,/C4','Eb4','G4/);
assert.match(js,/pcs:\[0,4,7\]/);
assert.match(js,/pcs:\[0,3,7\]/);
assert.match(js,/function hz\(note\)/);
assert.match(js,/aria-pressed/);
assert.ok(existsSync(resolve(root,'experiments/prototype/index.html')));
assert.ok(existsSync(resolve(root,'experiments/stage1/src/main.js')));
const manifest=JSON.parse(read('COMPONENT-MANIFEST.json'));
assert.equal(manifest.scopePolicy.ownedPathPrefix,'interactive/');
assert.match(manifest.productionIntendedEntry,/interactive\/index\.html/);
assert.equal(manifest.gates?.productionChangeAuthorized,true);
const book=manifest.protectedSources.find(x=>x.path==='book/THE_COMPOSERS_PROMPT.pdf');
assert.ok(book,'Final book must remain explicitly protected');
console.log('PASS: standalone lesson assets, theory fixtures, legacy app, experiment inventory, migration controls.');

assert.match(lesson,/id="harmonic-keyboard"/,'Reusable harmonic reference keyboard missing');
const ext=read('lessons/chapter-6-5/extensions.js');
assert.match(ext,/keyboardGeometry/,'Keyboard geometry model missing');
assert.match(ext,/renderChord\(id\)/,'Chord-to-keyboard synchronization missing');
assert.match(read('music/piano-renderer.js'),/viewBox/,'Shared piano SVG must use dynamic viewBox');

assert.match(lesson,/id="harmonic-staff"/,'Optional compact notation container missing');
assert.match(lesson,/vexflow@5\.0\.0\/build\/cjs\/vexflow\.js/,'VexFlow must be version-pinned');
assert.match(ext,/renderCompactChord/,'Chord-to-notation hook missing');
const notation=read('music/compact-notation.js');
assert.match(notation,/new VF\.StaveNote/,'VexFlow note engraving missing');
assert.match(notation,/new VF\.Accidental/,'Accidental engraving missing');
assert.match(read('music/piano-renderer.js'),/naturals\.length<7/,'Piano requires at least seven white keys');

assert.match(lesson,/id="piano-note-feedback"/,'Playable piano feedback missing');
assert.match(ext,/attachPianoInteraction/,'Playable keyboard binding missing');
assert.match(read('music/piano-renderer.js'),/data-midi/,'Piano keys must carry exact pitch numbers');
const piano=read('music/interactive-piano.js');
assert.match(piano,/pointerdown/,'Pointer interaction missing');
assert.match(piano,/keydown/,'Keyboard interaction missing');

await import('./interactive-piano.mjs');

const designCss=read('lessons/chapter-6-5/lesson.css');
assert.match(designCss,/\.harmonic-display\{overflow:hidden\}/,'Notation must not overflow its panel');
assert.match(designCss,/\.reference-table\{max-width:100%;overflow-x:auto/,'Tables must scroll locally');
assert.match(designCss,/@media\(max-width:640px\)/,'Small-mobile layout rules missing');
assert.doesNotMatch(designCss,/\.header \.brand-logo/,'Deferred image-logo styling must be absent');
assert.doesNotMatch(lesson,/<picture>/,'Deferred image logo must not render');
assert.match(notation,/preserveAspectRatio/,'Notation must scale without distortion');

const sharedPiano=read('music/piano-renderer.js');
assert.match(sharedPiano,/export function renderPiano/,'Shared keyboard renderer missing');
assert.match(read('lessons/chapter-6-5/lesson.js'),/renderPiano/,'Initial lesson must use shared renderer');
assert.match(ext,/renderPiano/,'Harmonic reference must use shared renderer');

const audioSource=read('music/audio-engine.js');assert.match(audioSource,/export async function playNotes/,'Single shared audio engine required');assert.doesNotMatch(js,/createOscillator/);assert.doesNotMatch(ext,/createOscillator/);assert.doesNotMatch(sharedPiano,/chapter-6-5\\.js/,'Shared piano must not depend on chapter model');
