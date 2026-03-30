# .ai Index (inkbridge-starter)

## Start here

1. Read [`README.md`](./README.md) for scope boundaries.
2. Check [`context/component-coverage.md`](./context/component-coverage.md) before adding components/stories.
3. If work touches plugin behavior, cross-check sibling docs in `../inkbridge/.ai/`.

## Current priorities

1. Expand starter from demo set to practical UI-library baseline.
2. Increase story coverage for plugin edge-case discovery.
3. Keep Storybook navigation clean while preserving atomic grouping.

## Working rules

- Treat Storybook stories as test vectors for Figma generation.
- Prefer adding missing states/variants in stories before changing plugin heuristics.
- Use stable/WIP plugin lanes from [`context/plugin-integration.md`](./context/plugin-integration.md) instead of stacking live patches on one branch.
- Record regressions in [`context/regressions.md`](./context/regressions.md) with minimal repro.
- Record key starter-only decisions under [`decisions/`](./decisions).

## Cross-repo coordination

Update both repos when needed:
- `inkbridge-starter` (this repo): component inventory, stories, starter UX docs
- `inkbridge` (sibling repo): scanner/render logic, plugin UX and architecture
