import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EUMarket() {
  const { t } = useTranslation();

  // ✅ Clean data array using raw translation key paths
  const comparisonData = [
    { metric: "eumarket.metric_price", import: "€1.20–€1.50", nibo: "€3.50–€5.00" },
    { metric: "eumarket.metric_brix", import: "18–20%", nibo: "23–25% (target)" },
    { metric: "eumarket.metric_harvest", import: "eumarket.val_premature", nibo: "eumarket.val_ripeness" },
    { metric: "eumarket.metric_cost", import: "eumarket.val_synthetic", nibo: "eumarket.val_microbial" },
    { metric: "eumarket.metric_yield", import: "eumarket.val_import_only", nibo: "30–50 tonnes" },
    { metric: "eumarket.metric_revenue", import: "N/A", nibo: "€100,000–€150,000" },
    { metric: "eumarket.metric_waste", import: "eumarket.val_waste_high", nibo: "eumarket.val_waste_zero" },
    { metric: "eumarket.metric_roi", import: "~10–15%", nibo: "30–40% (projected)" },
  ];

  // ✅ Alignment data using clean key structures
  const alignmentCards = [
    {
      id: "01",
      title: "eumarket.card_1_title",
      text: "eumarket.card_1_text",
      tag: "eumarket.tag_regulatory"
    },
    {
      id: "02",
      title: "eumarket.card_2_title",
      text: "eumarket.card_2_text",
      tag: "eumarket.tag_ecological"
    },
    {
      id: "03",
      title: "eumarket.card_3_title",
      text: "eumarket.card_3_text",
      tag: "eumarket.tag_efficiency"
    },
    {
      id: "04",
      title: "eumarket.card_4_title",
      text: "eumarket.card_4_text",
      tag: "eumarket.tag_commercial"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-32 sm:pt-40 pb-20 px-4 sm:px-8 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto">
        
{/* HEADER SECTION */}
        <div className="max-w-4xl mb-24 px-2 sm:px-0">
          <p className="text-[#4A443F] font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[5.5vw] sm:text-xs mb-6 whitespace-nowrap break-normal tracking-tighter">
            {t('eumarket.header_tag')}
          </p>
          
          {/* 🔍 OPTIMIZED RESPONSIVE BREAK:
              - Restored the bold, premium layout size (text-5xl sm:text-6xl md:text-8xl) since it safely breaks now.
              - The main title stays on line 1.
              - The accent green text changes to 'block' on mobile to drop cleanly underneath, and returns to 'md:inline' on desktop.
          */}
          <h1 className="text-[#FFFFF0] text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.85] mb-6 whitespace-normal break-words">
            {t('eumarket.header_title_top')}{' '}
            <span className="block md:inline text-[#4A5D23] mt-2 md:mt-0">
              to {t('eumarket.header_title_bottom')}
            </span>
          </h1>

          <h2 className="text-[#FFFFF0] text-2xl sm:text-3xl md:text-5xl font-light italic tracking-tight mb-12 opacity-90">
            {t('eumarket.header_opportunity')}
          </h2>
          <div className="border-l-2 border-[#4A5D23] pl-6 md:pl-10">
            <p className="text-[#FFFFF0]/80 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              {t('eumarket.header_description')}
            </p>
          </div>
        </div>
        {/* 1. MARKET COMPARISON TABLE (Glass Card Container) */}
        <div 
          className="rounded-[2rem] md:rounded-[4rem] border border-white/30 mb-32 shadow-2xl"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.05)', 
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)'
          }}
        >
          <div className="p-5 sm:p-12 md:p-20">
            {/* Table Header (Desktop only) */}
            <div className="hidden md:grid grid-cols-3 pb-10 border-b-2 border-[#635D59]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
              <div>{t('eumarket.table_col_metrics')}</div>
              <div className="text-right">{t('eumarket.table_col_import')}</div>
              <div className="text-right">{t('eumarket.table_col_nibo')}</div>
            </div>

