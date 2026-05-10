import React, { useState } from 'react';

const faqData = [
  {
    question: "How does NIBO solubilise locked soil phosphorus?",
    answer: "NIBO's microbial consortia produces organic acids that chemically dissolve the mineral bonds holding phosphorus and potassium in the soil matrix — a process called phosphate solubilisation. This is especially valuable in temperate European soils where pH levels below 5.5 lock up significant nutrient reserves, making them unavailable to plants despite being physically present in the soil."
  },
  {
    question: "Is the NIBO system compatible with EU and German regulations?",
    answer: "Yes. NIBO formulations are being developed to meet EU Regulation 2019/1009 (the EU Fertilising Products Regulation), specifically CMC 1 (Substances and mixtures) and CMC 7 (Micro-organisms). We are actively documenting all testing procedures to facilitate future CE Marking. We are also investigating compliance with German BioAbfV regulations and DLG testing standards."
  },
  {
    question: "Can NIBO work in cold European climates and greenhouse settings?",
    answer: "Yes — this is one of NIBO's most significant differentiators. Preliminary research indicates that NIBO's soil conditioner stabilises root zone temperatures and buffers soil acidity, reducing the energy load required for greenhouse soil heating during German winters. This can meaningfully reduce heating costs and carbon footprints."
  },
  {
    question: "What crops can use the NIBO biological system beyond bananas?",
    answer: "The NIBO system is a foundational biological technology. Its 175 microbial strains are directly transferable to tomatoes, peppers, cucumbers, salad crops, soft fruits (strawberries, blueberries), coconut, palm oil, rice, maize, and rapeseed. It has been field-tested across diverse crops with documented yield improvements."
  },
  {
    question: "How many microbial strains are in the NIBO system and why does that matter?",
    answer: "The system contains 175 strains of beneficial bacteria and fungi. Biodiversity within the soil microbiome is directly correlated with resilience and disease suppression. Unlike monoculture products, NIBO's 175-strain consortium creates redundancy and ecological depth — functioning reliably across variable soil types and climate conditions."
  },
  {
    question: "What is 'Competitive Exclusion' and why does it matter?",
    answer: "Competitive exclusion refers to beneficial microbial populations physically outcompeting pathogenic organisms for root zone colonisation sites. Because NIBO establishes a dense biological matrix first, harmful pathogens — including Fusarium oxysporum — are denied the ecological space they require to establish infection without chemical residue."
  },
  {
    question: "How does the NIBO system compare on cost to standard farm chemicals?",
    answer: "In our controlled 1-hectare trial, NIBO system input costs came to €1,104.62 vs. €3,782.37 for standard chemicals — a saving of 51.32%, or €1,841.26 per hectare. The NIBO product cost per hill was €0.97 vs. €1.89 for the standard practice."
  },
  {
    question: "How quickly can diseased or infected plants recover with NIBO?",
    answer: "Our field records document full visible recovery of Panama Disease (Fusarium Wilt) infected plants within two months. Panama infiltration was documented as halted after just two applications of Megamate. Treated infected plants also decompose in under 15 days, helping manage disease spread."
  },
  {
    question: "What does the NIBO internship / trial partnership involve?",
    answer: "NIBO provides full supply of Megamate/Bio Luy-a, technical oversight, Brix-level testing, and a final ROI report. The host company provides a designated greenhouse block, agricultural labour, and a monthly internship stipend of €1,200 — classified as R&D investment. Duration: 6–12 months."
  },
  {
    question: "Does NIBO leave any chemical residue on produce?",
    answer: "No. NIBO-managed produce carries zero synthetic pesticide residue. This enables eligibility for premium organic or 'bio' labelling in German retail, commanding a 40–60% price premium and directly supporting consumer trust ahead of EU Farm to Fork legislation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-20">
          <p className="text-[#4A443F] font-black uppercase tracking-[0.4em] text-xs mb-4">
            Technical Support
          </p>
          <h1 className="text-[#FFFFF0] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Frequently Asked <br />
            <span className="text-[#4A443F]">Questions</span>
          </h1>
        </div>

        {/* LIQUID GLASS FAQ GRID */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-[2rem] border border-white/20 transition-all duration-500"
              style={{ 
                backgroundColor: 'rgba(255, 255, 240, 0.05)', 
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-[#FFFFF0] text-lg md:text-xl font-bold tracking-tight uppercase group-hover:text-[#4A5D23] transition-colors">
                  {item.question}
                </span>
                <span className={`text-[#4A443F] text-2xl transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-0 border-t border-white/10">
                  <p className="text-[#FFFFF0]/70 text-lg leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}