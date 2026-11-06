import { BrokerProfile } from '../game/types';
import { createBrokerProfile } from '../game/rules';

const PROFILES_STORAGE_KEY = 'solid_wolf_broker_profiles_v1';
const ACTIVE_PROFILE_ID_KEY = 'solid_wolf_active_profile_id_v1';

export function loadBrokerProfiles(): {
  profiles: BrokerProfile[];
  activeProfileId: string;
} {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    const activeId = localStorage.getItem(ACTIVE_PROFILE_ID_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as BrokerProfile[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        const validActive = parsed.find((p) => p.id === activeId)?.id || parsed[0].id;
        return { profiles: parsed, activeProfileId: validActive };
      }
    }
  } catch {
    // Fallback to default seed profile
  }

  const defaultProfile = createBrokerProfile('Джордан Белфорт', 'wolf');
  const initialProfiles = [defaultProfile];
  saveBrokerProfiles(initialProfiles, defaultProfile.id);
  return {
    profiles: initialProfiles,
    activeProfileId: defaultProfile.id
  };
}

export function saveBrokerProfiles(profiles: BrokerProfile[], activeProfileId: string): void {
  try {
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
    localStorage.setItem(ACTIVE_PROFILE_ID_KEY, activeProfileId);
  } catch {
    // Ignore storage quota errors
  }
}
