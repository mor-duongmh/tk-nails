export default function ContactSidebar() {
  return (
    <div className="space-y-8">
      {/* Location & Contact */}
      <div className="bg-surface-container-low p-10 rounded-xl space-y-10">
        <div>
          <h3 className="font-headline text-xl mb-6">Visit Us</h3>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <p className="font-body text-on-surface-variant leading-relaxed">
              452 Artiste Boulevard, Suite 210
              <br />
              Design District, NY 10013
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">call</span>
            <span className="font-body text-on-surface-variant">
              +1 (212) 555-0198
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span className="font-body text-on-surface-variant">
              atelier@tknails.com
            </span>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-surface-container-low p-10 rounded-xl">
        <h3 className="font-headline text-xl mb-6">Hours</h3>
        <ul className="space-y-4 font-body text-on-surface-variant">
          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span>Monday — Friday</span>
            <span>10am — 8pm</span>
          </li>
          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span>Saturday</span>
            <span>9am — 6pm</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="opacity-50">Sunday</span>
            <span className="italic text-primary">Closed</span>
          </li>
        </ul>
      </div>

      {/* Social Connect */}
      <div className="bg-primary-container/10 p-10 rounded-xl">
        <h3 className="font-headline text-xl mb-6">Connect with us</h3>
        <div className="flex gap-6">
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
          <a
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">video_library</span>
          </a>
        </div>
      </div>
    </div>
  );
}
