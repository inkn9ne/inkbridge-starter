"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {NAV_LINKS.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "text-primary-foreground bg-white/15"
                : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
