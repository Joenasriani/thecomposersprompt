# START HERE — Interactive app continuity
Updated 2026-10-27. Repo: https://github.com/Joenasriani/thecomposersprompt ; branch `main`.

## Hard scope boundary
**The complete interactive app lives under `interactive/`, which is its individual application root.** Do not modify the repository root or any sibling project. This includes external `.github/` workflows. Existing external workflows may be inspected, but must not be edited during normal interactive development.

## Resume protocol
1. Fetch the latest `main` SHA and enumerate `interactive/`.
2. Read this file, `PROJECT_STATUS.md`, `COMPONENT-MANIFEST.json`, `CHAPTER_PROGRESS.md`, `DESIGN_SYSTEM.md`, `MUSIC_THEORY_RULES.md`, `QA-ACCEPTANCE.md`, `ARCHITECTURE-AND-DEPLOYMENT.md` and `CHANGELOG.md`.
3. Reconcile documentation against actual files, tests and deployed behavior; correct discrepancies **inside this folder only**.
4. Verify latest GitHub Actions and Pages statuses; browser rendering/audio must be checked separately. Do not claim PASS without evidence.
5. Build modules, tests, artwork, assets, documentation and any app-local tooling only within `interactive/`. Commit work to the authorized branch and report SHA.

## Current implementation
`index.html` is the local app home. Chapter 6.5 reference lesson: `lessons/chapter-6-5/`. Pitch and chord model: `music/chapter-6-5.js`; staff geometry: `music/staff-model.js`. Tests: `tests/`.
Minimum piano keyboard: seven **white** keys with appropriate black keys; expand only for the played range. Preserve note and marker precision and mobile responsiveness.
Dark logo `assets/composers-prompt-title.svg` exists. Light logo `assets/composers-prompt-title-light.webp` does not yet exist in the repository; its upload is deliberately deferred; preserve fallback.

## Next quality gate
Verify Chapter 6.5 in a browser (notation clefs/accidentals/ledger lines/chord collisions, playback and piano note alignment at 320/375/768/1024/1440 widths). Then extract shared components under this root. Pilot Chapters 1 and 2 before scaling.

## “Update repo” convention
Audit current interactive source; synchronize README, handoff, manifest, status, architecture, design and theory rules, chapter progress, QA, changelog and app-local tests. Commit **only `interactive/**` files** and check CI. Keep sibling projects protected and record unresolved evidence accurately.

## Browser QA gate — 2026-10-27
Run `tests/browser-chapter-6-5.spec.mjs` with Playwright Chromium against an accessible local static server or Pages URL. This test was committed but not executable in the current disconnected browser environment. Review conventional clef rendering and staff engraving manually. **Do not extract components or start mass chapter conversion until the actual browser gate passes.**

## Canonical interactive web address — 2026-10-27
- **Canonical public URL:** https://thecomposersprompt-lab.vercel.app/
- Vercel project: `thecomposersprompt-lab` (`prj_9WZWGf5PTxXP90SloTeGncV4DWJH`). Project root directory is configured as `interactive`; framework is set to Other/none for static delivery of this folder's `index.html`.
- The URL must expose only the standalone `interactive/` application at the domain root, including `/lessons/chapter-6-5/`. Do not use the GitHub Pages /thecomposersprompt/interactive/ path as the canonical link.
- Domain assignment is verified; **the new deployment and browser response still require confirmation**. This change is configuration-only until a new production deployment finishes.
- No change to sibling websites, separate book, or repository-root public entry.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.
