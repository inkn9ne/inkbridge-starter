import Link from "next/link";
import type { CatalogComponent } from "./catalog";

// A single catalogue row — mirrors inkbridge's docs FeatureRow: a compact,
// left-aligned linked list item, not a full-width card or table row. Used by
// the /docs hub so every category renders as a clean vertical list.

export function CatalogRow({ component }: { component: CatalogComponent }) {
  return (
    <li>
      <Link href={`/docs/${component.slug}`} className="group block py-1 text-sm">
        <span className="font-medium text-primary transition-colors group-hover:text-primary/80">
          {component.name}
        </span>
        <span className="text-muted-foreground"> — {component.description}</span>
      </Link>
    </li>
  );
}

export function CatalogList({ items }: { items: CatalogComponent[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-1">
      {items.map((c) => (
        <CatalogRow key={c.slug} component={c} />
      ))}
    </ul>
  );
}
