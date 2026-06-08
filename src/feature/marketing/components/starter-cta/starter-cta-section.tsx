import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StarterCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground">Start building</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Run{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
            pnpm dev
          </code>
          , open the Inkbridge plugin in Figma, and generate your design system. Browse
          what&apos;s in this starter, or read the full plugin docs.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/docs">
            <Button>Browse components</Button>
          </Link>
          <a
            href="https://inkbridge.io/docs"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Read the Inkbridge docs →
          </a>
        </div>
      </div>
    </section>
  );
}
