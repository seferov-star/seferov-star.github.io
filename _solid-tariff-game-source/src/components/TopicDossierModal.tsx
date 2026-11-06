import { QUESTIONS } from '../game/questions';
import React, { useState } from 'react';
import { TOPICS } from '../game/tariffData';
import {
  CalculatorTariffId,
  calculateTariffCommission
} from '../game/rules';
import { TopicId } from '../game/types';
import { X, Calculator, BookOpen, ExternalLink, FileText } from 'lucide-react';

interface TopicDossierModalProps {
  initialTopicId?: TopicId;
  onClose: () => void;
  onStartTopicStudy: (topicId: TopicId) => void;
}

const TARIFF_OPTIONS: { id: CalculatorTariffId; label: string }[] = [
  { id: 'solid_pro', label: 'ТП «Solid Pro» (0,25% вкл. биржу)' },
  { id: 'solid_pro_plus', label: 'ТП «Solid Pro+» (0,05%–0,005% от оборота)' },
  { id: 'base_moscow', label: 'ТП «Базовый стандарт» (Москва и представительства)' },
  { id: 'base_almetyevsk', label: 'ТП «Базовый стандарт» (Альметьевск и Елабуга)' },
  { id: 'razovyy', label: 'ТП «Разовый» (1,5% депонирование)' },
  { id: 'partner', label: 'ТП «Партнер» (0,01% для сотрудников ГК «Солид»)' },
  { id: 'pb_pro', label: 'ТП «Персональный брокер Про» (0% сделки + 15% HWM)' },
  { id: 'trader_pro', label: 'ТП «Трейдер Про» (0,2% сделки, без HWM)' },
  { id: 'pb_corp', label: 'ТП «Персональный брокер Корпоративный» (от 100 млн ₽)' }
];

