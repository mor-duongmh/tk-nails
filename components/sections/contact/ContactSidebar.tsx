export default function ContactSidebar() {
  return (
    <div className="space-y-8">
      {/* Location & Contact */}
      <div className="bg-surface-container-low p-10 rounded-xl space-y-10">
        <div>
          <h3 className="font-headline text-xl mb-6">Visit Us</h3>
          <a
            href="https://www.google.com/maps/place/TK+Nails/@41.7279518,-88.1958295,14z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <p className="font-body text-on-surface-variant leading-relaxed group-hover:text-primary transition-colors">
              TK Nails
              <br />
              Naperville, IL
            </p>
          </a>
        </div>
        <div className="space-y-4">
          <a href="tel:+16307181888" className="flex items-center gap-4 group">
            <span className="material-symbols-outlined text-primary">call</span>
            <span className="font-body text-on-surface-variant group-hover:text-primary transition-colors">
              (630) 718-1888
            </span>
          </a>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-surface-container-low p-10 rounded-xl">
        <h3 className="font-headline text-xl mb-6">Hours</h3>
        <ul className="space-y-4 font-body text-on-surface-variant">
          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span>Monday — Friday</span>
            <span>9 AM — 7 PM</span>
          </li>
          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span>Saturday</span>
            <span>9 AM — 6 PM</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Sunday</span>
            <span>11 AM — 4 PM</span>
          </li>
        </ul>
      </div>

      {/* Social Connect */}
      <div className="bg-primary-container/10 p-10 rounded-xl">
        <h3 className="font-headline text-xl mb-6">Connect with us</h3>
        <div className="flex gap-6">
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="https://www.instagram.com/_tk.nail_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="https://www.tiktok.com/@tknails_naperville"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">video_library</span>
          </a>
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="https://www.google.com/maps/place/TK+Nails/@41.7279518,-88.1958295,14z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">location_on</span>
          </a>
        </div>
      </div>
    </div>
  );
}
