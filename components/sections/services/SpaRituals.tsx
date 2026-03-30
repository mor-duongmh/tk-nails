export default function SpaRituals() {
  const items = [
    { name: "Nail Repair", price: "$5+" },
    { name: "French", price: "$5+" },
    { name: "Chrome", price: "$10+" },
    { name: "Cat Eye", price: "$10+" },
    { name: "Cut Down & Shaping", price: "$5+" },
    { name: "Gel Take Off", price: "$10+" },
    { name: "Dip/Acrylic Take Off", price: "$15+" },
    { name: "Polish Change on Hand", price: "$10+" },
    { name: "Polish Change on Feet", price: "$15+" },
    { name: "Gel Polish Change on Hand", price: "$30+" },
    { name: "Gel Polish Change on Feet", price: "$30+" },
  ];

  return (
    <div className="bg-primary text-on-primary p-12 rounded-lg flex flex-col">
      <span className="font-label text-xs uppercase tracking-widest opacity-70 mb-2 block">Extras</span>
      <h2 className="font-headline text-3xl italic mb-8">Add-On</h2>
      <div className="flex-grow space-y-3 overflow-y-auto">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <h4 className="font-body text-sm">{item.name}</h4>
            <span className="font-label text-secondary-fixed-dim text-sm">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
