# Freelancer Money System — Functional & Breadth Improvements

**File edited:** `/workspace/app5-2026-11-27/base3/freelancer-money-system/index.html`

## 2 Fixes Implemented

### 1. Monthly P&L Dashboard & Spending by Category with Inline SVG Charts (Critic Fix #3)
- Added a **Monthly profit & cash flow** card with year selector chips (automatically listing every year present in saved invoices, expenses, and mileage trips), an offline pure-SVG 12-month grouped bar chart (**Money in** vs **Costs + mileage**), and a phone-first monthly P&L table (`Month`, `In`, `Costs`, `Net` + yearly `Total`) with an `Active months only` / `Show all 12 months` toggle.
- Added a **Spending by category** card with a `<year>` / `All time` toggle, a pure-SVG donut chart showing total costs, biggest-category callout, and per-category breakdown rows (dollar total, item/trip count, % share, and inline SVG bar) covering all business expense categories (including custom categories) plus a dedicated **Mileage write-off** line.
- Included the **Spending by category** table in the 1-page Print Summary (`#printSummary`) as well.

### 2. Removed All Editing Dead Ends + Added Custom Expense Categories (Critic Fix #4 — core editing & categories)
- **Open invoices (`Weekly chase queue`):** Added **Part paid** (inline partial-payment form with remaining-balance guard, date paid, and Undo) and **Edit** (inline editor for invoice #, client, description, billed amount, paid amount, issued/due/paid dates, with Undo), plus clearer partial-payment status (`Paid X of Y · Balance Z`).
- **Paid invoices (`Paid invoice history`):** Added **Edit**, **Mark unpaid** (moves invoice cleanly back to the chase queue with 7-second Undo), and **Delete** (with Undo) so paid invoices are no longer permanent dead ends.
- **Business expenses & 2026 mileage trips:** Added inline **Edit** forms (with Undo) to every saved expense and mileage trip row (mileage edits recalculate the 2026 H1/H2 IRS split rate automatically).
- **Custom expense categories:** Added an optional `customCategories: []` field to `state` (safe default when loading older saved data or backups, saved via `persist()`, included automatically in backup/restore, and preserved when clearing sample data). Custom categories appear in the Add Expense form, saved expense dropdowns, inline expense editor, CSV import draft rows, and the Spending by Category chart.

## Where the Buyer Finds Them
- **Monthly profit & cash flow** and **Spending by category** charts: Bottom tab **All features** → **Profit & Tax** tab (directly beneath the top Profit & Tax summary card).
- **Manage custom categories**, **Edit** expense, and **Edit** mileage trip: **All features** → **Profit & Tax** tab (inside **Saved business expenses** and **2026 Split IRS mileage log**).
- **Part paid**, **Edit** (open & paid invoices), **Mark unpaid**, and **Delete** on paid invoices: **All features** → **Who Owes Me** tab (inside **Weekly chase queue** and **Paid invoice history** at the bottom of the tab).

## What Was Not Done
- **Fix #1 (Launch-blocking PDF & staging URL fixes):** PDF files (`Start-Here.pdf`, `First-10-Minutes.pdf`) are outside `index.html`, and the final production `bonusBase` URL was not specified; left untouched.
- **Fix #2 (Multi-year filter on top KPI card & Multi-Year Comparison table):** Kept the existing top KPI totals and `computeFreelancer` contract untouched to preserve Home screen answer card compatibility; year filtering was added to the new Monthly P&L and Spending by Category dashboards instead.
- **Fix #4 extras (Currency switcher & color themes):** Intentionally omitted to keep the Home screen answer card, USD formatting, and CSV headers untouched and ship a safe, rock-solid version within scope.
- **Fix #5 (Save unlinked CSV deposits as direct income + deposit duplicate detection):** Deferred for a future pass.
- **Fix #6 (Printable/PDF Client Invoice Generator, `$2,000` 1099-NEC visual reference tag, optional Sales Tax Collected):** Deferred for a future pass.
- **Fix #7 (Quarterly Tax Set-Aside Reference table & `.ics` quarterly reminders + Help tour):** Deferred for a future pass.
- **Fix #8 (Listing copy & Etsy gallery assets):** Outside `index.html`.
