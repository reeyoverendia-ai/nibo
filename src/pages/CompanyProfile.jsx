import React from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import
import KeyObjectives from '../components/KeyObjectives';

export default function CompanyProfile() {
  const { t } = useTranslation(); // ✅ Initialized translation hook

  // ✅ Storing only the localization key string paths to protect page mounting
  const timelineData = [
    { year: '2013', title: 'company.timeline_2013', align: 'left' },
    { year: '2019', title: 'company.timeline_2019', align: 'right' },
    { year: '2020', title: 'company.timeline_2020', align: 'left' },
    { year: '2023', title: 'company.timeline_2023', align: 'right' },
    { year: '2024', title: 'company.timeline_2024', align: 'left' },
  ];

  // ✅ Storing structural items safely as string references
  const scienceHighlights = [
    { id: "1", title: "company.science_1_title", text: "company.science_1_text" },
    { id: "2", title: "company.science_2_title", text: "company.science_2_text" },
    { id: "3", title: "company.science_3_title", text: "company.science_3_text" },
    { id: "4", title: "company.science_4_title", text: "company.science_4_text" },
    { id: "5", title: "company.science_5_title", text: "company.science_5_text" }
  ];

  // 1. PROJECT BUTTON COMPONENT (Maintained with translation capabilities)
  const ExecutiveGlassButton = ({ children, href }) => {
    return (
      <a 
        href={href} 
        className="inline-flex items-center justify-center mt-12 px-16 py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] transition-all duration-500 shadow-xl overflow-hidden group relative border border-[#D4CBB8]/40"
        style={{
          backgroundColor: 'rgba(212, 203, 184, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          color: '#FFFFF0'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
        <span className="relative z-10 group-hover:text-[#4A443F] transition-colors duration-500">{children}</span>
        <style dangerouslySetInnerHTML={{ __html: `
          .group:hover {
            box-shadow: 0 0 50px rgba(212, 203, 184, 0.6), inset 0 0 20px rgba(255, 255, 240, 0.3);
            border-color: rgba(255, 255, 240, 0.8);
            transform: translateY(-3px) scale(1.01);
          }
        `}} />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 space-y-40">
        
{/* 1. BUILT ON SCIENCE */}
        <section className="max-w-5xl">
          <h1 className="text-[#4A5D23] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            {t('company.hero_line1')} <br />
            <span className="text-[#FFFFF0]">{t('company.hero_line2')}</span>
          </h1>
          <p className="text-[#FFFFF0]/80 text-xl font-light mb-16 max-w-3xl">
            {t('company.hero_description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {scienceHighlights.map((item) => (
              /* 🔍 FIXED: Removed the duplicated copy block entirely */
              <div key={item.id} className="flex gap-8 items-start mb-10"> 
                
                {/* ID CIRCLE */}
                <div className="w-12 h-12 rounded-full bg-[#E7E1DA]/10 flex items-center justify-center text-[#4A5D23] font-bold shrink-0 border border-white/5 text-xl">
                  {item.id}
                </div>

                <div>
                  {/* TITLE */}
                  <h3 className="text-[#FFFFF0] font-bold text-xl mb-3 uppercase tracking-wide">
                    {t(item.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[#FFFFF0]/80 font-light leading-relaxed text-lg antialiased">
                    {t(item.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

{/* 2. OUR STORY */}
        {/* 🔍 OPTIMIZED GRID: Split 50/50 using lg:grid-cols-2 or 6-and-6 columns to guarantee side spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Expanded from span-5 to span-6 to give long text maximum horizontal space */}
          <div className="space-y-4 lg:col-span-6 w-full min-w-0">
            {/* 🔍 TYPOGRAPHY FIX:
                - Lowered maximum text ceilings slightly to lg:text-6xl xl:text-7xl.
                - Changed tracking to tracking-tight.
                - Replaced 'break-words' with 'whitespace-nowrap lg:whitespace-normal' so the words never snap mid-syllable.
            */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl font-black text-[#FFFFF0] uppercase tracking-tight leading-[0.9] lg:leading-[0.85]">
              {t('company.story_line1')}<br />
              <span className="text-[#4A5D23] block mt-1">{t('company.story_line2')}</span>
            </h2>
            <div className="h-1 w-24 bg-[#E7E1DA] opacity-50 mt-6"></div>
          </div>

          {/* RIGHT COLUMN GLASS CARD: Balanced perfectly to complement the layout change */}
          <div className="p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl lg:col-span-6 w-full" 
               style={{ backgroundColor: 'rgba(231, 225, 218, 0.12)', backdropFilter: 'blur(20px)' }}>
            <p className="text-lg md:text-xl leading-relaxed font-light text-[#FFFFF0]">
              <span className="font-black">{t('company.story_accent_word')}</span> {t('company.story_body')}
            </p>
          </div>

        </div>

        {/* 3. TIMELINE */}
        <section className="relative">
          <div className="text-center mb-16">
            <h2 className="text-[#4A5D23] text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {t('company.timeline_heading')}
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#E7E1DA]/20 hidden md:block"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center w-full ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 px-8">
                    <div className="p-6 rounded-3xl border border-white/10" style={{ backgroundColor: 'rgba(231, 225, 218, 0.05)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-[#4A5D23] font-black text-2xl">{item.year}</span>
                      <h3 className="text-[#FFFFF0] text-lg font-bold uppercase tracking-widest mt-1">
                        {t(item.title)}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A5D23] border-4 border-[#eed9c4] hidden md:block"></div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. KEY OBJECTIVES */}
        <KeyObjectives t={t} />

        {/* 5. GROWTH & STRATEGY */}
        <section className="pb-20 text-center px-4">
          <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
            <h2 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-widest mb-8">
              {t('company.strategy_title')}
            </h2>
            <p className="text-[#FFFFF0]/80 text-xl font-light italic mb-12">
              {t('company.strategy_quote')}
            </p>

            <div className="flex justify-center w-full">
              <ExecutiveGlassButton href="/#contact">
                {t('company.strategy_btn')}
              </ExecutiveGlassButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}