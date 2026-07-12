document.addEventListener('DOMContentLoaded', () => {
    // Initial Simulated Records In-Memory Datastore Database Configuration Matrix Mappings
    let localStudentsRegistry = [
        { id: "101", name: "Marcus Aurelius", height: 152, vision: true, reserved: false },
        { id: "102", name: "Seraphina Vance", height: 178, vision: false, reserved: false },
        { id: "103", name: "Valerie Vance", height: 161, vision: false, reserved: false },
        { id: "104", name: "David Lightman", height: 188, vision: false, reserved: false },
        { id: "105", name: "Elena Rostova", height: 147, vision: false, reserved: true },
        { id: "106", name: "Tanzina Akter", height: 165, vision: true, reserved: false }
    ];

    const gridTotalColumns = 8;
    const gridTotalRows = 4;
    const totalStructuralCells = gridTotalColumns * gridTotalRows;

    // Track state arrays configuration matrices limits details elements map options values mapping
    let blockedDesksIndices = [11, 12]; 
    let manualReservedIndices = [0, 4]; 

    const gridViewport = document.getElementById('classroomGridViewport');
    const tableBody = document.getElementById('studentRecordsTableBody');
    const studentForm = document.getElementById('studentEntryForm');
    const toastNotification = document.getElementById('toastNotification');

    // 1. Alert Banner Toast Handler Utility function wrapper blocks processing parameters layers 
    function triggerSystemToast(textString) {
        if (!toastNotification) return;
        toastNotification.textContent = textString;
        toastNotification.classList.remove('hidden');
        setTimeout(() => toastNotification.classList.add('hidden'), 3500);
    }

    // 2. Render Virtual Interactive Grid Sandbox Workspace Layout Elements
    function renderClassroomSandboxGrid(assignmentMap = null) {
        if (!gridViewport) return;
        gridViewport.innerHTML = "";

        for (let idx = 0; idx < totalStructuralCells; idx++) {
            const seatCell = document.createElement('div');
            seatCell.className = "grid-seat-node";
            seatCell.setAttribute('data-index', idx);

            // Compute spatial coordinates metrics for displaying layout addresses labels details configurations
            const rowNumber = Math.floor(idx / gridTotalColumns) + 1;
            const colNumber = (idx % gridTotalColumns) + 1;
            
            const indexLabel = document.createElement('span');
            indexLabel.className = "seat-index-number";
            indexLabel.textContent = `R${rowNumber}C${colNumber}`;
            seatCell.appendChild(indexLabel);

            const contentWrapper = document.createElement('div');
            contentWrapper.className = "seat-main-content-area";

            // Status Modifier state evaluation logic
            if (blockedDesksIndices.includes(idx)) {
                seatCell.classList.add('seat-state-blocked');
            } else if (manualReservedIndices.includes(idx) && (!assignmentMap || !assignmentMap[idx])) {
                seatCell.classList.add('seat-state-reserved');
                const reservedLabel = document.createElement('span');
                reservedLabel.className = "seat-student-name";
                reservedLabel.textContent = "RESERVED";
                contentWrapper.appendChild(reservedLabel);
            } else if (assignmentMap && assignmentMap[idx]) {
                // Node is active and occupied by student asset allocations variables properties values mapping
                const student = assignmentMap[idx];
                seatCell.classList.add('seat-state-occupied');
                if (student.vision) seatCell.classList.add('vision-issue');

                const nameLabel = document.createElement('span');
                nameLabel.className = "seat-student-name";
                nameLabel.textContent = student.name;
                
                const heightLabel = document.createElement('span');
                heightLabel.className = "seat-student-height-tag";
                heightLabel.textContent = `${student.height} cm`;

                contentWrapper.appendChild(nameLabel);
                contentWrapper.appendChild(heightLabel);

                // Inject Ray Traced Color Coded Line of Sight simulated markers parameters metrics overlays indicators 
                const rayOverlay = document.createElement('span');
                rayOverlay.className = "visibility-ray-indicator";
                
                // Front and second row gets direct visibility clear states indicators logic profiles 
                if (rowNumber <= 2) rayOverlay.classList.add('ray-clear');
                else if (rowNumber === 3) rayOverlay.classList.add('ray-partial');
                else rayOverlay.classList.add('ray-blocked');

                seatCell.appendChild(rayOverlay);
            } else {
                const emptyLabel = document.createElement('span');
                emptyLabel.className = "seat-student-name";
                emptyLabel.style.opacity = "0.3";
                emptyLabel.textContent = "VACANT";
                contentWrapper.appendChild(emptyLabel);
            }

            seatCell.appendChild(contentWrapper);

            // Interactive Toggle Cell Handler setup logic variables context tracking features limits maps options 
            seatCell.addEventListener('click', () => {
                if (assignmentMap) return; // Prevent layout disruption during active calculations
                if (blockedDesksIndices.includes(idx)) {
                    // Unblock node location slot matrix values mapping allocations properties parameters
                    blockedDesksIndices = blockedDesksIndices.filter(v => v !== idx);
                    triggerSystemToast(`Seat Location Address R${rowNumber}C${colNumber} unblocked.`);
                } else {
                    blockedDesksIndices.push(idx);
                    triggerSystemToast(`Seat Location Address R${rowNumber}C${colNumber} blocked successfully.`);
                }
                renderClassroomSandboxGrid();
            });

            gridViewport.appendChild(seatCell);
        }
    }

    // 3. Render Registry Database System Datatables view modules layers processing components
    function renderRegistryDatabaseTable() {
        if (!tableBody) return;
        tableBody.innerHTML = "";

        const searchFilterValue = document.getElementById('tableSearchField')?.value.toLowerCase() || "";

        localStudentsRegistry.forEach((student) => {
            if (searchFilterValue && !student.name.toLowerCase().includes(searchFilterValue)) return;

            const tableRow = document.createElement('tr');

            const cellId = document.createElement('td');
            cellId.textContent = `#ST-${student.id}`;
            tableRow.appendChild(cellId);

            const cellName = document.createElement('td');
            cellName.style.fontWeight = "500";
            cellName.textContent = student.name;
            tableRow.appendChild(cellName);

            const cellHeight = document.createElement('td');
            cellHeight.textContent = `${student.height} cm`;
            tableRow.appendChild(cellHeight);

            const cellRules = document.createElement('td');
            if (student.vision) {
                cellRules.innerHTML += '<span class="constraint-tag-pill alert-pill">Vision Impaired</span> ';
            }
            if (student.reserved) {
                cellRules.innerHTML += '<span class="constraint-tag-pill">Front Row Locked</span>';
            }
            if (!student.vision && !student.reserved) {
                cellRules.innerHTML = '<span class="constraint-tag-pill" style="opacity:0.4;">Standard Rule</span>';
            }
            tableRow.appendChild(cellRules);

            // Setup action controls trigger fields items configurations details mapping 
            const cellActions = document.createElement('td');
            cellActions.className = "text-right";
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = "action-trigger-btn btn-delete-record";
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deleteBtn.addEventListener('click', () => {
                localStudentsRegistry = localStudentsRegistry.filter(s => s.id !== student.id);
                triggerSystemToast(`Removed record for ${student.name}.`);
                renderRegistryDatabaseTable();
            });

            cellActions.appendChild(deleteBtn);
            tableRow.appendChild(cellActions);

            tableBody.appendChild(tableRow);
        });
    }

    // 4. Form Submission Event Listener Core Handler interface element configuration details maps variables options setups
    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('stdName').value.trim();
            const id = document.getElementById('stdRoll').value.trim();
            const height = parseInt(document.getElementById('stdHeight').value);
            const vision = document.getElementById('checkVision').checked;
            const reserved = document.getElementById('checkReserved').checked;

            if (localStudentsRegistry.some(s => s.id === id)) {
                alert("A student with this Roll ID vector address key index registry record already exists.");
                return;
            }

            localStudentsRegistry.push({ id, name, height, vision, reserved });
            triggerSystemToast(`Committed ${name} into runtime cluster storage matrix successfully.`);
            
            studentForm.reset();
            renderRegistryDatabaseTable();
            renderClassroomSandboxGrid();
        });
    }

    // 5. Advanced Anti-Camouflage Seating Allocation Heuristics Engine Processing Logic 
    const btnOptimize = document.getElementById('btnOptimizeSeating');
    if (btnOptimize) {
        btnOptimize.addEventListener('click', () => {
            if (localStudentsRegistry.length === 0) {
                alert("Student Registry dataset array index is empty. Please feed system variables prior to computation sequences.");
                return;
            }

            gridViewport.classList.add('grid-computing-animate');
            triggerSystemToast("Anti-Camouflage Core height sorting allocation routines active...");

            setTimeout(() => {
                gridViewport.classList.remove('grid-computing-animate');

                // Segregate operational dataset arrays based on specific constraint levels properties details mapping configurations values
                let prioritizedHighUrgency = localStudentsRegistry.filter(s => s.vision || s.reserved);
                let standardProfiles = localStudentsRegistry.filter(s => !s.vision && !s.reserved);

                // Sort standard student arrays from shortest to tallest to optimize line-of-sight metrics
                standardProfiles.sort((a, b) => a.height - b.height);
                
                // Sort high-priority assets to place the shortest among them directly at the absolute front row nodes
                prioritizedHighUrgency.sort((a, b) => a.height - b.height);

                let finalStructuredAllocationsMap = {};
                let targetCellIndexPointer = 0;

                // Step A: Allocate high-urgency priority constraints into absolute front row matrix indices safely
                prioritizedHighUrgency.forEach(student => {
                    while (targetCellIndexPointer < totalStructuralCells) {
                        if (!blockedDesksIndices.includes(targetCellIndexPointer)) {
                            finalStructuredAllocationsMap[targetCellIndexPointer] = student;
                            targetCellIndexPointer++;
                            break;
                        }
                        targetCellIndexPointer++;
                    }
                });

                // Step B: Backfill remaining space metrics coordinates sequentially with sorted height standard parameters objects
                standardProfiles.forEach(student => {
                    while (targetCellIndexPointer < totalStructuralCells) {
                        if (!blockedDesksIndices.includes(targetCellIndexPointer)) {
                            finalStructuredAllocationsMap[targetCellIndexPointer] = student;
                            targetCellIndexPointer++;
                            break;
                        }
                        targetCellIndexPointer++;
                    }
                });

                // Display calculations output inside sandbox viewport module components interfaces mapping layers
                renderClassroomSandboxGrid(finalStructuredAllocationsMap);
                triggerSystemToast("Spatial layout alignment optimizations successfully rendered.");

            }, 1200);
        });
    }

})