import Image from "next/image";

export default function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-24">
      <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-surface-container-low relative group">
        {/* Map Placeholder Image */}
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 transition-all duration-1000"
            alt="Modern minimalist stylized map of New York Design District with custom gold markers"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVib7F7mTB2rvRMD0aLfFsbg_9P0lNAkuevlrTyWehttCAJR_bPut2kRZcdNfCM-FkcxoeZIHjoC52TdQrOVG4X6wEN-WMmsIwboJTaZ5o4MRns958R2wFto2YghP8gn_-wNgjskd_hgNdiNNRZxz0qrJW1ynzIDGKxDEmXvdJd7WflFlKu-GZaF5A-sdXdyFhMPZ8LYkTxcK-wQXmi6ZTlrXUJwOwvKZU1gb-HvntUSeF-PP27RIfbFLCfOQFIezBuKejDkk0n2Y"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow glass-effect flex flex-col items-center pointer-events-auto">
            <span
              className="material-symbols-outlined text-primary text-4xl mb-2"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <span className="font-headline text-lg italic">
              TK Nails Atelier
            </span>
            <a
              className="mt-4 font-label text-xs tracking-widest uppercase text-primary border-b border-primary/30 hover:border-primary transition-all"
              href="https://www.google.com/maps?q=TK+Nails,+3075+Book+Rd+Suite+155,+Naperville,+IL+60564"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
