# Implementation Notes — Clear Wedding Planner

Edited file: `/workspace/app5-2026-11-27/base3/clear-wedding-planner/index.html`

## 2 Fixes Implemented (from `FIXES - FUNCTIONAL/BREADTH/CONTENT`)

### 1. Itemized Category Budget (Fix #2)
- Added a dedicated **Budget** tab inside the app (`All features` → **Budget**, plus a quick jump button from `Guest Cost` → *Break down by category in Budget tab →*).
- Tracks every wedding category line by line with **Planned ($)**, **Actual / quoted ($)**, **Paid so far ($)**, **Fixed vs. Guest-based** cost type, and an optional vendor/note field.
- Shows a live budget hero card (Real/quoted total, Planned vs. Budget cap, Still left to pay, Paid %, and an inline progress bar), Fixed vs. Guest-based rollup cards, filter chips (`All`, `Fixed`, `Guest-based`, `Over plan`), inline edit/remove with Undo, a 1-tap **Add 12 starter categories** helper when empty, **Send totals to Guest Cost** rollup sync (with Undo), and 1-tap offline **Export budget (CSV)**.
- Pre-populated in Maya & Jordan's sample wedding with 12 realistic categories (`sample: true`) totaling **$45,000 planned**, **$35,084 fixed actual**, **$15,698 guest-based actual** ($50,782 total actual, $13,250 paid) — matching their existing `Guest Cost` sample numbers.
- Saved in `state.budgetItems` via `persist()` under `fac_clear_wedding_v1`, automatically included in backup/restore (`#backupBtn`, `#restoreFile`, and `FAA2`), and safely defaulted to `[]` for older saved data/backups.

### 2. Interactive Guest List, RSVP, Meal, Dietary, Table & Thank-You Manager (Fix #3)
- Upgraded the existing **Your guest list** card (`All features` → **Guest Cost** → **Your guest list & RSVPs**) from a read-only CSV name list into a full interactive in-app guest manager (always visible, usable with or without CSV import).
- Buyers can add and inline-edit individual guests or households with **Party size**, **RSVP** (`Invited / Yes / Pending / No` with 1-tap status buttons on each card), **Invite tier** (`A / B / C`), **Meal choice** (`Entrée 1–3`, `Kids' meal`, `Vendor meal`), **Dietary / allergy note**, **Table #**, **Gift received**, and **Thank-you note sent** toggle.
- Includes live summary badges (Yes heads, Waiting heads, Declined, Dietary notes, Thank-yous left), search + filter chips (`All`, `Yes`, `Waiting`, `No`, `Dietary`, `Thank-you`), an automatic **Tables** seat-count check (flags tables over 10 seats), 1-tap **Apply list to Guest Cost & Meals** sync (with Undo), and 1-tap offline **Export guest list (CSV)**.
- Kept full backward compatibility with Zola/The Knot/Joy/Google Forms CSV imports (and extended `ADAPTERS.guests` to also pick up optional Meal, Dietary, Tier, Table, and Gift columns when present).
- Pre-populated Maya & Jordan's sample with 8 sample households (`sample: true`) and automatically appends a logo-free **Dietary & Allergy Notes** table to the printable Day-Of Sheet when active guests have dietary notes.

## Where the Buyer Finds Them
1. **Itemized Category Budget:** Tap **All features** in the bottom bar (or **See the full breakdown** on Home) → tap the **Budget** tab (or tap **Break down by category in Budget tab →** inside **Guest Cost**).
2. **Interactive Guest List & RSVP Manager:** Tap **All features** → **Guest Cost** → scroll to **Your guest list & RSVPs** (tap **+ Add guest** or edit/toggle any guest directly; CSV import also feeds this list via **+ Add**).

## What Was Not Done (and Why)
- **Fix #1 (Carry-over PDFs, `listing.md`, `/review/app5/` URL, and Home answer card tweaks):** Out of scope per instructions (only `index.html` may be edited, and the home screen answer card and bottom tab bar must not be changed).
- **Fix #4 (Full visual Seating Chart / Table Planner view):** Added lightweight per-guest `Table #` and a live over-10-seats table count check inside the Guest List, rather than a separate full seating module.
- **Fix #5 (Auto-dated Wedding Countdown Checklist tab):** Not implemented to stay safely within scope/time.
- **Fix #6 (Wedding Day Kit — photo shot list, wedding party, packing list):** Not implemented.
- **Fix #7 (SVG charts & Web Share partner snapshot):** Added inline progress bars and CSV exports for Budget and Guest List; full SVG charts and Web Share flow were not implemented.
- **Fix #8 (Walkthrough video & multi-theme palette switcher):** Not implemented.
