# Interactive architecture and deployment – current reference

See [current handoff](DEVELOPMENT_HANDOFF.md) for authoritative controls. [Historical architecture audit](archive/historical-guidance/2026-11-07/ARCHITECTURE-AND-DEPLOYMENT.md) must not be followed as current migration guidance.

The app root is `interactive/`, primary entry `index.html`, lessons under `lessons/`, shared music logic under `music/`, local test tooling under `tools/` and `tests/`. The 36 existing lesson HTML files are unverified as complete browser experiences. The legacy root `/index.html` belongs to a separate workstream. Do not assume the old claimed `interactive/obsolete/index.html` exists: it does not in inspected main.

The documented canonical Vercel lab is https://thecomposersprompt-lab.vercel.app/. Current `vercel.json` disables automatic Git deployments. **No deploy authorized.** Confirm Vercel project root, actual deployed SHA, deep links and browser/audio behavior before describing a release as live. The separate final book PDF is locked; see repository `publication.json` and `book/FINAL_RELEASE_LOCK.json` (read-only).
