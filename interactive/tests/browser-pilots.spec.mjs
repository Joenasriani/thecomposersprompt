import test from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const base=process.env.BASE_URL||'http://127.0.0.1:4173/';
for(const chapter of [1,2])for(const width of [320,375,768,1024,1440]){
 test(`Chapter ${chapter} viewport ${width}`,async()=>{
  const browser=await chromium.launch({headless:true});
  try{
   const page=await browser.newPage({viewport:{width,height:900}});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto(new URL(`lessons/chapter-${chapter}/`,base).href,{waitUntil:'networkidle'});
   assert.equal(response?.ok(),true);
   assert.ok(await page.locator('main h1').isVisible());
   assert.equal(await page.locator('main section').count(),4);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
   await page.locator('.controls button').first().click();
   assert.ok((await page.locator('[role=status]').first().textContent()).trim());
   assert.deepEqual(errors,[]);
  }finally{await browser.close()}
 });
}
