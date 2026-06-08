# Inkbridge Starter

A Next.js 16 + Tailwind v4 + Storybook project pre-configured with [Inkbridge](https://inkbridge.io). Ships with a full shadcn/ui v4 build (27 primitives) plus a real-world Perps feature module — so you can generate a pixel-accurate design system in Figma in minutes and see how Inkbridge handles non-trivial feature components, not just isolated primitives.

## What's included

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** + the full shadcn/ui v4 component set
- **Storybook** with stories for every component
- **Inkbridge** pre-wired — scanner route, token patch route, and scripts ready to go
- **Multi-theme tokens** — `default` (green primary) and `secondary` (blue primary) themes in [`src/app/globals.css`](src/app/globals.css), demonstrating theme switching in Storybook and the Figma plugin's theme-selector preflight panel
- **Perps feature module** — three connected components (slider + two modals) showing how a feature surface composes shadcn primitives into something realistic
- **In-app component catalogue** — a `/docs` route (hub + per-component pages with live previews) generated from your stories at build time, plus a marketing home that doubles as an overview

Components live in two buckets: `src/components/ui/` (vendored shadcn primitives) and `src/components/custom/` (your own shared components); feature surfaces stay under `src/feature/<feature>/`.

## Components

### UI primitives (`src/components/ui/`)

shadcn/ui v4 — all 27 primitives with stories. Inkbridge classifies each into its rendering strategy automatically (CVA variant set, compound, state-machine, or simple).

| Category | Components |
|---|---|
| Forms | Button, Input, Label, Checkbox, RadioGroup, Switch, Select, Form |
| Display | Badge, Card, Separator, Table |
| Feedback | Alert, Sonner (toasts) |
| Overlays | Dialog, Drawer, Sheet, Popover, Tooltip, DropdownMenu |
| Navigation | Breadcrumb, Pagination, Tabs, Accordion, ScrollArea |
| Data viz | Chart |

### Perps feature module (`src/feature/perps/`)

A realistic feature surface ported from a production perpetuals trading app. Demonstrates how Inkbridge handles consumer-side composition — feature components that wrap shadcn primitives, share a domain layer (types + constants + utility helpers), and live in their own colocated folder.

| Component | Stories | Plugin features exercised |
|---|---|---|
| LeverageSlider | Default, WithMarks, Disabled | Native `<input type="range">` rewrite, plugin-driven icon registry, react-icons inside an args-only story |
| DecreasePositionModal | Default, EntirePositionToggled, NoPositionSelected | Dialog portal, Select with dynamic items via `.map()`, conditional sub-tree, sibling-button flex row constraints |
| IncreasePositionModal | OpenLong, OpenShort, IncreaseExistingLong, InsufficientBalance, PreviewLoading, Disconnected | Embedded LeverageSlider, inline SVG icons, gradient submit button, multi-state preview pane, `<form>` width chain |

Layout convention: `src/feature/<feature>/{types,constants,utils}.ts` + `src/feature/<feature>/components/*.{tsx,stories.tsx}` — copy this shape when adding your own feature module.

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
