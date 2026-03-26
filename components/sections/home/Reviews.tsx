export default function Reviews() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">
            format_quote
          </span>
          <h2 className="font-headline text-4xl italic">
            Acclaimed by the Discerning
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex text-primary mb-4">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="font-headline text-xl italic leading-relaxed text-on-surface">
              &ldquo;TK Nails isn&apos;t just a salon; it&apos;s a sensory
              retreat. The attention to detail in their gold-leaf art is simply
              unparalleled in the city.&rdquo;
            </p>
            <div className="pt-4 border-t border-outline-variant/20">
              <span className="font-label text-xs uppercase tracking-widest text-primary block">
                Elena Vance
              </span>
              <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-tighter">
                Fashion Editor
              </span>
            </div>
          </div>
          <div className="space-y-6 md:mt-24">
            <div className="flex text-primary mb-4">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="font-headline text-xl italic leading-relaxed text-on-surface">
              &ldquo;The ambiance is as curated as the services. I left feeling
              restored, with nails that felt like a high-end fashion
              accessory.&rdquo;
            </p>
            <div className="pt-4 border-t border-outline-variant/20">
              <span className="font-label text-xs uppercase tracking-widest text-primary block">
                Julian Thorne
              </span>
              <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-tighter">
                Architectural Designer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
