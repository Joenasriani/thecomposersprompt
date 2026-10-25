# The Modern Composer’s Prompt – Three-Stage Redesign & Development Roadmap

**Version:** 1.0  
**Decision:** LOCKED / USER-APPROVED  
**Repository:** https://github.com/Joenasriani/thecomposersprompt

## Mission
Transform the existing text-heavy workbook into a distinctive, modern, accessible interactive music publication in which music theory is explored through sound, visualization and composition. Preserve all **42 reading sections**, **11 practice rooms**, the complete manuscript and existing educational functionality.

## Stage 1 – Creative Foundation & Working Prototype
**Goal:** Establish a recognizable identity with a functioning, musically meaningful experience.

- Audit suitable GitHub components, including Three.js, Tone.js and VexFlow; check licenses, maintenance, performance and compatibility.
- Build a coherent design system for typography, palette, layout, navigation, spacing, motion and interaction semantics.
- Design mobile and desktop experiences deliberately.
- Create a Three.js harmonic visualization connected to real musical input.
- Integrate Tone.js for accurate playable musical examples.
- Synchronize relevant VexFlow notation with instrument playback.
- Build an interactive homepage and **one complete** functioning practice lesson.
- Ensure accessibility for readers without formal music-theory knowledge.

**Deliverables:** Design system, integrated working homepage, complete prototype lesson and dependency decision log.

**Gate 1:** Visually distinctive, responsive, musically accurate and browser-tested. User approval required before proceeding to Stage 2.

## Stage 2 – Complete Interactive Publication
**Goal:** Extend the approved prototype across the entire publication.

1. **Explore:** Rebuild all 11 practice rooms with accurate sound, modern controls, coherent visualizations and concise contextual explanations.
2. **Read:** Preserve all 42 reading sections; add distraction-free reading, compact searchable chapter navigation, progress and notation where educationally useful.
3. **Compose:** Build a structured brief/prompt workspace with musical parameters, copyable outputs, listening observations and revision.

**Cross-cutting requirements:** Unified visual system; mobile-specific behavior; accessible keyboard and screen-reader navigation; synchronized feedback; preservation of browser-local journal/progress where compatible; no purely decorative mechanisms.

**Deliverables:** Fully integrated manuscript, all 11 functioning labs, and redesigned composition workspace.

**Gate 2:** All features migrated; no missing content; no regressions in playback, navigation or note accuracy; end-to-end experience tested on desktop and mobile.

## Stage 3 – Quality Assurance & Public Release
**Goal:** Publish one proven release, not an apparently finished mockup.

- Functional QA: playback, pitch accuracy, chord displays, navigation, chapter progression, prompts, clipboard, persistence and recovery.
- Visual QA: typography, hierarchy, component consistency, responsive layouts and visual clarity.
- Performance QA: rendering, WebGL fallback, audio initialization, payload, memory and mobile responsiveness.
- Accessibility QA: contrast, keyboard navigation, reduced motion, screen readers and non-visual alternatives.
- Editorial QA: all manuscript sections present; original correction history and evidence caveats retained.
- Publication: README, attribution, repository description, license notices, GitHub Pages configuration and actual deployment.
- Version and release: verify production URL against tested commit; retain a recoverable earlier version and QA report.

**Deliverables:** Production release, test report, final documentation and verified public URL.

**Gate 3:** Zero release-blocking defects, full tested interaction set, approved mobile and desktop appearance, and verified live deployment.

## Governance – locked
- `main` is the production publication branch. Develop via dedicated feature branches and pull requests.
- **Never** silently replace or truncate the 42 reading sections, 11 practice rooms, manuscript or verified functions.
- The existing `prototype/index.html` is a reference, **not** an approved design foundation.
- No generic template UI, cosmetic-only “redesign,” fake interactions or uncontrolled visual clutter.
- Review dependencies and their licenses; do not add third-party assets without permission to use them.
- All stage gates require evidence and explicit user acceptance.
- Do not merge unverified redesign work into `main`.
- Record implementation, checks, blockers and decisions in `CHECKPOINTS.md`; record technical/visual standards in `DESIGN-SYSTEM.md`.
- Changing this locked scope or its gates requires explicit user authorization.

**Definition of complete:** All manuscript content and all functioning musical experiences are delivered as one visually distinctive, usable, verified publication.
