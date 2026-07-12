/**
 * Mission 3 – The Syllabus Negotiator Architecture Layer
 * Core Application Script Matrix - Includes Dynamic View Routing,
 * Particle Engine Systems, RAG Logic emulation, and Dashboard Data Sync.
 */

// Global Shared Reactive Application State Matrix
const AppState = {
    settings: {
        theme: 'dark',
        lang: 'en',
        aiTemperature: 0.4
    },
    examTargetDate: localStorage.getItem('m3_exam_date') || '2026-08-15',
    totalAnalysesCount: parseInt(localStorage.getItem('m3_analyses_count')) || 3,
    uploadedRagFiles: [],
    lastAnalysisResult: null,
    pomodoroTimerId: null,
    pomoSecondsLeft: 1500,
    isPomoRunning: false
};

// High Fidelity Mock Structural Blueprint Corpus for Demo Mode Parsing Execution
const DataCorpusDemo = {
    syllabus: `COURSE NUMBER: CS-4020 ADVANCED ARTIFICIAL INTELLIGENCE MATRIX
REGULATION OBJECTIVE STRUCTURE & ASSIGNMENT BLOCKS:
Module 1: Deep Sequence Modeling and Transformers. 40% grade allocation weight. Must master self-attention equations, tokenization encodings, multi-head projection layers, and scaling laws. Midterm evaluation schedules map directly here.
Module 2: Advanced Retrieval-Augmented Generation (RAG). 35% grade allocation weight. Vector database indexes, chunking strategies, document cross-encoders, rewrite embeddings loops, and precision recall boundaries.
Module 3: Non-examined administrative logistics, facility room booking indices, library book renewal processes, and standard historical generic context overviews. 25% reading load.
CRITICAL EXAM DATE WARNING: Comprehensive analytical finals will challenge system architectures directly.`,
    rag: `OFFICIAL COMPLIANCE CRRICULUM AUDIT 2026:
Verify that all active CS-4020 configurations strictly cover Attention mechanisms and Embedding models. Disregard secondary institutional operational guidelines or facility indices during formal credit parsing sequences.`
};

document.addEventListener('DOMContentLoaded', () => {
    initParticleBackground();
    initViewRouter();
    initCursorGlow();
    initSharedUXElements();
    initLocalStateSync();
    runMetricCounterAnimation();
});

/* ==========================================================================
   VIEW CONTROLLER LAYER (ROUTING INTERACTION)
   ========================================================================== */
function initViewRouter() {
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetViewId = item.getAttribute('data-target');
            
            // Sync active sidebar indicators
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            switchView(targetViewId);
        });
    });

    // Handle deep page fragment links on load
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const routeMapping = {
            'home': 'home-view', 'dashboard': 'dashboard-view',
            'analyzer': 'analyzer-view', 'planner': 'planner-view',
            'countdown': 'countdown-view', 'settings': 'settings-view'
        };
        if (routeMapping[hash]) switchView(routeMapping[hash]);
    }
}

function switchView(viewId) {
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.remove('active-view');
    });
    const selectedView = document.getElementById(viewId);
    if (selectedView) {
        selectedView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Context Trigger Sub-initialization sequences based on active view panels
        if (viewId === 'dashboard-view') renderDashboardCharts();
        if (viewId === 'countdown-view') startCountdownClockEngine();
        if (viewId === 'planner-view') renderScheduleTimelineBlocks();
    }
}

/* ==========================================================================
   HIGH PERFORMANCE CANVAS BG PARTICLE SYSTEM
   ========================================================================== */
function initParticleBackground() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const maxParticles = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, 0.15)' : 'rgba(155, 81, 224, 0.15)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   INTERACTIVE USER CONTROLS, ACCESSIBILITY, AND DYNAMIC UI INTERACTION
   ========================================================================== */
function initCursorGlow() {
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
}

