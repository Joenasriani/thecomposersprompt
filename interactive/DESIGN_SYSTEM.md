# Interactive application visual rules
Updated 2026-10-27. All implementation remains under `interactive/`.

- Restrained editorial academic layout; consistent padding, responsive widths, uncluttered navigation, legible typography.
- Title logo is proportional and must not obscure responsive navigation. Dark logo available; light transparent asset is deferred (fallback remains required).
- Keyboard minimum: **seven white piano keys**, plus corresponding black keys. Expand only for notes that require it. Avoid unnecessary octaves.
- Markers accurately centered on corresponding keys, small and consistently color-coded; accurate black/white-key proportions and thin borders.
- Staff notation, note-name labels, keyboard and playback must agree. Preserve correct note spelling and register.
- Verify 320, 375, 768, 1024, and 1440px widths, including horizontal overflow, keyboard scaling, focus order and contrast.
- System/light/dark modes need readable text and correct artwork without unexpected visual alterations.
- PASS source checks do not establish PASS visual accuracy.

## Current baseline · 2026-10-27 (supersedes older deployment and legacy-home notes)
- Canonical app: https://thecomposersprompt-lab.vercel.app/ ; Vercel project root `interactive/`, static/no framework. Domain assignment verified; fresh build and browser response **NOT RECHECKED**. Latest READY deployment remains older commit `728d435` as checked.
- `interactive/index.html` is now the active modern application homepage. The former workbook copy was archived bit-for-bit at `interactive/obsolete/index.html` and marked historical/read-only. Repository-root `index.html` remains unchanged outside scope; GitHub Pages still publishes it separately.
- Chapter 6.5: the custom piano SVG is an interactive per-note Web Audio pilot (pointer, Enter, Space), preserving seven-white-key minimum and note dots; full chord-building and real touch/audio QA are PENDING.
- Optional VexFlow 5.0.0 compact staff is supporting notation only; keyboard, visualizations, prompts and sound remain independent. No MuseScore/LilyPond/score editing systems.
- Final acceptance: browser confirmation at 320/375/768/1024/1440, clefs/accidentals, piano sound/touch, accessibility, navigation/asset paths, light artwork, and Vercel production deployment **NOT RECHECKED**.
- No changes to root landing, the final book, `.github/`, other projects, or external publication rights.
