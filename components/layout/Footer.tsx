import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 mt-24 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div>
          <div className="text-xl font-headline text-amber-800 mb-6 italic">
            TK Nails
          </div>
          <p className="font-body text-on-surface-variant text-sm font-light leading-relaxed">
            Defining the standard of luxury nail care since 2018. An
            editorial-first atelier for the modern aesthetic.
          </p>
        </div>
        <div>
          <h4 className="font-headline text-on-surface mb-6 italic">
            The Atelier
          </h4>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Artisans
            </Link>
            <Link
              href="/about"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Memberships
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="font-headline text-on-surface mb-6 italic">
            Connect
          </h4>
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Pinterest
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Facebook
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-headline text-on-surface mb-6 italic">Legal</h4>
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-amber-600 font-body text-sm font-light transition-colors"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body text-on-surface-variant text-[10px] uppercase tracking-widest">
          &copy; 2024 TK Nails. Editorial Atelier.
        </p>
      </div>
    </footer>
  );
}
