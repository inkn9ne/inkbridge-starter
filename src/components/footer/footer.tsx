import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-xl font-bold text-primary">Inkbridge</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Bridge the gap between your React code and Figma. Automatically.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                    Docs
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/inkn9ne/inkbridge-starter" className="text-sm text-muted-foreground hover:text-foreground">
                    Starter template
                  </a>
                </li>
                <li>
                  <a href="https://github.com/inkn9ne/inkbridge" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © 2026 Inkbridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
