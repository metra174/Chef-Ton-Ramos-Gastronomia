
import React from 'react';

interface ChefSectionProps {
  theme: 'dark' | 'light';
}

export const ChefSection: React.FC<ChefSectionProps> = ({ theme }) => {
  // Corrigido para link direto da imagem
  const chefWorkImg = "https://i.imgur.com/70iHk4w.jpeg";

  return (
    <section id="chef" className="relative py-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 backdrop-blur-sm ${theme === 'dark' ? 'bg-stone-950/85' : 'bg-white/75'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
               {/* Decoração sutil de brilho */}
               <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-[4rem] group-hover:bg-amber-600/30 transition-all duration-1000"></div>
               
               <div className={`relative z-10 w-full max-w-md aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 ${theme === 'dark' ? 'border-stone-900' : 'border-white'}`}>
                <img 
                  src={chefWorkImg} 
                  alt="Chef Ton Ramos em ação" 
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 backdrop-blur-2xl border p-10 md:p-16 rounded-[4rem] shadow-2xl transition-all duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/90 border-stone-200 shadow-stone-200/50'}`}>
            <div className="inline-block px-5 py-2 bg-amber-600/10 rounded-full mb-8">
               <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-[10px]">Especialidade & Dedicação</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
              Chef Ton <span className="text-amber-600">Ramos</span>
            </h2>
            <div className={`space-y-8 font-light text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
              <p>
                Com anos de experiência na alta gastronomia de Luanda, o <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Chef Ton Ramos</span> é o mestre por trás dos sabores que encantam paladares exigentes.
              </p>
              <p className={`p-8 rounded-[2.5rem] border-l-8 border-amber-600 italic leading-relaxed ${theme === 'dark' ? 'bg-amber-600/5 text-stone-200' : 'bg-stone-50 text-stone-700 shadow-inner'}`}>
                "Minha missão é transformar cada ingrediente em uma memória afetiva, servindo não apenas comida, mas momentos de pura celebração."
              </p>
            </div>
            
            <div className="mt-12">
               <a href="#contato" className="px-12 py-5 bg-amber-600 text-white font-bold rounded-full shadow-xl hover:bg-amber-700 transition-all uppercase tracking-widest text-xs inline-block text-center hover:-translate-y-1">
                 Falar com o Chef
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
