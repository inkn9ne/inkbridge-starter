import type { Metadata } from "next";
import { Geist_Mono, Inter, Open_Sans, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inkbridge Starter",
  description: "Next.js + Tailwind + Storybook pre-configured with Inkbridge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brand = (await cookies()).get("brand")?.value === "secondary" ? "secondary" : "primary";
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${inter.variable} ${playfair.variable} ${geistMono.variable}${brand === "secondary" ? " secondary" : ""}`}>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