function initSharedUXElements() {
    // Scroll To Top dynamic visual tracking
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) scrollBtn.classList.add('visible');
        else scrollBtn.classList.remove('visible');
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Button Click Material Ripple Element Factory
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.ripple');
        if (button) {
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            
            const rect = button.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple-effect');
            
            const existingRipple = button.querySelector('.ripple-effect');
            if (existingRipple) existingRipple.remove();
            
            button.appendChild(circle);
        }
    });

    // Live Word Counting Telemetry System
    const textInput = document.getElementById('syllabusInput');
    if (textInput) {
        textInput.addEventListener('input', () => {
            const tokens = textInput.value.trim().split(/\s+/).filter(Boolean).length;
            document.getElementById('wordCounter').innerText = `${tokens} Words`;
        });
    }

    // Load Demo Data Interface Connector
    const demoBtn = document.getElementById('loadDemoBtn');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            const txtArea = document.getElementById('syllabusInput');
            if (txtArea) {
                txtArea.value = DataCorpusDemo.syllabus;
                txtArea.dispatchEvent(new Event('input'));
                switchView('analyzer-view');
                showToast('Demo syllabus payload injected successfully.', 'success');
            }
        });
    }
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info'}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 4000);
}

function runMetricCounterAnimation() {
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / target), 15);
        let current = 0;
        
        const timer = setInterval(() => {
            current += Math.ceil(target / 40);
            if (current >= target) {
                counter.innerText = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.innerText = current.toLocaleString();
            }
        }, stepTime);
    });
}

/* ==========================================================================
   AI CORE PROCESSING MATRIX & RAG LOGIC ENGINE
   ========================================================================== */
const analyzeBtn = document.getElementById('btnExecuteAnalysis');
if (analyzeBtn) {
    analyzeBtn.addEventListener('click', () => {
        const inputRaw = document.getElementById('syllabusInput').value.trim();
        if (!inputRaw) {
            showToast('Please insert a valid raw syllabus input matrix.', 'error');
            return;
        }

        const loader = document.getElementById('analyzerLoader');
        const statusTxt = document.getElementById('loaderStatusText');
        const fill = document.getElementById('loaderProgressBar');
        
        loader.classList.remove('hidden');
        document.getElementById('outputPlaceholderCard').classList.add('hidden');
        
        // AI processing stage execution pipeline simulations
        const operationalStages = [
            { text: 'Parsing metadata structural sequence fields...', pct: 25 },
            { text: 'Running Retrieval-Augmented Grounding matching algorithms...', pct: 55 },
            { text: 'Purging administrative document noise patterns...', pct: 85 },
            { text: 'Constructing dynamic schedule layout matrices...', pct: 100 }
        ];

        operationalStages.forEach((stage, idx) => {
            setTimeout(() => {
                statusTxt.innerText = stage.text;
                fill.style.width = `${stage.pct}%`;
                
                if (idx === operationalStages.length - 1) {
                    setTimeout(() => {
                        loader.classList.add('hidden');
                        executeSyllabusCalculatedOutputCompilation(inputRaw);
                    }, 600);
                }
            }, (idx + 1) * 800);
        });
    });
}

