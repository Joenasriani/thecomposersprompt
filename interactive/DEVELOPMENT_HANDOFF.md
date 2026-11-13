# The Composer's Prompt – active Interactive Lab AI handoff
**Updated:** 2026-11-13. **Only active interactive handoff.** Read the [repository-wide handoff](../AI_HANDOFF.md) first.

## Approved target
**Live final reference:** https://thecomposersprompt-lab.vercel.app/ .
**Owned application source:** `interactive/index.html`, `interactive/lessons/`, `interactive/music/`, `interactive/assets/`, `interactive/tests/`.
**Production Vercel project:** `thecomposersprompt-lab` (`prj_9WZWGf5PTxXP90SloTeGncV4DWJH`); source project root documented as `interactive/`.
**Verified READY deployment:** `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` from Git commit `8b249db74ec865ccc69c14180c098ab7ec9293a0`.
**Git auto-deployment:** disabled in `interactive/vercel.json`. Do **not** enable or trigger deployment merely to align commit SHAs.

## Source comparison – important nuance
Comparing deployed Git SHA `8b249db` to pre-documentation application-source head `9018ccc` yielded **92 additional commits**, but **no changed lesson HTML, app homepage HTML, or audio/piano/layout runtime files**. The differences within `interactive/` are documentation, inventory JSON and an integrity test. Do not describe the lab as 92 *feature updates* behind. Git commit divergence still exists and served/browser parity has not been independently verified; the approved live deployment must be preserved.

## Book/lesson coverage
- Verified locked **159-page** final PDF is `../book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`; the author-uploaded final is byte-identical.
- The book definitively contains **Chapter 33 – Advanced Scales, Modes & Computational Composition**, printed pp.110–122, physical PDF pp.115–127.
- `lessons/chapter-inventory.json` contains **37** chapter entries; prior source inventory found **36** standalone HTML lesson pages. `lessons/chapter-33/index.html` returns NOT FOUND at both production source commit and current main.
- Check whether Chapter 33 is already included in the app's **embedded reader or bookdata** before claiming readers cannot access it. Do not invent a new lesson, copy a generic template, or edit approved live design solely from the 404.
- Chapter 6.5 has a specialized piano/notation reference; `lessons/lesson-runtime.js`, `lesson-contract.js`, `music/pitch.js`, `piano-renderer.js`, `audio-engine.js` are source references requiring fresh runtime checks.
- Historical `interactive/obsolete/index.html` and previously proposed light-theme WebP logo were absent at prior audit. Never fabricate assets or recreate an archive based on obsolete docs.
- Interactive package version `0.1.0` is separate from published PDF book v`1.0.0`; avoid cross-edition claims.

## Protected material and ownership
Final book, `publication.json`, `book/FINAL_RELEASE_LOCK.json`, deposits, landing, `.github/`, root historical `index.html`, `stage1/` and `prototype/` are distinct scopes. Preserve the final book copyright (all rights reserved, free to read). Existing CC BY 4.0 interactive grants remain applicable where they already existed. Do not relicense the final book via the repo license.

## Start and verify safely
1. Read this file, `README.md`, `lessons/chapter-inventory.json`, `COMPONENT-MANIFEST.json`, `QA-ACCEPTANCE.md`, and actual source files.
2. Fetch current Git HEAD, deployed Vercel source SHA, and compare changed paths. Keep code, book and experimental surfaces separate.
3. Run reproducible source validation (`cd interactive && npm install && npm test`); only mark PASS if executed. For browser QA use configured Playwright/Chromium (`npm run test:browser`) if available.
4. Verify responsive widths 320 / 375 / 768 / 1024 / 1440 px; actual navigation, deep links, HTML chapter links, keyboard/pointer/touch, Web Audio unlocking and correct pitch, VexFlow/staff accuracy, reduced-motion and screen-reader affordances.
5. Compare each lesson against locked book text read-only, distinguish a source page from editorial, theoretical and UX acceptance.
6. For Chapter 33, inspect integrated reader and live URL first. Resolve the standalone-page gap only through faithful, approved work; verify no changes to other lessons or audio behavior.
7. Record status as SOURCE PRESENT / TEST PASS / BROWSER PASS / LIVE VERIFIED / NOT RECHECKED / BLOCKED, with command, SHA and date. Do not claim final release QA from READY metadata.
8. Update this one active handoff, status, README and manifest on validated changes. Historical notes live in `archive/historical-guidance/`; do not publish conflicting active handoffs.

## Known limits – 13 November 2026
We verified source diff and PDF provenance, *not* actual browser rendering/audio, a complete 36-page editorial pass, deployed asset binary parity, or full responsive accessibility acceptance. No runtime source, deployment config or final PDF was changed in this documentation synchronization.
