import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What Figma plan do I need?",
    a: "Inkbridge works with any Figma plan, including the free tier. You just need the ability to install plugins from the Figma Community.",
  },
  {
    q: "Do I need Storybook?",
    a: "Storybook is required for component scanning — the plugin reads your stories to know which variants and states to generate. Token export and the Push to Code workflow work independently without Storybook.",
  },
  {
    q: "Which versions of Tailwind are supported?",
    a: "Both Tailwind v3 and v4 are supported. The plugin reads your existing Tailwind config (or CSS variables in v4) and maps them to Figma Variables automatically.",
  },
  {
    q: "Will it overwrite my existing Figma designs?",
    a: 'No. The plugin generates a dedicated "Design System" page inside your Figma file. Your existing pages and frames are never touched.',
  },
  {
    q: "How does it handle custom design tokens?",
    a: "The plugin reads token values directly from your configured source mode (`auto`, `css`, or `dtcg`) and syncs them into Figma Variables. In `auto`, CSS wins and DTCG is fallback. Push to Code then creates a PR with the token changes.",
  },
  {
    q: "What happens to generated frames when my code changes?",
    a: 'Re-running "Generate Design System Page" regenerates all frames from the latest version of your components. Previous frames on the Design System page are replaced.',
  },
  {
    q: "Does it work with component libraries like shadcn/ui?",
    a: "Yes. Any React component that renders with Tailwind classes and has a Storybook story will be picked up. shadcn/ui, Radix-based libraries, and custom components all work.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "The Free plan includes full component scanning, design token export, and single-file Figma generation — everything you need to get started. Pro unlocks multi-mode Figma Variables, GitHub PR integration, priority support, and higher component limits. See the full comparison on the pricing page.",
  },
  {
    q: "Is there a self-hosted or on-premise option?",
    a: "The plugin runs entirely inside Figma — there is no server that processes your code. The GitHub integration uses OAuth to push directly from your browser to your repository.",
  },
] as const;

interface FaqSectionProps {
  defaultValue?: string;
}

export function FaqSection({ defaultValue }: FaqSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue={defaultValue}>
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
