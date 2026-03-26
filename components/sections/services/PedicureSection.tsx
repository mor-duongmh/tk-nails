import Image from "next/image";

export default function PedicureSection() {
  return (
    <div className="mb-32 flex flex-col md:flex-row-reverse items-center gap-16">
      <div className="w-full md:w-1/2 relative">
        <div className="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            alt="Serene spa setting with a copper pedicure bowl filled with warm water and floating white flower petals"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2kWBtNXzw7-e54GZdrzZe2KMKjSs6eje-1QcmGBUZYYwe0FwsHm0y6zY2stft9p6GLHA2N1iPuwCjGJtMIP4Hw9w1iuz1xOh314rGabedUgjSluTgcimwW8ByhpoltqLq21Hebpi0wxE7rYQd2L6JqzK_pkwVgWOZPdN7Nbowj0G8z4j075MoS2I9hYuqyYldaVkD7J3D-5LfdQiajWchIBW3pZ1FcTYeVs2kgn4kAOJlbKlmKh9LPj5zf89p0cccTRkQjTerVtk"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2 bg-surface p-12 shadow-lg max-w-md">
          <h2 className="font-headline text-4xl mb-6 italic text-primary">Pedicures</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline text-lg text-on-surface">Mineral Soak</h4>
                <p className="text-sm font-light text-on-surface-variant mt-1">Dead Sea salts and essential oils to restore tired feet.</p>
              </div>
              <span className="font-label text-primary font-semibold">$65</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline text-lg text-on-surface">The Glass Slipper</h4>
                <p className="text-sm font-light text-on-surface-variant mt-1">Extended massage, paraffin wrap, and flawless polish.</p>
              </div>
              <span className="font-label text-primary font-semibold">$85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
