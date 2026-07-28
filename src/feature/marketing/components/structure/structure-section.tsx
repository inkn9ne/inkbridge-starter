const BUCKETS = [
  {
    path: "components/ui/",
    title: "shadcn/ui primitives",
    body: "shadcn hands you the components as source you own — not a black-box package. Because Inkbridge reads that source, it knows each primitive's real default styles (border, radius, variants) and renders them faithfully in Figma. Owning the code is what makes the scan accurate.",
  },
  {
    path: "components/custom/",
    title: "Your own components",
    body: "Shared components you build on top of the primitives — header, footer, hero, and so on. Kept in their own bucket, separate from the vendored shadcn layer, so it stays obvious what's yours versus what came from shadcn.",
  },
  {
    path: "feature/<name>/",
    title: "Feature surfaces",
    body: "Whole feature modules (like the Perps demo) — real screens composed from primitives, with their own colocated types and stories. They prove Inkbridge handles non-trivial composition, not just isolated components.",
  },
];

export function StructureSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Why this structure</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Inkbridge reads your component source directly, so the way the code is
            organised <em>is</em> the design system. This starter keeps that source
            in three clear places — and your Storybook stories drive everything the
            plugin renders into Figma.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {BUCKETS.map((b) => (
            <div key={b.path} className="flex flex-col gap-2">
              <code className="w-fit rounded-md bg-background px-2 py-1 font-mono text-xs text-primary ring-1 ring-border">
                {b.path}
              </code>
              <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
          Edit a token in Figma and Inkbridge opens a pull request against this same
          source — the loop runs both ways.
        </p>
      </div>
    </section>
  );
}
