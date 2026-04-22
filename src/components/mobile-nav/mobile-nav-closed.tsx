import Link from "next/link";
import { HiMenu } from "react-icons/hi";

export function MobileNavClosedGuestView() {
  return (
    <div className="flex w-full justify-between items-center bg-primary px-4 py-2 text-primary-foreground">
      <HiMenu className="size-6" />
      <nav className="flex flex-row gap-4 items-center">
        <Link href="/login">Login</Link>
        <Link href="/get-started">Get started</Link>
      </nav>
    </div>
  );
}
