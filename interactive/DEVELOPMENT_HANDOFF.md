# The Composer's Prompt – current Interactive Lab AI handoff

**Current release verified:** 2026-11-13. This is the **only active operational handoff** for the interactive component; read [repo authority](../AI_HANDOFF.md) and [component README](README.md) first.

## Exact production state
- Canonical site: https://thecomposersprompt-lab.vercel.app/
- Vercel project: `thecomposersprompt-lab` (`prj_9WZWGf5PTxXP90SloTeGncV4DWJH`), project root `interactive/`, framework `null` (static).
- Production deployment: `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf`, **READY**, official alias assigned. Deployed Git commit: `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`. Github `main` was identical at immediate post-release verification.
- Historical `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` at `8b249db` is **superseded**, not current production.
- `interactive/vercel.json` disables automatic Git deployment. Do not change this; explicit author permission is needed for another deployment. Subsequent documentation commits may make GitHub `main` ahead of deployed SHA without altering live app runtime.

## Source and educational coverage
- Entry: `interactive/index.html` includes **43 reading entries** (preface, 36 numbered/supplementary chapter readings, 6 appendices) and generates interactive lesson links from chapter data.
- Inventory: `lessons/chapter-inventory.json` has **37** standalone chapter IDs, all source-present. These include Chapter 3.5, 6.5, 28.5 and 31.5.
- **Chapter 33:** `lessons/chapter-33/index.html` was added, included in reader/navigation, and published with the current Vercel production Git source. A-reference scale sets, comparison controls, a theory-check exercise in `lessons/chapter-practice.js`, reusable piano, audio and notation modules are included. It is an **adaptation** of the final PDF chapter, not exact figure-by-figure transcription.
- Shared modules: `lessons/chapter-reference.js`, `lessons/lesson-runtime.js`, `lessons/lesson-contract.js`, `lessons/chapter-practice.js`; `music/pitch.js`, `music/piano-renderer.js`, `music/audio-engine.js`, `music/compact-notation.js`, `music/interactive-piano.js`. Chapter 6.5 remains specialized. `chapters.html` is a legacy pilot index, not the current full chapter navigator.
- The final book is a separate locked 159-page PDF `../book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. Chapter 33 printed pp.110–122, PDF pp.115–127. Do not modify or relicense it. Book release v1.0.0 is not interactive app package v0.1.0.

## Audit evidence hierarchy
- **PASS, production metadata/build:** source Git SHA, Vercel build completed, READY state and canonical alias assigned.
- **PASS, static inspection:** 9/9 focused Chapter 33 checks for source wiring, chapter order, 37 inventory, pitch examples, sequential scale routing, theory-check registration and manual deployment guard.
- **NOT VERIFIED:** live HTTP body/browser rendering, touch and audio, notation engraving/fallback, contrast/screen-reader accessibility, responsive widths 320/375/768/1024/1440, all-chapter editorial accuracy, exact PDF figure parity.
- **NOT EXECUTED:** whole `npm test`, configured Playwright suite. Do not call unperformed checks PASS; an unrelated Vercel book deployment status is not Lab QA.

## Start / change / validate safely
1. Fetch new GitHub head and **current** Vercel deployment metadata; compare filenames and commits, not only generic source hashes.
2. Inspect the actual files being changed and this handoff. Preserve other 36 lesson files and shared audio behavior.
3. Run `cd interactive && npm install && npm test`; then `npm run test:browser` with Chromium where available, and verify screen-size, pointer/keyboard/touch, notes, VexFlow notation, accessibility and routing.
4. For Chapter 33 confirm rendered reader/navigation and `/lessons/chapter-33/`, compare pitched scale examples and exercises against the locked PDF, and identify intentional adaptation versus omitted figures.
5. Protect `../book/`, `../publication.json`, `../deposits/`, `../websites/`, root `index.html`, `../stage1/`, `../prototype/` and `.github/` unless separately authorized. Preserve existing interactive/material and third-party licensing notices.
6. Update active status, README, chapter inventory, QA/manifest, repo-wide handoff and `../llms.txt` **only** with verified facts. Archive prior guidance rather than perpetuating stale “missing chapter” or pre-release banners.
7. Do not auto-deploy, change licenses, edit the locked PDF or claim full browser/audio release acceptance from READY metadata.
