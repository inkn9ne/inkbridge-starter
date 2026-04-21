function StepNumber({ n }: { n: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
      {n}
    </span>
  );
}

function Step({
  n,
  title,
  description,
}: {
  n: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <StepNumber n={n} />
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Two ways to work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Go from code to Figma, or take Figma changes back to your codebase.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Flow 1: Storybook → Figma */}
          <div className="rounded-2xl border bg-background p-8">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Storybook → Figma
            </span>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Generate Figma frames from your components
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Scan your Tailwind React components and render them as native
              Figma frames — automatically.
            </p>
            <ol className="mt-8 space-y-6">
              <Step
                n="1"
                title="Install the Figma plugin"
                description="Add Inkbridge to your Figma workspace in one click."
              />
              <Step
                n="2"
                title="Connect your repository"
                description="Link your GitHub repo so the plugin knows where your components live."
              />
              <Step
                n="3"
                title="Scan your Storybook stories"
                description="The plugin reads your stories and generates pixel-perfect Figma frames from your Tailwind classes."
              />
            </ol>
          </div>

          {/* Flow 2: Figma → GitHub PR */}
          <div className="rounded-2xl border bg-background p-8">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Figma → GitHub
            </span>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Push design changes back to your codebase
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Adjust tokens or components in Figma and ship the changes directly
              as a pull request.
            </p>
            <ol className="mt-8 space-y-6">
              <Step
                n="1"
                title="Edit design tokens in Figma"
                description="Update colours, spacing, or typography directly in your Figma file."
              />
              <Step
                n="2"
                title="Preview the code diff"
                description="Inkbridge shows you the exact Tailwind config changes before anything is committed."
              />
              <Step
                n="3"
                title="Open a pull request"
                description="Ship the changes as a GitHub PR with one click — ready for review and merge."
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
