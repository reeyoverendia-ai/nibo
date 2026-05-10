export default function Videos() {
  return (
<section id="process" className="py-24 px-6 bg-transparent">
  <div className="max-w-7xl mx-auto text-center">
    <section id="our-solutions" className="w-full"></section>
    
    {/* HEADING: Ebony Clay for a strong industrial punch */}
    <h2 
      className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
      style={{ color: '#4A443F' }} 
    >
      Inside NIBO Labs
    </h2>

    {/* SUBTEXT: Cream for that seamless, soft look */}
    <p 
      className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-16"
      style={{ color: '#FFFFF0', opacity: 0.9 }}
    >
      Witness the precision behind our nutrient blending technology and our 
      commitment to sustainable manufacturing.
    </p>

    {/* VIDEO CONTAINER */}
      <div 
        className="aspect-video max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-md flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.1)' }}
      >
        {/* The "Play" Interaction */}
        <button className="group flex flex-col items-center transition-transform hover:scale-110 active:scale-95">
          <div className="w-20 h-20 bg-[#4A5D23] rounded-full flex items-center justify-center shadow-xl mb-4">
            {/* Play Icon - CSS Triangle */}
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-[#FFFFF0] border-b-[12px] border-b-transparent ml-1"></div>
          </div>
          <span className="text-[#FFFFF0] font-bold uppercase tracking-widest text-[10px]">
            Watch Factory Tour (2:40)
          </span>
        </button>
      </div>

        {/* Bottom Detail Section */}
        {/* Remove any 'border-b' or 'border-t' from this container */}
<div className="grid md:grid-cols-3 gap-8 mt-20 text-center bg-transparent">
  <div className="p-4">
    <h3 className="font-black text-[#4A443F] text-2xl mb-2">01</h3>
    <p className="text-slate-800 text-sm font-medium">Sourcing Raw Materials</p>
  </div>
  {/* Ensure the middle one only has vertical borders, not horizontal ones */}
  <div className="p-4 border-x border-slate-900/10"> 
    <h3 className="font-black text-[#4A443F] text-2xl mb-2">02</h3>
    <p className="text-slate-800 text-sm font-medium">Precision Blending</p>
  </div>
  <div className="p-4">
    <h3 className="font-black text-[#4A443F] text-2xl mb-2">03</h3>
    <p className="text-slate-800 text-sm font-medium">Quality Assurance</p>
  </div>
</div>
        
      </div>
    </section>
  );
}