import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {COURSES} from '../src/learning/courses.ts';
const base=process.env.GAME_URL||'http://127.0.0.1:8771/dist/';
const phone=COURSES.find(c=>c.id==='phone');const bank=new Map(phone.items.map(i=>[i.id,i]));
await fs.mkdir('output/phone',{recursive:true});const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1365,height:900}});const p=await ctx.newPage();let errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const state=()=>p.evaluate(()=>JSON.parse(window.render_game_to_text()));
await p.goto(base+'?course=phone');await p.getByRole('heading',{name:'Знание — ваш главный актив.'}).waitFor();assert.equal(await p.locator('.mode-button').count(),4);assert.equal(await p.getByRole('button',{name:/^Экзамен /}).count(),0);assert.equal(await p.locator('.course-card').count(),3);
await p.screenshot({path:'output/phone/catalog.png',fullPage:false});
for(const mode of ['study','cases']){
 if(mode==='cases')await p.getByRole('button',{name:/Клиентские кейсы/}).click();
 await p.locator('.launch > .primary').click();let count=0;
 while(!(await state()).done){
  const s=await state(),q=bank.get(s.question);const buttons=p.locator('.option');
  for(let i=0;i<4;i++)if(await buttons.nth(i).locator('span').nth(1).innerText()===q.options[q.correctIndex]){await buttons.nth(i).click();break;}
  assert.equal(await p.locator('.feedback .option-review p').count(),4);
  assert.equal((await p.locator('.feedback .source-excerpt').innerText()).replace(/\s+/g,' '),q.sourceExcerpt.replace(/\s+/g,' '));
  assert.match(await p.locator('.feedback .source a').getAttribute('href'),/#phone-\d+$/);
  if(count===0){await p.locator('.feedback').scrollIntoViewIfNeeded();await p.screenshot({path:`output/phone/${mode}-feedback.png`,fullPage:true});}
  await p.locator('.feedback .primary').click();count++;
 }
 assert.equal(count,mode==='study'?19:38);assert.match(await p.locator('.result-stats').innerText(),/100%/);await p.getByRole('button',{name:'Выбрать тему',exact:true}).click();
}
await p.getByRole('button',{name:/Быстрый ответ/}).click();assert.equal(await p.locator('.filters select').last().inputValue(),'60');await p.locator('.filters select').last().selectOption('45');await p.locator('.launch > .primary').click();assert.equal(await p.getByRole('button',{name:/Подсказка 50/}).count(),0);
await p.clock.install();await p.getByRole('button',{name:'Пауза',exact:true}).click();await p.clock.fastForward(90000);assert.equal((await state()).selected,null);await p.locator('.pause-overlay .primary').click();await p.clock.fastForward(46000);await p.getByRole('heading',{name:'Время истекло. Разберём ответ.'}).waitFor();assert.equal((await state()).selected,-1);const order=await p.locator('.options').innerText();const remain=(await state()).remaining;await p.clock.fastForward(60000);assert.equal((await state()).remaining,remain);assert.equal(await p.locator('.options').innerText(),order);
await p.locator('.feedback .primary').click();assert.equal((await state()).remaining,45);assert.equal((await state()).selected,null);
await p.setViewportSize({width:390,height:844});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await p.screenshot({path:'output/phone/mobile-timed.png',fullPage:true});await p.locator('.option').first().click();assert.equal(await p.locator('.feedback .option-review p').count(),4);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await p.getByRole('button',{name:'Завершить и получить отчет'}).click();await p.locator('.review-row').first().locator(':scope > summary').click();assert.match(await p.locator('.review-row').first().innerText(),/Время ответа истекло/);await p.getByRole('button',{name:'Выбрать тему',exact:true}).click();await p.getByRole('button',{name:/КУРС 01/}).click();assert.equal(await p.getByRole('button',{name:/^Экзамен /}).count(),1);assert.equal(await p.getByRole('button',{name:/Быстрый ответ/}).count(),0);
const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('solid_wolf_broker_profiles_v1'))[0]);assert.equal(saved.learning.phone.correct.length,57);assert.equal(saved.learning.tariffs.correct.length,0);
const r=await p.request.get(base+'phone-standard-excerpts.html');assert.equal(r.status(),200);assert.deepEqual(errors,[]);await fs.writeFile('output/phone/results.json',JSON.stringify({passed:true,questions:19,cases:38,timer:'pause, timeout, freeze, reset, no hints',errors},null,2));await b.close();console.log('PASS: 57 items, rationale mapping, quotes, exam guard, timer, mobile, course isolation');
