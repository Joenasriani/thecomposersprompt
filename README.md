> **Final book authority:** The finalized 2026 PDF publication is governed by [`publication.json`](publication.json) and [`book/FINAL_RELEASE_LOCK.json`](book/FINAL_RELEASE_LOCK.json), with the canonical file [`book/THE_COMPOSERS_PROMPT.pdf`](book/THE_COMPOSERS_PROMPT.pdf) (Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`). Publication credit: **Joe Nasr**; copyright holder: **Joseph Ribal Nasr**. This README describes the separate developing interactive edition. Its CC BY 4.0 permissions remain unaffected.

# The Modern Composer’s Prompt

### Music Theory & Harmony in the Age of Artificial Intelligence

**Author and creator:** [Joe Nasr](https://github.com/Joenasriani) (`Joenasriani` on GitHub) · **Publication status:** Developing educational edition (2026) · **Format:** Interactive HTML workbook and manuscript.

*The Modern Composer’s Prompt* examines how knowledge of musical structure can inform composition when musical intentions are expressed through natural language. It brings together a structured manuscript, listening exercises, playable demonstrations and editable composition prompts.

The premise is straightforward: **musical terminology helps us specify an intention; listening tells us whether the musical result fulfils it.** A prompt is a specification to evaluate, not a guarantee of what a generative system will produce.

## Subject and discoverability

This project brings together **music theory**, **tonal harmony**, **interactive music education**, **composition prompts**, **prompt engineering for music**, **musical analysis**, **ear training**, **chord progressions**, **modes**, **cadences**, **modulation**, **voicing** and the critical evaluation of music created with artificial-intelligence tools. The publication focuses on how musical concepts can be described, demonstrated, heard and evaluated. It does not provide a built-in generative music model.

The project is authored by Joe Nasr and maintained through his [GitHub profile](https://github.com/Joenasriani). For disambiguation from other people with the same name, his canonical public identity and project-evidence reference is [Joe Nasr Signals](https://joe-nasr-signals.vercel.app/). This repository is the authoritative source for the **publication itself**, while Signals is the reference for the author's wider identity.

## Access the publication

**[Download the workbook](https://github.com/Joenasriani/thecomposersprompt/archive/refs/heads/main.zip)** · **[View the source](index.html)** · **[Report an issue](https://github.com/Joenasriani/thecomposersprompt/issues)**

1. Download and extract the repository ZIP.
2. Open `index.html` in a modern browser.
3. Select a practice room or manuscript chapter. Use **Play example** to activate sound where available.

The publication is a **self-contained HTML application**. Reading the manuscript and playing its embedded demonstrations require no installation, account, build process, API key or music-generation subscription. GitHub's file preview shows the source rather than running the application.

For local HTTP serving, optionally run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publication at a glance

| Component | Scope |
| --- | --- |
| Complete manuscript | 42 reading sections, including preface, numbered and supplementary chapters, and six appendices |
| Interactive practice | 11 listening and composition rooms |
| Musical demonstrations | Playable keyboards, note and root indicators, chord/bass displays and synthesized playback |
| Composition workflow | Editable, copyable briefs and prompts; arrangement planning; listening journal |
| Reading tools | Searchable chapter contents and browser-local reading progress |

The manuscript develops ideas from intervals, scales and modes through harmonic function, chromaticism, modulation, arrangement and evaluation of generated material. **The eleven practice rooms demonstrate selected concepts; they do not represent eleven equivalents of the full manuscript chapters.**

### Interactive practice rooms

| Room | Topic | Listening or compositional focus |
| :---: | --- | --- |
| 01 | Intervals | Melodic and harmonic presentation |
| 02 | Modes | Characteristic degrees and modal colour |
| 03 | Chord vocabulary | Triads, sevenths, ninths and suspensions |
| 04 | Cadences | Authentic, deceptive, plagal and half-cadence gestures |
| 05 | Meter | Tempo and grouping in 3/4, 4/4 and 5/4 |
| 06 | Arrangement | Instrument entrances and contrast |
| 07 | Prompt desk | Briefs, listening and iterative revision |
| 08 | Modal interchange | Borrowed chords, including the minor iv |
| 09 | Secondary dominants | Tonicization and directed harmonic movement |
| 10 | Voicing | Voice connection and chord spacing |
| 11 | Modulation | Pivot-chord movement between tonal centres |

## Method: specify, hear, evaluate, revise

The exercises connect four activities:

1. **Identify** a musical relationship or compositional choice using appropriate terminology.
2. **Hear** an isolated demonstration, where an interactive example is provided.
3. **Specify** a musical intention through an editable natural-language brief.
4. **Evaluate and revise** the resulting music by listening for the intended properties.

The workbook does **not** integrate a language model, generate finished tracks or claim that a particular prompt will yield a reproducible musical result. Copyable prompts are intended for experiments in external tools chosen by the reader; their outputs must be assessed independently.

## Scope and editorial status

This repository contains a **developing educational edition**, not a peer-reviewed textbook or a comprehensive verification of every historical, scientific or product-specific claim.

The keyboard uses explicit pitches in twelve-tone equal temperament and simple synthesized tones. Its purpose is to isolate and communicate musical relationships, **not** to emulate an acoustic piano, model microtonal intonation or encompass every musical tradition.

A targeted editorial and demonstration revision addressed note spelling, cadence-display synchronization, sustained-pedal playback and selected overstatements. Revised teaching passages in **chapters 3.5, 4, 24 and 29** retain clearly labelled original wording for comparison. A complete source audit of the remaining research claims and changing platform-specific details is still outstanding.

Music-generation services differ in capabilities, prompt interpretation and syntax; features mentioned in the manuscript may change by version. No successful generation or independent research validation should be inferred solely from a worked prompt.

## Privacy and browser data

There is no account system, analytics integration or built-in music-generation service. Reading progress and listening-journal data are stored locally in the browser when storage is available; they are not synchronized. Clearing browser data may delete them. Save important notes elsewhere.

Audio playback requires user interaction. Browser security restrictions may affect sound or clipboard functions in embedded previews. External references lead to third-party websites only when opened.

## Project files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Standalone interface, embedded manuscript, interactive exercises, styles and application logic |
| [`README.md`](README.md) | Publication overview, access instructions, methodology and editorial status |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Contribution procedure and accuracy expectations |
| [`LICENSE`](LICENSE) | CC BY 4.0 terms for the existing interactive workbook edition; not a license for the separately issued final PDF |

## Contributing and corrections

Contributions are welcome where they improve musical accuracy, editorial clarity, citation quality, accessibility or browser compatibility. Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes.

When reporting a musical issue, identify the **chapter or practice room**, provide the current and proposed wording or behaviour, and cite a reliable source or reproducible musical example. Distinguish an established theoretical convention from an interpretation and a platform-specific observation.

The workbook is maintained as a self-contained publication; contributions should preserve that architecture unless a change is explicitly agreed.

## Rights and edition distinction

**Existing interactive workbook and repository materials.** Material previously offered under [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE) remains subject to that license where applicable. The license allows redistribution and adaptation, including commercial use, subject to its terms. Publishing a differently licensed edition does not revoke rights already granted under CC BY 4.0.

**The Composer’s Prompt – finalized PDF book (2026).** The separate, finalized PDF edition, bearing the title *The Composer’s Prompt: Music Theory and Harmony for Computational Music Prompting*, is **free to read but copyright protected**. Copyright © 2026 Joseph Ribal Nasr. All rights reserved. No permission is granted to resell, redistribute, republish, reproduce or commercially exploit that PDF, in whole or in part, without prior written permission from Joseph Ribal Nasr, except as permitted by applicable copyright law. Official publication access: https://reasoning-and-logic.vercel.app/.

**Scope.** The PDF's all-rights-reserved notice applies to that separately distributed edition and does not retroactively withdraw any CC BY 4.0 rights in previously licensed material. The existing repository [LICENSE](LICENSE) remains the complete CC BY 4.0 license text for applicable materials. Do not interpret it as a grant of rights to the finalized PDF as a whole.

Third-party quotations, referenced works and trademarks retain their respective rights. No rights are granted beyond those held by the relevant rights holders.

## Citation and attribution

**Author:** [Joe Nasr](https://github.com/Joenasriani)  
**Title:** *The Modern Composer’s Prompt: Music Theory & Harmony in the Age of Artificial Intelligence*  
**Repository:** https://github.com/Joenasriani/thecomposersprompt  
**Year:** 2026  
**Status:** Developing edition; details may change before formal publication  
**Citation metadata:** [CITATION.cff](CITATION.cff)

Suggested citation:

> Nasr, Joe (2026). *The Modern Composer’s Prompt: Music Theory & Harmony in the Age of Artificial Intelligence*. Interactive publication. GitHub. https://github.com/Joenasriani/thecomposersprompt

For adapted or redistributed material, provide appropriate credit, a link to the license and an indication of changes.

<sub>Created by [Joe Nasr](https://github.com/Joenasriani).</sub>
