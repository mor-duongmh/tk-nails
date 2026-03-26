import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
      <div className="lg:col-span-7">
        <h1 className="font-headline text-6xl md:text-8xl italic text-primary leading-tight mb-8">
          Let&apos;s connect <br />
          at the Atelier
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Experience precision and artistry in an environment designed for
          serenity. Reach out to schedule your bespoke nail treatment.
        </p>
      </div>
      <div className="lg:col-span-5 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-[400px]">
          <Image
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Close-up of a high-end nail salon interior with minimalist marble surfaces and warm, editorial lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADKKnqsq3xuMcSa_zaH8EvW3-ParT7AfswSG5d-tGL7vVIEnxcyJ6P60wcpKcHA8np5VTwPzq-KNwy93WmDly3YCcnBomJBKSxgqSqrgBiZjuAIdMS7YzXeJGc-iw54HUY-RtqdsMC0rtBF6J02Op6abE_Lpu596OnDDtM2OL8vc_nfVzvdQVYAUf-t23sw6L6GC_aFIci6FNm98jKts4mfshHUaPwLbZ9tSwPabx1pTWN4AuHXGKa1cVYLiCoNr1wrnfUD75rwXg"
            fill
            sizes="(max-width: 1024px) 100vw, 41.67vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>
    </section>
  );
}
