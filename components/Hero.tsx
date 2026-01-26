
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background com parallax suave e overlay transparente */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/75' : 'bg-white/45'} backdrop-blur-[2px]`}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in mt-16">
        {/* Logo mais elegante e transparente, sem a caixa que causava o artefato visual */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-600/20 blur-3xl rounded-full"></div>
            <img 
              src="https://i.imgur.com/chdgwr9.png" 
              alt="Chef Ton Ramos" 
              className="relative w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_20px_50px_rgba(217,119,6,0.3)] transition-transform duration-700 hover:scale-110" 
            />
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-amber-600 uppercase tracking-[0.6em] font-bold block text-xs md:text-sm drop-shadow-sm">
            Alta Gastronomia em Luanda
          </span>
          <h1 className={`text-5xl md:text-8xl font-serif mb-6 leading-[1.05] drop-shadow-2xl ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            Momentos <span className="text-amber-600 italic">Inesquecíveis</span> <br /> através do sabor
          </h1>
          <p className={`text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md ${theme === 'dark' ? 'text-stone-200' : 'text-stone-700'}`}>
            Os famosos Pacotes Cubas do Chef Ton Ramos. Qualidade impecável, sabor autêntico e sofisticação à sua mesa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-14 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-[0_15px_30px_rgba(217,119,6,0.3)] hover:-translate-y-1 uppercase tracking-widest text-sm"
          >
            Explorar Cardápio
          </a>
          <a 
            href="#contato" 
            className={`w-full sm:w-auto px-14 py-5 border backdrop-blur-xl font-bold rounded-full transition-all uppercase tracking-widest text-sm hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' 
                : 'bg-white/40 hover:bg-white/60 text-stone-900 border-stone-200 shadow-lg'
            }`}
          >
            Fazer Encomenda
          </a>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 opacity-60 hover:opacity-100">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-600 to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};
