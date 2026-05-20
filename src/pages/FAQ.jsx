import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import

export default function FAQ() {
  const { t } = useTranslation(); // ✅ Initialized translation hook
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Array stores strictly the translation string keys to prevent layout crashes
  const faqData = [
    { question: "faq.q1", answer: "faq.a1" },
    { question: "faq.q2", answer: "faq.a2" },
    { question: "faq.q3", answer: "faq.a3" },
    { question: "faq.q4", answer: "faq.a4" },
    { question: "faq.q5", answer: "faq.a5" },
    { question: "faq.q6", answer: "faq.a6" },
    { question: "faq.q7", answer: "faq.a7" },
    { question: "faq.q8", answer: "faq.a8" },
    { question: "faq.q9", answer: "faq.a9" },
    { question: "faq.q10", answer: "faq.a10" }
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-20">
          <p className="text-[#4A443F] font-black uppercase tracking-[0.4em] text-xs mb-4">
            {t('faq.header_tag')}
          </p>
          <h1 className="text-[#FFFFF0] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            {t('faq.header_title_main')} <br />
            <span className="text-[#4A443F]">{t('faq.header_title_accent')}</span>
          </h1>
        </div>

        {/* LIQUID GLASS FAQ GRID */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-[2rem] border border-white/20 transition-all duration-500"
              style={{ 
                backgroundColor: 'rgba(255, 255, 240, 0.05)', 
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                {/* ✅ Evaluates localized question dynamic text cleanly */}
                <span className="text-[#FFFFF0] text-lg md:text-xl font-bold tracking-tight uppercase group-hover:text-[#4A5D23] transition-colors">
                  {t(item.question)}
                </span>
                <span className={`text-[#4A443F] text-2xl transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-0 border-t border-white/10">
                  {/* ✅ Evaluates localized paragraph answers smoothly */}
                  <p className="text-[#FFFFF0]/70 text-lg leading-relaxed font-light">
                    {t(item.answer)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}