# True Hourly — Implementation Summary

File edited: `/workspace/app5-2026-11-27/base3/true-hourly/index.html`

## 2 Fixes Implemented (from `FIXES - FUNCTIONAL/BREADTH/CONTENT`)

### 1. Shift Notes, Shift Type Tags, Inline Edit (Shifts & Tip-Out Roles), and Multi-Job Presets (Critic Fix #2)
- **What was built:**
  - **Job / role presets:** Save multiple named restaurant/role setups (base hourly wage, tip-out mode, and tip-out roles) and switch between them in one tap. Includes 2 realistic sample presets (`Harbor Table — Server` and `Harbor Table — Bar`) marked `sample: true`.
  - **Shift type tags & notes:** Optional `Lunch`, `Dinner`, `Double`, `Bar`, and `Event` chips plus an optional shift note input saved with each shift, displayed on Shift Log cards, and included in CSV export and the 1-page printable log.
  - **Inline editing for tip-out roles:** Edit any role's name, percentage, or sales base right in place with undo support (no need to delete and recreate).
  - **Inline editing for saved shifts:** Tap **Edit** on any shift in the log to update date, shift type, hours, base wage, cash tips, card tips, tip-out, or note in place, automatically recalculating net tips and total take-home (with undo support).
- **Where the buyer finds it:**
  - **All features → Shift Calc:** **Job / role presets** card near the top; **Shift type** chips and **Shift note** field inside **Shift numbers**; **Edit** button on each row inside **Tip-out rules**.
  - **All features → Shift Log:** Shift type/job badges, notes, and an **Edit** button on every saved shift row.

### 2. Bar / Team Tip-Pool Split on Tab 3 alongside Table Bill Split (Critic Fix #4)
- **What was built:**
  - Upgraded Tab 3 (**Split Tools**, keeping `data-tab="split"` and all existing Bill Split IDs/controls intact) with view chips (`Both tools`, `Bar Tip Pool`, `Table Bill Split`) and a full **Bar / Team Tip Pool** calculator.
  - Supports **Pool cash tips ($)**, **Pool card tips ($)**, optional **Support tip-out (%)**, and splitting **By hours worked** or **By shares / points** with exact-cent penny reconciliation (`SUM(payouts) === netPool`).
  - Supports adding, inline editing, and removing coworkers (with undo), **Copy split breakdown** (plain-text summary for group chats), and **Clear pool** (with undo).
  - Persisted via `persist()` under `fac_true_hourly_v2` (automatically included in backup/restore) with realistic sample coworkers marked `sample: true` in sample data.
- **Where the buyer finds it:**
  - **All features → Split Tools** (Tab 3, right above **Quick Table Bill Split**).

## Compatibility & Verification
- Preserved all existing element IDs, `data-a` attributes, `fac_true_hourly_v2` storage key, home screen answer card, and bottom tab bar.
- Added only optional JSON fields (`presets`, `activePresetId`, `pool`, `cur.shiftType`, `cur.note`, and per-shift `shiftType`, `note`, `jobName`) with safe defaults in `loadState()` so older saves and backup files load cleanly.
- Verified script syntax (`ok 9`), preserved IDs/attributes, exact-cent math for shifts (`$30.00/hr` sample unchanged) and tip pools (including penny reconciliation on repeating decimals), `sample: true` flags, and backward-compatible loading of older saves via Node.

## What Was Not Done (from the Critic List)
- **Fix #1:** Upgrading the 4-question Home wizard for `% of food / bar sales` mode and 1-tap save (kept the Home shell/wizard untouched).
- **Fix #3:** Pay-period filters (Weekly / Bi-Weekly / Semi-Monthly / This month) and offline SVG charts (Day-of-Week and Shift-Type averages) in Shift Log.
- **Fix #5:** Optional Credit Card tip processing fee (%) and shift costs (parking/transit) toggles.
- **Fix #6:** Wiring up the FAUX CSV/paste shift importer.
- **Fix #7:** Filtering the 2026 Tip Deduction Tracker strictly to real 2026-dated shifts and updating the footer check date.
- **Fix #8 & Design Fixes:** Listing copy/URLs, demo video, dark mode toggle, and Home layout tweaks (out of scope for this 2-fix single-file pass).
