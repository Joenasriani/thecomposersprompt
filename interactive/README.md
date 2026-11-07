# The Composer's Prompt – interactive companion

**START HERE:** [Current AI handoff](DEVELOPMENT_HANDOFF.md). This is the only active operational handoff. [Status](PROJECT_STATUS.md), [chapter register](CHAPTER_PROGRESS.md), [QA criteria](QA-ACCEPTANCE.md), [component manifest](COMPONENT-MANIFEST.json), and [historical archive](archive/historical-guidance/README.md) are subordinate references.

This is one **interactive music-education application** inside a larger publication repository. Source root: `interactive/`; main HTML entry: `index.html`; lesson pages: `lessons/chapter-*/index.html`; music utilities: `music/`; tests: `tests/`. The book PDF, root workbook, website, deposits, workflow files and metadata are separate protected workstreams.

The inspected tree has **36 lesson HTML pages of 37 listed chapters**; Chapter 33 is missing. Page existence is NOT QA or book-parity certification. The package version is `0.1.0`, distinct from the final protected book v1.0.0. Vercel auto-deployment is disabled in `vercel.json`. The intended canonical lab URL is https://thecomposersprompt-lab.vercel.app/; current runtime release provenance is **NOT VERIFIED**. Run `npm test` and `npm run test:browser` after installing dependencies, and record results rather than assuming PASS.
