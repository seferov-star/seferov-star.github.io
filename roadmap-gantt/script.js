const months = [
    { key: "2026-04", year: "2026", label: "Апр" },
    { key: "2026-05", year: "2026", label: "Май" },
    { key: "2026-06", year: "2026", label: "Июн" },
    { key: "2026-07", year: "2026", label: "Июл" },
    { key: "2026-08", year: "2026", label: "Авг" },
    { key: "2026-09", year: "2026", label: "Сен" },
    { key: "2026-10", year: "2026", label: "Окт" },
    { key: "2026-11", year: "2026", label: "Ноя" },
    { key: "2026-12", year: "2026", label: "Дек" },
    { key: "2027-01", year: "2027", label: "Янв" },
    { key: "2027-02", year: "2027", label: "Фев" },
    { key: "2027-03", year: "2027", label: "Мар" }
];

const phaseIcons = {
    launch: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 14c-1.4 1.2-2.1 2.7-2.4 4.6 1.9-.3 3.4-1 4.6-2.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M9.3 15.4 8.6 12 12 8.6c2.5-2.5 5.5-3.4 8.2-3.1.3 2.7-.6 5.7-3.1 8.2l-3.4 3.4-3.4-.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M14 7.9a2.1 2.1 0 1 1 3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    automation: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V9M10 19V5M15 19v-7M20 19V8" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
        <path d="M3 19h19" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
    </svg>`,
    improvement: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>`
};

const phases = [
    {
        id: "launch",
        title: "Запуск",
        period: "Апрель - июнь 2026",
        color: "#10958d",
        deep: "#08716c",
        focus: "Дать быстрый эффект на текущей инфраструктуре, обкатать процесс Единого контактного центра и обеспечить плавный переход к целевому состоянию без резкого изменения всех каналов сразу.",
        scope: [
            "Старт с переключения всех голосовых каналов на ЕКЦ.",
            "Позже подключаются чаты из приложений и сайта.",
            "VIP-клиенты исключаются из первого контура."
        ],
        results: [
            "Первая линия принимает и ведет первичные обращения.",
            "У обращения появляется единый ответственный даже до цифровой автоматизации.",
            "Телефония и маршрут клиента становятся короче и понятнее.",
            "Запускается переходный контур единой сервисной модели и накопление первой статистики."
        ]
    },
    {
        id: "automation",
        title: "Развитие и автоматизация",
        period: "Июнь - октябрь 2026",
        color: "#bd8500",
        deep: "#936500",
        focus: "Замкнуть все каналы на ЕКЦ, автоматизировать процесс обслуживания в CRM, перенести переходный контур этапа запуска в Bitrix24, подключить ФС к прозрачному сервисному процессу и повысить долю решений с первого контакта.",
        scope: [
            "Автоматизация процесса обслуживания на базе текущей CRM Bitrix24.",
            "Телефон, почта, чат, форма, приложение и ФС замыкаются на Первую линию через CRM.",
            "ФС входят в контур ЕСМ как прозрачные участники.",
            "Разворачиваются полноценная база знаний и типовые сценарии.",
            "VIP-клиенты могут подключаться на условиях пилота."
        ],
        results: [
            "Маршрутизация оцифрована в CRM: статус, владелец и история у каждого обращения.",
            "ФС видят кейсы своих клиентов и получают уведомления о ходе решения.",
            "Растет FCR за счет базы знаний и полномочий L1.",
            "Единая модель данных дает управленческую картину по причинам, каналам, сегментам и срокам.",
            "Сформирован backlog улучшений на основе реальных топ-причин обращений."
        ]
    },
    {
        id: "improvement",
        title: "Совершенствование",
        period: "Сентябрь 2026 - март 2027",
        color: "#0e3c78",
        deep: "#082b58",
        focus: "Выстроить управляемый сервис на основе метрик, контроля качества и проактивного восстановления доверия. Перевести обслуживание VIP-клиентов сегментов HNWI/UHNWI в целевой режим с жесткими SLA, выделенными стандартами коммуникации и расширенным процессом Service Recovery.",
        scope: [
            "SLA по критичности и сегментам HNWI/UHNWI.",
            "BI-аналитика и управленческие дашборды.",
            "Контроль качества: ОКК, QA, Root Cause Analysis.",
            "Расширенный VIP-сервис и Service Recovery."
        ],
        results: [
            "Гарантии сроков привязаны к критичности и сегменту клиента.",
            "Руководители принимают решения по BI-дашбордам, а не локальным выгрузкам.",
            "Недовольство VIP обрабатывается проактивно до формальной жалобы.",
            "ОКК системно влияет на обучение, маршруты, базу знаний и мотивацию.",
            "Запущен контур постоянного улучшения: RCA -> backlog -> корректирующие действия."
        ]
    }
];

