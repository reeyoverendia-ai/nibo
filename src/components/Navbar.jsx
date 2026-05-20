import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

// 1. 🔍 LIQUID GLASS LANGUAGE SELECTOR
function LanguageSelector({ isMobile = false }) {
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

  // Core glass style for the main trigger button
  const glassStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    borderColor: 'rgba(250, 238, 200, 0.4)', 
    boxShadow: '0 0 20px rgba(250, 238, 200, 0.15), inset 0 0 10px rgba(255, 255, 255, 0.05)' 
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsLangOpen(!isLangOpen)}
        className={`flex items-center gap-3 rounded-full border text-[#FFFFF0] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95
          ${isMobile ? 'px-8 py-4 text-xl' : 'px-5 py-2.5 text-[12px]'}`}
        style={glassStyle}
      >
        <Globe className={`${isMobile ? 'w-6 h-6' : 'w-4 h-4'} text-[#FAEEC8]`} />
        <span>{currentLanguage?.code}</span>
        <ChevronDown className={`transition-transform duration-300 ${isMobile ? 'w-5 h-5' : 'w-3.5 h-3.5'} ${isLangOpen ? 'rotate-180' : ''}`} />
      </button>

      {isLangOpen && (
        <>
          {/* Click overlay to close */}
          <div className="fixed inset-0 z-[120]" onClick={() => setIsLangOpen(false)}></div>
          
          {/* 🔍 THE UPDATED SEMI-FROSTED DROP-DOWN CARD */}
          <div 
            className={`absolute z-[130] rounded-[2rem] border transition-all duration-300 overflow-hidden group/dropdown
              ${isMobile ? 'left-1/2 -translate-x-1/2 bottom-full mb-4 w-64' : 'right-0 mt-4 w-48'}`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.09)', // Increased opacity for a perfect semi-frosted look
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              borderColor: 'rgba(250, 238, 200, 0.35)',
              /* Enhanced structural glow that updates to an intense aura glow when hovering anywhere over the card */
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 25px rgba(250, 238, 200, 0.1)'
            }}
          >
            {/* Added a subtle wrapper that applies a global hover glow behavior via standard Tailwind classes */}
            <div className="py-1 transition-all duration-500 rounded-[2rem] hover:shadow-[0_0_35px_rgba(250,238,200,0.35)]">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => {
                    console.log("Changing to:", lng.code);
                    i18n.changeLanguage(lng.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full flex items-center justify-between transition-all duration-300 hover:bg-[#FAEEC8]/15
                    ${isMobile ? 'px-8 py-5' : 'px-6 py-4'}
                    ${i18n.language?.startsWith(lng.code) ? 'text-[#FAEEC8]' : 'text-[#FFFFF0]/70 hover:text-[#FFFFF0]'}
                  `}
                >
                  <div className={`flex items-center gap-4 font-black uppercase tracking-widest ${isMobile ? 'text-lg' : 'text-[11px]'}`}>
                    <span className="opacity-90">{lng.flag}</span>
                    <span>{lng.label}</span>
                  </div>
                  
                  {/* Current language indicator dot with luxury glow */}
                  {i18n.language?.startsWith(lng.code) && (
                    <div className="w-2 h-2 rounded-full bg-[#FAEEC8] shadow-[0_0_12px_#FAEEC8]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navLinks = [
    { name: t('nav.company'), href: '/company-profile' },
    { name: t('nav.science'), href: '/soil-science' },
    { name: t('nav.products'), href: '/products' },   
    { name: t('nav.results'), href: '/results' },
    { name: t('nav.eumarket'), href: '/eu-market' },
    { name: t('nav.faq'), href: '/faq' },
     ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] transition-all duration-300 border-b border-white/10 flex items-center bg-white/[0.03] backdrop-blur-xl" style={{ height: '90px' }}>
        <div className="max-w-[1550px] mx-auto w-full px-6 md:px-12 flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link to="/" className="text-[#FFFFF0] font-black text-2xl md:text-3xl tracking-tighter cursor-pointer">NIBO.</Link>
          </div>

{/* DESKTOP MENU - Cleaned Single Button Layout */}
<div className="hidden lg:flex items-center justify-end flex-1 ml-4 gap-3 xl:gap-6 text-[10px] xl:text-[11px] font-black uppercase tracking-[0.15em] xl:tracking-[0.2em] text-[#FFFFF0]">
  
  {/* 1. Your core page navigation links */}
  {navLinks.map((link) => (
    <Link key={link.name} to={link.href} className="hover:opacity-60 transition-all duration-300 relative group py-2 whitespace-nowrap">
      {link.name}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFFFF0] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}

  {/* 2. The single liquid-glass language selector */}
  <div className="ml-1 border-l border-white/10 pl-4 flex-shrink-0">
    <LanguageSelector isMobile={false} />
  </div>
  
  {/* 3. THE ONLY CONTACT BUTTON YOU NEED */}
  <Link 
    to="/#contact" 
    className="ml-2 px-5 py-3 rounded-full border uppercase tracking-[0.15em] xl:tracking-[0.25em] whitespace-nowrap relative overflow-hidden group shadow-2xl flex-shrink-0 inline-flex items-center justify-center"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(250, 238, 200, 0.4)',
      boxShadow: '0 0 25px rgba(250, 238, 200, 0.2)'
    }}
  >
    {/* Sliding Shimmer Layer */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-10"></div>
    
    <span className="relative z-20 group-hover:text-[#FAEEC8] transition-colors font-black">
      {t('nav.contact')}
    </span>
  </Link>

</div>
          
          {/* MOBILE BURGER */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 z-[110] relative p-4">
            <span className={`h-0.5 w-8 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] rotate-45 translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-8 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-8 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] -rotate-45 -translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 w-screen h-screen z-[100] transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
        style={{ background: 'linear-gradient(135deg, #a3b899 0%, #d4cbb8 100%)' }}>
        
        <div className="flex flex-col items-center justify-start w-full h-full pt-32 pb-20 gap-10 overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-[#4A5D23]">Home</Link>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-[#4A5D23]">{link.name}</Link>
          ))}
          
          <div className="mt-4">
            <LanguageSelector isMobile={true} />
          </div>

