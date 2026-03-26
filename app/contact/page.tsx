import { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import InquiryForm from "@/components/sections/contact/InquiryForm";
import ContactSidebar from "@/components/sections/contact/ContactSidebar";
import MapSection from "@/components/sections/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact | TK Nails Editorial Atelier",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <ContactHero />
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <InquiryForm />
        <ContactSidebar />
      </section>
      <MapSection />
    </main>
  );
}
