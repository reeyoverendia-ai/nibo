import React from 'react';

export default function FeasibilityStudy() {
  const products = [
    {
      title: "Megamate",
      subtitle: "ORGANIC SOIL CONDITIONER",
      description: "A high-precision, bio-based soil restoration protocol. Megamate actively transforms your rhizosphere into a high-efficiency nutrient-delivery network using 175 strains of beneficial bacteria and fungi.",
      bullets: [
        "Enhances soil structure and promotes root development",
        "Improves nutrient availability — phosphorus & potassium unlocking",
        "Stimulates beneficial microbial activity in the rhizosphere",
        "Contains 3 natural growth hormones: Auxin, Gibberellin, Cytokinins",
        "Produces natural antibiotics to inhibit destructive pathogens",
        "Balances soil pH and helps soil retain moisture",
        "Stabilises soil temperature around the root zone",
        "Produces enzymes supporting nutrient cycling",
        "Microbial insecticide properties for natural pest control"
      ],
      image: "/megamate.png" 
    },
    {
      title: "Bio Luy-a",
      subtitle: "BIOLOGICAL FOLIAR SPRAY",
      description: "A triple-action foliar biological spray combining insecticidal, fungicidal, and bactericidal effects. Suppresses both soil-borne and foliar pathogens without chemical residue.",
      bullets: [
        "Natural pest suppression without residue",
        "Prevents and controls fungal disease spread",
        "Proven efficacy against Black Sigatoka in bananas",
        "Suppresses Fusarium Wilt (Panama Disease)",
        "Eligible for organic / \"bio\" labelling",
        "Supports leaf canopy health for maximum photosynthesis"
      ],
      image: "/bioluya.png"
    },
    {
      title: "Growmore 4-0-48",
      subtitle: "POTASSIUM SUPPLEMENT",
      description: "A targeted potassium supplement used from Month 5 onwards, working synergistically with NIBO biological inputs to support fruit density and post-harvest quality.",
      bullets: [
        "High-potassium (48%) formulation for fruit quality",
        "Used in Phase 3 of the NIBO protocol (Months 7–12)",
        "Paired with Megamate 2L for maximum absorption",
        "Drives heavier bunch weights and improved Brix levels",
        "Reduces synthetic NPK dependence"
      ],
      image: "/assets/growmore-product.png"
    }
  ];

  const cropData = [
    { title: "Banana", desc: "Proven 70–80% Panama Disease and Sigatoka suppression. Bunch weights of 15–25 kg. Premium gourmet positioning." },
    { title: "Tomatoes & Peppers", desc: "NIBO's phosphorus unlocking and Fusarium suppression address Germany's most critical greenhouse pain points." },
    { title: "Cucumbers & Salad", desc: "High-value, fast-cycle crops where microbial nutrient delivery delivers rapid return on investment." },
    { title: "Soft Fruit", desc: "Documented sugar content improvements and reduced fungal disease pressure in strawberries and blueberries." },
    { title: "Rice", desc: "Improved nitrogen cycling, root development, and yield improvement under the NIBO biological protocol." },
    { title: "Coconut & Palm Oil", desc: "Documented €125/hectare reduction in synthetic fertiliser costs — validated and replicable." },
    { title: "Cereals", desc: "Supports large-scale cereal systems — a long-term soil health investment compounding season over season." },
    { title: "Degraded Land", desc: "Documented recovery of abandoned fields. Class C soil upgraded to Class A productivity." }
  ];

 return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#667b68]">
      
      {/* SECTION 1: VIDEO BACKGROUND */}
         <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover" // 🔍 Removed 'fixed' to prevent the over-stretching/zoom issue
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
          >
            <source src="/nibo-bp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-16 pt-40 pb-32">
          
          {/* PAGE HEADER */}
          <div className="mb-32">
            <h1 className="text-[#FFFFF0] text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-6">
              MEGAMATE & <br /> <span className="text-[#8E8680]">BIOLUY-A</span>
            </h1>
            <p className="text-[#FFFFF0] text-2xl font-light italic opacity-80">The Science behind the Success</p>
          </div>

          {/* PRODUCT CARDS LOOP */}
          <div className="space-y-48">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-12`}
              >
                {/* PHOTO CONTAINER */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="w-full h-full min-h-[500px] rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain p-12" />
                  </div>
                </div>

                {/* TEXT CONTAINER - Optimized Spacing */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="w-full h-full p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-[40px] flex flex-col justify-center">
                    
                    {/* Header: Fixed size to stay inside container */}
                    <div className="mb-8 pb-6 border-b border-white/10">
                      <h2 className="text-[#FFFFF0] text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-2">
                        {product.title}
                      </h2>
                      <p className="text-[#8E8680] font-black text-xs uppercase tracking-[0.4em]">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* LARGE DESCRIPTION: Fills the unused space */}
                    <p className="text-[#FFFFF0]/95 text-2xl md:text-3xl leading-tight font-light mb-10 italic tracking-tight">
                      "{product.description}"
                    </p>

                    {/* Bullet Points */}
                    <ul className="grid grid-cols-1 gap-4">
                      {product.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 text-[#FFFFF0]/80 text-lg font-light leading-relaxed">
                          <span className="text-[#8E8680] mt-2 shrink-0">●</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* SECTION 2: UNIVERSAL SYSTEM - LINEAR GRADIENT BACKGROUND */}
      <section 
        className="relative z-20 py-32 px-8 md:px-16"
        style={{ background: 'linear-gradient(to bottom, #eed9c4 0%, #8f9779 50%, #667b68 70%)' }}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-20">
            <p className="text-[#4A443F] font-black uppercase tracking-[0.4em] text-xs mb-4">Crop Applicability</p>
            <h2 className="text-[#4A443F] text-5xl md:text-7xl font-black uppercase tracking-tighter">Universal System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropData.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-[2.5rem] border border-white/20"
                style={{ backgroundColor: 'rgba(255, 255, 240, 0.08)', backdropFilter: 'blur(30px)' }}
              >
                <h3 className="text-[#4A443F] text-xl font-black uppercase mb-4">{item.title}</h3>
                <p className="text-[#FFFFF0] text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}