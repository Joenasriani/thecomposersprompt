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
