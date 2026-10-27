# Book landing page and deployment

**Status: PREPARATION; LIVE DEPLOYMENT NOT RECHECKED.** This directory owns landing-page workflow documentation. The current HTML source is **still** at `../../book/index.html` for backward compatibility with the provisionally configured Vercel Root Directory `book`. This is intentionally a temporary placement, not a second book edition.

The locked book is `../../book/THE_COMPOSERS_PROMPT.pdf`; the canonical publication metadata and book rights are in `../../publication.json` and `../../book/FINAL_RELEASE_LOCK.json`. Landing-page edits must never regenerate or overwrite the PDF.

## Safe migration gate

1. Verify which Vercel project and branch deploy the standalone landing site; record current Root Directory, build/output settings, routes and published URL.
2. Create an independently served landing root here only after deciding how the PDF will be served without duplicate, divergent canonical files.
3. Update `publication.json` deployment paths and routes to match the verified site; update bookstore staging references.
4. Verify mobile/desktop rendering, PDF link, indexing and actual domain; only then retire `book/index.html` as a landing source with a coordinated commit.
5. Preserve root `index.html` and `stage1/`, the interactive edition, without modification.

The provisional domain `https://thecomposersprompt-book.vercel.app/` is **not yet verified**.
