(function () {
  "use strict";

  const businessCase = {
    scenario: "Base",
    horizon: "Q3 2026 — Q2 2028",
    revenue: "98,2 млн ₽",
    teamBudget: "55,9 млн ₽",
    teamBudgetExact: "55,92 млн ₽",
    revenueLessTeamBudget: "42,3 млн ₽",
    roi: "75,7%",
    efficiency: "1,76",
    payback: "январь 2028 года",
    addressableAum: "37,8 млрд ₽",
    totalEffort: "137,5 FTE-месяца",
    drivers: [
      { id: "ret", label: "Удержание AUM", value: "18,4 млн ₽", share: "18,8%", shareValue: 18.8 },
      { id: "wallet", label: "Дополнительный приток", value: "31,4 млн ₽", share: "32,0%", shareValue: 32 },
      { id: "yield", label: "Монетизация существующего AUM", value: "48,4 млн ₽", share: "49,2%", shareValue: 49.2 },
    ],
    assumptions: [
      { label: "Предотвращённые выводы", value: "3%" },
      { label: "Дополнительные вводы", value: "4%" },
      { label: "Рост доходности AUM", value: "+0,2 п.п." },
      { label: "AUM под эффектом", value: "80%" },
      { label: "Синергия с Цифровыми фронтами", value: "−20%" },
      { label: "Нарастание эффекта", value: "0% → 100%" },
    ],
    ramp: [
      { period: "Q3’26", value: "0,0", share: 0 },
      { period: "Q4’26", value: "3,5", share: 14.3 },
      { period: "Q1’27", value: "7,0", share: 28.6 },
      { period: "Q2’27", value: "10,5", share: 42.9 },
      { period: "Q3’27", value: "14,0", share: 57.1 },
      { period: "Q4’27", value: "17,5", share: 71.4 },
      { period: "Q1’28", value: "21,0", share: 85.7 },
      { period: "Q2’28", value: "24,6", share: 100 },
    ],
    waves: [
      { number: "01", period: "Сентябрь 2026 — май 2027", budget: "20,72 млн ₽", share: "37,1%", fte: "4,8–6,6 FTE" },
      { number: "02", period: "Июнь — ноябрь 2027", budget: "17,75 млн ₽", share: "31,7%", fte: "7,3 FTE" },
      { number: "03", period: "Декабрь 2027 — май 2028", budget: "17,45 млн ₽", share: "31,2%", fte: "7,2 FTE" },
    ],
    coreTeam: ["Product / BA", "BA / SA", "Tech Lead"],
    vacancies: ["Разработчик Bitrix CRM", "Тестировщик"],
    strategyApprovalPeriod: "два года, начиная с сентября 2026 года",
    programBudgetApproval: "56 млн ₽",
    programBudgetApprovalEnd: "мая 2028 года",
    outstaffBudget: "10 млн ₽",
    vacanciesApproval: "разработчика Bitrix CRM и тестировщика",
    roiFormula: "(дополнительная выручка − бюджет команды) / бюджет команды",
  };

  window.CRM_BUSINESS_CASE = Object.freeze(businessCase);
})();
