
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Imersivo */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[12s] hover:scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/70' : 'bg-white/40'} backdrop-blur-[1px]`}></div>
      </div>

      {/* Conteúdo Central - Totalmente Transparente sem caixas opacas */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in mt-10">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Efeito de brilho sutil por trás do logo para destaque sem opacidade */}
            <div className="absolute inset-0 bg-amber-600/15 blur-[100px] rounded-full group-hover:bg-amber-600/25 transition-all duration-700"></div>
            <img 
              src="https://i.imgur.com/chdgwr9.png" 
              alt="Chef Ton Ramos" 
              className="relative w-36 h-36 md:w-56 md:h-56 object-contain drop-shadow-[0_10px_40px_rgba(217,119,6,0.3)] transition-transform duration-700 hover:scale-110" 
            />
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-amber-600 uppercase tracking-[0.6em] font-black block text-xs md:text-sm drop-shadow-md">
            Excelência Gastronómica em Luanda
          </span>
          <h1 className={`text-5xl md:text-8xl font-serif mb-6 leading-tight drop-shadow-2xl ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            Momentos <span className="text-amber-600 italic">Inesquecíveis</span> <br /> através do sabor
          </h1>
          <p className={`text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md ${theme === 'dark' ? 'text-stone-200' : 'text-stone-800'}`}>
            Especialista nos famosos <span className="font-semibold text-amber-600">Pacotes Cubas</span>. Sofisticação, sabor autêntico e praticidade para sua celebração.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-14 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-[0_20px_40px_-10px_rgba(217,119,6,0.4)] hover:-translate-y-1 uppercase tracking-widest text-sm"
          >
            Ver Cardápio
          </a>
          <a 
            href="#contato" 
            className={`w-full sm:w-auto px-14 py-5 border backdrop-blur-md font-bold rounded-full transition-all uppercase tracking-widest text-sm hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' 
                : 'bg-white/50 hover:bg-white/80 text-stone-900 border-stone-200 shadow-xl'
            }`}
          >
            Encomendar
          </a>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-600 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};
