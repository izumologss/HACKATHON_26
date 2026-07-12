/**
 * MISSION 6: KUDDUS FACT CHECKER SYSTEM ENGINE - SOURCE CORE
 * Vanilla Pure JavaScript - Structural Context Matching Engine
 */

// ==========================================================================
// PRE-SEEDED SCHOOL RULEBOOK KNOWLEDGE VECTOR DATA GRAPH STRUCTURE
// ==========================================================================
const SchoolRulebookDatabase = [
    {
        id: "RULE-101",
        chapter: "Chapter 1",
        section: "Section A (Attendance)",
        category: "Attendance",
        text: "All students must clear the main entry gate perimeter check-line before the morning registration bell rings precisely at 08:30 AM. Tardy entry triggers automated alert routing to guardians.",
        keywords: ["attendance", "late", "morning", "gate", "bell", "08:30"]
    },
    {
        id: "RULE-204",
        chapter: "Chapter 2",
        section: "Section C (Academic Duties)",
        category: "Homework",
        text: "The appointment rank designation of 1st Captain or Class Prefect does not confer immunity or exemptions regarding standard homework submission schedules. All assignments remain strictly mandatory.",
        keywords: ["homework", "captains", "prefect", "exemptions", "assignments", "mandatory"]
    },
    {
        id: "RULE-309",
        chapter: "Chapter 3",
        section: "Section B (Dress Code Enforcements)",
        category: "Uniform",
        text: "Standard approved black leather low-cut footwear dress options are required uniforms on all typical instruction days. Alternative canvas sports footwear alternatives are restricted entirely to physical training fields.",
        keywords: ["uniform", "shoes", "canvas", "leather", "dress code", "sports"]
    },
    {
        id: "RULE-402",
        chapter: "Chapter 4",
        section: "Section F (Assessment Controls)",
        category: "Exam",
        text: "Possessing electronic personal communication transceivers or unapproved computational smart devices within examination environments results in instantaneous test void classification sequences.",
        keywords: ["exam", "cheating", "phone", "smartwatch", "device", "void"]
    },
    {
        id: "RULE-511",
        chapter: "Chapter 5",
        section: "Section D (Discipline Structures)",
        category: "Discipline",
        text: "Chewing systemic synthetic bubble gum matrix compounds or unauthorized eating during instructional lecture windows is strictly banned across all classrooms. Defiance results in campus cleaning assignments.",
        keywords: ["gum", "eating", "classroom", "discipline", "cleaning", "banned"]
    }
];

// Contextual Synonyms Registry for Local Semantic Weight Calculation Optimization Map
const SemanticSynonymRegistry = {
    "1st captains": ["captains", "prefect", "student leaders"],
    "homework": ["assignments", "tasks", "studies"],
    "late": ["tardy", "delayed", "08:30"],
    "shoes": ["footwear", "canvas", "leather"],
    "phone": ["device", "transceivers", "smartwatch"]
};

// Recommended Query Verification Test Input Configurations Array Strings
const ClaimSampleTestingLibrary = [
    "The Headmaster said 1st Captains don't have homework.",
    "Arriving at the main school gate at 08:35 AM will trigger automated guardian alerts.",
    "Students can wear casual canvas shoes on normal assembly days.",
    "Using your personal smartphone during exam sessions leads to automated score voiding."
];

// ==========================================================================
// STATE MANAGEMENT CONTEXT
// ==========================================================================
let AppSessionTelemetry = {
    totalSearches: 4,
    trueClaims: 2,
    falseClaims: 2,
    historyLog: [
        { time: "14:23", claim: "Kuddus says gate closes at 9 AM", verdict: "FALSE", score: "94%" },
        { time: "13:05", claim: "Captains must do home assignments", verdict: "TRUE", score: "98%" },
        { time: "11:40", claim: "Canvas shoes allowed on sports pitch", verdict: "TRUE", score: "91%" },
        { time: "09:15", claim: "Smartwatches allowed during finals", verdict: "FALSE", score: "96%" }
    ],
    bookmarks: ["RULE-204"]
};

