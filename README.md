# The Modern Composer’s Prompt

## Music Theory & Harmony in the Age of Artificial Intelligence

An interactive workbook by **Joe Nasr** connecting music theory, harmonic listening and composition through natural-language specification. The curriculum moves from intervals and modes to modern harmony, arrangement and the evaluation of generated music.

The central practice is to identify a musical decision, describe it precisely, and evaluate whether the resulting music expresses it. Prompts are treated as requests to test, not guarantees of a particular musical output.

## Open the workbook

1. Download this repository using **Code → Download ZIP**, then extract it.
2. Open [`index.html`](index.html) in a modern desktop or mobile browser.
3. Choose a practice room or a chapter from the contents. Press **Play example** to enable audio.

The workbook is self-contained. No installation, build step, account, API key or external music service is required to read the material and play the demonstrations. GitHub's file viewer displays source code; download the HTML to run it.

Alternatively, serve the folder locally with Python:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Audio and clipboard behaviour can vary in embedded previews and under browser security restrictions.

## What is included

- **11 practice rooms** with explanations, listening tasks and editable, copyable prompts.
- **42 reading sections**, including the preface, numbered and supplementary chapters, and six appendices.
- Playable keyboards with note labels, root markers and playback highlighting.
- Chord-by-chord displays that include bass notes.
- A sustained pedal for modal listening and a meter exercise with adjustable tempo.
- A visual arrangement planner, prompt desk and listening journal.
- Chapter search and browser-local reading progress.

### Practice rooms

| Room | Musical focus |
| --- | --- |
| 01 | Intervals and melodic versus harmonic playback |
| 02 | Modes and characteristic scale degrees |
| 03 | Triads, sevenths, ninths and suspended chords |
| 04 | Authentic, deceptive, plagal and half-cadence gestures |
| 05 | Tempo and grouping in 3/4, 4/4 and 5/4 |
| 06 | Instrument entrances and arrangement contrast |
| 07 | Musical briefs and listening-based revision |
| 08 | Modal interchange and the borrowed minor iv |
| 09 | Secondary dominants and tonicization |
| 10 | Chord voicing and connected upper voices |
| 11 | Pivot-chord modulation and a new tonal centre |

### Curriculum

The manuscript covers foundations, perceptual primitives, melody and phrase, harmonic colour, chromaticism, modulation, arrangement, generation workflows and comparative tool syntax. The practice rooms develop selected concepts; not every chapter has an interactive exercise yet.

## Teaching approach and accuracy

The keyboard demonstrations use explicit pitches in twelve-tone equal temperament and a simple synthesized tone. They illustrate pitch relationships rather than reproducing acoustic piano timbre. They do not model microtonal intonation or every musical tradition.

The application does **not** run a language model or generate songs. Prompts can be copied into a separate music-generation service of the reader's choice. No generated result has been tested merely because a prompt appears in the workbook.

This is a developing educational edition, not a peer-reviewed textbook. A targeted accuracy revision corrected note spelling, synchronized cadence displays, sustained-pedal playback and several overstated claims. Chapters 3.5, 4, 24 and 29 include revised teaching text and clearly labelled original wording for reference. The remaining research claims and platform-specific details still require a complete source review. Feature availability and syntax can change across tools and versions.

## Privacy and persistence

The application contains no analytics, login or generation-service integration. Reading progress and the listening journal use local storage in the current browser, where available. They are not synchronized between devices and may be removed when browser data is cleared. Copy important notes before closing a restricted preview or clearing storage.

Audio begins only after user interaction. External reference links open third-party resources when followed.

## Repository structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Complete workbook: interface, embedded manuscript, styles and application logic |
| [`README.md`](README.md) | Project overview, usage and editorial status |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Guidance for educational and technical contributions |
| [`LICENSE`](LICENSE) | Creative Commons Attribution 4.0 International legal text |

## Contributions

Corrections to music theory, citations, accessibility, translations and browser behaviour are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). For a factual correction, identify the chapter or practice room, explain the issue and supply a supporting source or a reproducible musical example.

## Author and attribution

Created by [Joe Nasr](https://github.com/Joenasriani).

Suggested attribution:

> Joe Nasr, *The Modern Composer’s Prompt: Music Theory & Harmony in the Age of Artificial Intelligence*. Source: https://github.com/Joenasriani/thecomposersprompt. Licensed under CC BY 4.0. Indicate any modifications when redistributing an adaptation.

## License

Copyright © 2026 Joe Nasr.

Except where otherwise identified, the original workbook, manuscript, examples, documentation and application source are licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**. Sharing and adaptation, including commercial use, are permitted under its attribution and other conditions. See the [full license](LICENSE) and [official license summary](https://creativecommons.org/licenses/by/4.0/).

Third-party quotations, trademarks and externally linked resources remain subject to their respective rights. This license grants only rights the licensor has authority to grant. The material is provided without warranties as described in the license.
