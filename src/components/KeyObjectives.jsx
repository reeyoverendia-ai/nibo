import React from 'react';

// 1. STYLE DEFINITIONS (Moving these here stops the red squiggles)
const glassIconStyle = {
  backgroundColor: 'rgba(231, 225, 218, 0.12)', 
  backdropFilter: 'blur(10px)',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.15)' 
};

const hexagonDecorationStyle = {
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
};

// 2. REUSABLE GLASS ICON COMPONENT
const GlassCheckmark = () => {
  return (
    <div 
      className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 mb-6"
      style={glassIconStyle}
    >
      <svg 
        className="w-6 h-6 text-[#FFFFF0]" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};

// 3. MAIN SECTION
export default function KeyObjectives() {
  const objectives = [
    { 
      title: 'Enhance Sustainable Farming', 
      desc: 'Implementing regenerative practices that improve soil health and long-term ecosystem viability.' 
    },
    { 
      title: 'Improve Crop Yield & Quality', 
      desc: 'Utilizing biological systems to maximize output while increasing nutrient density and flavor.' 
    },
    { 
      title: 'Promote Technological Adoption', 
      desc: 'Bridging the gap between traditional methods and high-precision agricultural innovation.' 
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        
        {/* SECTION TITLE */}
        <div className="mb-16">
          <h2 className="text-[#FFFFF0] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-3">
            Key <span className="text-[#4A5D23]">Objectives</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7E1DA] opacity-40"></div>
        </div>

        {/* OBJECTIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {objectives.map((obj, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <GlassCheckmark />
              <h3 className="text-[#FFFFF0] text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-4">
                {obj.title}
              </h3>
              <p className="text-[#FFFFF0]/70 text-base leading-relaxed max-w-sm">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 opacity-10 flex justify-center items-center pointer-events-none">
        <div 
          className="w-[600px] h-[600px] border border-[#E7E1DA]" 
          style={hexagonDecorationStyle}
        ></div>
      </div>
    </section>
  );
}