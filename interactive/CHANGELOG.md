# Interactive development changelog

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
