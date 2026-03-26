export default function SpaRituals() {
  return (
    <div className="bg-primary text-on-primary p-12 rounded-lg flex flex-col">
      <span className="font-label text-xs uppercase tracking-widest opacity-70 mb-2 block">Wellness</span>
      <h2 className="font-headline text-3xl italic mb-12">Spa Rituals</h2>
      <div className="flex-grow space-y-8">
        <div>
          <h4 className="font-headline text-lg border-b border-on-primary/20 pb-2">Botanical Wrap</h4>
          <p className="text-xs font-light mt-2 opacity-80 leading-relaxed">Deeply hydrating treatment using seasonal floral extracts.</p>
          <span className="font-label mt-2 block text-secondary-fixed-dim">$30</span>
        </div>
        <div>
          <h4 className="font-headline text-lg border-b border-on-primary/20 pb-2">CBD Restoration</h4>
          <p className="text-xs font-light mt-2 opacity-80 leading-relaxed">Calming oil infusion to reduce inflammation and tension.</p>
          <span className="font-label mt-2 block text-secondary-fixed-dim">$45</span>
        </div>
      </div>
      <button className="mt-8 border border-on-primary/30 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-colors">
        Add to any service
      </button>
    </div>
  );
}
