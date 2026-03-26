import type { Metadata } from "next";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ManicureSection from "@/components/sections/services/ManicureSection";
import PedicureSection from "@/components/sections/services/PedicureSection";
import GelAcrylicsSection from "@/components/sections/services/GelAcrylicsSection";
import SpaRituals from "@/components/sections/services/SpaRituals";
import ServiceCTA from "@/components/sections/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Services | TK Nails Editorial Atelier",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <ServiceHero />

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <ManicureSection />
          <PedicureSection />

          {/* Bento Grid for Gel, Acrylics & Spa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GelAcrylicsSection />
            <SpaRituals />
          </div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
}
