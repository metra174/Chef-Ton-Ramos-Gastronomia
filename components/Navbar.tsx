
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Mini Cubas', href: '#mini-cubas' },
    { label: 'Entradas', href: '#entradas' },
    { label: 'Guarnições', href: '#guarnacoes' },
    { label: 'Encomendar', href: '#contato', primary: true },
  ];

  const logoUrl = "https://i.imgur.com/chdgwr9.png";

  const themeIcon = theme === 'dark' ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? (theme === 'dark' ? 'bg-stone-950/90 text-white border-b border-white/5' : 'bg-white/95 text-stone-900 shadow-lg border-b border-stone-100') + ' backdrop-blur-lg py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-4 group">
            <div className="relative h-14 w-14 md:h-16 md:w-16 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={logoUrl} 
                  alt="Chef Ton Ramos Logo" 
                  className="h-full w-full object-contain drop-shadow-md"
                />
            </div>
            <div className="flex flex-col">
                <span className={`text-xl font-serif font-bold leading-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
                    Ton Ramos
                </span>
                <span className="text-amber-600 text-[10px] tracking-[0.3em] font-black uppercase">Gastronomia</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className={`flex items-center space-x-8 font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-stone-200' : 'text-stone-700'}`}>
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[10px] uppercase tracking-[0.2em] hover:text-amber-600 transition-all ${link.primary ? 'bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 hover:text-white shadow-xl hover:-translate-y-0.5' : 'hover:-translate-y-0.5'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all hover:scale-110 ${theme === 'dark' ? 'border-white/10 hover:bg-white/5 text-white' : 'border-stone-200 hover:bg-stone-50 text-stone-900 shadow-sm'}`}
              title="Alternar Tema"
            >
              {themeIcon}
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-colors ${theme === 'dark' ? 'border-white/10 text-white' : 'border-stone-200 text-stone-900 shadow-sm'}`}
            >
              {themeIcon}
            </button>
            <button 
              className="p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-stone-900'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-stone-900'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-stone-900'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} flex flex-col items-center justify-center p-8 backdrop-blur-3xl ${theme === 'dark' ? 'bg-stone-950/98' : 'bg-white/98'}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-3xl font-serif font-bold hover:text-amber-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
