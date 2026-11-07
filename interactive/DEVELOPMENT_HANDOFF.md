# The Composer's Prompt – current interactive handoff
**Audited:** 2026-11-07 against GitHub `main` at `82da54fef00ee928677c92436c6e450860452665` (pre-documentation commit). **Authority:** this file is the only active operational AI handoff for the interactive application. Recheck HEAD before relying on the snapshot.

## Scope and precedence
This is a **music-education interactive companion**, not a conventional level-based game. The repository also owns a separately locked final PDF, landing page, and research deposits. Interactive development writes only to `interactive/`. Treat `book/`, `publication.json`, `book/FINAL_RELEASE_LOCK.json`, `deposits/`, `websites/`, root `index.html`, and `.github/` as protected, unless separately authorized. Never change published book bytes or blur reserved-rights PDF vs pre-existing CC BY 4.0 interactive material. Historical plans are not instructions: see [archive](archive/historical-guidance/README.md).

## Verified source baseline
- Canonical *intended* interactive address: https://thecomposersprompt-lab.vercel.app/; application source entry `interactive/index.html`, static application with Vercel project root previously documented as `interactive/`. **Current production deployment commit and actual browser behavior are NOT VERIFIED.** A prior note reported READY at `728d435`, not evidence that current `main` is deployed.
- `interactive/vercel.json` currently contains `"deploymentEnabled": false`; production deployment is **manual-only, NOT AUTHORIZED by this documentation audit**. GitHub Pages uses a different repository-root publication; never equate it with the Vercel lab.
- `interactive/lessons/chapter-inventory.json` contains **37 chapter entries**. Exactly **36 chapter HTML index pages** exist in the inspected tree (all entries except `chapter-33`). Presence means SOURCE PRESENT only, not book parity, reviewed pedagogy, audio QA, or accepted release.
- Chapter 6.5 is the separately built reference keyboard/harmony/notation lesson. `lessons/lesson-runtime.js`, `lesson-contract.js`, `music/pitch.js`, `piano-renderer.js`, `audio-engine.js` and specialized Chapter 6.5 files exist. Other lessons have source pages but have **not** received full page-by-page editorial, functional, accessibility or browser acceptance.
- `interactive/obsolete/index.html` described by older docs is **ABSENT** on current main. Legacy workbook remains as repository-root `index.html`, which is OUT OF SCOPE. Do not recreate or delete either without an explicit migration decision.
- `assets/composers-prompt-title.svg` exists; the previously planned light WebP logo is **ABSENT**. Do not fabricate the asset.
- `interactive/package.json` reports app package version `0.1.0`. `book/FINAL_RELEASE_LOCK.json` and `publication.json` report the **separate PDF book release v1.0.0**, 159 pages, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. No GitHub Releases exist as checked on 2026-11-07. These identifiers describe different artifacts; do not claim an interactive v1.0.0 release.
- Existing October QA/checkpoints and source test implementations are historical evidence, not certification of current production. CI, local Node tests, Chromium execution, real-device audio, mobile responsiveness, lesson correctness, CDN/VexFlow rendering, and live Vercel commit alignment require fresh checks.

## Start a new AI thread safely
1. Read this handoff, then `interactive/README.md`, `interactive/lessons/chapter-inventory.json`, `interactive/COMPONENT-MANIFEST.json`, `interactive/QA-ACCEPTANCE.md`, and the actual files to change.
2. Fetch current main commit and compare with this audit anchor; check issues/PRs and latest Actions results. Do not assume README status is runtime proof.
3. Confirm whether each feature is **SOURCE PRESENT / STATIC TEST PASS / BROWSER PASS / LIVE DEPLOY VERIFIED / NOT RECHECKED / BLOCKED**. Record evidence, command, commit, and time for each claim.
4. Run `cd interactive && npm install && npm test`; for browser acceptance install pinned Playwright/Chromium, then run `npm run test:browser`. Do not report PASS unless actually executed. Verify 320, 375, 768, 1024 and 1440px; pointer/keyboard/touch; sound unlock, note accuracy and click-free envelopes; VexFlow notation and fallback; screen-reader accessibility; links and deep routes.
5. Compare each chapter against the locked book source **read-only**; prioritize actual Chapter 33 gap and distinguish complete educational parity from an available HTML page.
6. Update this one handoff and relevant factual registers after any change, keeping superseded guidance in the historical archive. Do not duplicate competing 'current' instructions.
7. Do not deploy or change Vercel settings, routes, book, legal/license metadata or independent workstreams without explicit authorization.

## Conflict disposition (2026-11-07)
- The older `PROJECT_STATUS.md`, `CHAPTER_PROGRESS.md`, `README.md`, `ARCHITECTURE-AND-DEPLOYMENT.md`, `QA-ACCEPTANCE.md`, `QA-PILOT-GATE.md`, and previous handoff are preserved under the dated historical archive. Their obsolete conclusions were replaced with pointers or updated factual guidance.
- Source presence (36 pages) supersedes old "all other chapters not started" claims. The absent `obsolete/index.html` and absent Chapter 33 page are unresolved discrepancies, NOT silently filled.
- **No source/runtime, book, deployment config, or external service modified by this documentation-only reconciliation.**
