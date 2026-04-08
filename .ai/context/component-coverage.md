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
- `src/components/ui/dropdown-menu.stories.tsx`
- `src/components/ui/select.stories.tsx`
- `src/components/ui/separator.stories.tsx`
- `src/components/ui/sheet.stories.tsx`
- `src/components/ui/table.stories.tsx`
- `src/components/ui/dialog.stories.tsx`
- `src/components/ui/accordion.stories.tsx`
- `src/components/ui/breadcrumb.stories.tsx`
- `src/components/ui/pagination.stories.tsx`
- `src/components/ui/sonner.stories.tsx`
- `src/components/gradient-showcase/gradient-showcase.stories.tsx`

Current coverage summary:
- Atoms: `Button`, `Badge`, `Input`, `Alert`, `Checkbox`, `Switch`, `RadioGroup`, `Separator`, `Label`
- Molecules: `Card`, `Tabs`, `Accordion`, `Breadcrumb`, `Pagination`
- Navigation/menus: `DropdownMenu`
- Forms: `Select`
- Data: `Table`
- Overlay/portal patterns: `Tooltip`, `Popover`, `Dialog`, `Sheet`
- Utility/demo: `GradientShowcase`

Components added (no stories yet):
- `Sonner` (Toast) — `src/components/ui/sonner.tsx`
- `Chart` — `src/components/ui/chart.tsx`
- `Form` — `src/components/ui/form.tsx`
- `Label` — `src/components/ui/label.tsx`
- `ScrollArea` — `src/components/ui/scroll-area.tsx`
- `Drawer` — `src/components/ui/drawer.tsx`
- `InfoCard` — `src/components/ui/info-card.tsx`

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
- `Toast` (Sonner)
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

**Phase 1 — complete**
- [x] Tabs
- [x] Switch
- [x] Checkbox
- [x] RadioGroup
- [x] Tooltip
- [x] Popover

**Phase 2 — complete**
- [x] Select
- [x] Dialog
- [x] Sheet
- [x] Table
- [x] Toast (Sonner)

**Phase 2+ (added beyond plan)**
- [x] DropdownMenu
- [x] Accordion
- [x] Breadcrumb
- [x] Pagination
- [x] Separator
- [ ] Drawer — component added, stories missing
- [ ] ScrollArea — component added, stories missing
- [ ] Chart — component added, stories missing
- [ ] Form — component added, stories missing
- [ ] InfoCard — component added, stories missing

**Phase 3 — pending**
- [ ] FormRow/FieldGroup
- [ ] PricingCard/PlanCard
- [ ] SegmentedControl/NavTabs
