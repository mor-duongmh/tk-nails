import Image from "next/image";

export default function FoundersQuote() {
  return (
    <section className="max-w-4xl mx-auto px-8 mb-32 text-center">
      <div className="font-headline italic text-3xl md:text-4xl text-on-surface-variant leading-relaxed mb-12">
        &ldquo;We don&rsquo;t just paint nails; we cultivate moments of
        intentional stillness and beauty for the modern soul.&rdquo;
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative">
          <Image
            className="object-cover"
            alt="Portrait of a sophisticated female founder in professional attire with a warm, welcoming expression"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQauQj8Ibae39iwTiabGSXZYSYyy5ZYv_aSmAUlgXX265-gwIIa_RJg3M_cn5_Kvi1DXHfJOX8TCqgjTt1gXNJyU5YDFr6VaQLD76oPOgRrEdmJFzzEe7HohRCfBBtXCTUCR16DJKWcxKuZkKu1mKrA0cs0kPUFSLvAY3n3j67SCD7W6y1kgVVvKdFnP2AAvjMwRNtu84I44fmFg669CC2vo2uKy1FJEpeRNpTWN3gRRXFeTD6eesxRaNKcNMo07AZXGYowl2DS4"
            fill
            sizes="64px"
          />
        </div>
        <span className="font-label text-primary tracking-widest text-xs uppercase">
          T &amp; K, Founders
        </span>
      </div>
    </section>
  );
}
