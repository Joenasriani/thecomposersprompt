# The Composer's Prompt – repository-wide AI handoff
**Audit date:** 2026-11-13. **GitHub main audit anchor:** `9018ccce7f71844a948383ef6a8e049b46228169`.
**Purpose:** Preserve source/release authority across separate components; do not interpret this document as deployment or browser acceptance.

## First read and boundaries
1. Read `COMPONENTS.md`, `publication.json`, and `book/FINAL_RELEASE_LOCK.json`.
2. For interactive development, read `interactive/DEVELOPMENT_HANDOFF.md`, `interactive/README.md`, `interactive/COMPONENT-MANIFEST.json`, and `interactive/lessons/chapter-inventory.json`.
3. For final book landing, read `websites/landing/README.md` and `websites/landing/build.mjs`.
4. For experiments, consult `stage1/README.md` and `prototype/`; these are **not** automatically deployable production applications.
5. Deposits under `deposits/` and historical records are separate publication/research workflows. Do not treat superseded readiness reports as current instructions.

## Verified repository and Vercel production mapping
- GitHub: `Joenasriani/thecomposersprompt`, default branch `main`; compared `9018ccce7f71844a948383ef6a8e049b46228169...main` on 2026-11-13 and found **identical**.
- Final-book landing: https://thecomposersprompt-book.vercel.app/ – Vercel production deployment `dpl_cLuDumpxxwNSyvghf4maQDXnckCx` was **READY**, sourced from `main` commit `9018ccce7f71844a948383ef6a8e049b46228169`, with the production domain in its aliases. **Commit parity PASS**, but HTTP content, actual PDF response checksum, and browser/mobile QA **NOT RECHECKED** in this audit.
- Interactive lab: https://thecomposersprompt-lab.vercel.app/ – production deployment `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` was **READY**, sourced from `main` commit `8b249db74ec865ccc69c14180c098ab7ec9293a0`. GitHub compare reports **main ahead by 92 commits** and no commits behind. Therefore **production is NOT source-synchronized**. No interactive deployment performed. Its `interactive/vercel.json` explicitly has `git.deploymentEnabled: false`.
- **Never equate READY with visual/browser/audio/pass status.** Vercel production commit parity is not file-by-file diff against generated build assets.

## Source inventory and release authority
| Area | Authority | State |
| --- | --- | --- |
| Final locked PDF | `book/The_Composers_Prompt_Joe_Nasr.pdf` and lock metadata | Book v1.0.0; immutable source Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`; externally downloaded bytes unverified |
| Book landing | `websites/landing/` | Production git commit matches main; runtime/served PDF bytes not verified |
| Interactive lab | `interactive/` | Production 92 main commits behind; source QA and deployment acceptance not established |
| Root workbook | `index.html` | Separate historical/self-contained interactive edition; not interchangeable with lab |
| Stage 1 experiment | `stage1/` | Vite experimental build, WIP, no production acceptance |
| Editorial prototype | `prototype/` | Prototype, not published final book or live landing |
| Research deposits | `deposits/` | Distinct; preserve published records and rights boundaries |
| Historical guidance | `interactive/archive/historical-guidance/` | Read-only history, never governing handoff |

**Interactive chapter discrepancy:** Inventory documents 37 chapter IDs and the 2026-11-07 source audit reported 36 HTML lesson pages; `interactive/lessons/chapter-33/index.html` was independently fetched on 2026-11-13 and returned 404. Do not describe all 37 as delivered. Full 36-page existence and content parity were not independently re-enumerated in this audit.

## Intellectual property and naming
- The final *The Composer's Prompt: Music Theory and Harmony for Computational Music Prompting* PDF is copyright © 2026 Joseph Ribal Nasr, all rights reserved, free to read; publication credit J. Nasr.
- Existing separately licensed interactive materials retain their applicable CC BY 4.0 grants. Never imply that the locked PDF inherits CC BY 4.0.
- The educational book/companion, Vite experiment, website landing, and external datasets must not silently share version numbers, release claims, or licenses.
- No publication, upload, license change, repository deletion, or production deployment occurred as part of this audit.

## Safe continuation checklist
1. Recheck GitHub main HEAD and the production deployment ID + SHA for **each** domain; if different, supersede this dated baseline.
2. Inspect actual app file tree and deployment roots, compare Vercel build/runtime assets against the correct source commit; do not merely compare README text.
3. Run reproducible tests where possible; separately do desktop/mobile browser, responsive layout, navigation, links, audible audio and music-theory correctness checks. Record commands and results, with NOT RECHECKED when unavailable.
4. Resolve missing Chapter 33 through source/locked-book parity and editorial acceptance; do **not** generate missing lesson content from assumptions.
5. Reconcile the root interactive workbook and lab as separate deployments; identify whether the older root Pages site is intentionally supported before modifying it.
6. Build and test the experimental `stage1/` in isolation; do not merge it into the lab without authorization.
7. Preserve final PDF checksum, metadata, publications, deposits, CI, and all unrelated functionality. Keep one current interactive handoff at `interactive/DEVELOPMENT_HANDOFF.md`.
8. Update factual README/status/handoff **after** verified changes. Archive superseded directions rather than keeping conflicting active instructions.
9. Only deploy the interactive source with explicit deployment authorization, and recheck production aliases and behavior afterwards.

## Evidence limits for 2026-11-13
Direct connector checks: GitHub search/repository, README and selected component source files, Git compare, Vercel deployment metadata. No full Git tree enumeration, local npm/Playwright execution, independent mobile QA, audio playback, PDF binary download/checksum, or public-browser HTTP acceptance was completed. Treat these as open, not PASS.
