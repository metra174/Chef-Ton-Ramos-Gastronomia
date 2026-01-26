
import React from 'react';

interface ChefSectionProps {
  theme: 'dark' | 'light';
}

export const ChefSection: React.FC<ChefSectionProps> = ({ theme }) => {
  return (
    <section id="chef" className="relative py-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 backdrop-blur-sm ${theme === 'dark' ? 'bg-stone-950/80' : 'bg-white/70'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className={`relative z-10 w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-stone-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1577214286173-0ad444510f01?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef Ton Ramos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`w-full lg:w-1/2 backdrop-blur-xl border p-8 md:p-12 rounded-[3rem] shadow-2xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-stone-100'}`}>
            <div className="inline-block px-4 py-1 bg-amber-600/10 rounded-full mb-6">
               <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs">A Arte de Cozinhar</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
              Chef Ton Ramos
            </h2>
            <div className={`space-y-6 font-light text-lg leading-relaxed ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
              <p>
                Referência na gastronomia de Luanda, o <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Chef Ton Ramos</span> transforma ingredientes selecionados em experiências inesquecíveis.
              </p>
              <p className={`p-6 rounded-2xl border-l-4 border-amber-600 italic ${theme === 'dark' ? 'bg-amber-600/10 text-stone-200' : 'bg-stone-50 text-stone-700'}`}>
                "Sabor autêntico e sofisticação em cada detalhe da sua mesa."
              </p>
            </div>
            
            <div className="mt-10">
               <a href="#contato" className="w-full sm:w-auto px-8 py-4 bg-amber-600/10 text-amber-600 font-bold rounded-xl border border-amber-600/20 hover:bg-amber-600/20 transition-all uppercase tracking-widest text-xs inline-block text-center">
                 Encomendar Agora
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
