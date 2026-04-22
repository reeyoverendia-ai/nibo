export default function Testimony() {
  const testimonials = [
    { name: "AgriCorp Global", yield: "+22%", text: "NIBO's nitrogen-controlled release has revolutionized our soy production." },
    { name: "Green Valley Farms", yield: "+18%", text: "The consistency of the NIBO granular mix is unmatched in the current market." }
  ];

  return (
    <section id="testimony" className="py-12 md:py-24 px-4 md:px-6 bg-transparent">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-black text-[#4A5D23] mb-12 md:mb-20 text-center uppercase tracking-tighter">
      Results
    </h2>
    
    {/* grid-cols-1 for Mobile | md:grid-cols-2 for Desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {testimonials.map((t, i) => (
        <div key={i} className="p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-md bg-[#B9CBA3]/30">
          <div className="text-4xl md:text-5xl font-black text-[#4A5D23] mb-4">{t.yield}</div>
          <p className="text-[#FFFFF0] text-lg md:text-xl italic mb-6">"{t.text}"</p>
          <div className="font-bold text-[#4A5D23] text-xs md:text-sm uppercase tracking-widest">— {t.name}</div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}