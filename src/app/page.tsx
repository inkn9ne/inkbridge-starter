import type { Metadata } from "next";
import {
  HeroSection,
  CompatibilityBar,
  IncludedSection,
  HowItWorksSection,
  FaqSection,
  CtaSection,
} from "@/feature/marketing";

export const metadata: Metadata = {
  title: "Inkbridge Starter — clone, run, generate a design system in Figma",
  description:
    "A Next.js + Tailwind + Storybook starter pre-wired with Inkbridge. Ships a full shadcn/ui build and a real-world feature module — every component rendered into Figma from its stories.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompatibilityBar />
      <IncludedSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
