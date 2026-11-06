import { QUESTIONS } from '../game/questions';
import { DEAL_CASES } from '../game/dealCases';
import React, { useState } from 'react';
import { BrokerProfile } from '../game/types';
import { getOverallMasteryPercent } from '../game/rules';
import { Briefcase, Plus, Award, TrendingUp, BookOpen, ShieldCheck, Trash2 } from 'lucide-react';

interface TitleScreenProps {
  profiles: BrokerProfile[];
  activeProfile: BrokerProfile;
  onSelectProfile: (id: string) => void;
  onCreateProfile: (name: string, avatarId: BrokerProfile['avatarId']) => void;
  onDeleteProfile: (id: string) => void;
  onStartGame: () => void;
  onOpenDossier: () => void;
}

const AVATAR_CONFIG: Record<
  BrokerProfile['avatarId'],
  { label: string; role: string; accent: string }
> = {
  wolf: { label: 'Волк Уолл-Стрит', role: 'Управляющий партнер', accent: '#D4AF37' },
  rookie: { label: 'Холодный звонарь', role: 'Амбициозный брокер', accent: '#10B981' },
  strategist: { label: 'Риск-архитектор', role: 'Инвест-консультант', accent: '#38BDF8' },
  arbitrage: { label: 'Алго-снайпер', role: 'Срочный рынок и HFT', accent: '#F59E0B' }
};

