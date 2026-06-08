import Link from "next/link";
import { CATEGORIES, CATEGORY_ORDER } from "@/feature/docs/data";
import { getCatalogByCategory, getCatalogStats } from "@/feature/docs/catalog";

// "What's included" — the starter-specific overview section. Reads the same
// build-time catalogue the /docs pages use, so the counts and categories can
// never drift from the actual stories.

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function IncludedSection() {
  const byCategory = getCatalogByCategory();
  const stats = getCatalogStats();
  const nonEmpty = CATEGORY_ORDER.filter((cat) => byCategory[cat].length > 0);

  return (
    <section id="included" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-foreground">What&apos;s included</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A full shadcn/ui build plus a real-world feature module — every one
            with Storybook stories the Inkbridge plugin renders into Figma.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
          <Stat value={stats.components} label="Components" />
          <Stat value={stats.stories} label="Stories" />
          <Stat value={nonEmpty.length} label="Categories" />
          <Stat value={2} label="Themes" />
        </div>

        {/* Category list */}
        <ul className="flex flex-col gap-1">
          {nonEmpty.map((cat) => (
            <li key={cat}>
              <Link href={`/docs#${cat}`} className="group block py-1 text-sm">
                <span className="font-medium text-primary transition-colors group-hover:text-primary/80">
                  {CATEGORIES[cat].label}
                </span>
                <span className="text-muted-foreground">
                  {" — "}
                  {CATEGORIES[cat].description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/docs"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Browse the full component catalogue →
          </Link>
        </div>
      </div>
    </section>
  );
}