// ==========================================================================
// DOM RENDER AND LAYOUT FRAME ROUTER INITIALIZER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    InitializeAppBackdropParticles();
    SetupViewNavigationListeners();
    RenderSampleTestingChips();
    PopulateRulebookViewerCards();
    RefreshTelemetryDashboardMetrics();
    InjectSimulationAnalyticsCharts();
    RegisterSystemSettingControlSwitches();
    
    // Core Engine Callbacks binding
    document.getElementById("verify-btn").addEventListener("click", ExecuteFactCheckPipeline);
    document.getElementById("clear-btn").addEventListener("click", () => {
        document.getElementById("claim-input").value = "";
        document.getElementById("result-container").classList.add("hidden");
    });
    
    document.getElementById("rulebook-search-input").addEventListener("input", FilterRulebookCardsDisplay);
    document.getElementById("themeToggle").addEventListener("click", ToggleApplicationColorThemeMode);
    
    document.getElementById("voice-mock-btn").addEventListener("click", () => TriggerMockInputEvent("🎙️ [Voice Input Simulated]: 1st Captains can bypass home assignments..."));
    document.getElementById("paste-mock-btn").addEventListener("click", () => TriggerMockInputEvent("Kuddus told us that canvas shoes are completely fine on normal assembly days."));

    TriggerNotificationToast("System Core Initialization Complete", "success");
});

