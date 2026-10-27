# Interactive chapter progress
Updated 2026-10-27. This is a register for the standalone `interactive/` app, not a claim that the separate book has been converted.

| Scope | Implementation | Verification |
|---|---|---|
| Legacy reading sections and 11 practice rooms | Copied into app `index.html` | NOT RECHECKED full browser parity |
| Chapter 6.5 / From scales to chords | IMPLEMENTED: triads, inversions, seventh chords, diatonic harmony, 8-bar study, piano, initial staff, playback, exercises | PASS static fixtures; NOT RECHECKED browser/audio/notation |
| Chapter 1 | PENDING modular lesson | NOT RECHECKED |
| Chapter 2 | PENDING modular lesson | NOT RECHECKED |
| Other book chapters | PENDING modernization and per-chapter inventory | NOT RECHECKED |

Do not fabricate chapter titles or chapter boundaries. Inspect the read-only book when defining future content. Existing legacy content is not equivalent to completed modular lessons.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.
