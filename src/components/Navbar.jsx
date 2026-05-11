import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Company', href: '/company-profile' },
    { name: 'Soil Science', href: '/soil-science' },
    { name: 'Products', href: '/products' },   
    { name: 'Results', href: '/results' },
    { name: 'EU Market', href: '/eu-market' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-[100] transition-all duration-300 border-b border-white/10 flex items-center"
        style={{ 
          backgroundColor: 'rgba(255, 255, 240, 0.1)', 
          backdropFilter: 'blur(10px)', 
          WebkitBackdropFilter: 'blur(10px)',
          /* 🔍 FIX 1: Using a static height for mobile helps Hero.jsx calculate spacing better */
          height: '80px' 
        }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link to="/" className="text-[#FFFFF0] font-black text-xl md:text-2xl tracking-tighter cursor-pointer">
              NIBO.
            </Link>
          </div>

<div className="hidden lg:flex items-center ml-auto gap-8 xl:gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFFFF0]">
  {navLinks.map((link) => (
    <Link key={link.name} to={link.href} className="hover:opacity-60 transition-all duration-300 relative group py-2">
      {link.name}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFFFF0] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
  
  {/* 🔍 UPDATED BUTTON: Added 'relative', 'overflow-hidden', and 'group' */}
  <Link 
    to="/#contact" 
    className="ml-4 px-6 md:px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-500 uppercase tracking-[0.3em] whitespace-nowrap relative overflow-hidden group shadow-2xl"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      backdropFilter: 'blur(12px)' 
    }}
  >
    {/* 🔍 ADDED: Shimmer Layer */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
    
    {/* 🔍 ADDED: Text Span */}
    <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">
      Contact Intelligence
    </span>
  </Link>
</div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 z-[110] relative">
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] rotate-45 translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] -rotate-45 -translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
          </button>
        </div>
      </nav>

{/* MOBILE OVERLAY */}
<div 
  className={`fixed inset-0 w-screen h-screen z-[100] transition-all duration-500 ease-in-out lg:hidden ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
  }`}
  style={{ background: 'linear-gradient(90deg, #a3b899 0%, #d4cbb8 80%)' }}
>
  {/* 🔍 THE FINAL FIX: 
      1. Changed to 'justify-start' so the list starts from the top.
      2. Set 'pt-24' to keep 'Home' away from the top edge.
      3. Kept 'overflow-y-auto' so the user can scroll to the bottom button.
      4. Added 'pb-20' to give the Contact button breathing room at the bottom.
  */}
  <div className="flex flex-col items-center justify-start w-full h-full pt-24 pb-20 gap-8 overflow-y-auto">
    
    <Link 
      to="/" 
      onClick={() => setIsOpen(false)} 
      className="text-4xl font-black uppercase tracking-tighter text-[#4A5D23] shrink-0"
    >
      Home
    </Link>

    {navLinks.map((link) => (
      <Link 
        key={link.name} 
        to={link.href} 
        onClick={() => setIsOpen(false)} 
        className="text-4xl font-black uppercase tracking-tighter text-[#4A5D23] shrink-0"
      >
        {link.name}
      </Link>
    ))}

    {/* 🔍 Contact Button with flex-shrink-0 to prevent it from squishing */}
<Link 
  to="/#contact" 
  onClick={() => setIsOpen(false)} 
  className="mt-4 px-10 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 shadow-2xl border relative overflow-hidden group shrink-0 mb-10"
  style={{ 
    backgroundColor: 'rgba(15, 23, 42, 0.15)', 
    borderColor: 'rgba(255, 255, 240, 0.2)',
    color: '#FFFFF0',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  }}
>
  {/* 🔍 ADDED: The Shimmer Effect Layer */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
  
  <span className="relative z-10 group-hover:text-[#FDFBD4] transition-colors">
    Contact Intelligence
  </span>
</Link>
        </div>
      </div>
{/* 🔍 ADD THE STYLE BLOCK HERE (Line 123 area) */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Trigger on Desktop Hover AND Mobile Tap */
        .group:hover, .group:active {
          box-shadow: 0 0 40px rgba(212, 203, 184, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(253, 251, 212, 0.8) !important;
          transform: translateY(-3px) scale(1.02);
          transition: all 0.3s ease;
        }

        /* Specifically trigger the shimmer on tap for mobile */
        .group:active .group-hover\\:translate-x-\\[150\\%\\] {
          transform: translateX(150%) !important;
        }
      `}} />
    </> // This is your final closing fragment
  );
}