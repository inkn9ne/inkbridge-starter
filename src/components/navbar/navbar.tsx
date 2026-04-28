import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NavLinks } from "./nav-links";

const navLinkCls =
  "rounded-md px-3 py-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 transition-colors";

function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary-foreground">
      <Image src="/assets/inkbridge-icon.svg" alt="Inkbridge" width={22} height={22} />
      <span className="font-semibold tracking-tight">inkbridge</span>
    </Link>
  );
}

export function NavBarGuestView() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-6">
        <NavLogo />
        <NavLinks />
      </div>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <Link href="/login" className={navLinkCls}>
          Login
        </Link>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <div className="hidden md:flex w-full">
      <NavBarGuestView />
    </div>
  );
}
