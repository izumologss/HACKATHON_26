/**
 * Mission 4 – The Corrupt Economy & Tiffin Ledger
 * Core Ecosystem Orchestration Module
 * * Handles the custom cursor tracker, incremental counter processing mechanics,
 * and standard diagnostic safeguards to ensure flawless framework rendering.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Custom Tracking Cursor Engine Module Components Mappings
    const interactiveCursor = document.getElementById('customCursor');
    if (interactiveCursor) {
        document.addEventListener('mousemove', (e) => {
            interactiveCursor.style.left = `${e.clientX}px`;
            interactiveCursor.style.top = `${e.clientY}px`;
        });

        // Map hover transformations securely across interface interaction targets
        const trackableTargets = document.querySelectorAll('a, button, .btn, input, select, textarea, [type="radio"]');
        trackableTargets.forEach(target => {
            target.addEventListener('mouseenter', () => interactiveCursor.classList.add('expansion'));
            target.addEventListener('mouseleave', () => interactiveCursor.classList.remove('expansion'));
        });
    }

    // 2. Continuous Metric Counter Acceleration Sequence
    const analyticCounters = document.querySelectorAll('.counter-val');
    if (analyticCounters.length > 0) {
        const triggerCounterSequence = () => {
            analyticCounters.forEach(counter => {
                const targetValue = +counter.getAttribute('data-target');
                const runAnimation = () => {
                    const activeCount = +counter.innerText;
                    const incrementStep = targetValue / 60; // Compute pacing boundaries safely

                    if (activeCount < targetValue) {
                        counter.innerText = Math.ceil(activeCount + incrementStep);
                        setTimeout(runAnimation, 20);
                    } else {
                        counter.innerText = targetValue.toLocaleString();
                    }
                };
                runAnimation();
            });
        };

        // Leverage IntersectionObserver mapping visibility thresholds prior to activation sequences
        const targetSection = document.querySelector('.metrics-strip');
        if (targetSection) {
            const observerInstance = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        triggerCounterSequence();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            observerInstance.observe(targetSection);
        }
    }

    // 3. Smooth Back to Top Navigation Widget Subsystem
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) scrollTopBtn.classList.add('active');
            else scrollTopBtn.classList.remove('active');
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});