import { ReactNode } from "react";
import {
  HiColorSwatch,
  HiCode,
  HiGlobeAlt,
  HiLightningBolt,
  HiPuzzle,
  HiTemplate,
} from "react-icons/hi";

interface FeatureCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {children}
        </div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From Figma tokens to production-ready Tailwind code — without the
            manual work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Token Export"
            description="Extract colors, typography, and spacing directly from Figma Variables into your Tailwind config."
          >
            <HiColorSwatch className="h-5 w-5" />
          </FeatureCard>
          <FeatureCard
            title="Component Scanning"
            description="Automatically scan your React codebase and generate matching Figma components from Storybook stories."
          >
            <HiCode className="h-5 w-5" />
          </FeatureCard>
          <FeatureCard
            title="GitHub Integration"
            description="Push design token updates as pull requests directly from Figma — no manual copy-paste."
          >
            <HiGlobeAlt className="h-5 w-5" />
          </FeatureCard>
          <FeatureCard
            title="Multi-theme Support"
            description="Export multiple color themes in one pass — light, dark, and custom brand palettes."
          >
            <HiLightningBolt className="h-5 w-5" />
          </FeatureCard>
          <FeatureCard
            title="Storybook Sync"
            description="Storybook stories become Figma frames. Design and code stay in sync automatically."
          >
            <HiPuzzle className="h-5 w-5" />
          </FeatureCard>
          <FeatureCard
            title="Zero Config"
            description="Drop in the plugin, point it at your repo — no build step or custom setup required."
          >
            <HiTemplate className="h-5 w-5" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
