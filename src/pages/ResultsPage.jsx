import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ResultsPage() {
  const { t } = useTranslation();

  const trialMetrics = [
    { label: "results.metric_revenue", standard: "€14,838.52", nibo: "€14,838.52", highlight: false },
    { label: "results.metric_nibo_cost", standard: "—", nibo: "€643.00", highlight: true },
    { label: "results.metric_chemical_cost", standard: "€3,782.37", nibo: "€461.62", highlight: true },
    { label: "results.metric_labour_cost", standard: "€1,941.11", nibo: "€1,941.11", highlight: false },
    { label: "results.metric_total_expenses", standard: "€5,723.48", nibo: "€1,941.11", highlight: true },
  ];

  const kpiData = [
    { tag: "results.kpi_1_tag", value: "70 – 80%", desc: "results.kpi_1_desc" },
    { tag: "results.kpi_2_tag", value: "15 – 25 kg", desc: "results.kpi_2_desc" },
    { tag: "results.kpi_3_tag", value: "6 – 7 retained", desc: "results.kpi_3_desc" },
    { tag: "results.kpi_4_tag", value: "results.kpi_4_val", desc: "results.kpi_4_desc" },
    { tag: "results.kpi_5_tag", value: "Class C → Class A", desc: "results.kpi_5_desc" }
  ];

  const topStats = [
    { label: "results.stat_saving_label", value: "51.32%", sub: "results.stat_saving_sub" },
    { label: "results.stat_efficiency_label", value: "€0.97", sub: "results.stat_efficiency_sub" },
    { label: "results.stat_net_label", value: "€1,841.26", sub: "results.stat_net_sub" }
  ];

  const protocolPhases = [
    { phase: "01", time: "results.phase_1_time", desc: "results.phase_1_desc" },
    { phase: "02", time: "results.phase_2_time", desc: "results.phase_2_desc" },
    { phase: "03", time: "results.phase_3_time", desc: "results.phase_3_desc" }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-32 sm:pt-40 pb-20 overflow-x-hidden relative">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-24 max-w-full">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight md:tracking-tighter leading-[0.95] md:leading-none mb-8 text-[#4A443F] break-words whitespace-normal">
            {t('results.hero_title_top')} <br />
            <span className="text-[#4A5D23]">{t('results.hero_title_bottom')}</span>
          </h1>
          <div className="h-1.5 w-24 md:w-32 bg-[#4A443F] opacity-30 mb-8"></div>
          <p className="text-[#FDFBD4] uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm font-bold bg-[#4A443F]/10 inline-block px-4 py-2 rounded">
            {t('results.hero_badge')}
          </p>
        </div>

        {/* TOP METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {topStats.map((stat, i) => (
            <div 
              key={i}
              className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/30 shadow-2xl flex flex-col justify-between h-auto lg:min-h-[320px]"
              style={{ 
                backgroundColor: 'rgba(255, 255, 240, 0.1)', 
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)'
              }}
            >
              <div>
                <span className="text-[#FDFBD4] text-xs font-black tracking-widest uppercase mb-3 md:mb-4 block">
                  {t(stat.label)}
                </span>
                <h2 className="text-[#FFFFF0] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none break-words">
                  {stat.value}
                </h2>
              </div>
              <p className="text-[#FFFFF0]/80 text-[10px] md:text-xs uppercase mt-6 md:mt-8 font-bold tracking-widest leading-relaxed">
                {t(stat.sub)}
              </p>
            </div>
          ))}
        </div>

        {/* DATA TABLE */}
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
            <div className="hidden md:grid grid-cols-3 pb-10 border-b-2 border-[#4A443F]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
              <div>{t('results.table_header_metrics')}</div>
              <div className="text-right">{t('results.table_header_standard')}</div>
              <div className="text-right">{t('results.table_header_nibo')}</div>
            </div>

            {/* RESPONSIVE EXCEL-STYLE ROWS */}
            {trialMetrics.map((row, i) => (
              <div 
                key={i} 
                /* 🔍 FIXED: Ensured class includes 'group' to re-activate the laser pointer line animations cleanly */
                className="block md:grid md:grid-cols-3 py-6 md:py-10 border-b border-white/10 relative rounded-xl outline-none focus:outline-none group transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  // Sharpens top border color and drops halo exclusively on wider viewports to keep mobile layouts crisp
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.borderTopColor = 'rgba(250, 238, 200, 0.4)';
                    e.currentTarget.style.boxShadow = '0 -5px 35px rgba(250, 238, 200, 0.50), 0 0 35px rgba(250, 238, 200, 0.35), inset 0 0 25px rgba(250, 238, 200, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderTopColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 1. Metric Title Block */}
                <div className="text-[#FFFFF0] md:text-[#4A443F] font-black uppercase text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight mb-4 md:mb-0 block w-full border-b border-white/5 pb-2 md:pb-0 md:border-0 transition-colors group-hover:md:text-[#FFFFF0]">
                  {t(row.label)}
                </div>
                
                {/* 2. Linear Value Stack */}
                <div className="flex flex-col gap-3 w-full md:contents mt-2 md:mt-0 pl-2 md:pl-0">
                  
                  {/* Row A: Standard Practice Label + Value */}
                  <div className="flex justify-between items-center md:justify-end text-[#FFFFF0]/60 font-mono text-sm sm:text-base md:text-xl">
                    <span className="inline md:hidden text-[10px] font-bold uppercase tracking-wider text-[#FFFFF0]/40 font-sans">
                      {t('results.table_header_standard', 'Standard Practice')}
                    </span>
                    <span>{row.standard}</span>
                  </div>
                  
                  {/* Row B: NIBO Label + Value */}
                  <div className={`flex justify-between items-center md:justify-end font-mono text-base sm:text-lg md:text-2xl lg:text-4xl font-black transition-all duration-300 ${row.highlight ? 'text-[#4A5D23] md:group-hover:text-[#FAEEC8]' : 'text-[#FFFFF0]'}`}>
                    <span className="inline md:hidden text-[10px] font-bold uppercase tracking-wider text-[#4A5D23] font-sans">
                      NIBO
                    </span>
                    <span>{row.nibo}</span>
                  </div>

                </div>

                {/* 🔍 FIXED GLOW ACCENT: Changed 'md:group-hover:w-full' back to 'group-hover:w-full' so it sweeps across beautifully on all clicks/hovers */}
                <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_-2px_20px_rgba(250,238,200,0.8),0_0_15px_#FAEEC8]"></div>
              </div>
            ))}
          </div>
        </div>

{/* DISEASE SUPPRESSION */}
        <div className="mb-32">
          {/* 🔍 OPTIMIZED FLUID DESIGN:
              - Used text-[6.2vw] on mobile: This dynamically scales the massive word to be as large as humanly possible on your screen size without overflowing.
              - Standardized font size across both lines on mobile to create perfect visual weight and balance.
              - Set tracking-tighter on line 1 to pull the character footprint inward, giving it extra margin safety.
          */}
          <h2 className="text-[#4A443F] text-[6.2vw] sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-16 leading-[1.1] whitespace-nowrap md:whitespace-normal break-normal pr-2">
            {t('results.kpi_section_title_main')} <br />
            <span className="inline-block mt-1 md:mt-0 md:inline tracking-normal text-[6.2vw] sm:text-5xl lg:text-6xl xl:text-7xl text-[#4A443F]">
              {t('results.kpi_section_title_sub')}
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {kpiData.map((kpi, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 240, 0.08)', 
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)'
                }}
              >
                <div className="max-w-4xl">
                  <span className="text-[#FDFBD4] text-xs font-black tracking-widest uppercase mb-4 block">
                    {t(kpi.tag)}
                  </span>
                  <h3 className="text-[#FFFFF0] text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-none">
                    {kpi.value.startsWith('results.') ? t(kpi.value) : kpi.value}
                  </h3>
                  <p className="text-[#FFFFF0] text-lg md:text-2xl font-light leading-relaxed opacity-90">
                    {t(kpi.desc)}
                  </p>
                </div>
                <div className="text-[#FDFBD4] font-black text-xs uppercase tracking-widest border-2 border-[#FDFBD4] px-6 py-2.5 rounded-full bg-[#4A5D23]/10 whitespace-nowrap">
                  {t('results.verified_badge')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION PROTOCOL */}
        <div 
          className="p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border border-white/40 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.12)', 
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)'
          }}
        >
          <h3 className="text-[#FDFBD4] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs mb-12 md:mb-16">
            {t('results.protocol_heading')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {protocolPhases.map((step, i) => (
              <div key={i} className="border-b border-white/5 pb-6 md:pb-0 md:border-none">
                <span className="text-[#4A443F]/20 font-black text-6xl md:text-8xl italic block mb-2 md:mb-6">{step.phase}</span>
                <h4 className="text-[#FDFBD4] font-black uppercase text-xs tracking-[0.2em] md:tracking-[0.3em] mb-3">
                  {t(step.time)}
                </h4>
                <p className="text-[#FFFFF0] text-lg md:text-xl leading-relaxed font-light opacity-80">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
