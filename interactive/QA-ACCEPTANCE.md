# Interactive Lab – QA acceptance evidence (current: 13 November 2026)

## Verified live release
- **Canonical:** https://thecomposersprompt-lab.vercel.app/
- **Project/deployment:** `thecomposersprompt-lab` / `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf`.
- **Source Git SHA:** `6621f9e1afd0f147ad104a222b1bab0c3c118e2a` on `main`. At post-deployment inspection, `main` compared **identical** to the deployed commit.
- **Build:** Vercel log showed successful clone, completed build and “Deployment completed”; status **READY**, official alias assigned without errors.
- **Chapter inventory:** 37/37 HTML lesson sources present; Chapter 33 was in the deployed Git source and the embedded reader.

## Verification matrix
| Gate | Requirement | Evidenced status |
| --- | --- | --- |
| Repository source coverage | 37 chapter IDs, 37 corresponding standalone HTML lesson pages | **SOURCE PRESENT 37/37**; not complete content QA |
| Chapter 33 structure/wiring | Reader entry, link generation, standalone HTML, shared piano/audio/notator, theory check, tests/inventory | **PASS 9/9 static inspection checks**, not executed end-to-end |
| Deployment/build | Correct Vercel project, new production Git source, READY, official alias | **PASS – Vercel metadata + build log** |
| Protection | No final PDF or existing 36 chapter HTML files overwritten by the Chapter 33 change | **PASS – scoped Git comparison** |
| Automated Node tests | `cd interactive && npm install && npm test` | **NOT EXECUTED/NOT VERIFIED** |
| Playwright/browser suite | `npm run test:browser` in supported environment | **NOT EXECUTED/NOT VERIFIED** |
| Browser content/routes | Actual rendered Lab homepage and `/lessons/chapter-33/`, navigation and response bodies | **NOT INDEPENDENTLY VERIFIED** |
| Responsive/mobile/theme | 320/375/768/1024/1440px; both themes; no overflow | **NOT RECHECKED** |
| Audio and touch | Sequential scale pitches, unlock, tap, no stuck notes, envelope | **NOT RECHECKED ON HARDWARE** |
| Engraving | VexFlow 5.0.0 scale notation, spelling, clefs, accidentals, fallback | **NOT RECHECKED IN BROWSER** |
| Accessibility | Keyboard interaction, focus, reduced motion, screen reader, contrast | **NOT RECHECKED** |
| Book parity | Accurate conceptual relation of Chapter 33 with locked final PDF pp.110–122 | **ADAPTED SOURCE**, not full text/figure transcription |
| External PDF delivery | Served PDF downloads match protected book blob | **NOT RECHECKED** |

## Source checks actually performed
Nine focused static checks passed: 1. lesson structure/shared module; 2. scale-kind sequential reference playback routing; 3. four seven-pitch A-reference arrays; 4. exactly one Chapter 33 reader entry directly before Appendix A; 5. 37 source-present inventory records; 6. reader HTML closing tags and final module; 7. practice module active Chapter 33 question; 8. source test expectations updated to 37 lessons/43 reader entries; 9. `git.deploymentEnabled: false` guard preserved.

These checks are **not** an execution of the complete `npm test` or browser suite. They do not validate audio synthesis, visual correctness, full educational parity, network delivery, or third-party script availability. The final PDF is separately locked; the new lesson uses curated scales/exercises and does not reproduce all original printed figures.

## Release and continuation
The 13 November 2026 production deployment succeeded from commit `6621f9e`. The earlier release `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` is **historical**. Subsequent documentation-only GitHub commits are **not** new production releases; they do not require changing the manual-only Vercel setting.

For further release acceptance, run and record complete Node/browser tests, responsive/accessible/mobile/audio verification, and actual served content checks. Do not promote an unrun gate to PASS. Active operational reference: [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md).
