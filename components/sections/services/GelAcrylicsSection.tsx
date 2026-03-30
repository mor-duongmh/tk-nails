export default function GelAcrylicsSection() {
  const items = [
    { name: "Acrylic", fullSet: "$40", fillIn: "$30+" },
    { name: "Acrylic with Gel Polish", fullSet: "$50", fillIn: "$40+" },
    { name: "Pink & White", fullSet: "$55", fillIn: "$40+" },
    { name: "Ombre", fullSet: "$55", fillIn: "$40+" },
    { name: "Builder Gel", fullSet: "$60", fillIn: "$50+" },
    { name: "Gel X", fullSet: "$60", fillIn: "$50+" },
  ];

  return (
    <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-lg">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-outline mb-2 block">Sculpting</span>
          <h2 className="font-headline text-3xl italic text-primary">Artificial Nails</h2>
        </div>
        <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">architecture</span>
      </div>
      <div>
        {/* Header row */}
        <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3 mb-4">
          <span className="font-label text-xs uppercase tracking-widest text-outline w-1/2">&nbsp;</span>
          <span className="font-label text-xs uppercase tracking-widest text-outline w-1/4 text-center">Full Set</span>
          <span className="font-label text-xs uppercase tracking-widest text-outline w-1/4 text-right">Fill In</span>
        </div>
        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <h4 className="font-headline w-1/2">{item.name}</h4>
              <span className="font-label text-primary w-1/4 text-center">{item.fullSet}</span>
              <span className="font-label text-primary w-1/4 text-right">{item.fillIn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
