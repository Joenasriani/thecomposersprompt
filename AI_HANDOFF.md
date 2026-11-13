# The Composer's Prompt – authoritative repository-wide AI handoff
**Reconciled:** 2026-11-13. **Repository:** `Joenasriani/thecomposersprompt` (`main`). **Approved final reference artifacts:** author-supplied final locked PDF and https://thecomposersprompt-lab.vercel.app/.

## Non-negotiable authority and source precedence
1. **Published PDF book:** `book/The_Composers_Prompt_Joe_Nasr.pdf` is immutable. The actual author-uploaded 159-page PDF was compared byte-for-byte using Git blob hashing: `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`, identical to the repository's locked blob. `publication.json` and `book/FINAL_RELEASE_LOCK.json` control the book release v1.0.0. Publication credit **J. Nasr**, copyright © 2026 **Joseph Ribal Nasr**, all rights reserved; free to read, not CC BY 4.0.
2. **Approved interactive application:** https://thecomposersprompt-lab.vercel.app/ . Git source owned by `interactive/`; active entry `interactive/index.html`, chapters `interactive/lessons/`, music/audio components in `interactive/music/`. Preserve the currently approved interaction design, audio, routing, and lesson sources. Do not replace live-approved source with an older or experimental version.
3. **Final-book landing:** https://thecomposersprompt-book.vercel.app/ . Source in `websites/landing/` and generated PDF from the locked file; **not** the interactive lab.
4. **Other internal surfaces:** root `index.html` is a separate historical self-contained workbook / GitHub Pages source; `stage1/` is a Vite work-in-progress; `prototype/` is an editorial prototype. `interactive/experiments/` contains preserved experiments. None is the approved production Lab by default.
5. **Separate publishing/data surfaces:** `deposits/zenodo/`, `deposits/harvard-dataverse/`, and `docs/EXTERNAL_PLATFORM_RECONCILIATION_2026-11-06.md`. Zenodo Book DOI `10.5281/zenodo.23689714` and Harvard dataset DOI `10.7910/DVN/STHUVV` are independent artifacts. Older deposit readiness documents can be historical.
6. **Historical operational instructions** are under `interactive/archive/historical-guidance/`, not current authority. Active interactive handoff is `interactive/DEVELOPMENT_HANDOFF.md`. Read that before editing the lab.

## Confirmed final book PDF
- Uploaded PDF page count **159**; Git blob SHA matches locked GitHub PDF exactly.
- The actual final contents and chapter pages contain **Chapter 33 – Advanced Scales, Modes & Computational Composition**. It starts on printed p.110 = PDF page 115, and continues through printed p.122 = PDF page 127. Conclusion begins printed p.123 = PDF page 128.
- PDF is final and must not be modified or re-exported to “fix” the interactive edition.
- Publicly served Vercel/Zenodo/ResearchGate PDF checksums were **not** independently compared here. Do not claim external byte-identical delivery.

## Actual production provenance (verified Vercel metadata, 2026-11-13)
| Site | Production deployment | Deployed Git SHA | Result |
| --- | --- | --- | --- |
| Interactive Lab | `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` | `8b249db74ec865ccc69c14180c098ab7ec9293a0` | READY / approved destination, browser QA not rechecked |
| Book landing | `dpl_3cFPGj37kjYai5cxMwJvsr2ZVeVk` | `56f7ffe9f2f18ca2c05e06f9e633e12e9b0dc137` | READY; served PDF bytes not rechecked |

**Important correction to the earlier “92 commits behind” wording:** GitHub compare `8b249db...9018ccc` shows 92 commits of difference, but **no file changes to interactive lesson HTML, application layout, piano/audio runtime, or core app index**. Differences in `interactive/` are documentation, the chapter-inventory JSON, and a validation test. Other changes affect book/publication/landing work. This means the inspected Git source for the approved Lab's app runtime remains the same; it does **not** certify runtime-asset byte parity or UI/audio browser behavior. Subsequent documentation-only commits increase SHA distance without changing app runtime.

**Deployment control:** `interactive/vercel.json` has `git.deploymentEnabled: false`. Do not change this setting or deploy simply to synchronize commit labels. A documented difference in Git SHA alone is not proof that the approved application is outdated.

