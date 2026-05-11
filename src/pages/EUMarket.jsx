import React from 'react';

const comparisonData = [
  { metric: "Retail Price / kg", import: "€1.20–€1.50", nibo: "€3.50–€5.00" },
  { metric: "Brix Sugar Level", import: "18–20%", nibo: "23–25% (target)" },
  { metric: "Harvest Timing", import: "21+ days premature", nibo: "Peak biochemical ripeness" },
  { metric: "Fertiliser Cost", import: "High — full synthetic NPK", nibo: "50% lower (microbial unlock)" },
  { metric: "Yield Target / Ha", import: "Import only", nibo: "30–50 tonnes" },
  { metric: "Est. Revenue / Ha", import: "N/A", nibo: "€100,000–€150,000" },
  { metric: "Transit Waste", import: "High (shipping damage)", nibo: "Near-zero (direct-to-market)" },
  { metric: "Total ROI", import: "~10–15%", nibo: "30–40% (projected)" },
];

const alignmentCards = [
  {
    id: "01",
    title: "Farm to Fork Compliance",
    text: "The EU mandates 50% reduction in chemical pesticide use and 20% reduction in fertiliser application by 2030. NIBO's bio-circular input system is structurally aligned with every major pillar of this mandate.",
    tag: "Regulatory"
  },
  {
    id: "02",
    title: "Circular Economy Model",
    text: "Unlike conventional fertilisers that deplete soil microbial diversity, NIBO actively restores and diversifies the rhizosphere microbiome with each application cycle — a regenerative model for green subsidy schemes.",
    tag: "Ecological"
  },
  {
    id: "03",
    title: "Energy Cost Reduction",
    text: "Soil temperature stabilisation through biological conditioning reduces reliance on electric or gas-based soil heating during German winters — directly lowering carbon footprint and energy bills.",
    tag: "Efficiency"
  },
  {
    id: "04",
    title: "Chemical Residue-Free Produce",
    text: "NIBO-managed produce carries zero synthetic pesticide residue, enabling premium 'bio' labelling in German retail — a designation commanding 40–60% price premium at point of sale.",
    tag: "Commercial"
  }
];

export default function EUMarket() {
  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-24">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.4em] text-xs mb-6">
            European Market Strategy
          </p>
          <h1 className="text-[#FFFFF0] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            From Mindanao <br />
            to <span className="text-[#4A5D23]">Germany</span>
          </h1>
          <h2 className="text-[#FFFFF0] text-3xl md:text-5xl font-light italic tracking-tight mb-12 opacity-90">
            A <span className="font-black text-[#87AE73]">€300M</span> Opportunity
          </h2>
          <div className="border-l-2 border-[#4A5D23] pl-10">
            <p className="text-[#FFFFF0]/80 text-xl leading-relaxed font-light max-w-2xl">
              NIBO's industrial-grade biological system bypasses the structural compromise of imported Cavendish, 
              delivering peak biochemical ripeness directly to the high-value German retail sector.
            </p>
          </div>
        </div>

{/* 1. MARKET COMPARISON TABLE */}
<div 
  className="p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl mb-32"
  style={{ 
    backgroundColor: 'rgba(255, 255, 240, 0.05)', 
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)'
  }}
>
  <div className="flex justify-between items-start mb-12">
    <h2 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-widest">
      Import vs. <span className="text-[#635D59]">NIBO Premium</span>
    </h2>
    
    <p className="text-[#FFFFF0] text-[11px] uppercase tracking-[0.3em] font-black opacity-100 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
      Data Ref: 2026 Projections
    </p>
  </div>
  
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        {/* Headers changed to #635D59 for a unified professional look */}
        <tr className="text-[#635D59] text-sm font-black uppercase tracking-[0.4em] border-b-2 border-[#635D59]/20">
          <th className="py-8">Metric Cluster</th>
          <th className="py-8">Conventional Import</th>
          <th className="py-8 text-[#FFFFF0]">NIBO Bio-System</th>
        </tr>
      </thead>
      
      <tbody className="text-[#FFFFF0]">
        {comparisonData.map((row, i) => (
          <tr key={i} className="border-b border-white/10 group hover:bg-white/[0.05] transition-all">
            {/* Metric Cluster: High-contrast Ivory */}
            <td className="py-8 font-black text-xl text-[#FFFFF0] tracking-tight uppercase">
              {row.metric}
            </td>

            {/* Conventional Import: High-contrast Ivory */}
            <td className="py-8 text-lg font-bold text-[#FFFFF0] opacity-100 tracking-wide">
              {row.import}
            </td>

            {/* NIBO Column: Your preferred Earth-tone #635D59 */}
            <td className="py-8 text-2xl font-black text-[#635D59]">
              {row.nibo}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        {/* 2. EU GREEN DEAL ALIGNMENT (THE EXECUTIVE GRID) */}
        <div className="space-y-16">
          <div className="text-center">
            <p className="text-[#FDFBD4] font-bold uppercase tracking-[0.5em] text-xs mb-4">Strategic Framework</p>
            <h2 className="text-[#FFFFF0] text-3xl md:text-4xl font-black uppercase tracking-tighter">
              EU Green Deal Alignment
            </h2>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {alignmentCards.map((card, i) => (
    <div 
      key={i}
      className="group p-12 rounded-[3.5rem] border border-white/20 flex flex-col justify-between min-h-[400px] transition-all duration-500 hover:border-[#87AE73]/60 shadow-xl"
      style={{ 
        backgroundColor: 'rgba(255, 255, 240, 0.04)', // Slightly more visible glass base
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      <div className="flex justify-between items-start mb-8">
        {/* 🔍 FIX 1: Changed to Solid Ivory and increased font weight */}
        <span className="text-[#FFFFF0] font-black text-3xl tracking-tighter opacity-90 group-hover:text-[#FAEEC8] transition-colors">
          {card.id}
        </span>
        
        {/* 🔍 FIX 2: Added a glass background to the tag for better contrast */}
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFFFF0] bg-white/10 border border-white/20 px-5 py-2 rounded-full">
          {card.tag}
        </span>
      </div>

      <div>
        {/* 🔍 FIX 3: Increased title size and weight */}
        <h3 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-tight mb-6 leading-tight">
          {card.title}
        </h3>
        {/* 🔍 FIX 4: Brightened text and increased font size */}
        <p className="text-[#FFFFF0]/80 leading-relaxed font-light text-xl">
          {card.text}
        </p>
      </div>

      {/* High-visibility decorative line */}
      <div className="w-16 h-[3px] bg-[#FAEEC8] mt-10 group-hover:w-full transition-all duration-700 opacity-100 shadow-[0_0_15px_rgba(135,174,115,0.3)]"></div>
    </div>
  ))}
</div>
        </div>

      </div>
    </div>
  );
}
