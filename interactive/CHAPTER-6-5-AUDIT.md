# Chapter 6.5 – canonical reference audit and freeze

## Provenance and freeze
Source revision: `d6475af6483f26760121859a0c6f633024ae0db2` on `work/full-book-reconstruction`.
Immutable comparison branch: `reference/chapter-6-5-approved-baseline-2026-11-01` (branch is a fixed recovery reference by policy, not technically protected against administrators or forced updates).
Exact 12 Git blob hashes are recorded in `CHAPTER-6-5-FREEZE.json`. Run `node tests/chapter-6-5-freeze.mjs` from `interactive/` before adapting any chapter. **Do not edit frozen files as part of chapter expansion or visual audits.**

## Verified in source
- Lesson sections: chord construction; a semitone-change knowledge check; contextual staff/keyboard reference; major, minor, diminished and augmented triads; seven diatonic C-major triads; inversions; seventh chords; eight-bar Theme A; compositional specification.
- Shared piano rendering is SVG and indicates active notes/root; the harmonic reference piano exposes pointer and Enter/Space activation.
- Shared additive audio engine uses three sine partials, 8 ms attack and 95 ms release. Preserve its settings.
- Compact staff notation uses VexFlow 5 and falls back to pitch labels/keyboard if unavailable.
- Keyboard and pitch calculations use shared music modules; major/minor and other chord pitches are explicitly enumerated.
- Dedicated browser tests exist for 320, 375, 768, 1024 and 1440 px plus simulated Web Audio and appearance controls.

## Unverified / risks, not release blockers silently waived
1. Browser acceptance suite **has not been executed in a confirmed browser session**; no pixel-perfect or screen-reader certification is claimed.
2. VexFlow is loaded from an external pinned CDN; offline or blocked network can prevent engraved notation. The fallback preserves pitch labels and piano.
3. `playNotes` retains scheduled voice references until the next replacement; repeat key interaction and note cancellation need real-browser audio regression testing.
4. Comparing the current version against **all historical approved Chapter 6/6.5 revisions and user notes** remains outstanding. This freeze captures the current verified reference, not proof of historical completeness.
5. Harmonic selection and engraving should be tested with chromatic spellings and bass/treble combinations on actual browsers.

## Canonical migration rules
- Extract new reusable lesson components by copying/refactoring into **new files**, referencing the frozen geometry, tokens and interaction behavior. Do not mutate Chapter 6.5 files or the shared piano/audio files during this phase.
- Chapter 6.5 is the design standard; the original workbook is a content/legacy-function reference and the simplified pilots are not a design reference.
- Any intentional change to Chapter 6.5 requires an explicit approved exception, an updated manifest and a before/after browser comparison. No merge to main or production deploy without explicit approval.
