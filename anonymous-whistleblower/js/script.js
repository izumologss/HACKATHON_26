document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Custom Interactive Floating Cursor Engine Layout Tracking
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Add Hover tracking classes for premium interactive responsive feedback
        const interactables = document.querySelectorAll('a, button, .btn, .glass-card, input, select, textarea');
        interactables.forEach(item => {
            item.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            item.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }

    // 2. Linear / Stripe Grade Live Dynamic Digital Stats Incremental Counters
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const runCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const speed = target / 60; // Smooth normalization pacing frame steps

                    if (count < target) {
                        counter.innerText = Math.ceil(count + speed);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Standardized IntersectionObserver execution framework base trigger
        const observerOptions = { threshold: 0.5 };
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const targetSection = document.querySelector('.stats-grid');
        if (targetSection) counterObserver.observe(targetSection);
    }

    // 3. Smooth Visibility Tracking Back to Top Universal Scroll Component Trigger
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Mobile Layout Navigation Menu Toggle Matrix Configuration Parameters
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(10, 15, 29, 0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        });
    }
});