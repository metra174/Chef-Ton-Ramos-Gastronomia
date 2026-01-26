
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChefSection } from './components/ChefSection';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { OrderForm } from './components/OrderForm';
import { PACOTES_CUBAS, GUARNACOES, ENTRADAS, MINI_CUBAS } from './constants';
import { OrderState } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [order, setOrder] = useState<OrderState>({
    customerName: '',
    phoneNumber: '',
    eventDate: '',
    selectedPackageId: '',
    peopleCount: 0,
    extraItems: {},
  });

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const addItemToOrder = useCallback((itemName: string) => {
    setOrder(prev => ({
      ...prev,
      extraItems: {
        ...prev.extraItems,
        [itemName]: (prev.extraItems[itemName] || 0) + 1
      }
    }));
    
    // Smooth scroll para a seção de encomenda com fallback seguro
    setTimeout(() => {
        const contactSection = document.getElementById('contato');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  }, []);

  useEffect(() => {
    // Garante que o tema inicial seja aplicado corretamente no body/html
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    document.body.className = theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900';
  }, [theme]);

  // Prevenção de "White Screen" por erro de renderização
  if (!order) return null;

  return (
    <div className={`min-h-screen relative selection:bg-amber-200 selection:text-amber-900 transition-colors duration-500 w-full overflow-x-hidden ${theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero theme={theme} />
        
        <ChefSection theme={theme} />

        <section id="mao-de-obra" className="relative py-40 px-6 overflow-hidden flex items-center justify-center min-h-[90vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1556910111-71302c01062a?auto=format&fit=crop&q=80&w=2000")',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className={`absolute inset-0 backdrop-blur-md ${theme === 'dark' ? 'bg-stone-950/85' : 'bg-white/70'}`}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif mb-16 italic text-amber-600 drop-shadow-2xl uppercase tracking-[0.2em]">Serviço de Chef em Casa</h2>
            <div className={`inline-block border p-12 md:p-20 rounded-[4rem] shadow-2xl mb-12 transition-all duration-700 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-stone-200 text-stone-900'}`}>
               <span className="text-xs uppercase tracking-[0.4em] block mb-8 font-black text-amber-600">Investimento por Pessoa</span>
               <div className="flex items-baseline justify-center">
                 <span className="text-9xl md:text-[12rem] font-serif font-bold tracking-tighter leading-none">5.000</span>
                 <span className="text-4xl font-serif ml-4 opacity-70 italic">Kz</span>
               </div>
               <div className="w-32 h-[1px] bg-amber-600/50 mx-auto my-12"></div>
               <p className={`text-xl max-w-sm mx-auto font-light leading-relaxed ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
                  O cliente fornece os ingredientes, e nós elevamos sua cozinha ao nível de um restaurante estrelado com serviço completo de buffet.
               </p>
            </div>
          </div>
        </section>

        <MenuSection 
          id="menu"
          title="Pacotes Cubas" 
          subtitle="Encomendas com 3 dias de antecedência para garantir a frescura absoluta."
          items={PACOTES_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          title="Guarnições" 
          subtitle="Acompanhamentos perfeitos para elevar qualquer prato."
          items={GUARNACOES} 
          backgroundImage="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          title="Entradas & Travessas" 
          subtitle="Para começar sua experiência gastronómica em grande estilo."
          items={ENTRADAS}
          backgroundImage="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="mini-cubas"
          title="Pacotes Mini Cubas" 
          subtitle="Opções reduzidas com o mesmo sabor inconfundível do Chef."
          items={MINI_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <OrderForm 
          theme={theme} 
          order={order} 
          setOrder={setOrder} 
        />
      </main>

      <Footer theme={theme} />

      {/* Botão flutuante minimalista e elegante */}
      <a 
        href="#contato"
        className="fixed bottom-10 right-10 z-50 p-6 bg-green-500 text-white rounded-full shadow-[0_25px_60px_-15px_rgba(34,197,94,0.6)] hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Fazer Pedido no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-4 transition-all duration-700 whitespace-nowrap font-bold text-lg uppercase tracking-widest">Pedir Agora</span>
      </a>
    </div>
  );
};

export default App;
