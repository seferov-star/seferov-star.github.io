import { BrokerProfile } from '../game/types';
import { createBrokerProfile } from '../game/rules';
import { COURSES } from './courses';
export interface Progress { correct: string[]; wrong: string[]; bookmarks: string[]; answered: number; totalCorrect: number }
export interface Attempt { courseId: string; mode: string; date: string; correct: number; total: number; passed: boolean }
export type Profile = BrokerProfile & { learning: Record<string, Progress>; learningHistory: Attempt[] };
export const PROFILE_KEY = 'solid_wolf_broker_profiles_v1';
const ACTIVE_KEY = 'solid_wolf_active_profile_id_v1';
export const emptyProgress = (): Progress => ({ correct: [], wrong: [], bookmarks: [], answered: 0, totalCorrect: 0 });
export function migrateProfile(raw: BrokerProfile & Partial<Profile>): Profile {
  const learning = { ...(raw.learning || {}) };
  if (!learning.tariffs) {
    const legacy = Object.values(raw.topicProgress || {});
    learning.tariffs = {
      correct: [...new Set(legacy.flatMap(t => t.correctIds || []))],
      wrong: [...new Set(legacy.flatMap(t => t.wrongIds || []))],
      bookmarks: raw.bookmarkedQuestionIds || [], answered: raw.totalAnswered || 0, totalCorrect: raw.totalCorrect || 0
    };
  }
  for (const course of COURSES) learning[course.id] ||= emptyProgress();
  return { ...raw, learning, learningHistory: raw.learningHistory || [] };
}
export const newProfile = (name: string): Profile => migrateProfile(createBrokerProfile(name, 'wolf'));
export function loadProfiles(): { profiles: Profile[]; active: string } {
  try {
    const data = JSON.parse(localStorage.getItem(PROFILE_KEY) || '[]');
    if (Array.isArray(data) && data.length && data.every(p => typeof p.id === 'string' && typeof p.name === 'string')) {
      // Preserve the original serialized profiles before the first course-aware migration.
      if (data.some(p => !p.learning) && !localStorage.getItem(`${PROFILE_KEY}_before_courses`)) {
        try { localStorage.setItem(`${PROFILE_KEY}_before_courses`, JSON.stringify(data)); }
        catch { /* A blocked backup write must not hide readable existing profiles. */ }
      }
      const profiles = data.map(migrateProfile);
      const active = localStorage.getItem(ACTIVE_KEY);
      return { profiles, active: profiles.some(p => p.id === active) ? active! : profiles[0].id };
    }
  } catch { /* The interface shows an explicit warning when saving is unavailable. */ }
  const p = newProfile('Джордан Белфорт');
  return { profiles: [p], active: p.id };
}
export function saveProfiles(profiles: Profile[], active: string): boolean {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profiles)); localStorage.setItem(ACTIVE_KEY, active); return true; }
  catch { return false; }
}
