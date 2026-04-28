import { MobileNav } from "@/components/mobile-nav";
import { NavBar } from "@/components/navbar";

export function Header() {
  return (
    <>
      {/* Sticky area */}
      <header className="group/header peer w-full sticky top-0 z-30 border-b bg-primary h-12 flex items-center justify-between px-4 py-2 text-white shadow-lg">
        <NavBar />
        <MobileNav />
      </header>
    </>
  );
}
