import React from 'react';
import { useTranslation } from 'react-i18next';

const glassIconStyle = {
  backgroundColor: 'rgba(231, 225, 218, 0.12)', 
  backdropFilter: 'blur(10px)',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.15)' 
};

const hexagonDecorationStyle = {
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
};

const GlassCheckmark = () => {
  return (
    <div 
      className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 mb-6 transition-transform duration-500 group-hover:scale-110"
      style={glassIconStyle}
    >
      <svg 
        className="w-6 h-6 text-[#FFFFF0]" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};

export default function KeyObjectives() {
  const { t } = useTranslation();

  // ✅ Keeping arrays stable with pure localization string keys
  const objectives = [
    { title: 'objectives.obj_1_title', desc: 'objectives.obj_1_desc' },
    { title: 'objectives.obj_2_title', desc: 'objectives.obj_2_desc' },
    { title: 'objectives.obj_3_title', desc: 'objectives.obj_3_desc' }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden px-4 sm:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* SECTION TITLE */}
        <div className="mb-20">
          {/* 🔍 MOBILE TITLE FIX: Added whitespace-nowrap md:whitespace-normal and text-4xl on mobile to keep German layout secure */}
          <h2 className="text-[#FFFFF0] text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight md:tracking-tighter leading-none mb-4 whitespace-nowrap md:whitespace-normal">
            {t('objectives.header_title_main')} <span className="text-[#4A5D23]">{t('objectives.header_title_accent')}</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#E7E1DA] opacity-40"></div>
        </div>

        {/* OBJECTIVE CARDS GRID */}
        {/* 🔍 RESPONSIVE FIX: gap-16 was a bit tight for long German texts. Adjusted to gap-8 lg:gap-16 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {objectives.map((obj, index) => (
            <div 
              key={index} 
              /* ⚡ ELECTRIFIED INDUSTRIAL CARD CONTAINER ⚡ */
              className="flex flex-col items-center text-center p-8 sm:p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group transition-all duration-500 ease-out"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(250, 238, 200, 0.6)';
                if (window.innerWidth >= 768) {
                  e.currentTarget.style.boxShadow = '0 -5px 30px rgba(250, 238, 200, 0.3), 0 0 25px rgba(250, 238, 200, 0.2), inset 0 0 20px rgba(250, 238, 200, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <GlassCheckmark />
              
              {/* 🔍 CARD HEADINGS: Balanced mobile scale from text-2xl to text-xl sm:text-2xl to avoid mid-word clipping */}
              <h3 className="text-[#FFFFF0] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-[#FAEEC8] transition-colors duration-300">
                {t(obj.title)}
              </h3>
              
              <p className="text-[#FFFFF0]/70 text-base leading-relaxed max-w-sm font-light">
                {t(obj.desc)}
              </p>

              {/* INTENSIFIED GOLD FLOOR ACCENT LINE */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_-2px_20px_rgba(250,238,200,0.8),0_0_15px_#FAEEC8]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 opacity-10 flex justify-center items-center pointer-events-none">
        <div 
          className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] border border-[#E7E1DA]" 
          style={hexagonDecorationStyle}
        ></div>
      </div>
    </section>
  );
}
