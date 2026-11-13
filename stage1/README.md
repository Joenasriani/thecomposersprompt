# Stage 1 – Interactive harmonic laboratory

**Work in progress · not approved for publication.**

This is a Vite-built, isolated experimental interface integrating **Three.js 0.186.1**, **Tone.js 15.1.22** and **VexFlow 5.0.0**. Unlike the previous editorial mockup, it uses the actual libraries.

## Run locally
```bash
cd stage1
npm install
npm run dev
```
Open the local URL printed by Vite. For production compilation, run `npm run build`. The generated `dist/` folder is self-contained after bundling and may be hosted separately, without replacing the original publication.

## What the experiment does
- Toggle Cmaj7, Cm, Csus4 and C7; visual chord geometry changes using actual pitch-class relationships.
- Click individual notes or play the complete chord through Tone.js.
- Render a synchronized treble-clef chord using VexFlow.
- Use a canvas 2D fallback if WebGL initialization fails.
- Reduce animation when the system requests reduced motion.

## Limitations and tests needed
- This is **one concept demo**, not the full Stage 1 complete lesson, the 11 original practice rooms or the 42-section manuscript.
- Chords are in one octave and synthesized; spelling and acoustic/visual correspondence need runtime QA.
- Browser execution, npm installation, build, responsive visual QA and audio QA have **not** yet been independently tested.
- The manuscript's prior code and content remain untouched. Stage 1 Gate 1 is **not accepted**.
- Requires Node/npm to build; browser deployment uses bundled static assets. No CDN scripts are used in this prototype.

## License provenance
- Three.js: MIT https://github.com/mrdoob/three.js/blob/dev/LICENSE
- Tone.js: MIT https://github.com/Tonejs/Tone.js/blob/dev/LICENSE.md
- VexFlow: MIT https://github.com/vexflow/vexflow/blob/main/LICENSE

The project workbook uses CC BY 4.0, whereas these third-party libraries retain their respective MIT licenses; preserve dependency license notices when distributing bundled assets.

## Approved-final relationship – 2026-11-13

This `stage1/` mini-project remains **experimental and independent**, not the author-approved live Interactive Lab. The approved interactive production reference is https://thecomposersprompt-lab.vercel.app/ (source `interactive/`); the authoritative final book is the locked, independently verified 159-page PDF under `book/`. Do not promote this Vite experiment into `interactive/` or publish its `dist/` in place of the approved app without a separately accepted design and QA review. No experiment build or browser QA was performed during the 13 November documentation reconciliation.

## Interactive Lab cross-reference – latest verified release (13 November 2026)

The **separate** Interactive Lab is https://thecomposersprompt-lab.vercel.app/, Vercel READY production deployment `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf` from Git commit `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`. Its deployed Git source includes Chapter 33 in the embedded reader and dedicated `interactive/lessons/chapter-33/index.html` lesson, completing **37/37** standalone lesson sources. This does not change the authority, deployment, rights or build of this **separate workstream**. Focused Chapter 33 source checks passed, while full browser, audio and PDF-figure fidelity remain unverified. Consult [repository AI handoff](../../AI_HANDOFF.md) for current operational precedence; do not infer a new deployment solely from later documentation commits.
