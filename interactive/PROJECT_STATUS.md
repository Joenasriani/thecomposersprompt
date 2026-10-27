# Interactive application — project status
Updated 2026-10-27.

## Ownership
**`interactive/` is the standalone application root inside a multi-project repository.** All interactive code, pages, assets, music data, documentation and tests are owned and maintained ONLY under this directory. Everything outside it is read-only context and must not be edited by this workstream without separate explicit authorization.

## Existing application
- Home: `index.html` (inside this directory), a copied/preserved interactive workbook with 42 reading sections and 11 practice rooms according to the legacy inventory.
- Reference lesson: `lessons/chapter-6-5/index.html`, with interactive triads, C major diatonic chords, inversions, sevenths, Theme A, exercises, playback, keyboard and initial staff representation.
- Models: `music/chapter-6-5.js`, `music/staff-model.js`.
- Experiments retained: `experiments/prototype/`, `experiments/stage1/`.
- Tests: `tests/validate.mjs`, `tests/music-model.mjs`, `tests/staff-model.mjs`.

## Verified and unverified
PASS: most recently observed static GitHub Actions and Pages deployment at `5d33ce89cc9b6e14a80c9287df524668790d2a9f`. Verify newest CI again after documentation commits.
NOT RECHECKED: live browser access, audio behavior, staff notation engraving, responsive visual alignment and keyboard accessibility.
FIX: full notation quality (clef glyphs, accidentals, collisions, conventional rendering) and browser-level integration tests.
PENDING: new light logo asset `assets/composers-prompt-title-light.webp` (user deferred upload); source includes a fallback.
PENDING: reusable cross-chapter components, Chapters 1 onward, new-interactive licensing decision.
Do not confuse static source checks with visual/audio PASS.

## Strict external exclusions
Outside this application's root: repository `index.html`, `.github/`, `book/`, `websites/`, `deposits/`, book metadata and release locks. No changes outside `interactive/`.

## 2026-10-27 browser-validation attempt
- PASS: An automated headless Chromium test suite was added at `tests/browser-chapter-6-5.spec.mjs`; it covers 320, 375, 768, 1024 and 1440 px, chord notes, minimum seven white keys, responsive overflow, mocked AudioContext voice startup and theme switching.
- BLOCKED: Live Pages URL could not be loaded using the available browser/web session; local shell cannot resolve github.com. The test suite has **not been executed against the actual page** and its assertions may require further adjustments.
- FIX: Existing SVG staff still renders text labels instead of conventional clef symbols, and chords' noteheads/accidentals have not passed independent engraving checks. Do not label conventional score rendering PASS.
- PENDING: Shared component extraction and Chapter 1 development are gated on actual browser acceptance, as requested.

## 2026-10-27 VexFlow notation integration
- The Chapter 6.5 provisional custom staff generator was replaced by a small, **optional** VexFlow 5.0.0 adapter in `music/compact-notation.js`; it is linked by a pinned jsDelivr script in the lesson page.
- The shared pitch model, seven-white-key piano and audio remain independent. VexFlow does **not** power the keyboard, visuals or prompts.
- If VexFlow fails to load, the notation container shows a non-blocking message and keyboard/chord text/audio remain available.
- CDN connectivity and browser rendering are **NOT RECHECKED**. Before marking PASS, confirm actual engraved clefs, accidentals, ledger lines, notation stacking, correct registers and real mobile display. A future fully self-hosted dependency under `interactive/` would eliminate external CDN reliance.
- VexFlow: MIT license. Retain required notices with all redistributed bundles. This adapter does not change any sibling projects or the book.

## Playable piano pilot (2026-10-27)
- Added reusable `music/interactive-piano.js` for pointer/touch and accessible Enter/Space keyboard activation.
- Chapter 6.5 harmonic keyboard keys now trigger Web Audio single notes, with live note readout; chord selections and seven-white-key minimum preserved.
- `tests/interactive-piano.mjs` checks MIDI-to-spelled-note correspondence and is imported by existing validation tests.
- Scope: individual-key playback pilot only. Multi-key chord building, playback-follow animation and real-device browser QA are **PENDING / NOT RECHECKED**.
