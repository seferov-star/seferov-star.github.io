const progressBar = document.querySelector(".scroll-progress span");
const revealNodes = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".topnav a");
const sections = [...document.querySelectorAll("section[id]")];

const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach((section) => navObserver.observe(section));
} else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const bindDisclosureLabels = (scope = document) => {
    scope.querySelectorAll(".fold").forEach((fold) => {
        const action = fold.querySelector(".fold__action");
        if (!action || action.dataset.bound === "true") return;

        const setLabel = () => {
            action.textContent = fold.open ? action.dataset.open : action.dataset.closed;
        };

        fold.addEventListener("toggle", setLabel);
        action.dataset.bound = "true";
        setLabel();
    });
};

const scenarioData = {
    box2: {
        label: "Вариант 1",
        title: "Коробочное решение + 2 внутренние feature-команды",
        summary:
            "Берем коробочное приложение как основу, запускаем MVP на стандартном функционале и параллельно формируем 2 внутренние feature-команды. Модель балансирует скорость запуска и накопление собственной экспертизы.",
        hr3: "211 млн ₽",
        total3: "306 млн ₽",
        total5: "489 млн ₽",
        upside: "Больше внутренней capacity и меньше стратегической зависимости от подрядчика, чем в модели с одной командой.",
        risk: "Размытая ответственность между подрядчиком и внутренними командами.",
        metrics: [
            ["Модель", "Коробка + 2 внутренние feature-команды + подрядчик"],
            ["HR TCO 3 года", "211 млн ₽"],
            ["HR TCO 5 лет", "374 млн ₽"],
            ["Подрядчик + лицензии", "80 млн ₽"],
            ["Hardware", "15 млн ₽"],
            ["Услуги подрядчика в 4-5 годы", "20 млн ₽"],
            ["Total TCO 3 года", "306 млн ₽"],
            ["Total TCO 5 лет", "489 млн ₽"]
        ],
        pros: [
            "Баланс между скоростью запуска и развитием собственных компетенций.",
            "Коробка снижает риск долгого старта и дает базовый функционал быстрее, чем разработка с нуля.",
            "2 feature-команды дают заметно большую пропускную способность, чем одна команда. Ниже «фактор автобуса».",
            "Меньше vendor lock-in, чем в сценарии с сильным уклоном в подрядчика."
        ],
        cons: [
            "Возникает двойная модель управления: часть ответственности у подрядчика, часть внутри.",
            "Нужно синхронизировать roadmap коробки, кастомные доработки, внутренний backlog и архитектурные ограничения.",
            "Собственные команды все равно зависят от качества коробки, API и документации.",
            "Потребуется сильная внутренняя архитектурная и продуктовая функция."
        ],
        risks: [
            "При сбоях подрядчик и внутренние команды могут перекладывать ответственность.",
            "Ключевые компоненты могут остаться закрытыми внутри коробки.",
        ],
        conclusion:
            "Сценарий выглядит сбалансированным, если цель - быстро получить MVP и одновременно наращивать внутреннюю экспертизу. Ключевое условие - жесткое разделение ответственности с подрядчиком."
    },
    box1: {
        label: "Вариант 2",
        title: "Коробочное решение + 1 внутренняя feature-команда",
        summary:
            "Берем коробочное приложение и формируем одну внутреннюю команду. Основной объем доработок и развития остается у подрядчика, а внутренняя команда участвует в контроле, приемке, аналитике и интеграциях.",
        hr3: "162 млн ₽",
        total3: "277 млн ₽",
        total5: "434 млн ₽",
        upside: "Самый понятный компромисс для быстрого MVP без масштабного найма.",
        risk: "Одна команда может стать bottleneck, а стратегическая зависимость от подрядчика останется высокой.",
        metrics: [
            ["Модель", "Коробка + 1 внутренняя feature-команда + подрядчик"],
            ["HR TCO 3 года", "162 млн ₽"],
            ["HR TCO 5 лет", "279 млн ₽"],
            ["Подрядчик + лицензии", "100 млн ₽"],
            ["Hardware", "15 млн ₽"],
            ["Услуги подрядчика в 4-5 годы", "50 млн ₽"],
            ["Total TCO 3 года", "277 млн ₽"],
            ["Total TCO 5 лет", "444 млн ₽"]
        ],
        pros: [
            "Быстрый запуск MVP без масштабного найма.",
            "Ниже HR-нагрузка, чем в вариантах с 1 и 3 feature-командами.",
            "Подрядчик несет большую часть delivery-нагрузки.",
            "Управленчески проще, чем модель с несколькими внутренними командами."
        ],
        cons: [
            "Собственная экспертиза развивается медленно и фрагментарно.",
            "Одна внутренняя команда быстро становится bottleneck между бизнесом, подрядчиком и внутренними системами.",
            "Существенные изменения зависят от приоритетов, скорости и качества подрядчика.",
            "Команда может быть слишком слабой, чтобы challenge-ить оценки, архитектуру и сроки."
        ],
        risks: [
            "Vendor lock-in выше, чем в варианте 1.",
            "Может возникнуть иллюзия контроля: команда есть, но ключевые решения остаются у подрядчика.",
            "Существенные изменения будут конкурировать за capacity подрядчика.",
            "Стоимость поддержки в 4-5 годы выше, чем в варианте 1: 40 млн ₽ против 20 млн ₽."
        ],
        conclusion:
            "Рационально, если главный приоритет - быстрый MVP и ограничение организационной сложности. Как стратегия развития собственной мобильной платформы сценарий слабее."
    },
    own4: {
        label: "Вариант 3",
        title: "Полностью своими силами, 4 внутренние feature-команды",
        summary:
            "Компания отказывается от коробочного подхода и строит приложение сама. Вся ключевая экспертиза, архитектура, разработка и развитие концентрируются внутри.",
        hr3: "378 млн ₽",
        total3: "393 млн ₽",
        total5: "671 млн ₽",
        upside: "Максимальный контроль над продуктом, архитектурой, roadmap и качеством.",
        risk: "Самый дорогой и организационно сложный сценарий: потребуется зрелая инженерная operating model.",
        metrics: [
            ["Модель", "Собственная разработка + 4 feature-команды"],
            ["HR TCO 3 года", "378 млн ₽"],
            ["HR TCO 5 лет", "656 млн ₽"],
            ["Подрядчик + лицензии", "0 млн ₽"],
            ["Hardware", "15 млн ₽"],
            ["Total TCO 3 года", "393 млн ₽"],
            ["Total TCO 5 лет", "671 млн ₽"]
        ],
        pros: [
            "Максимальный контроль над продуктом, архитектурой, roadmap и качеством.",
            "Минимальный vendor lock-in по мобильному приложению.",
            "Быстрее развитие после выхода команд на стабильную производительность.",
            "Все знания остаются внутри компании."
        ],
        cons: [
            "Самый дорогой сценарий: 671 млн ₽ TCO за 5 лет.",
            "Высокая сложность найма, онбординга и удержания команд.",
            "Быстрый MVP не гарантирован до выхода команд на нормальную производительность.",
            "Нужны DevOps, QA, релизный процесс, observability, mobile security и процессы публикации."
        ],
        risks: [
            "4 команды - это полноценная operating model, а не просто набор вакансий.",
            "Дорогая архитектурная ошибка на старте может заложить технический долг.",
            "Нужны сильные PO, engineering management, архитектура и QA-управление.",
            "Если приложение не станет стратегическим каналом роста, инвестиция может быть избыточной."
        ],
        conclusion:
            "Подходит, если мобильное приложение - ключевой стратегический актив, а компания готова стать полноценной продуктово-инженерной организацией."
    },
    current: {
        label: "Вариант 4",
        title: "Развитие текущим составом без масштабного набора",
        summary:
            "Компания продолжает развивать приложение примерно в текущей модели, без полноценного наращивания feature-команд и без существенной ставки на подрядчика. Темп ограничен внутренними ресурсами.",
        hr3: "158 млн ₽",
        total3: "173 млн ₽",
        total5: "281 млн ₽",
        upside: "Самый дешевый сценарий и минимальный организационный стресс.",
        risk: "Экономит бюджет, но почти не создает ускорения и конкурентного преимущества. Растёт разрыв с рыночными ожиданиями.",
        metrics: [
            ["Модель", "Текущий состав / минимальное масштабирование"],
            ["HR TCO 3 года", "158 млн ₽"],
            ["HR TCO 5 лет", "266 млн ₽"],
            ["Подрядчик + лицензии", "0 млн ₽"],
            ["Hardware", "15 млн ₽"],
            ["Total TCO 3 года", "173 млн ₽"],
            ["Total TCO 5 лет", "281 млн ₽"]
        ],
        pros: [
            "Самый дешевый сценарий: 281 млн ₽ TCO за 5 лет.",
            "Минимальный организационный стресс.",
            "Ниже риски неудачного найма и неэффективной загрузки команд.",
            "Можно идти итерационно и не делать крупную ставку до проверки спроса и бизнес-эффекта."
        ],
        cons: [
            "Почти не решает задачу ускоренного развития собственного мобильного приложения.",
            "Сохраняет bottleneck: ограниченная capacity и медленный backlog.",
            "Собственные мобильные компетенции не формируются в достаточном объеме.",
            "Слабая база для продуктовой конкуренции с сильными инвестиционными приложениями."
        ],
        risks: [
            "Дешевый вариант может стать дорогим из-за упущенного клиентского опыта и digital-канала.",
            "Попытка делать больше теми же людьми приведет к деградации качества и сроков.",
            "Без выделенной capacity будет копиться технический долг.",
            "Минимальный состав может не дотянуть до конкурентного клиентского продукта."
        ],
        conclusion:
            "Подходит только как экономный поддерживающий сценарий. Для заметного собственного мобильного приложения он стратегически слаб."
    }
};

