export type TopicId =
  | 'general_rules'
  | 'flagship_pro'
  | 'classic_partner'
  | 'vip_advisory'
  | 'extra_fees_services'
  | 'depository_archive';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type GameMode =
  | 'study'        // Холодный обзвон: глубокое изучение темы с разбором и подсказками
  | 'blitz'        // Биржевая лихорадка: игра на выживание (3 жизни, таймер, комбо)
  | 'deals'        // Клиент на миллион: симулятор сделок и подбора тарифа под клиента
  | 'exam';        // Квалификационный экзамен: 20 вопросов, 15 минут, сертификат

export type AppScreenState = 'title' | 'playing' | 'paused' | 'gameover';

export interface TopicMeta {
  id: TopicId;
  number: string;
  title: string;
  wolfSubtitle: string;
  sectionRef: string;
  description: string;
  keyHighlights: string[];
  summaryTable: {
    parameter: string;
    value: string;
    note: string;
  }[];
}

export interface TariffQuestion {
  id: string;
  topicId: TopicId;
  difficulty: DifficultyLevel;
  question: string;
  wolfContext: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clauseRef: string; // e.g. "Раздел А, ТП «Solid Pro+», п. А.6.1 (стр. 8)"
}

export interface ClientDealCase {
  id: string;
  topicId: TopicId;
  difficulty: DifficultyLevel;
  clientName: string;
  clientRole: string;
  clientAssetsRub: number;
  dailyTurnoverRub: number;
  clientStory: string;
  taskQuestion: string;
  options: string[];
  correctIndex: number;
  calculationBreakdown: string;
  clauseRef: string;
}

export interface TopicProgress {
  answeredIds: string[];
  correctIds: string[];
  wrongIds: string[];
  bestStreak: number;
  attemptsCount: number;
  lastStudiedAt: string | null;
}

export interface ExamAttemptRecord {
  id: string;
  date: string;
  scorePercent: number;
  correctCount: number;
  totalCount: number;
  passed: boolean;
  durationSec: number;
  topicFilter: TopicId | 'all';
}

export interface BrokerProfile {
  id: string;
  name: string;
  titleRank: string;
  avatarId: 'rookie' | 'wolf' | 'strategist' | 'arbitrage';
  createdAt: string;
  capitalEarned: number;
  totalAnswered: number;
  totalCorrect: number;
  bestCombo: number;
  topicProgress: Record<TopicId, TopicProgress>;
  examHistory: ExamAttemptRecord[];
  bookmarkedQuestionIds: string[];
}

export interface ActiveSessionResult {
  mode: GameMode;
  topicId: TopicId | 'all';
  difficulty: DifficultyLevel | 'all';
  totalQuestions: number;
  correctAnswers: number;
  scorePercent: number;
  capitalEarned: number;
  maxStreak: number;
  elapsedSec: number;
  passed: boolean;
  topicBreakdown: Record<TopicId, { correct: number; total: number }>;
  mistakes: {
    question: string;
    yourAnswer: string;
    correctAnswer: string;
    explanation: string;
    clauseRef: string;
  }[];
}
