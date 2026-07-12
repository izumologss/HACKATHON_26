# HACKATHON_26


Overview

Anti-Kuddu Protocol Hub is a central dashboard that links six independent modules, each tackling a different pain point in campus life — from anonymous reporting to seat allocation to fact-checking. The hub itself is a lightweight landing page; every module is a self-contained mini-app reachable from the main navigation.

Modules

ModulePurpose🕵️ Anonymous WhistleblowerLets students report classroom misconduct anonymously, with a student portal and an admin dashboard for reviewing/verifying reports.🪑 Seat Planner MatrixGenerates or manages classroom/exam seating arrangements.📚 Syllabus NegotiatorProfile-based tool for tracking/negotiating syllabus coverage and pacing.💰 Corrupt Economy TraceTracks and visualizes reports related to financial misconduct.🆘 SOS Rescue FlareQuick-access emergency alert/help-request tool.✅ Fact Checker EngineProject-based tool for verifying claims/information.


Framework & Tech Stack

This project is built as a static multi-page site, deployed via GitHub Pages:


HTML5 / CSS3 / Vanilla JavaScript — no build step or bundler required.
Each module lives in its own subfolder (e.g. /anonymous-whistleblower, /seat_planner, /syllabus_negotiator, /corrupt_economy, /sos, /fact-checker) with its own pages (e.g. login.html, admin.html, complaint.html, profile/, project/).
Client-side only — no backend server is required to view the UI; any dynamic/data-driven features (auth, storage, complaint records) run against whatever browser storage or API layer is wired into each module (see each module's own code for specifics).
Hosting/deployment: GitHub Pages, serving directly from the repository root.



ℹ️ If any module uses a specific framework, API, or database (e.g. Firebase, localStorage, a JSON mock API), list it here per module so reviewers know exactly what's running under the hood.




Architecture & Design Trade-offs

Why a static multi-page hub instead of a single-page app (SPA):


✅ Zero build tooling — every module can be opened directly in a browser or served with any static file server, which matters a lot under hackathon time pressure.
✅ Each module is fully decoupled, so team members could build/debug their feature independently without merge conflicts in a shared app shell.
✅ GitHub Pages hosting is free and requires no server infrastructure.
⚠️ Trade-off: no shared state/session between modules — e.g. a login on one module doesn't carry over to another, since there's no central app framework managing state.
⚠️ Trade-off: no client-side routing/framework (React/Vue) means more repeated markup/styling across module pages, at the cost of some duplication for the sake of simplicity and speed.
⚠️ Trade-off: without a real backend, sensitive flows (anonymous reporting, admin verification) are simulated/client-side for demo purposes rather than production-secure — this was a deliberate scope cut to prioritize a working end-to-end demo within the hackathon timeframe.



✏️ Adjust this section with the actual reasons your team chose this structure — judges usually want to see genuine reasoning, not just a list of pros/cons.




Local Setup Instructions

Prerequisites


A modern web browser (Chrome, Firefox, Edge, etc.)
Git installed
(Optional but recommended) VS Code with the Live Server extension, or Python 3, for serving the site locally


1. Clone the repository

bashgit clone https://github.com/izumologss/HACKATHON_26.git
cd HACKATHON_26

2. Run it locally

Option A — VS Code Live Server


Open the folder in VS Code.
Right-click index.html → Open with Live Server.
The hub will open at http://127.0.0.1:5500/.


Option B — Python's built-in server

bashpython3 -m http.server 8000

Then visit http://localhost:8000/ in your browser.

Option C — Just open the file
Double-click index.html to open it directly in your browser (some modules that fetch local JSON/assets may not work fully this way due to browser file-access restrictions — Option A or B is recommended).

3. Navigate the modules

From the hub landing page, click through to any module (e.g. Anonymous Whistleblower, Seat Planner Matrix). Each module has its own subfolder and can also be opened directly, e.g.:

/anonymous-whistleblower/index.html
/seat_planner/index.html
/syllabus_negotiator/profile/index.html
/corrupt_economy/index.html
/sos/index.html
/fact-checker/project/index.html


UI Layout Screenshots


📸 Add screenshots of each module here before submitting. Suggested format:



Hub Landing Page

![Hub Landing Page](./docs/screenshots/hub.png)

Anonymous Whistleblower

![Anonymous Whistleblower](./docs/screenshots/whistleblower.png)

Seat Planner Matrix

![Seat Planner Matrix](./docs/screenshots/seat-planner.png)

Syllabus Negotiator

![Syllabus Negotiator](./docs/screenshots/syllabus-negotiator.png)

Corrupt Economy Trace

![Corrupt Economy Trace](./docs/screenshots/corrupt-economy.png)

SOS Rescue Flare

![SOS Rescue Flare](./docs/screenshots/sos.png)

Fact Checker Engine

![Fact Checker Engine](./docs/screenshots/fact-checker.png)

(Create a docs/screenshots/ folder in your repo, drop your .png/.jpg files in there, and update the paths above to match your actual filenames.)


Built By

error404 — Hackathon 2026

License

Add your license here (e.g. MIT) if the hackathon requires one.