export const TopicDossierModal: React.FC<TopicDossierModalProps> = ({
  initialTopicId = 'flagship_pro',
  onClose,
  onStartTopicStudy
}) => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'calculator'>('dossier');
  const [selectedTopicId, setSelectedTopicId] = useState<TopicId>(initialTopicId);

  // Calculator state
  const [tariffId, setTariffId] = useState<CalculatorTariffId>('solid_pro_plus');
  const [stockTurnoverRub, setStockTurnoverRub] = useState<number>(15_000_000);
  const [futuresContracts, setFuturesContracts] = useState<number>(100);
  const [voiceOrdersCount, setVoiceOrdersCount] = useState<number>(0);
  const [clientAssetsRub, setClientAssetsRub] = useState<number>(12_000_000);

  // HWM Calculator state
  const [osiStart, setOsiStart] = useState<number>(20_000_000);
  const [osiEnd, setOsiEnd] = useState<number>(25_000_000);
  const [couponsReceived, setCouponsReceived] = useState<number>(1_000_000);

  const selectedTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];
  const calcResult = calculateTariffCommission({
    tariffId,
    stockTurnoverRub,
    futuresContracts,
    voiceOrdersCount,
    clientAssetsRub
  });

  const hwmPnl = Math.max(0, osiEnd - osiStart - couponsReceived);
  const hwmSuccessFee15 = Math.round(hwmPnl * 0.15);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Справочник Тарифного классификатора и Калькулятор комиссий"
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#101A14] border border-[#D4AF37]/40 rounded-xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#F5F2EB]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/25 bg-[#0C140F]">
          <div>
            <div className="text-xs font-mono text-[#D4AF37]">
              ДОСЬЕ УОЛЛ-СТРИТ · ТАРИФНЫЙ КЛАССИФИКАТОР АО ИФК «СОЛИД» (РЕДАКЦИЯ № 27)
            </div>
            <h2 className="text-xl font-['Fraunces',serif] font-bold">
              Конспект разделов и Калькулятор брокерских комиссий
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}tariffs.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono bg-[#182820] hover:bg-[#21362B] text-[#D4AF37] border border-[#D4AF37]/30 rounded flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Открыть PDF (74 стр.)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть справочник"
              className="p-2 text-[#B8B2A6] hover:text-[#F5F2EB] rounded-lg bg-[#182820] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Switch Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#0E1712] border-b border-[#D4AF37]/15">
          <button
            type="button"
            onClick={() => setActiveTab('dossier')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'dossier'
                ? 'bg-[#D4AF37] text-[#090F0C]'
                : 'bg-[#16241C] text-[#C7C2B6] hover:text-[#F5F2EB]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Тематический конспект (6 разделов)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'calculator'
                ? 'bg-[#D4AF37] text-[#090F0C]'
                : 'bg-[#16241C] text-[#C7C2B6] hover:text-[#F5F2EB]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Интерактивный калькулятор комиссий и High Water Mark</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'dossier' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Topic List */}
              <div className="lg:col-span-4 space-y-2">
                {TOPICS.map((t) => {
                  const isActive = t.id === selectedTopicId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopicId(t.id)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#192B21] border-[#D4AF37] text-[#F5F2EB]'
                          : 'bg-[#0C140F] border-[#D4AF37]/15 text-[#B8B2A6] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="text-xs font-mono text-[#D4AF37]">
                        {t.number}. {t.sectionRef}
                      </div>
                      <div className="text-sm font-semibold text-[#F5F2EB] mt-0.5">{t.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Right Topic Deep-Dive Details */}
              <div className="lg:col-span-8 bg-[#0C140F] border border-[#D4AF37]/25 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] mb-1">
                    {selectedTopic.number} · {selectedTopic.sectionRef}
                  </div>
                  <h3 className="text-2xl font-['Fraunces',serif] font-bold text-[#F5F2EB] mb-2">
                    {selectedTopic.title}
                  </h3>
                  <p className="text-sm text-[#C7C2B6] leading-relaxed mb-5">
                    {selectedTopic.description}
                  </p>

                  <h4 className="text-xs font-mono text-[#D4AF37] tracking-wider mb-2.5">
                    КЛЮЧЕВЫЕ ПОЛОЖЕНИЯ И ПРАВИЛА ДЛЯ ЭКЗАМЕНА:
                  </h4>
                  <ul className="space-y-2 mb-6 text-sm text-[#E5E0D5]">
                    {selectedTopic.keyHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-xs text-[#D4AF37] mt-1 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-mono text-[#D4AF37] tracking-wider mb-2.5">
                    СВОДНАЯ ТАБЛИЦА СТАВОК И ПАРАМЕТРОВ:
                  </h4>
                  <div className="overflow-x-auto border border-[#D4AF37]/20 rounded-lg mb-6">
                    <table className="w-full text-left text-xs font-mono tabular-nums">
                      <thead className="bg-[#16241C] text-[#D4AF37] border-b border-[#D4AF37]/20">
                        <tr>
                          <th className="py-2.5 px-3">Параметр / Операция</th>
                          <th className="py-2.5 px-3">Ставка / Значение</th>
                          <th className="py-2.5 px-3">Примечание по Классификатору</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#D4AF37]/10">
                        {selectedTopic.summaryTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#14211A]">
                            <td className="py-2.5 px-3 text-[#F5F2EB] font-sans font-medium">
                              {row.parameter}
                            </td>
                            <td className="py-2.5 px-3 text-[#10B981] font-semibold">
                              {row.value}
                            </td>
                            <td className="py-2.5 px-3 text-[#B8B2A6] font-sans">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20">
                  <span className="text-xs text-[#9CA3AF]">
                    Готовы проверить знания по теме «{selectedTopic.title}»?
                  </span>
                  <button
                    type="button"
                    onClick={() => onStartTopicStudy(selectedTopic.id)}
                    className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C349] text-[#090F0C] font-semibold text-xs rounded-lg cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Тренировать эту тему ({QUESTIONS.filter((q) => q.topicId === selectedTopicId).length} вопросов)
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Standard Tariff Commission Calculator */}
              <div className="bg-[#0C140F] border border-[#D4AF37]/25 rounded-xl p-5 space-y-4">
                <div className="text-xs font-mono text-[#D4AF37]">
                  КАЛЬКУЛЯТОР № 1 · ТОРГОВЫЕ И МИНИМАЛЬНЫЕ КОМИССИИ РАЗДЕЛА А
                </div>
                <h3 className="text-lg font-['Fraunces',serif] font-semibold">
                  Расчет комиссии по сделке и обороту за день
                </h3>

                <div>
                  <label htmlFor="calc-tariff-select" className="block text-xs text-[#C7C2B6] mb-1">
                    Тарифный план АО ИФК «Солид»:
                  </label>
                  <select
                    id="calc-tariff-select"
                    value={tariffId}
                    onChange={(e) => setTariffId(e.target.value as CalculatorTariffId)}
                    className="w-full px-3 py-2 bg-[#14221A] border border-[#D4AF37]/30 rounded text-sm text-[#F5F2EB]"
                  >
                    {TARIFF_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="calc-turnover" className="block text-xs text-[#C7C2B6] mb-1">
                      Дневной оборот (акции Мосбиржи), ₽:
                    </label>
                    <input
                      id="calc-turnover"
                      type="number"
                      min={0}
                      step={100000}
                      value={stockTurnoverRub}
                      onChange={(e) => setStockTurnoverRub(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#14221A] border border-[#D4AF37]/30 rounded text-sm font-mono tabular-nums text-[#F5F2EB]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-assets" className="block text-xs text-[#C7C2B6] mb-1">
                      Оценка активов портфеля, ₽:
                    </label>
                    <input
                      id="calc-assets"
                      type="number"
                      min={0}
                      step={500000}
                      value={clientAssetsRub}
                      onChange={(e) => setClientAssetsRub(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#14221A] border border-[#D4AF37]/30 rounded text-sm font-mono tabular-nums text-[#F5F2EB]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-futures" className="block text-xs text-[#C7C2B6] mb-1">
                      Контрактов на срочном рынке, шт.:
                    </label>
                    <input
                      id="calc-futures"
                      type="number"
                      min={0}
                      step={10}
                      value={futuresContracts}
                      onChange={(e) => setFuturesContracts(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#14221A] border border-[#D4AF37]/30 rounded text-sm font-mono tabular-nums text-[#F5F2EB]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-voice" className="block text-xs text-[#C7C2B6] mb-1">
                      Поручений вне QUIK / МП (с голоса):
                    </label>
                    <input
                      id="calc-voice"
                      type="number"
                      min={0}
                      step={1}
                      value={voiceOrdersCount}
                      onChange={(e) => setVoiceOrdersCount(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#14221A] border border-[#D4AF37]/30 rounded text-sm font-mono tabular-nums text-[#F5F2EB]"
                    />
                  </div>
                </div>

                <div className="bg-[#14221A] border border-[#D4AF37]/30 rounded-lg p-4 space-y-2 font-mono tabular-nums text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Применимая ставка (Фондовый рынок):</span>
                    <span className="text-[#D4AF37] font-bold">{calcResult.stockRatePercent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Комиссия за акции Мосбиржи:</span>
                    <span>{calcResult.stockFeeRub.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Комиссия за срочный рынок:</span>
                    <span>{calcResult.futuresFeeRub.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Голосовые поручения (вне ИТС):</span>
                    <span>{calcResult.voiceFeeRub.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between border-t border-[#D4AF37]/20 pt-2 text-sm font-bold">
                    <span className="text-[#F5F2EB]">ИТОГО ЗА ДЕНЬ БРОКЕРУ:</span>
                    <span className="text-[#10B981]">
                      {calcResult.totalDailyBrokerFeeRub.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-[#B8B2A6] pt-1">
                    {calcResult.summaryNote}
                  </p>
                </div>
              </div>

              {/* Right: High Water Mark (HWM) Calculator for Personal Broker Pro */}
              <div className="bg-[#0C140F] border border-[#D4AF37]/25 rounded-xl p-5 space-y-4">
                <div className="text-xs font-mono text-[#D4AF37]">
                  КАЛЬКУЛЯТОР № 2 · ФОРМУЛА HIGH WATER MARK (ТП «ПЕРСОНАЛЬНЫЙ БРОКЕР ПРО»)
                </div>
                <h3 className="text-lg font-['Fraunces',serif] font-semibold">
                  Расчет «Вознаграждения за успех» (15%, п. А.6.4, стр. 19)
                </h3>
                <p className="text-xs text-[#C7C2B6]">
                  Формула классификатора:{' '}
                  <code className="text-[#D4AF37] font-mono">
                    PnL = ОСИ_T2 − ОСИ_T1 − НТО_T1T2 − Налоги_T1T2 − Купоны_T1T2
                  </code>
                  . Обратите внимание: купоны по облигациям вычитаются из базы расчета!
                </p>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="hwm-start" className="block text-xs text-[#C7C2B6] mb-1">
                      Начальная оценка портфеля (ОСИ_T1): {osiStart.toLocaleString('ru-RU')} ₽
                    </label>
                    <input
                      id="hwm-start"
                      type="range"
                      min={10_000_000}
                      max={100_000_000}
                      step={1_000_000}
                      value={osiStart}
                      onChange={(e) => setOsiStart(Number(e.target.value))}
                      className="w-full accent-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="hwm-end" className="block text-xs text-[#C7C2B6] mb-1">
                      Конечная оценка портфеля (ОСИ_T2): {osiEnd.toLocaleString('ru-RU')} ₽
                    </label>
                    <input
                      id="hwm-end"
                      type="range"
                      min={10_000_000}
                      max={120_000_000}
                      step={500_000}
                      value={osiEnd}
                      onChange={(e) => setOsiEnd(Number(e.target.value))}
                      className="w-full accent-[#10B981]"
                    />
                  </div>

                  <div>
                    <label htmlFor="hwm-coupons" className="block text-xs text-[#C7C2B6] mb-1">
                      Полученные купоны за квартал (Купоны_T1T2):{' '}
                      {couponsReceived.toLocaleString('ru-RU')} ₽
                    </label>
                    <input
                      id="hwm-coupons"
                      type="range"
                      min={0}
                      max={5_000_000}
                      step={100_000}
                      value={couponsReceived}
                      onChange={(e) => setCouponsReceived(Number(e.target.value))}
                      className="w-full accent-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="bg-[#14221A] border border-[#D4AF37]/30 rounded-lg p-4 space-y-2 font-mono tabular-nums text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Общий прирост портфеля (ОСИ2 − ОСИ1):</span>
                    <span>{(osiEnd - osiStart).toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Минус полученные купоны (льгота п. А.6.4):</span>
                    <span className="text-[#10B981]">− {couponsReceived.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B2A6]">Расчетная база PnL:</span>
                    <span className="text-[#D4AF37] font-bold">{hwmPnl.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between border-t border-[#D4AF37]/20 pt-2 text-sm font-bold">
                    <span className="text-[#F5F2EB]">ВОЗНАГРАЖДЕНИЕ ЗА УСПЕХ (15%):</span>
                    <span className="text-[#D4AF37]">
                      {hwmSuccessFee15.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
