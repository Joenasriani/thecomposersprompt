# Repository component authority and ownership

This repository contains **different artifacts and workflows**, not interchangeable publication editions.

| Component | Present authoritative location | Purpose | Owner/workstream | Status |
| --- | --- | --- | --- | --- |
| Final book | `book/The_Composers_Prompt_Joe_Nasr.pdf` | Immutable, 159-page PDF | Book release | FINAL LOCKED |
| Release metadata | `publication.json` and `book/FINAL_RELEASE_LOCK.json` | Final book identity and checksum | Book release | FINAL LOCKED |
| Root interactive workbook | root `index.html` | Historical self-contained workbook / GitHub Pages source | Interactive website | SEPARATE SOURCE, not canonical Lab |
| Interactive Lab | `interactive/index.html` and `interactive/lessons/` | Canonical source of the user-approved Vercel interactive experience | Interactive website | GIT RUNTIME SOURCE MATCHES DEPLOYED COMMIT, FULL LIVE QA UNVERIFIED |
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

## Verified final-reference reconciliation – 13 November 2026

- **Approved final book:** author-uploaded 159-page `The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`, byte-identical to the existing locked repository PDF. Chapter 33 exists in the book on printed pages 110–122 (PDF pages 115–127).
- **Approved interactive experience:** https://thecomposersprompt-lab.vercel.app/ . Vercel production is READY from commit `8b249db74ec865ccc69c14180c098ab7ec9293a0`. Compared with the pre-documentation GitHub head `9018ccc`, **no changes occurred in interactive lesson HTML, audio engines, or application layout files**. The 92 intervening commits include documentation, an inventory JSON change, an interactive validation test change, and other book/publication work. Therefore application runtime source was not blindly copied or overwritten. Actual served HTML/assets, browser QA, and mobile/audio operation remain NOT RECHECKED.
- **Chapter 33:** the matching standalone lesson file is absent from current GitHub main **and** the production deployment's source commit. Do not claim every final-book chapter has an HTML lesson or generate an unapproved replacement.
- **Approved final-book landing:** https://thecomposersprompt-book.vercel.app/ . Production deployment `dpl_3cFPGj37kjYai5cxMwJvsr2ZVeVk` is READY and reports Git source commit `56f7ffe9f2f18ca2c05e06f9e633e12e9b0dc137`; this is a documentation-only commit, not a claim of new book content.
- Full evidence/limits are in [AI_HANDOFF.md](AI_HANDOFF.md). No application deployment, protected PDF edit, license change, or publication upload made during reconciliation.
