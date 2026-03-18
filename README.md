# Inkhouse Starter

A minimal Next.js + Tailwind CSS + Storybook project pre-configured with [Inkhouse](https://inkhouse.io) — so you can generate a pixel-accurate design system in Figma in minutes, without writing any components first.

## What's included

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** + shadcn/ui components
- **Storybook** with stories for every component
- **Inkhouse** pre-wired — scanner route, token patch route, and scripts ready to go

### Demo components

| Component | Type |
|---|---|
| Button | CVA variants (default / secondary / outline / ghost / destructive / link) + sizes |
| Card | Compound (header / title / description / content / footer) |
| Badge | CVA variants |
| Input | States (default / disabled / invalid) |
| Alert | CVA variants (default / destructive) |
| Gradient Showcase | Gradient rendering demo (linear / radial / 3-stop / blob) |

---

## Quick start

### Prerequisites

- [Figma Desktop](https://www.figma.com/downloads/) (not browser — needs localhost access)
- Node.js 18+ and pnpm

### 1. Use this template

Click **"Use this template"** → **"Create a new repository"** on GitHub, then clone your new repo.

Or clone directly to try it out locally:

```bash
git clone https://github.com/inkn9ne/inkhouse-starter.git
cd inkhouse-starter
pnpm install
```

### 2. Load the plugin in Figma Desktop

1. Open Figma Desktop
2. Go to **Plugins → Development → Import plugin from manifest...**
3. Select the file at:
   ```
   node_modules/inkhouse/manifest.json
   ```

Figma remembers this path — you only do this once per project.

### 3. Start the dev server

```bash
pnpm figma:dev
```

### 4. Generate your design system

In Figma: **Plugins → Development → Inkhouse → Generate Design System Page**

The plugin scans your Storybook stories and builds a "Design System" page with all components rendered as native Figma frames.

---

## Adding your own components

1. Create a component in `src/components/`
2. Add a `.stories.tsx` file alongside it
3. Re-run **Generate Design System Page** — it always reflects the current state

See [inkhouse.io/docs](https://inkhouse.io/docs) for full documentation.

---

## Scripts

| Script | What it does |
|---|---|
| `pnpm figma:dev` | Start Next.js dev server (required for plugin) |
| `pnpm figma:scan` | Manually run the component scanner |
| `pnpm dev` | Start Next.js normally |
| `pnpm storybook` | Start Storybook |

---

## Configuration

Edit `inkhouse.config.json` to control which paths the scanner searches:

```json
{
  "componentPaths": ["src"],
  "exclude": ["stories", "storybook-static"],
  "onlyWithStories": true
}
```

---

## License

MIT
