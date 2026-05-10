import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Company', href: '/company-profile' },
    { name: 'Soil Science', href: '/technical-brief' },
    { name: 'Products', href: '/feasibility-study' },   
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
          height: '96px'
        }}
      >
        {/* 🔍 THE FIX: Increased max-width and added a specific gap between Logo and Links */}
        <div className="max-w-[95%] mx-auto w-full px-8 md:px-12 flex justify-between items-center">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-[#FFFFF0] font-black text-2xl tracking-tighter cursor-pointer">
              NIBO.
            </Link>
          </div>

          {/* 🔍 THE FIX: Added 'ml-20' to push the links further away from the logo and 'gap-12' for spacing between links */}
          <div className="hidden lg:flex items-center ml-20 gap-10 xl:gap-14 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFFFF0]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="hover:opacity-60 transition-all duration-300 relative group py-2 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFFFF0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link 
              to="/#contact" 
              className="ml-6 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all uppercase tracking-[0.3em] whitespace-nowrap"
            >
              Contact Intelligence
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 z-[110] relative"
          >
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] rotate-45 translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] -rotate-45 -translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY (Kept same as before) */}
      <div 
        className={`fixed inset-0 w-screen h-screen z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{ background: 'linear-gradient(90deg, #a3b899 0%, #d4cbb8 80%)' }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-black uppercase tracking-tighter text-[#4A5D23]"
            >
              {link.name}
            </Link>
          ))}

          <Link 
            to="/#contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-6 px-10 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all border"
            style={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.15)', 
              borderColor: 'rgba(255, 255, 240, 0.2)',
              color: '#FFFFF0',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            Contact Intelligence
          </Link>
        </div>
      </div>
    </>
  );
}