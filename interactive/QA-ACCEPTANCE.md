> **CURRENT OWNERSHIP CONTRACT (2026-10-27):** `interactive/` is this standalone application's ONLY writable root. The repository includes independent websites, book content and other workstreams. All development, assets, docs and tests remain under `interactive/`; external root files, `.github/` and sibling directories are read-only unless separately authorized. Earlier notes below are archival observations; where they conflict with the current source, see [DEVELOPMENT_HANDOFF.md](DEVELOPMENT_HANDOFF.md), [PROJECT_STATUS.md](PROJECT_STATUS.md) and [COMPONENT-MANIFEST.json](COMPONENT-MANIFEST.json). The Chapter 6.5 lesson and music/staff models ARE implemented under `interactive/`, contrary to older pre-migration statements.

# Interactive acceptance matrix

Scope: interactive educational website only. No book, deposit, store or landing-page modification.

This matrix defines what constitutes a verified PASS. A repository file existing or Vercel reporting READY does **not** prove usability, browser execution or musical correctness.

| Check | Pass criterion | Present status |
|---|---|---|
| Production routes | Resolve the connected GitHub Pages and Vercel entry points; verify branch, root, build/output directories and actual HTTP responses | UNKNOWN |
| Legacy preservation | Catalog all 11 exercises, original 42 reading sections, playback, keyboard, journal, progress and clipboard behavior; compare before and after | NOT RECHECKED |
| Core theory | Written chord spellings, keys, Roman numerals, function and alterations checked against an independent answer key and the final book | NOT RECHECKED |
| Keyboard accuracy | Correct black/white key geometry, key center positions, registers, active dots and crop for every note example at mobile and desktop widths | NOT RECHECKED |
| Notation | VexFlow note positions, clefs, accidentals, durations and ledger lines checked against pitched audio and note text | NOT RECHECKED |
| Audio | Browser user gesture enables sound; no stuck voices; repeated clicks work; chord and individual-note pitch match labels | NOT RECHECKED |
| Reading experience | Explanation appears without unnecessary clicks; clear concept–example–listen–compare–verify flow | Prototype preview accepted; broader QA NOT RECHECKED |
| Layout | 320, 375, 768, 1024 and 1440px; no horizontal overflow, hidden controls or oversized empty visual areas | NOT RECHECKED |
| Accessibility | Logical headings/tab order, labels, focus, keyboard-only operation, sufficient contrast and reduced-motion support | NOT RECHECKED |
| Code / build | Pin reproducible dependencies, run tests then production build and inspect generated assets | NOT RECHECKED |
| License provenance | Preserve CC BY 4.0 legacy rights, separate reserved-rights final book and third-party notices; decide new contribution terms explicitly | FIX |
| Release | Verify direct deep-links/assets on a **nonproduction** preview and obtain explicit go/no-go before moving any entry point | BLOCKED |

## Reversible structure plan

Keep `/index.html`, `/prototype/` and `/stage1/` in place while the code is mapped and verified.

Potential future layout (not a migration already completed):

```text
interactive/
  README.md
  ARCHITECTURE-AND-DEPLOYMENT.md
  COMPONENT-MANIFEST.json
  QA-ACCEPTANCE.md
  src/
    content/     # chapter-aligned, source-traceable lesson content
    music/       # theory data, pitch models and validation
    components/  # staff, keyboard, playback, navigation
    lessons/     # progressively delivered educational views
  tests/         # music data, lesson logic and behavior
```

The approved Chapter 6.5 review demonstrates the target reading flow, but neither it nor the Stage 1 lab constitutes a verified replacement for the existing interactive site. New modules can be copied and developed in `interactive/` after checking cross-file dependencies; do not delete or move working sources as an initial refactor.

## Immediate next implementation gate

1. Read and classify original practice-room functions inside root `index.html` and Stage 1.
2. Establish a data model for notes, intervals, chords, accidentals and staff registration with automated consistency tests.
3. Implement the full chapter lesson as standalone modules under `interactive/` and preview it independently.
4. Verify audio, keyboard key-center alignment, staff alignment and responsive screens.
5. Keep original deployment untouched until observed parity and approval.

## Executable browser suite (added 2026-10-27)
`tests/browser-chapter-6-5.spec.mjs` runs a real Chromium flow when a browser-accessible server and Playwright package are available. Run with `node --test interactive/tests/browser-chapter-6-5.spec.mjs` from repository root after installing Playwright/Chromium locally. The source file lives exclusively under interactive/. Tests check responsive widths, dynamic staff/keyboard updates, seven white keys, mocked audio activation, and appearance controls. This suite is **NOT YET RUN** against the deployed preview; do not infer browser PASS from GitHub static CI.
