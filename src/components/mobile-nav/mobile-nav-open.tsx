import Link from "next/link";
import { HiOutlineHome, HiX } from "react-icons/hi";

export function MobileNavOpenGuestView() {
  return (
    <div className="flex flex-col w-full h-full bg-background p-4">
      <div className="flex w-full justify-between items-start">
        <nav className="flex w-full flex-col gap-4 items-start">
          <Link href="/" className="flex items-center gap-2">
            <HiOutlineHome className="size-6" />
            Home
          </Link>
          <Link href="/login">Login</Link>
        </nav>
        <button type="button" aria-label="Close menu" className="rounded-sm opacity-70">
          <HiX className="size-4" />
        </button>
      </div>
    </div>
  );
}
