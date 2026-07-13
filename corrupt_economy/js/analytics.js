/**
 * Mission 4 – The Corrupt Economy & Tiffin Ledger
 * Statistical Aggregator Analytics Pipeline Module
 */

document.addEventListener('DOMContentLoaded', () => {
    // Read centralized ledger data index arrays configurations to compile real time analytics summaries elements dashboards properties
    let localLedgerCache = [];
    try {
        const cacheRawString = localStorage.getItem('camo_ledger_registry');
        if (cacheRawString) localLedgerCache = JSON.parse(cacheRawString);
    } catch (e) {
        console.warn("Analytics pipeline metrics isolated. Cache layer stream unreachable.");
    }

    // 1. Dynamic Calculations Injection Engine
    const updateDashboardSummaryCards = () => {
        const totalReportsCountNode = document.getElementById('dashTotalReportsCount');
        const totalAmountSumNode = document.getElementById('dashTotalAmountSum');
        const totalFoodCountNode = document.getElementById('dashTotalFoodCount');

        if (!totalReportsCountNode) return; // Structural protection verification check

        if (localLedgerCache.length > 0) {
            totalReportsCountNode.textContent = `${localLedgerCache.length} Nodes`;
            
            const moneyAggregate = localLedgerCache.reduce((acc, current) => acc + parseFloat(current.amount || 0), 0);
            totalAmountSumNode.textContent = `$${moneyAggregate.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

            const foodItemsFilterCount = localLedgerCache.filter(item => item.category === "Food Theft").length;
            totalFoodCountNode.textContent = `${foodItemsFilterCount} Incident Streams`;
        }
    };

    updateDashboardSummaryCards();
});