/**
 * Mission 4 – The Corrupt Economy & Tiffin Ledger
 * Immutable Activity Data Table Framework System Processing Management Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const tableBodyElement = document.getElementById('ledgerTableBody');
    // Presence defensive safety layer
    if (!tableBodyElement) return;

    // Baseline Seed Data Matrix Fallback if memory cache arrays are fresh
    const baselineDataSeeds = [
        { id: "NODE-482019", category: "Forced Payment", amount: 15.00, foodItem: "N/A", date: "Jul 10, 2026", status: "IMMUTABLE" },
        { id: "NODE-194025", category: "Food Theft", amount: 6.50, foodItem: "Double Cheeseburger", date: "Jul 11, 2026", status: "IMMUTABLE" },
        { id: "NODE-882041", category: "Forced Payment", amount: 50.00, foodItem: "N/A", date: "Jul 12, 2026", status: "IMMUTABLE" }
    ];

    let currentWorkingLedgerArray = [];

    // 1. Storage Processing Engine Initialization
    function extractLedgerRecords() {
        try {
            const cacheString = localStorage.getItem('camo_ledger_registry');
            if (cacheString) {
                currentWorkingLedgerArray = JSON.parse(cacheString);
            } else {
                currentWorkingLedgerArray = [...baselineDataSeeds];
                localStorage.setItem('camo_ledger_registry', JSON.stringify(currentWorkingLedgerArray));
            }
        } catch (e) {
            currentWorkingLedgerArray = [...baselineDataSeeds];
        }
    }

    // 2. Render Functional Pipeline Table Transformer
    function renderPublicLedgerView() {
        tableBodyElement.innerHTML = "";
        
        const searchQuery = document.getElementById('ledgerSearchInput')?.value.toLowerCase() || "";
        const targetCategoryFilter = document.getElementById('ledgerCategoryFilter')?.value || "ALL";

        currentWorkingLedgerArray.forEach(item => {
            // Apply Search Filtering Parameter Logic Mappings
            if (targetCategoryFilter !== "ALL" && item.category !== targetCategoryFilter) return;
            if (searchQuery && !item.id.toLowerCase().includes(searchQuery) && !item.foodItem.toLowerCase().includes(searchQuery)) return;

            const trNode = document.createElement('tr');

            trNode.innerHTML = `
                <td style="font-family: monospace; color:var(--cyber-blue); font-weight:600;">${item.id}</td>
                <td><strong>${item.category}</strong></td>
                <td style="font-weight:600; color:${item.amount > 20 ? '#ef4444' : '#fff'}">$${parseFloat(item.amount).toFixed(2)}</td>
                <td style="color:var(--text-secondary-muted);">${item.foodItem}</td>
                <td>${item.date}</td>
                <td class="text-right"><span class="badge-ledger-status status-immutable"><i class="fa-solid fa-lock"></i> Verified</span></td>
            `;

            tableBodyElement.appendChild(trNode);
        });
    }

    // 3. Document Streaming Export Utilities Mapping Modules Configurations Functions
    const btnCSV = document.getElementById('ledgerExportCSV');
    if (btnCSV) {
        btnCSV.addEventListener('click', () => {
            let compiledCSVContentString = "data:text/csv;charset=utf-8,Report ID,Category,Amount,Food Item,Date\n";
            currentWorkingLedgerArray.forEach(r => {
                compiledCSVContentString += `${r.id},${r.category},${r.amount},${r.foodItem},${r.date}\n`;
            });
            const encodedAssetUri = encodeURI(compiledCSVContentString);
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute('href', encodedAssetUri);
            downloadAnchorNode.setAttribute('download', `TiffinShield_PublicLedger_Export.csv`);
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            document.body.removeChild(downloadAnchorNode);
        });
    }

    const btnPrint = document.getElementById('ledgerPrintPDF');
    if (btnPrint) {
        btnPrint.addEventListener('click', () => window.print());
    }

    // Attach dynamic live search listener filters
    document.getElementById('ledgerSearchInput')?.addEventListener('input', renderPublicLedgerView);
    document.getElementById('ledgerCategoryFilter')?.addEventListener('change', renderPublicLedgerView);

    // Bootstrap Subsystem Routines
    extractLedgerRecords();
    renderPublicLedgerView();
});