import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CATEGORIES } from "@/feature/docs/data";
import { getCatalog, getCatalogComponent } from "@/feature/docs/catalog";
import { ComponentPreviewSection } from "@/feature/docs/previews";

const GITHUB_BASE = "https://github.com/inkn9ne/inkbridge-starter/blob/main/";

export function generateStaticParams() {
  return getCatalog().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCatalogComponent(slug);
  if (!c) return { title: "Not found — Inkbridge Starter" };
  return {
    title: `${c.name} — Inkbridge Starter`,
    description: c.description,
  };
}

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCatalogComponent(slug);
  if (!c) notFound();

  const related = c.related
    .map((s) => getCatalogComponent(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const crumbs = [
    { label: "Docs", href: "/docs" },
    { label: CATEGORIES[c.category].label, href: `/docs#${c.category}` },
    { label: c.name },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <Fragment key={i}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href ?? "/docs"}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {c.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {c.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <code className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground">
            import {"{"} {c.name} {"}"} from &quot;{c.importPath}&quot;
          </code>
          <a
            href={`${GITHUB_BASE}${c.source}`}
            className="rounded-md border px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View source ↗
          </a>
        </div>
      </div>

      {/* Live preview (renders only when a demo is registered) */}
      <ComponentPreviewSection slug={c.slug} />

      {/* Stories */}
      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Stories</h2>
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          Each story renders as its own Figma frame. Storybook title:{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            {c.storyTitle}
          </code>
        </p>
        <ol className="flex flex-col gap-3">
          {c.stories.map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                {i + 1}
              </span>
              <p className="text-sm font-medium text-foreground">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Plugin features */}
      {c.pluginFeatures.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Inkbridge features exercised
          </h2>
          <ul className="flex flex-col gap-2">
            {c.pluginFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden
                >
                  <path
                    d="M13 4L6 11l-3-3"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-foreground leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Related</h2>
          <ul className="flex flex-col gap-1">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/docs/${r.slug}`}
                  className="inline-block py-1 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="border-t pt-8">
        <Link
          href="/docs"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to all components
        </Link>
      </div>
    </div>
  );
}
