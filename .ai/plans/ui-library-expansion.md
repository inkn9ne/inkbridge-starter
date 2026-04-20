# Plan: Starter UI Library Expansion

Goal: evolve `inkbridge-starter` from demo-only components into a practical UI-library baseline that also functions as a plugin edge-case harness.

## Phase 1: Core controls

Deliver:
- Tabs
- Switch
- Checkbox
- RadioGroup
- Tooltip
- Popover

For each component:
- colocate in `src/components/ui/`
- add `.stories.tsx` with `Default`, `Variants`, `States`, `Responsive`, `Composition`

Exit criteria:
- all Phase 1 components render in Storybook and Figma generation without hardcoded plugin exceptions

## Phase 2: Interaction + data

Status: mostly complete (2026-04-07)

Delivered:
- [x] Select
- [x] Dialog
- [x] Sheet
- [x] Table
- [x] DropdownMenu (bonus)
- [x] Accordion, Breadcrumb, Pagination, Separator (bonus)
- [x] Toast (Sonner)
- [ ] Drawer, ScrollArea, Chart, Form, InfoCard — components exist, stories pending

Add stress stories:
- portal-open states
- long labels and overflow
- nested flex/grid wrappers

Exit criteria:
- no blocking regressions in starter regression log
- generated Figma output matches story intent

## Phase 3: Composed patterns

Deliver:
- FormRow/FieldGroup
- PricingCard/PlanCard
- SegmentedControl/NavTabs

Exit criteria:
- composed stories exercise atoms/molecules reuse
- at least one “Plugin Torture” story/page exists and stays green

## Ongoing rules

- New component PRs must include stories.
- Story changes that reveal plugin issues must be logged in `context/regressions.md`.
- If workaround is needed, document it and open follow-up in main `inkbridge` repo.