function executeSyllabusCalculatedOutputCompilation(input) {
    AppState.totalAnalysesCount++;
    localStorage.setItem('m3_analyses_count', AppState.totalAnalysesCount);
    
    // Check if RAG context matching layers are currently uploaded
    const isRagActive = AppState.uploadedRagFiles.length > 0 || input.includes('CS-4020');
    
    // Parse structural nodes out of text arrays deterministic evaluation
    AppState.lastAnalysisResult = {
        difficulty: input.length > 300 ? 'Elevated' : 'Standard Balanced',
        hours: Math.min(60, Math.max(15, Math.floor(input.length / 12))),
        noiseReduced: isRagActive ? '42%' : '28%',
        summary: 'The contextual framework maps a high-density target course load prioritizing systemic theoretical models alongside technical laboratory execution. Irrelevant contextual filler blocks were structurally dropped to optimize focus metrics.',
        coreTopics: [
            'Deep Sequence Architecture Foundations',
            'Vector Database Structuring & Embedding Indices',
            'Cross-Encoder Rerank Optimization Algorithms',
            'Context Window Management Frameworks'
        ],
        ignoredTopics: [
            'Administrative facility facility scheduling codes',
            'General library orientation reading list parameters',
            'Historical introductory pre-requisite boilerplate text'
        ],
        recommendations: 'Focus critical energy allocations on Transformer mathematical formulations. Spend 45% of available preparation windows on code integration prototypes.'
    };

    // Render operational result components directly to view layout
    document.getElementById('resDifficulty').innerText = AppState.lastAnalysisResult.difficulty;
    document.getElementById('resHours').innerText = `${AppState.lastAnalysisResult.hours} Hours`;
    document.getElementById('resNoise').innerText = AppState.lastAnalysisResult.noiseReduced;
    document.getElementById('resSummaryText').innerText = AppState.lastAnalysisResult.summary;
    document.getElementById('resRecommendations').innerText = AppState.lastAnalysisResult.recommendations;

    // Build functional lists arrays
    const containerCore = document.getElementById('resCoreTopics');
    containerCore.innerHTML = AppState.lastAnalysisResult.coreTopics.map(t => `<li><i class="fa-solid fa-check-circle"></i> ${t}</li>`).join('');
    
    const containerIgnored = document.getElementById('resIgnoredTopics');
    containerIgnored.innerHTML = AppState.lastAnalysisResult.ignoredTopics.map(t => `<li><i class="fa-solid fa-times-circle"></i> ${t}</li>`).join('');

    // Handle interactive visually separated RAG differential nodes
    const diffContainer = document.getElementById('ragDiffContainer');
    if (isRagActive) {
        diffContainer.innerHTML = `
            <p><span class="diff-tag inserted">MATCHED CORE</span> Model Architecture Parameters aligned with Primary Board Directives.</p>
            <p style="margin-top:0.5rem"><span class="diff-tag omitted">DROPPED NOISE</span> Section 4.2 Facility Allocation Maps stripped automatically from active study schedule criteria.</p>
        `;
    } else {
        diffContainer.innerHTML = `<p class="subtitle-text">No comparative grounding files uploaded. Running raw text inference tracking logic matrices instead.</p>`;
    }

    document.getElementById('analysisResultsWrapper').classList.remove('hidden');
    showToast('AI Syllabus Analysis sequence verified and executed.', 'success');
}

/* ==========================================================================
   SMART STUDY PLANNER & TIMELINE SCHEDULING SYSTEM
   ========================================================================== */
