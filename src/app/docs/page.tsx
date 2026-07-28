import type { Metadata } from "next";
import { CATEGORIES, CATEGORY_ORDER } from "@/feature/docs/data";
import { getCatalogByCategory, getCatalogStats } from "@/feature/docs/catalog";
import { CatalogList } from "@/feature/docs/catalog-list";

export const metadata: Metadata = {
  title: "Component catalogue · Inkbridge Starter",
  description:
    "Every component this starter ships, grouped by category — and the Inkbridge plugin feature each one exercises.",
};

const QUICK_START = [
  {
    title: "Run the dev server",
    body: (
      <>
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">pnpm dev</code>{" "}
        starts Next.js — the plugin scans and patches tokens through it.
      </>
    ),
  },
  {
    title: "Load the plugin in Figma",
    body: (
      <>
        Plugins → Development → Import from manifest →{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
          node_modules/inkbridge/manifest.json
        </code>
        .
      </>
    ),
  },
  {
    title: "Generate the design system",
    body: <>Run Inkbridge → Generate Design System Page to render every story as a Figma frame.</>,
  },
  {
    title: "Ask your AI agent",
    body: (
      <>
        The read-only Inkbridge MCP server is pre-wired in{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.mcp.json</code> — agents
        discover your components and tokens before writing code.
      </>
    ),
  },
];

export default function DocsPage() {
  const byCategory = getCatalogByCategory();
  const stats = getCatalogStats();
  const nonEmpty = CATEGORY_ORDER.filter((cat) => byCategory[cat].length > 0);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Intro */}
      <header className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Component catalogue
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything in this starter
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {stats.components} components across {nonEmpty.length} categories, with{" "}
          {stats.stories} Storybook stories between them. This catalogue is generated
          from those stories at build time — the same artifact the Inkbridge plugin
          renders into Figma. Looking for how the plugin itself works?{" "}
          <a
            href="https://inkbridge.ink/docs"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Read the Inkbridge docs →
          </a>
        </p>
      </header>

      {/* Quick start */}
      <section className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Quick start
        </h2>
        <ol className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_START.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-sm font-medium">{step.title}</span>
              <span className="text-sm text-muted-foreground">{step.body}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Catalogue by category */}
      <div className="mt-12 flex flex-col gap-14">
        {nonEmpty.map((cat) => (
          <section key={cat} id={cat} className="scroll-mt-20">
            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {CATEGORIES[cat].label}
              </h2>
              <p className="text-sm text-muted-foreground">
                {CATEGORIES[cat].description}
              </p>
            </div>
            <CatalogList items={byCategory[cat]} />
          </section>
        ))}
      </div>
    </div>
  );
}
