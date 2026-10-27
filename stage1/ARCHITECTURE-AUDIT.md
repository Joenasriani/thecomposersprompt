# Architecture Audit & Foundation Contract

**Status:** Proposed structural contract, not accepted design.  
**Scope reviewed:** stage1 application and open shared UI changes in PR #4, 2026-10-25.  
**Production:** Root `index.html` and existing manuscript remain preserved.

## Audit verdict
Prototype compiles, but **NOT READY TO FREEZE** as architecture for the full interactive publication. The current `stage1/src/main.js` combines interaction orchestration, theory records, Three.js scene, fallback canvas, VexFlow notation, Tone.js audio, theme persistence and DOM mutation. This must be modularized before scaling to the revised manuscript.

### P0 – Required structural corrections
1. Introduce independent modules for music data, audio transport, notation, graphics, theme, routing, and content. Each module must have one accountable interface.
2. Represent harmonies with a typed or schema-validated neutral music model; notation/audio/graphics must consume the same validated data rather than their own duplicated values.
3. Establish a content ingestion schema after the corrected authoritative manuscript arrives. Preserve chapter identifiers, section hierarchy, references and media; **do not** assume the revised manuscript still has 42 sections.
4. Define routing paths for Explore / Read / Compose. No hardcoded inter-app deployment URLs inside shared navigation.
5. Add meaningful unit and interaction tests: harmony spelling and MIDI/frequency mapping, audio transitions, notation rendering, theme persistence, route navigation and content counts/links.

### P1 – Reusable interface architecture
- Shared CSS tokens must be separated from component styles and experience-specific layers; prevent page overrides from becoming a second source of truth.
- Header/footer/theme switcher become shared components with documented accessible markup.
- Theme uses `light`, `dark` and `system` with local persistence; all musical layers and fallbacks must switch consistently.
- Define page container, reading column, instrument workspace, panels, focus states and responsive breakpoints as reusable primitives.
- Maintain accurate crop/register for all piano keyboard diagrams; small aligned dots, precise geometry and minimal unused width.
- Provide reduced-motion, keyboard, contrast and non-WebGL fallback behavior.

### Known implementation-specific risks
- Theme update currently rebuilds note buttons, score and geometry; prefer narrowly scoped view refresh.
- Tone.js `releaseAll` and 55 ms retrigger is a candidate audio correction, **not listening-verified**, and rapid interactions need tests.
- Audio synth volume/envelope/duration and UI status timers are not isolated from interaction code.
- Notation SVG and WebGL create/update/dispose lifecycle should be tested for repeated chapter navigation.
- A successful Vite build is not evidence that all audio, notation, graphics or responsive layouts work.
- The demo routes link to the old deployed workbook rather than a new integrated router.
- Existing Stage 1 README predates shared CSS and audio/theme changes; update when those features are accepted.

## Target modular package layout (proposal, filenames not yet binding)

```text
stage1/
  src/
    app/          # initialization, route resolution and state coordination
    components/   # shared header, footer, theme, controls
    design/       # tokens, globals, component styles
    music/        # neutral notes, chords, modes and theory validation
    engines/      # audio, notation, visualization adapters
    content/      # manuscript manifest, loaders and references
    experiences/  # Explore, Read, Compose and their view components
    tests/        # theory, interactions and regression fixtures
```

## Proposed integration boundaries
- Single canonical musical example record → validated note spelling, octaves, MIDI pitches, functional harmony metadata.
- Audio engine: `play(notes, options)`, `stop()`, `dispose()` without DOM access.
- Notation engine: `render(example, mount, theme)`, `dispose()`.
- Visualization engine: `mount(host)`, `update(example, theme)`, `dispose()`, graceful non-WebGL fallback.
- UI controls issue actions and display state; musical engines never query page controls directly.
- Content renderer accepts a manuscript manifest and checks unique IDs, ordering, link targets and missing assets.
- Shared CSS and theme supply tokens rather than embedding color constants inside adapters.

## Gates to declare foundation rigid
- [ ] Clear module and data contracts implemented
- [ ] Unit tests for model, orchestration and theme persistence passing
- [ ] CI build and test pipeline green
- [ ] Responsive visual, keyboard and accessible navigation audit
- [ ] Audio/notation/geometry agreement checked for each sample harmony
- [ ] Corrected book ingested as immutable editorial baseline when supplied
- [ ] Stage 1 user design and usability approval recorded

**Decision:** Do not use the current monolithic Stage 1 file as a template for all practice rooms. Do not merge PR #4 or deploy manuscript replacement solely because CI compiles.
