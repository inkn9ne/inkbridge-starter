import { Badge } from "@/components/ui/badge";

export interface HowItWorksStep {
  n: string;
  title: string;
  description: string;
}

interface HowItWorksCardProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: HowItWorksStep[];
}

function StepNumber({ n }: { n: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
      {n}
    </span>
  );
}

function Step({ n, title, description }: HowItWorksStep) {
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

export function HowItWorksCard({ eyebrow, title, description, steps }: HowItWorksCardProps) {
  return (
    <div className="rounded-2xl border bg-background p-8">
      <Badge variant="soft">{eyebrow}</Badge>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ol className="mt-8 space-y-6">
        {steps.map((step) => (
          <Step key={step.n} {...step} />
        ))}
      </ol>
    </div>
  );
}