const scenarioButtons = [...document.querySelectorAll("[data-scenario-tab]")];
const scenarioPanel = document.querySelector(".scenario-detail");
const scenarioFolds = document.querySelector("[data-scenario-folds]");
const roadmapButtons = [...document.querySelectorAll("[data-roadmap-step]")];
const roadmapPanel = document.querySelector(".roadmap-detail");
const roadmapItems = document.querySelector("[data-roadmap-items]");

const roadmapData = {
    prep: {
        label: "До старта",
        title: "Подготовка",
        summary:
            "До запуска работ нужно закрыть базовую аналитику и принять управленческое решение по варианту развития мобильного приложения.",
        items: [
            ["31.05.2026", "Декомпозиция BRD завершена"],
            ["30.06.2026", "GAP-анализ завершен"],
            ["15.07.2026", "Определиться с одним вариантом развития МП", "Утвердить подход на проектном комитете."]
        ]
    },
    box: {
        label: "Если коробка",
        title: "Вендор и команда",
        summary:
            "Если выбираем коробочное решение, параллельно закрываем вендорский контур, договорную базу и набор собственной команды.",
        items: [
            ["15.07-15.08.2026", "Выбор единого вендора", "Учитываем требования по проектам ИИР и SAM2."],
            ["15.07-15.08.2026", "Согласование плана работ", "Фиксируем скоуп и сроки."],
            ["15.07-15.08.2026", "Согласование и заключение договора"],
            ["01.08-01.10.2026", "Закрыть вакансии по команде"]
        ]
    },
    mvp: {
        label: "Этап 1",
        title: "MVP",
        summary:
            "Клиент получает мобильное приложение и личный кабинет, объединяющие текущий ЛК, ТМП и базовый функционал коробки. Устраняем ключевые базовые проблемы: отображение портфеля, историю операций и др.",
        items: [
            ["01.08.2026", "Старт работ"],
            ["01.08.2026-01.02.2027", "Альфа-версия MVP", "5,5 месяцев с учетом праздников. Запуск на Friends and Family."],
            ["01.02-01.05.2027", "Пилотирование и доработка Friends and Family"],
            ["01.05.2027", "Вывод MVP на клиентов"]
        ]
    },
    growth: {
        label: "Этап 2",
        title: "Развитие функционала",
        summary:
            "После MVP развиваем аналитику, инвест-идеи и расширенные торговые инструменты в гибридной модели с вендором и собственной командой.",
        items: [
            ["01.05.2027-01.08.2028", "Разработка нового функционала ТМП совместно с вендором"],
            ["с 01.05.2027", "Разработка нового функционала ТМП своей командой", "Постоянный поток уникальных сервисов и внутренних доработок."]
        ]
    }
};

