# Implementation Summary — 1099 Quarterly Tax Planner

## The 2 Fixes Implemented

### 1. In-App 4-Quarter Payment Tracker (Paid vs. Left + Confirmation Log)
- **Addresses:** Critic report `FIXES - FUNCTIONAL/BREADTH/CONTENT` #2 and `BREADTH GAPS` ("No in-app quarterly payment ledger (paid vs. remaining per quarter)").
- **What was built:**
  - Turned the `Quarterly Due Dates` card into an interactive **4-Quarter Payment Tracker** for both **2026** and **2027**.
  - Added a live **Paid vs. Left summary strip** showing **Paid so far**, **Left (safe min)**, and **Left (full est.)**, plus a progress bar (`X of 4 quarters logged`) and a 4-bar visual Q1–Q4 strip.
  - Added an inline **Log payment / Edit** form on every quarter (Q1–Q4) with 1-tap quick-fill chips (`Use safe min`, `Use full`), **Amount paid**, **Date paid**, **How you paid** (`IRS Direct Pay`, `EFTPS`, `Check / money order`, `Card / other`), **Confirmation #**, and **Delete** (with Undo toast).
  - Automatically syncs logged quarterly payments for the active tax year into `Federal quarterly estimates already paid` (`paidYTD`) while staying backward-compatible with older saved files that only used the single `paidYTD` input.
  - Formatted due dates in plain English (`Apr 15, 2026`, `Next · X days left`) while keeping the Home screen answer card's read hooks untouched.
  - Added a printable **Federal Estimated Payments Record** table to `Print 1-page tax summary` for whichever year (2026 or 2027) is selected.
  - Saved in `state.payments` via `saveState()` under `fac-1099-estimator-2026-v2` (automatically included in backup/restore), with 2 sample payment rows marked `sample: true` totaling `$8,100` to match the existing sample data.

### 2. Offline Profit & Business Expense Worksheet (Schedule C Categories, Mileage & Home Office)
- **Addresses:** Critic report `FIXES - FUNCTIONAL/BREADTH/CONTENT` #3 and `BREADTH GAPS` ("No income or Schedule C expense/deduction tracker" and "No mileage log or home-office estimator").
- **What was built:**
  - Added a collapsible **Profit & expense worksheet (income, costs, miles, home office)** right below `Your year in plain numbers` (keeping the fast 3-question flow completely intact).
  - Added a 1-tap helper link under `Expected 1099 net profit` (`Don't know your profit? Add income, costs & miles ↓`) to jump straight to the worksheet.
  - Built 3 compact phone-first tabs inside the worksheet:
    1. **Income:** Log 1099 client/platform payments (source, amount, optional date) with 1-tap remove + Undo.
    2. **Expenses:** Log business costs across 9 plain-English Schedule C categories (`Supplies & gear`, `Software & apps`, `Phone & internet`, `Advertising & marketing`, `Contract help`, `Travel & business meals`, `Insurance & fees`, `Rent & workspace`, `Other business cost`), with live **Totals by Schedule C category**.
    3. **Miles & Office:** Business miles calculator with 2026 IRS standard rate presets (`72.5¢ Jan–Jun 2026` per Notice 2026-10 and `76¢ Jul–Dec 2026` per Ann. 2026-11, plus editable rate for 2027) and a simplified home-office estimator (`$5/sq ft`, capped at `300 sq ft` / `$1,500 max` per IRS Pub. 587).
  - Displays a live summary (`Income − Expenses − Miles & office = Estimated net profit`) with a 1-tap **`Use $X as my 1099 net profit`** button (with Undo toast) and adds a compact Schedule C Profit Worksheet summary to `Print 1-page tax summary`.
  - Saved in optional fields `state.incomeItems`, `state.expenseItems`, and `state.worksheet` via `saveState()` (automatically included in backup/restore and safely defaulted on older saved files), with sample rows marked `sample: true` that reconcile exactly to the sample `$63,590` net profit.

## Where the Buyer Finds Them in the App
- **4-Quarter Payment Tracker:** Tap **All features** in the bottom tab bar (or **See all four payments ›** on the Home answer card), then scroll to **2026 Quarterly Due Dates & Payments** (switch between 2026 and 2027 at the top of `All features`). Tap **Log payment** or **Edit** on any quarter.
- **Profit & Business Expense Worksheet:** Tap **All features** in the bottom tab bar, then either tap **Don't know your profit? Add income, costs & miles ↓** under the profit box or open the **Profit & expense worksheet (income, costs, miles, home office)** drawer right below the first card.

## What Was Not Done
- **Carry-over external/PDF blockers (Critic Fix #1 & #7):** Did not edit PDFs (`Start-Here.pdf`, `Payments-Record-and-Tax-Time-Summary.pdf`, bonus cheat sheets/CSV templates) or the staging `bonusBase` URL (only `index.html` was in scope, and Home/shell/bottom tab bar were left unchanged per rules).
- **Standalone SVG tax-split donut/stress charts (Critic Fix #4):** Added the lightweight 4-quarter paid progress bar inside the Payment Tracker, but did not build a separate donut chart or `-25% / Plan / +25%` comparison chart.
- **State Tax Reference Drawer (Critic Fix #5):** Did not add a 50-state tax rate lookup picker.
- **CSV Export / Import inside the worksheet (Critic Fix #3 CSV part & #6):** Did not add `.csv` import/export buttons; backup/restore continues to use the existing `.json` system and 1-page print.
- **Walkthrough video & listing proof (Critic Fix #8) and Home screen / bottom nav layout design fixes:** Out of scope (Home screen answer card and bottom tab bar were preserved untouched).
