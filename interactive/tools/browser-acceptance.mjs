import {spawn} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
const base='http://127.0.0.1:4173/';
const server=spawn(process.execPath,['tools/serve.mjs'],{stdio:['ignore','pipe','pipe'],env:{...process.env,PORT:'4173'}});
let stderr='';server.stderr.on('data',chunk=>stderr+=chunk.toString());
async function ready(){
 for(let attempt=0;attempt<80;attempt++){
  if(server.exitCode!==null)throw new Error('Local server exited: '+stderr);
  try{const res=await fetch(base);if(res.ok)return;}catch{}
  await delay(100);
 }
 throw new Error('Local server did not start: '+stderr);
}
try{
 await ready();
 const tests=process.argv[2]==='pilots'?['tests/browser-pilots.spec.mjs']:['tests/browser-chapter-6-5.spec.mjs','tests/browser-pilots.spec.mjs'];
 const child=spawn(process.execPath,['--test',...tests],{stdio:'inherit',env:{...process.env,BASE_URL:base,LESSON_URL:base+'lessons/chapter-6-5/'}});
 const status=await new Promise((resolve,reject)=>{child.on('error',reject);child.on('exit',code=>resolve(code??1));});
 process.exitCode=status;
}catch(error){console.error(error);process.exitCode=1;}
finally{server.kill('SIGTERM');}
