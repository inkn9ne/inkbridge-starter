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

## Closed

- (none)
