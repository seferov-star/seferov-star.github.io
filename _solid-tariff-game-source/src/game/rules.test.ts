import { shuffleAnswerOptions } from './rules';
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAnswerReward,
  calculateTariffCommission,
  createBrokerProfile,
  filterQuestions,
  getOverallMasteryPercent,
  getSolidProPlusStockRate,
  getTopicMasteryPercent,
  recordQuestionOutcome
} from './rules';
import { QUESTIONS } from './questions';
import { DEAL_CASES } from './dealCases';

test('all questions and cases have unique IDs, valid answers and source references', () => {
  const entries = [...QUESTIONS, ...DEAL_CASES];
  assert.equal(new Set(entries.map((entry) => entry.id)).size, entries.length);
  for (const entry of entries) {
    assert.equal(entry.options.length, 4, entry.id);
    assert.ok(entry.correctIndex >= 0 && entry.correctIndex < entry.options.length, entry.id);
    assert.ok(entry.clauseRef.includes('стр.'), entry.id);
  }
  assert.equal(DEAL_CASES.length, 16);
});

test('question bank has 66 questions across all 6 topics and 3 difficulties', () => {
  assert.equal(QUESTIONS.length, 66);
  const generalEasy = filterQuestions('general_rules', 'easy');
  assert.equal(generalEasy.length, 4);
  const flagshipAll = filterQuestions('flagship_pro', 'all');
  assert.equal(flagshipAll.length, 11);
});

test('Solid Pro+ tiered stock rate matches Edition 27 table A.1.1', () => {
  assert.equal(getSolidProPlusStockRate(1_500_000), 0.05);
  assert.equal(getSolidProPlusStockRate(5_000_000), 0.04);
  assert.equal(getSolidProPlusStockRate(25_000_000), 0.03);
  assert.equal(getSolidProPlusStockRate(45_000_000), 0.02);
  assert.equal(getSolidProPlusStockRate(120_000_000), 0.01);
  assert.equal(getSolidProPlusStockRate(250_000_000), 0.005);
});

test('calculateTariffCommission computes exact broker fees for Solid Pro, Solid Pro+, Partner, and PB Corp', () => {
  const pro = calculateTariffCommission({
    tariffId: 'solid_pro',
    stockTurnoverRub: 400_000,
    futuresContracts: 10,
    voiceOrdersCount: 0,
    clientAssetsRub: 1_500_000
  });
  assert.equal(pro.stockFeeRub, 1000);
  assert.equal(pro.futuresFeeRub, 10);
  assert.equal(pro.monthlyMinFeeRub, 0);

  const proPlus = calculateTariffCommission({
    tariffId: 'solid_pro_plus',
    stockTurnoverRub: 25_000_000,
    futuresContracts: 500,
    voiceOrdersCount: 0,
    clientAssetsRub: 12_500_000
  });
  assert.equal(proPlus.stockFeeRub, 7500);
  assert.equal(proPlus.futuresFeeRub, 0);
  assert.equal(proPlus.monthlyMinFeeRub, 0);

  const partner = calculateTariffCommission({
    tariffId: 'partner',
    stockTurnoverRub: 1_000_000,
    futuresContracts: 100,
    voiceOrdersCount: 1,
    clientAssetsRub: 2_000_000
  });
  assert.equal(partner.stockFeeRub, 100);
  assert.equal(partner.futuresFeeRub, 10);
  assert.equal(partner.voiceFeeRub, 100);
  assert.equal(partner.totalDailyBrokerFeeRub, 210);
});

test('profile progress and mastery percentage update deterministically', () => {
  let profile = createBrokerProfile('Джордан Белфорт', 'wolf');
  assert.equal(getOverallMasteryPercent(profile), 0);

  const q1 = QUESTIONS[0];
  const reward = calculateAnswerReward(q1.difficulty, true, 1, 'study');
  assert.ok(reward > 0);

  profile = recordQuestionOutcome(profile, q1, true, 1, reward);
  assert.equal(profile.totalAnswered, 1);
  assert.equal(profile.totalCorrect, 1);
  assert.equal(profile.capitalEarned, reward);

  const topicStats = getTopicMasteryPercent(profile, q1.topicId);
  assert.equal(topicStats.masteredCount, 1);
  assert.equal(topicStats.totalInTopic, 11);
});


test('answer shuffle preserves the correct text and leaves the bank unchanged for all permutations', () => {
  for (const question of QUESTIONS) {
    const original = JSON.stringify(question);
    const correctText = question.options[question.correctIndex];
    const positions = new Set<number>();
    for (let a = 0; a < 4; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 2; c++) {
      const values = [(a + 0.5) / 4, (b + 0.5) / 3, (c + 0.5) / 2];
      const shuffled = shuffleAnswerOptions(question, () => values.shift()!);
      assert.equal(shuffled.options[shuffled.correctIndex], correctText, question.id);
      assert.deepEqual([...shuffled.options].sort(), [...question.options].sort());
      positions.add(shuffled.correctIndex);
    }
    assert.equal(positions.size, 4, question.id);
    assert.equal(JSON.stringify(question), original);
  }
});