export const TitleScreen: React.FC<TitleScreenProps> = ({
  profiles,
  activeProfile,
  onSelectProfile,
  onCreateProfile,
  onDeleteProfile,
  onStartGame,
  onOpenDossier
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<BrokerProfile['avatarId']>('wolf');
  const [nameError, setNameError] = useState('');

  const masteryPercent = getOverallMasteryPercent(activeProfile);
  const passedExams = activeProfile.examHistory.filter((e) => e.passed).length;

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) {
      setNameError('Введите имя или позывной брокера');
      return;
    }
    onCreateProfile(trimmed, selectedAvatar);
    setNewName('');
    setNameError('');
    setIsCreating(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#090F0C] text-[#F5F2EB] flex flex-col justify-between overflow-hidden select-none">
      {/* Architectural Wall Street Trading Floor SVG Backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-90"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="floorGlow" cx="72%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#1B3B2B" stopOpacity="0.65" />
              <stop offset="55%" stopColor="#0E1B14" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#090F0C" stopOpacity="0.98" />
            </radialGradient>
            <linearGradient id="brassLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#floorGlow)" />
          {/* Subtle architectural perspective grid on the right half */}
          <g stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="1">
            <line x1="680" y1="0" x2="680" y2="900" />
            <line x1="860" y1="0" x2="860" y2="900" />
            <line x1="1040" y1="0" x2="1040" y2="900" />
            <line x1="1220" y1="0" x2="1220" y2="900" />
            <line x1="0" y1="180" x2="1440" y2="180" />
            <line x1="0" y1="360" x2="1440" y2="360" />
            <line x1="0" y1="540" x2="1440" y2="540" />
            <line x1="0" y1="720" x2="1440" y2="720" />
          </g>
          {/* Rising Wall Street Candlestick & Yield Curve Sculpture */}
          <g transform="translate(760, 180)" opacity="0.28">
            <path
              d="M0 420 L95 360 L190 390 L290 260 L395 290 L510 120 L620 60"
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
            />
            <rect x="78" y="310" width="24" height="90" fill="#10B981" />
            <line x1="90" y1="280" x2="90" y2="430" stroke="#10B981" strokeWidth="2" />
            <rect x="178" y="340" width="24" height="75" fill="#DC2626" />
            <line x1="190" y1="315" x2="190" y2="440" stroke="#DC2626" strokeWidth="2" />
            <rect x="278" y="210" width="24" height="110" fill="#10B981" />
            <line x1="290" y1="175" x2="290" y2="350" stroke="#10B981" strokeWidth="2" />
            <rect x="383" y="235" width="24" height="80" fill="#D4AF37" />
            <line x1="395" y1="205" x2="395" y2="345" stroke="#D4AF37" strokeWidth="2" />
            <rect x="498" y="95" width="26" height="145" fill="#10B981" />
            <line x1="511" y1="55" x2="511" y2="265" stroke="#10B981" strokeWidth="2" />
          </g>
          <line x1="0" y1="820" x2="1440" y2="820" stroke="url(#brassLine)" strokeWidth="1" />
        </svg>
      </div>

      {/* Main Content Split: 60% Left Negative Space Title Lockup + 40% Right Interactive Broker Desk */}
      <main className="relative z-10 max-w-[1360px] w-full mx-auto px-6 lg:px-12 pt-10 pb-6 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Zone: Custom SVG Crest Emblem, Title Lockup & Primary Actions */}
        <div className="w-full lg:w-[56%] flex flex-col items-start">
          {/* Bespoke Inline SVG Stratton-Solid Crest Emblem */}
          <div className="flex items-center gap-4 mb-6">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <polygon
                points="32,3 59,18 59,46 32,61 5,46 5,18"
                fill="#111C16"
                stroke="#D4AF37"
                strokeWidth="2"
              />
              <polygon
                points="32,8 54,21 54,43 32,56 10,43 10,21"
                fill="none"
                stroke="#D4AF37"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
              {/* Stylized Wolf / Bull & Columns */}
              <path
                d="M20 42H44M23 26V39M32 23V39M41 26V39M18 23L32 14L46 23"
                stroke="#D4AF37"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="32" cy="19" r="2" fill="#10B981" />
            </svg>
            <div className="text-xs tracking-wider text-[#B8B2A6] font-mono">
              <span>АО ИФК «СОЛИД»</span>
              <span className="mx-2 text-[#D4AF37]">·</span>
              <span>РЕДАКЦИЯ № 27 С 29.09.2026</span>
              <span className="mx-2 text-[#D4AF37]">·</span>
              <span>ПРИКАЗ № 111</span>
            </div>
          </div>

          <h1
            className="font-['Fraunces',serif] font-bold text-[#F5F2EB] tracking-tight leading-[1.06] mb-5"
            style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)', textWrap: 'balance' }}
          >
            Волк с Солид-Стрит: Тарифный Классификатор
          </h1>

          <p className="text-[#C7C2B6] text-base lg:text-lg leading-relaxed max-w-[62ch] mb-8">
            Добро пожаловать в торговый зал. Изучите 74 страницы официального Тарифного классификатора
            АО ИФК «Солид» (редакция № 27) через 4 игровых режима: от холодного обзвона по 6 глубоким
            тематикам и симулятора клиентских сделок до сертификационного экзамена управляющего партнера.
          </p>

          {/* Unboxed Metadata Metrics Strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#B8B2A6] font-mono tabular-nums mb-8 border-y border-[#D4AF37]/20 py-3.5 w-full max-w-xl">
            <div>
              <span className="text-[#D4AF37] font-semibold">{QUESTIONS.length}</span> вопросов в базе
            </div>
            <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>
            <div>
              <span className="text-[#D4AF37] font-semibold">{DEAL_CASES.length}</span> клиентских кейсов
            </div>
            <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>
            <div>
              <span className="text-[#D4AF37] font-semibold">6</span> тематических разделов
            </div>
            <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>
            <div>
              <span className="text-[#10B981] font-semibold">3</span> уровня сложности
            </div>
          </div>

          {/* Primary Menu Actions (<= 3 actions per game shell spec) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              data-start="true"
              onClick={onStartGame}
              className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E5C349] text-[#090F0C] font-semibold text-base rounded-lg transition-transform active:scale-[0.98] flex items-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Войти в торговый зал</span>
            </button>

            <button
              type="button"
              onClick={onOpenDossier}
              className="px-5 py-3.5 bg-[#132019] hover:bg-[#1A2C22] text-[#F5F2EB] border border-[#D4AF37]/35 font-medium text-sm rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>Справочник тарифов и Калькулятор</span>
            </button>

            <a
              href={`${import.meta.env.BASE_URL}tariffs.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 text-sm font-medium text-[#C7C2B6] hover:text-[#D4AF37] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Оригинал PDF (74 стр.)
            </a>
          </div>
        </div>

        {/* Right Zone: Interactive Broker Licence Card & Profile Switcher */}
        <div className="w-full lg:w-[42%] max-w-[500px] bg-[#111C16] border border-[#D4AF37]/30 rounded-xl p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 mb-5">
            <div>
              <div className="text-xs font-mono text-[#D4AF37] tracking-wide">
                ЛИЦЕНЗИЯ БРОКЕРА · УЧЕТНАЯ ЗАПИСЬ
              </div>
              <h2 className="text-xl font-['Fraunces',serif] font-semibold text-[#F5F2EB] mt-0.5">
                {activeProfile.name}
              </h2>
              <p className="text-xs text-[#B8B2A6] mt-0.5">
                {activeProfile.titleRank} · {AVATAR_CONFIG[activeProfile.avatarId].label}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#182820] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>

          {/* Active Broker Telemetry Readouts */}
          <div className="grid grid-cols-3 gap-3 mb-5 font-mono tabular-nums">
            <div className="bg-[#0B130F] border border-[#D4AF37]/15 rounded-lg p-3">
              <div className="text-[11px] text-[#9CA3AF]">КАПИТАЛ БОНУСОВ</div>
              <div className="text-base font-bold text-[#D4AF37] mt-0.5">
                {activeProfile.capitalEarned.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <div className="bg-[#0B130F] border border-[#D4AF37]/15 rounded-lg p-3">
              <div className="text-[11px] text-[#9CA3AF]">ИЗУЧЕНО ТЕМ</div>
              <div className="text-base font-bold text-[#10B981] mt-0.5">{masteryPercent}%</div>
            </div>
            <div className="bg-[#0B130F] border border-[#D4AF37]/15 rounded-lg p-3">
              <div className="text-[11px] text-[#9CA3AF]">ЭКЗАМЕНЫ</div>
              <div className="text-base font-bold text-[#F5F2EB] mt-0.5">
                {passedExams > 0 ? `${passedExams} сдан` : 'Не сдан'}
              </div>
            </div>
          </div>

          {/* Profile Switcher / Creator */}
          {!isCreating ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="broker-profile-select"
                  className="text-xs font-medium text-[#C7C2B6]"
                >
                  Выбрать профиль сотрудника ({profiles.length}):
                </label>
                <button
                  type="button"
                  onClick={() => setIsCreating(true)}
                  className="text-xs font-medium text-[#D4AF37] hover:underline flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Новый брокер</span>
                </button>
              </div>

              <div className="space-y-2 max-h-[168px] overflow-y-auto pr-1">
                {profiles.map((prof) => {
                  const isSelected = prof.id === activeProfile.id;
                  const profMastery = getOverallMasteryPercent(prof);
                  return (
                    <div
                      key={prof.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                        isSelected
                          ? 'bg-[#182920] border-[#D4AF37] text-[#F5F2EB]'
                          : 'bg-[#0C1510] border-[#D4AF37]/15 text-[#B8B2A6] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectProfile(prof.id)}
                        className="flex-1 text-left flex items-center justify-between pr-3 cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-semibold text-[#F5F2EB]">{prof.name}</div>
                          <div className="text-xs text-[#9CA3AF] font-mono tabular-nums">
                            Прогресс: {profMastery}% · Ответов: {prof.totalCorrect}/{prof.totalAnswered}
                          </div>
                        </div>
                        {isSelected && (
                          <span className="text-xs font-mono text-[#10B981] flex items-center gap-1 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                            Активен
                          </span>
                        )}
                      </button>
                      {profiles.length > 1 && (
                        <button
                          type="button"
                          aria-label={`Удалить профиль ${prof.name}`}
                          onClick={() => onDeleteProfile(prof.id)}
                          className="p-1.5 text-[#9CA3AF] hover:text-[#EF4444] transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <form onSubmit={handleCreateSubmit} className="space-y-3 bg-[#0C1510] p-4 rounded-lg border border-[#D4AF37]/30">
              <div className="text-xs font-semibold text-[#D4AF37]">
                РЕГИСТРАЦИЯ НОВОГО БРОКЕРА В ЗАЛЕ
              </div>
              <div>
                <label htmlFor="new-broker-name" className="block text-xs text-[#C7C2B6] mb-1">
                  Имя и фамилия (или позывной):
                </label>
                <input
                  id="new-broker-name"
                  type="text"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  placeholder="Например: Донни Азофф"
                  className="w-full px-3 py-2 bg-[#111C16] border border-[#D4AF37]/30 rounded text-sm text-[#F5F2EB] focus:outline-none focus:border-[#D4AF37]"
                />
                {nameError && <p className="text-xs text-[#EF4444] mt-1">{nameError}</p>}
              </div>

              <div>
                <span className="block text-xs text-[#C7C2B6] mb-1.5">Специализация на Уолл-стрит:</span>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(AVATAR_CONFIG) as BrokerProfile['avatarId'][]).map((avKey) => {
                    const cfg = AVATAR_CONFIG[avKey];
                    return (
                      <button
                        key={avKey}
                        type="button"
                        onClick={() => setSelectedAvatar(avKey)}
                        className={`p-2 text-left rounded border text-xs transition-colors cursor-pointer ${
                          selectedAvatar === avKey
                            ? 'bg-[#1B2E23] border-[#D4AF37] text-[#F5F2EB]'
                            : 'bg-[#111C16] border-[#D4AF37]/15 text-[#9CA3AF]'
                        }`}
                      >
                        <div className="font-semibold text-[#F5F2EB]">{cfg.label}</div>
                        <div className="text-[11px] text-[#B8B2A6]">{cfg.role}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreating(false);
                    setNameError('');
                  }}
                  className="px-3 py-1.5 text-xs text-[#C7C2B6] hover:text-[#F5F2EB] cursor-pointer"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#D4AF37] text-[#090F0C] font-semibold text-xs rounded hover:bg-[#E5C349] cursor-pointer whitespace-nowrap shrink-0"
                >
                  Создать досье
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Flat Borderless Single-Line Control Hint in Bottom Safe Margin */}
      <footer className="relative z-10 max-w-[1360px] w-full mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#9CA3AF] font-mono">
        <div>
          Enter / Пробел Начать торги · 1–4 Выбор ответа · H Подсказка Джордана · P / Esc Пауза · M Звук
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>База знаний: Тарифный классификатор АО ИФК «Солид» (Редакция № 27)</span>
        </div>
      </footer>
    </div>
  );
};
