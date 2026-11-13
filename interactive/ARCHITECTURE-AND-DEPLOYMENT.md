# Interactive Lab – architecture and deployment (current: 13 November 2026)

**Authoritative:** [current active handoff](DEVELOPMENT_HANDOFF.md). [Older architecture guidance](archive/historical-guidance/2026-11-07/ARCHITECTURE-AND-DEPLOYMENT.md) is preserved as historical evidence, not operational instruction.

## Live and source
- Production domain: https://thecomposersprompt-lab.vercel.app/
- Vercel project: `thecomposersprompt-lab`, ID `prj_9WZWGf5PTxXP90SloTeGncV4DWJH`, static project root `interactive/`.
- **Latest verified READY production deployment:** `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf` at source Git commit `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`. Correct canonical alias assigned. GitHub `main` equalled deployed SHA in immediate post-deploy comparison.
- Vercel automatic Git deployment is disabled (`vercel.json`: `git.deploymentEnabled: false`). The Chapter 33 production deployment was explicitly requested and performed once; later docs updates are not live code changes.
- Pre-Chapter-33 production SHA `8b249db` and deployment `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln` are superseded.

## Application module map
- `index.html`: primary home, **43** embedded manuscript reading entries, dynamic chapter navigation.
- `lessons/chapter-*/index.html`: **37/37** standalone chapter source pages, including new `chapter-33`.
- `lessons/chapter-reference.js`: shared reference UI, playable piano, compact notation, copyable prompts, theory check wiring.
- `lessons/chapter-practice.js`: chapter-specific multiple-choice theory checks, including Chapter 33.
- `lessons/lesson-runtime.js` / `lesson-contract.js`: specialized lesson model validation.
- `music/`: pitch utility, audio engine, keyboard renderer, notation model/renderer and input adapters.
- `assets/`: interactive artwork. `tests/`: static/Node/Playwright test sources.
- `chapters.html`: pilot-only auxiliary chapter directory, **not** the complete main chapter index.
- Root `../index.html`: separate historical workbook, not the live Vercel Lab. `../stage1/` and `../prototype/`: separate experiments.

## Release protection and QA
The locked 159-page final PDF is `../book/The_Composers_Prompt_Joe_Nasr.pdf`; Chapter 33 appears at printed pp.110–122. Keep it immutable. The Chapter 33 lesson is an educational adaptation rather than a verbatim reproduction of printed diagrams. Vercel READY and nine passing static source checks do **not** establish live browser, sound, touch, accessibility, or full PDF figure parity. For required checks see [QA acceptance](QA-ACCEPTANCE.md).

Never silently re-enable auto-deploy, alter the rights/metadata of the final book, or deploy experiments into the approved live Lab.
