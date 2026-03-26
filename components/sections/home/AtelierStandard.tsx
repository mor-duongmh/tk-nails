export default function AtelierStandard() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface italic mb-4">
            The Atelier Standard
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-12 rounded-xl editorial-shadow group hover:-translate-y-1 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
              diamond
            </span>
            <h3 className="font-headline text-2xl mb-4">Artisan Precision</h3>
            <p className="font-body text-on-surface-variant font-light leading-relaxed">
              Our master technicians treat every nail as a canvas for
              high-fashion expression, utilizing the finest techniques from
              across the globe.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-xl editorial-shadow group hover:-translate-y-1 transition-transform duration-500 md:mt-12">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
              auto_awesome
            </span>
            <h3 className="font-headline text-2xl mb-4">Organic Luxury</h3>
            <p className="font-body text-on-surface-variant font-light leading-relaxed">
              We exclusively curate toxin-free, high-performance lacquers and
              treatments that prioritize both aesthetic brilliance and nail
              health.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-xl editorial-shadow group hover:-translate-y-1 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
              spa
            </span>
            <h3 className="font-headline text-2xl mb-4">Scented Serenity</h3>
            <p className="font-body text-on-surface-variant font-light leading-relaxed">
              A sanctuary for the senses. From our signature essential oil blends
              to our plush linens, every detail is a breath of fresh air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
