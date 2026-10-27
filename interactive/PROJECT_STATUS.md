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
