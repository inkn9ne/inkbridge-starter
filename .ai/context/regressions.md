# Starter Regression Log (Plugin-Oriented)

Use this file to record starter story cases that expose scanner/renderer bugs.

## Entry template

- Date:
- Component/story:
- Expected:
- Actual:
- Repro steps:
- Candidate root cause:
- Linked issue/PR:
- Status:

---

## Open

- Date: 2026-04-07 (re-verified 2026-04-27)
- Component/story: Sonner / all stories
- Expected: Figma frame(s) generated for the Sonner stories so the toast pattern is represented in the design system
- Actual: Sonner does not appear in the plugin's preflight list at all. Scanner filters it out before it reaches the renderer.
- Repro steps: Generate Design System Page in Figma against the starter; observe the preflight list — no Sonner entry, no Sonner frame in the resulting page.
- Candidate root cause: `sonner.tsx` is a thin wrapper around `SonnerToaster` from the `sonner` npm package. It has zero Tailwind classes, so `extractAllClassesFromFile` returns `[]` and the scanner now drops the component entirely (the symptom shifted from "selectable but empty frame" to "filtered out before preflight" via earlier scanner-side guards). The 2026-04-07 entry's claim of a starter-side `ToastItem` workaround is stale — `sonner.tsx` is back to the wrapper-only form.
- Linked issue/PR: (open in inkbridge repo — scanner / renderer should generate a representative frame for storied components even when no source classes are detectable, e.g. by falling back to story-level `jsxTree` layout hints).
- Status: Open. Two possible fixes — plugin-side root fix in the scanner / renderer fallback path, or starter-side placeholder by adding a non-exported component with Tailwind classes to `sonner.tsx`.

## Closed

- Date: 2026-04-13 → resolved 2026-04-27
- Component/story: Dialog / Confirm + responsive previews
- Expected: Dialog content renders at correct width and height, no clipping
- Actual (before fix): Dialog content in Confirm/responsive preview frames was clipped or misaligned (`widthOverride` leaking via responsive strip/container chain in `populateStoryLayout` → `applyFullWidthIfPossible`).
- Resolution: `feat/figma-portal-rendering` branch was merged via PR #108 in the inkbridge repo (commit `cf82b30`), bringing in the partial fixes (root-only grid-col extraction, removed forced 1px resize, bounded `widthOverride` to parent content box). Follow-ups landed in `887c391` (responsive dialog/footer + hero centering), `4b79b03` (Sheet drawer width + stretch cascade), and the more recent symbol-resolution / responsive-cascade commits. Re-verified in Figma on 2026-04-27 — Dialog Confirm and responsive previews render at the correct sizes.
- Status: Closed. No starter changes required.

- Date: 2026-04-24
- Component/story: MobileNav / Open (Sheet drawer with nav Links)
- Expected: Drawer fills the 360 px viewport, top bar `justify-between` splits logo left / theme-switcher + X right, menu items stretch full width with arrow at the right edge, no green decorator leaking around the panel
- Actual (before fix): Panel hugged at 270–323 px, logo+theme-switcher packed tight, every menu link had a gray `hover:bg-muted` background at rest, Fragment wrapper stayed at 100 px default so nav + links collapsed to narrow pill shapes
- Candidate root causes (all resolved in sibling `inkbridge` plugin source):
  - Scanner: `cn()` / `cva()` / `twMerge()` results weren't passed through `tailwind-merge`, so `w-3/4 ... w-full` both survived on SheetContent
  - Scanner: unresolvable ternaries unioned both branches into className — `bg-muted hover:bg-muted`
  - Plugin: `tailwind.ts` never wrote `FRAME_CROSS_ALIGN`, so VERTICAL parents didn't cascade STRETCH to block children
  - Plugin: `<a>`/`<button>`/`<label>` missing from `BLOCK_TAGS` in `width-solver.ts`
  - Plugin: `injectPortalPanelWidths` measured drawer panels as content-sized, stealing the viewport-width slot from `injectPortalPanelHeights`
  - Plugin: React fragment wrapper frame never stretched in VERTICAL parents
  - Plugin: parent child loops called `applyChildProperties` with the outer `<SheetClose asChild>` wrapper's empty classes instead of the inner Link's classes
- Story-side: moved the `<div className="w-full bg-primary px-4 py-2">` decorator from meta to `Default` story only, so it no longer bleeds into `Open`'s sheet rendering
- Linked issue/PR: plugin fixes in sibling `inkbridge` repo (`component-scanner.ts`, `ui-builder.ts`, `width-solver.ts`, `tailwind.ts`, `layout-parser.ts`, `portal-panel.ts`)
- Status: Fixed end-to-end — sheet renders 360 × 700, links stretch, arrow at right edge, no ghost hover state, decorator contained

- Date: 2026-04-12
- Component/story: Dialog / OpenPanel + Confirm (including responsive preview rows)
- Expected: Close icon stays top-right, panel content does not clip/truncate in responsive previews
- Actual (before fix): Ring wrapper around close icon stretched to dialog content width; responsive preview viewport clipped taller content
- Repro steps: Generate design system and inspect Dialog block in Figma (`OpenPanel`, `Confirm`, responsive rows)
- Candidate root cause:
  - Ring parsing treated `ring-offset-*`/`ring-*` modifiers as standalone ring signals
  - Absolute-positioned ring child inherited width/stretch behaviors
  - Responsive preview viewport used `clipsContent = true`
- Linked issue/PR: plugin core fix in sibling `inkbridge` repo (`ui-builder`/`tailwind`/`node-ir`/`story-builder`)
- Status: Fixed in local plugin source; rebuild + local-link required
