# The Composer's Prompt – final-book landing website
**Last reconciled:** 2026-11-13. **This is NOT the Interactive Lab.**

## Production and source
- **Approved landing:** https://thecomposersprompt-book.vercel.app/
- **Vercel project:** `thecomposersprompt-book` (`prj_kldrSI2Wa72Gpm8ivIe150gDzfGu`)
- **Verified READY production deployment:** `dpl_3cFPGj37kjYai5cxMwJvsr2ZVeVk` at source Git SHA `56f7ffe9f2f18ca2c05e06f9e633e12e9b0dc137`.
- **Source:** `websites/landing/index.html`, build script `websites/landing/build.mjs`.
- **Build:** from repository root `node websites/landing/build.mjs`.
- **Generated output:** `websites/landing/dist/`, not a new or authoritative book edition.
- **Legacy source:** `book/index.html` retained for compatibility; do not treat it as primary.
- **Separate approved Lab:** https://thecomposersprompt-lab.vercel.app/, owned by `interactive/`.

## Locked final PDF
The exact author-uploaded **159-page** final PDF has Git blob SHA `8a94b66dfe6aa2f4a42c2ddb9925269b117652b7`, matching `book/The_Composers_Prompt_Joe_Nasr.pdf`. Chapter 33 is in the book at printed pp.110–122. The build checks that source blob before copying the canonical PDF into generated output. Never hand-edit/re-export the protected PDF or commit generated `dist/` output as a new edition.

The book is published free to read and copyright protected, © 2026 Joseph Ribal Nasr, all rights reserved. The existing CC BY 4.0 license for previously licensed interactive material does not automatically license this PDF.

## Delivery and verification
- Vercel production metadata: **READY**, domain assigned.
- **NOT RECHECKED:** actual public page/browser rendering, generated/served PDF checksum, all responsive views, click-through download, and external platform byte identity. READY is not an audio/functional/download test.
- The landing build emits SEO `robots.txt` and `sitemap.xml` and uses the approved cover assets.
- A separate voluntary **Support the Work** link `https://www.paypal.com/ncp/payment/CPDJMD3HV9D6Y` exists in landing source; it does not gate downloading the free book and is not checkout product identity. No PayPal transaction test was performed or authorized.
- Protect the locked PDF, publication metadata, unrelated root workbook, `stage1/`, deposits and live Lab.

See [COMPONENTS.md](../../COMPONENTS.md), [publication.json](../../publication.json), and [AI_HANDOFF.md](../../AI_HANDOFF.md).
