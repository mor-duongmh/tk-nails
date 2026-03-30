import Image from "next/image";
import Link from "next/link";

export default function SignatureCuration() {
  return (
    <section className="py-32 px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-5xl text-on-surface italic">
              Signature Curation
            </h2>
            <p className="font-body text-on-surface-variant mt-4 font-light tracking-wide">
              Refined services for the discerning client.
            </p>
          </div>
          <Link
            href="/services"
            className="font-label text-primary uppercase text-xs tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-colors"
          >
            View All Services
          </Link>
        </div>
        <div className="space-y-32">
          {/* Service 1 */}
          <div className="relative grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-xl">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/signature-manicure.png"
                  alt="Signature manicure - hands in warm sunlight"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  quality={100}
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:absolute md:right-0 bg-surface-container-lowest p-12 editorial-shadow z-10 -mt-12 md:mt-0">
              <span className="font-label text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">
                Our Signature
              </span>
              <h3 className="font-headline text-4xl mb-6 italic">
                Signature Services
              </h3>
              <p className="font-body text-on-surface-variant font-light leading-relaxed mb-8">
                Immersion including a warm milk soak, volcanic stone
                massage, and bespoke nail shaping with our premium gel
                collection.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="relative grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-5 md:absolute md:left-0 bg-surface-container-lowest p-12 editorial-shadow z-10 -mb-12 md:mb-0">
              <span className="font-label text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">
                Bespoke Design
              </span>
              <h3 className="font-headline text-4xl mb-6 italic">
                Atelier Nail Art
              </h3>
              <p className="font-body text-on-surface-variant font-light leading-relaxed mb-8">
                Hand-painted miniature masterpieces tailored to your personal
                aesthetic. From minimalist lines to intricate gold leaf patterns.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 md:offset-4 overflow-hidden rounded-xl md:ml-auto">
              <div className="relative w-full h-[500px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6TXAufQ7-6YTrk4zru83-r5hVKys16gLBJNxh6JCBFuW3WI0ZeZW53y6sgS3LOsVE6pbZ4NN6YfePZXzfJyBYnjZ6pSZvxf2MVCyxi2SIMO8j2iG7u438xyTYndmMMfz-B6rJA541spwgpXS3zbqEr0wpHyieThjutOmqicpArFYyep92Cyqwb-nrDMix1DwY8gObGdbW3tZpniAILKnKUp9j3ZeuGMTVH9orADSxBBXO9ROwtRl5tkRhW2DbWHEGpA5H37egz4c"
                  alt="Artistic manicure with minimalist white and gold geometric patterns on nude nails, aesthetic and clean style"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