const renderList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const renderTable = (rows) => `
    <table class="fold-table">
        <tbody>
            ${rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}
        </tbody>
    </table>
`;

const foldTemplate = ({ title, body, open = false }) => `
    <details class="fold"${open ? " open" : ""}>
        <summary>
            <strong>${title}</strong>
            <span class="fold__action" data-open="Раскрыть детали" data-closed="Раскрыть детали">Раскрыть детали</span>
        </summary>
        <div class="fold__body">${body}</div>
    </details>
`;

const renderScenario = (key) => {
    const item = scenarioData[key];
    if (!item || !scenarioPanel) return;

    scenarioButtons.forEach((button) => {
        const isActive = button.dataset.scenarioTab === key;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    scenarioPanel.classList.remove("is-swapping");
    void scenarioPanel.offsetWidth;
    scenarioPanel.classList.add("is-swapping");

    scenarioPanel.querySelector("[data-scenario-label]").textContent = item.label;
    scenarioPanel.querySelector("[data-scenario-title]").textContent = item.title;
    scenarioPanel.querySelector("[data-scenario-summary]").textContent = item.summary;
    scenarioPanel.querySelector("[data-scenario-hr3]").textContent = item.hr3;
    scenarioPanel.querySelector("[data-scenario-total3]").textContent = item.total3;
    scenarioPanel.querySelector("[data-scenario-total5]").textContent = item.total5;
    scenarioPanel.querySelector("[data-scenario-upside]").textContent = item.upside;
    scenarioPanel.querySelector("[data-scenario-risk]").textContent = item.risk;
    scenarioPanel.querySelector("[data-scenario-conclusion]").textContent = item.conclusion;

    scenarioFolds.innerHTML = [
        foldTemplate({ title: "Основные цифры", body: renderTable(item.metrics), open: true }),
        foldTemplate({ title: "Плюсы", body: `<ul>${renderList(item.pros)}</ul>` }),
        foldTemplate({ title: "Минусы", body: `<ul>${renderList(item.cons)}</ul>` }),
        foldTemplate({ title: "Риски", body: `<ul>${renderList(item.risks)}</ul>` })
    ].join("");

    bindDisclosureLabels(scenarioFolds);
};

scenarioButtons.forEach((button) => {
    button.addEventListener("click", () => renderScenario(button.dataset.scenarioTab));
});

const renderRoadmapItems = (items) =>
    items
        .map(([date, title, note]) => `
            <li>
                <span>${date}</span>
                <div>
                    <strong>${title}</strong>
                    ${note ? `<p>${note}</p>` : ""}
                </div>
            </li>
        `)
        .join("");

const renderRoadmap = (key) => {
    const item = roadmapData[key];
    if (!item || !roadmapPanel || !roadmapItems) return;

    roadmapButtons.forEach((button) => {
        const isActive = button.dataset.roadmapStep === key;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    roadmapPanel.classList.remove("is-swapping");
    void roadmapPanel.offsetWidth;
    roadmapPanel.classList.add("is-swapping");

    roadmapPanel.querySelector("[data-roadmap-label]").textContent = item.label;
    roadmapPanel.querySelector("[data-roadmap-title]").textContent = item.title;
    roadmapPanel.querySelector("[data-roadmap-summary]").textContent = item.summary;
    roadmapItems.innerHTML = renderRoadmapItems(item.items);
};

roadmapButtons.forEach((button) => {
    button.addEventListener("click", () => renderRoadmap(button.dataset.roadmapStep));
});

bindDisclosureLabels();
renderScenario("box2");
renderRoadmap("prep");
