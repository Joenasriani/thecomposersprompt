# Music theory and interaction rules
Updated 2026-10-27.

- Written spelling, staff note positions, MIDI sound and keyboard highlights must match in pitch and register.
- Preserve enharmonic spelling: C–E♭–G is C minor; never silently replace E♭ with D♯ on the staff.
- Major/minor/diminished/augmented triad intervals respectively [0,4,7], [0,3,7], [0,3,6], [0,4,8].
- Diatonic triads of C major: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° Bdim.
- Inversions keep chord pitch classes but change bass. Seventh chords require exact note and accidental spellings.
- Keyboard minimum is seven **white keys**, expanding for played range. Black keys and all dots must align with the actual notes.
- Custom SVG staff is preliminary, not confirmed publication-grade engraving. Validate clefs, accidentals, spacing, ledger lines, stacked-noteheads and durations in a real browser.
- Theme A eight-bar chords do not by themselves prove a melody, cadence realization or phrasing.
- Audio must start on deliberate user interaction; check pitch, volume, stopping and repeat playback.
- All app modules, models and tests reside within `interactive/`.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.
