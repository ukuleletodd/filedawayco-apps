# LOAD-IN Implementation Summary

Target edited: `/workspace/app5-2026-11-27/base3/load-in/index.html`

## 2 Fixes Implemented

### 1. Multi-Call Storage + Complete Call-Sheet Fields (Critic Fix #1)
- **Saved calls list (`My saved calls`)**: Added optional `calls` and `activeCallId` state fields so crew members can save multiple gigs/venues on their phone instead of overwriting the previous call. Includes **Save call**, **+ New call** (auto-saves the current call first so work is not lost, with Undo), **Open** to switch gigs (preserving each call's details, checklist progress, and schedule), **Copy for new date** for recurring venues, and **Delete** with Undo.
- **Complete call-sheet fields**: Added the 5 missing fields from the printable PDF as optional properties on `state.call` (safe empty defaults for older saved data/backups): **Doors / show time**, **Lead phone**, **Radio channel**, **Parking / load-in dock**, and **Dress / PPE note**.
- **One-tap Call / Text & Copy summary**: Entering a lead phone number displays one-tap **Call lead** (`tel:`) and **Text lead** (`sms:`) buttons. Added **Copy call summary** to copy a plain-text call sheet + schedule summary for texting or notes. All new fields also print on the logo-free 1-page **Pocket Call Card**.
- **Sample & backup support**: Added 2 clearly labeled `sample: true` calls in sample mode, cleaned cleanly on **Clear sample**, and persisted in `fac_loadin_companion_v1` via `persist()` so existing backup/restore works automatically.

### 2. Show-Day Schedule / Run Sheet + Editable Checklists & Department Starter Tool Kits (Critic Fix #3)
- **Show-day schedule (`Run sheet`)**: Added optional `scheduleStart` and `scheduleSteps` state fields with live offline time math. Setting **Day starts at** and each step's duration in minutes automatically computes start/end clock times (including midnight rollover) and total day duration (e.g., `7h total`). Includes **Load typical day** (6-step starter run sheet), custom step add form (name, minutes, optional note), **Up/Down** reordering, **Remove** with Undo, `sample: true` sample steps, and automatic inclusion on the printed **Pocket Call Card**.
- **Editable checklist (`Show phases`)**: Kept all 16 built-in steps intact and added optional `customChecks` so techs can add venue-specific steps under any phase (**Night Before**, **Arrival**, **During**, **Strike & Load-Out**) and remove custom steps with Undo. Progress (`#chkProg`) automatically reflects built-in + custom steps.
- **1-tap department starter tool kits**: Added 5 role starter buttons (**Stagehand**, **Breakout GAV**, **A2 Audio**, **V2 Video**, **L2 Lighting**) inside **My pocket tools** that append missing department tools (case-insensitive dedupe) with Undo.

## Where the Buyer Finds Them
- **All features → Call Day tab**:
  - **My saved calls** card at the top of Call Day (save, start new call, switch calls, copy a repeat venue for a new date, delete).
  - **My call sheet details** card directly below (all 9 fields, one-tap **Call lead** / **Text lead** when a phone number is filled, and **Copy call summary**).
  - **Show-day schedule** card below call details (day start time, **Load typical day**, auto-timed steps with Up/Down/Remove, and add-step form).
  - **Show phases** card (all 16 built-in checks plus **Add your own checklist step** at the bottom of the card).
  - **My pocket tools** card (**1-tap starter kits by role** buttons right above the add-tool input).
- **All features → Glossary tab → Print 1-page pocket call card**: Now prints all new call-sheet fields and the Show-Day Schedule alongside pocket tools, comms phrases, and the safety rule (still logo-free).
- **Save a backup file / Restore**: Automatically backs up and restores `calls`, `scheduleSteps`, `customChecks`, and expanded `call` fields via `fac_loadin_companion_v1`.

## What Was Not Done
- **Backstage Dark Mode toggle (Critic Fix #2)**: Skipped to keep the Home screen answer card and app shell CSS untouched and avoid cross-layer contrast regressions within the time budget.
- **AV Pocket Reference & Calculators / SVG signal diagrams (Critic Fix #4)**: Not implemented in this pass.
- **Glossary expansion to 65+ terms & category filters (Critic Fix #5)**: Not implemented (also preserves the existing Home answer card's static `"27 words"` stat).
- **CSV gig log export & stripping unused `faux-js` PayPal/Stripe/Wells Fargo helpers (Critic Fix #6)**: Implemented plain-text **Copy call summary**, but left CSV export and `faux-js` cleanup for a separate pass to avoid touching shared UX shell code.
- **Staging URL / `ROLES` copy tweaks and `listing.md` / PDF edits (Critic Fixes #7–#8)**: Out of scope (only `base3/load-in/index.html` was edited).
- **Home screen & bottom bar design tweaks**: Intentionally left untouched per hard rules.
