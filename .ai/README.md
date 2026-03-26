# AI Docs: inkbridge-starter

This `.ai/` folder is the internal working context for the **starter repo**.

Scope:
- Starter component catalog and Storybook organization
- Starter-specific plugin regression surfaces (stories/pages used as test vectors)
- Plans for expanding the starter into a stronger UI-library-style testbed

Out of scope:
- Core plugin internals and renderer/scanner implementation details
- Figma plugin architecture decisions that belong in the main `inkbridge` repo

Cross-repo source of truth:
- Core plugin docs live in sibling repo: `../inkbridge/.ai/`
- Primary references:
  - `../inkbridge/.ai/agents/figma.md`
  - `../inkbridge/.ai/context/figma-tokens.md`

## Quick map

- [`index.md`](./index.md) — index and entry points
- [`context/component-coverage.md`](./context/component-coverage.md) — current vs target component coverage
- [`context/plugin-integration.md`](./context/plugin-integration.md) — how starter integrates with plugin
- [`context/regressions.md`](./context/regressions.md) — known rendering/scanner regressions from starter stories
- [`plans/ui-library-expansion.md`](./plans/ui-library-expansion.md) — roadmap for adding UI-framework-like components
- [`decisions/`](./decisions) — ADR-style decisions for this repo
