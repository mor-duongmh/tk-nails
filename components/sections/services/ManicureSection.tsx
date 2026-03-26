import Image from "next/image";

export default function ManicureSection() {
  return (
    <div className="mb-32">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square bg-surface-container-lowest overflow-hidden">
            <Image
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Close up of professional nail technician applying gold leaf detail to a soft pink manicure in a bright studio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMRpwRHkO9Ob7-jCALgMZFr4N6coa-rJW-eSnMLhHtM1K0gt2ji4WWKjL2Xum_GdI37fYvldkkIB2JAKmH_3TVUeMZZ8BZ8tZoUTB0Cr0nHTKCpth0P7n95SykFN1sH8u2ax9doapnjYE2_1sddLss8RMjZQv-HDVDzCpTzQ1lziQsC6_6FOtEzd85Ie3ylh-Epvmc8gktQoErycmOb_UE0pLqLyOZsb6f--cXvMShG-rZDbMdob6Y9HtERkvTB_ML2drdv_O4hfQ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2 bg-surface p-12 shadow-lg max-w-md">
            <h2 className="font-headline text-4xl mb-6 italic text-primary">Manicures</h2>
            <div className="space-y-8">
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-headline text-lg text-on-surface">The Signature Silk</h4>
                  <p className="text-sm font-light text-on-surface-variant mt-1">Nourishing soak, detailed cuticle work, and high-shine buff.</p>
                </div>
                <span className="font-label text-primary font-semibold">$45</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-headline text-lg text-on-surface">Editorial Matte</h4>
                  <p className="text-sm font-light text-on-surface-variant mt-1">Precision shaping followed by a sophisticated velvet finish.</p>
                </div>
                <span className="font-label text-primary font-semibold">$55</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-headline text-lg text-on-surface">French Minimalist</h4>
                  <p className="text-sm font-light text-on-surface-variant mt-1">The timeless classic, reimagined with ultra-fine precision lines.</p>
                </div>
                <span className="font-label text-primary font-semibold">$60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
