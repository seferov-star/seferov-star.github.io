import test from 'node:test';
import assert from 'node:assert/strict';
import { COURSES, makeDeck, shuffleItem } from './courses';
import { migrateProfile } from './profiles';
import { createBrokerProfile } from '../game/rules';

test('course banks have unique identities, four distinct choices, valid sources and explanations', () => {
  const allIds = new Set<string>();
  for (const course of COURSES) {
    const topics = new Set(course.topics.map(t => t.id));
    for (const item of course.items) {
      assert.ok(!allIds.has(item.id), item.id); allIds.add(item.id);
      assert.ok(topics.has(item.topicId), item.id);
      assert.equal(item.options.length, 4, item.id);
      assert.equal(new Set(item.options).size, 4, item.id);
      assert.ok(item.correctIndex >= 0 && item.correctIndex < 4);
      assert.ok(item.sourcePage >= 1 && item.sourcePage <= (course.id === 'tariffs' ? 74 : 77));
      assert.ok(item.explanation.length > (course.id === 'regulations' ? 100 : 40), item.id);
      if (course.id === 'regulations') {
        assert.ok(item.sourceClause, item.id);
      }
    }
    for (const topic of course.topics) {
      assert.ok(course.items.some(q => q.topicId === topic.id && q.kind === 'question'), topic.id);
      assert.ok(course.items.some(q => q.topicId === topic.id && q.kind === 'case'), topic.id);
    }
  }
});
test('exams represent every section, contain only their course questions and balance difficulty', () => {
  for (const course of COURSES) for (let i = 0; i < 30; i++) {
    const deck = makeDeck(course, 'exam', 'not-a-section', 'hard', []);
    assert.equal(deck.length, course.exam.count);
    assert.equal(new Set(deck.map(q => q.id)).size, deck.length);
    assert.equal(new Set(deck.map(q => q.topicId)).size, course.topics.length);
    assert.ok(deck.every(q => q.kind === 'question' && course.items.some(s => s.id === q.id)));
    const counts = ['easy','medium','hard'].map(level => deck.filter(q => q.difficulty === level).length);
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, JSON.stringify(counts));
  }
});
test('section, level, case and review filters never silently fall back to another selection', () => {
  for (const course of COURSES) {
    const topic = course.topics[0].id;
    assert.ok(makeDeck(course, 'study', topic, 'easy').every(q => q.topicId === topic && q.difficulty === 'easy'));
    assert.ok(makeDeck(course, 'cases').every(q => q.kind === 'case'));
    assert.deepEqual(makeDeck(course, 'cases', 'nonexistent'), []);
    assert.deepEqual(makeDeck(course, 'study', 'all', 'all', []), []);
    const id = course.items.find(q => q.kind === 'question')!.id;
    assert.deepEqual(makeDeck(course, 'study', 'all', 'all', [id]).map(q => q.id), [id]);
  }
});
test('all permutations preserve correct answers and source banks for both questions and cases', () => {
  for (const course of COURSES) for (const item of course.items) {
    const original = JSON.stringify(item); const answer = item.options[item.correctIndex]; const positions = new Set<number>();
    for (let a=0;a<4;a++) for(let b=0;b<3;b++) for(let c=0;c<2;c++) {
      const r=[(a+.5)/4,(b+.5)/3,(c+.5)/2]; const copy=shuffleItem(item,()=>r.shift()!);
      assert.equal(copy.options[copy.correctIndex],answer,item.id); positions.add(copy.correctIndex);
      assert.deepEqual([...copy.options].sort(),[...item.options].sort());
    }
    assert.equal(positions.size,4,item.id);assert.equal(JSON.stringify(item),original);
  }
});
test('legacy profiles migrate without losing history, capital, bookmarks or per-topic progress', () => {
  const raw=createBrokerProfile('Сохранённый профиль','wolf');
  raw.capitalEarned=12345;raw.totalAnswered=8;raw.totalCorrect=6;
  raw.topicProgress.general_rules.correctIds=['gr-e-1'];raw.topicProgress.general_rules.wrongIds=['gr-e-2'];
  raw.bookmarkedQuestionIds=['gr-e-3'];
  const before=JSON.stringify(raw);const migrated=migrateProfile(raw);
  assert.equal(JSON.stringify(raw),before);assert.equal(migrated.capitalEarned,12345);
  assert.deepEqual(migrated.learning.tariffs.correct,['gr-e-1']);
  assert.deepEqual(migrated.learning.tariffs.wrong,['gr-e-2']);
  assert.deepEqual(migrated.learning.tariffs.bookmarks,['gr-e-3']);
  assert.equal(migrated.learning.regulations.correct.length,0);
  assert.deepEqual(migrateProfile(migrated),migrated);
});
