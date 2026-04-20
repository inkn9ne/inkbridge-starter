"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster richColors position="top-right" theme="system" toastOptions={{ duration: 4000 }} />
  );
}

