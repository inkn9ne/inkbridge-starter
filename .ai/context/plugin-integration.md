# Plugin Integration (Starter Repo)

This repo uses the published `inkbridge` package as the Figma plugin source.

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