## Book-to-interactive coverage gap
- The book has Chapter 33 (verified from the 159-page PDF).
- `interactive/lessons/chapter-inventory.json` lists **37** chapter IDs; prior inspection identified **36** standalone chapter HTML pages.
- `interactive/lessons/chapter-33/index.html` returned 404 from both current main and the **actual Lab deployment source commit** `8b249db`. Do not claim Chapter 33 is absent from the final PDF or that all book chapters have standalone lessons.
- **Status:** open editorial/functional coverage gap, *not* permission to fabricate a lesson or change the approved live UI. Before writing a lesson, inspect the existing homepage reader and routing: Chapter 33 may already have readable manuscript text even without a standalone HTML lesson. Confirm intended chapter-33 UX against book text and the original lab design; obtain verified acceptance before publication.

## Current source state and verification levels
- **PASS – binary provenance:** final uploaded PDF equals GitHub locked PDF Git blob.
- **PASS – deployed source comparison:** no intervening changes to `interactive/` app index, lesson HTML, music engines, or layout files between deployed commit and audited source ref `9018ccc`.
- **PASS – repository docs:** scope, rights, final book contents, URL and deployment metadata reconciled on 2026-11-13.
- **SOURCE PRESENT (not certified):** 36 previously identified interactive lesson HTML pages.
- **MISSING SOURCE:** standalone Chapter 33 page.
- **NOT RECHECKED:** actual Vercel served JS/HTML/PDF bytes; desktop/mobile/touch/audio/notation testing; all-chapter editorial parity; accessibility and complete end-to-end navigation.
- **NOT TOUCHED:** final PDF bytes, code, audio assets, deployment settings, repository licensing and public publication records. No redeployment.

## Safe AI continuation procedure
1. Identify exact workstream and latest Git SHA; compare with correct production deployment's Git SHA.
2. Read `COMPONENTS.md`, appropriate local README, this handoff, then `interactive/DEVELOPMENT_HANDOFF.md` for app work, plus `publication.json`/release lock for book work.
3. Inspect changed files. Do not infer runtime changes from total commit counts; scope comparisons to app paths and generated outputs.
4. Verify actual app in browsers at 320 / 375 / 768 / 1024 / 1440 px, light/dark, keyboard/touch/audio, notation/fallback, navigation/deep links, and accessibility. Run recorded `interactive/` tests before calling PASS; distinguish static from real-device tests.
5. For Chapter 33 compare the final PDF (printed pp.110–122) against existing integrated reader, lesson inventory, and live routes before any UI or content changes.
6. Keep protected PDF and rights boundaries unchanged; experiments are never automatic publication sources.
7. Update `README.md`, `interactive/README.md`, inventory/status/manifest and this handoff **after** proven source changes, with dated evidence and explicit unknowns.
8. No automatic production deployment, release, archive deletion, DOI/publication submission, payment change or license switch.

## Evidence and audit limits
2026-11-13 inspection used local author-uploaded PDF, file page inspection and Git blob hash; GitHub direct file reads and comparisons; Vercel deployment/project metadata. Direct public browser fetch returned cache/access errors; no full automated Git-tree enumeration, npm/browser audio tests, or served-file checksum was completed. Older status claims remain historical and must not be promoted to currently verified PASS.

## Chapter 33 implemented in GitHub source – 2026-11-13

Author requested adding Chapter 33 to the existing interactive lessons. Created `interactive/lessons/chapter-33/index.html` based on the locked 159-page final PDF, and added it to `interactive/index.html` embedded reader source. The existing data-driven chapter navigation now includes it. `interactive/lessons/chapter-inventory.json` reports **37/37 standalone chapter HTML pages SOURCE PRESENT**. Earlier 36/37 and absent Chapter 33 descriptions above are pre-implementation history. The new lesson uses the shared chapter-reference/keyboard/audio framework. **Full source-to-PDF text and figure parity, browser/mobile/audio/notation acceptance, reproducible test execution and live Vercel deployment remain NOT RECHECKED**. The author-approved existing production was not overwritten or redeployed.
