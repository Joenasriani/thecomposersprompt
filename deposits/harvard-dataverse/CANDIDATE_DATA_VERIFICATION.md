**Current-release status (2026-11-03): FIX – Any previously recorded binary or derived-data checks below are historical and are NOT RECHECKED against the current locked PDF. Source-data checks must be rerun before deposit.**

# Candidate dataset investigation — 27 October 2026

## Checks actually executed
- Inspected existing private candidate v2.5 files locally. All 14 CSVs opened via Python's `csv.DictReader`; two are intentionally **empty templates**, not collected records.
- Counted candidate rows: 12 `music_semantics`, 48 `chord_events`, 40 `forty_bar_timeline`, 9 `forty_bar_harmonic_anchors`, 20 `arrangement_matrix`, 8 `instructional_evaluation_tasks`, 6 `compositional_cases`, 5 `section_plan`, 5 `arrangement_events`, 3 `comparison_designs`, 4 `cross_book_evidence_map`, 2 `source_register`.
- Source PDF identity in the current release is the locked Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`; independent SHA-256 and dataset provenance remain NOT RECHECKED.
- Extracted eight-bar Theme A from chapter 10 and made a separate explicit educational example with its own codebook in this folder. This is **not a replacement for the complete candidate corpus**.

## Findings
**FIX:** Candidate `cross_book_evidence_map.csv` includes Generative Music Systems entries EV003–EV004 whose underlying source book was not inspected; exclude those rows from any final authoritatively sourced dataset unless separately verified. `source_register.csv` includes `SRC_GMS_META`, marked source-reported rather than independently verified; a source bibliography citation is not a verified derivation.

**FIX:** Candidate `forty_bar_timeline.csv` calls many repeated patterns `EXPLICIT_REPEATED_PATTERN`. Check each bar and source locator independently against chapter 20 before treating it as verified. Distinguish design from measured musical realizations.

**FIX:** The complete v2.5 CSV/JSON candidate files remain in a local private review package and are **not committed to this directory**. Prior structural validation does not prove row-level source accuracy or independent musical correctness.

**BLOCKED:** Publication rights of any curated extract and separately reusable dataset must be approved. Harvard's administrative screening cannot substitute for that decision.

**UNKNOWN:** Whether eight-bar educational example by itself, or the larger curated material, qualifies under Harvard Repository's research-data scope. No invented observations will be added for deposit eligibility.

No DOI, public upload, collection approval or model outcomes have been claimed.
