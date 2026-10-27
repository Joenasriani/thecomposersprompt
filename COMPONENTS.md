# Repository component authority and ownership

This repository contains **different artifacts and workflows**, not interchangeable publication editions.

| Component | Present authoritative location | Purpose | Owner/workstream | Status |
| --- | --- | --- | --- | --- |
| Final book | `book/THE_COMPOSERS_PROMPT.pdf` | Immutable, 159-page PDF | Book release | FINAL LOCKED |
| Release metadata | `publication.json` and `book/FINAL_RELEASE_LOCK.json` | Final book identity and checksum | Book release | FINAL LOCKED |
| Interactive workbook | root `index.html` | Existing self-contained interactive edition | Interactive website | SEPARATE EDITION |
| Interactive experiment | `stage1/` | Vite-based experimental interface | Interactive website | WORK IN PROGRESS |
| Editorial prototype | `prototype/` | Prototype, not final PDF or live landing | Interactive website | PROTOTYPE |
| Book landing page | `book/index.html` | Existing landing source at current configured Vercel root | Landing-page workstream | PRE-DEPLOYMENT; PATH TRANSITION PENDING |
| Zenodo preparation | `deposits/zenodo/` | Deposit-specific documentation and metadata | Zenodo workstream | NOT READY / NOT DEPOSITED |
| Harvard Dataverse preparation | `deposits/harvard-dataverse/` | Deposit-specific documentation and metadata | Dataverse workstream | NOT READY / NOT DEPOSITED |
| Landing deployment ownership | `websites/landing/` | Landing-page instructions, checks and future migration | Landing-page workstream | PREPARATION |

## Governing rules

1. The canonical **final book** is `book/THE_COMPOSERS_PROMPT.pdf`, Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`. Its file, layout, cover, pages and embedded metadata are locked. It must not be edited as part of any other workstream.
2. The final book title is **The Composer’s Prompt**, subtitle **Music Theory and Harmony for Computational Music Prompting**. Publication credit **Joe Nasr**. Copyright holder **Joseph Ribal Nasr**. Rights: © 2026, all rights reserved; free to read, not an open redistribution license.
3. `publication.json` governs final-book descriptive metadata; `book/FINAL_RELEASE_LOCK.json` governs its immutable release. The public canonical URL in `publication.json` is **planned, NOT RECHECKED** until Vercel verification.
4. Root `index.html`, `prototype/`, `stage1/`, `CITATION.cff` and the existing root `LICENSE` belong to the **separate interactive edition**, with its pre-existing CC BY 4.0 permissions. Do not apply that license or citation wholesale to the final PDF.
5. Deposit packages must reference the final PDF's locked identity without copying a divergent PDF or claiming a DOI, accession number, institutional approval, peer review or completed deposit before independently verified.
6. The existing landing HTML remains at `book/index.html` **temporarily** for compatibility with the planned Vercel Root Directory `book`. The folder `websites/landing/` is the deployment workstream's home; move the actual HTML source there only as a separate, coordinated deployment-path change after verifying Vercel settings. Do not maintain two untracked HTML copies.
7. No PayPal changes, live deployment, repository restructure, file deletion, or public deposit are authorized by this document.

## Workstream handoff

- Book: read `publication.json`, `book/FINAL_RELEASE_LOCK.json` and `book/README.md`. Read-only for the canonical PDF.
- Interactive: read `interactive/README.md`; modify only interactive-owned files after checking relevant Vercel project.
- Zenodo: read `deposits/zenodo/README.md`; isolate deposit-specific material.
- Harvard Dataverse: read `deposits/harvard-dataverse/README.md`; isolate deposit-specific material.
- Landing: read `websites/landing/README.md`; validate the deployment root before moving the HTML.
