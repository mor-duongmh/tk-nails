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
          <h2 className="font-headline text-4xl mb-4 italic text-primary">Pedicures</h2>
          <p className="text-sm text-on-surface-variant mb-6">Enjoy our signature services with our experienced and professional staff</p>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-headline text-lg text-on-surface">Basic Pedi</h4>
                <span className="font-label text-primary font-semibold">$35</span>
              </div>
              <p className="text-xs text-on-surface font-body mt-1 leading-relaxed">Soak, Shape, Cuticle Care, Heel Buff, Exfoliating Lotion and Polish.</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-headline text-lg text-on-surface">Herbal Therapy</h4>
                <span className="font-label text-primary font-semibold">$50</span>
              </div>
              <p className="text-xs text-on-surface font-body mt-1 leading-relaxed">Soak with Honey Bath Bomb and Herbal Himalaya Salt, Shape, Cuticle Care, Callus Buff, Exfoliating, Reflexology Foot Massage with Hot Stone and Polish.</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-headline text-lg text-on-surface">Honey Butter</h4>
                <span className="font-label text-primary font-semibold">$55</span>
              </div>
              <p className="text-xs text-on-surface font-body mt-1 leading-relaxed">Soak with Honey Bath Bomb and Herbal Himalaya Salt, Shape, Cuticle Care, Callus Buff, Exfoliating with Honey Sugar Scrub, Parafin Wrapping, Reflexology Foot Massage with Honey Pearl Lotion and Polish.</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-headline text-lg text-on-surface">Espresso</h4>
                <span className="font-label text-primary font-semibold">$65</span>
              </div>
              <p className="text-xs text-on-surface font-body mt-1 leading-relaxed">Soak with Coffee Bath Bomb and Coffee Fizzy Salt to Relax and Awaken the Senses, Gentle Exfoliation with Coffee Sugar Baby to Remove Dead Skin and Smooth the Feet, Parafin Wrapping, Hot Stone Massage, Relaxing Massage with Coffee Cream Butter for Deep Moisture and Comfort, Polish.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
