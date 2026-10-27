# Zenodo publication-readiness audit – 2026-10-27

Scope: authoritative repository files inspected read-only; Zenodo documentation changes confined to `deposits/zenodo/`. This is not a Zenodo account audit or an independent PDF render inspection.

| Check | Status | Evidence / outstanding action |
|---|---|---|
| Phase 0 classification | PASS | Educational book, not empirical validation or peer-reviewed article |
| Canonical title, subtitle, creator and holder | PASS | `publication.json`, `book/FINAL_RELEASE_LOCK.json` |
| Locked PDF identity in release records | PASS | 159 pages; 5,204,343 bytes; blob SHA-1 fe10bb14c36bdd22ec791031b02d43fb5d8fabde |
| GitHub PDF blob identity | PASS | Direct GitHub fetch of `book/THE_COMPOSERS_PROMPT.pdf` on `main` returned `fe10bb14c36bdd22ec791031b02d43fb5d8fabde`, matching locked release records. GitHub reported base64 content length 0. |\n| Independent binary checksum / PDF contents | BLOCKED | GitHub connector did not supply binary bytes (base64 result empty; blob fetch produced UnicodeDecodeError). SHA-256, page count and internal PDF inspection cannot be independently verified from this tool. |
| Copyright statement throughout preparation | PASS | `metadata.json`, `RIGHTS.md`, `README.md` |
| Separate interactive edition licensing | PASS | No PDF CC BY 4.0; older interactive terms preserved |
| Zenodo license and public visibility capabilities | PASS | Official Zenodo docs, see README |
| Actual custom rights field acceptance | BLOCKED | Test custom statement and save draft in authenticated Zenodo UI, then inspect preview |
| First-publication date | FIX | 2026 is known, precise first-public date not verified; Zenodo accepts year-only EDTF |
| Original publisher | UNKNOWN | Confirm if book has already been formally issued elsewhere; otherwise Zenodo default |
| DOI and duplicate search | UNKNOWN | Public exact-title web searches found no matching record (not exhaustive); authenticated account and Zenodo search remain necessary |
| Full PDF text, images, figures, links and embedded metadata | NOT RECHECKED | Final book locked; any defects would require separate explicit authorization, not silent edits |
| Third-party content permissions | UNKNOWN | Copyright holder to attest permission for embedded graphics, samples, excerpts and other protected material |
| Zenodo resource subtype | PASS | Official Zenodo documents confirm resource type required; verify available Publication / Book selector when drafting |
| Personal ORCID, affiliation, funding and conflicts | UNKNOWN | Leave unset unless independently verified / author confirmed |
| AI-assistance disclosure obligations | UNKNOWN | Confirm accurate disclosure and applicable destination requirements, do not fabricate |
| GitHub metadata consistency | PASS | Metadata grounded in inspected authoritative source records |
| Zenodo account and draft created | BLOCKED | Not accessed, created, uploaded or saved |
| Explicit approval to publish | BLOCKED | Not granted |
| Actual published record | BLOCKED | None verified; no DOI/URL/date fabricated |

## Additional independent Zenodo documentation checks

Official guidance rechecked 2026-10-27:
- Custom license/right statement accepted in principle, while CC BY 4.0 is default: https://help.zenodo.org/docs/deposit/describe-records/licenses/
- Public files and publicly visible metadata are distinct settings: https://help.zenodo.org/docs/deposit/create-new-upload/
- Publication date is mandatory; first public release date for previously published works; year-only EDTF is supported: https://help.zenodo.org/docs/deposit/describe-records/publication-date/
- New version creates a different linked record and persistent identifier: https://help.zenodo.org/docs/deposit/manage-versions/
- Zenodo will mint a DOI on public publication unless the object already has its own DOI: https://help.zenodo.org/docs/deposit/about-records/
- Official help pages are inconsistent about post-publication minor file-edit windows (create-upload says 45 days; manage-files describes 30-day initiation and 45-day finalization). No post-publication file replacement is planned or authorized here: https://help.zenodo.org/docs/deposit/manage-files/

**Readiness decision:** metadata plan prepared in repository; GitHub blob identity independently cross-checked, but byte-level PDF validation is blocked by the connected retrieval method; **NOT READY** for a verified Zenodo submission until exact binary inspection, first-publication/publisher confirmation, rights evidence and saved-draft validation are complete. No scholarly/peer-review validation is claimed.

## Remaining actions – ordered

**Technical readiness:** (1) independently verify PDF bytes and blob SHA-1; compute SHA-256 for archival manifest; (2) inspect locked PDF text/render, including publication identity and rights text, without altering it; (3) check potential duplicate Zenodo records and obtain exact initial-publication date and original publisher; (4) confirm rights and third-party permissions; (5) log into Zenodo, create a private **unpublished** draft only with separate authorization, upload original PDF, choose custom rights, save and inspect Preview; (6) confirm custom statement is retained and all metadata, filename and checksums match.

**Publication approval:** author confirms copyright/permissions, public downloadable file visibility, exact rights text and selected license, metadata, citation/version, file checksum, and consents explicitly to public Zenodo publication. Only then publish. Verify published record and DOI afterward.

No external submission performed.
