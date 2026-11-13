# The Composer's Prompt – Interactive Lab

**Approved live site:** https://thecomposersprompt-lab.vercel.app/  
**Live Chapter 33:** https://thecomposersprompt-lab.vercel.app/lessons/chapter-33/  
**Vercel production:** `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf` – **READY**, Git SHA `6621f9e1afd0f147ad104a222b1bab0c3c118e2a` (13 November 2026). The official domain is assigned, and GitHub `main` matched this commit immediately after deployment. Later documentation changes do not alter the production build.

## What is here
- Application homepage/embedded manuscript: `interactive/index.html`, including **43 reader entries**: preface, 36 numbered/half-numbered chapter readings, six appendices.
- **37 of 37 inventoried standalone lesson source pages** under `lessons/chapter-*/index.html`, including [Chapter 33](lessons/chapter-33/index.html). The separate Chapter 6.5 lesson is counted among the 37.
- Shared lesson behavior: `lessons/chapter-reference.js`, `lessons/chapter-practice.js`, `music/audio-engine.js`, `music/piano-renderer.js`, `music/compact-notation.js`; Chapter 6.5 has additional specialized components.
- Source-level content inventory: `lessons/chapter-inventory.json`. Its `source-present-qa-not-rechecked` statuses mean **source exists**, not complete theory, browser or audio certification.
- Auxiliary `chapters.html` is an older pilot index, **not** the full navigational authority. The live application uses `index.html` and its generated 37-chapter navigation.

## Book relationship
The authoritative final book is the separately locked **159-page** `../book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`. Chapter 33 appears at printed pp.110–122. The interactive Chapter 33 lesson uses selected exercises, scale comparisons and prompts adapted from it, rather than reproducing every figure verbatim. Book v1.0.0 and interactive package v0.1.0 are different release identities. Existing interactive CC BY 4.0 terms do not relicense the protected book.

## Verified release and QA limits
- **PASS:** Vercel production build READY, domain alias and Git source SHA; focused 9/9 Chapter 33 static checks; Chapter 33 embedded reader and standalone route present in deployed Git source.
- **NOT RECHECKED:** full automated tests, actual public browser responsiveness, mobile/touch, audible playback, notation accuracy, accessibility, all-chapter curriculum parity or externally served PDF checksum.
- `vercel.json` has `git.deploymentEnabled: false`. Any future production deployment requires an explicit instruction; documentation changes are not a reason to redeploy.

## Commands and operational handoff
From `interactive/`: `npm install && npm test`; browser suite `npm run test:browser` where Chromium/Playwright is installed. Do not label these PASS without actual execution. See [current active AI handoff](DEVELOPMENT_HANDOFF.md), [QA matrix](QA-ACCEPTANCE.md), [component manifest](COMPONENT-MANIFEST.json) and [repo-wide authority](../AI_HANDOFF.md). Historical guidance belongs under [archive](archive/historical-guidance/README.md), not to active instructions.
