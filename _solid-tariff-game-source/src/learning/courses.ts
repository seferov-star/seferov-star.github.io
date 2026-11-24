import { QUESTIONS } from '../game/questions';
import { DEAL_CASES } from '../game/dealCases';
import { TOPICS } from '../game/tariffData';
import regulationData from './regulations.json';

export type Mode = 'study' | 'blitz' | 'cases' | 'exam';
export type Level = 'easy' | 'medium' | 'hard';
export interface Item {
  id: string; topicId: string; kind: 'question' | 'case'; difficulty: Level;
  question: string; wolfContext: string; options: string[]; correctIndex: number;
  explanation: string; clauseRef: string; sourcePage: number;
  sourceClause?: string;
}
export interface Topic { id: string; title: string; description: string; sectionRef: string }
export interface Course {
  id: string; title: string; shortTitle: string; subtitle: string; edition: string;
  sourceUrl: string; pdf: string; topics: Topic[]; items: Item[];
  exam: { count: number; seconds: number; passPercent: number };
}
const pageOf = (ref: string) => Number(ref.match(/стр\.\s*(\d+)/)?.[1] || 1);
export const COURSES: Course[] = [
  {
    id: 'tariffs', title: 'Тарифный классификатор', shortTitle: 'Тарифы',
    subtitle: 'Комиссии, тарифные планы и стоимость обслуживания.',
    edition: 'Редакция № 27 · действует с 29.09.2026',
    sourceUrl: 'https://solidinvest.ru/upload/iblock/2c6/6i4m9mfz23r6u66ldoggfy3i33xhbem8/Tarifnyy-klassifikator-AO-IFK-Solid_redaktsiya-27_s-29.09.2026.pdf',
    pdf: 'tariffs.pdf', topics: TOPICS,
    items: [
      ...QUESTIONS.map(q => ({ ...q, kind: 'question' as const, sourcePage: pageOf(q.clauseRef) })),
      ...DEAL_CASES.map(d => ({ id: d.id, topicId: d.topicId, difficulty: d.difficulty,
        kind: 'case' as const, question: `${d.clientName}: ${d.taskQuestion}`,
        wolfContext: d.clientStory, options: d.options, correctIndex: d.correctIndex,
        explanation: d.calculationBreakdown, clauseRef: d.clauseRef, sourcePage: pageOf(d.clauseRef) }))
    ], exam: { count: 20, seconds: 900, passPercent: 80 }
  },
  {
    id: 'regulations', title: 'Регламент оказания услуг', shortTitle: 'Регламент',
    subtitle: 'Путь клиента: от договора и поручений до рисков, отчётности и защиты прав.',
    edition: 'Редакция № 93 · действует с 21.10.2026',
    sourceUrl: 'https://solidinvest.ru/upload/uf/15a/2oww2u7o0ht6zyy6iem5dh6m8ezu53o0/Reglament-okazaniya-AO-IFK-Solid-uslug-na-finansovykh-rynkakh_05.10.2026.pdf',
    pdf: 'https://solidinvest.ru/upload/uf/15a/2oww2u7o0ht6zyy6iem5dh6m8ezu53o0/Reglament-okazaniya-AO-IFK-Solid-uslug-na-finansovykh-rynkakh_05.10.2026.pdf', topics: regulationData.topics,
    items: regulationData.items as Item[], exam: { count: 30, seconds: 900, passPercent: 80 }
  }
];

export function shuffle<T>(values: readonly T[], random = Math.random): T[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function shuffleItem(item: Item, random = Math.random): Item {
  const indices = shuffle(item.options.map((_, index) => index), random);
  return { ...item, options: indices.map(i => item.options[i]), correctIndex: indices.indexOf(item.correctIndex) };
}
export function makeDeck(course: Course, mode: Mode, topicId = 'all', level = 'all', ids?: string[], random = Math.random): Item[] {
  let pool = course.items.filter(q => q.kind === (mode === 'cases' ? 'case' : 'question'));
  if (mode === 'exam') {
    // Full-course examination: represent every available section before filling remaining slots.
    const selected: Item[] = [];
    const counts: Record<Level, number> = { easy: 0, medium: 0, hard: 0 };
    const pick = (candidates: Item[]) => {
      const ordered = shuffle(candidates, random).sort((a,b) => counts[a.difficulty] - counts[b.difficulty]);
      if (ordered[0]) { selected.push(ordered[0]); counts[ordered[0].difficulty]++; }
    };
    for (const t of shuffle(course.topics, random)) pick(pool.filter(q => q.topicId === t.id));
    while (selected.length < Math.min(course.exam.count, pool.length)) {
      pick(pool.filter(q => !selected.some(s => s.id === q.id)));
    }
    pool = shuffle(selected, random).slice(0, course.exam.count);
  } else {
    pool = pool.filter(q => (topicId === 'all' || q.topicId === topicId) && (level === 'all' || q.difficulty === level));
    if (ids) pool = pool.filter(q => ids.includes(q.id));
    if (mode === 'blitz' || mode === 'cases') pool = shuffle(pool, random);
  }
  return pool.map(q => shuffleItem(q, random));
}
export const pdfLink = (course: Course, page = 1) => `${/^https?:/.test(course.pdf) ? course.pdf : import.meta.env.BASE_URL + course.pdf}#page=${page}`;
