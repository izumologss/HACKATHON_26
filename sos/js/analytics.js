/**
 * Mission 5 – SOS Rescue Flare
 * Analytics Station Telemetry Core Processor Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Structural Protection Guardrail Verification Check
    const barScaffoldNode = document.querySelector('.mock-chart-bar-scaffold');
    if (!barScaffoldNode) return; 

    let historicalDataCache = [];
    
    // 2. Safely Synchronize System Cache State
    const extractTelemetryVault = () => {
        try {
            const rawCache = localStorage.getItem('camo_sos_vault');
            if (rawCache) {
                historicalDataCache = JSON.parse(rawCache);
            } else {
                // Baseline dynamic fallback seeds if vault initialization vector is missing
                historicalDataCache = [
                    { id: "FLARE-928104", category: "Bribery", location: "Library Commons [Zone Alpha]", time: "11:04:12 UTC", status: "RESOLVED" },
                    { id: "FLARE-301982", category: "Bullying", location: "Playground [Zone Gamma]", time: "10:15:45 UTC", status: "CRITICAL" },
                    { id: "FLARE-554109", category: "Tiffin Theft", location: "Canteen Hub [Zone Delta]", time: "09:44:20 UTC", status: "RESOLVED" }
                ];
            }
        } catch (error) {
            console.error("Failed to map application analytics memory partitions.", error);
        }
    };

    // 3. Process Statistical Performance Matrix Configurations
    const compileThreatMetricsMatrix = () => {
        extractTelemetryVault();

        // Calculate specific incident distribution maps
        const categoriesMap = {
            "Bribery": 0,
            "Tiffin Theft": 0,
            "Bullying": 0,
            "Harassment": 0,
            "Medical Emergency": 0,
            "Other": 0
        };

        historicalDataCache.forEach(incident => {
            if (categoriesMap.hasOwnProperty(incident.category)) {
                categoriesMap[incident.category]++;
            } else {
                categoriesMap["Other"]++;
            }
        });

        // Determine dynamic highest occurrence metrics density bounds
        const absoluteTotalEvents = historicalDataCache.length || 1;
        
        // Re-compile DOM visualization array based on active dynamic cache indices
        barScaffoldNode.innerHTML = "";
        
        Object.keys(categoriesMap).forEach(key => {
            const occurrencesCount = categoriesMap[key];
            const mathematicalPercentage = Math.round((occurrencesCount / absoluteTotalEvents) * 100);
            
            // Allocate color properties depending on the risk tier profile configurations
            let vectorAccentColor = "var(--primary-blue)";
            if (key === "Bullying" || key === "Harassment") vectorAccentColor = "var(--danger-red)";
            if (key === "Bribery" || key === "Tiffin Theft") vectorAccentColor = "var(--warning-orange)";
            if (key === "Medical Emergency") vectorAccentColor = "var(--success-green)";

            const barElementWrapper = document.createElement('div');
            barElementWrapper.className = "chart-bar-element";
            barElementWrapper.innerHTML = `
                <span class="bar-label-tag" style="width: 120px; font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${key}">${key}</span>
                <div class="bar-track-path">
                    <div class="bar-fill-indicator" style="width: 0%; background: ${vectorAccentColor};"></div>
                </div>
                <span class="bar-value-percentage">${mathematicalPercentage}%</span>
            `;

            barScaffoldNode.appendChild(barElementWrapper);

            // Trigger structural rendering animations after injection to trigger CSS keyframe transitions
            setTimeout(() => {
                const filledIndicator = barElementWrapper.querySelector('.bar-fill-indicator');
                if (filledIndicator) filledIndicator.style.width = `${mathematicalPercentage}%`;
            }, 75);
        });
    };

    // Initialize Analytics Execution Chain Sequence
    compileThreatMetricsMatrix();
});