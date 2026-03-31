export default function ServiceCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl italic text-primary mb-8 tracking-tight">Ready for your transformation?</h2>
        <p className="font-body text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
          Secure your moment of luxury at our editorial atelier. Spaces are limited to ensure personalized attention for every guest.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="tel:+16307181888" className="gold-gradient text-on-primary px-12 py-4 rounded-full font-label text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
            Book Appointment
          </a>
          <button className="text-primary font-label text-sm uppercase tracking-widest flex items-center gap-2 group">
            View Lookbook
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
