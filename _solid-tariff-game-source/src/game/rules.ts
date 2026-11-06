import {
  BrokerProfile,
  DifficultyLevel,
  GameMode,
  TariffQuestion,
  TopicId,
  TopicProgress
} from './types';
import { TOPICS } from './tariffData';
import { QUESTIONS } from './questions';

export const EXAM_PASS_THRESHOLD_PERCENT = 80;
export const EXAM_QUESTION_COUNT = 20;
export const EXAM_DURATION_SEC = 15 * 60; // 15 minutes

// Shuffle a session copy, preserving the answer by its original index.
// The source bank and saved question IDs remain unchanged.
export function shuffleAnswerOptions(question: TariffQuestion, random = Math.random): TariffQuestion {
  const indices = question.options.map((_, index) => index);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...question,
    options: indices.map((index) => question.options[index]),
    correctIndex: indices.indexOf(question.correctIndex)
  };
}

export const DIFFICULTY_LABELS: Record<DifficultyLevel, { title: string; wolfTag: string; baseCapital: number }> = {
  easy: {
    title: 'Стажер (Легкий)',
    wolfTag: 'Junior Caller · Холодная база',
    baseCapital: 5_000
  },
  medium: {
    title: 'Брокер (Средний)',
    wolfTag: 'Licensed Broker · Торговый деск',
    baseCapital: 12_000
  },
  hard: {
    title: 'Волк с Уолл-Стрит (Сложный)',
    wolfTag: 'Managing Partner · Высшая лига',
    baseCapital: 25_000
  }
};

export function createEmptyTopicProgress(): Record<TopicId, TopicProgress> {
  const map = {} as Record<TopicId, TopicProgress>;
  for (const t of TOPICS) {
    map[t.id] = {
      answeredIds: [],
      correctIds: [],
      wrongIds: [],
      bestStreak: 0,
      attemptsCount: 0,
      lastStudiedAt: null
    };
  }
  return map;
}

export function getBrokerRankTitle(capitalEarned: number, totalCorrect: number, passedExams: number): string {
  if (passedExams >= 1 && capitalEarned >= 250_000) {
    return 'Управляющий партнер Солид-Стрит';
  }
  if (passedExams >= 1 || capitalEarned >= 150_000 || totalCorrect >= 35) {
    return 'Волк с Уолл-Стрит (Senior Partner)';
  }
  if (capitalEarned >= 60_000 || totalCorrect >= 18) {
    return 'Вице-президент торгового деска';
  }
  if (capitalEarned >= 20_000 || totalCorrect >= 6) {
    return 'Лицензированный брокер';
  }
  return 'Младший стажер (Холодный обзвон)';
}

