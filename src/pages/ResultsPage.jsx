import React from 'react';

export default function ResultsPage() {
  const trialMetrics = [
    { label: "Projected Harvest Revenue", standard: "€14,838.52", nibo: "€14,838.52", highlight: false },
    { label: "Total NIBO Product Cost", standard: "—", nibo: "€643.00", highlight: true },
    { label: "Total Farm Chemical Cost", standard: "€3,782.37", nibo: "€461.62", highlight: true },
    { label: "Labour Cost (12 Months)", standard: "€1,941.11", nibo: "€1,941.11", highlight: false },
    { label: "Total Expenses", standard: "€5,723.48", nibo: "€1,941.11", highlight: true },
  ];

  const kpiData = [
    { tag: "SIGATOKA & PANAMA DISEASE REDUCTION", value: "70–80%", desc: "Vs. untreated control plot. Infected plants showed full visible recovery within 2 months." },
    { tag: "BUNCH WEIGHT — NIBO TREATED", value: "15–25 kg", desc: "Industry standard: 19 kg. NIBO plots achieved 10–12 functional leaves at bagging." },
    { tag: "FUNCTIONAL LEAVES AT HARVEST", value: "6–7 retained", desc: "Indicative of superior disease resistance throughout the full 12-month crop cycle." },
    { tag: "SUCCESS CASE — AMOROSO FARM", value: "Panama Survivor", desc: "Infiltration stopped after just two applications; plant scheduled for harvest within 4 months." },
    { tag: "SOIL TRANSFORMATION RESULT", value: "Class C → Class A", desc: "Lower-quality 'Class C' soil becoming as productive as 'Class A' soil after 3 months." }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20 overflow-hidden relative">
      <div className="max-w-[95rem] mx-auto px-8 md:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-24">
          <h1 className="text-[#4A443F] text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
            Proven <br />
            <span className="text-[#4A5D23]">Results</span>
          </h1>
          <div className="h-2 w-32 bg-[#4A443F] opacity-30 mb-8"></div>
          <p className="text-[#FDFBD4] uppercase tracking-[0.5em] text-sm font-bold bg-[#4A443F]/10 inline-block px-4 py-2 rounded">
            Data-Driven Success & Partnerships
          </p>
        </div>

 {/* TOP METRICS - ENLARGED & OVERFLOW PROTECTED */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
  {[
    { label: "Input Saving", value: "51.32%", sub: "Reduction in Chemical spend" },
    { label: "Efficiency", value: "€0.97", sub: "Cost per hill vs €1.89 standard" },
    { label: "Net Saving", value: "€1,841.26", sub: "Per Hectare / Per Cycle" }
  ].map((stat, i) => (
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
          {stat.label}
        </span>
        {/* 🔍 THE FIX: 
            1. Added 'break-words' to prevent spilling.
            2. Adjusted font size slightly using 'text-5xl md:text-6xl xl:text-7xl' 
               to ensure it fits on all laptop screens.
        */}
        <h2 className="text-[#FFFFF0] text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none break-words">
          {stat.value}
        </h2>
      </div>
      
      <p className="text-[#FFFFF0]/80 text-xs uppercase mt-8 font-bold tracking-widest leading-relaxed">
        {stat.sub}
      </p>
    </div>
  ))}
</div>

        {/* DATA TABLE - ENLARGED FONTS */}
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
            <div className="grid grid-cols-3 pb-10 border-b-2 border-[#4A443F]/20 text-xs font-black uppercase tracking-[0.4em] text-[#FDFBD4]">
              <div>Metric Cluster</div>
              <div className="text-right">Standard Practice</div>
              <div className="text-right">NIBO Bio-System</div>
            </div>

            {trialMetrics.map((row, i) => (
              <div key={i} className="grid grid-cols-3 py-10 border-b border-white/10 items-center group hover:bg-white/5 transition-all">
                {/* 🔍 Row Labels increased to 2xl */}
                <div className="text-[#4A443F] font-black uppercase text-xl md:text-2xl tracking-tight">{row.label}</div>
                {/* 🔍 Standard value increased to xl */}
                <div className="text-right text-[#FFFFF0]/60 font-mono text-xl">{row.standard}</div>
                {/* 🔍 NIBO value increased to 3xl */}
                <div className={`text-right font-mono text-2xl md:text-4xl font-black ${row.highlight ? 'text-[#4A5D23]' : 'text-[#FFFFF0]'}`}>
                  {row.nibo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DISEASE SUPPRESSION - CARDS ENLARGED */}
        <div className="mb-32">
          <h2 className="text-[#4A443F] text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-tight">
            Disease Suppression <br/>& Yield Results
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
                  {/* 🔍 Tag changed to Cream */}
                  <span className="text-[#FDFBD4] text-xs font-black tracking-widest uppercase mb-4 block">{kpi.tag}</span>
                  {/* 🔍 Value bumped to 7xl */}
                  <h3 className="text-[#FFFFF0] text-6xl md:text-7xl font-black mb-4 tracking-tighter leading-none">{kpi.value}</h3>
                  {/* 🔍 Description bumped to 2xl */}
                  <p className="text-[#FFFFF0] text-xl md:text-2xl font-light leading-relaxed opacity-90">{kpi.desc}</p>
                </div>
                {/* 🔍 Verified Tag: Cream Text and Border */}
                <div className="text-[#FDFBD4] font-black text-xs uppercase tracking-widest border-2 border-[#FDFBD4] px-8 py-3 rounded-full bg-[#4A5D23]/10">
                  Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION PROTOCOL - LARGER TYPOGRAPHY */}
        <div 
          className="p-16 md:p-24 rounded-[4rem] border border-white/40 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(255, 255, 240, 0.12)', 
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)'
          }}
        >
          <h3 className="text-[#FDFBD4] font-black uppercase tracking-[0.5em] text-xs mb-16">Application Protocol (12-Month Cycle)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[
              { phase: "01", time: "Months 1–3", desc: "Megamate 1L + Bio Luy-a 1L weekly drenching & ground spray." },
              { phase: "02", time: "Months 4–6", desc: "Megamate increased to 2L; NPK ratios adjusted for growth." },
              { phase: "03", time: "Months 7–12", desc: "Megamate 2L + Bio Luy-a 1L + Growmore for fruit development." }
            ].map((step, i) => (
              <div key={i}>
                <span className="text-[#4A443F]/20 font-black text-8xl italic block mb-6">{step.phase}</span>
                <h4 className="text-[#FDFBD4] font-black uppercase text-xs tracking-[0.3em] mb-4">{step.time}</h4>
                {/* 🔍 Desc bumped to XL */}
                <p className="text-[#FFFFF0] text-xl leading-relaxed font-light opacity-80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}