# Interactive website ownership

**This is not the authoritative final PDF.** The current interactive publication entry point remains `../index.html`. `../prototype/index.html` is an editorial prototype; `../stage1/` is an experimental Vite implementation with its own build workflow.

`../CITATION.cff` and `../LICENSE` refer to the pre-existing interactive edition and its CC BY 4.0 grant; they are **not** the final book's publication citation or license. Do not rename or move any entry point without first checking the existing Vercel project root, build instructions, relative assets and GitHub Actions. Never modify `../book/THE_COMPOSERS_PROMPT.pdf`.

See `../COMPONENTS.md` for the separation and authority map.

## Verified component and deployment audit (2026-10-27)

Read [ARCHITECTURE-AND-DEPLOYMENT.md](ARCHITECTURE-AND-DEPLOYMENT.md) before changing any entry point, routing or deployment settings. It inventories all interactive source variants, documents the current main-branch Vercel lab deployment, distinguishes observed settings from unknown settings, and defines the compatibility/testing gate for any future migration into `interactive/`.

The interactive experience is called **The Composer’s Prompt**. The separate book PDF is a read-only musical source for this workstream even if the owner makes future publication edits possible. Use independently authored lesson explanations and explicit musical verification; do not alter the PDF, `publication.json`, or its release lock.

**Do not assume the existing root `index.html` can be moved safely.** Until deployed routing, Vercel root/build settings and behavioral parity have been verified, it remains the production-intended entry point. The new lesson preview on development PR #4 is experimental and not yet part of `main`.
