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

- Date: 2026-04-07
- Component/story: Sonner / all stories (ToastPanel, Default, Variants, etc.)
- Expected: Figma frames generated for all stories
- Actual: Component appears selectable in plugin UI but no frame is created in Figma
- Repro steps: Add `sonner.stories.tsx` with only portal-based trigger stories; run Generate Design System
- Candidate root cause: Renderer skips frame creation when `analysis.layout.display === null`. `sonner.tsx` has no Tailwind classes (it wraps an external portal component), so `extractAllClassesFromFile` returns `[]` → `inferLayout` returns `{display: null, direction: null}`. Workaround: added non-exported `ToastItem` with Tailwind classes to `sonner.tsx` so the scanner picks up layout hints.
- Linked issue/PR: (open in inkbridge repo — renderer should fall back to story `jsxTree` layout when component-level layout is null)
- Status: Workaround applied in starter; root fix needed in inkbridge renderer

- Date: 2026-04-07
- Component/story: Sonner / all stories
- Expected: Sonner block placed in correct position in Organisms section
- Actual: Sonner block overlays the Design Tokens row; secondary theme column renders empty button outlines instead of toast content
- Repro steps: Generate design system with Sonner having multiple trigger stories (Default, Variants, etc.)
- Candidate root cause: (1) Placement bug — Organisms section Y offset calculated before Design Tokens row height is finalized. (2) Secondary theme empty frames — ButtonPrimitive expansion fails or produces empty frames in secondary theme context when trigger stories are present.
- Linked issue/PR: (open in inkbridge repo)
- Status: Mostly resolved. Secondary theme renders correctly. Primary theme had stale cached frames from previous broken runs — workaround is to manually delete the Sonner block in the Primary Theme column and regenerate. Root fix needed in inkbridge: stale frames from previously broken renders should be invalidated when the component block hash changes.

- Date: 2026-04-13
- Component/story: Dialog / Confirm + responsive previews
- Expected: Dialog content renders at correct width and height, no clipping
- Actual: Dialog content in Confirm/responsive preview frames is clipped or misaligned (width/height flow issue)
- Repro steps: Generate design system; inspect Dialog Confirm block at node 509:1509 in Figma
- Candidate root cause: Stale upstream `widthOverride` leaking into dialog content panels via responsive strip/container chain in `populateStoryLayout()` → `applyFullWidthIfPossible()`. Close-icon position bug is resolved. Content sizing is the remaining issue.
- Linked issue/PR: `feat/figma-portal-rendering` branch in inkbridge repo. Partial fixes applied (root-only grid-col extraction, removed forced 1px resize, bounded widthOverride to parent content box).
- Status: Open — plugin-side root fix needed. Story content is not the cause; no starter story changes required.

## Closed

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
