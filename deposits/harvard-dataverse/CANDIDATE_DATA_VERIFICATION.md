# Candidate dataset investigation — 27 October 2026

## Checks actually executed
- Inspected existing private candidate v2.5 files locally. All 14 CSVs opened via Python's `csv.DictReader`; two are intentionally **empty templates**, not collected records.
- Counted candidate rows: 12 `music_semantics`, 48 `chord_events`, 40 `forty_bar_timeline`, 9 `forty_bar_harmonic_anchors`, 20 `arrangement_matrix`, 8 `instructional_evaluation_tasks`, 6 `compositional_cases`, 5 `section_plan`, 5 `arrangement_events`, 3 `comparison_designs`, 4 `cross_book_evidence_map`, 2 `source_register`.
- Confirmed supplied final 159-page PDF full-file SHA256 `f6d9300b778e82d55bfdf084d95c379b03c760c53022dcb88c58ba6b8fc6799c`, corresponding to locked Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`.
- Extracted eight-bar Theme A from chapter 10 and made a separate explicit educational example with its own codebook in this folder. This is **not a replacement for the complete candidate corpus**.

## Findings
**FIX:** Candidate `cross_book_evidence_map.csv` includes Generative Music Systems entries EV003–EV004 whose underlying source book was not inspected; exclude those rows from any final authoritatively sourced dataset unless separately verified. `source_register.csv` includes `SRC_GMS_META`, marked source-reported rather than independently verified; a source bibliography citation is not a verified derivation.

**FIX:** Candidate `forty_bar_timeline.csv` calls many repeated patterns `EXPLICIT_REPEATED_PATTERN`. Check each bar and source locator independently against chapter 20 before treating it as verified. Distinguish design from measured musical realizations.

**FIX:** The complete v2.5 CSV/JSON candidate files remain in a local private review package and are **not committed to this directory**. Prior structural validation does not prove row-level source accuracy or independent musical correctness.

**BLOCKED:** Publication rights of any curated extract and separately reusable dataset must be approved. Harvard's administrative screening cannot substitute for that decision.

**UNKNOWN:** Whether eight-bar educational example by itself, or the larger curated material, qualifies under Harvard Repository's research-data scope. No invented observations will be added for deposit eligibility.

No DOI, public upload, collection approval or model outcomes have been claimed.
