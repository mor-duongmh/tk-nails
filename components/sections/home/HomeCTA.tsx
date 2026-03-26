import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-40 px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNffzluNW8AMPpKUhwprXrYKEo3SDSJPUv4MxTSwheIR8vOQPtovdmEu2DWocJd2eG1C51WriAUt6dD8Odd72fLte1L99CsbhQZHRZBhD9_97amHB56OzrwYXmPJ8crRSoSaImpwdbV1-Ldz96uwoKaTF3aFjaea-DkmOmokrrTV0yipV8NYR5AlBBu9eUOY5_RfUOTUapwoBgyDh_nAnF1BEg64ExYfbvuLFEbxf1j0lqI3InAUxiVl3kT2jFjDRJmnN_Zvr2Ex0"
          alt="Blurry background of a luxury spa interior with warm ambient lighting and soft beige tones"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl italic mb-12">
          Begin Your Journey <br />
          to Perfection
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link
            href="/services"
            className="gold-gradient text-on-primary px-12 py-5 rounded-full font-label text-sm tracking-[0.2em] uppercase editorial-shadow hover:scale-105 transition-all inline-block"
          >
            Experience the Luxury
          </Link>
          <Link
            href="/services"
            className="bg-transparent text-primary px-12 py-5 rounded-full font-label text-sm tracking-[0.2em] uppercase border border-primary/20 hover:bg-primary/5 transition-all inline-block"
          >
            Our Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}
