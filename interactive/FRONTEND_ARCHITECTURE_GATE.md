# Frontend Architecture Gate — Senior Engineering Audit
Date: 2026-10-28
Audited branch: main
Audited head: caa19a78d72efda2e06946a3e85eff2b4432bdf5
Scope: interactive/ only
Decision: NOT READY for chapter-scale replication. Complete foundation gates before Chapters 1–32.

## Verified source observations
1. A shared piano geometry and SVG renderer exists in music/piano-renderer.js and is called by both lesson.js and extensions.js. However, it imports midi and pitchClass from chapter-6-5.js, so the core widget depends on a specific chapter's domain file.
2. Three distinct Web Audio paths exist: lesson.js chord playback, extensions.js chord playback, and extensions.js single-note playback. Sound envelope, context lifecycle, polyphony and stop behavior are not centrally governed.
3. lesson.js and extensions.js directly query and mutate page DOM, and lesson-specific content is bundled into the first one. There is not yet a stable lesson lifecycle contract (mount/render/update/destroy).
4. The homepage has inline CSS, while Chapter 6.5 uses a separate stylesheet. Responsive style tokens are not a single reusable design-system module.
5. VexFlow is optional, sourced by a pinned CDN script in the lesson page. The actual runtime symbol, browser rendering and license notice need verification; compact-notation.js uses a global rather than an injected dependency.
6. A browser test file exists but requires separately installed Playwright and Chromium and defaults to a GitHub Pages URL rather than the canonical Vercel host. Static CI is not browser acceptance.
7. The manifest still lists deferred logo assets and experiments from an earlier phase; governance files contain superseded deployment and legacy-workbook references. Documentation needs a precise current-state reconciliation.
8. The production domain is thecomposersprompt-lab.vercel.app. GitHub Pages deployment passed at inspected head; the latest Vercel READY deployment observed did not match that head. Verify the temporary routing rule and HTTP response independently.
9. The repo contains a separate final-book workstream; only interactive/ is writable during this work.

## P0 — foundation blockers
- Extract chapter-agnostic note, pitch, spelling, intervals and MIDI utilities from chapter-6-5.js. Keep chapter theory fixtures separate. Import the neutral domain module from the piano, Web Audio and notation components.
- Introduce one shared audio controller: user-gesture unlock, reusable AudioContext, note/chord scheduling, voice cleanup and error handling. No second oscillator implementation in a chapter.
- Define one piano component contract: { pitches, root, range, interactive, labels, onNote }; identical white/black-key proportions, seven-white-key minimum, dot size, accurate spellings, focus and hit targets. Do not add new piano engines.
- Establish an app-local build/test entrypoint and pin browser test dependencies within interactive/. Make tests reproducible in CI or a documented equivalent. Browser acceptance remains NOT RECHECKED until actually run.
- Confirm VexFlow delivery, optional fallback, license preservation and engraving against the exact pitches of the current music model. Never make core piano or audio dependent on VexFlow.

## P1 — design and chapter scalability
- Split design primitives/tokens from chapter-specific CSS and eliminate repeated overrides; align homepage and lessons on typography, spacing, widths, borders and dark/light themes.
- Implement a minimal lesson interface: metadata, theoretical examples, piano options, audio options, prompts and assessment definitions, with narrow UI/controller boundaries.
- Keep chapters declarative where practical; do not mass-copy Chapter 6.5 HTML and event handlers.
- Define accessible interaction conventions (pointer/keyboard activation, focus treatment, status updates, target size), and validate both light and dark modes at 320, 375, 768, 1024 and 1440 px.
- Keep conventional notation compact, contextual and optional; keyboard, visuals and prompt engineering remain primary.

## P2 — maintenance and governance
- Reconcile README, architecture, handoff, component manifest, QA, chapter progress and design standards to the implemented paths, not historical plans.
- Establish a single authoritative release register recording source commit, static CI, browser results, Vercel production deployment and known exceptions separately.
- Remove or isolate abandoned experiments only after verifying that active code/tests do not import them. Retain Git history.
- Preserve rights distinction between the separate book and interactive assets; retain third-party license notices.

## Exit criteria before expanding chapters
1. Shared piano and audio code contain no imports from any chapter-specific module.
2. Chapter 6.5 uses the shared piano/audio contracts without duplicated rendering or oscillators.
3. All domain fixture tests pass, including enharmonic pitches, inversions and required keyboard crops.
4. Browser tests run successfully at all five viewports with no horizontal page overflow or script errors, verified chord/pitch synchronization, touch input, accessible focus, and contrast.
5. VexFlow is confirmed optional and pitch/spelling-accurate; loss of CDN does not break piano, audio or prompts.
6. Canonical Vercel URL serves the accepted release commit; temporary routing is documented or removed after direct deployment.
7. Design/QA/component manifest and development handoff accurately describe the inspected source.

## Status protocol
PASS = executed and verified; FIX = source defect; PARTIAL = implemented but incomplete; NOT RECHECKED = no current empirical QA; BLOCKED = an external constraint prevents acceptance.

No application source was changed by this audit.
