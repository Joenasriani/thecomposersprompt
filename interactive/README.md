# Interactive website ownership

**This is not the authoritative final PDF.** The current interactive publication entry point remains `../index.html`. `../prototype/index.html` is an editorial prototype; `../stage1/` is an experimental Vite implementation with its own build workflow.

`../CITATION.cff` and `../LICENSE` refer to the pre-existing interactive edition and its CC BY 4.0 grant; they are **not** the final book's publication citation or license. Do not rename or move any entry point without first checking the existing Vercel project root, build instructions, relative assets and GitHub Actions. Never modify `../book/THE_COMPOSERS_PROMPT.pdf`.

See `../COMPONENTS.md` for the separation and authority map.

## Verified component and deployment audit (2026-10-27)

Read [ARCHITECTURE-AND-DEPLOYMENT.md](ARCHITECTURE-AND-DEPLOYMENT.md) before changing any entry point, routing or deployment settings. It inventories all interactive source variants, documents the current main-branch Vercel lab deployment, distinguishes observed settings from unknown settings, and defines the compatibility/testing gate for any future migration into `interactive/`.

The interactive experience is called **The Composer’s Prompt**. The separate book PDF is a read-only musical source for this workstream even if the owner makes future publication edits possible. Use independently authored lesson explanations and explicit musical verification; do not alter the PDF, `publication.json`, or its release lock.

**Do not assume the existing root `index.html` can be moved safely.** Until deployed routing, Vercel root/build settings and behavioral parity have been verified, it remains the production-intended entry point. The new lesson preview on development PR #4 is experimental and not yet part of `main`.

## Component registry and verification gate

- [COMPONENT-MANIFEST.json](COMPONENT-MANIFEST.json) — machine-readable inventory of current sources, deployments, protected paths and migration conditions.
- [QA-ACCEPTANCE.md](QA-ACCEPTANCE.md) — musical, interactive, accessibility and deployment test criteria. An untested route or feature is **NOT RECHECKED**, not PASS.

The `interactive/` directory is presently the documented destination for a future modular application; it is **not yet the production code root**. Retain root `index.html` and existing prototype/Stage 1 code until parity and routing checks have passed.

## Self-contained folder migration — 2026-10-27

The first **copy-only** migration is complete on `main`. These paths now exist under this workstream:

- `index.html`: byte-identical copy of the legacy standalone interactive website at repository root. The root original remains in place as a deployment fallback.
- `lessons/chapter-6-5/`: reviewed lesson prototype (standalone HTML, JS and CSS). Direct local URL `/interactive/lessons/chapter-6-5/` when served from the repository root.
- `experiments/prototype/index.html`: copy of the editorial study.
- `experiments/stage1/`: copy of the original Vite experiment, including `src/`, `package.json` and `README.md`. It still needs Node and a Vite build; do not assume raw source will execute directly as static HTML.
- `COMPONENT-MANIFEST.json`, `QA-ACCEPTANCE.md` and `ARCHITECTURE-AND-DEPLOYMENT.md`: workstream inventory and verification controls.

**Source-of-truth transition is not complete:** GitHub Pages still may publish the root copy, and the connected Vercel lab may still build `stage1/`. Do not delete original files, repoint Vercel, or present `interactive/index.html` as deployed until route/build parity and browser QA have passed.

The final PDF remains independently authoritative at `../book/THE_COMPOSERS_PROMPT.pdf`; this migration did not modify it or release metadata. New explanatory text is authored for the app, not a modification of the book. The already-present `interactive/THE_COMPOSERS_PROMPT.pdf` was not altered by this migration and needs separate provenance/de-duplication review before removal.

For a local static preview from the repository root run `python3 -m http.server 8000`, then open `http://localhost:8000/interactive/` or `http://localhost:8000/interactive/lessons/chapter-6-5/`.

**Testing status:** GitHub read-back verifies the copied legacy index matches the repository root byte-for-byte. Static HTML/JS asset paths for the Chapter 6.5 lesson have been corrected. Production routing, browser audio, mobile QA, and Vite experiment builds remain NOT RECHECKED.
