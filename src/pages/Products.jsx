import React from 'react';
import { useTranslation } from 'react-i18next'; // ✅ Added translation hook import

export default function Products() {
  const { t } = useTranslation(); // ✅ Initialized translation hook

  // ✅ Arrays use strictly key paths to pass down safely into render mappings
  const products = [
    {
      title: "Megamate",
      subtitle: "products.megamate_subtitle",
      description: "products.megamate_description",
      bullets: [
        "products.megamate_bullet_1",
        "products.megamate_bullet_2",
        "products.megamate_bullet_3",
        "products.megamate_bullet_4",
        "products.megamate_bullet_5",
        "products.megamate_bullet_6",
        "products.megamate_bullet_7",
        "products.megamate_bullet_8",
        "products.megamate_bullet_9"
      ],
      image: "/megamate.png" 
    },
    {
      title: "Bio Luy-a",
      subtitle: "products.bioluya_subtitle",
      description: "products.bioluya_description",
      bullets: [
        "products.bioluya_bullet_1",
        "products.bioluya_bullet_2",
        "products.bioluya_bullet_3",
        "products.bioluya_bullet_4",
        "products.bioluya_bullet_5",
        "products.bioluya_bullet_6"
      ],
      image: "/bioluya.png"
    },
    {
      title: "Growmore",
      /* 🔍 FIXED: Removed raw merge conflict markers cleanly */
      subtitle: "products.growmore_subtitle",
      description: "products.growmore_description",
      bullets: [
        "products.growmore_bullet_1",
        "products.growmore_bullet_2",
        "products.growmore_bullet_3",
        "products.growmore_bullet_4",
        "products.growmore_bullet_5"
      ],
      image: "/growmore1.png"
    }
  ];

  const cropData = [
    { title: "products.crop_1_title", desc: "products.crop_1_desc" },
    { title: "products.crop_2_title", desc: "products.crop_2_desc" },
    { title: "products.crop_3_title", desc: "products.crop_3_desc" },
    { title: "products.crop_4_title", desc: "products.crop_4_desc" },
    { title: "products.crop_5_title", desc: "products.crop_5_desc" },
    { title: "products.crop_6_title", desc: "products.crop_6_desc" },
    { title: "products.crop_7_title", desc: "products.crop_7_desc" },
    { title: "products.crop_8_title", desc: "products.crop_8_desc" }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#667b68]">
      
      {/* WRAPPER START */}
      <div className="relative w-full">
        
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center" 
          >
            <source src="/nibo-bp.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CONTENT LAYER */}
        <section className="relative z-10 w-full pt-40 pb-32">
          <div className="max-w-[90rem] mx-auto px-8 md:px-16">
            
            {/* PAGE HEADER */}
            <div className="mb-32">
              <h1 className="text-[#FFFFF0] text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight md:tracking-tighter leading-[0.9] md:leading-[0.8] mb-6">
                MEGAMATE & <br /> <span className="text-[#8E8680]">BIOLUY-A</span>
              </h1>
              <p className="text-[#FFFFF0] text-2xl font-light italic opacity-80">
                {t('products.header_subtext')}
              </p>
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

                  {/* TEXT CONTAINER */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="w-full h-full p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-[40px] flex flex-col justify-center">
                      <div className="mb-8 pb-6 border-b border-white/10">
                        <h2 className="text-[#FFFFF0] text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-2">
                          {product.title}
                        </h2>
                        <p className="text-[#FDFBD4] font-black text-xs uppercase tracking-[0.4em]">
                          {t(product.subtitle)}
                        </p>
                      </div>

                      <p className="text-[#FFFFF0]/95 text-2xl md:text-3xl leading-tight font-light mb-10 italic tracking-tight">
                        "{t(product.description)}"
                      </p>

                      <ul className="grid grid-cols-1 gap-5">
                        {product.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4 text-[#FFFFF0]/80 text-lg font-light leading-relaxed">
                            <span className="text-[#FDFBD4] shrink-0 text-lg font-black relative top-[4px]">
                              ●
                            </span>
                            <span className="flex-1">
                              {t(bullet)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div> 

      {/* SECTION 2: UNIVERSAL SYSTEM */}
      <section 
        className="relative z-20 py-32 px-8 md:px-16"
        style={{ background: 'linear-gradient(to bottom, #eed9c4 0%, #8f9779 50%, #667b68 70%)' }}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-20">
            <p className="text-[#4A443F] font-black uppercase tracking-[0.4em] text-xs mb-4">
              {t('products.universal_tag')}
            </p>
            {/* 🔍 MAINTAINED WORK: tracking-normal class left intact for clean spacing */}
            <h2 className="text-[#4A443F] text-5xl md:text-7xl font-black uppercase tracking-normal">
              {t('products.universal_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropData.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-[2.5rem] border border-white/20"
                style={{ backgroundColor: 'rgba(255, 255, 240, 0.08)', backdropFilter: 'blur(30px)' }}
              >
                <h3 className="text-[#4A443F] text-xl font-black uppercase mb-4">
                  {t(item.title)}
                </h3>
                <p className="text-[#FFFFF0] text-sm leading-relaxed font-light">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}