# The Composer’s Prompt — standalone interactive application

**Application root: `interactive/` exclusively.** This monorepo includes independent websites, a book, and other projects. All app code, pages, artwork, tests and documentation belong INSIDE this folder only. Never edit root or sibling folders as part of interactive work.

Start with [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md), [PROJECT_STATUS.md](PROJECT_STATUS.md), [COMPONENT-MANIFEST.json](COMPONENT-MANIFEST.json), [CHAPTER_PROGRESS.md](CHAPTER_PROGRESS.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [MUSIC_THEORY_RULES.md](MUSIC_THEORY_RULES.md), [QA-ACCEPTANCE.md](QA-ACCEPTANCE.md), [CHANGELOG.md](CHANGELOG.md).

- Home: `index.html` (original interactive manuscript copy).
- Reference lesson: `lessons/chapter-6-5/index.html`.
- App-local music fixtures and tests: `music/`, `tests/`.
- Past experiments: `experiments/` (preserved).
- GitHub Pages preview is published under `/thecomposersprompt/interactive/`; live browser QA remains NOT RECHECKED.
- The authoritative separate book and sibling projects are **read-only external references**. Do not change them; do not use Vercel due to quota.
- Light-theme logo binary is still pending upload; logo fallback is implemented.

Any additional legacy planning notes are superseded by the present handoff and component manifest.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.
