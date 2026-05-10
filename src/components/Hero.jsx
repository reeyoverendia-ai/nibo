import React from 'react';
import { Link } from 'react-router-dom'; // 🔍 ADD THIS LINE
export default function Hero() {
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* BACKGROUND VIDEO/IMAGE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
        >
          <source src="/nibo-bg2.mp4" type="video/mp4" />
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
<h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[8xl] font-black leading-[0.95] md:leading-[0.9] tracking-tighter mb-10 uppercase break-words">
  {/* TOP LINE: High-Precision */}
  <span style={{ color: '#FFFFF0' }}>High-Precision</span> <br />
  
  {/* MIDDLE LINE: Biological Systems */}
  <span style={{ color: '#87AE73' }}>Biological Systems</span> <br />
  
  {/* BOTTOM LINE: Smaller, secondary color to fit the length */}
  <span className="text-2xl md:text-4xl lg:text-5xl block mt-4" style={{ color: '#FFFFF0', opacity: 0.8 }}>
    for Climate-Resilient Farming
  </span>
</h1>

    {/* SUBTEXT: Reduced size on mobile for better flow */}
    <p className="text-base md:text-xl max-w-2xl font-light leading-relaxed mb-10" style={{ color: '#FFFFF0', opacity: 0.9 }}>
      NIBO engineers high-performance nutrient delivery systems designed for the next generation of industrial agriculture.
    </p>

<div className="flex flex-wrap gap-6 mt-12">
  {/* OUR SOLUTIONS */}
  <Link 
    to="/#our-solutions" 
    className="relative px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-[#D4CBB8]/30"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      color: '#FFFFF0', 
      backdropFilter: 'blur(12px)' 
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
    <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">Our Solutions</span>
    <style dangerouslySetInnerHTML={{ __html: `
      .group:hover {
        box-shadow: 0 0 40px rgba(212, 203, 184, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2);
        border-color: rgba(253, 251, 212, 0.6);
        transform: translateY(-3px);
      }
    `}} />
  </Link>

  {/* FIELD TESTIMONIALS */}
  <Link 
    to="/#field-testimonials" 
    className="relative px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-white/20"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
      color: '#FFFFF0', 
      backdropFilter: 'blur(16px)' 
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
    <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">Field Testimonials</span>
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}