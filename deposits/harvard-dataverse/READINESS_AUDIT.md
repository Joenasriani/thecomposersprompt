# Harvard Dataverse readiness audit — 27 October 2026

| Check | Result | Evidence / corrective action |
|---|---|---|
| Correct source repository/main | PASS | Governing GitHub records inspected |
| Final reviewed PDF remains locked | PASS | No edit; Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde` |
| Publication identity and copyright | PASS | Joe Nasr / Joseph Ribal Nasr / 2026 confirmed in records |
| Book is not called a dataset | PASS | Distinct education-book and annotated-data classifications |
| Harvard software vs repository distinguished | PASS | Official Harvard and Dataverse documentation reviewed |
| Standalone book eligible as research dataset | BLOCKED | Book-only submission is outside described research-data purpose |
| Curated educational tables meet Harvard research-data scope | UNKNOWN | Harvard-specific curation/eligibility decision not verified |
| Row-level provenance, source mapping and independent musical audit | FIX | Verify every sourced data value and music-theory assertion |
| Existing candidate dataset actually deposited in assigned GitHub directory | FIX | One source-traceable eight-bar educational example plus codebook now committed; broader private corpus not imported |
| Metadata and README/source/methods/schema templates | FIX | Source-specific metadata candidate, miniature codebook and verification report committed; complete corpus crosswalk still required |
| Candidate data ownership and file-by-file licences | BLOCKED | Requires explicit author decision and rights review |
| Harvard account and Dataverse Collection permissions | UNKNOWN | No authenticated access inspected |
| Duplicate Harvard Dataverse dataset search | NOT RECHECKED | Search/inspect exact title and prior persistent identifier before creating record |
| DOI, approval, administrative screening and indexing | NOT RECHECKED | None claimed; no submission made |
| Final public upload authorization | BLOCKED | Explicit approval required for exact files/rights |

**Final verdict: DEVELOP FURTHER. Readiness: NOT READY.** Do not start Zenodo release work on the assumption Harvard is complete.

References: https://support.dataverse.harvard.edu/getting-started ; https://support.dataverse.harvard.edu/researchers ; https://guides.dataverse.org/en/latest/user/dataset-management.html

## Additional verified work (27 October 2026)
Committed `book_derived_theme_a_8bar.csv`, its codebook, `CANDIDATE_DATA_VERIFICATION.md`, and `DATAVERSE_METADATA_CANDIDATE.json`. The eight-bar extract is a genuine authored symbolic example, not manufactured observations. Dataset-wide source audit and research-data eligibility remain unresolved. No final PDF modifications or external deposits.
