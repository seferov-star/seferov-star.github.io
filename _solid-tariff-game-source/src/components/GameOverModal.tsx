import React from 'react';
import { ActiveSessionResult, BrokerProfile } from '../game/types';
import { TOPICS } from '../game/tariffData';
import { Award, RotateCcw, LayoutGrid, CheckCircle2, AlertTriangle } from 'lucide-react';

interface GameOverModalProps {
  result: ActiveSessionResult;
  profile: BrokerProfile;
  onPlayAgain: () => void;
  onReturnToHub: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  result,
  profile,
  onPlayAgain,
  onReturnToHub
}) => {
  const isExam = result.mode === 'exam';
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Итоги торговой сессии и экзамена"
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#111C16] border-2 border-[#D4AF37] rounded-xl max-w-3xl w-full p-6 lg:p-8 text-[#F5F2EB] shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        {/* Header Status */}
        <div className="flex items-start justify-between gap-4 border-b border-[#D4AF37]/25 pb-5 mb-6">
          <div>
            <div className="text-xs font-mono text-[#D4AF37] tracking-wider">
              {isExam
                ? 'ПРОТОКОЛ АТТЕСТАЦИОННОЙ КОМИССИИ АО ИФК «СОЛИД» · РЕДАКЦИЯ № 27'
                : 'ОТЧЕТ ТОРГОВОГО ДЕСКА СОЛИД-СТРИТ'}
            </div>
            <h2 className="text-2xl lg:text-3xl font-['Fraunces',serif] font-bold mt-1">
              {result.passed
                ? isExam
                  ? 'Экзамен сдан! Лицензия Волка Уолл-Стрит подтверждена'
                  : 'Сделка закрыта в плюс! Блестящий результат'
                : isExam
                ? 'Экзамен не сдан (требуется минимум 80%)'
                : 'Маржин-колл! Требуется доработка тарифов'}
            </h2>
            <p className="text-xs text-[#B8B2A6] mt-1">
              Сотрудник: <span className="text-[#F5F2EB] font-semibold">{profile.name}</span> · Ранг:{' '}
              <span className="text-[#D4AF37]">{profile.titleRank}</span>
            </p>
          </div>

          <div
            className={`px-3.5 py-2 rounded-lg border font-mono text-xs font-bold shrink-0 flex items-center gap-1.5 ${
              result.passed
                ? 'bg-[#10B981]/15 border-[#10B981] text-[#10B981]'
                : 'bg-[#EF4444]/15 border-[#EF4444] text-[#EF4444]'
            }`}
          >
            {result.passed ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>АТТЕСТОВАН</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4" />
                <span>НА ПЕРЕСДАЧУ</span>
              </>
            )}
          </div>
        </div>

        {/* 3 Primary Tabular-Nums Stat Tiles */}
        <div className="grid grid-cols-3 gap-4 mb-6 font-mono tabular-nums">
          <div className="bg-[#0B130E] border border-[#D4AF37]/25 rounded-lg p-4">
            <div className="text-[11px] text-[#9CA3AF]">ТОЧНОСТЬ ОТВЕТОВ</div>
            <div className="text-2xl font-bold text-[#F5F2EB] mt-1">
              {result.scorePercent}%{' '}
              <span className="text-xs font-normal text-[#B8B2A6]">
                ({result.correctAnswers}/{result.totalQuestions})
              </span>
            </div>
          </div>

          <div className="bg-[#0B130E] border border-[#D4AF37]/25 rounded-lg p-4">
            <div className="text-[11px] text-[#9CA3AF]">ЗАРАБОТАННЫЙ БОНУС</div>
            <div className="text-2xl font-bold text-[#D4AF37] mt-1">
              +{result.capitalEarned.toLocaleString('ru-RU')} ₽
            </div>
          </div>

          <div className="bg-[#0B130E] border border-[#D4AF37]/25 rounded-lg p-4">
            <div className="text-[11px] text-[#9CA3AF]">ВРЕМЯ · МАКС. СЕРИЯ</div>
            <div className="text-2xl font-bold text-[#10B981] mt-1">
              {formatTime(result.elapsedSec)} · x{result.maxStreak}
            </div>
          </div>
        </div>

        {/* Official Certificate Block if Exam Passed */}
        {isExam && result.passed && (
          <div className="bg-[#16251C] border-2 border-[#D4AF37] rounded-xl p-5 mb-6 relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs font-semibold">
                <Award className="w-5 h-5" />
                <span>ИМЕННОЙ СЕРТИФИКАТ ЗНАНИЯ ТАРИФНОГО КЛАССИФИКАТОРА (РЕД. № 27)</span>
              </div>
              <span className="text-xs font-mono text-[#B8B2A6]">Приказ № 111 от 09.09.2026</span>
            </div>
            <p className="text-sm text-[#F5F2EB] leading-relaxed">
              Настоящим подтверждается, что брокер <strong>{profile.name}</strong> успешно сдал
              квалификационный экзамен по Тарифному классификатору АО ИФК «Солид» (редакция № 27, вступает
              в силу с 29.09.2026) с результатом <strong>{result.scorePercent}%</strong> (
              {result.correctAnswers} из {result.totalQuestions}).
            </p>
          </div>
        )}

        {/* Topic Breakdown */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#D4AF37] mb-2.5">
            ДЕТАЛИЗАЦИЯ РЕЗУЛЬТАТА ПО ТЕМАТИКАМ:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono tabular-nums text-xs">
            {TOPICS.map((t) => {
              const stat = result.topicBreakdown[t.id];
              if (!stat || stat.total === 0) return null;
              const pct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div
                  key={t.id}
                  className="bg-[#0B130E] border border-[#D4AF37]/15 rounded-lg p-3 flex items-center justify-between"
                >
                  <span className="font-sans text-[#E5E0D5] truncate pr-2">
                    {t.number}. {t.title}
                  </span>
                  <span
                    className={`font-bold shrink-0 ${
                      pct >= 80 ? 'text-[#10B981]' : pct >= 50 ? 'text-[#D4AF37]' : 'text-[#EF4444]'
                    }`}
                  >
                    {stat.correct}/{stat.total} ({pct}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mistakes Review */}
        {result.mistakes.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-mono text-[#EF4444] mb-2.5">
              РАБОТА НАД ОШИБКАМИ ({result.mistakes.length}):
            </div>
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {result.mistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B130E] border border-[#EF4444]/30 rounded-lg p-3.5 text-xs space-y-1.5"
                >
                  <div className="font-semibold text-[#F5F2EB]">{m.question}</div>
                  <div className="text-[#EF4444]">Ваш ответ: {m.yourAnswer}</div>
                  <div className="text-[#10B981] font-medium">Верный ответ: {m.correctAnswer}</div>
                  <div className="text-[#B8B2A6] pt-1 border-t border-white/10">
                    {m.explanation}{' '}
                    <span className="font-mono text-[#D4AF37]">[{m.clauseRef}]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Primary Action CTAs */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#D4AF37]/25">
          <button
            type="button"
            onClick={onReturnToHub}
            className="px-5 py-2.5 bg-[#182820] hover:bg-[#22382D] text-[#F5F2EB] border border-[#D4AF37]/30 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <LayoutGrid className="w-4 h-4 text-[#D4AF37]" />
            <span>Выбрать другую тему / режим</span>
          </button>

          <button
            type="button"
            data-start="true"
            onClick={onPlayAgain}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E5C349] text-[#090F0C] font-semibold text-sm rounded-lg flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти еще раз</span>
          </button>
        </div>
      </div>
    </div>
  );
};
