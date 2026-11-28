# Implementation Notes — UGC Rate & Rights Kit

## 2 Fixes Implemented (from `FIXES - FUNCTIONAL/BREADTH/CONTENT`)

### 1. Offline Deal Pipeline, Deliverables Checklist & Client Invoice Workflow (Fix #2)
- **What was built:**
  - **Pipeline & payment summary strip** showing live totals for *Pitched / open*, *Signed / filming*, *Unpaid / overdue invoices* (highlighted red when any invoice is past due), and *Paid* deals.
  - **Quick "+ Log a pitch or brand deal" drawer** so creators can track outreach from the first pitch (`Pitched` → `Negotiating` → `Signed` → `Filming` → `Invoiced` → `Paid`), with stage filter pills (`All`, `Pitched`, `Signed / Filming`, `Invoiced`, `Paid`).
  - **Per-deal stage switcher, invoice tracking & overdue alerts:** Moving a deal to `Invoiced` auto-assigns an invoice number (e.g., `INV-103`) and calculates a due date from payment terms (`Due on delivery`, `Net 14`, `Net 30`, `Net 60`). Past-due invoices show a red `Overdue (Xd late)` badge plus a 1-tap **Copy payment follow-up** button.
  - **4-step deliverables checklist** (`Brief`, `Script`, `Filmed`, `Delivered`) on every deal card with progress count (`X/4`).
  - **Logo-free Client Invoice PDF (`Print invoice (PDF)`):** Prints a clean, brand-ready invoice via `#clientPrintSheet` with zero app branding, including invoice number, dates, terms, scope, total, deposit/balance split (or `PAID IN FULL` stamp), and optional payment instructions.
  - **Upgraded CSV export & safer tax bridge:** CSV export includes the new stage, terms, due date, paid date, invoice #, and deliverable completion columns; tax-app `.json` bridge excludes un-won `Pitched` / `Negotiating` deals.
  - **Backward compatibility & backup/sample safety:** All new deal properties (`stage`, `payTerms`, `dueDate`, `paidDate`, `invoiceNo`, `contact`, `notes`, `checks`) are optional with safe defaults (`stage: "Signed"` for older saved deals). Saved via `persist()` under `fac_ugc_kit_2026_v1` and included in backup/restore. Sample deals are marked `sample: true`.
- **Where the buyer finds it:**
  - Tap **All features** on the bottom bar (or **See every line of the quote ›** on Home), then tap the **Deals & Rights** tab.

### 2. Printable 1-Page Rate Card & Creator Media Kit with 3-Package Builder (Fix #3)
- **What was built:**
  - **Creator profile & media kit inputs** (name/studio, social handle, contact email, niche, short bio, portfolio link, turnaround/payment note, add-on rates toggle, and 3 print color themes: *Studio Plum*, *Forest & Warm Sand*, *Classic Navy*).
  - **3 customizable video bundle packages** (Starter Test, 3-Video Bundle, 5-Video Pack) with editable video count, extra hooks, bundle discount %, and description — automatically synced to Quote Builder rates (with optional rate-card-only override fields).
  - **Live mobile-friendly preview card** right inside the tab.
  - **Logo-free 1-page PDF print (`Print 1-page Rate Card (PDF — no app logo)`)** styled in the chosen theme, plus a 1-tap **Copy 3-package pitch** button for DMs and emails.
  - **Backward compatibility & backup/sample safety:** Stored in optional `state.kit` via `persist()` under `fac_ugc_kit_2026_v1`, automatically included in backup/restore, safely defaulted when loading older saves/backups, and marked `sample: true` for sample data so **Clear sample** removes it cleanly.
- **Where the buyer finds it:**
  - Tap **All features** on the bottom bar, then tap the new **Rate Card** tab in the top tab bar.

---

## What Was Not Done
- **Fix #1 (prev-round bugs & external assets):** Did not edit external PDFs (`Start-Here.pdf`, `Printable-Sheet.pdf`), `listing.md`, or the Home screen answer card / `bonusBase` URLs (outside scope / file edit restriction).
- **Fix #4 (SVG revenue bar chart & YTD target progress bar):** Skipped to stay focused on the 2 highest-impact breadth additions; numeric pipeline KPIs were added instead.
- **Fix #5 (Expanded 6-template Script Vault & Before-You-Sign checklist):** Only the overdue/invoice payment follow-up and 3-package pitch copy buttons were included as part of Fixes #2 and #3; full cold-pitch/rate-anchor script vault and contract checklist were not added.
- **Fix #6 (Toggleable 3-tier package table inside Quote Builder):** Covered via the dedicated 3-package builder and pitch copy in the new **Rate Card** tab rather than adding a second table to Quote Builder.
- **Fix #7 (Per-deal expenses / net profit tracking):** Not added in this pass.
- **Fix #8 (60-second screen-recording walkthrough & Etsy listing preview updates):** Outside `index.html`.
- **Design fixes & Home/Nav rules:** Left the Home screen answer card (`#faa`) and bottom tab bar untouched as required. Also skipped offline SVG QR generation inside the Rate Card to keep the single-file script lean and reliable within the time budget (portfolio URL prints clearly on the Rate Card).
