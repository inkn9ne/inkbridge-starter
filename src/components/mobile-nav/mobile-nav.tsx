import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MobileNavLinks } from "./mobile-nav-links";

export function MobileNav({ defaultOpen }: { defaultOpen?: boolean } = {}) {
  return (
    <div className="flex md:hidden w-full items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-primary-foreground">
        <Image src="/assets/inkbridge-icon.svg" alt="Inkbridge" width={22} height={22} />
        <span className="font-semibold tracking-tight">inkbridge</span>
      </Link>

      {/* Hamburger */}
      <Sheet defaultOpen={defaultOpen}>
        <SheetTrigger className="flex items-center justify-center size-9 rounded-md hover:bg-white/10 transition-colors text-primary-foreground">
          <HiMenu className="size-5" />
        </SheetTrigger>

        {/* Full-screen drawer — w-full overrides the default w-3/4 via twMerge */}
        <SheetContent side="right" aria-describedby={undefined} hideClose className="w-full p-0 flex flex-col gap-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>

          {/* Drawer top bar — matches main header */}
          <div className="flex items-center justify-between bg-primary px-4 h-12 shrink-0">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground">
              <Image src="/assets/inkbridge-icon.svg" alt="Inkbridge" width={20} height={20} />
              <span className="font-semibold tracking-tight text-sm">inkbridge</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <SheetClose className="flex items-center justify-center size-9 rounded-md text-primary-foreground hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </SheetClose>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <MobileNavLinks />
          </div>

          {/* Bottom — login + version */}
          <div className="border-t px-4 pt-4 pb-6 flex flex-col gap-2 shrink-0 bg-muted/20">
            <SheetClose asChild>
              <Link
                href="/login"
                className="flex items-center justify-center rounded-xl border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Login
              </Link>
            </SheetClose>
            <p className="text-center text-[10px] text-muted-foreground mt-1">
              Inkbridge — Figma plugin for Tailwind React
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
