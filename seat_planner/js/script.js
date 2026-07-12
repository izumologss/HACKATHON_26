document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Adaptive Premium Tracking Cursor Engine
    const cursor = document.getElementById('customCursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Track interactive objects to add responsiveness to the UI cursor asset bounds expansions
        const elementsToTrack = document.querySelectorAll('a, button, .btn, .grid-seat-node, input, select, textarea');
        elementsToTrack.forEach(element => {
            element.addEventListener('mouseenter', () => cursor.classList.add('expansion'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('expansion'));
        });
    }

    // 2. Incremental Numeric Value Counter Engine Module
    const metricCounters = document.querySelectorAll('.counter-val');
    if (metricCounters.length > 0) {
        const initializeCounters = () => {
            metricCounters.forEach(counter => {
                const animateCount = () => {
                    const targetLimit = +counter.getAttribute('data-target');
                    const ongoingCount = +counter.innerText;
                    const iterationPacing = targetLimit / 50; 

                    if (ongoingCount < targetLimit) {
                        counter.innerText = Math.ceil(ongoingCount + iterationPacing);
                        setTimeout(animateCount, 25);
                    } else {
                        counter.innerText = targetLimit.toLocaleString();
                    }
                };
                animateCount();
            });
        };

        // Leverage IntersectionObserver to trigger counter sequences on user viewport entrance points
        const targetViewGrid = document.querySelector('.metrics-strip');
        if (targetViewGrid) {
            const viewportObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        initializeCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            viewportObserver.observe(targetViewGrid);
        }
    }

    // 3. Smooth Visibility Tracking Universal Back to Top Scroll Widget Component Trigger
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) scrollTopBtn.classList.add('active');
            else scrollTopBtn.classList.remove('active');
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});