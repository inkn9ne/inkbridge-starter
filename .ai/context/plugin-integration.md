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

Suggested loop:
1. In `../inkbridge`, edit plugin source.
2. In `../inkbridge`, run `pnpm figma:build`.
3. In starter, run `pnpm figma:plugin:use-local`.
4. In starter, run `pnpm figma:scan` and validate in Figma.
5. After publish, run `pnpm figma:plugin:use-beta` to return to released builds.

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
