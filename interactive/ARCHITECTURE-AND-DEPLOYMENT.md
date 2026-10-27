> **CURRENT OWNERSHIP CONTRACT (2026-10-27):** `interactive/` is this standalone application's ONLY writable root. The repository includes independent websites, book content and other workstreams. All development, assets, docs and tests remain under `interactive/`; external root files, `.github/` and sibling directories are read-only unless separately authorized. Earlier notes below are archival observations; where they conflict with the current source, see [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md), [PROJECT_STATUS.md](PROJECT_STATUS.md) and [COMPONENT-MANIFEST.json](COMPONENT-MANIFEST.json). The Chapter 6.5 lesson and music/staff models ARE implemented under `interactive/`, contrary to older pre-migration statements.

# Interactive edition — component inventory and deployment contract

Audit: 2026-10-27. Scope: interactive-owned artifacts only. This document records observed source and Vercel API evidence; it does not authorize a migration.

## Identity
- Interactive educational experience: **The Composer’s Prompt** (software / educational website), a separate edition from the book.
- Book source of musical facts: `book/THE_COMPOSERS_PROMPT.pdf` on `main`, 159 pages, Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`. Read-only reference. Book metadata and release lock must not be modified as part of interactive development.
- Published under Joe Nasr; copyright holder Joseph Ribal Nasr. Distinguish the book's reserved rights from rights granted for earlier interactive content.

## Source-of-truth inventory
| Path | Observed role | Runtime/build | Status |
| --- | --- | --- | --- |
| `/index.html` | Existing interactive website; approximately 420 KB source, 42 reading sections and 11 practice rooms per README | Standalone HTML/CSS/JS; no build required | EXISTING ENTRY POINT / DO NOT MOVE |
| `/prototype/index.html` | Editorial/design mockup | Standalone HTML | PROTOTYPE |
| `/stage1/index.html` and `/stage1/src/` | Initial harmonic laboratory with Three.js/Tone.js/VexFlow | Vite; npm build | EXPERIMENT |
| `/interactive/README.md` | Workstream guidance | None | OWNED |
| `/interactive/` proposed lesson modules | Future consolidated lessons, music model, UI and tests | Not yet selected | PLANNED; NOT IMPLEMENTED |
| `/book/` | Published PDF and separate landing-page compatibility assets | Not interactive source | READ-ONLY |
| `/websites/landing/` | Separate book website | Separate Vercel project | OUT OF SCOPE |
| `/deposits/` | Zenodo/Dataverse packages | Independent | OUT OF SCOPE |

## Deployment findings and uncertainty
- GitHub Pages interactive URL is documented as `https://joenasriani.github.io/thecomposersprompt/`; the repository-root `index.html` is its intended static entry point. GitHub Pages active publishing source and public HTTP could not be independently confirmed in this audit: **NOT RECHECKED**.
- Connected Vercel `thecomposersprompt-lab` project ID `prj_9WZWGf5PTxXP90SloTeGncV4DWJH`, framework Vite. A READY target=production deployment `dpl_7Y4eGwNEYYfDBhcMZD8iCpJG4VLF` reports Git ref `main`, commit `ae163513c444ff613a95d06b4bac6a73cb705ce3`. The separate `thecomposersprompt-book` Vercel project exists; do not modify it.
- Vercel API summary did not expose the lab project's **rootDirectory, buildCommand, installCommand or outputDirectory**; do not infer them from framework alone. Public route/browser checks were unavailable; **UNKNOWN / NOT RECHECKED**.
- A separate development PR #4 (`design/stage1-shared-ui-foundation`) includes the Chapter 6.5 lesson prototype, tests and architectural experiments. It is not the source of the current `main` root application.

## Migration gate: zero-risk approach
1. Maintain `/index.html` as the existing production entry point. Do not move, rewrite or redirect it yet.
2. Create and test future lessons in `interactive/` while preserving original data, exercise code, keyboard mapping, synthesized audio, progress storage and links.
3. Map all 11 original rooms and existing manuscript sections to the new navigation. Never equate those legacy sections with the new 159-page book's chapter count.
4. Independently test the local build, music pitch/notation/keyboard match, keyboard focus and screen-reader labels, light/dark, 320px mobile and desktop viewport.
5. Check Vercel source root and branch settings, deploy a nonproduction preview, run browser/audio smoke tests and obtain user approval before any entry-point change.
6. If migrating, use reversible steps and verified redirects/assets only after proving parity. Record differences; do not call missing behavior 'removed by design.'

## License provenance
- Pre-existing interactive workbook and its already granted CC BY 4.0 permissions remain intact; `/LICENSE` and `/CITATION.cff` describe that existing interactive edition.
- Newly authored interactive lesson text, code, figures and musical examples require an explicit rights decision; do not label them CC BY 4.0 or all-rights-reserved by inheritance.
- Final PDF remains separate, free to read, all rights reserved. Reproducing its prose/figures in a separately distributed app requires deliberate authorization and attribution rather than assuming repository-wide CC permissions. The user has authorized interactive educational adaptations while prohibiting alteration of the PDF.
- Third-party libraries remain governed by their own MIT or other dependency licenses.

## Verification status
| Test | Status |
| --- | --- |
| Existing entry point and directory inventory | PASS |
| Book/software separation | PASS |
| Current Vercel project identity and latest deployment source | PASS |
| Exact Vercel root/build configuration | UNKNOWN |
| GitHub Pages current settings and HTTP routes | NOT RECHECKED |
| Legacy 11-room behavior/feature parity | NOT RECHECKED |
| New lesson musical and accessibility audit | NOT RECHECKED |
| Browser audio, desktop/mobile responsive QA | NOT RECHECKED |
| Production deploy after restructure | BLOCKED — no restructure authorized or performed |

No application files, publishing files or deployment configuration changed in this audit.
