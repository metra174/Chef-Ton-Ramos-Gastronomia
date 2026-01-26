
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
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className={`relative z-10 w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group border ${theme === 'dark' ? 'border-white/10' : 'border-stone-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1577214286173-0ad444510f01?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef Ton Ramos" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
          </div>

          <div className={`w-full lg:w-1/2 backdrop-blur-xl border p-8 md:p-12 rounded-[3rem] shadow-2xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-stone-100'}`}>
            <div className="inline-block px-4 py-1 bg-amber-600/10 rounded-full mb-6">
               <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs">A Arte de Cozinhar</span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
              Chef Ton Ramos
            </h2>
            <div className={`space-y-6 font-light text-xl leading-relaxed ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Com uma trajetória marcada pela excelência e o amor pela cozinha, o <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Chef Ton Ramos</span> é hoje uma referência na gastronomia de Luanda. Sua abordagem combina o rigor das técnicas clássicas com a alma vibrante dos ingredientes locais.
              </p>
              <p>
                Especialista em transformar jantares comuns em banquetes memoráveis, através dos seus <span className="italic text-amber-600">Pacotes Cubas</span>, ele democratiza a alta gastronomia em Luanda.
              </p>
              <p className={`p-6 rounded-2xl border-l-4 border-amber-600 italic ${theme === 'dark' ? 'bg-amber-600/10 text-stone-200' : 'bg-stone-50 text-stone-700'}`}>
                "Cozinhar não é apenas seguir receitas, é traduzir sentimentos em sabores que contam histórias."
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
               <div className={`px-8 py-4 rounded-2xl border flex items-center gap-4 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-stone-50 border-stone-100'}`}>
                  <span className="text-4xl font-serif font-bold text-amber-600">500+</span>
                  <span className={`text-sm font-medium uppercase tracking-tighter leading-tight ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Eventos<br/>Realizados</span>
               </div>
               <a href="#contato" className={`font-bold underline underline-offset-8 decoration-amber-600 hover:text-amber-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Saiba mais &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
