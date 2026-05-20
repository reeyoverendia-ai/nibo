import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation(); 
  return (
    /* 🔍 FIXED: 
        1. Changed 'h-screen' to 'min-h-screen py-24' to give the section dynamic growth safety for longer German blocks.
        2. Added flex-col to keep layers cleanly stacked on tiny displays.
    */
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-24 md:py-0">
      {/* 1. THE VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback-image.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover md:object-center object-[70%_center] z-0"
      >
        <source src="/nibo-bg4.mp4" type="video/mp4" />
      </video>

      {/* 2. THE OVERLAY LAYER */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10"></div>

      {/* 3. THE CONTENT LAYER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        {/* 🔍 FIXED CONTENT BOUNDS: Changed top padding to dynamic spacing handles (pt-[120px] sm:pt-[160px] md:pt-28) and added pb-12 to lock in a protective bottom margin safety shield */}
        <div className="max-w-4xl flex flex-col items-center text-center md:items-start md:text-left pt-[120px] sm:pt-[160px] md:pt-28 pb-12 md:pb-0 h-full w-full">
          
          {/* PILL SECTION */}
          <span 
            className="inline-block py-2 px-6 rounded-full border mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]"
            style={{ 
              backgroundColor: 'rgba(135, 174, 115, 0.2)',
              borderColor: 'rgba(255, 255, 240, 0.3)',
              color: '#FFFFF0'
            }}
          >
            <span>{t('hero1.cultivate')}</span>
          </span>
          
          {/* HEADLINE SECTION */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[8xl] font-black leading-[1.05] md:leading-[0.9] tracking-tighter mb-4 md:mb-10 uppercase break-words w-full">
            <span style={{ color: '#FFFFF0' }}>{t('high-precision')}</span> <br />
            <span style={{ color: '#87AE73' }}>{t('biological-systems')}</span> <br />
            <span className="text-lg sm:text-2xl md:text-4xl lg:text-5xl block mt-3 tracking-normal font-bold opacity-80" style={{ color: '#FFFFF0' }}>
              {t('for-climate-resilient-farming')}
            </span>
          </h1>

          {/* PARAGRAPH SECTION */}
          <p className="text-sm sm:text-base md:text-xl max-w-2xl font-light leading-relaxed mb-8 md:mb-10 opacity-90 px-2 sm:px-0" style={{ color: '#FFFFF0' }}>
            {t('nibo-engineers-high-performance-nutrient-delivery-systems-designed-for-the-next-generation-of-industrial-agriculture')}
          </p>

          {/* BUTTONS SECTION */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-2 w-full sm:w-auto justify-center md:justify-start">
            <Link 
              to="/#our-solutions" 
              className="relative px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-[#D4CBB8]/30 text-center w-full sm:w-auto"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: '#FFFFF0', 
                backdropFilter: 'blur(12px)' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">{t('our-solutions')}</span>
            </Link>

            <Link 
              to="/#field-testimonials" 
              className="relative px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] transition-all duration-500 shadow-2xl overflow-hidden group border border-white/20 text-center w-full sm:w-auto"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                color: '#FFFFF0', 
                backdropFilter: 'blur(16px)' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">{t('field-testimonials')}</span>
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
