
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const logoUrl = "https://i.imgur.com/chdgwr9.png";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Gastronómico de Alta Qualidade - Preenchimento total da tela */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[30s] hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/80' : 'bg-white/50'} backdrop-blur-[2px]`}></div>
      </div>

      {/* Conteúdo Centralizado - Layout Refinado */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in flex flex-col items-center">
        
        <div className="mb-8 relative group">
          {/* Brilho âmbar sutil */}
          <div className="absolute inset-0 bg-amber-600/20 blur-[100px] rounded-full group-hover:bg-amber-600/30 transition-all duration-1000"></div>
          
          <img 
            src={logoUrl} 
            alt="Chef Ton Ramos Gastronomia" 
            className="relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_60px_rgba(217,119,6,0.3)] transition-all duration-1000 hover:scale-105"
          />
        </div>

        {/* Headline e Sub-headline Refinados e Concisos */}
        <div className="mb-12 space-y-4">
          <h1 className={`text-4xl md:text-7xl font-serif font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            A Arte de Servir com <span className="text-amber-600">Excelência</span>
          </h1>
          <p className={`text-lg md:text-2xl font-light max-w-2xl mx-auto italic ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
            Sofisticação em cada detalhe e o sabor inconfundível dos nossos autênticos Pacotes Cubas.
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-16 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-[0_20px_50px_-10px_rgba(217,119,6,0.5)] hover:-translate-y-1 uppercase tracking-widest text-xs text-center"
          >
            Ver Cardápio
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

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-600 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};
