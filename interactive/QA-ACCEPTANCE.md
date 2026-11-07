# Interactive QA acceptance matrix – 2026-11-07

**Current operational authority:** [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md). [Earlier QA assumptions](archive/historical-guidance/2026-11-07/QA-ACCEPTANCE.md) are retained for history only.

| Area | Required observation | Status at this documentation audit |
| --- | --- | --- |
| Source completeness | 37 inventory IDs map to HTML lesson pages | **36/37 source present; chapter-33 absent** |
| Automated source and music tests | Run `cd interactive && npm install && npm test` on latest checked out SHA | **NOT RECHECKED** |
| Browser pilot and chapter tests | Run `npm run test:browser` with installed Chromium, capture results and console | **NOT RECHECKED** |
| Responsive UI | Validate 320, 375, 768, 1024, 1440px, overflow, both themes | **NOT RECHECKED** |
| Musical and notation correctness | Review intervals, pitch/spellings, chords, timing, VexFlow clefs/accidentals/ledger lines vs audio | **NOT RECHECKED** |
| Audio/touch | Verify real-device unlock, chord scheduling, click-free attack/release and no stuck notes | **NOT RECHECKED** |
| Accessibility | Keyboard focus, semantics, reduced motion, screen reader and contrast | **NOT RECHECKED** |
| Content parity | Read-only compare every lesson text/diagram/exercise to locked final book | **NOT RECHECKED** |
| Deployment | Inspect current Vercel commit, routes, CDN dependency, HTTP and device behavior | **NOT VERIFIED; automatic deployment disabled** |
| Rights | Preserve reserved-rights locked book and existing CC BY interactive grant; audit third-party notices | **GUARDRAIL ACTIVE; specific notices NOT RECHECKED** |

An HTML page, historical CI pass, or HTTP 200 is not browser acceptance. No production deployment is authorized by this audit.
