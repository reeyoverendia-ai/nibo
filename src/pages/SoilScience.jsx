import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TechnicalBrief() {
  const { t, i18n } = useTranslation(); // 🔍 Hooked in i18n to check the active language context dynamically

  const scienceCards = [
    { id: "01", title: "science.card_1_title", text: "science.card_1_text" },
    { id: "02", title: "science.card_2_title", text: "science.card_2_text" },
    { id: "03", title: "science.card_3_title", text: "science.card_3_text" },
    { id: "04", title: "science.card_4_title", text: "science.card_4_text" },
    { id: "05", title: "science.card_5_title", text: "science.card_5_text" },
    { id: "06", title: "science.card_6_title", text: "science.card_6_text" }
  ];

  // 🔍 Check if the user is viewing the site in German to apply precise styling safety injections
  const isGerman = i18n.language?.startsWith('de');

  return (
    <div className="min-h-screen bg-transparent pt-32 sm:pt-40 pb-20 px-4 sm:px-8 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-20 px-2 sm:px-0">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] text-xs mb-4">
            {t('science.header_tag')}
          </p>
          <h1 className="text-[#FFFFF0] text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[1.05] md:leading-none mb-8 whitespace-normal break-words">
            {t('science.header_title_main')} <br />
            <span className="text-[#4A5D23]">{t('science.header_title_accent')}</span>
          </h1>
          <p className="text-[#FFFFF0]/80 text-lg md:text-xl leading-relaxed font-light">
            {t('science.header_desc_start')}{' '}
            <span className="text-[#FFFFF0] font-bold">{t('science.header_desc_bold')}</span>{' '}
            {t('science.header_desc_end')}
          </p>
        </div>

        {/* 6-CARD LIQUID GLASS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {scienceCards.map((card) => (
            <div 
              key={card.id}
              className="relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:translate-y-[-5px]"
              style={{ 
                backgroundColor: 'rgba(231, 225, 218, 0.07)', 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}
            >
              {/* Massive ID Number Overlay */}
              <div className="absolute top-4 right-6 sm:top-6 sm:right-10 text-7xl sm:text-8xl font-black text-[#FFFFF0]/5 select-none pointer-events-none">
                {card.id}
              </div>

              <div className="relative z-10 pr-6 sm:pr-0">
                {/* 🔍 FIXED CARD HEADINGS:
                    - Scaled mobile size safely down to text-lg, scaling dynamically on tablets and desktop monitors.
                    - Set tracking-tight and leading-tight to keep the text footprint contained.
                    - Injected hyphens-auto alongside break-words to ensure clean, proper hyphenation constraints for German production builds.
                */}
                <h3 
                  lang={isGerman ? "de" : "en"}
                  className="text-[#4A5D23] font-black text-lg sm:text-xl md:text-xl lg:text-2xl uppercase tracking-wider sm:tracking-widest mb-4 leading-tight break-words hyphens-auto tracking-tight"
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
                >
                  {t(card.title)}
                </h3>
                <p className="text-[#FFFFF0]/70 text-sm sm:text-base leading-relaxed font-light">
                  {t(card.text)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
