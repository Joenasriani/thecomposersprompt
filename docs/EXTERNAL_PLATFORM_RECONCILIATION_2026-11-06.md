# External publication and profile reconciliation – 2026-11-06

## Evidence basis and precedence
This record reflects screenshots supplied by the author during the 2026-11-06 ONEJOE research-profile workflow. Screenshots are evidence of visible authenticated/public UI at capture time, not independent API validation. Do not quietly overwrite earlier audit states: preserve BEFORE → EVIDENCE → AFTER → VERIFICATION. No external website, DOI, PDF or institutional account was modified by this reconciliation.

## Zenodo – published, screenshot verified
- **BEFORE (repo):** deposit preparation incorrectly described the book as NOT DEPOSITED / DOI UNKNOWN.
- **EVIDENCE:** screenshots of the public Zenodo record at https://zenodo.org/records/23689714, showing the downloadable 159-page PDF `The_Composers_Prompt_Joe_Nasr.pdf`, Book resource type, Published 2026, version 1.0.0, DOI `10.5281/zenodo.23689714`, creator displayed **Nasr, Joe**, publisher Zenodo, Open access, and custom all-rights-reserved notice (copyright © 2026 Joseph Ribal Nasr).
- **AFTER:** public Zenodo record is **PUBLISHED / VERIFIED_BY_AUTHOR_SCREENSHOT**. Concept DOI shown on record: `10.5281/zenodo.23689713` (all versions), distinct from the version DOI. UI showed 13 views, 5 downloads; these are transient, not durable claims.
- **VERIFICATION LIMIT:** bytes, PDF checksum, precise publication day, formal API metadata, and relationship to the locked Git blob were **NOT INDEPENDENTLY RECHECKED**. Do not assert checksum identity from matching page count. Do not create another Zenodo deposit.
- **Authority boundary:** the deposited creator name **Joe Nasr** and repository's locked publication credit **J. Nasr** refer to one person; the cover displays **Joe Nasr**. Preserve the original release lock; document the discrepancy rather than silently rewriting copyright or PDF identity.

## ResearchGate – account approved, upload blocked
- Authenticated profile settings screenshot showed two verified email identities on the same account (primary and additional). Account addresses are omitted from this public repository register.
- ResearchGate account approval correspondence was dated **2026-11-04**. This verifies account approval, **not** acceptance of a particular publication.
- Manual Book form populated the account author **Joseph Nasr**. A PDF-select/upload step repeatedly showed the generic red **“An error occurred”**. It is **not proven** to be PDF corruption.
- Repeated attempts were followed by an **“Access is temporarily restricted”** security page (unusual activity detected on device/network). User acknowledged repeated attempts. **Do not treat temporary restriction as account rejection or DOI invalidity.**
- **State:** ACCOUNT_APPROVED / PROFILE_EMAILS_CONFIRMED_BY_SCREENSHOT / BOOK_RECORD_NOT_VERIFIED / FILE_UPLOAD_FAILED / ACCESS_TEMPORARILY_RESTRICTED.
- **Next step when access returns:** first inspect the profile for an existing book record; then create a **Book** bibliographic entry without PDF using verified version DOI `10.5281/zenodo.23689714` and correct title, verifying date and automatically assigned research-unit affiliation before submission. Submit once; verify saved public record. A full-text upload is optional and should be attempted separately only if appropriate. No duplicate record or repeated login attempts.
- **DOI metadata:** verified by screenshot as Book, year 2026, version 1.0.0. Date selection on ResearchGate must not default to the current day as a supposed first-publication date.

## Google Books / Play Books – partner account review
- Google Play Books Partner Center screenshot on 2026-11-06 showed two catalog entries: **The Composer’s Prompt: Music Theory…** and **Dorking: The Art of Search Intelligence**. The account carried a **preliminary policy review** banner, stating edits do not go live on Google Play or Google Books during review and to allow up to 30 days.
- Email evidence: partner welcome dated 2026-11-03 and payment contact information changed dated 2026-11-03. Neither establishes book approval or discoverability.
- **State:** PARTNER_ONBOARDED / TWO_CATALOG_ITEMS_VISIBLE / PRELIMINARY_POLICY_REVIEW_PENDING / PUBLIC_GOOGLE_BOOKS_LISTING_NOT_VERIFIED.
- Do not claim that catalog presence equals published or indexed on Google Books; do not overwrite the finalized PDF or automatically update publication date.

## Harvard Dataverse – unresolved discrepancy
- Historic GitHub preparation notes say **DEVELOP FURTHER / NOT READY / NOT DEPOSITED** for a *separate curated educational dataset*; they explicitly exclude the all-rights-reserved book from an open-licensed dataset package.
- An earlier conversation described a Harvard dataset as **submitted for review**, with DOI `10.7910/DVN/ZCZ0NA`; this was **not substantiated by a live Harvard account, public record or screenshot** in this 2026-11-06 session. Do not assume this is the same dataset as the candidate in this repository.
- **State:** CONFLICT / EXTERNAL_STATUS_UNKNOWN. Check authoritative Harvard account, persistent identifier, title, scope, review status and record visibility before changing historical readiness or asserting submission/publication.
- No new Harvard submission authorized.

## ORCID – known identity, sync unverified
- Existing identity reference: https://orcid.org/0009-0004-5698-9097. Previously recorded DOI-linked works and name variants should be compared against the public ORCID record.
- **State:** IDENTIFIER_RECORDED / CURRENT_WORKS_SYNC_NOT_RECHECKED. Never infer current synchronization just from a repository URL.

## Next-state gates
1. ResearchGate: wait for legitimate access restoration, check for duplicates, create book metadata-only record if absent, then independently verify public result.
2. Google Books: await account policy decision; verify actual public listing before treating as indexed/published there.
3. Zenodo: optional read-only DOI API and asset checksum recheck; no resubmission.
4. Harvard: reconcile claim of pending submission with authenticated record before changing current status.
5. ORCID: read-only compare author aliases and DOI entries against Zenodo; preserve one person and distinct edition licensing.

## Invariants
The **final locked PDF, release-lock file, existing interactive CC BY 4.0 edition, DOI registrations, and production deployments are unchanged**. Canonical public-identity hub remains https://joe-nasr-signals.vercel.app/ as an external reference only – do not edit or deploy to it. Avoid public leakage of email-login/security details, IP addresses, or internal diagnostic data; this operational document is for repository maintenance.
