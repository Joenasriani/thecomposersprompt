# Repository component authority and ownership

This repository contains **different artifacts and workflows**, not interchangeable publication editions.

| Component | Present authoritative location | Purpose | Owner/workstream | Status |
| --- | --- | --- | --- | --- |
| Final book | `book/The_Composers_Prompt_Joe_Nasr.pdf` | Immutable, 159-page PDF | Book release | FINAL LOCKED |
| Release metadata | `publication.json` and `book/FINAL_RELEASE_LOCK.json` | Final book identity and checksum | Book release | FINAL LOCKED |
| Interactive workbook | root `index.html` | Existing self-contained interactive edition | Interactive website | SEPARATE EDITION |
| Interactive experiment | `stage1/` | Vite-based experimental interface | Interactive website | WORK IN PROGRESS |
| Editorial prototype | `prototype/` | Prototype, not final PDF or live landing | Interactive website | PROTOTYPE |
| Book landing page | `websites/landing/index.html` | Standalone source, built with locked PDF copied into deploy output | Landing-page workstream | VERCEL READY; PUBLIC HTTP NOT RECHECKED |
| Zenodo preparation | `deposits/zenodo/` | Deposit-specific documentation and metadata | Zenodo workstream | NOT READY / NOT DEPOSITED |
| Harvard Dataverse preparation | `deposits/harvard-dataverse/` | Deposit-specific documentation and metadata | Dataverse workstream | NOT READY / NOT DEPOSITED |
| Landing deployment ownership | `websites/landing/` | Landing source, build script and deployment instructions | Landing-page workstream | VERCEL READY |

## Governing rules

1. The canonical **final book** is `book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. Its file, layout, cover, pages and embedded metadata are locked. It must not be edited as part of any other workstream.
2. The final book title is **The Composer’s Prompt**, subtitle **Music Theory and Harmony for Computational Music Prompting**. Publication credit **J. Nasr**. Copyright holder **Joseph Ribal Nasr**. Rights: © 2026, all rights reserved; free to read, not an open redistribution license.
3. `publication.json` governs final-book descriptive metadata; `book/FINAL_RELEASE_LOCK.json` governs its immutable release. The public canonical URL in `publication.json` is **production deployment READY**; public HTTP and PDF responses NOT RECHECKED.
4. Root `index.html`, `prototype/`, `stage1/`, `CITATION.cff` and the existing root `LICENSE` belong to the **separate interactive edition**, with its pre-existing CC BY 4.0 permissions. Do not apply that license or citation wholesale to the final PDF.
5. Deposit packages must reference the final PDF's locked identity without copying a divergent PDF or claiming a DOI, accession number, institutional approval, peer review or completed deposit before independently verified.
6. The standalone landing source is now `websites/landing/index.html` and its verified-checksum build copies the locked PDF to generated output. The superseded `book/index.html` remains temporarily for compatibility; do not edit it as the new primary source or remove it before checking other deployment dependencies.
7. No PayPal changes, live deployment, repository restructure, file deletion, or public deposit are authorized by this document.

## Legacy source files

The pre-existing `interactive/THE_COMPOSERS_PROMPT.pdf` and `websites/landing/THE_COMPOSERS_PROMPT.pdf` use an older Git blob and are not the current locked final PDF. Preserve them pending a separate dependency review. The landing build uses only the checksum-locked file under `book/`; no website, archive, deposit, or retrieval guide should cite these older files as the final edition.

## Workstream handoff

- Book: read `publication.json`, `book/FINAL_RELEASE_LOCK.json` and `book/README.md`. Read-only for the canonical PDF.
- Interactive: read `interactive/README.md`; modify only interactive-owned files after checking relevant Vercel project.
- Zenodo: read `deposits/zenodo/README.md`; isolate deposit-specific material.
- Harvard Dataverse: read `deposits/harvard-dataverse/README.md`; isolate deposit-specific material.
- Landing: read `websites/landing/README.md`; validate the deployment root before moving the HTML.
