/**
 * Mission 2 – The Anti-Camouflage Seat Planner
 * Core Analytics & Dashboard Hub Logic Matrix Module
 * * Handles dynamic UI calculations, mobile sidebar shell components toggles, 
 * counter initialization sequences, and interactive metric gauge updates.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Responsive Sidebar Shell Navigation Trigger Controls
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarPanel = document.getElementById('sidebarNavPanel');

    if (sidebarToggleBtn && sidebarPanel) {
        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebarPanel.classList.toggle('open');
        });

        // Close sidebar tracking clicks outside the asset bounds when in mobile mode
        document.addEventListener('click', (e) => {
            if (sidebarPanel.classList.contains('open') && !sidebarPanel.contains(e.target) && e.target !== sidebarToggleBtn) {
                sidebarPanel.classList.remove('open');
            }
        });
    }

    // 2. Simulated Dynamic Metric Data Sync
    // This updates dashboard components to represent synchronized states matching planner metrics
    const initializeDashboardMetrics = () => {
        const stats = {
            totalStudents: 32,
            averageHeight: 168.4,
            frontRowDensity: 8,
            visibilityScore: 98.2
        };

        // If data exists in window/local storage from planner.js, it can overwrite baseline maps here
        try {
            const preservedRegistry = localStorage.getItem('camo_students_registry');
            if (preservedRegistry) {
                const parsedData = JSON.parse(preservedRegistry);
                if (parsedData.length > 0) {
                    stats.totalStudents = parsedData.length;
                    
                    const runningSum = parsedData.reduce((acc, curr) => acc + curr.height, 0);
                    stats.averageHeight = parseFloat((runningSum / parsedData.length).toFixed(1));
                    
                    // Filter front-row locked or vision impaired density targets
                    const highPriority = parsedData.filter(s => s.vision || s.reserved).length;
                    stats.frontRowDensity = Math.min(highPriority, 8); 
                }
            }
        } catch (error) {
            console.warn("Analytics sandbox storage mapping unavailable. Using standard runtime mock variables.", error);
        }

        console.log("Core Analytics Hub parameters mapped successfully into terminal.", stats);
    };

    // 3. Radial System Gauge Metric Verification Overlay Animation Sequencer
    const radialProgressGauge = document.querySelector('.gauge-fill-path');
    if (radialProgressGauge) {
        // Trigger soft stroke dash offsets layout transitions on initialization profiles
        radialProgressGauge.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // Simulating progressive dashboard metric tracking calculations ticks
        setTimeout(() => {
            // Target dash offset 45 yields 98.2% visual value alignment parameters 
            radialProgressGauge.style.strokeDashoffset = '45';
        }, 300);
    }

    // Initialize System Dashboard Routines
    initializeDashboardMetrics();
});