# Implementation Summary — Static QR Generator (`qr-generator`)

File edited: `/workspace/app5-2026-11-27/base3/qr-generator/index.html`

## 2 Fixes Implemented

### 1. Visual Color Pickers, Curated High-Contrast Swatches, Dot/Eye Styles & "Scan Me" Frames (Critic Fix #2)
- **8 one-tap high-contrast brand swatches** (`Classic`, `Navy`, `Forest`, `Burgundy`, `Espresso`, `Royal`, `Plum`, `Cream`) that all pass WCAG scan contrast, synced bidirectionally with the hex fields.
- **Native visual color pickers** (`<input type="color">`) right beside the existing `#qFg` and `#qBg` hex boxes, plus plain-language labels (`Code color`, `Background color`, `Smudge protection`, `Wi-Fi network name`) and a `2048 px (poster)` export size option.
- **Selectable Dot Style** (`Classic squares`, `Rounded squares`, `Smooth dots`) and **Corner Eyes** (`Square corners`, `Rounded corners`, `Circle corners`) rendered consistently in both Canvas PNG and vector SVG while preserving the standard 1:1:3:1:1 finder ratio for reliable scanning.
- **Bottom "Scan Me" CTA Banner Frames** (`No frame`, `Scan Me`, `Scan for Menu`, `Scan for Wi-Fi`, and `Custom label…` up to 22 characters) rendered into a clean 1:1 square frame in the live preview, Home preview, PNG download, SVG download, and printed signs.

**Where the buyer finds it:**
- Tap **All features** (bottom tab bar) → inside the top QR setup card right below the URL / Wi-Fi / Contact / Call inputs: **One-tap color presets**, **Code color** & **Background color** pickers, **Dot style**, **Corner eyes**, and **Bottom frame label**.

### 2. 5 Logo-Free Printable Sign Templates (with Live Mini Preview) + Upgraded 50-Item Batch Mode (Critic Fix #6)
- **5 built-in logo-free printable sign templates** inside the single-QR preview card:
  1. **Counter Sign (1-up full page)** — framed counter display with headline, QR, and subtitle.
  2. **Foldable Table Tent (2-sided)** — top panel rotated 180° with a dashed fold line so one printed page folds into a two-sided table tent.
  3. **Guest Wi-Fi / Info Card (2-up half sheet)** — two cut-out half-sheet cards per page.
  4. **Mini Review / Tip Cards (4-up)** — 2×2 grid with dashed cut lines.
  5. **Sticker / Tag Sheet (12-up)** — 3×4 grid of 12 labeled QR tags per page.
- **Live miniature print preview** directly above the Print button so buyers see the chosen layout before printing (zero FiledAwayCo branding on every print layout).
- **Upgraded Batch mode (up to 50 items)**:
  - Raised limit from 20 to **50 items**.
  - Accepts `Label | Link`, pasted **Excel / Google Sheets** tab-separated rows, or **CSV (`Label,Link`)** rows (auto-skipping header rows), plus one-tap **Import CSV / TXT** file upload and **Load 4 sample rows** buttons.
  - Added selectable **Batch print sheet layout** (`4-up 2×2`, `9-up 3×3`, `12-up 3×4`).
  - Added individual **PNG** and **SVG** download buttons on every generated batch tile (inheriting the buyer's chosen export size, colors, smudge protection, and dot/eye style).

**Where the buyer finds it:**
- **Printable Sign Templates & Live Mini Preview:** Tap **All features** → scroll to **Live preview & static check** → choose a layout in **Logo-free printable template** and preview it right above **Print logo-free Sign / Wi-Fi Card**.
- **Upgraded 50-Item Batch Mode:** Tap **All features** → **Batch** tab (or **+ Add** → **Many codes at once**) → use **Import CSV / TXT**, **Load 4 sample rows**, **Batch print sheet layout**, and the per-tile **PNG** / **SVG** buttons.

## What Was Not Done
- **Fix #1 (verdict-prev.md shell/Help cleanup):** Did not modify `faa-js` / `faa2-js` / `faa-products` (Home Download PNG toast, Help `Guides & printables` backup buttons, auto-clearing `isSample` from shell tabs, or footer/staging URLs) to keep the Home screen answer card, bottom tab bar, and shell untouched.
- **Fix #3 (Center-logo image upload):** Did not add local image upload into the center of the QR code.
- **Fix #4 (Additional QR types & raw payload inspector):** Did not add Calendar Event (`vEvent`), GPS/Location (`geo:`), WhatsApp, expanded vCard fields, or a raw payload inspector toggle.
- **Fix #5 (Extra export formats):** Added `2048 px (poster)` PNG/SVG size, but did not add JPG export, transparent-background toggle, or Copy QR image to clipboard.
- **Fix #7 (On-device Saved Codes library & Private toggle):** Did not add `localStorage` persistence for saved QR libraries or strip unused bookkeeping helpers in `faux-js` (`nodata: true` / stateless privacy mode remains intact).
- **Fix #8 (External bonus PDF & `listing.md`):** Out of scope since only `qr-generator/index.html` was edited.
