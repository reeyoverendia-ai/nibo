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
  </div>
</div>

        {/* 2. EU GREEN DEAL ALIGNMENT */}
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
                    {card.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-tight mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#FFFFF0]/80 leading-relaxed font-light text-xl">
                    {card.text}
                  </p>
                </div>

                <div className="animate-draw w-16 h-[3px] bg-[#4A5D23] mt-10 transition-all duration-700 opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🛠️ GLOBAL POSH STYLES - Safe at the bottom */}
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
