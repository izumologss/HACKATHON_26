/**
 * Mission 5 – SOS Rescue Flare
 * Core Ecosystem Architecture Driver Framework Logic Matrix
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Interactive Tracking Tactical Cursor Subsystem
    const cursorWidget = document.getElementById('customCursor');
    if (cursorWidget) {
        document.addEventListener('mousemove', (event) => {
            cursorWidget.style.left = `${event.clientX}px`;
            cursorWidget.style.top = `${event.clientY}px`;
        });

        const interactiveNodes = document.querySelectorAll('a, button, select, textarea, input, .map-sector-node');
        interactiveNodes.forEach(node => {
            node.addEventListener('mouseenter', () => cursorWidget.classList.add('expand-hover'));
            node.addEventListener('mouseleave', () => cursorWidget.classList.remove('expand-hover'));
        });
    }

    // 2. Incremental Telemetry Numeric Counter Accelerator Sequencer
    const incrementalCounters = document.querySelectorAll('.counter-engine');
    if (incrementalCounters.length > 0) {
        const executeCounterProcess = () => {
            incrementalCounters.forEach(counter => {
                const limitTargetValue = +counter.getAttribute('data-target');
                const triggerTickCycle = () => {
                    const dynamicCount = +counter.innerText;
                    const iterationPacingStep = limitTargetValue / 50;

                    if (dynamicCount < limitTargetValue) {
                        counter.innerText = Math.ceil(dynamicCount + iterationPacingStep);
                        setTimeout(triggerTickCycle, 25);
                    } else {
                        counter.innerText = limitTargetValue.toLocaleString();
                    }
                };
                triggerTickCycle();
            });
        };

        const targetMetricsStrip = document.querySelector('.telemetry-metrics-strip');
        if (targetMetricsStrip) {
            const intersectionObserverInstance = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        executeCounterProcess();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            intersectionObserverInstance.observe(targetMetricsStrip);
        }
    }

    // 3. Persistent Back to Top Navigation Widget Subsystem Router Control Trigger
    const scrollTopWidget = document.getElementById('scrollTopWidget');
    if (scrollTopWidget) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) scrollTopWidget.classList.add('visible-state');
            else scrollTopWidget.classList.remove('visible-state');
        });
        scrollTopWidget.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Baseline Public Archives Render Loops Data Management Interface Engine
    const archiveTableBody = document.getElementById('historyTableBodyNode');
    if (archiveTableBody) {
        const baselineSeeds = [
            { id: "FLARE-928104", category: "Bribery", location: "Library Commons [Zone Alpha]", time: "11:04:12 UTC", status: "RESOLVED" },
            { id: "FLARE-301982", category: "Bullying", location: "Playground [Zone Gamma]", time: "10:15:45 UTC", status: "CRITICAL" },
            { id: "FLARE-554109", category: "Tiffin Theft", location: "Canteen Hub [Zone Delta]", time: "09:44:20 UTC", status: "RESOLVED" }
        ];

        let extractedArray = [];
        try {
            const cacheRaw = localStorage.getItem('camo_sos_vault');
            extractedArray = cacheRaw ? JSON.parse(cacheRaw) : [...baselineSeeds];
            if (!cacheRaw) localStorage.setItem('camo_sos_vault', JSON.stringify(extractedArray));
        } catch(e) { extractedArray = [...baselineSeeds]; }

        const renderArchiveMatrixGrid = () => {
            archiveTableBody.innerHTML = "";
            const query = document.getElementById('archiveSearchInput')?.value.toLowerCase() || "";
            const catFilter = document.getElementById('archiveCategoryFilter')?.value || "ALL";

            extractedArray.forEach(record => {
                if (catFilter !== "ALL" && record.category !== catFilter) return;
                if (query && !record.id.toLowerCase().includes(query) && !record.category.toLowerCase().includes(query)) return;

                const rowNode = document.createElement('tr');
                rowNode.style.borderBottom = "1px solid var(--border-glass-profile)";
                
                rowNode.innerHTML = `
                    <td style="padding:1.2rem 1rem; font-family:monospace; color:var(--primary-blue); font-weight:600;">${record.id}</td>
                    <td style="padding:1.2rem 1rem;"><strong>${record.category}</strong></td>
                    <td style="padding:1.2rem 1rem; color:var(--text-secondary-muted);">${record.location}</td>
                    <td style="padding:1.2rem 1rem; font-family:monospace;">${record.time}</td>
                    <td style="padding:1.2rem 1rem;"><span class="threat-priority-tag ${record.status === 'CRITICAL' ? 'tag-critical' : 'tag-resolved'}">${record.status}</span></td>
                    <td style="padding:1.2rem 1rem;" class="text-right"><button class="tactical-btn btn-primary-glass" style="padding:0.4rem 1rem; font-size:0.75rem;" onclick="alert('Accessing encrypted trace payload metadata layer context keys...')">Trace Payload</button></td>
                `;
                archiveTableBody.appendChild(rowNode);
            });
        };

        document.getElementById('archiveSearchInput')?.addEventListener('input', renderArchiveMatrixGrid);
        document.getElementById('archiveCategoryFilter')?.addEventListener('change', renderArchiveMatrixGrid);
        renderArchiveMatrixGrid();

        // Wire Export CSV utility action handles securely
        document.getElementById('archiveExportCsvBtn')?.addEventListener('click', () => {
            let csvPayload = "data:text/csv;charset=utf-8,ID,Threat Class,Spatial Sector,Time,Resolution State\n";
            extractedArray.forEach(r => { csvPayload += `${r.id},${r.category},${r.location.replace(/,/g,'')},${r.time},${r.status}\n`; });
            const uriAsset = encodeURI(csvPayload);
            const hiddenAnchor = document.createElement('a');
            hiddenAnchor.setAttribute('href', uriAsset);
            hiddenAnchor.setAttribute('download', `SOSFlare_SignalArchives.csv`);
            document.body.appendChild(hiddenAnchor);
            hiddenAnchor.click();
            document.body.removeChild(hiddenAnchor);
        });

        document.getElementById('archivePrintBtn')?.addEventListener('click', () => window.print());
    }
});