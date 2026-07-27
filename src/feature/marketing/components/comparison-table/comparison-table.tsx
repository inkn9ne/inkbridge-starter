import { HiCheck, HiX } from "react-icons/hi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface Feature {
  name: string;
  description?: string;
  included: boolean;
}

export interface ComparisonTableProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    name: "Design System Page",
    description: "Generate complete design system documentation",
    included: true,
  },
  {
    name: "Component Scanning",
    description: "Scan React components from your codebase",
    included: true,
  },
  {
    name: "Design Tokens",
    description: "Colors, typography, and spacing tokens",
    included: true,
  },
  {
    name: "Theme Variants",
    description: "Support for multiple color themes",
    included: true,
  },
  {
    name: "GitHub PR Integration",
    description: "Create PRs directly from Figma",
    included: true,
  },
  {
    name: "MCP Server",
    description: "AI agents read your design-system model",
    included: true,
  },
];

function FeatureIncluded() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
      <HiCheck className="h-4 w-4" />
    </span>
  );
}

function FeatureNotIncluded() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <HiX className="h-4 w-4" />
    </span>
  );
}

export function ComparisonTable({
  features = defaultFeatures,
}: ComparisonTableProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/50 p-0">
        <div className="flex items-center px-6 py-4">
          <p className="flex-1 text-base font-semibold">Features</p>
          <p className="w-20 text-center text-base font-semibold text-primary">
            Included
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-border">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4 px-6 py-4">
              <div className="flex-1">
                <p className="font-medium text-foreground">{feature.name}</p>
                {feature.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                )}
              </div>
              <div className="flex w-20 justify-center">
                {feature.included ? <FeatureIncluded /> : <FeatureNotIncluded />}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export { defaultFeatures };
