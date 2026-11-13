# Interactive Lab – current project status (13 November 2026)

**LIVE PRODUCTION:** https://thecomposersprompt-lab.vercel.app/ . Vercel project `thecomposersprompt-lab` deployment `dpl_2vKCJyC4DpSGfbcRAHRFpuXbonmf` is **READY** with official alias and Git source SHA `6621f9e1afd0f147ad104a222b1bab0c3c118e2a`. GitHub main was confirmed identical immediately after this deployment.

**SOURCE:** The homepage's embedded manuscript has **43** reading entries. `lessons/chapter-inventory.json` has **37/37** source-present standalone lesson pages. Chapter 33 now exists at `lessons/chapter-33/index.html` and was part of the deployed source; the main reader/navigation contains it. Chapter 6.5 remains a specialized reference lesson. Package version `0.1.0` is separate from final-book PDF v1.0.0.

**FINAL BOOK:** protected, locked 159-page PDF (`../book/The_Composers_Prompt_Joe_Nasr.pdf`, Git blob `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`), with Chapter 33 on printed pp.110–122.

**VERIFIED:** Chapter 33 focused static source inspection 9/9; Vercel production build READY and alias assignment successful; existing chapter HTML files and final PDF not changed by Chapter 33 work.

**OPEN:** full automated suite and Playwright test execution, rendered live browser/deep route HTTP checks, real-device/mobile/touch/audio/notation and accessibility acceptance, and figure-by-figure exact book-to-lesson parity. The Chapter 33 lesson is a curated adaptation, not a verbatim transcription of the book's printed figures.

**RELEASE CONTROL:** auto Git deployment disabled. Later documentation-only Git commits do not mean live app drift or trigger a deploy. See [active handoff](DEVELOPMENT_HANDOFF.md) and [QA](QA-ACCEPTANCE.md). Older instructions are available only in [historical archive](archive/historical-guidance/README.md).
