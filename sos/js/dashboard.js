/**
 * Mission 5 – SOS Rescue Flare
 * Command Center Live Terminal Dashboard Interface Core Real-Time Streams Processing Manager Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const activeIncidentCardsContainer = document.getElementById('activeIncidentCardsContainer');
    if (!activeIncidentCardsContainer) return; // Structural check safeguard execution layer

    const clockDisplayElement = document.getElementById('liveTacticalClock');
    const activeCounterLabel = document.getElementById('dashActiveSosCounter');
    const resolvedCounterLabel = document.getElementById('dashResolvedSosCounter');
    const todayCounterLabel = document.getElementById('dashTodayTotalCounter');
    const mapSectorNodesList = document.querySelectorAll('.map-sector-node');

    let localizedVaultDataCache = [];

    // 1. Live Tactical clock synchronization routine
    setInterval(() => {
        if (clockDisplayElement) {
            clockDisplayElement.textContent = new Date().toLocaleTimeString('en-US', { hour12: false }) + " UTC";
        }
    }, 1000);

    // 2. Load Telemetry Vault records safely
    function pullApplicationVaultStorage() {
        try {
            const rawVaultString = localStorage.getItem('camo_sos_vault');
            if (rawVaultString) localizedVaultDataCache = JSON.parse(rawVaultString);
        } catch(e) { console.error("Error connecting telemetry storage pipelines.", e); }
    }

    // 3. Command Terminal Core Matrix Renderer
    function compileLiveTerminalStreams() {
        pullApplicationVaultStorage();
        activeIncidentCardsContainer.innerHTML = "";

        // Reset tracking indicator classes across maps graphics layers before drawing loops iterations updates
        mapSectorNodesList.forEach(node => node.classList.remove('active-danger-pulse'));

        let criticalStateCounter = 0;
        let resolvedStateCounter = 0;

        localizedVaultDataCache.forEach((incident, elementIdx) => {
            if (incident.status === "CRITICAL") criticalStateCounter++;
            else if (incident.status === "RESOLVED") resolvedStateCounter++;

            // Injected layout rendering filters targeting active unresolved records queues arrays configurations
            if (incident.status === "CRITICAL") {
                const cardDiv = document.createElement('div');
                cardDiv.className = "incident-telemetry-glass-node";
                
                cardDiv.innerHTML = `
                    <div class="node-meta-top-strip">
                        <span class="threat-priority-tag tag-critical"><i class="fa-solid fa-triangle-exclamation"></i> ${incident.status} THREAT</span>
                        <span style="font-family:monospace; font-size:0.75rem; color:var(--text-secondary-muted);">${incident.time}</span>
                    </div>
                    <div class="node-core-details-text">
                        <h4>${incident.category} Distress Triggered</h4>
                        <p style="color:var(--primary-blue); font-weight:500; font-size:0.8rem; margin-bottom:0.4rem;"><i class="fa-solid fa-location-crosshairs"></i> Sector Location: ${incident.location}</p>
                        <p style="font-size:0.75rem; font-style:italic;">"${incident.notes || 'No contextual notes submitted.'}"</p>
                    </div>
                    <div class="node-action-control-row">
                        <button class="tactical-btn btn-primary-glass" style="padding:0.4rem 1rem; font-size:0.75rem; flex:1;" onclick="alert('Broadcasting localized threat interception instruction packets...')">Intercept</button>
                        <button class="tactical-btn" style="padding:0.4rem 1rem; font-size:0.75rem; background:linear-gradient(135deg, #10b981 0%, #059669 100%); flex:1;" data-action-resolve-id="${incident.id}">Resolve Node</button>
                    </div>
                `;
                activeIncidentCardsContainer.appendChild(cardDiv);

                // Dynamically flag map coordinate segments as unsafe based on the incident location
                mapSectorNodesList.forEach(sectorNode => {
                    const trackingDataAttrValue = sectorNode.getAttribute('data-sector');
                    if (incident.location && incident.location.includes(trackingDataAttrValue)) {
                        sectorNode.classList.add('active-danger-pulse');
                    }
                });
            }
        });

        // Sync operational metric numeric value tracking summaries cards arrays properties labels text elements definitions
        if (activeCounterLabel) activeCounterLabel.textContent = `${criticalStateCounter} Active Nodes`;
        if (resolvedCounterLabel) resolvedCounterLabel.textContent = `${resolvedStateCounter} Records`;
        if (todayCounterLabel) todayCounterLabel.textContent = `${localizedVaultDataCache.length} Global Events`;

        if (criticalStateCounter === 0) {
            activeIncidentCardsContainer.innerHTML = `
                <div style="text-align:center; padding:3rem; color:var(--text-secondary-muted); font-size:0.85rem;">
                    <i class="fa-solid fa-circle-check" style="font-size:2rem; color:var(--success-green); margin-bottom:1rem; display:block;"></i>
                    All structural communications channels clear. Zero active threat alerts are pending in current log queues.
                </div>
            `;
        }
    }

    // 4. Incident Resolution Event Delegation Controller Router Hook
    activeIncidentCardsContainer.addEventListener('click', (event) => {
        const resolutionTargetTokenId = event.target.getAttribute('data-action-resolve-id');
        if (!resolutionTargetTokenId) return;

        localizedVaultDataCache = localizedVaultDataCache.map(item => {
            if (item.id === resolutionTargetTokenId) {
                item.status = "RESOLVED";
            }
            return item;
        });

        localStorage.setItem('camo_sos_vault', JSON.stringify(localizedVaultDataCache));
        compileLiveTerminalStreams();
    });

    // Boot Command Center Core Routine Operations
    compileLiveTerminalStreams();
});