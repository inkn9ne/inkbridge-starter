// Server-only module: it reads the filesystem, so it must only ever be
// imported from Server Components (the /docs pages). Never import it into a
// "use client" file — that would pull `node:fs` into the browser bundle.

import fs from "node:fs";
import path from "node:path";

import {
  CATEGORY_ORDER,
  GROUP_TO_CATEGORY,
  META,
  type CategoryId,
} from "./data";

// Build-time catalogue: the structural source of truth for the /docs pages.
//
// We read the project's `.stories.tsx` files directly — the same artifact the
// Inkbridge plugin scans — and derive each component's identity, stories, and
// location from them. Nothing here is hand-maintained, so the catalogue can't
// drift from the actual stories. Editorial prose is layered on from ./data.ts.
//
// This runs at build time (these are static pages); reading the filesystem in
// a Server Component is fine and never executes in the browser.

const SRC_DIR = path.join(process.cwd(), "src");

export interface CatalogComponent {
  /** Kebab-case of the component name, e.g. "leverage-slider". URL segment. */
  slug: string;
  /** Component name from the Storybook title, e.g. "LeverageSlider". */
  name: string;
  /** Raw Storybook title, e.g. "Feature/Perps/LeverageSlider". */
  storyTitle: string;
  /** Normalised group key (title path minus name, lowercased), e.g. "feature/perps". */
  group: string;
  /** Catalogue category derived from the group. */
  category: CategoryId;
  /** Story export names — each becomes a Figma frame. */
  stories: string[];
  /** Import path consumers use, e.g. "@/components/ui/button". */
  importPath: string;
  /** Source file relative to repo root, e.g. "src/components/ui/button.tsx". */
  source: string;
  /** Editorial prose (from ./data.ts), with safe fallbacks applied. */
  description: string;
  pluginFeatures: string[];
  related: string[];
}

/** PascalCase / camelCase → kebab-case. "DropdownMenu" → "dropdown-menu". */
function toKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** kebab/camel filename → PascalCase. "radio-group" → "RadioGroup". */
function toPascal(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/(^|\s)([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase())
    .replace(/\s+/g, "");
}

/** Recursively collect every *.stories.tsx under a directory. */
function findStoryFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      out.push(...findStoryFiles(full));
    } else if (entry.name.endsWith(".stories.tsx")) {
      out.push(full);
    }
  }
  return out;
}

/**
 * Extract the Storybook meta title. Meta titles are always a path
 * ("Components/UI/Button"); story-level `title:` fields (e.g. inside a steps
 * array) never contain a slash, so requiring one filters them out cleanly.
 */
function extractTitle(contents: string): string | null {
  const match = contents.match(/title:\s*["'`]([^"'`]*\/[^"'`]+)["'`]/);
  return match ? match[1] : null;
}

/** Extract story export names: `export const Default: Story = ...`. */
function extractStories(contents: string): string[] {
  const names: string[] = [];
  const re = /export\s+const\s+([A-Za-z0-9_]+)\s*:\s*Story\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(contents)) !== null) names.push(m[1]);
  return names;
}

function buildCatalog(): CatalogComponent[] {
  const components: CatalogComponent[] = [];

  for (const file of findStoryFiles(SRC_DIR)) {
    const contents = fs.readFileSync(file, "utf-8");
    const stories = extractStories(contents);
    if (stories.length === 0) continue; // no frames → not a catalogue entry

    // Source = the colocated sibling (convention: foo.tsx ↔ foo.stories.tsx).
    const source = file.replace(/\.stories\.tsx$/, ".tsx");
    const relSource = path.relative(process.cwd(), source);
    const importPath = "@/" + relSource.replace(/^src\//, "").replace(/\.tsx$/, "");

    const title = extractTitle(contents);
    let name: string;
    let group: string;
    if (title) {
      const segments = title.split("/");
      name = segments[segments.length - 1];
      group = segments.slice(0, -1).join("/").toLowerCase();
    } else {
      // No Storybook title — derive identity from the file path so the
      // component still lands in the right category instead of "other".
      // Feature modules nest under `<feature>/components`, which we collapse
      // so e.g. feature/perps/components → feature/perps.
      name = toPascal(path.basename(source, ".tsx"));
      group = path
        .dirname(relSource)
        .replace(/^src\//, "")
        .toLowerCase()
        .replace(/\/components$/, "");
    }
    const slug = toKebab(name);
    const category = GROUP_TO_CATEGORY[group] ?? "other";

    const overlay = META[slug] ?? {};
    components.push({
      slug,
      name,
      storyTitle: title ?? `${group}/${name}`,
      group,
      category,
      stories,
      importPath,
      source: relSource,
      description: overlay.description ?? `${name} component.`,
      pluginFeatures: overlay.pluginFeatures ?? [],
      related: overlay.related ?? [],
    });
  }

  return components.sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a.category);
    const cb = CATEGORY_ORDER.indexOf(b.category);
    if (ca !== cb) return ca - cb;
    return a.name.localeCompare(b.name);
  });
}

// Computed once per build/process.
let cache: CatalogComponent[] | null = null;

export function getCatalog(): CatalogComponent[] {
  if (cache === null) cache = buildCatalog();
  return cache;
}

export function getCatalogComponent(slug: string): CatalogComponent | undefined {
  return getCatalog().find((c) => c.slug === slug);
}

export function getCatalogByCategory(): Record<CategoryId, CatalogComponent[]> {
  const result = {} as Record<CategoryId, CatalogComponent[]>;
  for (const cat of CATEGORY_ORDER) result[cat] = [];
  for (const c of getCatalog()) result[c.category].push(c);
  return result;
}

export function getCatalogStats(): { components: number; stories: number } {
  const catalog = getCatalog();
  return {
    components: catalog.length,
    stories: catalog.reduce((n, c) => n + c.stories.length, 0),
  };
}
