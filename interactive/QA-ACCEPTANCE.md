# Interactive QA acceptance matrix – updated 2026-11-13

**Current operational authority:** [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md). [Earlier QA assumptions](archive/historical-guidance/2026-11-07/QA-ACCEPTANCE.md) are retained for history only.

| Area | Required observation | Status at this documentation audit |
| --- | --- | --- |
| Source completeness | 37 inventory IDs map to standalone HTML lesson pages | **36/37 previously identified; Chapter 33 exists in the final PDF, but dedicated lesson HTML absent at deployed source and current main** |
| Automated source and music tests | Run `cd interactive && npm install && npm test` on latest checked out SHA | **NOT RECHECKED** |
| Browser pilot and chapter tests | Run `npm run test:browser` with installed Chromium, capture results and console | **NOT RECHECKED** |
| Responsive UI | Validate 320, 375, 768, 1024, 1440px, overflow, both themes | **NOT RECHECKED** |
| Musical and notation correctness | Review intervals, pitch/spellings, chords, timing, VexFlow clefs/accidentals/ledger lines vs audio | **NOT RECHECKED** |
| Audio/touch | Verify real-device unlock, chord scheduling, click-free attack/release and no stuck notes | **NOT RECHECKED** |
| Accessibility | Keyboard focus, semantics, reduced motion, screen reader and contrast | **NOT RECHECKED** |
| Content parity | Read-only compare every lesson text/diagram/exercise to locked final book | **NOT RECHECKED** |
| Deployment | Inspect current Vercel commit, routes, CDN dependency, HTTP and device behavior | **READY production metadata VERIFIED** at Git SHA `8b249db`; no intervening lesson HTML/homepage/audio source changes in inspected compare; **actual browser/device/served assets NOT RECHECKED**; automatic deployment disabled |
| Rights | Preserve reserved-rights locked book and existing CC BY interactive grant; audit third-party notices | **GUARDRAIL ACTIVE; specific notices NOT RECHECKED** |

An HTML page, historical CI pass, or HTTP 200 is not browser acceptance. No production deployment is authorized by this audit.

## New implementation, acceptance pending – 13 November 2026

Chapter 33 is now SOURCE PRESENT in both the dedicated lesson route and the embedded reader; the source inventory is 37/37. Earlier missing-source statuses in the historical matrix above are superseded. New validation assertions added to `tests/validate.mjs`; test execution, audio notation, browser viewport QA, exact chapter text/figure parity and production promotion remain NOT RECHECKED. Do not claim live availability before Vercel deployment and checks.

## Chapter 33 focused static verification – 13 November 2026

Nine direct source-level checks were performed against connected GitHub main after the Chapter 33 addition. **9/9 PASS** for these limited invariants: standalone page structure and shared import; scale-kind sequential playback routing; pitch-spelling of four A-reference examples; exactly one Chapter 33 reader entry before Appendix A; 37 inventory entries marked source-present; reader HTML closing tags and final module; Chapter 33 theory check wired in the shared practice controller; test assertions updated to 37 lesson sources and 43 reading entries; and manual-only deployment guard retained. These are **static inspection checks**, not a full execution of `npm test` or browser tests.

The GitHub diff from `5d8d24f` to current main confirms: **no modifications to the immutable book PDF**, **no existing chapter-N/index.html pages overwritten**; new Chapter 33 page, embedded reader source, inventory, shared exercise registry, test assertions and documentation were changed. The authored HTML is a **curated adaptation of the PDF Chapter 33**. It is **not a page-for-page transcription**: book figures/engraved scale diagrams were not reproduced individually. Therefore PDF visual/figure parity and full editorial verbatim parity are **OPEN**, not PASS.

**Independent execution not established:** No GitHub Actions workflow runs were associated with audit commit `ab4fa8e` in the checked PR-filtered workflow endpoint. The combined commit status reported a success for **Vercel book landing**, not for the Lab's interactive browser/audio tests. The live Lab URL could not be fetched reliably through the available public web client (cache/access error). No production Lab deploy performed. Do not mark production, audio, mobile, dark/light and accessibility gates as PASS on this basis.
