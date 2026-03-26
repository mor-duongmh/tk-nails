export default function GelAcrylicsSection() {
  return (
    <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-lg">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-outline mb-2 block">Sculpting</span>
          <h2 className="font-headline text-3xl italic text-primary">Gel &amp; Acrylics</h2>
        </div>
        <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">architecture</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <h4 className="font-headline">Apres Gel-X</h4>
              <span className="font-label text-primary">$90+</span>
            </div>
            <p className="text-xs font-light mt-2 text-on-surface-variant leading-relaxed">The world&apos;s first soak-off soft gel extension system.</p>
          </div>
          <div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <h4 className="font-headline">Sculpted Acrylics</h4>
              <span className="font-label text-primary">$110+</span>
            </div>
            <p className="text-xs font-light mt-2 text-on-surface-variant leading-relaxed">Hand-crafted length for ultimate durability and shape.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <h4 className="font-headline">Gel Polish Change</h4>
              <span className="font-label text-primary">$35</span>
            </div>
            <p className="text-xs font-light mt-2 text-on-surface-variant leading-relaxed">Quick refresh with our premium curated color palette.</p>
          </div>
          <div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <h4 className="font-headline">Structural Overlay</h4>
              <span className="font-label text-primary">$25</span>
            </div>
            <p className="text-xs font-light mt-2 text-on-surface-variant leading-relaxed">Added strength for natural nails using builder gel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
