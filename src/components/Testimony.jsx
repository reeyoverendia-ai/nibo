import React from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import

export default function Testimony() {
  const { t } = useTranslation(); // ✅ Initialized translation hook

  // ✅ Inside the static data array, we store strictly the lookup key string names
  const testimonials = [
    {
      tag: "testimonials.item_1_tag",
      text: "testimonials.item_1_text",
      farm: "testimonials.item_1_farm",
      location: "testimonials.item_1_location",
      initials: "AF" // Initials don't require translation translation
    },
    {
      tag: "testimonials.item_2_tag",
      text: "testimonials.item_2_text",
      farm: "testimonials.item_2_farm",
      location: "testimonials.item_2_location",
      initials: "AC"
    },
    {
      tag: "testimonials.item_3_tag",
      text: "testimonials.item_3_text",
      farm: "testimonials.item_3_farm",
      location: "testimonials.item_3_location",
      initials: "LF"
    }
  ];

  return (
    <section id="field-testimonials" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.4em] text-xs mb-4">
            {t('testimonials.header_tag')}
          </p>
          <h2 className="text-[#FFFFF0] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            {t('testimonials.header_title_main')} <span className="text-[#4A5D23]">{t('testimonials.header_title_accent')}</span>
          </h2>
          <p className="text-[#FFFFF0]/70 text-lg max-w-2xl font-light">
            {t('testimonials.header_description')}
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(231, 225, 218, 0.05)', 
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Quotation Mark Decal */}
              <div className="absolute top-8 left-8 text-8xl font-serif text-white/5 select-none leading-none">“</div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg mb-8 border border-white/10">
                  <span className="text-[#FDFBD4] text-xs font-bold">✓</span>
                  {/* ✅ Evaluates localized text tag dynamically inside layout render */}
                  <span className="text-[#FFFFF0] text-[10px] font-black uppercase tracking-widest">
                    {t(item.tag)}
                  </span>
                </div>

                <p className="text-[#FFFFF0]/80 italic leading-relaxed mb-10 font-light">
                  "{t(item.text)}"
                </p>
              </div>

              {/* Farmer Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#FFFFF0] font-bold text-sm shrink-0 border border-white/20"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-[#FFFFF0] font-bold text-sm uppercase tracking-wide">
                    {t(item.farm)}
                  </h4>
                  <p 
                    className="text-[#FFFFF0]/80 text-xs font-medium leading-tight mt-1 antialiased"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    {t(item.location)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
