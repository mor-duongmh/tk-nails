import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="px-8 max-w-screen-2xl mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <h1 className="font-headline italic text-6xl md:text-8xl text-primary leading-tight tracking-tighter">
            The Art of <br /> Precision.
          </h1>
          <p className="mt-12 text-lg text-on-surface-variant max-w-xl font-light leading-relaxed">
            Founded on the principle that self-care is a ritual, TK Nails
            redefines the salon experience through meticulous artistry and an
            unwavering commitment to luxury.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-lg editorial-shadow">
            <div className="relative w-full h-full">
              <Image
                className="object-cover"
                alt="Close-up of elegant minimalist nail art on a woman's hand resting on a soft velvet cream-colored textile with warm sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG65poc4G0w-VOVyedYgUwDL2KA_0vykYq7_01GkbXgNTRSndkYSuRkiwU2mL6mJ1HUGQP9d2m9j_c49A1qgd32bTqqmQC0h90nI6xl9zvqPnOxmNFJvN8VbWyBM8BGzheVCtH-hjBIgqLzXrVCTsrv-caIYE-Th1So5mtQMC0McYyoDZdq1Fpm5hHNzz2pUAERKSHsbXMTMAgZPo070M3_Um427nCHHdqRGZI4JVjhTPyI5PHzvBC0pXG3Zz6tV4W6AvcAdxsDs8"
                fill
                sizes="(max-width: 768px) 100vw, 41.67vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
