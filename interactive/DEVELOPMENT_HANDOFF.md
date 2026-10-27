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
