# Interactive development changelog

> **Current authority:** [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md), reconciled 13 November 2026. The older dated “Current baseline” below is historical and **not** a current production deployment claim. The obsolete 728d435 READY note and obsolete/index.html claim were superseded; do not act on them.

## 2026-10-27 — Continuity and repository ownership
- Declared `interactive/` the sole application root in a multi-project repository.
- Updated machine-readable inventory and added handoff, status, chapter register, design and theory rules.
- Explicitly recorded absent light-theme logo, unknown browser QA and read-only sibling projects.
- Preserved existing applications, lesson source, external CI workflows and authoritative final book unchanged.

## 2026-10-27 — Reference lesson development
- Added Chapter 6.5 chord/audio demonstrations, responsive keyboards, harmonic reference display and initial staff notation.
- Adopted minimum seven white keys; expanded display only for required pitch range.
- Added static validation and music/staff-model fixtures.

These are source-history summaries, not proof of independently checked browser behavior.

## 2026-10-27 — Browser acceptance harness
- Added isolated Playwright Chromium smoke suite under `interactive/tests/` for Chapter 6.5.
- Browser URL could not be accessed by available runtime; browser QA BLOCKED, component extraction deferred.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.

## 2026-10-28 — Repository-driven layout remediation
- Removed obsolete image-logo CSS from Chapter 6.5; retained plain title navigation.
- Consolidated mobile header and panel containment rules for 320–1440px target widths.
- Constrained optional VexFlow SVG to its panel, added responsive viewBox behavior and theme-aware foreground colors.
- Applied bounded keyboard sizing and local horizontal scrolling for data tables, instead of allowing page-level overflow.
- Added static regression checks for mobile CSS, absence of obsolete logo markup and notation scaling.
- Browser viewport, accessibility and audio interaction are NOT RECHECKED; do not classify as visual PASS until executed.

## 2026-10-28 — Shared keyboard design
- Introduced `music/piano-renderer.js` as the single SVG piano geometry and marker implementation for Chapter 6.5.
- Both the introductory major/minor comparison and harmonic reference use one 48-unit white-key grid, matching black-key placement, 5-unit note markers, note labels and minimum seven white keys.
- Preserved individual-note playback on the harmonic reference; the introductory diagram stays chord-selection driven.
- Root marker in C major inversions remains attached to C rather than the inversion's bass pitch.
- Browser and device visual verification remain NOT RECHECKED.

## Implementation checkpoint — 2026-10-30
- PASS source: common scientific pitch helpers extracted to `music/pitch.js`; shared `piano-renderer.js` no longer imports Chapter 6.5.
- PASS source: `music/audio-engine.js` centralizes Web Audio context and note/chord scheduling; Chapter 6.5's two controllers invoke its `playNotes` API.
- PASS static integrity: commit `d71d7b0` (GitHub workflow successful).
- NOT RECHECKED: real browser audio playback, polyphony/retrigger behavior, mobile touch, VexFlow engraving and multi-viewport appearance.
- Remaining gates: a reusable lesson data/interaction contract, reproducible Playwright execution, verified deployment provenance, accurate documentation and runtime error handling. This checkpoint does not approve mass-producing chapters.

## 2026-11-07 – Documentation authority reconciliation
- Preserved the seven superseded operational documents verbatim in `archive/historical-guidance/2026-11-07/`.
- Consolidated AI continuity in one active `DEVELOPMENT_HANDOFF.md` and corrected chapter source inventory: 36/37 HTML lesson pages, Chapter 33 absent.
- Recorded distinct book v1.0.0 and interactive package v0.1.0 identities, absent old obsolete-home file, manual-only deployment, unverified browser/audio/live release.
- No interactive runtime, production deployment, PDF or independent workstream modified.

## 2026-11-13 – Approved final reference reconciliation
- Matched the user-uploaded final 159-page PDF to locked GitHub Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`; directly confirmed Chapter 33 on printed pp.110–122.
- Verified actual Lab production source `8b249db`, READY; compared its Git tree to audited source `9018ccc` and found no changed lesson HTML/homepage/audio/layout runtime files (92 additional commits concern publication, docs, interactive inventory, and a test).
- Corrected active README, manifest, chapter inventory/progress, QA documentation and handoffs without editing final book or interactive runtime.
- Chapter 33 standalone HTML remains missing in the approved Lab source and current GitHub; investigate integrated reader and desired chapter UX before creating anything.
- No deployment, browser/audio acceptance, external PDF checksum or publication action performed.

## 2026-11-13 – Chapter 33 lesson source added
- Added final-book Chapter 33 (printed pp.110–122) as `lessons/chapter-33/index.html`, preserving existing chapter design and shared chapter-reference piano runtime.
- Added it to `interactive/index.html` embedded reader; existing generated chapter navigation links to it automatically.
- Updated inventory and validation expectations: **37 of 37 chapter HTML sources now present**.
- The new lesson contains curated scale formulas, comparisons, prompts and exercises grounded in the locked book; not yet fully figure-/text-parity audited.
- **Not deployed:** canonical Vercel Interactive Lab remains on pre-Chapter-33 source. Browser, audio, mobile and test execution require verification before release claims.
