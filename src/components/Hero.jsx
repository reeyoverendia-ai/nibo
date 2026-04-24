export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* BACKGROUND VIDEO/IMAGE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
        >
          <source src="/nibo-bg.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay to make your Ivory text pop */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-20">
  <div className="max-w-4xl">
    
    {/* PILL: Added 'mt-4' to ensure it doesn't touch the Navbar */}
    <span 
      className="inline-block py-2 px-6 rounded-full border mb-6 mt-4 text-[9px] md:text-xs font-bold uppercase tracking-[0.3em]"
      style={{ 
        backgroundColor: 'rgba(135, 174, 115, 0.2)',
        borderColor: 'rgba(255, 255, 240, 0.3)',
        color: '#FFFFF0'
      }}
    >
      Cultivating the Future of Agriculture
    </span>
    
    {/* RESPONSIVE HEADING: 
        Mobile: text-5xl (tight)
        Tablet: text-7xl 
        Desktop: text-9xl 
    */}
    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 uppercase">
      <span style={{ color: '#FFFFF0' }}>Superior Soil</span> <br />
      <span style={{ color: '#87AE73' }}>Intelligence.</span>
    </h1>

    {/* SUBTEXT: Reduced size on mobile for better flow */}
    <p className="text-base md:text-xl max-w-2xl font-light leading-relaxed mb-10" style={{ color: '#FFFFF0', opacity: 0.9 }}>
      NIBO engineers high-performance nutrient delivery systems designed for the next generation of industrial agriculture.
    </p>

    <div className="flex flex-col sm:flex-row gap-5">
  {/* OUR SOLUTIONS - Muted Olive Glass */}
  <button 
    className="px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-xl"
    style={{ 
      backgroundColor: 'rgba(132, 140, 103, 0.4)', // #848C67 at 40%
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      color: '#FFFFF0'
    }}
  >
    Our Solutions
  </button>
  
  {/* THE NIBO PROCESS - Clear Semi-Frosted Glass */}
  <button 
    className="px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-md border border-white/20 active:scale-95 shadow-xl"
    style={{ 
      backgroundColor: 'rgba(255, 255, 240, 0.15)', // Light Ivory Glass
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      color: '#FFFFF0' 
    }}
  >
    The NIBO Process
  </button>
</div>
        </div>
      </div>
    </section>
  );
}