function renderScheduleTimelineBlocks() {
    const container = document.getElementById('scheduleTimelineContainer');
    if (!container) return;

    if (!AppState.lastAnalysisResult) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-xmark"></i>
                <h3>No Target Blueprint Compiled</h3>
                <p>Execute the AI Syllabus Analysis sequence to construct structural operational data tables.</p>
            </div>`;
        return;
    }

    const structureBlocks = [
        { time: '08:30 AM', priority: 'high', accent: 'var(--neon-cyan)', title: 'Transformer Equations & Matrix Layer Optimization', desc: 'Focus pure attention metrics on loss calculations.' },
        { time: '11:00 AM', priority: 'medium', accent: 'var(--neon-purple)', title: 'Vector Datastores & RAG Index Compilation', desc: 'Review chunk optimization logic routines.' },
        { time: '03:30 PM', priority: 'low', accent: 'var(--neon-blue)', title: 'Administrative Context Abstract Check', desc: 'Fast processing review of structural guidelines.' }
    ];

    container.innerHTML = structureBlocks.map(block => `
        <div class="time-block-node" style="--accent-priority: ${block.accent}">
            <div class="node-timestamp">${block.time}</div>
            <div class="node-axis-line"></div>
            <div class="node-content-card">
                <div class="node-core-text">
                    <h5>${block.title}</h5>
                    <p>${block.desc}</p>
                </div>
                <span class="tag-priority ${block.priority}">${block.priority}</span>
            </div>
        </div>
    `).join('');

    // Dynamically adjust operational radial metrics UI values
    document.getElementById('txtRadialPercent').innerText = '65%';
    const progressCircle = document.querySelector('.radial-progress-bar');
    if (progressCircle) progressCircle.style.background = `conic-gradient(var(--neon-cyan) 65%, rgba(255,255,255,0.05) 0%)`;
}

// Pomodoro Implementation Engine Functionality Matrix
const btnStartPomo = document.getElementById('btnStartPomo');
if (btnStartPomo) {
    btnStartPomo.addEventListener('click', () => {
        if (AppState.isPomoRunning) {
            clearInterval(AppState.pomodoroTimerId);
            btnStartPomo.innerHTML = '<i class="fa-solid fa-play"></i> Start';
            AppState.isPomoRunning = false;
        } else {
            AppState.isPomoRunning = true;
            btnStartPomo.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
            AppState.pomodoroTimerId = setInterval(() => {
                AppState.pomoSecondsLeft--;
                updatePomodoroDisplay();
                if (AppState.pomoSecondsLeft <= 0) {
                    clearInterval(AppState.pomodoroTimerId);
                    showToast('Focus session complete. Rest window active.', 'success');
                    AppState.pomoSecondsLeft = 1500;
                    AppState.isPomoRunning = false;
                    btnStartPomo.innerHTML = '<i class="fa-solid fa-play"></i> Start';
                    updatePomodoroDisplay();
                }
            }, 1000);
        }
    });
}

document.getElementById('btnResetPomo')?.addEventListener('click', () => {
    clearInterval(AppState.pomodoroTimerId);
    AppState.pomoSecondsLeft = 1500;
    AppState.isPomoRunning = false;
    if(btnStartPomo) btnStartPomo.innerHTML = '<i class="fa-solid fa-play"></i> Start';
    updatePomodoroDisplay();
});

function updatePomodoroDisplay() {
    const mins = Math.floor(AppState.pomoSecondsLeft / 60).toString().padStart(2, '0');
    const secs = (AppState.pomoSecondsLeft % 60).toString().padStart(2, '0');
    const display = document.getElementById('pomoDisplay');
    if (display) display.innerText = `${mins}:${secs}`;
}

/* ==========================================================================
   DYNAMIC TELEMETRY BAR CHART COMPILATION LAYOUT
   ========================================================================== */
function renderDashboardCharts() {
    document.getElementById('dashTotalAnalyses').innerText = AppState.totalAnalysesCount;
    document.getElementById('dashTargetDate').innerText = AppState.examTargetDate;

    const chart = document.getElementById('topicWeightChart');
    if (!chart) return;

    if (!AppState.lastAnalysisResult) {
        chart.innerHTML = `<div class="chart-placeholder">Run an analysis sequence to display metrics.</div>`;
        return;
    }

    const chartWeightData = [
        { label: 'Seq Modeling', val: 85 },
        { label: 'RAG Systems', val: 70 },
        { label: 'Calculated Risk', val: 40 },
        { label: 'Noise Filter', val: 20 }
    ];

    chart.innerHTML = chartWeightData.map(node => `
        <div class="bar-wrapper">
            <div class="bar-pillar" data-val="${node.val}" style="height: ${node.val}%"></div>
            <div class="bar-label">${node.label}</div>
        </div>
    `).join('');

    // Sync values right inside the total hours donut components
    document.getElementById('donutTotalHours').innerText = `${AppState.lastAnalysisResult.hours} Hrs`;
}

/* ==========================================================================
   COUNTDOWN TIMER CLOCK ENGINE
   ========================================================================== */
let countdownIntervalId = null;

function startCountdownClockEngine() {
    const dateInput = document.getElementById('examDatePicker');
    if (dateInput && !dateInput.value) dateInput.value = AppState.examTargetDate;

    if (countdownIntervalId) clearInterval(countdownIntervalId);

    function updateClock() {
        const target = new Date(`${AppState.examTargetDate}T00:00:00`).getTime();
        const now = new Date().getTime();
        const difference = target - now;

        if (difference <= 0) {
            clearInterval(countdownIntervalId);
            document.querySelectorAll('.countdown-clock-grid .digits').forEach(d => d.innerText = '00');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('cntDays').innerText = days.toString().padStart(2, '0');
        document.getElementById('cntHours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('cntMinutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('cntSeconds').innerText = seconds.toString().padStart(2, '0');
    }

    updateClock();
    countdownIntervalId = setInterval(updateClock, 1000);
}

document.getElementById('btnSaveExamDate')?.addEventListener('click', () => {
    const val = document.getElementById('examDatePicker').value;
    if (val) {
        AppState.examTargetDate = val;
        localStorage.setItem('m3_exam_date', val);
        startCountdownClockEngine();
        showToast('Exam schedule anchor locked down.', 'success');
    }
});

/* ==========================================================================
   RAG FILES MOCK UPLOAD INTERACTION IMPLEMENTATION
   ========================================================================== */
const zone = document.getElementById('ragDropzone');
const fileIn = document.getElementById('ragFileInput');

if (zone && fileIn) {
    zone.addEventListener('click', () => fileIn.click());
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
        handleUploadedFilesList(e.dataTransfer.files);
    });
    fileIn.addEventListener('change', () => handleUploadedFilesList(fileIn.files));
}

function handleUploadedFilesList(files) {
    const container = document.getElementById('uploadedFilesContainer');
    for (let i = 0; i < files.length; i++) {
        const fileId = Date.now() + Math.random();
        AppState.uploadedRagFiles.push({ id: fileId, name: files[i].name });
        
        const node = document.createElement('div');
        node.className = 'file-item';
        node.id = `file-${fileId}`;
        node.innerHTML = `<span><i class="fa-solid fa-file-invoice"></i> ${files[i].name}</span>
                          <button onclick="removeUploadedRagFileItem(${fileId})"><i class="fa-solid fa-trash-can"></i></button>`;
        container.appendChild(node);
    }
    showToast(`${files.length} document vector arrays bound to RAG pipeline context.`, 'success');
}

function removeUploadedRagFileItem(id) {
    AppState.uploadedRagFiles = AppState.uploadedRagFiles.filter(f => f.id !== id);
    document.getElementById(`file-${id}`)?.remove();
    showToast('Document vector removed from current runtime context.', 'info');
}

/* ==========================================================================
   SYSTEM MANAGEMENT CONTROLS & CACHE EXTRACTORS
   ========================================================================== */
function initLocalStateSync() {
    // Theme Selector Integration Logic Setup
    document.querySelectorAll('#themeSelector .seg-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#themeSelector .seg-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetTheme = btn.getAttribute('data-theme');
            
            if (targetTheme === 'light') {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
            }
            showToast(`Visual schema modified to: ${targetTheme} mode.`, 'info');
        });
    });

    // Hyperparameter Slider Tracker Listener
    const slider = document.getElementById('sliderTemperature');
    if (slider) {
        slider.addEventListener('input', (e) => {
            document.getElementById('lblTemp').innerText = e.target.value;
            AppState.settings.aiTemperature = parseFloat(e.target.value);
        });
    }

    // Wipe Cache Action Hook Matrix
    document.getElementById('btnWipeCache')?.addEventListener('click', () => {
        localStorage.clear();
        showToast('Local application persistence storage records cleanly expunged.', 'error');
        setTimeout(() => window.location.reload(), 1000);
    });
}

// Global Clean Scope Cleanups
document.getElementById('btnClearInput')?.addEventListener('click', () => {
    const txt = document.getElementById('syllabusInput');
    if (txt) {
        txt.value = '';
        document.getElementById('wordCounter').innerText = '0 Words';
        showToast('Input vector data arrays cleared.', 'info');
    }
});

document.getElementById('btnSampleInput')?.addEventListener('click', () => {
    const txt = document.getElementById('syllabusInput');
    if (txt) {
        txt.value = DataCorpusDemo.syllabus;
        txt.dispatchEvent(new Event('input'));
        showToast('Sample analysis payload populated.', 'success');
    }
});