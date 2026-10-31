# Chapter 1 and 2 pilot acceptance gate

Branch: main. Development only; Vercel deployments are manual.

## Source checks
- The two pilot pages load the shared `lesson-runtime.js` and `lesson.css`.
- Both contain four interactive teaching sections, with contextual examples, listening and verification.
- Chapter 6.5 remains independent until its component API can be migrated safely.
- The complete 37-title inventory is present. Subsection-level parity with the final PDF is still NOT RECHECKED.

## Browser verification (required before scaling)
From `interactive/`, install pinned Playwright dependency and Chromium, then run `npm run serve` in one terminal and `npm run test:browser:pilots` in another. Tests cover 320, 375, 768, 1024 and 1440px, basic navigation, quiz feedback and page errors.

Status: NOT EXECUTED in CI. Source-only tests do not establish visual/audio/browser PASS. Physical-device audio click suppression, VexFlow appearance, screen-reader testing and exact book comparison remain OPEN.

Do not continue mass-producing Chapters 3 onward until pilot browser and source-parity acceptance is complete.

## Expansion checkpoint — 2026-10-31
- Current GitHub source contains book-grounded pilot lessons for Chapters 3, 3.5, 4 and 5. These are **pilots**, not full interactive transcriptions of every subsection or figure.
- Book passages used: Chapter 3 (book pages 8–10), Chapter 3.5 (11–13), Chapter 4 (14–16), Chapter 5 (17–21), using the supplied final 158-page PDF. Distinguish these numbered book pages from physical PDF page indices.
- All new pages mount through the shared runtime, use the common visual tokens and invoke the approved additive piano engine where pitch examples are specified. Chapter 6.5 retains its established specialized keyboard renderer.
- Regression added to `tests/validate.mjs` for six lesson entries, lesson runtime linkage, homepage routing and manual Vercel policy.
- Static CI success is not browser acceptance. Physical browser rendering, tab/focus behavior, screen readers, real audio quality, and actual VexFlow note engraving remain **NOT RECHECKED**.
- Before approving the new material as book-faithful final chapters, review the full text, tables and illustrations against the source, not just the selected concepts used in these pilots.
- Production release is explicitly **NOT AUTHORIZED**; do not run Vercel deploy or change Vercel routing.
