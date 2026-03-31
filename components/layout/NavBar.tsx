"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-headline tracking-tighter text-amber-800 italic"
        >
          TK Nails
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body tracking-wider text-sm uppercase transition-opacity duration-300 active:scale-95 ${
                  isActive
                    ? "text-amber-700 font-semibold border-b border-amber-700/30"
                    : "text-on-surface-variant hover:text-amber-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <a
          href="tel:+16307181888"
          className="gold-gradient text-on-primary px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase hover:opacity-80 transition-opacity duration-300 active:scale-95 shadow-lg shadow-primary/10"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
