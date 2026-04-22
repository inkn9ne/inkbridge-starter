"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home", description: "Back to the homepage" },
  { href: "/docs", label: "Docs", description: "Guides, features, and references" },
  { href: "/pricing", label: "Pricing", description: "Free and Pro plans" },
];

const QUICK_LINKS = [
  { href: "/docs/getting-started", label: "Getting started" },
  { href: "/docs/storybook-stories", label: "Storybook stories" },
  { href: "/docs/dev-server-connection", label: "Dev server setup" },
];

export function MobileNavLinks() {
  const pathname = usePathname();

  return (
    <>
      {/* Primary nav */}
      <nav className="px-4 pt-5 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-2">Menu</p>
        <div className="flex flex-col gap-0.5">
          {NAV_LINKS.map(({ href, label, description }) => {
            const isExactActive = href === "/" ? pathname === "/" : pathname === href;
            const isSectionActive = href !== "/" && !isExactActive && pathname.startsWith(href + "/");
            return (
              <SheetClose key={href} asChild>
                <Link
                  href={href}
                  className={`flex items-start justify-between rounded-xl px-3 py-2.5 transition-colors group ${isExactActive ? "bg-muted" : "hover:bg-muted"}`}
                >
                  <div>
                    <p className={`text-base ${isExactActive ? "text-primary font-bold" : isSectionActive ? "text-primary font-semibold" : "text-foreground font-medium"}`}>{label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </nav>

      {/* Quick docs links */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-2">Quick links</p>
        <div className="flex flex-col gap-0.5">
          {QUICK_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <SheetClose key={href} asChild>
                <Link
                  href={href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base transition-colors ${isActive ? "text-primary bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                >
                  <span className={`size-1.5 rounded-full shrink-0 ${isActive ? "bg-primary" : "bg-primary/50"}`} />
                  {label}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </div>
    </>
  );
}