export function createBrokerProfile(
  name: string,
  avatarId: BrokerProfile['avatarId'] = 'wolf'
): BrokerProfile {
  const cleanName = name.trim() || 'Джордан Белфорт';
  return {
    id: `broker_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: cleanName,
    titleRank: 'Младший стажер (Холодный обзвон)',
    avatarId,
    createdAt: new Date().toISOString(),
    capitalEarned: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    bestCombo: 0,
    topicProgress: createEmptyTopicProgress(),
    examHistory: [],
    bookmarkedQuestionIds: []
  };
}

export function calculateAnswerReward(
  difficulty: DifficultyLevel,
  isCorrect: boolean,
  currentStreak: number,
  mode: GameMode
): number {
  if (!isCorrect) return 0;
  const base = DIFFICULTY_LABELS[difficulty].baseCapital;
  const comboMultiplier = 1 + Math.min(currentStreak, 10) * 0.15;
  const modeBonus = mode === 'blitz' ? 1.25 : mode === 'exam' ? 1.5 : mode === 'deals' ? 1.4 : 1.0;
  return Math.round(base * comboMultiplier * modeBonus);
}

export function filterQuestions(
  topicId: TopicId | 'all',
  difficulty: DifficultyLevel | 'all',
  allQuestions: TariffQuestion[] = QUESTIONS
): TariffQuestion[] {
  return allQuestions.filter((q) => {
    const matchTopic = topicId === 'all' || q.topicId === topicId;
    const matchDiff = difficulty === 'all' || q.difficulty === difficulty;
    return matchTopic && matchDiff;
  });
}

export function buildExamQuestionDeck(
  topicId: TopicId | 'all' = 'all',
  count: number = EXAM_QUESTION_COUNT,
  allQuestions: TariffQuestion[] = QUESTIONS
): TariffQuestion[] {
  const pool = filterQuestions(topicId, 'all', allQuestions);
  // Deterministic-friendly shuffle copy
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export function recordQuestionOutcome(
  profile: BrokerProfile,
  question: TariffQuestion,
  isCorrect: boolean,
  newStreak: number,
  rewardCapital: number,
  timestampIso: string = new Date().toISOString()
): BrokerProfile {
  const prevTopic = profile.topicProgress[question.topicId] || {
    answeredIds: [],
    correctIds: [],
    wrongIds: [],
    bestStreak: 0,
    attemptsCount: 0,
    lastStudiedAt: null
  };

  const answeredSet = new Set(prevTopic.answeredIds);
  answeredSet.add(question.id);

  const correctSet = new Set(prevTopic.correctIds);
  const wrongSet = new Set(prevTopic.wrongIds);

  if (isCorrect) {
    correctSet.add(question.id);
    wrongSet.delete(question.id);
  } else if (!correctSet.has(question.id)) {
    wrongSet.add(question.id);
  }

  const updatedTopic: TopicProgress = {
    answeredIds: Array.from(answeredSet),
    correctIds: Array.from(correctSet),
    wrongIds: Array.from(wrongSet),
    bestStreak: Math.max(prevTopic.bestStreak, isCorrect ? newStreak : 0),
    attemptsCount: prevTopic.attemptsCount + 1,
    lastStudiedAt: timestampIso
  };

  const updatedCapital = profile.capitalEarned + rewardCapital;
  const updatedTotalAnswered = profile.totalAnswered + 1;
  const updatedTotalCorrect = profile.totalCorrect + (isCorrect ? 1 : 0);
  const passedExams = profile.examHistory.filter((e) => e.passed).length;

  return {
    ...profile,
    capitalEarned: updatedCapital,
    totalAnswered: updatedTotalAnswered,
    totalCorrect: updatedTotalCorrect,
    bestCombo: Math.max(profile.bestCombo, isCorrect ? newStreak : 0),
    titleRank: getBrokerRankTitle(updatedCapital, updatedTotalCorrect, passedExams),
    topicProgress: {
      ...profile.topicProgress,
      [question.topicId]: updatedTopic
    }
  };
}

export function getTopicMasteryPercent(
  profile: BrokerProfile,
  topicId: TopicId,
  allQuestions: TariffQuestion[] = QUESTIONS
): {
  totalInTopic: number;
  masteredCount: number;
  percent: number;
  byDifficulty: Record<DifficultyLevel, { mastered: number; total: number }>;
} {
  const topicQuestions = allQuestions.filter((q) => q.topicId === topicId);
  const correctSet = new Set(profile.topicProgress[topicId]?.correctIds || []);
  const masteredCount = topicQuestions.filter((q) => correctSet.has(q.id)).length;
  const totalInTopic = topicQuestions.length;
  const percent = totalInTopic > 0 ? Math.round((masteredCount / totalInTopic) * 100) : 0;

  const byDifficulty: Record<DifficultyLevel, { mastered: number; total: number }> = {
    easy: { mastered: 0, total: 0 },
    medium: { mastered: 0, total: 0 },
    hard: { mastered: 0, total: 0 }
  };

  for (const q of topicQuestions) {
    byDifficulty[q.difficulty].total += 1;
    if (correctSet.has(q.id)) {
      byDifficulty[q.difficulty].mastered += 1;
    }
  }

  return { totalInTopic, masteredCount, percent, byDifficulty };
}

export function getOverallMasteryPercent(
  profile: BrokerProfile,
  allQuestions: TariffQuestion[] = QUESTIONS
): number {
  if (allQuestions.length === 0) return 0;
  let totalMastered = 0;
  for (const t of TOPICS) {
    const { masteredCount } = getTopicMasteryPercent(profile, t.id, allQuestions);
    totalMastered += masteredCount;
  }
  return Math.round((totalMastered / allQuestions.length) * 100);
}

// ============================================================================
// КАЛЬКУЛЯТОР КОМИССИЙ ПО ТАРИФНОМУ КЛАССИФИКАТОРУ (РЕДАКЦИЯ № 27)
// ============================================================================
export type CalculatorTariffId =
  | 'solid_pro'
  | 'solid_pro_plus'
  | 'base_moscow'
  | 'base_almetyevsk'
  | 'razovyy'
  | 'partner'
  | 'pb_pro'
  | 'trader_pro'
  | 'pb_corp';

export interface CommissionCalculationInput {
  tariffId: CalculatorTariffId;
  stockTurnoverRub: number;
  futuresContracts: number;
  voiceOrdersCount: number;
  clientAssetsRub: number;
}

export interface CommissionCalculationOutput {
  stockRatePercent: number;
  stockFeeRub: number;
  futuresFeeRub: number;
  voiceFeeRub: number;
  monthlyMinFeeRub: number;
  includesExchangeFee: boolean;
  totalDailyBrokerFeeRub: number;
  summaryNote: string;
}

export function getSolidProPlusStockRate(dailyTurnoverRub: number): number {
  if (dailyTurnoverRub <= 2_000_000) return 0.05;
  if (dailyTurnoverRub <= 10_000_000) return 0.04;
  if (dailyTurnoverRub <= 30_000_000) return 0.03;
  if (dailyTurnoverRub <= 60_000_000) return 0.02;
  if (dailyTurnoverRub <= 200_000_000) return 0.01;
  return 0.005;
}

export function calculateTariffCommission(input: CommissionCalculationInput): CommissionCalculationOutput {
  const { tariffId, stockTurnoverRub, futuresContracts, voiceOrdersCount, clientAssetsRub } = input;
  const turnover = Math.max(0, stockTurnoverRub);
  const contracts = Math.max(0, Math.floor(futuresContracts));
  const voiceOrders = Math.max(0, Math.floor(voiceOrdersCount));

  let stockRatePercent = 0;
  let stockFeeRub = 0;
  let futuresFeeRub = 0;
  let voiceFeeRub = voiceOrders * 100;
  let monthlyMinFeeRub = 0;
  let includesExchangeFee = true;
  let summaryNote = '';

  switch (tariffId) {
    case 'solid_pro': {
      stockRatePercent = 0.25;
      stockFeeRub = turnover * (stockRatePercent / 100);
      futuresFeeRub = contracts * 1;
      voiceFeeRub = 0; // Пункт А.6.4 исключен в Solid Pro
      monthlyMinFeeRub = 0;
      includesExchangeFee = true;
      summaryNote = 'Включает комиссию Мосбиржи на фондовом рынке. Минимальная ежемесячная плата — 0 руб.';
      break;
    }
    case 'solid_pro_plus': {
      stockRatePercent = getSolidProPlusStockRate(turnover);
      stockFeeRub = turnover * (stockRatePercent / 100);
      futuresFeeRub = contracts * 0;
      voiceFeeRub = 0;
      monthlyMinFeeRub = clientAssetsRub > 10_000_000 ? 0 : Math.max(0, 1200 - (stockFeeRub + futuresFeeRub));
      includesExchangeFee = false;
      summaryNote =
        clientAssetsRub > 10_000_000
          ? 'Активы > 10 млн ₽: мин. плата 0 ₽/мес. Срочный рынок — 0 ₽/контракт (не вкл. сбор биржи).'
          : 'При активах до 10 млн ₽ мин. плата 1 200 ₽/мес (уменьшается на биржевые сделки).';
      break;
    }
    case 'base_moscow': {
      if (turnover <= 1_000_000) stockRatePercent = 0.5;
      else if (turnover <= 10_000_000) stockRatePercent = 0.2;
      else stockRatePercent = 0.1;
      stockFeeRub = turnover > 0 ? Math.max(0.03, turnover * (stockRatePercent / 100)) : 0;
      futuresFeeRub = contracts * 5;
      monthlyMinFeeRub = 0;
      includesExchangeFee = true;
      summaryNote = 'Москва и представительства: включает комиссию Мосбиржи (мин. 0,03 ₽ за сделку).';
      break;
    }
    case 'base_almetyevsk': {
      if (turnover <= 500_000) stockRatePercent = 0.3;
      else if (turnover <= 1_000_000) stockRatePercent = 0.2;
      else stockRatePercent = 0.1;
      stockFeeRub = turnover > 0 ? Math.max(0.03, turnover * (stockRatePercent / 100)) : 0;
      futuresFeeRub = contracts * 2;
      const totalEarned = stockFeeRub + futuresFeeRub + voiceFeeRub;
      monthlyMinFeeRub = totalEarned > 0 ? Math.max(0, 150 - totalEarned) : 0;
      includesExchangeFee = true;
      summaryNote = 'Филиал в г. Альметьевске и г. Елабуга: срочный рынок 2 ₽/контракт, мин. 150 ₽/мес при наличии операций.';
      break;
    }
    case 'razovyy': {
      stockRatePercent = 1.5;
      stockFeeRub = turnover > 0 ? Math.max(0.03, turnover * (stockRatePercent / 100)) : 0;
      futuresFeeRub = 0; // Срочный рынок не предоставляется
      monthlyMinFeeRub = 0;
      includesExchangeFee = true;
      summaryNote = 'Срочный, валютный и рынок СПБ Биржи не предоставляются. Смена ТП — только после продажи всех задепонированных ЦБ.';
      break;
    }
    case 'partner': {
      stockRatePercent = 0.01;
      stockFeeRub = turnover * (stockRatePercent / 100);
      futuresFeeRub = contracts * 0.1;
      monthlyMinFeeRub = 0;
      includesExchangeFee = false;
      summaryNote = 'Для сотрудников 7 компаний группы «Солид». Перенос позиции — Ставка ЦБ + 1,5% годовых.';
      break;
    }
    case 'pb_pro': {
      stockRatePercent = 0;
      stockFeeRub = 0;
      futuresFeeRub = 0;
      voiceFeeRub = 0;
      monthlyMinFeeRub = 0;
      includesExchangeFee = false;
      summaryNote = 'Сделки — 0%. Вознаграждение за успех — 15% (High Water Mark, без купонов) + инфосопровождение 1,2% годовых.';
      break;
    }
    case 'trader_pro': {
      stockRatePercent = 0.2;
      stockFeeRub = turnover * (stockRatePercent / 100);
      futuresFeeRub = contracts * 10;
      voiceFeeRub = 0;
      monthlyMinFeeRub = 0;
      includesExchangeFee = true;
      summaryNote = 'Рекомендуемые активы от 10 млн ₽. Включает комиссию биржи. Success Fee и Management Fee не взимаются.';
      break;
    }
    case 'pb_corp': {
      stockRatePercent = 0.2;
      const calcSettlementFee = turnover * 0.0003; // А.6.4: 0,03% за расчеты
      stockFeeRub = turnover * (stockRatePercent / 100) + calcSettlementFee;
      futuresFeeRub = contracts * 10;
      monthlyMinFeeRub = 0;
      includesExchangeFee = true;
      summaryNote = 'Для юрлиц (от 100 млн ₽). Учтена основная комиссия 0,2% + комиссия за расчеты 0,03% (п. А.6.4).';
      break;
    }
  }

  return {
    stockRatePercent,
    stockFeeRub: Math.round(stockFeeRub * 100) / 100,
    futuresFeeRub: Math.round(futuresFeeRub * 100) / 100,
    voiceFeeRub,
    monthlyMinFeeRub: Math.round(monthlyMinFeeRub * 100) / 100,
    includesExchangeFee,
    totalDailyBrokerFeeRub: Math.round((stockFeeRub + futuresFeeRub + voiceFeeRub) * 100) / 100,
    summaryNote
  };
}
