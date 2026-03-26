# Component Coverage (Starter)

## Baseline (current stories)

Detected story files:
- `src/components/ui/alert.stories.tsx`
- `src/components/ui/badge.stories.tsx`
- `src/components/ui/button.stories.tsx`
- `src/components/ui/card.stories.tsx`
- `src/components/ui/checkbox.stories.tsx`
- `src/components/ui/input.stories.tsx`
- `src/components/ui/popover.stories.tsx`
- `src/components/ui/radio-group.stories.tsx`
- `src/components/ui/switch.stories.tsx`
- `src/components/ui/tabs.stories.tsx`
- `src/components/ui/tooltip.stories.tsx`
- `src/components/gradient-showcase/gradient-showcase.stories.tsx`

Current coverage summary:
- Atoms: `Button`, `Badge`, `Input`, `Alert`, `Checkbox`, `Switch`, `RadioGroup`
- Molecules: `Card`, `Tabs`
- Overlay/portal patterns: `Tooltip`, `Popover`
- Utility/demo: `GradientShowcase`

## Target coverage (UI-library baseline)

Priority P1 (high leverage + common frameworks):
- `Tabs`
- `Switch`
- `Checkbox`
- `RadioGroup`
- `Tooltip`
- `Popover`

Priority P2 (interaction + data):
- `Select` / `Combobox`
- `Toast`
- `Dialog` / `Sheet`
- `Table` (base + compact)

Priority P3 (composed patterns):
- `FormRow` / `FieldGroup`
- `PricingCard` / `PlanCard`
- `NavTabs` / `SegmentedControl`

## Story requirements per component

Minimum story set:
- `Default`
- `Variants`
- `States` (focus/disabled/error)
- `Responsive`
- `Composition` (icons, text, nested layouts)

Optional (for known risky components):
- `PortalOpen` (for Dialog/Popover/Tooltip/Select)
- `Stress` (long text, wrapping, overflow)

## Tracking checklist

- [x] Tabs
- [x] Switch
- [x] Checkbox
- [x] RadioGroup
- [x] Tooltip
- [x] Popover
- [ ] Select/Combobox
- [ ] Toast
- [ ] Dialog/Sheet
- [ ] Table
