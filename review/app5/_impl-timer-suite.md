# Timer Suite — Implemented Fixes

Edited file: `/workspace/app5-2026-11-27/base3/timer-suite/index.html`

## The 2 Fixes Implemented

### 1. Persist Classroom & Workout Settings + Quick & Saved Presets (Critic Fix #2)
- **What was added:**
  - Stage (`stMin`, `stWarn`), Classroom (`clMin`, `clWarn`), Workout (`wkWork`, `wkRest`, `wkRounds`), and Stage `autoAdvance` settings now save automatically to `localStorage` (`fac_timer_suite_v2` under an optional `settings` object) using the existing `persist()` function and load back on reload.
  - Added 5 built-in 1-tap starter presets (`Tabata 20/10 × 8`, `HIIT 40/20 × 6`, `EMOM 60s × 10`, `15-Min Quiz`, `5-Min Lightning Talk`).
  - Added unlimited custom named presets stored in the optional `state.presets` array, saved via `persist()`, and automatically included in `.json` backup/restore (older backups without `settings` or `presets` still load cleanly with safe defaults).
  - Sample data now includes 2 sample presets marked `sample: true` that clear and undo cleanly alongside sample cues.
  - Updated in-app backup/help copy that previously stated Classroom and Workout settings reset on reload.
- **Where the buyer finds it:**
  - Tap **Set times and cues** (or **All features** in the bottom tab bar).
  - Edit any numbers in **Stage / Show**, **Classroom**, or **Workout** — they save automatically.
  - Scroll to the **Quick presets** card (visible in all three modes) to tap a built-in starter, save the current timer as a named preset, or load/delete saved presets.

### 2. Full Cue-List Editing, Reordering, Speaker/Notes, Auto-Advance & CSV/Print Export (Critic Fix #3)
- **What was added:**
  - Added an optional **Speaker or note** field (`note`) when adding or editing cues; the active cue's note displays on the live Stage screen below the clock stats.
  - Added inline **Edit** (label, minutes, speaker/note with `Save` / `Cancel` and `Enter` / `Escape` support) and reorder (**↑** / **↓**) buttons on every cue row while keeping the active cue tracked.
  - Added an **Auto-advance cues** switch in Stage timer settings (persisted in `state.settings.autoAdvance` and included in backups). When On, reaching `00:00` automatically plays the transition alert and starts the next cue instead of counting overtime (the final cue still counts overtime normally).
  - Added offline **Export CSV** (`Cue,Minutes,Notes`) and **Print run of show** (clean print-only run-of-show table with total duration) buttons below the cue list, and updated the paste/CSV importer to also accept exported 3-column CSVs (`Cue,Minutes,Notes`) alongside `"Keynote, 25"` and `"Q&A 10:00"`.
- **Where the buyer finds it:**
  - Tap **Set times and cues** (or **All features**) in **Stage / Show** mode.
  - **Auto-advance cues** switch is inside **Stage timer settings**.
  - **Speaker or note**, inline **Edit**, **↑ / ↓** reorder, **Export CSV**, and **Print run of show** are inside **Run-of-show cue list**.

## What Was Not Done
- **Critic Fix #1 (external files & shell tweaks):** Did not edit `listing.md` or the bonus PDFs (outside `index.html`), and did not modify `FAA2_CFG.bonusBase`, the FAUX paste modal's `← Back` button, or fullscreen `.faa-bar`/`.faa-nav` hiding.
- **Critic Fix #4:** Did not add `-1m` / `+1m` live nudges, a stage message overlay banner, or screen-flash alerts.
- **Critic Fix #5:** Did not add a visual progress pie/ring, a 4th Stopwatch mode, a wall-clock readout, or Workout prep countdown / per-round exercise labels.
- **Critic Fix #6:** Did not add multiple Web Audio alert sounds (chime/bell/buzzer/countdown ticks) or `speechSynthesis` voice callouts.
- **Critic Fix #7:** Did not add display color themes or landscape viewport font scaling.
- **Critic Fix #8 & Design Fixes:** Did not modify the Home screen answer card, Home hero color states, yellow sample banner copy, bottom tab bar, or Help shortcut reference.
