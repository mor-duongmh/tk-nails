import Image from "next/image";

export default function AtelierProtocol() {
  return (
    <section className="py-32">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <Image
            className="object-cover brightness-75"
            alt="Wide shot of a minimalist high-end nail salon interior with clean lines, natural wood elements, and large windows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtS-eGeFDFyjWXYlNxPfQMh6mr_iBK3mY7VQRsYgokJrKkUkpeD9cBiruG_vRqQjYVWtKKO_fMpgzqalPWKm3lPCPgi7GOVkKGLRsWpFzJ5T4GnQMYvFyCXl0_f_9uXkSahAC6LAkndUPW3V9JBYBfOHz0yGr1qWYJnRveUzyqrJ1ZtUbpOiP6-UeOrQUAjAfe4qBV_G4jk1lffSQrvcYlnRZ8wHbBY2b68M9tFILE0Sh4HdQxnQXmYgl08Cr0kpELdYsCt-V9Q5Y"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-end p-12">
            <div className="max-w-md bg-surface-container-lowest/90 backdrop-blur-md p-12 editorial-shadow translate-x-12 translate-y-12">
              <h3 className="font-headline text-3xl text-primary mb-6 italic">
                The Atelier Protocol
              </h3>
              <p className="text-on-surface-variant font-light mb-8">
                Our space is designed to soothe the senses. From the signature
                amber scent that fills the air to the ergonomic custom seating,
                every detail is engineered for your absolute comfort.
              </p>
              <a
                className="text-primary font-label text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
                href="#"
              >
                Explore the Space &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