{/* RESPONSIVE FLUID ROWS - MATCHES SPREADSHEET LAYOUT ON MOBILE */}
            {comparisonData.map((row, i) => (
              <div 
                key={i} 
                className="block md:grid md:grid-cols-3 py-6 md:py-10 border-b border-white/10 relative rounded-xl outline-none focus:outline-none group transition-all duration-300"
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderTopColor = 'rgba(250, 238, 200, 0.4)';
                    e.currentTarget.style.boxShadow = '0 -7px 35px rgba(250, 238, 200, 0.50), 0 0 35px rgba(250, 238, 200, 0.3), inset 0 0 25px rgba(250, 238, 200, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderTopColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* 1. Metric Label */}
                <div className="text-[#FFFFF0] font-black uppercase text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight mb-4 md:mb-0 block w-full border-b border-white/5 pb-2 md:pb-0 md:border-0 transition-colors duration-300 group-hover:md:translate-x-2">
                  {row.metric.startsWith('eumarket.') ? t(row.metric) : row.metric}
                </div>

                {/* 2. Linear Value Containers (Matches Excel Layout exactly on phone dimensions) */}
                {/* 🔍 FIXED FOR MOBILE LINEAR SPLIT: 
                   - Removed rigid flex-col block on mobile viewports.
                   - Swapped to vertical layout space-y-3 structure containing full horizontal flex-row lines.
                   - Added explicit max-w constraints on the right text values so long German words wrap elegantly right next to the label.
                */}
                <div className="flex flex-col gap-3 w-full md:contents mt-2 md:mt-0 pl-2 md:pl-0">
                  
                  {/* Row A: Conventional Import Row (Side-by-side on mobile, table column on desktop) */}
                  <div className="flex flex-row justify-between items-start md:justify-end text-[#FFFFF0]/60 font-mono text-sm sm:text-base md:text-xl md:pr-8 w-full">
                    <span className="inline md:hidden text-[10px] font-bold uppercase tracking-wider text-[#FFFFF0]/40 font-sans mt-0.5 shrink-0">
                      {t('eumarket.table_col_import')}
                    </span>
                    <span className="text-right max-w-[60%] md:max-w-none break-words leading-tight md:leading-normal">
                      {row.import.startsWith('eumarket.') ? t(row.import) : row.import}
                    </span>
                  </div>

                  {/* Row B: NIBO Bio-System Row (Side-by-side on mobile, table column on desktop) */}
                  <div className="flex flex-row justify-between items-start md:justify-end font-mono text-base sm:text-lg md:text-2xl lg:text-3xl font-black text-[#635D59] group-hover:text-[#FAEEC8] transition-all duration-300 transform md:group-hover:scale-105 w-full">
                    <span className="inline md:hidden text-[10px] font-bold uppercase tracking-wider text-[#4A443F] font-sans mt-1 shrink-0">
                      NIBO
                    </span>
                    <span className="text-right max-w-[60%] md:max-w-none break-words leading-tight md:leading-normal">
                      {row.nibo.startsWith('eumarket.') ? t(row.nibo) : row.nibo}
                    </span>
                  </div>

                </div>

                {/* THE UNDERLINE GLOW */}
                <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_-2px_20px_rgba(250,238,200,0.8),0_0_15px_#FAEEC8]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. EU GREEN DEAL ALIGNMENT */}
        <div className="space-y-16">
          <div className="text-center">
            <p className="text-[#FDFBD4] font-bold uppercase tracking-[0.5em] text-xs mb-4">
              {t('eumarket.framework_tag')}
            </p>
            <h2 className="text-[#FFFFF0] text-3xl md:text-4xl font-black uppercase tracking-tighter">
              {t('eumarket.framework_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alignmentCards.map((card, i) => (
              <div 
                key={i}
                className="card-glow group p-8 sm:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/20 flex flex-col justify-between h-auto lg:min-h-[400px] transition-all duration-500 hover:border-[#87AE73]/60 shadow-xl relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 240, 0.04)', 
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="num-animate text-[#FFFFF0] font-black text-2xl sm:text-3xl tracking-tighter opacity-50 transition-all duration-500">
                    {card.id}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFFFF0] bg-white/10 border border-white/20 px-4 sm:px-5 py-2 rounded-full">
                    {t(card.tag)}
                  </span>
                </div>

                <div className="mb-6 md:mb-0">
                  <h3 className="text-[#FFFFF0] text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
                    {t(card.title)}
                  </h3>
                  <p className="text-[#FFFFF0]/80 leading-relaxed font-light text-base sm:text-xl">
                    {t(card.text)}
                  </p>
                </div>

                <div className="animate-draw w-16 h-[3px] bg-[#4A5D23] mt-6 lg:mt-10 transition-all duration-700 opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL POSH STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .card-glow:hover .animate-draw {
          width: 100% !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4) !important;
        }

        .card-glow:hover .num-animate {
          color: #FAEEC8 !important;
          opacity: 1 !important;
          text-shadow: 0 0 15px rgba(250, 238, 200, 0.5);
        }

        .card-glow:hover {
          box-shadow: 0 0 50px rgba(255, 255, 240, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          transform: translateY(-5px);
        }
      `}} />
    </div>
  );
}
