# Plugin Integration (Starter Repo)

This repo uses the `inkbridge` npm package as the Figma plugin source, with an
optional local-link mode for faster plugin iteration.

## Local workflow

1. Install dependencies:
   - `pnpm install`
2. Start dev server:
   - `pnpm figma:dev`
3. In Figma Desktop, import plugin manifest from:
   - `node_modules/inkbridge/manifest.json`
4. Run plugin command:
   - `Generate Design System Page`

## Scanner contract

The plugin reads component defs from starter stories.

Current script:
- `pnpm figma:scan` → `tsx node_modules/inkbridge/scanner/cli.ts`

Notes:
- Story coverage directly affects what appears in generated Figma frames.
- Missing stories = lower regression visibility for plugin rendering.

## Local plugin-link workflow (recommended for plugin dev)

When iterating on plugin rendering/scanner behavior, use the sibling repo
directly instead of publishing every test build.

Scripts:
- `pnpm figma:plugin:which` — show current `inkbridge` source/version
- `pnpm figma:plugin:use-local` — point starter to `file:../inkbridge/tools/figma-plugin-tailwind-tokens`
- `pnpm figma:plugin:use-beta` — switch back to npm `beta` dist-tag

Install freshness rule (important):
- Default relink command: `pnpm figma:plugin:use-local`
- Recovery for stale local package/cache only: `pnpm add -D inkbridge@file:../inkbridge/tools/figma-plugin-tailwind-tokens --force`
- Do not use `--force` for every run; use it only when plugin changes are not reflected in Figma after a normal relink.

Suggested loop:
1. In `../inkbridge`, edit plugin source.
2. In `../inkbridge`, run `pnpm figma:build`.
3. In starter, run `pnpm figma:plugin:use-local`.
4. In starter, run `pnpm figma:scan` and validate in Figma.
5. After publish, run `pnpm figma:plugin:use-beta` to return to released builds.

## Stable vs WIP lanes (2026-03-30 checkpoint)

To avoid losing context and to stop patch-on-patch instability, we keep two local
plugin lanes in `../inkbridge/tools/figma-plugin-tailwind-tokens`:

- Stable lane:
  - Branch: `stable/plugin-ba1620f`
  - Commit: `ba1620f`
  - Purpose: baseline for reproducible starter testing
- WIP lane:
  - Branch: `wip/plugin-stabilization-poc-2026-03-30`
  - Commit: `faa0bfe`
  - Purpose: in-progress mapper/render stabilization experiments

Why this was added:
- Recent regressions did not come only from starter component code.
- We were iterating directly on shared plugin core files (scanner/render/layout/state),
  so small changes propagated across many components.
- A likely break period started around symbol and broader renderer stabilization work.

Operational rule:
1. Reproduce bug on `stable/plugin-ba1620f` first.
2. Fix in WIP lane.
3. Validate on starter stories.
4. Promote to stable only after agreement and regression check.

Local switch commands:
- Switch plugin repo lane:
  - `cd ../inkbridge/tools/figma-plugin-tailwind-tokens`
  - `git switch stable/plugin-ba1620f` or `git switch wip/plugin-stabilization-poc-2026-03-30`
- Re-link starter after switching:
  - `cd ../../inkbridge-starter`
  - `pnpm figma:plugin:use-local`
  - if stale, retry once with: `pnpm add -D inkbridge@file:../inkbridge/tools/figma-plugin-tailwind-tokens --force`

## Versioning / updates

- Starter should pin and bump `inkbridge` intentionally.
- When bumping plugin version:
  - re-run `pnpm figma:scan`
  - regenerate in Figma
  - record regressions in `context/regressions.md`

## Source-of-truth split

- Plugin logic/docs: sibling repo `../inkbridge`
- Starter usage/docs: this repo

When behavior mismatches are found, open issue/PR in `inkbridge` and cross-link from starter docs.
