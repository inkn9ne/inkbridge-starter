# Component Coverage (Starter)

## Baseline (current stories)

Detected story files:
- `src/components/ui/alert.stories.tsx`
- `src/components/ui/badge.stories.tsx`
- `src/components/ui/button.stories.tsx`
- `src/components/ui/card.stories.tsx`
- `src/components/ui/input.stories.tsx`
- `src/components/gradient-showcase/gradient-showcase.stories.tsx`

Current coverage summary:
- Atoms: `Button`, `Badge`, `Input`, `Alert`
- Molecules: `Card`
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

- [ ] Tabs
- [ ] Switch
- [ ] Checkbox
- [ ] RadioGroup
- [ ] Tooltip
- [ ] Popover
- [ ] Select/Combobox
- [ ] Toast
- [ ] Dialog/Sheet
- [ ] Table
