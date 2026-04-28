import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Keep your code and design in sync
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Start with our free plan and generate your first Figma components
            in minutes. No credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/get-started">
              <Button variant="secondary">Get started free</Button>
            </Link>
            <a
              href="https://github.com/inkn9ne/inkbridge-starter"
              className="text-sm font-semibold text-primary-foreground"
            >
              Clone the starter <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
