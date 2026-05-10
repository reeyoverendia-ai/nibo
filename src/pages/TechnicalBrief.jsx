import React from 'react';

const scienceCards = [
  {
    id: "01",
    title: "Phosphorus Solubilization",
    text: "NIBO's microbial consortium actively solubilises fixed nutrients through microbial acid production, making them immediately bioavailable without additional synthetic input."
  },
  {
    id: "02",
    title: "Competitive Exclusion",
    text: "Beneficial microbial populations outcompete pathogenic organisms for root zone colonisation. With 175 strains creating a dense biological matrix, harmful pathogens are denied a foothold."
  },
  {
    id: "03",
    title: "Nitrogen Fixation Support",
    text: "Microbial activity enhances nitrogen cycling, reducing synthetic nitrogen requirements and minimising nitrate leaching — a key benefit for modern agricultural compliance."
  },
  {
    id: "04",
    title: "Hormonal Activation",
    text: "The system delivers three critical phytohormones — Auxin, Gibberellin, and Cytokinin — directly translating to heavier bunch weights and denser fruit development."
  },
  {
    id: "05",
    title: "Soil Temperature Buffering",
    text: "NIBO's soil conditioner stabilises root zone temperatures and buffers soil acidity, directly reducing the energy load required for greenhouse soil heating."
  },
  {
    id: "06",
    title: "Microbial Antibiotic Production",
    text: "Natural antibiotics inhibit destructive bacteria, fungi, and nematodes, creating a self-reinforcing cycle of soil health improvement with each application."
  }
];

export default function TechnicalBrief() {
  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.4em] text-xs mb-4">
            The Science
          </p>
          <h1 className="text-[#FFFFF0] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            How the NIBO <br />
            <span className="text-[#4A5D23]">Biological System</span> Works
          </h1>
          <p className="text-[#FFFFF0]/80 text-xl leading-relaxed font-light">
            This is not "organic farming" in the conventional sense. This is 
            <span className="text-[#FFFFF0] font-bold"> Microbial Synergism</span> — 
            the deliberate orchestration of biological processes to outperform 
            synthetic chemistry at a fraction of the cost.
          </p>
        </div>

        {/* 6-CARD LIQUID GLASS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceCards.map((card) => (
            <div 
              key={card.id}
              className="relative p-10 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:translate-y-[-5px]"
              style={{ 
                backgroundColor: 'rgba(231, 225, 218, 0.07)', 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}
            >
              {/* Massive ID Number Overlay */}
              <div className="absolute top-6 right-10 text-8xl font-black text-[#FFFFF0]/5 select-none">
                {card.id}
              </div>

              <div className="relative z-10">
                <h3 className="text-[#4A5D23] font-black text-xl uppercase tracking-widest mb-4">
                  {card.title}
                </h3>
                <p className="text-[#FFFFF0]/70 leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}