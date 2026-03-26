export default function CorePillars() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <div className="text-center mb-20">
        <h2 className="font-headline text-5xl text-on-surface mb-4 italic">
          Our Core Pillars
        </h2>
        <div className="h-px w-24 bg-primary mx-auto opacity-30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hygiene Card */}
        <div className="bg-surface-container-low p-12 rounded-lg space-y-6">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">
              sanitizer
            </span>
          </div>
          <h4 className="font-headline text-2xl text-on-surface">
            Clinical Hygiene
          </h4>
          <p className="text-on-surface-variant font-light leading-relaxed text-sm">
            Your safety is non-negotiable. We utilize medical-grade autoclaves
            and single-use kits for every client, exceeding industry health
            standards at every step.
          </p>
        </div>
        {/* Quality Card */}
        <div className="bg-surface-container-lowest p-12 rounded-lg editorial-shadow space-y-6 border border-outline-variant/10">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">verified</span>
          </div>
          <h4 className="font-headline text-2xl text-on-surface">
            Premium Products
          </h4>
          <p className="text-on-surface-variant font-light leading-relaxed text-sm">
            We exclusively partner with eco-conscious, high-performance brands
            that prioritize nail health without compromising on vibrant,
            long-lasting color.
          </p>
        </div>
        {/* Education Card */}
        <div className="bg-surface-container-low p-12 rounded-lg space-y-6">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">school</span>
          </div>
          <h4 className="font-headline text-2xl text-on-surface">
            Artisan Training
          </h4>
          <p className="text-on-surface-variant font-light leading-relaxed text-sm">
            Our technicians undergo continuous education in the latest global
            trends and biomechanical nail health to ensure master-level
            execution.
          </p>
        </div>
      </div>
    </section>
  );
}
