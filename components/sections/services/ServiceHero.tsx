import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="px-8 max-w-7xl mx-auto mb-24">
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-7">
          <h1 className="font-headline italic text-6xl md:text-8xl text-primary leading-none tracking-tighter mb-8">
            The Service<br />Portfolio
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-md leading-relaxed">
            A curated selection of high-performance nail artistry and restorative therapies designed for the discerning individual.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 relative">
          <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
            <Image
              className="w-full h-full object-cover"
              alt="Close-up of minimalist elegant manicure with soft neutral polish on a woman's hands resting on a textured linen surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3r0QboSOirjltApQ1izipJ9sjUy9BogpACRBkI4Dn0GEQZLYDG2gzH02o3DPmu28ZBybe0OLS8yjK3t2rBLJor_LIvPdct-hO3WSZ8oUAHbFg1MUVwBbjWM1qYqprdy30cjp5DLdE0kOLCtVIyGOxj2B59b96npXOSGMx6BHb6O6Ybilu1rgLYmYK4Y8bnI7Tg8_hSkXoapYLo6OQeZGKYrirqaATaYK-PxJm5hyMTAV2I4ccbJJ7xM8rJABvW0oJX3VVGC5hP4"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 shadow-2xl max-w-[200px]">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block">Philosophy</span>
            <p className="text-xs font-light leading-relaxed">Precision in every stroke, luxury in every detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
