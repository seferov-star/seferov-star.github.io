import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { COURSES } from '../src/learning/courses.ts';
import { createBrokerProfile } from '../src/game/rules.ts';
const base=process.env.GAME_URL||'http://127.0.0.1:8770/dist/';
await fs.mkdir('output/qa',{recursive:true});
const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:1365,height:900}});
const legacy=createBrokerProfile('Профиль до обновления','wolf');legacy.capitalEarned=12345;legacy.topicProgress.general_rules.correctIds=['gr-e-1'];legacy.bookmarkedQuestionIds=['gr-e-2'];
await context.addInitScript(p=>{if(!localStorage.getItem('solid_wolf_broker_profiles_v1')){localStorage.setItem('solid_wolf_broker_profiles_v1',JSON.stringify([p]));localStorage.setItem('solid_wolf_active_profile_id_v1',p.id);}},legacy);
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const byId=new Map(COURSES.flatMap(c=>c.items).map(q=>[q.id,q]));
async function choose(correct=true){const s=await state();const item=byId.get(s.question);assert.ok(item,s.question);const target=correct?item.options[item.correctIndex]:item.options.find((_,i)=>i!==item.correctIndex);const buttons=page.locator('.option');for(let i=0;i<4;i++){if((await buttons.nth(i).locator('span').nth(1).innerText())===target){await buttons.nth(i).click();break;}}await page.locator('.feedback').waitFor();return item;}
async function next(){const old=(await state()).question;await page.locator('.feedback .primary').click();await page.waitForFunction(id=>{const s=JSON.parse(window.render_game_to_text());return s.done||s.question!==id;},old);}
await page.goto(base+'?course=tariffs');await page.getByRole('heading',{name:'Знание — ваш главный актив.'}).waitFor();
let saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('solid_wolf_broker_profiles_v1'))[0]);assert.equal(saved.capitalEarned,12345);assert.deepEqual(saved.learning.tariffs.correct,['gr-e-1']);assert.deepEqual(saved.learning.regulations.correct,[]);assert.ok(await page.evaluate(()=>!!localStorage.getItem('solid_wolf_broker_profiles_v1_before_courses')));
await page.getByRole('button',{name:/КУРС 02/}).click();await page.getByRole('button',{name:'Начать практику',exact:true}).click();
for(let i=0;i<COURSES[1].items.filter(q=>q.kind==='question').length;i++){await choose(true);if(i===0){await page.screenshot({path:'output/qa/regulation-answer.png',fullPage:true});}await next();}
assert.match(await page.locator('.result-stats').innerText(),/100%/);console.log('PASS: all regulation questions, explanations and migrated profile');
await page.getByRole('button',{name:'Выбрать тему',exact:true}).click();await page.getByRole('button',{name:/Клиентские кейсы/}).click();await page.getByRole('button',{name:'Решать кейсы'}).click();
for(let i=0;i<COURSES[1].items.filter(q=>q.kind==='case').length;i++){await choose(true);if(i===3)await page.screenshot({path:'output/qa/regulation-case.png',fullPage:true});await next();}
assert.match(await page.locator('.result-stats').innerText(),/100%/);console.log('PASS: all regulation cases');
await page.getByRole('button',{name:'Выбрать тему',exact:true}).click();await page.getByRole('button',{name:/^Экзамен /}).click();await page.getByRole('button',{name:'Начать экзамен'}).click();const sections=new Set();
for(let i=0;i<30;i++){const item=await choose(i<24);sections.add(item.topicId);assert.equal(await page.locator('.feedback .source').count(),0);await next();}
assert.equal(sections.size,25);assert.match(await page.locator('.results').innerText(),/Экзамен сдан/);assert.match(await page.locator('.result-stats').innerText(),/80%/);assert.equal(await page.locator('.review-row').count(),30);await page.locator('.review-row').last().locator(':scope > summary').click();await page.screenshot({path:'output/qa/exam-result.png',fullPage:false});console.log('PASS: exam 30 questions, 25 sections, 80% boundary and full review');
await page.getByRole('button',{name:'Выбрать тему',exact:true}).click();await page.getByRole('button',{name:/^Обучение /}).click();await page.getByRole('button',{name:'Начать практику',exact:true}).click();await page.getByRole('button',{name:/В закладки/}).click();
await page.getByRole('button',{name:/Подсказка 50\/50/}).click();assert.equal(await page.locator('.option:disabled').count(),2);const before=await page.locator('.options').innerText();await page.getByRole('button',{name:'Пауза',exact:true}).click();await page.locator('.pause-overlay .primary').click();assert.equal(await page.locator('.options').innerText(),before);await choose(true);await page.getByRole('button',{name:'Завершить и получить отчет'}).click();
await page.getByRole('button',{name:'Выбрать тему',exact:true}).click();await page.getByRole('button',{name:/^Блиц /}).click();await page.getByRole('button',{name:'Начать практику',exact:true}).click();for(let i=0;i<3;i++){await choose(false);await next();}assert.equal((await state()).done,true);console.log('PASS: bookmark, hint, pause and blitz three-life termination');
await page.getByRole('button',{name:'Выбрать тему',exact:true}).click();await page.getByRole('button',{name:/КУРС 01/}).click();assert.equal(await page.locator('.progress-number').innerText(),'2%');
await page.getByRole('button',{name:/Калькулятор тарифов/}).click();assert.match(await page.locator('.calc-result').innerText(),/1.000/);await page.getByRole('button',{name:'Закрыть',exact:true}).click();
await page.getByRole('button',{name:/Профиль до обновления/}).click();await page.getByPlaceholder('Имя сотрудника').fill('Новый ученик');await page.getByRole('button',{name:'Создать профиль'}).click();assert.equal(await page.locator('dialog select').inputValue()===legacy.id,false);await page.getByRole('button',{name:'Закрыть',exact:true}).click();assert.equal(await page.locator('.progress-number').innerText(),'0%');
await page.setViewportSize({width:390,height:844});await page.goto(base+'?course=regulations');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.getByRole('button',{name:'Начать практику',exact:true}).click();await choose(false);await page.screenshot({path:'output/qa/mobile-answer.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
for(const path of ['tariffs.pdf','solid-logo.svg','karst.woff2']){const r=await page.request.get(base+path);assert.equal(r.status(),200,path);}
assert.deepEqual(errors,[]);console.log('PASS: course isolation, calculator, profiles, mobile layout, PDF/assets and no browser errors');
await context.close();
// Use wall clock jumps to verify timeout and pause behavior without waiting 15 real minutes.
const timerContext=await browser.newContext();const timer=await timerContext.newPage();await timer.clock.install();await timer.goto(base+'?course=regulations');await timer.getByRole('button',{name:/^Экзамен /}).click();await timer.getByRole('button',{name:'Начать экзамен'}).click();await timer.getByRole('button',{name:'Пауза',exact:true}).click();await timer.clock.fastForward(1000000);assert.equal(await timer.evaluate(()=>JSON.parse(window.render_game_to_text()).done),false);await timer.locator('.pause-overlay .primary').click();await timer.clock.fastForward(901000);await timer.getByRole('heading',{name:'Есть что повторить.'}).waitFor();assert.equal(await timer.locator('.review-row').count(),30);console.log('PASS: paused clock and full exam timeout');
await browser.close();
await fs.writeFile('output/qa/browser-results.json',JSON.stringify({status:'passed',questions:116,cases:45,examQuestions:30,examSections:25,errors},null,2));
