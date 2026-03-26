import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import OurJourney from "@/components/sections/about/OurJourney";
import AtelierProtocol from "@/components/sections/about/AtelierProtocol";
import CorePillars from "@/components/sections/about/CorePillars";
import FoundersQuote from "@/components/sections/about/FoundersQuote";

export const metadata: Metadata = {
  title: "About | TK Nails Editorial Atelier",
};

export default function AboutPage() {
  return (
    <main className="pt-32">
      <AboutHero />
      <OurJourney />
      <AtelierProtocol />
      <CorePillars />
      <FoundersQuote />
    </main>
  );
}