// Particle Generator Engine Mechanics
function InitializeAppBackdropParticles() {
    const container = document.getElementById("particles");
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.width = particle.style.height = `${Math.random() * 250 + 100}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
    }
}

// Single Page View Switching Frame Controller Engine Logic
function SetupViewNavigationListeners() {
    const navItems = document.querySelectorAll(".menu-item, .navigate-btn");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("data-target");
            
            document.querySelectorAll(".view-section").forEach(view => view.classList.remove("active-view"));
            document.querySelectorAll(".menu-item").forEach(menu => menu.classList.remove("active-view"));
            
            const activeSection = document.getElementById(targetId);
            if(activeSection) activeSection.classList.add("active-view");
            
            // Sync active navigation link UI styles highlight
            const linkedMenu = document.querySelector(`.menu-item[data-target="${targetId}"]`);
            if(linkedMenu) linkedMenu.classList.add("active");
            
            // Text node transformation status header update
            const readableTitle = targetId.replace("-view", "").toUpperCase();
            document.getElementById("current-view-title").textContent = `${readableTitle} WORKSPACE`;
        });
    });
}

function TriggerMockInputEvent(textString) {
    document.getElementById("claim-input").value = textString;
    TriggerNotificationToast("Context Injected from Source Buffer", "info");
}

// ==========================================================================
// BUSINESS ALGORITHMIC LOGIC: VECTOR MATCH & HYBRID SEARCH ENGINE SIMULATION
// ==========================================================================
function ExecuteFactCheckPipeline() {
    const inputField = document.getElementById("claim-input");
    const rawClaimText = inputField.value.trim();
    
    if (!rawClaimText) {
        TriggerNotificationToast("Validation Failed: Empty claim strings processing abort.", "error");
        return;
    }

    const loader = document.getElementById("checker-loader");
    const resultBox = document.getElementById("result-container");
    
    resultBox.classList.add("hidden");
    loader.classList.remove("hidden");

    // Artificial pipeline latency processing mock delay profile frame
    setTimeout(() => {
        loader.classList.add("hidden");
        
        const evaluationPayload = ProcessClaimMatchingWeightsLogic(rawClaimText);
        RenderVerificationVerdictCard(evaluationPayload);
        
        // Update Local State metrics mapping profiles
        AppSessionTelemetry.totalSearches++;
        if(evaluationPayload.verdict === "TRUE") AppSessionTelemetry.trueClaims++;
        else AppSessionTelemetry.falseClaims++;
        
        const d = new Date();
        AppSessionTelemetry.historyLog.unshift({
            time: `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`,
            claim: rawClaimText.length > 45 ? rawClaimText.substring(0, 42) + "..." : rawClaimText,
            verdict: evaluationPayload.verdict,
            score: `${Math.round(evaluationPayload.confidence * 100)}%`
        });

        RefreshTelemetryDashboardMetrics();
        InjectSimulationAnalyticsCharts();
        resultBox.classList.remove("hidden");
        
        TriggerNotificationToast(`Cross-Evaluation Concluded: Status ${evaluationPayload.verdict}`, "success");
    }, 900);
}

function ProcessClaimMatchingWeightsLogic(claimText) {
    const sanitizedInput = claimText.toLowerCase();
    let structuralMatchedRule = null;
    let maximumCalculatedWeight = 0.0;
    let matchTypeModel = "None";

    // Loop Phase Rule database evaluations Matrix Proximity Checks
    for (const entry of SchoolRulebookDatabase) {
        let matchingHits = 0;
        let activeTokensCount = entry.keywords.length;

        // Exact Substring Scoring Vector
        if (sanitizedInput.includes(entry.text.toLowerCase()) || entry.text.toLowerCase().includes(sanitizedInput)) {
            maximumCalculatedWeight = 1.0;
            structuralMatchedRule = entry;
            matchTypeModel = "Strict Substring String Match Matrix";
            break;
        }

        // Tokenized Proximity Semantic Weight Matrix Calculation Loop
        entry.keywords.forEach(keyword => {
            if (sanitizedInput.includes(keyword)) {
                matchingHits += 1.0;
            } else {
                // Extended checking arrays maps context synonym match trees
                for (const [keyParent, synArray] of Object.entries(SemanticSynonymRegistry)) {
                    if (entry.keywords.includes(keyParent) && synArray.some(syn => sanitizedInput.includes(syn))) {
                        matchingHits += 0.45; // Fractional score attribution weights distribution proxy
                        break;
                    }
                }
            }
        });

        const computedProximityRatio = matchingHits / activeTokensCount;
        if (computedProximityRatio > maximumCalculatedWeight) {
            maximumCalculatedWeight = computedProximityRatio;
            structuralMatchedRule = entry;
            matchTypeModel = "Hybrid Text Semantic Array Match Engine";
        }
    }

    // Default Fallback Configurations if calculation results pass sub-optimal margins
    if (maximumCalculatedWeight < 0.20 || !structuralMatchedRule) {
        return {
            verdict: "FALSE",
            confidence: 0.88,
            rule: SchoolRulebookDatabase[0], 
            reasoning: "The assertion deviates completely from registered operational school rule criteria structures. No logical compliance references discovered across index definitions.",
            matchType: "Null Proximity Vector Matrix Reject"
        };
    }

    // Secondary Logic Layer Phase: Map Context Logic to determine Verdict Validity State
    let claimTruthVerdict = "TRUE";
    
    // Custom specific negation logic validations
    const structuralNegationPhrases = ["don't", "no", "never", "exempt", "bypass", "restricted", "not required", "fine"];
    const includesNegationIndicator = structuralNegationPhrases.some(phrase => sanitizedInput.includes(phrase));
    
    if (structuralMatchedRule.id === "RULE-204" && includesNegationIndicator && (sanitizedInput.includes("don't") || sanitizedInput.includes("exempt"))) {
        claimTruthVerdict = "FALSE"; // Rule states homework is strictly mandatory for all captains
    } else if (structuralMatchedRule.id === "RULE-309" && sanitizedInput.includes("canvas") && (sanitizedInput.includes("fine") || sanitizedInput.includes("normal"))) {
        claimTruthVerdict = "FALSE"; // Canvas shoes are restricted to sports fields only
    } else if (maximumCalculatedWeight < 0.55) {
        claimTruthVerdict = "FALSE"; // Low weight density typically flags dynamic deviations
    }

    // Map finalized operational validation container payload models
    return {
        verdict: claimTruthVerdict,
        confidence: Math.min(0.55 + (maximumCalculatedWeight * 0.45), 0.99), // Normalize bounds parameters
        rule: structuralMatchedRule,
        reasoning: `Matched via ${matchTypeModel}. System linked input text arrays to standard base indices tracking operational rule parameters inside ${structuralMatchedRule.id}.`,
        matchType: matchTypeModel
    };
}

// ==========================================================================
// RENDER ENGINE LAYOUT UI COMPONENTS INJECTION DEPLOYMENT
// ==========================================================================
function RenderVerificationVerdictCard(data) {
    const outputTarget = document.getElementById("result-container");
    const highlightWords = data.rule.keywords;
    
    // Highlight Text Generator Simulation
    let formattedRuleText = data.rule.text;
    highlightWords.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        formattedRuleText = formattedRuleText.replace(regex, `<mark class="match-highlight">$1</mark>`);
    });

    outputTarget.innerHTML = `
        <div class="glass-card result-card ${data.verdict === 'TRUE' ? 'verdict-true' : 'verdict-false'}">
            <div class="result-header-block">
                <div class="verdict-badge-wrapper">
                    <div class="verdict-badge">${data.verdict}</div>
                    <div>
                        <h4 style="margin:0; font-size:1.1rem;">Verification Complete</h4>
                        <span style="font-size:0.75rem; color:var(--color-text-muted)">Engine Pipeline: ${data.matchType}</span>
                    </div>
                </div>
                <div class="confidence-score-block">
                    <span class="confidence-label">Confidence Index Matrix</span>
                    <span class="confidence-value">${Math.round(data.confidence * 100)}%</span>
                </div>
            </div>

            <div class="evidence-box">
                <div class="evidence-meta">
                    <span class="meta-tag"><i class="fas fa-fingerprint"></i> ${data.rule.id}</span>
                    <span class="meta-tag">${data.rule.chapter}</span>
                    <span class="meta-tag">${data.rule.section}</span>
                </div>
                <p class="evidence-text"><strong>Official Rule Context Reference:</strong> <br> ${formattedRuleText}</p>
            </div>

            <div class="reasoning-box">
                <h5><i class="fas fa-brain"></i> Contextual Reasoning Breakdown</h5>
                <p>${data.reasoning}</p>
            </div>

            <div class="result-footer-actions">
                <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.innerText); alert('System Analytics Text Copied to Clipboard Array Storage Engine.');"><i class="fas fa-copy"></i> Copy Output Logs</button>
                <button class="btn btn-secondary" onclick="window.print();"><i class="fas fa-download"></i> Export Document Frame</button>
            </div>
        </div>
    `;
}

function RenderSampleTestingChips() {
    const target = document.getElementById("sample-chips");
    if(!target) return;
    target.innerHTML = "";
    ClaimSampleTestingLibrary.forEach(str => {
        const chip = document.createElement("div");
        chip.className = "chip";
        chip.textContent = str;
        chip.title = str;
        chip.addEventListener("click", () => {
            document.getElementById("claim-input").value = str;
            TriggerNotificationToast("Loaded Preset Matrix Scenario Parameters", "info");
        });
        target.appendChild(chip);
    });
}

function PopulateRulebookViewerCards() {
    const targetGrid = document.getElementById("rulebook-cards-grid");
    const filterContainer = document.getElementById("category-filters-container");
    if (!targetGrid) return;

    targetGrid.innerHTML = "";
    
    // Unique categories filtering generation
    const distinctCategories = ["ALL", ...new Set(SchoolRulebookDatabase.map(r => r.category))];
    if(filterContainer && filterContainer.children.length === 0) {
        distinctCategories.forEach((cat, index) => {
            const chip = document.createElement("div");
            chip.className = `filter-chip ${index === 0 ? 'active' : ''}`;
            chip.textContent = cat;
            chip.setAttribute("data-category", cat);
            chip.addEventListener("click", () => {
                document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                FilterRulebookCardsDisplay();
            });
            filterContainer.appendChild(chip);
        });
    }

    SchoolRulebookDatabase.forEach(rule => {
        const isSaved = AppSessionTelemetry.bookmarks.includes(rule.id);
        const card = document.createElement("div");
        card.className = "glass-card rule-item-card";
        card.setAttribute("data-id", rule.id);
        card.setAttribute("data-category", rule.category);
        
        card.innerHTML = `
            <div class="rule-card-header">
                <div class="rule-card-id-block">
                    <span class="rule-id-badge">${rule.id}</span>
                    <span class="rule-category-tag">${rule.category}</span>
                </div>
                <button class="bookmark-action-btn ${isSaved ? 'bookmarked' : ''}" onclick="ToggleBookmarkStateRecord('${rule.id}')">
                    <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>
                </button>
            </div>
            <div class="rule-card-body">
                <p style="color:var(--color-text-muted); font-size:0.75rem; margin-bottom:0.25rem;">${rule.chapter} • ${rule.section}</p>
                <p class="rule-text-content">${rule.text}</p>
            </div>
        `;
        targetGrid.appendChild(card);
    });
    
    UpdateRulebookMetadataCounters();
}

function FilterRulebookCardsDisplay() {
    const activeFilterChip = document.querySelector(".filter-chip.active");
    const targetCategory = activeFilterChip ? activeFilterChip.getAttribute("data-category") : "ALL";
    const searchString = document.getElementById("rulebook-search-input").value.toLowerCase();
    
    const ruleCards = document.querySelectorAll(".rule-item-card");
    let calculatedVisibles = 0;

    ruleCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const cardText = card.querySelector(".rule-text-content").textContent.toLowerCase();
        const cardId = card.getAttribute("data-id").toLowerCase();
        
        const complianceCategory = (targetCategory === "ALL" || cardCategory === targetCategory);
        const complianceSearch = (cardText.includes(searchString) || cardId.includes(searchString));
        
        if (complianceCategory && complianceSearch) {
            card.classList.remove("hidden");
            calculatedVisibles++;
        } else {
            card.classList.add("hidden");
        }
    });

    document.getElementById("displayed-rules-count").textContent = calculatedVisibles;
}

function UpdateRulebookMetadataCounters() {
    document.getElementById("total-rules-count").textContent = SchoolRulebookDatabase.length;
    document.getElementById("displayed-rules-count").textContent = SchoolRulebookDatabase.length;
}

function ToggleBookmarkStateRecord(id) {
    const index = AppSessionTelemetry.bookmarks.indexOf(id);
    if(index > -1) {
        AppSessionTelemetry.bookmarks.splice(index, 1);
        TriggerNotificationToast("Bookmark Record Removed", "info");
    } else {
        AppSessionTelemetry.bookmarks.push(id);
        TriggerNotificationToast("Reference Saved to Profile Memory", "success");
    }
    PopulateRulebookViewerCards();
    RefreshTelemetryDashboardMetrics();
}

// ==========================================================================
// SYSTEM TELEMETRY DATA DASHBOARD PIPELINES
// ==========================================================================
function RefreshTelemetryDashboardMetrics() {
    // Dynamic View Element Synchronicities
    document.getElementById("home-total-claims").textContent = (1420 + AppSessionTelemetry.totalSearches).toLocaleString();
    
    document.getElementById("dash-total-searches").textContent = AppSessionTelemetry.totalSearches;
    document.getElementById("dash-true-claims").textContent = AppSessionTelemetry.trueClaims;
    document.getElementById("dash-false-claims").textContent = AppSessionTelemetry.falseClaims;
    
    const netAccuracyRatio = Math.round((AppSessionTelemetry.trueClaims / AppSessionTelemetry.totalSearches) * 100) || 0;
    document.getElementById("dash-accuracy-rate").textContent = `${netAccuracyRatio}%`;

    // History Log Generation Layout Subsystems
    const historyTable = document.getElementById("history-table-body");
    if(historyTable) {
        historyTable.innerHTML = "";
        AppSessionTelemetry.historyLog.forEach(row => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td><span style="color:var(--color-text-muted); font-family:monospace;">${row.time}</span></td>
                <td style="max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${row.claim}">${row.claim}</td>
                <td><span class="badge-small ${row.verdict === 'TRUE' ? 'bg-success' : 'bg-danger'}">${row.verdict}</span></td>
                <td><span style="font-weight:600; color:var(--accent-cyan);">${row.score}</span></td>
            `;
            historyTable.appendChild(tableRow);
        });
    }

    // Sync Dashboard Bookmarks Column Module list
    const bookmarkPanel = document.getElementById("dashboard-bookmarks-list");
    if(bookmarkPanel) {
        bookmarkPanel.innerHTML = "";
        if(AppSessionTelemetry.bookmarks.length === 0) {
            bookmarkPanel.innerHTML = `<p style="font-size:0.85rem; color:var(--color-text-muted); text-align:center; padding:1rem;">No saved reference entries cataloged.</p>`;
        } else {
            AppSessionTelemetry.bookmarks.forEach(id => {
                const referenceRule = SchoolRulebookDatabase.find(r => r.id === id);
                if(referenceRule) {
                    const row = document.createElement("div");
                    row.className = "bookmark-item-row";
                    row.innerHTML = `
                        <span><strong>${referenceRule.id}</strong>: ${referenceRule.text}</span>
                        <button class="bookmark-action-btn bookmarked" onclick="ToggleBookmarkStateRecord('${referenceRule.id}')"><i class="fas fa-trash-can"></i></button>
                    `;
                    bookmarkPanel.appendChild(row);
                }
            });
        }
    }
}

