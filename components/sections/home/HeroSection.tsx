import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiRt2kvq_NDbHNeBVtywRz5OIYcn9__TsmAJrSSPFRhBih2jOSAiUddiqiE_z0CHB9mkTq5cYqSN6UQkiYm1rWzy8FqLMl5wosztWSyuh8HxVnWC3KMU-3fjEZIECjAWQSGDcrM01s87CEDjFXN_DIDzjNE3g65Xd5eunZaOnsO2s0FvTZb07NIoW6o0uSJDDzulKiau1g6YRwznHxDauK7ZZoaDdQHqDb-21MhbE2ue5Idv5vVLd21S_-XjWga-zeNR7doiQhZBU"
          alt="Close-up of elegant hands with intricate gold leaf nail art resting on ivory silk fabric with soft dramatic lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-6 block">
            Editorial Atelier
          </span>
          <h1 className="font-headline text-6xl md:text-8xl italic text-on-surface leading-[1.1] mb-8 tracking-tighter">
            The Art of <br />
            Exquisite Nails
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Where precision meets poetry. Experience a bespoke sanctuary
            designed for the modern connoisseur of beauty.
          </p>
          <Link
            href="/services"
            className="gold-gradient text-on-primary px-10 py-5 rounded-full font-label text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 active:scale-95 editorial-shadow inline-block"
          >
            Experience the Luxury
          </Link>
        </div>
      </div>
    </section>
  );
}
