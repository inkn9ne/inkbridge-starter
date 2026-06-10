# Inkbridge Starter

A Next.js 16 + Tailwind v4 + Storybook project pre-configured with [Inkbridge](https://inkbridge.io). Ships with the full shadcn/ui v4 primitive set plus three real-world feature modules — so you can generate a pixel-accurate design system in Figma in minutes and see how Inkbridge handles non-trivial, composed components, not just isolated primitives.

## What's included

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** + the full shadcn/ui v4 component set
- **Storybook** with stories for every component
- **Inkbridge** pre-wired — scanner route, token patch route, and scripts ready to go
- **Multi-theme tokens** — `default` (green primary) and `secondary` (blue primary) themes in [`src/app/globals.css`](src/app/globals.css), demonstrating theme switching in Storybook and the Figma plugin's theme-selector preflight panel
- **Three feature modules** — `docs`, `marketing`, and `perps` under `src/feature/`, showing how Inkbridge handles composed feature surfaces, not just isolated primitives
- **In-app component catalogue** — a `/docs` route (hub + per-component pages with live previews) generated from your stories at build time, plus a marketing home that doubles as an overview

## Components

Components live in three buckets:

- **`src/components/ui/`** — the full shadcn/ui v4 primitive set (Forms, Display, Feedback, Overlays, Navigation, Data viz)
- **`src/components/custom/`** — your own shared components
- **`src/feature/<feature>/`** — feature surfaces

No need to enumerate them here — every component with a story shows up in the in-app catalogue at **`/docs`** and in **Storybook**, with live previews. Inkbridge auto-classifies each into its rendering strategy (CVA variant set, compound, state-machine, or simple).

### Feature modules

This starter ships three, each colocated under `src/feature/<feature>/`:

- **`docs`** — the in-app component catalogue (the `/docs` hub + per-component pages). Its `CatalogList` renders the linked component index you browse.
- **`marketing`** — the landing surface: hero, features, FAQ, comparison, and CTA sections, composed from primitives.
- **`perps`** — a perpetuals trading surface ported from a production app, sharing a domain layer (`types` + `constants` + `utils`):
  - **LeverageSlider** — dual-mode range control (native slider + −/+ buttons + synced number input)
  - **DecreasePositionModal** — Dialog portal, Select with dynamic `.map()` items, conditional sub-tree
  - **IncreasePositionModal** — embedded LeverageSlider, multi-state preview pane, gradient submit

Convention: `src/feature/<feature>/{types,constants,utils}.ts` + `components/*.{tsx,stories.tsx}` — copy this shape for your own module.

---

## Quick start

### Prerequisites

- [Figma Desktop](https://www.figma.com/downloads/) (not browser — needs localhost access)
- Node.js 18+ and pnpm

### 1. Use this template

Click **"Use this template"** → **"Create a new repository"** on GitHub, then clone your new repo.

Or clone directly to try it out locally:

```bash
git clone https://github.com/inkn9ne/inkbridge-starter.git
cd inkbridge-starter
pnpm install
```

### 2. Load the plugin in Figma Desktop

1. Open Figma Desktop
2. Go to **Plugins → Development → Import plugin from manifest...**
3. Select the file at:
   ```
   node_modules/inkbridge/manifest.json
   ```

Figma remembers this path — you only do this once per project.

### 3. Start the dev server

```bash
pnpm dev
```

### 4. Generate your design system

In Figma: **Plugins → Development → Inkbridge → Generate Design System Page**

The plugin scans your Storybook stories and builds a "Design System" page with all components rendered as native Figma frames. The preflight panel that pops up first lets you pick which themes and which components to (re)build for this run.

---

## Adding your own components

1. Create a component in `src/components/ui/` (shadcn primitive), `src/components/custom/<name>/` (your own shared component) or `src/feature/<feature>/components/` (feature surface)
2. Add a `.stories.tsx` file alongside it — args-only stories work great, the scanner inlines the component body
3. Re-run **Generate Design System Page** — it incrementally updates only what changed

See the [Inkbridge docs](https://inkbridge-868059678832.us-central1.run.app/docs) for full documentation, including the conventions for layouts, responsive previews, state matrices, and CVA variant detection.

---

## Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | Start Next.js dev server (the plugin connects to API routes served by this) |
| `pnpm build` | Build for production |
| `pnpm storybook` | Start Storybook |

The plugin works through the API routes via `pnpm dev` — no plugin-specific scripts needed. If you're developing the `inkbridge` plugin source itself (sibling `../inkbridge/` checkout) and want the local-link toggle scripts, run:

```bash
pnpm exec inkbridge setup --dev
```

That adds `inkbridge:plugin:which`, `inkbridge:plugin:use-beta`, `inkbridge:plugin:use-local`, `inkbridge:dev:local`, and `inkbridge:scan:local` to your local `package.json`.

---

## Configuration

Edit `inkbridge.config.json` to control which paths the scanner searches:

```json
{
  "componentPaths": ["src"],
  "exclude": [],
  "onlyWithStories": true
}
```

`onlyWithStories: true` is recommended — Inkbridge renders what you've actually written stories for, not every TSX file in `src/`.

---

## License

MIT