const items = [
    {
        id: "launch-infra",
        phase: "launch",
        title: "Инфраструктура для запуска ЕКЦ",
        short: "Инфра",
        period: "Апрель - май 2026",
        owner: "УРПБА",
        start: 0,
        end: 1,
        row: 1,
        summary: "Подготовить рабочий контур Первой линии и минимальную базу для регистрации обращений.",
        tasks: [
            "Доступы к CRM, Confluence, АРМ и другим системам.",
            "Перенастройка рабочих мест под задачи Первой линии.",
            "Формирование начальной базы знаний.",
            "Формирование каталога классификатора обращений.",
            "Формирование матрицы маршрутизации обращений.",
            "Временный шаблон регистрации обращений."
        ]
    },
    {
        id: "launch-process",
        phase: "launch",
        title: "Согласование процессов с ключевыми подразделениями",
        short: "Процессы",
        period: "Апрель - май 2026",
        owner: "УРПБА",
        start: 0,
        end: 1,
        row: 2,
        summary: "Согласовать границы участия Первой линии и маршруты передачи на следующие линии поддержки.",
        tasks: [
            "Доступы к VIP-клиентам для Первой линии.",
            "Маршрутизация на вторую и третью линии."
        ]
    },
    {
        id: "launch-ivr",
        phase: "launch",
        title: "Настройки телефонии и сокращение IVR",
        short: "IVR",
        period: "Май 2026",
        owner: "УРПБА, Маркетинг, IT",
        start: 1,
        end: 1,
        row: 3,
        summary: "Сократить голосовой маршрут клиента и переключить голосовой поток на ЕКЦ.",
        tasks: [
            "Согласование изменений IVR со всеми заинтересованными сторонами.",
            "Изменение настроек IVR и телефонии."
        ]
    },
    {
        id: "launch-org",
        phase: "launch",
        title: "Организационные изменения",
        short: "Орг.",
        period: "Май - июнь 2026",
        owner: "УРПБА, HR, ДКО",
        start: 1,
        end: 2,
        row: 4,
        summary: "Закрепить структуру, закрыть вакансии и настроить управляемость подразделения.",
        tasks: [
            "Утверждение структуры на СД.",
            "Закрытие вакансий в ЕКЦ.",
            "Проработка и настройка KPI подразделения."
        ]
    },
    {
        id: "m-structure",
        phase: "launch",
        title: "Структура утверждена на СД",
        date: "21.05.2026",
        month: 1,
        row: 5,
        type: "milestone",
        critical: false,
        summary: "Организационная структура ЕКЦ утверждена на совете директоров."
    },
    {
        id: "m-launch",
        phase: "launch",
        title: "Запуск ЕКЦ",
        date: "08.06.2026",
        month: 2,
        row: 5,
        type: "milestone",
        critical: true,
        summary: "Целевая дата запуска переходного контура Единого контактного центра."
    },
    {
        id: "automation-crm",
        phase: "automation",
        title: "Оцифровка процесса и сервисные процессы в CRM",
        short: "Оцифровка CRM",
        period: "Июнь - октябрь 2026",
        owner: "УРПБА, IT",
        start: 2,
        end: 6,
        row: 1,
        summary: "Перенести переходный контур в CRM и собрать единую модель данных по обращениям.",
        tasks: [
            "Описание процессов и логики для автоматизации в CRM: июнь - июль.",
            "Разработка единой модели данных: классификатор причин, каналы, сегменты, статусы.",
            "Проектирование и настройка рабочих мест в CRM для всех участников процесса: июль - сентябрь.",
            "Настройка платформы CRM / Bitrix24: карточка кейса, статусы, маршрутизация, уведомления."
        ]
    },
    {
        id: "automation-quality",
        phase: "automation",
        title: "Усиление Первой линии и анализ качества",
        short: "L1 и качество",
        period: "Июль - октябрь 2026",
        owner: "УРПБА, ОКК",
        start: 3,
        end: 6,
        row: 2,
        summary: "Увеличить долю решений с первого контакта и начать регулярный замер качества обработки.",
        tasks: [
            "Анализ типовых кейсов и создание стандартных сценариев решения.",
            "Закрепление полномочий Первой линии на закрытие типовых вопросов без согласования.",
            "Утверждение матрицы полномочий Первой линии, включая лимиты на автономное финансовое возмещение.",
            "Замер удовлетворенности клиентов CSAT по результатам обработки обращений.",
            "Пилотная автоматизация расчета SLA и ключевых метрик на основе выгрузок из CRM."
        ]
    },
    {
        id: "m-crm-work",
        phase: "automation",
        title: "Работа ЕКЦ переведена в CRM",
        date: "Конец сентября 2026",
        month: 5,
        row: 3,
        type: "milestone",
        critical: false,
        summary: "Операционная работа ЕКЦ переходит в CRM как основной контур ведения обращений."
    },
    {
        id: "automation-fs",
        phase: "automation",
        title: "Подключение ФС к ЕСМ в CRM",
        short: "ФС",
        period: "Октябрь 2026",
        owner: "УРПБА, ДКО",
        start: 6,
        end: 6,
        row: 4,
        summary: "Дать ФС прозрачный интерфейс для создания, отслеживания и просмотра кейсов своих клиентов.",
        tasks: [
            "Развертывание интерфейса ЕСМ для ФС.",
            "Обучение ФС работе в ЕСМ: практические сессии и инструкции.",
            "Уведомления для ФС о смене статуса кейсов клиентов."
        ]
    },
    {
        id: "m-fs",
        phase: "automation",
        title: "ФС подключены к процессу через CRM",
        date: "Конец октября 2026",
        month: 6,
        row: 5,
        type: "milestone",
        critical: false,
        summary: "ФС становятся участниками сквозного сервисного процесса и получают прозрачность по кейсам клиентов."
    },
    {
        id: "m-stage1",
        phase: "automation",
        title: "Основные каналы в CRM",
        date: "Конец октября 2026",
        month: 6,
        row: 6,
        type: "milestone",
        critical: true,
        summary: "Этап автоматизации закрыт: основные каналы заведены в CRM-контур."
    },
    {
        id: "improve-quality",
        phase: "improvement",
        title: "Аудит и контроль качества",
        short: "Аудит качества",
        period: "Сентябрь - декабрь 2026",
        owner: "УРПБА, ОКК",
        start: 5,
        end: 8,
        row: 1,
        summary: "Встроить контроль качества в регулярный сервисный цикл и анализ причин обращений.",
        tasks: [
            "Полноценное встраивание ОКК в процессы ЕСМ: регулярная обратная связь и калибровочные сессии.",
            "Внедрение речевой аналитики и инструментов ИИ для оценки качества и анализа корневых причин.",
            "Ежемесячный разбор жалоб и потенциально критичных инцидентов с командой."
        ]
    },
    {
        id: "improve-sla",
        phase: "improvement",
        title: "SLA / BI и гарантия сроков",
        short: "SLA / BI",
        period: "Ноябрь 2026 - февраль 2027",
        owner: "УРПБА, IT",
        start: 7,
        end: 10,
        row: 2,
        summary: "Сделать сервис измеримым: SLA, эскалации, BI-дашборды и мониторинг VIP в реальном времени.",
        tasks: [
            "Установление целевых SLA по TTFR и TTR для уровней критичности и сегментов HNWI/UHNWI.",
            "Автоматические уведомления и эскалации при приближении к дедлайну SLA.",
            "Согласование внутренних сроков ответа со смежными подразделениями.",
            "Интеграция CRM с BI-платформой для автоматической отчетности.",
            "Запуск автоматического BI-дашборда: SLA, FCR, CSAT, backlog и структура обращений.",
            "Дашборд мониторинга SLA для VIP-клиентов в реальном времени."
        ]
    },
    {
        id: "improve-vip",
        phase: "improvement",
        title: "Коммуникации и лояльность VIP",
        short: "VIP-лояльность",
        period: "Декабрь 2026 - март 2027",
        owner: "УРПБА, Маркетинг",
        start: 8,
        end: 11,
        row: 3,
        summary: "Перевести VIP-коммуникации в целевой стандарт и добавить контур Service Recovery.",
        tasks: [
            "Стандарты коммуникации: тон, шаблоны ответов, эскалационные формулировки.",
            "Автоматическая рассылка CSAT-опросов после закрытия кейса.",
            "Service Recovery: выявление критичных инцидентов, контакт, компенсация.",
            "Многоуровневая матрица лимитов компенсаций: L1, руководитель, эскалация."
        ]
    },
    {
        id: "m-sla-bi",
        phase: "improvement",
        title: "SLA и BI готовы к пилоту",
        date: "Конец февраля 2027",
        month: 10,
        row: 4,
        type: "milestone",
        critical: true,
        summary: "SLA-модель и BI-дашборды готовы для пилотного режима управления сервисом."
    }
];