// ==========================================================================
// INFRASTRUCTURE SIMULATION DATA VISUALIZATIONS GENERATOR (NO FRAMEWORK)
// ==========================================================================
function InjectSimulationAnalyticsCharts() {
    // 1. Dynamic Mock Bar Chart Rendering Engine
    const barTarget = document.getElementById("analytics-bar-chart");
    if(barTarget) {
        const categoricalDistributionMetrics = { "Attendance": 4, "Homework": 12, "Uniform": 7, "Exam": 15, "Discipline": 9 };
        barTarget.innerHTML = "";
        
        Object.entries(categoricalDistributionMetrics).forEach(([category, dataWeightValue]) => {
            const columnHeightRatio = (dataWeightValue / 15) * 100;
            const elementColumnNode = document.createElement("div");
            elementColumnNode.className = "chart-bar-column";
            elementColumnNode.innerHTML = `
                <div class="bar-fill-track">
                    <div class="bar-fill-data" style="height:${columnHeightRatio}%;" data-tooltip="Hits: ${dataWeightValue}"></div>
                </div>
                <span class="bar-label-text">${category}</span>
            `;
            barTarget.appendChild(elementColumnNode);
        });
    }

    // 2. Scatter Node Grid Density Map Vector Plots Rendering 
    const scatterTarget = document.getElementById("analytics-scatter-plot");
    if(scatterTarget) {
        scatterTarget.innerHTML = "";
        const systemNodesCoordinates = [
            { x: 20, y: 30, color: "var(--status-success)" }, { x: 45, y: 75, color: "var(--status-danger)" },
            { x: 70, y: 45, color: "var(--status-success)" }, { x: 85, y: 90, color: "var(--accent-cyan)" },
            { x: 15, y: 80, color: "var(--status-danger)" }, { x: 60, y: 20, color: "var(--status-success)" }
        ];
        systemNodesCoordinates.forEach(point => {
            const bubbleNode = document.createElement("div");
            bubbleNode.className = "scatter-node";
            bubbleNode.style.left = `${point.x}%`;
            bubbleNode.style.bottom = `${point.y}%`;
            bubbleNode.style.backgroundColor = point.color;
            bubbleNode.style.boxShadow = `0 0 8px ${point.color}`;
            scatterTarget.appendChild(bubbleNode);
        });
    }

    // 3. Keyword Semantic Density Word Cloud Array Generator
    const cloudTarget = document.getElementById("analytics-keyword-cloud");
    if(cloudTarget) {
        cloudTarget.innerHTML = "";
        const globalKeywordsTokenSet = ["Attendance", "Homework Exception", "Canvas Uniform", "Prefect Rule", "Device Exam Void", "Banned Classroom Matrix", "Tardy Automation Gate", "08:30 Bell"];
        globalKeywordsTokenSet.forEach((token, index) => {
            const textNodeSpan = document.createElement("span");
            textNodeSpan.className = "cloud-word";
            textNodeSpan.textContent = token;
            textNodeSpan.style.fontSize = `${0.75 + ((index % 3) * 0.15)}rem`;
            cloudTarget.appendChild(textNodeSpan);
        });
    }
}

