# Final-book landing website

**Source:** `websites/landing/index.html`  
**Build:** `node websites/landing/build.mjs` from repository root  
**Output:** `websites/landing/dist/` (generated, not authoritative)  
**Vercel project:** `thecomposersprompt-book`  
**Branch:** `main`  
**Production domain:** https://thecomposersprompt-book.vercel.app/  
**Vercel project:** `prj_kldrSI2Wa72Gpm8ivIe150gDzfGu`  
**Deployment:** `dpl_2FLBSbGpap566E8kH3pDJMHQpMLG` (READY when checked)

The canonical final PDF remains `book/THE_COMPOSERS_PROMPT.pdf` with Git blob `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`. Build copies the file to website output only after verifying the file size and Git blob SHA. It never changes the authoritative source. Do not commit `dist/` outputs as new publication versions.

**Legacy landing HTML:** `book/index.html` is superseded as the standalone landing source, but intentionally retained until cross-project deployment review. The root `index.html` and `stage1/` belong to the separate interactive edition and must not be changed by this workstream.

**Verification:** Vercel deployment READY; domain assignment verified through Vercel. Public HTTP, responsive visual QA, actual PDF request and bookstore publication remain NOT RECHECKED or BLOCKED until tested. No PayPal.

See `../../COMPONENTS.md` and `../../publication.json`.
