import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";

export function HeroSection() {
  return (
    <Hero>
      <div className="mx-auto max-w-2xl px-6 py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Tailwind v4 · Next.js · Storybook{" "}
            <a href="/docs/getting-started" className="font-semibold text-primary">
              <span aria-hidden="true" className="absolute inset-0" />
              Get started <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center gap-4 flex flex-col">
          <h1 className="text-2xl text-primary font-semibold tracking-tight">Inkbridge</h1>
          <p className="text-3xl lg:text-4xl font-bold leading-tight! mx-auto max-w-xl text-center text-foreground">
            Your codebase as a{" "}
            <span className="text-primary">Figma design system</span>
          </p>
          <p className="text-base text-muted-foreground mx-auto max-w-lg leading-relaxed">
            Inkbridge scans your Tailwind components and Storybook stories, reads your design tokens, and builds a complete design system page in Figma — automatically.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <Link href="/get-started">
              <Button>Get started free</Button>
            </Link>
            <Link
              href="/docs"
              className="text-sm/6 font-semibold text-gray-900"
            >
              View docs <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Hero>
  );
}
