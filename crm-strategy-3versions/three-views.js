(function () {
  "use strict";

  const VIEWS = ["executive", "presentation", "full"];
  const VIEW_META = {
    executive: { label: "Executive Summary", short: "Executive Summary" },
    presentation: { label: "Сокращённая версия", short: "Для встреч" },
    full: { label: "Полная версия", short: "Полная стратегия" },
  };
  const BUSINESS_CASE = window.CRM_BUSINESS_CASE;

  if (!BUSINESS_CASE) throw new Error("CRM business-case data is not loaded");

  const FULL_TARGETS = {
    core: { heading: "CRM — это бизнес-инициатива" },
    problems: { heading: "CRM — это бизнес-инициатива", tab: "8 проблем" },
    goals: { heading: "CRM — это бизнес-инициатива", tab: "5 целей" },
    metrics: { heading: "CRM — это бизнес-инициатива", tab: "Метрики" },
    businessCase: {
      heading: "CRM — это бизнес-инициатива",
      tab: "Бизнес-кейс",
      expandedHeading: "98,2 млн ₽ дополнительной выручки при бюджете команды 55,9 млн ₽",
    },
    capabilities: { heading: "Как CRM помогает достичь бизнес-целей" },
    roles: { heading: "Кому и что даст CRM-стратегия" },
    methodology: { heading: "Методология и бизнес-процессы" },
    technology: {
      heading: "Технологии и данные",
      expandedHeading: "Развиваем Bitrix — платформу на текущем горизонте не меняем",
    },
    organization: { heading: "Организационная модель и бэклог изменений" },
    roadmap: { heading: "Три волны развития CRM" },
  };

  let activeView = "executive";
  let viewbar;
  let briefRoot;
  let fullRoot;
  let revealObserver;
  let restoreToken = 0;

  function detailLink(target, label, id) {
    return `<a class="brief-link" id="${id}" href="?view=full#${target}" data-full-target="${target}">${label}</a>`;
  }

  function techMap() {
    return `
      <div class="tech-orbit brief-reveal" role="img" aria-label="CRM в центре технологического контура: финансовый советник, Core-системы, КХД, цифровой фронт и внешние источники">
        <article class="tech-orbit__node tech-orbit__node--advisor">
          <span>Пользователь</span><strong>Финансовый советник</strong>
          <p>Работает в CRM в офисе и в поле: клиент, портфель, задачи, коммуникации и документы.</p>
          <em>ФС → CRM</em>
        </article>
        <article class="tech-orbit__node tech-orbit__node--digital">
          <span>Клиентский канал</span><strong>Цифровой фронт</strong>
          <p>Обращения и события → CRM; предложения, сообщения и статусы кейсов ← CRM.</p>
          <em>CRM ↔ Цифровой фронт</em>
        </article>
        <article class="tech-orbit__node tech-orbit__node--core">
          <span>Финансовая истина</span><strong>Солид-Финанс и Core</strong>
          <p>Счета, позиции, операции, свободные средства, отчёты, справки и документы.</p>
          <em>Core → CRM</em>
        </article>
        <article class="tech-orbit__center">
          <span>Основное рабочее пространство ФС</span>
          <strong>CRM / Bitrix</strong>
          <p>Клиент 360 · Портфель 360 · первичные и повторные продажи · следующее действие · Service Case · история отношений</p>
        </article>
        <article class="tech-orbit__node tech-orbit__node--khd">
          <span>Аналитика и отчётность</span><strong>КХД</strong>
          <p>CRM передаёт процессные данные; КХД возвращает витрины и показатели. Итоговые расчёты остаются в КХД.</p>
          <em>CRM ↔ КХД</em>
        </article>
        <article class="tech-orbit__node tech-orbit__node--external">
          <span>Обогащение контекста</span><strong>Внешние источники</strong>
          <p>Официальные сведения, деловые связи, публичные события и релевантные рыночные сигналы.</p>
          <em>Источники → CRM</em>
        </article>
      </div>
      <div class="brief-note tech-orbit__note brief-reveal"><b>Технологический принцип:</b> развиваем Bitrix, сначала используем стандартные возможности, сохраняем роли Core и КХД и подключаем ИИ только после процессов, единого ID, качественных данных и интеграций.</div>`;
  }

  function metricsBlock() {
    return `
      <div class="brief-metrics brief-reveal">
        <article class="brief-metric">
          <span>01 / Рост активов</span>
          <h3>NNA</h3>
          <p><b>Net New Assets — чистый внешний приток клиентских активов за период.</b></p>
          <strong class="brief-formula">Внешний приток новых клиентов + внешний приток действующих клиентов − внешний отток</strong>
          <small>Не включает рыночную и валютную переоценку, внутренние переводы между продуктами, купоны и дивиденды внутри портфеля.</small>
        </article>
        <article class="brief-metric">
          <span>02 / Экономика базы</span>
          <h3>Маржа от AUM</h3>
          <p><b>Assets Under Management — активы клиентов под управлением.</b></p>
          <strong class="brief-formula">Маржинальный доход базы / средний AUM</strong>
          <small>Показывает экономическую эффективность действующей базы и не подменяет оценку потребностей клиента.</small>
        </article>
      </div>`;
  }

  function businessCaseBlock() {
    const b = BUSINESS_CASE;
    return `
      <div class="brief-business-case brief-reveal" aria-label="Экономика Base-сценария CRM">
        <aside class="brief-business-case__roi">
          <span>ROI по дополнительной выручке</span>
          <strong>${b.roi}</strong>
          <p>${b.roiFormula}</p>
        </aside>
        <div class="brief-business-case__body">
          <div class="brief-business-case__equation" aria-label="Дополнительная выручка минус бюджет команды равняется расчётной разнице">
            <div><span>Дополнительная выручка</span><strong>${b.revenue}</strong></div>
            <i>−</i>
            <div><span>Бюджет команды</span><strong>${b.teamBudget}</strong></div>
            <i>=</i>
            <div><span>Расчётная разница</span><strong>${b.revenueLessTeamBudget}</strong></div>
          </div>
          <div class="brief-business-case__facts">
            <div><span>Выручка / бюджет</span><strong>${b.efficiency}</strong></div>
            <div><span>Окупаемость</span><strong>${b.payback}</strong></div>
            <div><span>Горизонт</span><strong>${b.horizon}</strong></div>
            <div><span>Адресуемый AUM</span><strong>${b.addressableAum}</strong></div>
          </div>
        </div>
        <div class="brief-business-case__drivers" aria-label="Драйверы дополнительной выручки">
          ${b.drivers
            .map(
              (driver, index) => `
                <div class="brief-business-case__driver" style="--driver-share:${driver.shareValue}%">
                  <span>0${index + 1}</span>
                  <strong>${driver.label}</strong>
                  <b>${driver.value}</b>
                  <em>${driver.share}</em>
                  <i aria-hidden="true"></i>
                </div>`,
            )
            .join("")}
        </div>
      </div>`;
  }

  function resourceModelBlock() {
    const b = BUSINESS_CASE;
    return `
      <div class="brief-resource-model brief-reveal">
        <div class="brief-resource-model__waves">
          ${b.waves
            .map(
              (wave) => `
                <article>
                  <span>${wave.number}</span>
                  <small>${wave.period}</small>
                  <strong>${wave.budget}</strong>
                  <p>${wave.share} бюджета · ${wave.fte}</p>
                </article>`,
            )
            .join("")}
        </div>
        <div class="brief-resource-model__team">
          <div>
            <span>Общая трудоёмкость</span>
            <strong>${b.totalEffort}</strong>
            <p>Опора на действующую команду: ${b.coreTeam.join(" · ")}</p>
          </div>
          <div class="brief-resource-model__hire">
            <span>Две дополнительные вакансии</span>
            <strong>${b.vacancies.join(" + ")}</strong>
            <p>Без выделенных Dev и QA растут риски сроков, дефектов и зависимости от частичной загрузки действующих сотрудников.</p>
          </div>
        </div>
        <div class="brief-resource-model__assumptions">
          ${b.assumptions.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}
        </div>
      </div>`;
  }

  function approvalBlock() {
    const b = BUSINESS_CASE;
    return `
      <div class="brief-decision brief-decision--approval brief-reveal">
        <div class="brief-decision__item"><span>01 / CRM-стратегия</span><strong>Утвердить предложенную CRM-стратегию на ${b.strategyApprovalPeriod}</strong><em>Стратегический горизонт программы</em></div>
        <div class="brief-decision__item"><span>02 / Бюджет программы</span><strong>Утвердить бюджет программы ${b.programBudgetApproval} до ${b.programBudgetApprovalEnd}</strong><em>HR + outstaff; outstaff — ${b.outstaffBudget}</em></div>
        <div class="brief-decision__item brief-decision__item--hiring"><span>03 / Дополнительный найм</span><strong>Утвердить найм ${b.vacanciesApproval}</strong><em>Две штатные вакансии для реализации программы</em></div>
      </div>
      <div class="brief-decision__basis brief-reveal"><strong>${b.revenue}</strong> дополнительной выручки <i>·</i> <strong>ROI ${b.roi}</strong> <i>·</i> окупаемость — <strong>${b.payback}</strong></div>`;
  }

  function goalsBlock() {
    return `
      <div class="brief-goals brief-reveal">
        <div class="brief-goals__group">
          <span>Три бизнес-цели</span>
          <div class="brief-goal"><b>01</b><strong>Управляемый рост клиентской базы и AUM</strong></div>
          <div class="brief-goal"><b>02</b><strong>Увеличение продуктивности коммерческой команды</strong></div>
          <div class="brief-goal"><b>03</b><strong>Удержание и развитие клиентов</strong></div>
        </div>
        <div class="brief-goals__group brief-goals__group--dark">
          <span>Две поддерживающие цели</span>
          <div class="brief-goal"><b>04</b><strong>Единое информационное пространство о клиенте</strong></div>
          <div class="brief-goal"><b>05</b><strong>Управленческая прозрачность и решения на данных</strong></div>
        </div>
      </div>`;
  }

  function modelBlock() {
    return `
      <div class="brief-flow brief-flow--detailed brief-reveal">
        <div class="brief-flow__step"><span>01</span><strong>Единое информационное пространство о клиенте</strong><p>История отношений и сервисных запросов, расчётный потенциал, продукты, связи и полная информация о портфеле.</p></div>
        <div class="brief-flow__step"><span>02</span><strong>Значимое событие или запрос</strong><p>Движение средств, купон или погашение, изменение риска, рыночное событие либо обращение клиента.</p></div>
        <div class="brief-flow__step"><span>03</span><strong>Действие ФС или сервисный кейс</strong><p>Приоритетный следующий шаг, предложение или кейс с владельцем, сроком, каналом и маршрутом.</p></div>
        <div class="brief-flow__step"><span>04</span><strong>Коммерческий или сервисный результат</strong><p>Фондирование, развитие или удержание клиента, принятое предложение либо решённый запрос.</p></div>
        <div class="brief-flow__step"><span>05</span><strong>Измерение эффекта</strong><p>NNA и маржа от AUM, конверсия воронок, покрытие базы, удержание, SLA и качество сервиса.</p></div>
      </div>`;
  }

  function capabilitiesBlock() {
    return `
      <div class="brief-capabilities brief-capabilities--shared brief-reveal">
        <div class="brief-capability"><span>01</span><strong>Привлечение и продажи</strong><p>Лид → квалификация → счёт → первое фондирование; отдельная воронка повторных и кросс-продаж.</p></div>
        <div class="brief-capability"><span>02</span><strong>Клиент и портфель</strong><p>Единый ID, история отношений, продукты, связи, риск-профиль клиента, Портфель 360, свободные средства и ожидаемые поступления.</p></div>
        <div class="brief-capability"><span>03</span><strong>Продукт и следующее действие</strong><p>Продуктовый каталог, событийные сигналы, потенциал клиента, приоритетное предложение и контроль результата.</p></div>
        <div class="brief-capability"><span>04</span><strong>Рабочее место ФС</strong><p>Задачи, встречи, Outlook, календарь, мобильность, отчёты, справки и документы — без переключения в back-системы.</p></div>
        <div class="brief-capability"><span>05</span><strong>Сервис и отношения</strong><p>Единый Service Case, маршрутизация, SLA, база знаний, сегментная модель сопровождения и удержание.</p></div>
        <div class="brief-capability"><span>06</span><strong>Данные и управление</strong><p>Воронки и прогноз, качество данных, роли и аудит, процессные данные в КХД, аналитика ценности клиента.</p></div>
      </div>`;
  }

  function problems8Block() {
    return `
      <div class="brief-problems brief-reveal">
        <div class="brief-problem"><span>01</span><div><strong>Неполная и разрозненная информация по клиенту и его портфелю</strong><p>Лид, клиент, история, продукты и связи не образуют целостную карточку; обратная связь от клиентов системно не собирается.</p></div></div>
        <div class="brief-problem"><span>02</span><div><strong>Воронки продаж нельзя полноценно вести в CRM</strong><p>Нет каталога продуктов и связи продукта с клиентом, портфелем и продажей; статусная модель и этапы процесса продаж требуют переработки.</p></div></div>
        <div class="brief-problem"><span>03</span><div><strong>Портфель не является рабочим инструментом</strong><p>Не хватает клиентского представления, свободных средств и ожидаемых поступлений.</p></div></div>
        <div class="brief-problem"><span>04</span><div><strong>CRM не помогает продавать проактивно</strong><p>События не превращаются в предложение, задачу ФС и сценарий контакта.</p></div></div>
        <div class="brief-problem"><span>05</span><div><strong>Финансовый советник работает в разных системах и приложениях</strong><p>Данные и документы приходится искать в Солид-Финанс и других инструментах; календари CRM не синхронизируются с Outlook, а интерфейс перегружен визуальным шумом.</p></div></div>
        <div class="brief-problem"><span>06</span><div><strong>Нет сегментации по ценности и потенциалу</strong><p>Ресурс сопровождения распределяется без учёта ценности клиента и риска.</p></div></div>
        <div class="brief-problem"><span>07</span><div><strong>Сервисная модель находится на начальном этапе развития</strong><p>ЕКЦ уже создаёт фундамент, но каналы, маршрутизация, SLA и аналитика ещё развиваются.</p></div></div>
        <div class="brief-problem"><span>08</span><div><strong>Негибкое разграничение прав доступа и слабая аналитика текущего решения</strong><p>Роли и права сложно адаптировать; аналитика ограничена, а владение данными и аудит изменений не формализованы.</p></div></div>
      </div>`;
  }

  function rolesBlock() {
    return `
      <div class="brief-role-grid brief-role-grid--rich brief-reveal">
        <div class="brief-role"><span>01</span><div><strong>Финансовый советник</strong><p>Профиль, портфель, история, документы и следующий шаг — в одном рабочем пространстве.</p></div></div>
        <div class="brief-role"><span>02</span><div><strong>Руководитель продаж</strong><p>Конверсия первичных и повторных продаж, покрытие базы, потери, риск и прогноз без ручного сбора.</p></div></div>
        <div class="brief-role"><span>03</span><div><strong>ЕКЦ и операции</strong><p>Единый кейс с категорией, владельцем, очередью, маршрутом, SLA, эскалацией и результатом.</p></div></div>
        <div class="brief-role"><span>04</span><div><strong>Топ-менеджмент</strong><p>Драйверы NNA, удержания и продуктивности — с понятной связью между процессом и результатом.</p></div></div>
        <div class="brief-role"><span>05</span><div><strong>Финансы</strong><p>Процессные данные CRM соединяются в КХД с финансовым фактом, доходом и экономикой базы.</p></div></div>
        <div class="brief-role"><span>06</span><div><strong>Маркетинг</strong><p>Кампании и каналы оцениваются по фондированию, развитию базы и ROMI, а не только по заявкам.</p></div></div>
        <div class="brief-role"><span>07</span><div><strong>UHNW-команда</strong><p>Капитал, семейные и корпоративные связи, события и риски собираются в единый контекст отношений.</p></div></div>
        <div class="brief-role"><span>08</span><div><strong>Агенты</strong><p>Статус, подтверждённые связи с клиентами, задачи и документы; далее — разрешённый контекст в ЛК агента.</p></div></div>
        <div class="brief-role"><span>09</span><div><strong>Контроль качества</strong><p>Полная история коммуникаций, сервисных кейсов, SLA и результатов, а также автоматизированный сбор обратной связи от клиентов — для проверки и улучшений.</p></div></div>
      </div>`;
  }

  function roadmapBlock() {
    return `
      <div class="brief-timeline brief-timeline--detailed brief-reveal">
        <article class="brief-wave">
          <div class="brief-wave__number">01</div>
          <span class="brief-wave__period">Сен. 2026 — май 2027</span>
          <h3>Фиксируем и управляем</h3>
          <div class="brief-wave__scope"><b>Функционал</b><p>Первичная и повторная воронки · профиль и единый ID · продуктовый справочник · рабочее место ФС · агентский CRM-контур · аналитика продаж · фундамент ЕКЦ.</p></div>
          <div class="brief-wave__scope"><b>Методология и процессы</b><p>Этапы и критерии воронок · правила ведения клиента и следующего шага · ритм управления продажами · жизненный цикл агента · роли и доступы · обучение.</p></div>
        </article>
        <article class="brief-wave">
          <div class="brief-wave__number">02</div>
          <span class="brief-wave__period">Июн. — ноя. 2027</span>
          <h3>Развиваем и удерживаем</h3>
          <div class="brief-wave__scope"><b>Функционал</b><p>Портфель 360 · продуктовый каталог · событийные продажи · следующее действие · Service Case · сегментация и удержание · мобильность · NPS/CSI · подготовка ЛК агента.</p></div>
          <div class="brief-wave__scope"><b>Методология и процессы</b><p>Портфельный обзор · контактная политика · сервисный каталог, маршрутизация и SLA · модель сопровождения по сегментам · передача клиента · обратная связь · права агента.</p></div>
        </article>
        <article class="brief-wave">
          <div class="brief-wave__number">03</div>
          <span class="brief-wave__period">Дек. 2027 — май 2028</span>
          <h3>Прогнозируем</h3>
          <div class="brief-wave__scope"><b>Функционал</b><p>Предиктивное NBA · риск оттока · прогноз AUM и выручки · Капитал 360 · омниканальность · ЛК агента · цифровой фронт · NMAG, LTV и аудит.</p></div>
          <div class="brief-wave__scope"><b>Методология и процессы</b><p>Сценарии удержания · управление клиентской ценностью · политика офферов и каналов · оценка моделей · права на внешние данные · контроль доступа и качества.</p></div>
        </article>
      </div>`;
  }

  function executiveTemplate() {
    return `
      <main class="brief-document" aria-label="Executive Summary CRM-стратегии">
        <section class="brief-section brief-hero" id="executive-overview" data-section-id="executive-overview" data-topic="overview" data-full-target="core" data-index="01">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Executive Summary · стратегический релиз 2026</div>
            <h1 class="brief-title brief-reveal">CRM — это <br>бизнес-инициатива</h1>
            <p class="brief-lead brief-reveal">Не локальная доработка системы, а переосмысление процессов, методологии продаж, мотивации, ролей и дисциплины работы с клиентом на всём жизненном цикле.</p>
            <div class="brief-outcomes brief-reveal">
              <div class="brief-outcome"><span>Результат 01</span><strong>Рост клиентских активов и маржинальности</strong></div>
              <div class="brief-outcome"><span>Результат 02</span><strong>Развитие и удержание действующей базы</strong></div>
              <div class="brief-outcome"><span>Результат 03</span><strong>Продуктивность финансового советника</strong></div>
            </div>
            ${detailLink("core", "Открыть полную формулировку стратегии", "exec-link-overview")}
          </div>
        </section>

        <section class="brief-section" id="executive-why" data-section-id="executive-why" data-topic="why" data-full-target="problems" data-index="02">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Почему сейчас</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Компания знает о клиенте больше, чем умеет системно использовать</h2>
            ${problems8Block()}
            ${detailLink("problems", "Посмотреть диагностику", "exec-link-problems")}
          </div>
        </section>

        <section class="brief-section" id="executive-model" data-section-id="executive-model" data-topic="model" data-full-target="goals" data-index="03">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Целевая модель</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Персональная работа становится системной</h2>
            <p class="brief-lead brief-reveal">CRM не заменяет отношения с клиентом автоматизацией, а выявляет значимое событие, помогает выбрать действие, направляет сотрудника и фиксирует результат.</p>
            ${modelBlock()}
            ${detailLink("goals", "Подробнее о целевой модели", "exec-link-model")}
          </div>
        </section>

        <section class="brief-section" id="executive-goals" data-section-id="executive-goals" data-topic="goals" data-full-target="goals" data-index="04">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Пять целей стратегии</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Три бизнес-цели опираются на две поддерживающие цели</h2>
            ${goalsBlock()}
            ${detailLink("goals", "Открыть цели и их связь с проблемами", "exec-link-goals")}
          </div>
        </section>

        <section class="brief-section" id="executive-metrics" data-section-id="executive-metrics" data-topic="metrics" data-full-target="metrics" data-index="05">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Ключевые бизнес-метрики</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Результат — деньги, а не количество действий в CRM</h2>
            ${metricsBlock()}
            ${detailLink("metrics", "Открыть дерево метрик", "exec-link-metrics")}
          </div>
        </section>

        <section class="brief-section brief-section--business-case" id="executive-business-case" data-section-id="executive-business-case" data-topic="business-case" data-full-target="businessCase" data-index="06">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Base-сценарий · ${BUSINESS_CASE.horizon}</div>
            <h2 class="brief-title brief-title--business-case brief-reveal">${BUSINESS_CASE.revenue} дополнительной выручки при бюджете команды ${BUSINESS_CASE.teamBudget}</h2>
            ${businessCaseBlock()}
            ${detailLink("businessCase", "Подробнее о бизнес-кейсе", "exec-link-business-case")}
          </div>
        </section>

        <section class="brief-section" id="executive-changes" data-section-id="executive-changes" data-topic="capabilities" data-full-target="capabilities" data-index="07">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Функциональный контур</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Шесть функциональных блоков, поддерживаемых изменениями в методологии и бизнес-процессах</h2>
            ${capabilitiesBlock()}
            ${detailLink("capabilities", "Посмотреть полный функциональный контур", "exec-link-capabilities")}
          </div>
        </section>

        <section class="brief-section" id="executive-technology" data-section-id="executive-technology" data-topic="technology" data-full-target="technology" data-index="08">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Технологический контур CRM</div>
            <h2 class="brief-title brief-title--medium brief-reveal">CRM связывает работу с клиентом, но не подменяет системы учёта</h2>
            <p class="brief-lead brief-reveal">ФС работает в CRM, операционные факты приходят из систем-источников, а итоговая аналитика формируется в КХД.</p>
            ${techMap()}
            ${detailLink("technology", "Подробнее о технологиях и данных", "exec-link-technology")}
          </div>
        </section>

        <section class="brief-section" id="executive-roadmap" data-section-id="executive-roadmap" data-topic="roadmap-overview" data-full-target="roadmap" data-index="09">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Путь реализации</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Сначала управляем. Затем развиваем. Только потом прогнозируем.</h2>
            ${roadmapBlock()}
            ${detailLink("roadmap", "Открыть полную дорожную карту", "exec-link-roadmap")}
          </div>
        </section>

        <section class="brief-section" id="executive-decision" data-section-id="executive-decision" data-topic="decision" data-full-target="organization" data-index="10">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Запрос на утверждение</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Три решения для запуска программы</h2>
            ${approvalBlock()}
            ${detailLink("organization", "Перейти к полной версии решения", "exec-link-decision")}
          </div>
        </section>
      </main>`;
  }

  function presentationTemplate() {
    return `
      <main class="brief-document" aria-label="Сокращённая версия CRM-стратегии для встреч">
        <section class="brief-section brief-hero" id="presentation-overview" data-section-id="presentation-overview" data-topic="overview" data-full-target="core" data-index="01">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Версия для встреч · 25–28 минут</div>
            <h1 class="brief-title brief-reveal">CRM — это <br>бизнес-инициатива</h1>
            <p class="brief-lead brief-reveal">Не локальная доработка системы, а переосмысление процессов, методологии продаж, мотивации, ролей и дисциплины работы с клиентом на всём жизненном цикле.</p>
            <div class="brief-outcomes brief-reveal">
              <div class="brief-outcome"><span>Результат 01</span><strong>Рост клиентских активов и маржинальности</strong></div>
              <div class="brief-outcome"><span>Результат 02</span><strong>Развитие и удержание действующей базы</strong></div>
              <div class="brief-outcome"><span>Результат 03</span><strong>Продуктивность финансового советника</strong></div>
            </div>
            ${detailLink("core", "Открыть полную стратегию", "pres-link-overview")}
          </div>
        </section>

        <section class="brief-section" id="presentation-why" data-section-id="presentation-why" data-topic="why" data-full-target="problems" data-index="02">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Почему сейчас</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Компания знает о клиенте больше, чем умеет системно использовать</h2>
            ${problems8Block()}
            ${detailLink("problems", "Посмотреть диагностику", "pres-link-problems")}
          </div>
        </section>

        <section class="brief-section" id="presentation-model" data-section-id="presentation-model" data-topic="model" data-full-target="goals" data-index="03">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Целевая модель</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Персональная работа становится системной</h2>
            <p class="brief-lead brief-reveal">CRM не заменяет отношения с клиентом автоматизацией, а выявляет значимое событие, помогает выбрать действие, направляет сотрудника и фиксирует результат.</p>
            ${modelBlock()}
            ${detailLink("goals", "Подробнее о модели", "pres-link-model")}
          </div>
        </section>

        <section class="brief-section" id="presentation-goals" data-section-id="presentation-goals" data-topic="goals" data-full-target="goals" data-index="04">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Пять целей стратегии</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Три бизнес-цели опираются на две поддерживающие цели</h2>
            ${goalsBlock()}
            ${detailLink("goals", "Открыть цели и маппинг", "pres-link-goals")}
          </div>
        </section>

        <section class="brief-section" id="presentation-metrics" data-section-id="presentation-metrics" data-topic="metrics" data-full-target="metrics" data-index="05">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Ключевые бизнес-метрики</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Результат — деньги, а не количество действий в CRM</h2>
            ${metricsBlock()}
            ${detailLink("metrics", "Открыть детализацию метрик", "pres-link-metrics")}
          </div>
        </section>

        <section class="brief-section brief-section--business-case" id="presentation-business-case" data-section-id="presentation-business-case" data-topic="business-case" data-full-target="businessCase" data-index="06">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Base-сценарий · ${BUSINESS_CASE.horizon}</div>
            <h2 class="brief-title brief-title--business-case brief-reveal">${BUSINESS_CASE.revenue} дополнительной выручки при бюджете команды ${BUSINESS_CASE.teamBudget}</h2>
            ${businessCaseBlock()}
            ${detailLink("businessCase", "Подробнее о бизнес-кейсе", "pres-link-business-case")}
          </div>
        </section>

        <section class="brief-section" id="presentation-resources" data-section-id="presentation-resources" data-topic="business-case-resources" data-full-target="businessCase" data-index="07">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Бюджет и ресурсная модель</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Команда усиливается по мере развития функционального контура</h2>
            ${resourceModelBlock()}
            ${detailLink("businessCase", "Открыть расчёт и допущения", "pres-link-resources")}
          </div>
        </section>

        <section class="brief-section" id="presentation-capabilities" data-section-id="presentation-capabilities" data-topic="capabilities" data-full-target="capabilities" data-index="08">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Функциональный контур</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Шесть функциональных блоков, поддерживаемых изменениями в методологии и бизнес-процессах</h2>
            ${capabilitiesBlock()}
            ${detailLink("capabilities", "Открыть функциональную карту", "pres-link-capabilities")}
          </div>
        </section>

        <section class="brief-section" id="presentation-roles" data-section-id="presentation-roles" data-topic="roles" data-full-target="roles" data-index="09">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Изменения для ролей</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Один контур — разные рабочие результаты</h2>
            ${rolesBlock()}
            ${detailLink("roles", "Посмотреть эффекты по девяти ролям", "pres-link-roles")}
          </div>
        </section>

        <section class="brief-section" id="presentation-lifecycle" data-section-id="presentation-lifecycle" data-topic="lifecycle" data-full-target="methodology" data-index="10">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Жизненный цикл и продажи</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Привлечение и развитие базы требуют разных воронок</h2>
            <div class="brief-funnels brief-reveal">
              <article class="brief-funnel">
                <h3>Первичная продажа</h3>
                <div class="brief-funnel__steps"><span>Лид</span><span>Квалификация</span><span>Открытие счёта</span><span>Первое фондирование</span></div>
              </article>
              <article class="brief-funnel brief-funnel--repeat">
                <h3>Развитие клиента</h3>
                <div class="brief-funnel__steps"><span>Событие</span><span>Возможность</span><span>Предложение</span><span>Внешнее пополнение</span></div>
              </article>
            </div>
            <div class="brief-note brief-reveal">Для каждой воронки нужны собственные этапы, критерии переходов, следующий шаг, ответственный и управленческий ритм.</div>
            ${detailLink("methodology", "Открыть методологию", "pres-link-lifecycle")}
          </div>
        </section>

        <section class="brief-section" id="presentation-service" data-section-id="presentation-service" data-topic="service" data-full-target="methodology" data-index="11">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Сегментация, события и сервис</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Ресурс направляется туда, где важны ценность, потенциал и риск</h2>
            <div class="brief-flow brief-reveal">
              <div class="brief-flow__step"><span>01</span><strong>AUM × потенциал клиента</strong></div>
              <div class="brief-flow__step"><span>02</span><strong>Модель сопровождения</strong></div>
              <div class="brief-flow__step"><span>03</span><strong>Событие или сигнал риска</strong></div>
              <div class="brief-flow__step"><span>04</span><strong>Контакт или сервисный кейс</strong></div>
              <div class="brief-flow__step"><span>05</span><strong>Результат и обратная связь</strong></div>
            </div>
            ${detailLink("methodology", "Открыть правила и практики", "pres-link-service")}
          </div>
        </section>

        <section class="brief-section" id="presentation-governance" data-section-id="presentation-governance" data-topic="governance" data-full-target="methodology" data-index="12">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Правила исполнения</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Система работает только вместе с ролью, правилом и привычкой</h2>
            <div class="brief-rule-grid brief-reveal">
              <div class="brief-rule"><span>01</span><div><strong>Владение клиентом</strong><p>Аллокация, передача, замещение и видимость данных.</p></div></div>
              <div class="brief-rule"><span>02</span><div><strong>Владение данными</strong><p>Источник, качество, актуальность и ответственность.</p></div></div>
              <div class="brief-rule"><span>03</span><div><strong>Управленческий ритм</strong><p>Регулярная работа с воронкой, базой, рисками и SLA.</p></div></div>
              <div class="brief-rule"><span>04</span><div><strong>Adoption</strong><p>Обучение, CRM-чемпионы, мотивация и контроль использования.</p></div></div>
            </div>
            ${detailLink("methodology", "Открыть семь методологических опор", "pres-link-governance")}
          </div>
        </section>

        <section class="brief-section" id="presentation-technology" data-section-id="presentation-technology" data-topic="technology" data-full-target="technology" data-index="13">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Технологический контур CRM</div>
            <h2 class="brief-title brief-title--medium brief-reveal">CRM связывает работу с клиентом, но не подменяет системы учёта</h2>
            <p class="brief-lead brief-reveal">ФС работает в CRM, операционные факты приходят из систем-источников, а итоговая аналитика формируется в КХД.</p>
            ${techMap()}
            ${detailLink("technology", "Открыть полные технологические схемы", "pres-link-technology")}
          </div>
        </section>

        <section class="brief-section" id="presentation-roadmap-overview" data-section-id="presentation-roadmap-overview" data-topic="roadmap-overview" data-full-target="roadmap" data-index="14">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Три волны развития CRM</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Сначала управляем. Затем развиваем. Только потом прогнозируем.</h2>
            ${roadmapBlock()}
            ${detailLink("roadmap", "Открыть полную дорожную карту", "pres-link-roadmap-overview")}
          </div>
        </section>

        <section class="brief-section" id="presentation-roadmap" data-section-id="presentation-roadmap" data-topic="roadmap" data-full-target="roadmap" data-index="15">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Логика roadmap</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Каждая волна меняет четыре слоя одновременно</h2>
            <div class="brief-changes brief-reveal" style="grid-template-columns:repeat(4,minmax(0,1fr))">
              <div class="brief-change"><span>01</span><strong>CRM</strong><p>Функции и рабочие поверхности.</p></div>
              <div class="brief-change"><span>02</span><strong>Методология</strong><p>Этапы, роли и правила.</p></div>
              <div class="brief-change"><span>03</span><strong>Данные</strong><p>Источники, качество и интеграции.</p></div>
              <div class="brief-change"><span>04</span><strong>Внедрение</strong><p>Обучение, ритм и контроль эффекта.</p></div>
            </div>
            <div class="brief-note brief-reveal">Переход к следующей волне происходит по критериям результата, а не только по календарной дате.</div>
            ${detailLink("roadmap", "Открыть карту зрелости", "pres-link-roadmap")}
          </div>
        </section>

        <section class="brief-section" id="presentation-wave1" data-section-id="presentation-wave1" data-topic="wave1" data-full-target="roadmap" data-index="16">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Волна 1 · сен. 2026 — май 2027</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Управляемые продажи, единый профиль и рабочее место ФС</h2>
            <div class="brief-capabilities brief-capabilities--wave brief-reveal">
              <div class="brief-change"><span>01</span><strong>Воронка первичных продаж</strong><p>От лида до первого фондирования.</p></div>
              <div class="brief-change"><span>02</span><strong>Повторные продажи</strong><p>Отдельный процесс развития базы.</p></div>
              <div class="brief-change"><span>03</span><strong>Профиль клиента</strong><p>Единый ID, история и ответственность.</p></div>
              <div class="brief-change"><span>04</span><strong>Продуктовый справочник</strong><p>Единая иерархия и связь продукта с клиентом и сделкой.</p></div>
              <div class="brief-change"><span>05</span><strong>Рабочее место ФС</strong><p>Контекст, задачи, Outlook, документы и мобильный доступ.</p></div>
              <div class="brief-change"><span>06</span><strong>Агентский CRM-контур</strong><p>Карточка и статус агента, связи с клиентами, ФС, задачами и документами.</p></div>
              <div class="brief-change"><span>07</span><strong>Управленческая аналитика</strong><p>Воронки, эффективность ФС, продукты и агентские продажи.</p></div>
              <div class="brief-change"><span>08</span><strong>Фундамент ЕКЦ</strong><p>Стабилизация пилота, классификация и база знаний.</p></div>
            </div>
            <div class="brief-note brief-reveal"><b>Методология и процессы:</b> этапы и критерии воронок, правила следующего шага, единый ID и ведение карточки, жизненный цикл агента, роли и доступы, управленческий ритм и обучение.</div>
            ${detailLink("roadmap", "Открыть инициативы Волны 1", "pres-link-wave1")}
          </div>
        </section>

        <section class="brief-section" id="presentation-wave23" data-section-id="presentation-wave23" data-topic="wave23" data-full-target="roadmap" data-index="17">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Волны 2–3</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Сначала развитие базы и сервис. Затем прогнозирование.</h2>
            <div class="brief-funnels brief-reveal">
              <article class="brief-funnel">
                <span class="brief-wave__period">Июнь — ноябрь 2027</span>
                <h3>Волна 2 · развитие базы</h3>
                <div class="brief-funnel__steps"><span>Портфель 360</span><span>Продуктовый каталог</span><span>Событийные продажи</span><span>Следующее действие</span><span>Service Case</span><span>Сегментация и удержание</span><span>Мобильные сценарии</span><span>NPS / CSI</span><span>Подготовка ЛК агента</span></div>
                <p><b>Методология:</b> портфельный обзор, контактная политика, каталог сервисов, маршрутизация и SLA, модель сопровождения по сегментам.</p>
              </article>
              <article class="brief-funnel brief-funnel--repeat">
                <span class="brief-wave__period">Декабрь 2027 — май 2028</span>
                <h3>Волна 3 · зрелая модель</h3>
                <div class="brief-funnel__steps"><span>Предиктивное NBA</span><span>Риск оттока</span><span>Прогноз AUM и выручки</span><span>Капитал 360</span><span>Омниканальность</span><span>ЛК агента</span><span>Цифровой фронт</span><span>NMAG / LTV</span><span>Аудит данных</span></div>
                <p><b>Методология:</b> сценарии удержания, политика офферов и каналов, оценка моделей, управление клиентской ценностью и контроль данных.</p>
              </article>
            </div>
            ${detailLink("roadmap", "Открыть Волны 2–3", "pres-link-wave23")}
          </div>
        </section>

        <section class="brief-section" id="presentation-decision" data-section-id="presentation-decision" data-topic="decision" data-full-target="organization" data-index="18">
          <div class="brief-inner">
            <div class="brief-kicker brief-reveal">Запрос на утверждение</div>
            <h2 class="brief-title brief-title--medium brief-reveal">Три решения для запуска программы</h2>
            ${approvalBlock()}
            ${detailLink("organization", "Перейти к полной версии", "pres-link-decision")}
          </div>
        </section>
      </main>`;
  }

  function parseView() {
    const value = new URL(window.location.href).searchParams.get("view");
    return VIEWS.includes(value) ? value : "executive";
  }

  function viewUrl(view, target) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", view);
    url.hash = target ? `#${target}` : "";
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function createShell() {
    fullRoot = document.getElementById("root");
    if (!fullRoot) return false;

    document.body.classList.add("has-three-views");
    viewbar = document.createElement("header");
    viewbar.className = "strategy-viewbar";
    viewbar.setAttribute("aria-label", "Выбор версии CRM-стратегии");
    viewbar.innerHTML = `
      <div class="strategy-viewbar__brand">
        <span class="strategy-viewbar__mark" aria-hidden="true">CRM</span>
        <div><strong>CRM-стратегия</strong><span>Три уровня детализации</span></div>
      </div>
      <nav class="strategy-viewbar__modes" aria-label="Режим просмотра">
        <button type="button" data-view-target="executive" aria-pressed="false">Executive Summary</button>
        <button type="button" data-view-target="presentation" aria-pressed="false">Сокращённая версия</button>
        <button type="button" data-view-target="full" aria-pressed="false">Полная версия</button>
      </nav>
      <div class="strategy-viewbar__context" aria-live="polite"><strong data-current-section>Начало</strong><span data-view-name>Executive Summary</span></div>
      <div class="strategy-viewbar__progress" aria-hidden="true"><span></span></div>`;

    briefRoot = document.createElement("div");
    briefRoot.id = "brief-root";
    briefRoot.className = "brief-root";
    fullRoot.before(viewbar);
    fullRoot.before(briefRoot);

    viewbar.addEventListener("click", function (event) {
      const button = event.target.closest("[data-view-target]");
      if (!button) return;
      const nextView = button.getAttribute("data-view-target");
      if (nextView === activeView) return;
      const currentSection = activeView === "full" ? null : getCurrentBriefSection();
      const topic = currentSection ? currentSection.dataset.topic : null;
      const target = nextView === "full" && currentSection ? currentSection.dataset.fullTarget : null;
      navigate(nextView, { target, topic, focusElement: button });
    });

    briefRoot.addEventListener("click", function (event) {
      const link = event.target.closest("a.brief-link[data-full-target]");
      if (!link) return;
      event.preventDefault();
      navigate("full", {
        target: link.getAttribute("data-full-target"),
        topic: link.closest(".brief-section")?.dataset.topic || null,
        focusElement: link,
        sourceSection: link.closest(".brief-section"),
      });
    });

    return true;
  }

  function getCurrentBriefSection() {
    const sections = Array.from(briefRoot.querySelectorAll(".brief-section"));
    const line = (viewbar?.offsetHeight || 0) + 36;
    let current = sections[0] || null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) current = section;
      else break;
    }
    return current;
  }

  function capturePosition(focusElement, sourceSection) {
    const state = Object.assign({}, window.history.state || {});
    state.view = activeView;
    state.scrollY = window.scrollY;
    state.focusId = focusElement?.id || null;

    if (activeView !== "full") {
      const section = sourceSection || getCurrentBriefSection();
      if (section) {
        const absoluteTop = window.scrollY + section.getBoundingClientRect().top;
        state.sectionId = section.dataset.sectionId;
        state.topic = section.dataset.topic;
        state.fullTarget = section.dataset.fullTarget;
        state.sectionOffset = window.scrollY - absoluteTop;
      }
    } else {
      state.target = window.location.hash.replace(/^#/, "") || null;
    }

    window.history.replaceState(state, "", window.location.href);
    return state;
  }

  function navigate(view, options) {
    const settings = options || {};
    capturePosition(settings.focusElement, settings.sourceSection);
    const nextState = {
      view,
      target: settings.target || null,
      topic: settings.topic || null,
      sectionOffset: view !== "full" && settings.topic
        ? -(viewbar?.offsetHeight || 0)
        : null,
      scrollY: 0,
    };
    window.history.pushState(nextState, "", viewUrl(view, settings.target));
    renderView(view, nextState);
  }

  function renderBrief(view) {
    briefRoot.innerHTML = view === "presentation" ? presentationTemplate() : executiveTemplate();
    installRevealObserver();
  }

  function installRevealObserver() {
    if (revealObserver) revealObserver.disconnect();
    const sections = briefRoot.querySelectorAll(".brief-section");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );
    sections.forEach((section) => revealObserver.observe(section));
  }

  function updateSwitcher(view) {
    viewbar.querySelectorAll("[data-view-target]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.viewTarget === view));
    });
    const viewName = viewbar.querySelector("[data-view-name]");
    if (viewName) viewName.textContent = VIEW_META[view].label;
  }

  function restoreBriefPosition(state) {
    const token = ++restoreToken;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (token !== restoreToken) return;
        let section = state?.sectionId
          ? briefRoot.querySelector(`[data-section-id="${CSS.escape(state.sectionId)}"]`)
          : null;
        if (!section && state?.topic) {
          section = briefRoot.querySelector(`[data-topic="${CSS.escape(state.topic)}"]`);
        }
        if (section) {
          const absoluteTop = window.scrollY + section.getBoundingClientRect().top;
          const targetY = absoluteTop + (Number(state.sectionOffset) || 0);
          window.scrollTo({ top: Math.max(0, targetY), behavior: "auto" });
        } else {
          window.scrollTo({ top: Number(state?.scrollY) || 0, behavior: "auto" });
        }
        if (state?.focusId) {
          const focusTarget = document.getElementById(state.focusId);
          if (focusTarget) focusTarget.focus({ preventScroll: true });
        }
        updateProgress();
      });
    });
  }

  function normalize(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function findFullHeading(text) {
    const headings = Array.from(fullRoot.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    return headings.find((heading) => normalize(heading.textContent) === normalize(text)) || null;
  }

  function findFullControl(text) {
    const controls = Array.from(fullRoot.querySelectorAll('button,[role="tab"]'));
    return controls.find((control) => normalize(control.textContent).includes(normalize(text))) || null;
  }

  function expandFullTarget(target, done, attempt) {
    const config = FULL_TARGETS[target] || FULL_TARGETS.core;
    const count = attempt || 0;
    const heading = findFullHeading(config.heading);
    if (!heading && count < 50) {
      window.setTimeout(() => expandFullTarget(target, done, count + 1), 40);
      return;
    }

    if (config.tab) {
      const tab = findFullControl(config.tab);
      if (tab && tab.getAttribute("aria-selected") !== "true") tab.click();
    }

    if (config.expandedHeading && !findFullHeading(config.expandedHeading)) {
      const clickable = heading?.closest(".cursor-pointer") || heading?.parentElement;
      if (clickable && typeof clickable.click === "function") clickable.click();
    }

    window.setTimeout(() => {
      const finalHeading = config.expandedHeading
        ? findFullHeading(config.expandedHeading) || findFullHeading(config.heading)
        : findFullHeading(config.heading);
      if (finalHeading) {
        finalHeading.id = `full-${target}`;
        finalHeading.setAttribute("tabindex", "-1");
      }
      done(finalHeading);
    }, config.tab || config.expandedHeading ? 120 : 0);
  }

  function restoreFullPosition(state) {
    const token = ++restoreToken;
    const target = state?.target || window.location.hash.replace(/^#/, "");
    if (!target) {
      requestAnimationFrame(() => {
        if (token !== restoreToken) return;
        window.scrollTo({ top: Number(state?.scrollY) || 0, behavior: "auto" });
        updateProgress();
      });
      return;
    }

    expandFullTarget(target, (heading) => {
      if (token !== restoreToken) return;
      if (heading) {
        const offset = (viewbar?.offsetHeight || 0) + 126;
        const top = window.scrollY + heading.getBoundingClientRect().top - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
        heading.focus({ preventScroll: true });
      }
      updateProgress();
    });
  }

  function renderView(view, state) {
    activeView = VIEWS.includes(view) ? view : "executive";
    document.body.dataset.strategyView = activeView;
    updateSwitcher(activeView);

    if (activeView === "full") {
      briefRoot.hidden = true;
      fullRoot.hidden = false;
      document.title = "CRM-стратегия — полная версия";
      restoreFullPosition(state || {});
    } else {
      fullRoot.hidden = true;
      briefRoot.hidden = false;
      renderBrief(activeView);
      document.title = activeView === "presentation"
        ? "CRM-стратегия — сокращённая версия"
        : "CRM-стратегия — Executive Summary";
      restoreBriefPosition(state || {});
    }
  }

  function updateProgress() {
    if (!viewbar) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    viewbar.style.setProperty("--view-progress", `${progress}%`);

    const currentLabel = viewbar.querySelector("[data-current-section]");
    if (!currentLabel) return;
    if (activeView === "full") {
      currentLabel.textContent = "Полная стратегия";
      return;
    }
    const section = getCurrentBriefSection();
    const heading = section?.querySelector("h1,h2");
    currentLabel.textContent = heading ? normalize(heading.textContent) : "Начало";
  }

  function initialize() {
    if (!createShell()) return;
    window.history.scrollRestoration = "manual";
    const initialView = parseView();
    const initialTarget = window.location.hash.replace(/^#/, "") || null;
    const initialState = Object.assign({}, window.history.state || {}, {
      view: initialView,
      target: initialTarget,
    });
    window.history.replaceState(initialState, "", viewUrl(initialView, initialTarget));
    renderView(initialView, initialState);

    window.addEventListener("popstate", (event) => {
      const state = event.state || { view: parseView(), target: window.location.hash.replace(/^#/, "") };
      renderView(state.view || parseView(), state);
    });
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
