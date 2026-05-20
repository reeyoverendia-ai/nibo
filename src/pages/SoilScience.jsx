import React from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import

export default function TechnicalBrief() {
  const { t } = useTranslation(); // ✅ Initialized translation hook

  // ✅ Storing strictly the localization key string paths to protect page mounting
  const scienceCards = [
    {
      id: "01",
      title: "science.card_1_title",
      text: "science.card_1_text"
    },
    {
      id: "02",
      title: "science.card_2_title",
      text: "science.card_2_text"
    },
    {
      id: "03",
      title: "science.card_3_title",
      text: "science.card_3_text"
    },
    {
      id: "04",
      title: "science.card_4_title",
      text: "science.card_4_text"
    },
    {
      id: "05",
      title: "science.card_5_title",
      text: "science.card_5_text"
    },
    {
      id: "06",
      title: "science.card_6_title",
      text: "science.card_6_text"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.4em] text-xs mb-4">
            {t('science.header_tag')}
          </p>
          <h1 className="text-[#FFFFF0] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            {t('science.header_title_main')} <br />
            <span className="text-[#4A5D23]">{t('science.header_title_accent')}</span>
          </h1>
          <p className="text-[#FFFFF0]/80 text-xl leading-relaxed font-light">
            {t('science.header_desc_start')}{' '}
            <span className="text-[#FFFFF0] font-bold">{t('science.header_desc_bold')}</span>{' '}
            {t('science.header_desc_end')}
          </p>
        </div>

        {/* 6-CARD LIQUID GLASS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceCards.map((card) => (
            <div 
              key={card.id}
              className="relative p-10 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:translate-y-[-5px]"
              style={{ 
                backgroundColor: 'rgba(231, 225, 218, 0.07)', 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}
            >
              {/* Massive ID Number Overlay */}
              <div className="absolute top-6 right-10 text-8xl font-black text-[#FFFFF0]/5 select-none">
                {card.id}
              </div>

              <div className="relative z-10">
                <h3 className="text-[#4A5D23] font-black text-xl uppercase tracking-widest mb-4">
                  {t(card.title)}
                </h3>
                <p className="text-[#FFFFF0]/70 leading-relaxed font-light">
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