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

## Dev command matrix (starter + plugin)

Use the command from the repo that owns it:

- In `inkbridge-starter`:
  - `pnpm figma:dev` → start starter app (scanner from installed package)
  - `pnpm figma:dev:local` → start starter app with `INKBRIDGE_LOCAL=1` (scanner TS from sibling `../inkbridge`)
- In `inkbridge` (repo root):
  - `pnpm figma:watch` → watch/build plugin `code.js` continuously
  - `pnpm figma:build` → one-off plugin build
- In `inkbridge/tools/figma-plugin-tailwind-tokens`:
  - `pnpm run watch` → same as root `pnpm figma:watch`, but from plugin dir
  - `pnpm run build` → same as root `pnpm figma:build`, but from plugin dir

Important:
- `pnpm watch` at `inkbridge` root fails (`watch` script does not exist there).
- Use `pnpm figma:watch` at root, or `pnpm run watch` inside plugin dir.

## Rebuild rules (when required)

- If you changed only starter stories/components/styles:
  - no plugin rebuild needed; regenerate in Figma is enough.
- If you changed plugin source (`ui-builder.ts`, `story-builder.ts`, renderer logic):
  - rebuild is required (`pnpm figma:build`) or keep `pnpm figma:watch` running.
- If Figma plugin is imported from the `inkbridge` repo manifest path:
  - watcher/build updates are picked up from that manifest source.
- If Figma plugin is imported from starter `node_modules/inkbridge/manifest.json`:
  - you must relink/reinstall/sync package contents after plugin source builds.

## Scanner contract

The plugin reads component defs from starter stories. The scan is triggered by the
Figma plugin via `GET /api/figma/scan-components`, which spawns the scanner CLI.

Two dev server modes:
- `pnpm figma:dev` → uses installed `node_modules/inkbridge/scanner/cli.ts` (released/beta builds)
- `pnpm figma:dev:local` → sets `INKBRIDGE_LOCAL=1`; API route uses `../inkbridge/tools/figma-plugin-tailwind-tokens/scanner/cli.ts` directly (plugin dev — no reinstall needed)

Runtime scan endpoint selection (inside the plugin UI):
- First reachable wins: `localhost:3000` → `localhost:4000` → `localhost:5173`.
- In starter sessions, `3000` is usually selected (starter app).
- If the plugin is imported from `../inkbridge` manifest instead of starter
  `node_modules/inkbridge/manifest.json`, it can end up scanning the wrong app.

Manual scan scripts (for debugging outside Figma):
- `pnpm figma:scan` → same as figma:dev, from installed copy
- `pnpm figma:scan:local` → same as figma:dev:local, from inkbridge source

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

Suggested loop (plugin dev):
1. In `../inkbridge`, edit plugin source and run `npm run build` (compiles `code.js`).
2. In starter, run `pnpm figma:plugin:use-local` to relink the installed `code.js`.
3. Start starter with `pnpm figma:dev:local` — scanner changes are always live, no reinstall needed.
4. Validate in Figma.
5. After publish, switch back: `pnpm figma:plugin:use-beta` then restart with `pnpm figma:dev`.

Important:
- `pnpm figma:dev:local` makes scanner code live from sibling `inkbridge`.
- It does **not** replace the already-imported Figma manifest source. Keep using
  starter’s `node_modules/inkbridge/manifest.json` when validating starter scans.

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
