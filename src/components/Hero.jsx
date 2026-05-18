import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* 1. THE VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback-image.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover md:object-center object-[70%_center] z-0"
      >
        <source src="/nibo-bg3.mp4" type="video/mp4" />
      </video>

      {/* 2. THE OVERLAY LAYER */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10"></div>

      {/* 3. THE CONTENT LAYER */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-12 w-full">
        {/* 🔍 THE PRECISION BALANCE FIX (Mobile Optimized) */}
        <div className="max-w-4xl flex flex-col pt-[320px] md:pt-28 pb-20 md:pb-0 h-full transform scale-[0.85] sm:scale-100 origin-top-left">
          
          {/* PILL SECTION */}
          <span 
            className="inline-block py-2 px-6 rounded-full border mb-2 text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] self-start"
            style={{ 
              backgroundColor: 'rgba(135, 174, 115, 0.2)',
              borderColor: 'rgba(255, 255, 240, 0.3)',
              color: '#FFFFF0'
            }}
          >
            Cultivating the Future of Agriculture
          </span>
          
          {/* HEADLINE SECTION */}
          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[8xl] font-black leading-[0.95] md:leading-[0.9] tracking-tighter mb-2 md:mb-10 uppercase break-words">
            <span style={{ color: '#FFFFF0' }}>High-Precision</span> <br />
            <span style={{ color: '#87AE73' }}>Biological Systems</span> <br />
            <span className="text-2xl md:text-4xl lg:text-5xl block mt-2 tracking-normal font-bold" style={{ color: '#FFFFF0', opacity: 0.8 }}>
              for Climate-Resilient Farming
            </span>
          </h1>

          {/* PARAGRAPH SECTION */}
          <p className="text-base md:text-xl max-w-2xl font-light leading-relaxed mb-4 md:mb-10" style={{ color: '#FFFFF0', opacity: 0.9 }}>
            NIBO engineers high-performance nutrient delivery systems designed for the next generation of industrial agriculture.
          </p>

          {/* BUTTONS SECTION */}
          <div className="flex flex-wrap gap-3 md:gap-6 mt-4">
            <Link 
              to="/#our-solutions" 
              className="relative px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-[#D4CBB8]/30 shrink-0"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: '#FFFFF0', 
                backdropFilter: 'blur(12px)' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">Our Solutions</span>
            </Link>

            <Link 
              to="/#field-testimonials" 
              className="relative px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-white/20 shrink-0"
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

      <style dangerouslySetInnerHTML={{ __html: `
        .group:hover {
          box-shadow: 0 0 40px rgba(212, 203, 184, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2);
          border-color: rgba(253, 251, 212, 0.6);
          transform: translateY(-3px);
        }
      `}} />
    </section>
  );
}
