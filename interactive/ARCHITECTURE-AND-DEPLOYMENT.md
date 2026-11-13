# Interactive architecture and deployment – current reference

See [current handoff](DEVELOPMENT_HANDOFF.md) for authoritative controls. [Historical architecture audit](archive/historical-guidance/2026-11-07/ARCHITECTURE-AND-DEPLOYMENT.md) must not be followed as current migration guidance.

The app root is `interactive/`, primary entry `index.html`, lessons under `lessons/`, shared music logic under `music/`, local test tooling under `tools/` and `tests/`. The 36 existing lesson HTML files are unverified as complete browser experiences. The legacy root `/index.html` belongs to a separate workstream. Do not assume the old claimed `interactive/obsolete/index.html` exists: it does not in inspected main.

The documented canonical Vercel lab is https://thecomposersprompt-lab.vercel.app/. Current `vercel.json` disables automatic Git deployments. **No deploy authorized.** Confirm Vercel project root, actual deployed SHA, deep links and browser/audio behavior before describing a release as live. The separate final book PDF is locked; see repository `publication.json` and `book/FINAL_RELEASE_LOCK.json` (read-only).

## 2026-11-13 final-source reconciliation

Approved live target: https://thecomposersprompt-lab.vercel.app/; Vercel production deployment `dpl_Bbnd2LEmpTCf6jofU5KPqvNYQ6Ln`, Git SHA `8b249db`, READY. Compared with app-source reference `9018ccc`, no intervening lesson HTML, app homepage, layout or music/audio runtime files changed; inventory JSON, tests and docs did. Subsequent documentation commits are not deployed runtime changes. Automatic deployment remains disabled. The final 159-page PDF includes Chapter 33 (printed pp.110–122), though the dedicated HTML lesson is absent in both source refs. Actual browser/runtime bytes are NOT RECHECKED. Refer to [current handoff](DEVELOPMENT_HANDOFF.md) for safe changes.
