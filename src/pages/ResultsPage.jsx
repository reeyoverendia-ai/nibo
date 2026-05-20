import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ResultsPage() {
  const { t } = useTranslation();

  // ✅ Storing only localization path strings inside arrays to keep React stable
  const trialMetrics = [
    { label: "results.metric_revenue", standard: "€14,838.52", nibo: "€14,838.52", highlight: false },
    { label: "results.metric_nibo_cost", standard: "—", nibo: "€643.00", highlight: true },
    { label: "results.metric_chemical_cost", standard: "€3,782.37", nibo: "€461.62", highlight: true },
    { label: "results.metric_labour_cost", standard: "€1,941.11", nibo: "€1,941.11", highlight: false },
    { label: "results.metric_total_expenses", standard: "€5,723.48", nibo: "€1,941.11", highlight: true },
  ];

  // ✅ FIX: Cleaned array structure utilizing translation paths flawlessly without conflicts
  const kpiData = [
    { tag: "results.kpi_1_tag", value: "70 – 80%", desc: "results.kpi_1_desc" },
    { tag: "results.kpi_2_tag", value: "15 – 25 kg", desc: "results.kpi_2_desc" },
    { tag: "results.kpi_3_tag", value: "6 – 7 retained", desc: "results.kpi_3_desc" },
    { tag: "results.kpi_4_tag", value: "results.kpi_4_val", desc: "results.kpi_4_desc" },
    { tag: "results.kpi_5_tag", value: "Class C → Class A", desc: "results.kpi_5_desc" }
  ];

  // ✅ Top stat highlights configured as string lookups
  const topStats = [
    { label: "results.stat_saving_label", value: "51.32%", sub: "results.stat_saving_sub" },
    { label: "results.stat_efficiency_label", value: "€0.97", sub: "results.stat_efficiency_sub" },
    { label: "results.stat_net_label", value: "€1,841.26", sub: "results.stat_net_sub" }
  ];

  // ✅ Application protocol cycle configured as string lookups
  const protocolPhases = [
    { phase: "01", time: "results.phase_1_time", desc: "results.phase_1_desc" },
    { phase: "02", time: "results.phase_2_time", desc: "results.phase_2_desc" },
    { phase: "03", time: "results.phase_3_time", desc: "results.phase_3_desc" }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20 overflow-hidden relative">
      <div className="max-w-[95rem] mx-auto px-8 md:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-24">
          <h1 className="text-[#4A443F] text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
            {t('results.hero_title_top')} <br />
            <span className="text-[#4A5D23]">{t('results.hero_title_bottom')}</span>
          </h1>
          <div className="h-2 w-32 bg-[#4A443F] opacity-30 mb-8"></div>
          <p className="text-[#FDFBD4] uppercase tracking-[0.5em] text-sm font-bold bg-[#4A443F]/10 inline-block px-4 py-2 rounded">
            {t('results.hero_badge')}
          </p>
        </div>

        {/* TOP METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {topStats.map((stat, i) => (
            <div 
              key={i}
              className="p-10 md:p-12 rounded-[3.5rem] border border-white/30 shadow-2xl flex flex-col justify-between min-h-[320px]"
              style={{ 
                backgroundColor: 'rgba(255, 255, 240, 0.1)', 
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)'
              }}
            >
              <div>
                <span className="text-[#FDFBD4] text-xs font-black tracking-widest uppercase mb-4 block">
                  {t(stat.label)}
                </span>
                <h2 className="text-[#FFFFF0] text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none break-words">
                  {stat.value}
                </h2>
              </div>
              
              <p className="text-[#FFFFF0]/80 text-xs uppercase mt-8 font-bold tracking-widest leading-relaxed">
                {t(stat.sub)}
              </p>
            </div>
          ))}
        </div>

        {/* DATA TABLE */}
        <div 
          className="rounded-[4rem] border border-white/30 overflow-hidden mb-32 shadow-2xl"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.05)', 
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)'
          }}
        >
          <div className="p-12 md:p-20">
            {/* Table Header */}
            <div className="grid grid-cols-3 pb-10 border-b-2 border-[#4A443F]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
              <div>{t('results.table_header_metrics')}</div>
              <div className="text-right">{t('results.table_header_standard')}</div>
              <div className="text-right">{t('results.table_header_nibo')}</div>
            </div>

            {trialMetrics.map((row, i) => (
              <div 
                key={i} 
                className="grid grid-cols-3 py-10 border-b border-t border-t-transparent border-white/10 items-center group transition-all duration-500 relative rounded-xl outline-none focus:outline-none"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderTopColor = 'rgba(250, 238, 200, 0.4)';
                  e.currentTarget.style.boxShadow = '0 -5px 30px rgba(250, 238, 200, 0.45), 0 0 25px rgba(250, 238, 200, 0.3), inset 0 0 25px rgba(250, 238, 200, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderTopColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Row Labels */}
                <div className="text-[#4A443F] font-black uppercase text-xl md:text-2xl tracking-tight transition-colors group-hover:text-[#FFFFF0]">
                  {t(row.label)}
                </div>
                
                {/* Standard Value */}
                <div className="text-right text-[#FFFFF0]/60 font-mono text-xl">
                  {row.standard}
                </div>
                
                {/* NIBO Value */}
                <div className={`text-right font-mono text-2xl md:text-4xl font-black transition-all duration-500 ${row.highlight ? 'text-[#4A5D23] group-hover:text-[#FAEEC8] group-hover:drop-shadow-[0_0_15px_rgba(118,156,55,0.4)]' : 'text-[#FFFFF0]'}`}>
                  {row.nibo}
                </div>

                {/* INTENSIFIED GOLD AURA ACCENT LINE */}
                <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_-2px_20px_rgba(250,238,200,0.8),0_0_15px_#FAEEC8]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* DISEASE SUPPRESSION */}
        <div className="mb-32">
          <h2 className="text-[#4A443F] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-16 leading-tight whitespace-normal">
            {t('results.kpi_section_title_main')} <br />
            {t('results.kpi_section_title_sub')}
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {kpiData.map((kpi, idx) => (
              <div 
                key={idx} 
                className="p-12 md:p-16 rounded-[4rem] border border-white/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
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
                  <h3 className="text-[#FFFFF0] text-6xl md:text-7xl font-black mb-4 tracking-tighter leading-none">
                    {kpi.value.startsWith('results.') ? t(kpi.value) : kpi.value}
                  </h3>
                  <p className="text-[#FFFFF0] text-xl md:text-2xl font-light leading-relaxed opacity-90">
                    {t(kpi.desc)}
                  </p>
                </div>
                <div className="text-[#FDFBD4] font-black text-xs uppercase tracking-widest border-2 border-[#FDFBD4] px-8 py-3 rounded-full bg-[#4A5D23]/10 whitespace-nowrap">
                  {t('results.verified_badge')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION PROTOCOL */}
        <div 
          className="p-16 md:p-24 rounded-[4rem] border border-white/40 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.12)', 
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)'
          }}
        >
          <h3 className="text-[#FDFBD4] font-black uppercase tracking-[0.5em] text-xs mb-16">
            {t('results.protocol_heading')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {protocolPhases.map((step, i) => (
              <div key={i}>
                <span className="text-[#4A443F]/20 font-black text-8xl italic block mb-6">{step.phase}</span>
                <h4 className="text-[#FDFBD4] font-black uppercase text-xs tracking-[0.3em] mb-4">
                  {t(step.time)}
                </h4>
                <p className="text-[#FFFFF0] text-xl leading-relaxed font-light opacity-80">
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