const progressBar = document.querySelector(".scroll-progress span");
const navLinks = document.querySelectorAll(".topnav a");
const sections = [...document.querySelectorAll("section[id]")];
const revealNodes = document.querySelectorAll(".reveal");
const timeline = document.querySelector("[data-timeline]");
const modal = document.querySelector("[data-modal]");
const modalContent = document.querySelector("[data-modal-content]");
const summaryMount = document.querySelector("[data-phase-summary]");
const accordionMount = document.querySelector("[data-phase-accordions]");
const filterButtons = document.querySelectorAll("[data-filter]");
const resetButton = document.querySelector("[data-reset-view]");
const expandAllButton = document.querySelector("[data-expand-all]");
let lastFocusedElement = null;

const getPhase = (id) => phases.find((phase) => phase.id === id);
const workItems = items.filter((item) => item.type !== "milestone");
const milestones = items.filter((item) => item.type === "milestone");

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
}

function styleVars(phaseId) {
    const phase = getPhase(phaseId);
    return `--phase-color:${phase.color};--phase-deep:${phase.deep};`;
}

function renderSummaries() {
    summaryMount.innerHTML = phases.map((phase) => {
        return `
            <article class="phase-summary" style="${styleVars(phase.id)}">
                <div class="phase-summary__head">
                    <div class="phase-icon">${phaseIcons[phase.id]}</div>
                    <div>
                        <h3>${phase.title}</h3>
                        <p>${phase.period}</p>
                    </div>
                </div>
                <div class="phase-summary__content">
                    <div class="phase-summary__block">
                        <h4>Цели и задачи</h4>
                        <p>${phase.focus}</p>
                    </div>
                    <div class="phase-summary__block">
                        <h4>Скоуп</h4>
                        <ul>${phase.scope.map((entry) => `<li>${entry}</li>`).join("")}</ul>
                    </div>
                    <div class="phase-summary__block">
                        <h4>Ожидаемые результаты</h4>
                        <ul>${phase.results.map((entry) => `<li>${entry}</li>`).join("")}</ul>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function renderTimeline() {
    let row = 1;
    const html = [];

    html.push(`<div class="corner-cell"></div>`);
    months.forEach((month, index) => {
        html.push(`
            <div class="month-cell" style="grid-column:${index + 2};grid-row:1">
                <small>${month.year}</small>
                <strong>${month.label}</strong>
            </div>
        `);
    });

    phases.forEach((phase) => {
        const phaseItems = items.filter((item) => item.phase === phase.id);
        const rowsCount = Math.max(...phaseItems.map((item) => item.row)) + 1;
        const startRow = row + 1;
        const endRow = startRow + rowsCount;

        html.push(`
            <div class="phase-label phase-row is-visible" data-phase-row="${phase.id}" style="${styleVars(phase.id)}grid-row:${startRow} / ${endRow};">
                <div class="phase-label__top">
                    ${phaseIcons[phase.id]}
                    <div>
                        <h3>${phase.title}</h3>
                        <span>${phase.period}</span>
                    </div>
                </div>
                <button type="button" data-phase-focus="${phase.id}">Детали этапа</button>
            </div>
        `);

        for (let lane = 0; lane < rowsCount; lane += 1) {
            months.forEach((_, monthIndex) => {
                html.push(`
                    <div class="lane-cell phase-row is-visible"
                        data-phase-row="${phase.id}"
                        style="grid-column:${monthIndex + 2};grid-row:${startRow + lane};"></div>
                `);
            });
        }

        phaseItems.forEach((item) => {
            if (item.type === "milestone") {
                const color = item.critical ? "var(--critical)" : phase.color;
                html.push(`
                    <button class="milestone phase-row is-visible" type="button" data-item-id="${item.id}" data-phase-row="${phase.id}" title="${item.title} · ${item.date}"
                        style="${styleVars(phase.id)}--milestone-color:${color};grid-column:${item.month + 2};grid-row:${startRow + item.row};">
                        <span class="milestone__diamond"></span>
                        <strong>${item.title}</strong>
                        <span>${item.date}</span>
                    </button>
                `);
            } else {
                const singleClass = item.start === item.end ? "timeline-item--single" : "";
                html.push(`
                    <button class="timeline-item ${singleClass} phase-row is-visible" type="button" data-item-id="${item.id}" data-phase-row="${phase.id}" title="${item.title} · ${item.period}"
                        style="${styleVars(phase.id)}grid-column:${item.start + 2} / ${item.end + 3};grid-row:${startRow + item.row};">
                        <span class="timeline-item__title">${item.short || item.title}</span>
                        <span class="timeline-item__owner">${item.owner}</span>
                    </button>
                `);
            }
        });

        html.push(`
            <div class="phase-separator phase-row is-visible" data-phase-row="${phase.id}" style="${styleVars(phase.id)}grid-row:${endRow};"></div>
        `);

        row = endRow;
    });

    timeline.innerHTML = html.join("");
}

function openModal(html) {
    lastFocusedElement = document.activeElement;
    modalContent.innerHTML = html;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector("[data-modal-close]").focus();
}

function closeModal() {
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function renderDetail(itemId) {
    const item = items.find((entry) => entry.id === itemId);
    if (!item) return;

    const phase = getPhase(item.phase);
    const list = item.tasks?.length ? `
        <div class="detail-section">
            <h4>Подзадачи из roadmap</h4>
            <ul class="detail-list">${item.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
        </div>
    ` : "";

    openModal(`
        <article class="detail-card" style="${styleVars(phase.id)}">
            <span class="detail-card__tag">${phase.title}</span>
            <h3 id="modal-title">${item.title}</h3>
            <div class="detail-meta">
                <div class="meta-box">
                    <span>Срок</span>
                    <strong>${item.period || item.date}</strong>
                </div>
                ${item.owner ? `
                    <div class="meta-box">
                        <span>Ответственные</span>
                        <strong>${item.owner}</strong>
                    </div>
                ` : ""}
            </div>
            ${list}
        </article>
    `);
}

function renderPhaseDetail(phaseId) {
    const phase = getPhase(phaseId);
    const phaseItems = workItems.filter((item) => item.phase === phase.id);
    const phaseMilestones = milestones.filter((item) => item.phase === phase.id);

    openModal(`
        <article class="detail-card" style="${styleVars(phase.id)}">
            <span class="detail-card__tag">Этап roadmap</span>
            <h3 id="modal-title">${phase.title}</h3>
            <p>${phase.focus}</p>
            <div class="detail-meta">
                <div class="meta-box">
                    <span>Период</span>
                    <strong>${phase.period}</strong>
                </div>
            </div>
            <div class="detail-section">
                <h4>Скоуп</h4>
                <ul class="detail-list">${phase.scope.map((entry) => `<li>${entry}</li>`).join("")}</ul>
            </div>
            <div class="detail-section">
                <h4>Результаты</h4>
                <ul class="detail-list">${phase.results.map((entry) => `<li>${entry}</li>`).join("")}</ul>
            </div>
            <div class="detail-section">
                <h4>Основные задачи roadmap</h4>
                <ul class="detail-list">
                    ${phaseItems.map((entry) => `<li>${entry.title} — ${entry.period}</li>`).join("")}
                    ${phaseMilestones.map((entry) => `<li>${entry.title} — ${entry.date}</li>`).join("")}
                </ul>
            </div>
        </article>
    `);
}

function renderAccordions() {
    accordionMount.innerHTML = phases.map((phase, index) => {
        const phaseItems = workItems.filter((item) => item.phase === phase.id);
        const phaseMilestones = milestones.filter((item) => item.phase === phase.id);

        return `
            <details class="phase-fold" style="${styleVars(phase.id)}" ${index === 0 ? "open" : ""}>
                <summary>
                    <span class="phase-fold__icon">${phaseIcons[phase.id]}</span>
                    <span>
                        <h3>${phase.title}</h3>
                        <p>${phase.period} · ${phase.focus}</p>
                    </span>
                    <span class="phase-fold__stats">
                        <span>${phaseItems.length} работ</span>
                        <span>${phaseMilestones.length} вехи</span>
                    </span>
                </summary>
                <div class="phase-fold__body">
                    <section>
                        <h4>Скоуп</h4>
                        <ul>${phase.scope.map((entry) => `<li>${entry}</li>`).join("")}</ul>
                    </section>
                    <section>
                        <h4>Результаты</h4>
                        <ul>${phase.results.map((entry) => `<li>${entry}</li>`).join("")}</ul>
                    </section>
                    <section>
                        <h4>Работы и вехи</h4>
                        <ul>
                            ${phaseItems.map((entry) => `<li>${entry.title} — ${entry.period}</li>`).join("")}
                            ${phaseMilestones.map((entry) => `<li>${entry.title} — ${entry.date}</li>`).join("")}
                        </ul>
                    </section>
                </div>
            </details>
        `;
    }).join("");
}

function setActiveItem(itemId) {
    document.querySelectorAll("[data-item-id]").forEach((node) => {
        node.classList.toggle("is-active", node.dataset.itemId === itemId);
    });
    renderDetail(itemId);
}

function applyFilter(phaseId) {
    const isAll = phaseId === "all";
    timeline.classList.toggle("is-filtered", !isAll);

    document.querySelectorAll("[data-phase-row]").forEach((node) => {
        node.classList.toggle("is-visible", isAll || node.dataset.phaseRow === phaseId);
    });

    filterButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === phaseId);
    });

}

function bindEvents() {
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    timeline.addEventListener("click", (event) => {
        const itemButton = event.target.closest("[data-item-id]");
        const phaseButton = event.target.closest("[data-phase-focus]");

        if (itemButton) {
            setActiveItem(itemButton.dataset.itemId);
            return;
        }

        if (phaseButton) {
            renderPhaseDetail(phaseButton.dataset.phaseFocus);
        }
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    resetButton.addEventListener("click", () => {
        applyFilter("all");
        document.querySelectorAll("[data-item-id]").forEach((node) => node.classList.remove("is-active"));
        document.querySelector(".timeline-wrap").scrollTo({ left: 0, behavior: "smooth" });
    });

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-modal-close]")) closeModal();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });

    expandAllButton.addEventListener("click", () => {
        document.querySelectorAll(".phase-fold").forEach((fold) => {
            fold.open = true;
        });
        document.querySelector("#phases").scrollIntoView({ behavior: "smooth" });
    });
}

function setupObservers() {
    if (!("IntersectionObserver" in window)) {
        revealNodes.forEach((node) => node.classList.add("is-visible"));
        return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealNodes.forEach((node) => revealObserver.observe(node));

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, { threshold: 0.35 });

    sections.forEach((section) => navObserver.observe(section));
}

renderSummaries();
renderTimeline();
renderAccordions();
bindEvents();
setupObservers();
updateProgress();
