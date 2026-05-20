import React from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import

export default function EUMarket() {
  const { t } = useTranslation(); // ✅ Initialized translation hook

  // ✅ Data array using raw key paths to map metrics dynamically safely
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

  // ✅ Alignment data using raw key paths for safe template compiling
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
    <div className="min-h-screen bg-transparent pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-24">
          <p className="text-[#4A443F] font-black uppercase tracking-[0.4em] text-xs mb-6">
            {t('eumarket.header_tag')}
          </p>
          <h1 className="text-[#FFFFF0] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            {t('eumarket.header_title_top')} <br />
            to <span className="text-[#4A5D23]">{t('eumarket.header_title_bottom')}</span>
          </h1>
          <h2 className="text-[#FFFFF0] text-3xl md:text-5xl font-light italic tracking-tight mb-12 opacity-90">
            {t('eumarket.header_opportunity')}
          </h2>
          <div className="border-l-2 border-[#4A5D23] pl-10">
            <p className="text-[#FFFFF0]/80 text-xl leading-relaxed font-light max-w-2xl">
              {t('eumarket.header_description')}
            </p>
          </div>
        </div>

<<<<<<< HEAD
{/* 1. MARKET COMPARISON TABLE (Glass Card Container) */}
<div 
  className="rounded-[4rem] border border-white/30 overflow-hidden mb-32 shadow-2xl"
  style={{ 
    backgroundColor: 'rgba(255, 255, 240, 0.05)', 
    backdropFilter: 'blur(50px)',
    WebkitBackdropFilter: 'blur(50px)'
  }}
>
  <div className="p-12 md:p-20">
    {/* Table Header in Cream */}
    <div className="grid grid-cols-3 pb-10 border-b-2 border-[#635D59]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
      <div>Metric Cluster</div>
      <div className="text-right">Conventional Import</div>
      <div className="text-right">NIBO Bio-System</div>
    </div>

    {comparisonData.map((row, i) => (
      <div 
        key={i} 
        className="grid grid-cols-3 py-10 border-b border-white/10 items-center group hover:bg-white/5 transition-all relative"
      >
        {/* 1. Metric Label */}
        <div className="text-[#FFFFF0] font-black uppercase text-xl md:text-2xl tracking-tight transition-all duration-300 group-hover:translate-x-2">
          {row.metric}
        </div>

        {/* 2. Conventional Value (Column 2) */}
        <div className="text-right text-[#FFFFF0]/60 font-mono text-xl md:text-2xl pr-8">
          {row.import}
        </div>

        {/* 3. NIBO Value (Column 3) - Popping out */}
        <div className="text-right font-mono text-2xl md:text-4xl font-black text-[#635D59] group-hover:text-[#FAEEC8] transition-all duration-300 transform group-hover:scale-105">
          {row.nibo}
        </div>

        {/* 🔍 THE GLOW LINE: Appears only on hover like the Results page */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(250,238,200,0.6)]"></div>
      </div>
    ))}
=======
        {/* 1. MARKET COMPARISON TABLE (Glass Card Container) */}
        <div 
          className="rounded-[4rem] border border-white/30 overflow-hidden mb-32 shadow-2xl"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.05)', 
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)'
          }}
        >
          <div className="p-12 md:p-20">
            {/* Table Header in Cream */}
            <div className="grid grid-cols-3 pb-10 border-b-2 border-[#635D59]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
              <div>{t('eumarket.table_col_metrics')}</div>
              <div className="text-right">{t('eumarket.table_col_import')}</div>
              <div className="text-right">{t('eumarket.table_col_nibo')}</div>
            </div>

{comparisonData.map((row, i) => (
  <div 
    key={i} 
    /* 🔍 ADDED: border-t and transition utilities to smoothly change the top border color */
    className="grid grid-cols-3 py-10 border-b border-t border-t-transparent border-white/10 items-center group transition-all duration-500 relative outline-none focus:outline-none"
    
    /* ⚡ ELECTRIFIED TABLE ROW BOUNDARY GLOW ⚡ */
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
      
      // 1. Sharpens the top edge line of the active row container
      e.currentTarget.style.borderTopColor = 'rgba(250, 238, 200, 0.4)';
      
      // 2. Projects a deep, rich gold aura halo that wraps around the left, right, and top edges perfectly
      e.currentTarget.style.boxShadow = '0 -5px 30px rgba(250, 238, 200, 0.45), 0 0 25px rgba(250, 238, 200, 0.3), inset 0 0 25px rgba(250, 238, 200, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      // Restores original subtle transparent state
      e.currentTarget.style.borderTopColor = 'transparent';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* 1. Metric Label */}
    <div className="text-[#FFFFF0] font-black uppercase text-xl md:text-2xl tracking-tight transition-all duration-300 group-hover:translate-x-2">
      {row.metric.startsWith('eumarket.') ? t(row.metric) : row.metric}
    </div>

    {/* 2. Conventional Value */}
    <div className="text-right text-[#FFFFF0]/60 font-mono text-xl md:text-2xl pr-8">
      {row.import.startsWith('eumarket.') ? t(row.import) : row.import}
    </div>

    {/* 3. NIBO Value - 🛠️ FIXED: Now checks and translates key names perfectly! */}
    <div className="text-right font-mono text-xl md:text-2xl lg:text-3xl font-black text-[#635D59] group-hover:text-[#FAEEC8] transition-all duration-300 transform group-hover:scale-105">
      {row.nibo.startsWith('eumarket.') ? t(row.nibo) : row.nibo}
    </div>

    {/* THE GLOW LINE */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFFFF0] group-hover:w-full transition-all duration-700 shadow-[0_0_25px_rgba(250,238,200,0.10)]"></div>
>>>>>>> b7d01ed (Translation implemented)
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
                className="card-glow group p-12 rounded-[3.5rem] border border-white/20 flex flex-col justify-between min-h-[400px] transition-all duration-500 hover:border-[#87AE73]/60 shadow-xl relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 240, 0.04)', 
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="num-animate text-[#FFFFF0] font-black text-3xl tracking-tighter opacity-50 transition-all duration-500">
                    {card.id}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFFFF0] bg-white/10 border border-white/20 px-5 py-2 rounded-full">
<<<<<<< HEAD
                    {card.tag}
=======
                    {t(card.tag)}
>>>>>>> b7d01ed (Translation implemented)
                  </span>
                </div>

                <div>
                  <h3 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-tight mb-6 leading-tight">
<<<<<<< HEAD
                    {card.title}
                  </h3>
                  <p className="text-[#FFFFF0]/80 leading-relaxed font-light text-xl">
                    {card.text}
=======
                    {t(card.title)}
                  </h3>
                  <p className="text-[#FFFFF0]/80 leading-relaxed font-light text-xl">
                    {t(card.text)}
>>>>>>> b7d01ed (Translation implemented)
                  </p>
                </div>

                <div className="animate-draw w-16 h-[3px] bg-[#4A5D23] mt-10 transition-all duration-700 opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* 🛠️ GLOBAL POSH STYLES - Safe at the bottom */}
=======
      {/* GLOBAL POSH STYLES - Safe and working perfectly */}
>>>>>>> b7d01ed (Translation implemented)
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