// ==========================================================================
// SYSTEM LIGHT/DARK INTERFACE THEME CONFIGURATION AND PREFERENCES
// ==========================================================================
function ToggleApplicationColorThemeMode() {
    const activeTheme = document.body.getAttribute("data-theme");
    const themeButtonIcon = document.getElementById("themeToggle").querySelector("i");
    
    if (activeTheme === "light") {
        document.body.removeAttribute("data-theme");
        themeButtonIcon.className = "fas fa-moon";
        TriggerNotificationToast("Dark Cyber-Matrix Mode Activated", "info");
    } else {
        document.body.setAttribute("data-theme", "light");
        themeButtonIcon.className = "fas fa-sun";
        TriggerNotificationToast("Light High-Contrast Mode Activated", "info");
    }
}

function RegisterSystemSettingControlSwitches() {
    document.getElementById("btn-reset-metrics").addEventListener("click", () => {
        AppSessionTelemetry.totalSearches = 0;
        AppSessionTelemetry.trueClaims = 0;
        AppSessionTelemetry.falseClaims = 0;
        AppSessionTelemetry.historyLog = [];
        AppSessionTelemetry.bookmarks = [];
        RefreshTelemetryDashboardMetrics();
        PopulateRulebookViewerCards();
        TriggerNotificationToast("Local Application Cache Cleared Successfully", "warning");
    });

    document.getElementById("btn-trigger-toast-demo").addEventListener("click", () => {
        TriggerNotificationToast("Diagnostic Check: Processing Thread 006 Stable", "info");
    });
}

// Standard Dynamic System Toast System Factory Core
function TriggerNotificationToast(textMessage, natureClass = "info") {
    const targetContainer = document.getElementById("toast-container");
    if(!targetContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast-message notification-${natureClass}`;
    
    let stateIcon = '<i class="fas fa-circle-info" style="color:var(--accent-cyan)"></i>';
    if(natureClass === "success") stateIcon = '<i class="fas fa-circle-check" style="color:var(--status-success)"></i>';
    if(natureClass === "error") stateIcon = '<i class="fas fa-triangle-exclamation" style="color:var(--status-danger)"></i>';
    if(natureClass === "warning") stateIcon = '<i class="fas fa-radiation" style="color:var(--status-warning)"></i>';

    toast.innerHTML = `${stateIcon} <span>${textMessage}</span>`;
    targetContainer.appendChild(toast);

    // Fade and Destroy node parameters tracking frame metrics
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}