{/* 🔍 MOBILE CONTACT BUTTON - Centered liquid glass */}
<Link 
  to="/#contact" 
  onClick={() => setIsOpen(false)} 
  className="mt-6 w-[85%] max-w-[400px] py-6 rounded-full font-black uppercase tracking-[0.3em] text-sm text-[#FFFFF0] border transition-all duration-500 shadow-2xl relative overflow-hidden group flex items-center justify-center"
  style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    borderColor: 'rgba(250, 238, 200, 0.4)',
    boxShadow: '0 0 25px rgba(250, 238, 200, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.05)'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
  <span className="relative z-10 group-hover:text-[#FAEEC8] transition-colors font-black">
  {t('nav.contact')} 
</span>
</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
  /* RESET GLOBAL BUTTON INTERACTIONS */
  .group, button, a {
    transform: translateY(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  }

  /* TEXT ONLY NAV LINKS: Clean subtle shift upward */
  .group:hover:not(.shadow-2xl) {
    transform: translateY(-1px);
    opacity: 1 !important;
  }

  /* PREMIUM CALL TO ACTION: Combined Edge Glow + Global Lift */
  .group.shadow-2xl:hover, button:hover {
    box-shadow: 0 0 40px rgba(250, 238, 200, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(250, 238, 200, 0.7) !important;
    transform: translateY(-3px);
  }

  /* ENSURE THE GRADIENT LAYER SWEEPS ACROSS ON HOVER */
  .group:hover .group-hover\\:translate-x-\\[150\\%\\] {
    transform: translateX(150%) !important;
  }
`}} />
    </>
  );
}