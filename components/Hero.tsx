
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  // Direct link to the image provided by the user
  const logoUrl = "https://i.imgur.com/chdgwr9.png";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive background with slight blur and overlay for better logo visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/60' : 'bg-white/30'} backdrop-blur-[2px]`}></div>
      </div>

      {/* Main Content - Minimalist approach focusing on the logo and action buttons */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in flex flex-col items-center">
        
        {/* Logo Container - Clean, transparent, and prominently displayed */}
        <div className="mb-16 relative group">
          {/* Subtle glow effect behind the logo */}
          <div className="absolute inset-0 bg-amber-600/10 blur-[100px] rounded-full group-hover:bg-amber-600/20 transition-all duration-1000"></div>
          
          <img 
            src={logoUrl} 
            alt="Chef Ton Ramos Gastronomia" 
            className="relative w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_20px_60px_rgba(217,119,6,0.3)] transition-all duration-700 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://i.imgur.com/chdgwr9.png";
            }}
          />
        </div>

        {/* Action Buttons - Minimalist and high-contrast */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-md">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-16 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-[0_20px_40px_-10px_rgba(217,119,6,0.4)] hover:-translate-y-1 uppercase tracking-widest text-sm text-center"
          >
            Ver Cardápio
          </a>
          <a 
            href="#contato" 
            className={`w-full sm:w-auto px-16 py-5 border backdrop-blur-md font-bold rounded-full transition-all uppercase tracking-widest text-sm hover:-translate-y-1 text-center ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' 
                : 'bg-white/40 hover:bg-white/70 text-stone-900 border-stone-200 shadow-xl shadow-stone-200/50'
            }`}
          >
            Encomendar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-600 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};
