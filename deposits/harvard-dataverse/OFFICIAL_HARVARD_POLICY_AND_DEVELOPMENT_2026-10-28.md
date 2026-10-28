# Harvard Dataverse — official-source development decision (28 October 2026)

## Phase 0 decision
**DEVELOP FURTHER / NOT READY.** The publication type is a **Dataset object**, containing a **nonempirical curated educational reference corpus**, not a book, empirical study, model benchmark, or verified AI performance results. The scientific novelty of the underlying harmony is not claimed; the potential reusable contribution is carefully attributed structured instructional cases. Musicians and educators are the primary beneficiaries; prospective AI researchers may use the examples for *future* evaluations. Current source-backed rows are not sufficient evidence of a tested benchmark.

## Official Harvard Repository rules (as checked 2026-10-28)
1. Harvard's hosted repository is distinct from the general open-source Dataverse software. Harvard uses a **Submit for Review** administrative workflow, screens for misuse and **research-data scope**, and does **not** provide scientific peer review: https://support.dataverse.harvard.edu/getting-started .
2. Researchers outside Harvard may deposit; Harvard's researcher guidance lists **2.5 GB per file** and **1 TB total**: https://support.dataverse.harvard.edu/researchers .
3. Harvard recommends first creating a **Dataverse Collection**, then a **Dataset**. Metadata includes title, author/data collector and description; user guide also lists point-of-contact email and subject as required for dataset creation: https://support.dataverse.harvard.edu/getting-started and https://guides.dataverse.org/en/latest/user/dataset-management.html .
4. A Dataset can contain files, **data dictionary**, methods, README, scripts and metadata. **CSV** files may be ingested as tabular files; provide unambiguous variable definitions and validate encoding, schema, values and matching file metadata: https://guides.dataverse.org/en/latest/user/dataset-management.html .
5. Dataset terms must be selected explicitly. Software documentation warns that the default may be **CC0**, and custom terms are only available when enabled by the relevant installation. Never infer that Harvard's live form offers a particular licence without checking: https://guides.dataverse.org/en/latest/user/dataset-management.html .
6. Harvard's General Terms require depositor ownership/permission and grant preservation, copying/reformatting and redistributing rights to the repository. This is material to any all-rights-reserved file: https://support.dataverse.harvard.edu/harvard-dataverse-general-terms-use .
7. The Harvard repository selection flowchart is oriented especially to Harvard researchers and data generated during research projects; it is **guidance**, not approval of this particular educational corpus: https://support.dataverse.harvard.edu/harvard-repository-selection-flowchart .

## Decision for this exact project
The **159-page final reviewed** book remains at `../../book/THE_COMPOSERS_PROMPT.pdf`, Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`. This workstream must **not** modify the book, copy it into an openly licensed dataset or apply the root interactive workbook's CC BY 4.0.

**Candidate deposit**: the three book-derived CSV examples (eight-bar baseline, six authored cases and corresponding 48 events) and only the documentation necessary to understand and reproduce their *symbolic* content. They constitute **pedagogical authored annotations**, not independent measurements. The six cases are related, not six independent experimental subjects. The 48 event rows are repeated positions nested within these cases, not an n=48 empirical sample. Do not publish claims of statistical significance, objective evaluation accuracy, or music-generation system performance.

**Research-data eligibility: UNKNOWN**. Harvard may deem an educational demonstration outside its research-data scope. Eligibility must be checked with Harvard staff using the exact sample description; expanding records by inference would not make the deposit more legitimate. Do not confuse suitability of Dataverse *software* with acceptance by Harvard's hosted repository.

**Licensing: BLOCKED** until the rights holder explicitly approves a licence for **these CSV and supporting files**; the book is © 2026 Joseph Ribal Nasr, published as Joe Nasr, free to read and all rights reserved. CC BY 4.0 is permissible for data only if deliberately granted; it allows commercial reuse. The record must not inherit the root interactive edition's licence. The legally precise four-line author/copyright declaration is in `RIGHTS_AND_FILE_SCOPE.md`.

## Missing operational inputs
- [BLOCKED] Approve file-specific dataset terms and verify Harvard's live Terms UI, including default selection.
- [UNKNOWN] Real Harvard account, collection hosting permissions, author point-of-contact email and eligibility judgment.
- [FIX] Comprehensive review of the **exact final deposit inventory** and a record-by-record codebook for all three CSVs, including explanation of nested event structure and source chapter locators. Current mini-codebook covers only Theme A.
- [FIX] Produce a reproducible integrity test executed against the exact GitHub CSV bytes, verifying six cases x eight events, key, bar order, duplicates, missing values and source anchors. Do not call broad educational correctness independently validated without audit.
- [NOT RECHECKED] Duplicate Harvard deposit search and related Zenodo DOI metadata `10.5281/zenodo.23689713`; do not assert DOI relation until verified.
- [BLOCKED] Explicit author approval of the exact public upload, destination, terms and files.

## Source-specific questions for Harvard staff
1. Would an **authored, nonempirical reference corpus of chord specifications derived from a published music education book** meet Harvard Dataverse's *research-data scope*, when no participant data, observational recordings or model evaluation data have been collected?
2. Is a personal researcher Dataverse Collection appropriate for an unaffiliated author, and are additional collection-specific fields required?
3. Which dataset terms/custom licence selections are currently enabled in the Harvard-hosted instance, and what is its default?
4. Is a small dataset containing three CSVs plus source-specific codebook and methods adequate *if* the staff determine the scope is eligible?

**No publication, uploaded files, collection creation, Harvard DOI or administrator acceptance has occurred.**
