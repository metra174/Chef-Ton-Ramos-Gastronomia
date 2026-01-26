
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const logoUrl = "https://i.imgur.com/chdgwr9.png";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Novo Background Gastronómico de Alta Qualidade */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[25s] hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/75' : 'bg-white/45'} backdrop-blur-[1px]`}></div>
      </div>

      {/* Conteúdo Centralizado e Minimalista */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in flex flex-col items-center">
        
        <div className="mb-12 relative group">
          {/* Brilho âmbar sofisticado para destacar o logo */}
          <div className="absolute inset-0 bg-amber-600/20 blur-[120px] rounded-full group-hover:bg-amber-600/30 transition-all duration-1000"></div>
          
          <img 
            src={logoUrl} 
            alt="Chef Ton Ramos Gastronomia" 
            className="relative w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_25px_70px_rgba(217,119,6,0.4)] transition-all duration-1000 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://i.imgur.com/chdgwr9.png";
            }}
          />
        </div>

        {/* Botões de Ação com Design Refinado */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-16 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-[0_20px_50px_-10px_rgba(217,119,6,0.5)] hover:-translate-y-1 uppercase tracking-widest text-xs text-center"
          >
            Descobrir Menu
          </a>
          <a 
            href="#contato" 
            className={`w-full sm:w-auto px-16 py-5 border backdrop-blur-md font-bold rounded-full transition-all uppercase tracking-widest text-xs text-center hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' 
                : 'bg-white/40 hover:bg-white/70 text-stone-900 border-stone-300 shadow-xl'
            }`}
          >
            Fazer Encomenda
          </a>
        </div>
      </div>

      {/* Indicador de scroll discreto */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-amber-600 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};
