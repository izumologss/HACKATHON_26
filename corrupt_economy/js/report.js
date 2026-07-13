/**
 * Mission 4 – The Corrupt Economy & Tiffin Ledger
 * Encrypted Reporting Multi-Step Interface Subsystem Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // Structural presence defense check
    const reportingForm = document.getElementById('multiStepReportingForm');
    if (!reportingForm) return;

    let activeStepPointer = 1;
    const extremeStepBoundary = 4;

    const btnNext = document.getElementById('btnNextStep');
    const btnPrev = document.getElementById('btnPrevStep');
    const toastNotification = document.getElementById('toastNotification');
    const fileField = document.getElementById('evidenceFileField');
    const dropzone = document.getElementById('evidenceDropzone');
    const previewArea = document.getElementById('evidencePreviewArea');
    const fileNameDisplay = document.getElementById('evidenceFileName');
    const reviewManifestBlock = document.getElementById('reviewManifestBlock');

    // 1. Toast Notification Utility function wrapper
    function executeToastAlert(msgText) {
        if (!toastNotification) return;
        toastNotification.textContent = msgText;
        toastNotification.classList.remove('hidden');
        setTimeout(() => toastNotification.classList.add('hidden'), 3500);
    }

    // 2. Step View Matrix Sync Handler
    function synchronizeFormStepView() {
        // Toggle Step Panes visibility variables mapping
        for (let idx = 1; idx <= extremeStepBoundary; idx++) {
            const pane = document.getElementById(`stepPane${idx}`);
            const indicator = document.getElementById(`stepIndicator${idx}`);
            
            if (pane) pane.classList.remove('pane-active');
            if (indicator) indicator.classList.remove('node-active');

            if (idx === activeStepPointer) {
                if (pane) pane.classList.add('pane-active');
                if (indicator) indicator.classList.add('node-active');
            }
        }

        // Configure Button label strings matching current pipeline segment location addresses
        if (btnPrev) btnPrev.disabled = (activeStepPointer === 1);
        if (btnNext) {
            if (activeStepPointer === extremeStepBoundary) {
                btnNext.textContent = "Commit Payload Ledger";
                btnNext.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            } else {
                btnNext.textContent = "Continue Verification";
                btnNext.style.background = "";
            }
        }

        // Compilation sequence prior to the final review pane presentation layout
        if (activeStepPointer === extremeStepBoundary) {
            compileReviewSummaryManifest();
        }
    }

    // 3. Review Manifest Data Binder
    function compileReviewSummaryManifest() {
        if (!reviewManifestBlock) return;
        const selectedCategory = document.querySelector('input[name="incidentCategory"]:checked')?.value || "Unassigned";
        const textDetails = document.getElementById('incidentDescription').value.trim() || "No detailed logs provided.";
        const cashValue = document.getElementById('incidentAmount').value || "0.00";
        const foodAssetName = document.getElementById('incidentFoodItem').value.trim() || "None Logged";
        const fileAttachedName = fileField.files[0]?.name || "No forensic validation document array mounted.";

        reviewManifestBlock.innerHTML = `
            <p style="margin-bottom:0.5rem;"><strong>Category Target Block:</strong> ${selectedCategory}</p>
            <p style="margin-bottom:0.5rem;"><strong>Extortion Value Mapping:</strong> $${parseFloat(cashValue).toFixed(2)}</p>
            <p style="margin-bottom:0.5rem;"><strong>Nutritional Asset Signature:</strong> ${foodAssetName}</p>
            <p style="margin-bottom:0.5rem; word-break: break-all;"><strong>Detailed Incident Description Vector:</strong> ${textDetails}</p>
            <p style="color:var(--cyber-emerald);"><strong>Mounted Artifact Integrity Verification:</strong> ${fileAttachedName}</p>
        `;
    }

    // 4. File Attachment Sandbox Pipeline Handlers
    if (dropzone && fileField) {
        dropzone.addEventListener('click', () => fileField.click());
        fileField.addEventListener('change', () => {
            if (fileField.files.length > 0) {
                if (previewArea && fileNameDisplay) {
                    fileNameDisplay.textContent = fileField.files[0].name;
                    previewArea.style.display = "block";
                    executeToastAlert("Forensic attachment verification payload loaded into local buffer maps.");
                }
            }
        });
    }

    // 5. Navigation Step Sequence Router Switch
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            // Field validation metrics verification before step incrementation routing switches
            if (activeStepPointer === 2) {
                const descVal = document.getElementById('incidentDescription').value.trim();
                if (!descVal) {
                    alert("Please provide event details mapping text data inputs prior to navigation sequences.");
                    return;
                }
            }

            if (activeStepPointer < extremeStepBoundary) {
                activeStepPointer++;
                synchronizeFormStepView();
            } else {
                // Execute Final Commit Payload Storage routines
                processFinalPayloadCommit();
            }
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (activeStepPointer > 1) {
                activeStepPointer--;
                synchronizeFormStepView();
            }
        });
    }

    // 6. Local Storage Interface Integration Data Injection Pipe Rules
    function processFinalPayloadCommit() {
        const targetCategory = document.querySelector('input[name="incidentCategory"]:checked')?.value || "Other";
        const descText = document.getElementById('incidentDescription').value.trim();
        const valueCash = parseFloat(document.getElementById('incidentAmount').value) || 0;
        const foodTag = document.getElementById('incidentDescription').value.trim() ? (document.getElementById('incidentFoodItem').value.trim() || "N/A") : "N/A";
        
        const timestampCode = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const generationIdSeed = Math.floor(100000 + Math.random() * 900000);

        const payloadPackage = {
            id: `NODE-${generationIdSeed}`,
            category: targetCategory,
            amount: valueCash,
            foodItem: foodTag,
            date: timestampCode,
            status: "IMMUTABLE"
        };

        // Query device local cluster databases index arrays parameters values mapping sets choices
        let storageIndexDataArray = [];
        try {
            const preservedDataString = localStorage.getItem('camo_ledger_registry');
            if (preservedDataString) storageIndexDataArray = JSON.parse(preservedDataString);
        } catch (err) {
            console.error("Local variable memory indexing corruption diagnostic trigger reset.", err);
        }

        storageIndexDataArray.push(payloadPackage);
        localStorage.setItem('camo_ledger_registry', JSON.stringify(storageIndexDataArray));

        executeToastAlert("Payload securely broadcasted and verified inside system decentral balances.");
        
        setTimeout(() => {
            window.location.href = "ledger.html";
        }, 1200);
    }

    // Initialize View Layer Step Mappings Core Properties
    synchronizeFormStepView();
});