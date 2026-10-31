// Run with: npm install --no-save playwright && npx playwright install chromium
// Then: node --test interactive/tests/browser-chapter-6-5.spec.mjs
// Requires a reachable deployed URL or a static web server at BASE_URL.
import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
const BASE_URL=process.env.BASE_URL||'https://joenasriani.github.io/thecomposersprompt/interactive/lessons/chapter-6-5/';
for (const width of [320,375,768,1024,1440]){
 test(`Chapter 6.5 browser QA at ${width}px`,async()=>{
  const browser=await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(BASE_URL,{waitUntil:'networkidle',timeout:30000});
  assert.equal(response?.ok(),true,'Lesson URL must load');
  await page.locator('#harmonic-keyboard .white-key').first().waitFor();
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
  assert.equal(overflow,false,'No horizontal page overflow');
  for(const id of ['C','Cm','Cdim','Caug','C/E','C/G','Cmaj7','G7']){
   const button=page.locator(`button[data-chord="${id}"]`).first();
   assert.equal(await button.count(),1,`Missing chord control ${id}`);
   await button.click();
   assert.ok((await page.locator('#harmonic-staff svg').count())===1,`Engraved staff missing for ${id}`);
   assert.ok((await page.locator('#harmonic-keyboard .white-key').count())>=7,'At least seven white keys');
   assert.ok((await page.locator('#harmonic-keyboard circle').count())>=3,`Piano markers missing for ${id}`);
  }
  assert.deepEqual(errors,[],'No unhandled browser errors');
  await browser.close();
 });
}
test('Browser audio activation and appearance controls',async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage();
 await page.addInitScript(()=>{
  window.__starts=0;
  class Osc{constructor(){this.frequency={value:0};this.type='sine'} connect(g){return g}start(){window.__starts++}stop(){}}
  class Gain{constructor(){const x=()=>{};this.gain={setValueAtTime:x,exponentialRampToValueAtTime:x,linearRampToValueAtTime:x,cancelScheduledValues:x,setTargetAtTime:x}}connect(){return this}}
  window.AudioContext=class{constructor(){this.currentTime=0;this.destination={}}resume(){return Promise.resolve()}createOscillator(){return new Osc()}createGain(){return new Gain()}};
 });
 await page.goto(BASE_URL,{waitUntil:'networkidle'});
 await page.locator('button[data-chord="Cm"]').click();
 assert.equal(await page.evaluate(()=>window.__starts),3,'Triad should start three voices on click');
 await page.locator('#theme').selectOption('dark');
 assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
 await page.locator('#theme').selectOption('light');
 assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
 await browser.close();
});
