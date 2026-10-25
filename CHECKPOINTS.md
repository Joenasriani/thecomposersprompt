# Development Checkpoints

**Roadmap:** [Locked Roadmap v1.0](ROADMAP.md)  
**Status as of 2026-10-25:** Stage 1 NOT ACCEPTED. Stage 2 NOT STARTED. Stage 3 NOT STARTED.  
**Rule:** A committed file, merged PR or plausible screenshot is not proof of a tested, accepted release.

## Baseline – confirmed historical repository work

| Item | Status | Evidence or qualification |
| --- | --- | --- |
| Complete existing workbook on `main` | Present | `index.html` |
| Manuscript reading sections | Documented baseline: 42 | README and existing application; must be regression-inventoried |
| Practice rooms | Documented baseline: 11 | README and existing application; must be regression-inventoried |
| License | Present | `LICENSE`: CC BY 4.0 |
| Documentation | Present | README, CONTRIBUTING, CITATION.cff |
| Initial editorial homepage design study | Merged, **not approved** | [PR #1](https://github.com/Joenasriani/thecomposersprompt/pull/1), `prototype/index.html` |
| Three.js integration | NOT IMPLEMENTED | Existing prototype uses SVG / native Web Audio |
| Tone.js integration | NOT IMPLEMENTED | No working integrated exercise established |
| VexFlow integration | NOT IMPLEMENTED | No synchronized notation established |
| Full visual redesign | NOT IMPLEMENTED | Existing workbook UI remains |
| Live visual/audio acceptance testing | NOT VERIFIED | Screenshots are not a complete interaction test |

## Stage 1 – Creative Foundation & Working Prototype

| Checkpoint | State | Required verification |
| --- | --- | --- |
| 1.1 Source/library due diligence | IN PROGRESS | GitHub references, license notices, compatibility record |
| 1.2 Visual identity and responsive design system | OPEN | Reviewed design spec, screenshots at mobile and desktop sizes |
| 1.3 Three.js musical visualization | IMPLEMENTED / UNTESTED | Real note/chord-driven live WebGL effect with graceful fallback |
| 1.4 Tone.js playback integration | IMPLEMENTED / UNTESTED | Pitch/timing verification and mobile interaction |
| 1.5 VexFlow synced notation | IMPLEMENTED / UNTESTED | Notation and audio remain aligned |
| 1.6 Homepage + complete music lesson | OPEN | Navigable, interactive prototype test |
| 1.7 Accessibility and UX checks | OPEN | Keyboard, contrast, reduced-motion and mobile audit |
| 1.8 Gate 1 user acceptance | BLOCKED | Requires verified 1.1–1.7 and explicit approval |

## Stage 2 – Complete Interactive Publication

| Checkpoint | State |
| --- | --- |
| 2.1 All 11 practice rooms redesigned and tested | NOT STARTED |
| 2.2 All 42 reading sections preserved and presented | NOT STARTED |
| 2.3 Compose workspace integrated | NOT STARTED |
| 2.4 Navigation, storage and migration verified | NOT STARTED |
| 2.5 Gate 2 acceptance | NOT STARTED |

## Stage 3 – QA & Public Release

| Checkpoint | State |
| --- | --- |
| 3.1 Comprehensive musical/function regression tests | NOT STARTED |
| 3.2 Responsive/browser/audio performance checks | NOT STARTED |
| 3.3 Accessibility and editorial integrity review | NOT STARTED |
| 3.4 Documentation, licensing, release package | NOT STARTED |
| 3.5 Verified public deployment and Gate 3 acceptance | NOT STARTED |

## Progress log
| Date | Change | Verification | Next |
| --- | --- | --- | --- |
| 2026-10-25 | Locked three-stage roadmap approved in conversation | Decision only, not implementation | Commit governance record |
| 2026-10-25 | Existing editorial prototype had been merged as PR #1 | GitHub file/PR evidence; not feature-complete or approved | Begin true Stage 1 implementation on a new development branch |

## Future checkpoint entry template

```markdown
### YYYY-MM-DD – Checkpoint X.Y
- Branch / PR / commit:
- Files changed:
- Implemented:
- Tested (browser, device, method, outcomes):
- Evidence:
- Known defects:
- Protected baseline regression result:
- Gate state: OPEN / VERIFIED / ACCEPTED / BLOCKED
- Next independent action:
```

Never turn an assumption into a passing checkpoint. Preserve history when correcting erroneous status claims.

### 2026-10-25 – Stage 1 implementation started
- Branch: `feature/stage1-musical-foundation`.
- Files: `stage1/package.json`, `stage1/index.html`, `stage1/src/main.js`, `stage1/src/style.css`, `stage1/README.md`.
- Confirmed from upstream: Three.js, Tone.js, VexFlow all publish MIT licenses; dependency versions pinned. Compatibility and bundled notices remain to be tested.
- Implemented source-level integration: Three.js WebGL chord geometry; Tone.js synth; VexFlow notation; fallback 2D visual.
- Verification status: Source committed only. npm install, build, browser rendering, music theory, audio, accessibility and responsive QA NOT YET VERIFIED.
- Next: Build/test, correct any failed notation API or playback behavior, produce visual evidence and finish one end-to-end lesson.
- Gate 1: BLOCKED pending verification and user acceptance.

### 2026-10-25 – Build verification infrastructure
- Added `.github/workflows/stage1-build.yml` to install dependencies, build the Stage 1 Vite application and upload compiled output.
- Build run: https://github.com/Joenasriani/thecomposersprompt/actions/runs/40208465255
- Verification: CI initially observed IN PROGRESS. Build success and browser rendering not yet certified.
- Local npm network access unavailable in this execution environment.
- Remaining: compilation outcome, WebGL and audio testing, notation checks, mobile and accessibility review.

### 2026-10-25 – CI build confirmation
- GitHub Actions run [40208465255](https://github.com/Joenasriani/thecomposersprompt/actions/runs/40208465255) completed with **success** for commit `54a24ab`.
- Build verification now **PASSED**: dependency installation, Vite build, expected dist output per workflow steps. Earlier failed workflow runs remain part of history.
- Scope of evidence: successful CI compilation only, NOT verified rendering, audio playback, notation accuracy, mobile visual QA, or full Stage 1 acceptance.

### 2026-10-25 – Shared interface and chord-tail refinement (review branch)
- Branch: `design/stage1-shared-ui-foundation`.
- Introduced `stage1/src/ui-foundation.css` as the shared token, layout, responsive header/footer, navigation and control stylesheet; replaced conflicting page-specific CSS in `stage1/src/style.css` with a single import.
- Reworked `stage1/index.html` to use reusable semantic UI classes across the laboratory. No manuscript changes.
- Adjusted Tone.js synthesizer envelope (attack 12 ms, decay 110 ms, sustain 0.22, release 180 ms); prior tones receive `releaseAll`, with new attacks staggered by 55 ms and 460 ms note duration.
- These are source-level changes, not yet listener-approved sound design. Confirm successive chords, rapid clicks, mobile playback, responsive header/footer, notation visibility and full bundle build before merge.
- Stage 1 acceptance remains blocked.

### 2026-10-25 – Light / Dark / System appearance control
- Added an appearance selector in the common application header with Light, Dark and System modes.
- Appearance preferences persist in localStorage where available; System follows the OS preference via prefers-color-scheme and reacts to change.
- The shared UI token sheet defines a coordinated light palette for layout, navigation and form controls; score ink and harmonic visualization colors change with the selected mode.
- Source changes are confined to the development PR #4. GitHub Actions build and human visual/audio accessibility checks required before production deployment.
- Stage 1 remains NOT ACCEPTED; manuscript and existing public book remain unchanged.

### 2026-10-25 – Architecture audit / pre-freeze gate
- Audit: `stage1/ARCHITECTURE-AUDIT.md` on PR #4 branch.
- Verdict: NOT READY TO FREEZE. Monolithic app orchestration, missing validated content schema, routing and behavioral tests are P0 structural gaps.
- Proposed boundaries documented for music data, audio, notation, graphics, app state, theme, routing, Explore/Read/Compose, and tests.
- Latest pre-audit commit CI check successful: https://github.com/Joenasriani/thecomposersprompt/actions/runs/40217388582 . Compile success does not mean browser or accessibility verified.
- Next: Refactor to independent modules and validate before integrating corrected manuscript. Stage 1 Gate 1 remains blocked.
