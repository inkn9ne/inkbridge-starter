import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-xl font-bold text-primary">Inkbridge Starter</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A Next.js + Tailwind + Storybook scaffold, pre-wired with the Inkbridge
              Figma plugin. Clone it, run it, generate your design system.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h3 className="text-sm font-semibold text-foreground">This starter</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/#included" className="text-sm text-muted-foreground hover:text-foreground">
                    What&apos;s included
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/inkn9ne/inkbridge-starter" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Inkbridge</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="https://inkbridge.io" className="text-sm text-muted-foreground hover:text-foreground">
                    Product site
                  </a>
                </li>
                <li>
                  <a href="https://inkbridge.io/docs" className="text-sm text-muted-foreground hover:text-foreground">
                    Plugin docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © 2026 Inkbridge. Built with the Inkbridge Figma plugin.
          </p>
        </div>
      </div>
    </footer>
  );
}
