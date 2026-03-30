import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 md:order-1">
          <div className="w-4/5 aspect-square bg-surface-container-lowest rounded-lg overflow-hidden editorial-shadow -rotate-3 z-10 relative">
            <Image
              className="object-cover"
              alt="Interior of a luxury nail salon with marble floors, gold accents, and minimalist white leather chairs in a sun-drenched room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYGH3jhgZaJH9HEILiBF_YMkWDHfg3ENEmlXj2NCwIDZobNw36zQX7f4iLYjjVME4O6z6vXJ05FXpDNZWduYp6k4HHPcgqiPPWRRk7DDr4-gha9w6unEybJdz-PlaDvYPohwr_IEkYcCO1YLOyv2Q1bW5TZV4cyIPO1qhaW16S9ArvE1sKtAfo6MAcIf1H_Co5XXspoZK5l1_iC1FrDIqaRq8wdwZtG-zuUc_olCQfAOVeJ3WiedmObnmXmDFWEXtIeC3hxAM94zk"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 w-1/2 aspect-[3/4] overflow-hidden rounded-lg editorial-shadow rotate-6 z-20">
            <div className="relative w-full h-full">
              <Image
                className="object-cover"
                alt="Two professional nail artists smiling and working in a modern clean atelier with warm ambient lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJF6zJ3Nk4lYbFzRjSo97AGqew21poOvwnhVpWoD-hF6HYGjcxAIokng9FufbH1R2vhIIyp80-yxMW5M8aoXVU5GzhJAxG-HpANX_zpHShX9whJBLoMW7XjSU9Iqc2DymqTEWlYY66oOu1QuNutTmaZWHyoj5QYXdbpYWIDLe-UwPVZg5gzaLbmvGzVqfpiEAEw6Iu8bCnmQ6kR74k-VOnNMkTeRgFKIzjPSuB3t097qbWpRuvKEJqoR36EJRQ5yYDaaOgBBcexn4"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <span className="font-label text-primary tracking-[0.2em] text-xs uppercase">
            Est. 2018
          </span>
          <h2 className="font-headline text-5xl text-on-surface leading-tight">
            Our Journey
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed">
            <p>
              TK Nails was born from a singular vision: to create a sanctuary
              where the technical precision of a laboratory meets the aesthetic
              soul of an art gallery. Our founders, siblings T and K,
              brought together decades of international experience to the heart
              of the city.
            </p>
            <p>
              What began as a boutique studio has evolved into a premier
              destination for those who seek more than just a service. We believe
              every set of nails is a canvas, and every client deserves a
              bespoke masterpiece tailored to their personal style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
