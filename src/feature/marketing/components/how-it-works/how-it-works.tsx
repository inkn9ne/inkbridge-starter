import { HowItWorksCard, type HowItWorksStep } from "./how-it-works-card";

const STORYBOOK_TO_FIGMA_STEPS: HowItWorksStep[] = [
  {
    n: "1",
    title: "Install the Figma plugin",
    description: "Add Inkbridge to your Figma workspace in one click.",
  },
  {
    n: "2",
    title: "Connect your repository",
    description: "Link your GitHub repo so the plugin knows where your components live.",
  },
  {
    n: "3",
    title: "Scan your Storybook stories",
    description: "The plugin reads your stories and generates pixel-perfect Figma frames from your Tailwind classes.",
  },
];

const FIGMA_TO_GITHUB_STEPS: HowItWorksStep[] = [
  {
    n: "1",
    title: "Edit design tokens in Figma",
    description: "Update colours, spacing, or typography directly in your Figma file.",
  },
  {
    n: "2",
    title: "Preview the code diff",
    description: "Inkbridge shows you the exact Tailwind config changes before anything is committed.",
  },
  {
    n: "3",
    title: "Open a pull request",
    description: "Ship the changes as a GitHub PR with one click — ready for review and merge.",
  },
];

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
          <HowItWorksCard
            eyebrow="Storybook → Figma"
            title="Generate Figma frames from your components"
            description="Scan your Tailwind React components and render them as native Figma frames — automatically."
            steps={STORYBOOK_TO_FIGMA_STEPS}
          />
          <HowItWorksCard
            eyebrow="Figma → GitHub"
            title="Push design changes back to your codebase"
            description="Adjust tokens or components in Figma and ship the changes directly as a pull request."
            steps={FIGMA_TO_GITHUB_STEPS}
          />
        </div>
      </div>
    </section>
  );
}
