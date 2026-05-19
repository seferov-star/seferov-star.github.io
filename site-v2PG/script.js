document.addEventListener('DOMContentLoaded', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches || window.matchMedia('(any-pointer: fine)').matches;
    const scrollBehavior = reducedMotion ? 'auto' : 'smooth';

    /* ===== HEADER SCROLL ===== */
    const header = document.querySelector('.header');
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    const currentSectionValue = document.querySelector('[data-current-section]');
    const backToTopButton = document.querySelector('.back-to-top');
    const getHeaderOffset = () => (header ? header.offsetHeight + 12 : 80);
    const sectionLabels = {
        hero: 'Начало',
        problems: 'Проблематика',
        consequences: 'Последствия',
        goals: 'Цели ЕСМ',
        impact: 'Влияние',
        'process-scheme': 'Схема процесса',
        architecture: 'Архитектура',
        related: 'Приложение',
        roadmap: 'Дорожная карта',
        'l1-operating-model': 'Запуск L1',
        'next-steps': 'План запуска',
        'mfs-reframing': 'Институт МФС',
        'vip-stage-zero': 'VIP Этап 0'
    };
    let pendingSectionFlashId = null;

    const updateScrollProgress = () => {
        if (!scrollProgressBar) return;

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0
            ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
            : 0;

        scrollProgressBar.style.width = `${progress}%`;
    };

    const toggleBackToTop = () => {
        if (!backToTopButton) return;
        backToTopButton.classList.toggle('visible', window.scrollY > window.innerHeight * 0.8);
    };

    const updateCurrentSection = (sectionId) => {
        if (!currentSectionValue) return;
        currentSectionValue.textContent = sectionLabels[sectionId] || 'Раздел';
    };

    const flashSection = (section) => {
        if (!section) return;

        const flashTarget = section.querySelector('.container') || section;
        flashTarget.classList.remove('section-flash');
        void flashTarget.offsetWidth;
        flashTarget.classList.add('section-flash');
        window.setTimeout(() => flashTarget.classList.remove('section-flash'), 820);
    };

    const handleScroll = () => {
        if (!header) return;

        header.classList.toggle('scrolled', window.scrollY > 60);

        // In hero the logo is inverted for contrast, then returns to normal on scroll.
        const logoImg = header.querySelector('.logo-img');
        if (logoImg) {
            logoImg.style.filter = window.scrollY > 60 ? 'none' : 'invert(1)';
        }

        updateScrollProgress();
        toggleBackToTop();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const logoImg = header?.querySelector('.logo-img');
    if (logoImg) logoImg.style.filter = 'invert(1)';
    handleScroll();

    /* ===== MOBILE NAV ===== */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    /* ===== ACTIVE NAV HIGHLIGHT ===== */
    const sections = [...document.querySelectorAll('section[id]')];
    const navLinks = [...document.querySelectorAll('.nav a')];

    const updateActiveNav = () => {
        let current = '';
        const offset = getHeaderOffset() + 28;

        sections.forEach((section) => {
            const top = section.offsetTop - offset;
            if (window.pageYOffset >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        updateCurrentSection(current || 'hero');

        if (pendingSectionFlashId && current === pendingSectionFlashId) {
            flashSection(document.getElementById(pendingSectionFlashId));
            pendingSectionFlashId = null;
        }
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });

    /* ===== SMOOTH SCROLL NAV ===== */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = getHeaderOffset();
                const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

                pendingSectionFlashId = target.id || null;
                window.scrollTo({ top: y, behavior: scrollBehavior });

                if (Math.abs(window.pageYOffset - y) < 32) {
                    window.setTimeout(() => flashSection(target), reducedMotion ? 0 : 80);
                    pendingSectionFlashId = null;
                }
            }

            nav?.classList.remove('open');
        });
    });

    if (window.location.hash) {
        const hashTarget = document.querySelector(window.location.hash);
        if (hashTarget) {
            window.requestAnimationFrame(() => {
                const offset = getHeaderOffset();
                const y = hashTarget.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: y, behavior: 'auto' });
            });
        }
    }

    /* ===== SCROLL REVEAL ===== */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach((element) => revealObserver.observe(element));

    /* ===== TILT CARDS ===== */
    const tiltCards = [...document.querySelectorAll('[data-tilt]')];
    const applyTilt = (card, event) => {
        if (reducedMotion) return;
        if (event.pointerType === 'touch') return;
        if (!finePointer && event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;

        card.style.setProperty('--tilt-x', `${rotateY}deg`);
        card.style.setProperty('--tilt-y', `${rotateX}deg`);
        card.style.setProperty('--tilt-lift', '-4px');
    };

    tiltCards.forEach((card) => {
        card.addEventListener('pointermove', (event) => applyTilt(card, event));
        card.addEventListener('pointerleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
            card.style.setProperty('--tilt-lift', '0px');
        });
    });

    /* ===== PROCESS STEP DETAILS ===== */
    const processStepButtons = [...document.querySelectorAll('[data-process-step]')];
    const processDetailShell = document.querySelector('[data-process-detail-shell]');
    const processDetailPanels = [...document.querySelectorAll('[data-process-detail-panel]')];
    let activeProcessStepId = null;

    const syncProcessStepDetails = (nextStepId) => {
        activeProcessStepId = activeProcessStepId === nextStepId ? null : nextStepId;

        processStepButtons.forEach((button) => {
            const isActive = button.dataset.processStep === activeProcessStepId;
            const actionLabel = button.querySelector('.flow-step-action');

            button.classList.toggle('active', isActive);
            button.setAttribute('aria-expanded', String(isActive));
            if (actionLabel) actionLabel.textContent = isActive ? 'Свернуть' : 'Подробнее';
        });

        processDetailPanels.forEach((panel) => {
            panel.hidden = panel.dataset.processDetailPanel !== activeProcessStepId;
        });

        if (processDetailShell) {
            processDetailShell.hidden = !activeProcessStepId;
        }
    };

    if (processDetailShell && processDetailPanels.length) {
        processDetailShell.hidden = true;
        processDetailPanels.forEach((panel) => {
            panel.hidden = true;
        });

        processStepButtons.forEach((button) => {
            button.addEventListener('click', () => syncProcessStepDetails(button.dataset.processStep));
        });
    }

    /* ===== GOAL CARD EXPAND/COLLAPSE ===== */
    document.querySelectorAll('.goal-card').forEach((card) => {
        const body = card.querySelector('.goal-card-body');

        card.addEventListener('click', function () {
            const isExpanded = this.classList.contains('expanded');

            document.querySelectorAll('.goal-card.expanded').forEach((other) => {
                if (other !== this) {
                    other.classList.remove('expanded');
                    const otherBody = other.querySelector('.goal-card-body');
                    if (otherBody) otherBody.style.maxHeight = '0px';
                }
            });

            if (isExpanded) {
                this.classList.remove('expanded');
                if (body) body.style.maxHeight = '0px';
            } else {
                this.classList.add('expanded');
                if (body) body.style.maxHeight = `${body.scrollHeight}px`;
            }
        });
    });

    /* ===== KPI DISCLOSURES ===== */
    const getDisclosureChild = (disclosure, selector) => (
        [...disclosure.children].find((child) => child.matches(selector)) || disclosure.querySelector(selector)
    );

    const refreshExpandedDisclosure = (disclosure) => {
        const body = getDisclosureChild(disclosure, '[data-disclosure-body]');
        if (body && disclosure.classList.contains('expanded')) {
            body.style.maxHeight = `${body.scrollHeight}px`;
        }
    };

    const refreshExpandedAncestors = (disclosure) => {
        let parentDisclosure = disclosure.parentElement?.closest('[data-disclosure].expanded');

        while (parentDisclosure) {
            refreshExpandedDisclosure(parentDisclosure);
            parentDisclosure = parentDisclosure.parentElement?.closest('[data-disclosure].expanded');
        }
    };

    const scheduleDisclosureRefresh = (disclosure) => {
        refreshExpandedAncestors(disclosure);

        [80, 180, 360, 520].forEach((delay) => {
            window.setTimeout(() => {
                refreshExpandedDisclosure(disclosure);
                refreshExpandedAncestors(disclosure);
            }, delay);
        });
    };

    document.querySelectorAll('[data-disclosure]').forEach((disclosure) => {
        const toggle = getDisclosureChild(disclosure, '[data-disclosure-toggle]');
        const body = getDisclosureChild(disclosure, '[data-disclosure-body]');

        if (!toggle || !body) return;

        const syncDisclosureState = (expanded) => {
            disclosure.classList.toggle('expanded', expanded);
            toggle.setAttribute('aria-expanded', String(expanded));
            body.style.maxHeight = expanded ? `${body.scrollHeight}px` : '0px';
            window.requestAnimationFrame(() => scheduleDisclosureRefresh(disclosure));
        };

        syncDisclosureState(disclosure.classList.contains('expanded'));

        toggle.addEventListener('click', () => {
            const isExpanded = disclosure.classList.contains('expanded');
            syncDisclosureState(!isExpanded);
        });

        body.addEventListener('transitionend', (event) => {
            if (event.propertyName !== 'max-height') return;

            refreshExpandedDisclosure(disclosure);
            refreshExpandedAncestors(disclosure);
        });
    });

    /* ===== ROADMAP STAGES ===== */
    const roadmapTrack = document.querySelector('.roadmap-track');
    const roadmapTrackHighlight = document.querySelector('.roadmap-track-highlight');
    const roadmapButtons = [...document.querySelectorAll('[data-roadmap-stage]')];
    const roadmapPanels = [...document.querySelectorAll('[data-roadmap-panel]')];

    const updateRoadmapHighlight = () => {
        if (!roadmapTrack || !roadmapTrackHighlight || roadmapButtons.length === 0) return;

        const activeButton = roadmapButtons.find((button) => button.classList.contains('active')) || roadmapButtons[0];
        roadmapTrackHighlight.style.width = `${activeButton.offsetWidth}px`;
        roadmapTrackHighlight.style.transform = `translateX(${activeButton.offsetLeft}px)`;
        roadmapTrackHighlight.style.opacity = '1';
    };

    const setRoadmapStage = (stage) => {
        roadmapButtons.forEach((button) => {
            const isActive = button.dataset.roadmapStage === stage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        roadmapPanels.forEach((panel) => {
            const isActive = panel.dataset.roadmapPanel === stage;
            panel.classList.toggle('active', isActive);
            panel.hidden = !isActive;
        });

        updateRoadmapHighlight();
    };

    roadmapButtons.forEach((button) => {
        button.addEventListener('click', () => setRoadmapStage(button.dataset.roadmapStage));
    });

    /* ===== COUNTER ANIMATION ===== */
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.count, 10);
                const suffix = element.dataset.suffix || '';
                let current = 0;
                const duration = 1200;
                const steps = 50;
                const step = target / steps;
                const interval = duration / steps;

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        element.classList.add('counted');

                        const statItem = element.closest('.stat-item');
                        if (statItem) {
                            statItem.classList.add('count-finished');
                            window.setTimeout(() => statItem.classList.remove('count-finished'), 720);
                        }
                    }

                    const formatted = Math.floor(current).toLocaleString('ru-RU');
                    element.textContent = formatted + suffix;
                }, interval);

                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((element) => counterObserver.observe(element));

    /* ===== PROBLEM CARDS — STAGGER ENTRANCE ===== */
    const problemCards = document.querySelectorAll('.problem-card');
    const problemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.1}s`;
                problemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    problemCards.forEach((card) => problemObserver.observe(card));

    /* ===== CONSEQUENCE ITEMS — SLIDE IN ON HOVER ===== */
    document.querySelectorAll('.consequence-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.borderLeftColor = 'var(--red-warning)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.borderLeftColor = '';
        });
    });

    /* ===== PARALLAX ON FLOATING SHAPES ===== */
    const shapes = document.querySelectorAll('.floating-shape');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;
                shapes.forEach((shape, index) => {
                    const speed = 0.02 + index * 0.015;
                    shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.01}deg)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    /* ===== MAGNETIC HOVER ON STAT ITEMS ===== */
    document.querySelectorAll('.stat-item').forEach((item) => {
        item.addEventListener('mousemove', (event) => {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            item.style.transform = `translateY(-4px) translate(${x * 0.05}px, ${y * 0.05}px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: scrollBehavior });
        });
    }

    window.addEventListener('resize', () => {
        document.querySelectorAll('.goal-card.expanded .goal-card-body').forEach((body) => {
            body.style.maxHeight = `${body.scrollHeight}px`;
        });

        document.querySelectorAll('[data-disclosure].expanded [data-disclosure-body]').forEach((body) => {
            body.style.maxHeight = `${body.scrollHeight}px`;
        });

        updateScrollProgress();
        updateRoadmapHighlight();
    });

    updateRoadmapHighlight();
    updateActiveNav();
});
