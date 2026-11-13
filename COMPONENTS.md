# Repository component authority and ownership

This repository contains **different artifacts and workflows**, not interchangeable publication editions.

| Component | Present authoritative location | Purpose | Owner/workstream | Status |
| --- | --- | --- | --- | --- |
| Final book | `book/The_Composers_Prompt_Joe_Nasr.pdf` | Immutable, 159-page PDF | Book release | FINAL LOCKED |
| Release metadata | `publication.json` and `book/FINAL_RELEASE_LOCK.json` | Final book identity and checksum | Book release | FINAL LOCKED |
| Root interactive workbook | root `index.html` | Historical self-contained workbook / GitHub Pages source | Interactive website | SEPARATE SOURCE, not canonical Lab |
| Interactive Lab | `interactive/index.html` and `interactive/lessons/` | Canonical source of the user-approved Vercel interactive experience | Interactive website | LIVE PRODUCTION READY AT 6621f9e; 37/37 CHAPTER SOURCES; BROWSER/AUDIO QA UNVERIFIED |
| Interactive experiment | `stage1/` | Vite-based experimental interface | Interactive website | WORK IN PROGRESS |
| Editorial prototype | `prototype/` | Prototype, not final PDF or live landing | Interactive website | PROTOTYPE |
| Book landing page | `websites/landing/index.html` | Standalone source, built with locked PDF copied into deploy output | Landing-page workstream | LIVE PAGE HTTP 200 (2026-11-06); DOWNLOAD HASH UNCHECKED |
| Zenodo record and historical preparation | `deposits/zenodo/` | Published Zenodo book and preserved pre-publication audit | Zenodo workstream | PUBLISHED – LIVE ZENODO API HTTP 200 (2026-11-06); BINARY CHECKSUM UNCHECKED |
| Harvard Dataverse preparation | `deposits/harvard-dataverse/` | Deposit-specific documentation and metadata | Dataverse workstream | COMPANION DATASET PUBLISHED v1.1 (10.7910/DVN/STHUVV); LOCAL CANDIDATE SOURCE CROSSWALK UNVERIFIED |
| Landing deployment ownership | `websites/landing/` | Landing source, build script and deployment instructions | Landing-page workstream | VERCEL READY |

See [external-platform reconciliation (2026-11-06)](docs/EXTERNAL_PLATFORM_RECONCILIATION_2026-11-06.md) for current platform states and verification limits. Historical deposit-readiness documents below are preserved as pre-publication history, not current Zenodo status.

## Governing rules

1. The canonical **final book** is `book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. Its file, layout, cover, pages and embedded metadata are locked. It must not be edited as part of any other workstream.
2. The final book title is **The Composer’s Prompt**, subtitle **Music Theory and Harmony for Computational Music Prompting**. Publication credit **J. Nasr**. Copyright holder **Joseph Ribal Nasr**. Rights: © 2026, all rights reserved; free to read, not an open redistribution license.
3. `publication.json` governs final-book descriptive metadata; `book/FINAL_RELEASE_LOCK.json` governs its immutable release. The public book landing URL returned HTTP 200 on 6 November 2026. Its downloadable PDF checksum has not been compared with the GitHub-locked source.
4. Root `index.html`, `prototype/`, `stage1/`, `CITATION.cff` and the existing root `LICENSE` belong to the **separate interactive edition**, with its pre-existing CC BY 4.0 permissions. Do not apply that license or citation wholesale to the final PDF.
5. Deposit packages must reference the final PDF's locked identity without copying a divergent PDF. Zenodo Book and DOI `10.5281/zenodo.23689714` were **live API verified 6 November 2026**; `10.5281/zenodo.23689713` is its concept DOI. Harvard Dataverse companion dataset `10.7910/DVN/STHUVV` was live API verified **RELEASED v1.1**. Historical local candidate files must not be equated to the eight deposited dataset files without a content comparison. The separate historical Dataverse book-related record `ZCZ0NA` remains publicly unavailable at its tested URL (HTTP 404) with underlying state unknown.
6. The standalone landing source is now `websites/landing/index.html` and its verified-checksum build copies the locked PDF to generated output. The superseded `book/index.html` remains temporarily for compatibility; do not edit it as the new primary source or remove it before checking other deployment dependencies.
7. No PayPal changes, live deployment, repository restructure, file deletion, or public deposit are authorized by this document.

## Release source policy

The website build and interactive application reference the single canonical locked final book; all delivery files must be checksum-identical. The landing build uses only the checksum-locked file under `book/`; no website, archive, deposit, or retrieval guide should cite these older files as the final edition.

## Workstream handoff

- Book: read `publication.json`, `book/FINAL_RELEASE_LOCK.json` and `book/README.md`. Read-only for the canonical PDF.
- Interactive: read `interactive/README.md`; modify only interactive-owned files after checking relevant Vercel project.
- Zenodo: read `deposits/zenodo/README.md`; isolate deposit-specific material.
- Harvard Dataverse: read `deposits/harvard-dataverse/README.md`; isolate deposit-specific material.
- Landing: read `websites/landing/README.md`; validate the deployment root before moving the HTML.

## Verified final-reference and latest live release – 13 November 2026

- **Locked book:** Author-uploaded final PDF, 159 physical pages, exactly matches repository Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. Chapter 33 is present at printed pp.110–122 (PDF pp.115–127). The final PDF, release lock and rights remain unchanged.
- **Live Interactive Lab:** https://thecomposersprompt-lab.vercel.app/ . Vercel production **READY**, deployment `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf`, Git source commit `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`, correct canonical domain alias. GitHub `main` matched this release commit during post-deploy comparison.
- **Chapter 33 now live in deployment source:** `interactive/index.html` embeds Chapter 33 and generates its lesson navigation; `interactive/lessons/chapter-33/index.html` provides the new standalone reference lesson, and `interactive/lessons/chapter-inventory.json` contains **37/37** source-present records. Shared theory-check exercise exists. A focused **9/9 static check** passed. **Full browser/device/audio/notation QA and PDF figure-by-figure parity have not been established.**
- **Separate book landing:** https://thecomposersprompt-book.vercel.app/ , last independently checked READY deployment `dpl_3cFPGj37kjYai5cxMwJvsr2ZVeVk`, source `56f7ffe9f2f18ca2c05e06f9e633e12e9b0dc137`. This is a separate project, not an interactive release. Its served PDF checksum remains unverified.
- **Retrieval/documentation precedence:** `AI_HANDOFF.md`, `interactive/DEVELOPMENT_HANDOFF.md`, `llms.txt` and `interactive/README.md` report the current release. Date-labeled notes under the historical archive are historical only.
- **No additional runtime publication:** Updating repository documentation later does not itself create a new deployment. When comparing `main` to the live SHA, distinguish documentation changes from application-code changes. Preserve disabled automatic Git deployments and publication/rights boundaries.
