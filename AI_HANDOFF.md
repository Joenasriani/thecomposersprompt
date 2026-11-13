# The Composer's Prompt – authoritative cross-workstream AI handoff
**Last verified release:** 2026-11-13. Repository `Joenasriani/thecomposersprompt`, default branch `main`. This document and `interactive/DEVELOPMENT_HANDOFF.md` are active instructions; older guidance in `interactive/archive/historical-guidance/` is historical only.

## Current authoritative artifacts
| Surface | Authority | Verified release / constraints |
| --- | --- | --- |
| **Final book** | `book/The_Composers_Prompt_Joe_Nasr.pdf` | Final locked 159-page PDF; Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`; author-uploaded final matches repository file. Book v1.0.0. |
| **Live Interactive Lab** | https://thecomposersprompt-lab.vercel.app/ | Vercel READY production deployment `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf` built from `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`; domain alias assigned without error. GitHub `main` matched deployed SHA in immediate post-deploy comparison. |
| **Book landing** | https://thecomposersprompt-book.vercel.app/ | Separate Vercel READY deployment last independently inspected: `dpl_3cFPGj37kjYai5cxMwJvsr2ZVeVk`, Git SHA `56f7ffe9f2f18ca2c05e06f9e633e12e9b0dc137`. |
| **Root legacy workbook** | root `index.html` / GitHub Pages | Separate historical interactive source; **not** the canonical Lab. |
| **Experiments** | `stage1/`, `prototype/`, `interactive/experiments/` | Preserve, do not merge into production without explicit authorization. |
| **Academic deposits** | `deposits/` and `docs/EXTERNAL_PLATFORM_RECONCILIATION_2026-11-06.md` | Separate Zenodo book DOI `10.5281/zenodo.23689714` and Harvard dataset `10.7910/DVN/STHUVV`; historic external-platform checks are date-specific. |

## Final book and coverage
The final locked PDF definitively includes **Chapter 33 – Advanced Scales, Modes & Computational Composition** on printed pp.110–122 (physical PDF pp.115–127), after Chapter 32 and before the conclusion. It must not be edited or silently replaced to align with an interactive lesson. © 2026 Joseph Ribal Nasr; publication credit **J. Nasr**; all rights reserved, free to read. Existing CC BY 4.0 licenses for previously licensed interactive materials **do not apply to the final PDF**.

The deployed Interactive Lab Git source includes **37 of 37** standalone chapter lesson files, including `interactive/lessons/chapter-33/index.html`. `interactive/index.html` embeds **43** reading entries (preface + 36 numbered/supplementary chapters + six appendices), including Chapter 33, and dynamically renders chapter links. `interactive/lessons/chapter-practice.js` adds Chapter 33's scale-comparison theory check. The scale lesson uses existing shared audio/keyboard/notation modules, rather than rewriting earlier lessons. The new lesson is an **adaptation** of the final PDF chapter, **not** a verified verbatim transcription of all its tables, figures or engravings.

## Evidence-backed QA and deployment policy
- **PASS:** locked book blob identity; author-uploaded PDF page count and Chapter 33 presence.
- **PASS:** focused Chapter 33 static source inspection **9/9** (structure, data, reader insertion, navigation, lesson contract/source wiring, selected note spellings, theory check, inventory/test guards).
- **PASS:** Vercel new production build, deployment READY, correct official alias, Git commit `6621f9e` and immediate GitHub `main` parity. Build event log confirms deployment completion.
- **NOT RECHECKED / NOT CERTIFIED:** full `npm test` and Playwright execution, public browser rendered response, mobile widths, keyboard and touch interactions, actual audio/synthesis performance, notation engraving, accessibility, all-chapter theory checks, full PDF text/figure parity, independent externally served PDF checksums.
- **Deployment setting:** `interactive/vercel.json` intentionally disables automatic Git deployment. The 13 November release was a one-off explicit production deploy. **Documentation-only changes after commit `6621f9e` should not trigger another deployment** and must not be misrepresented as changes to the live app.

## Safe continuation for an AI or developer
1. Read `COMPONENTS.md`, this handoff, relevant component README, and `interactive/DEVELOPMENT_HANDOFF.md` for Lab work; archive records are not current instructions.
2. Identify exact component, branch, live deployment ID and Git source SHA. Compare changed paths; total SHA/commit divergence alone is not evidence of runtime drift.
3. Test changes in isolation. For the Lab run `cd interactive && npm install && npm test`, and Playwright/browser QA where available. Record PASS only with actual execution and evidence.
4. Preserve original approved UX, chapter content, audio behavior and accessibility. Never recreate missing files from an old audit once a current file exists.
5. Chapter 33 verification priorities: page and reader navigation, scale pitches and displayed notation, sequential sample playback, learning check, responsive themes, chapter content vs locked book. Keep source adaptations labeled as such.
6. Preserve locked PDF, release metadata, rights, separate deposits, root workbook and experiments. Do not change external publication/DOI, payment setup, CI, licenses or app deployment settings as incidental actions.
7. On validated changes, update `README.md`, `COMPONENTS.md`, `interactive/README.md`, `interactive/DEVELOPMENT_HANDOFF.md`, `interactive/QA-ACCEPTANCE.md`, `interactive/COMPONENT-MANIFEST.json`, chapter inventory and retrieval `llms.txt`, distinguishing code/source parity from deployment and browser verification.
8. Explicit user instruction is required for another public release. Check current live deployment again before reporting its state.

## Verification limits and dates
Verified directly on 13 November 2026: GitHub `main` versus Vercel Lab source SHA `6621f9e`; Vercel deployment metadata and successful build events; source-level Chapter 33 checks; uploaded final-book PDF and repository blob matching (earlier in the session). Public web browser and full functional tests remain unverified. Do not assert external platform status beyond its last independently checked date.
