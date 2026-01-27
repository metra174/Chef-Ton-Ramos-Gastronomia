
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ChefSection } from './components/ChefSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { OrderForm } from './components/OrderForm';
import { PACOTES_CUBAS, MINI_CUBAS, ENTRADAS, GUARNACOES } from './constants';
import { OrderState } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFabHovered, setIsFabHovered] = useState(false);
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
    
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    document.body.style.backgroundColor = theme === 'dark' ? '#0c0a09' : '#fafaf9';
  }, [theme]);

  if (!order || typeof order !== 'object') return null;

  return (
    <div className={`min-h-screen relative w-full overflow-x-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <Hero theme={theme} />
        
        <ChefSection theme={theme} />

        <GallerySection theme={theme} />

        <MenuSection 
          id="entradas"
          title="Entradas" 
          subtitle="Para começar com sofisticação"
          items={ENTRADAS} 
          backgroundImage="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="menu"
          title="Pacotes Cubas" 
          subtitle="A Excelência em Grandes Porções"
          items={PACOTES_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="mini-cubas"
          title="Mini Cubas" 
          subtitle="O Sabor Autêntico em Dose Menor"
          items={MINI_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="guarnacoes"
          title="Guarnições" 
          subtitle="Acompanhamentos de Tradição"
          items={GUARNACOES} 
          backgroundImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000"
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

      {/* Floating Action Button Otimizado */}
      <a 
        href="https://wa.me/244932815377"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsFabHovered(true)}
        onMouseLeave={() => setIsFabHovered(false)}
        className="fixed bottom-8 right-8 z-50 flex items-center group"
        aria-label="Pedir no WhatsApp"
      >
        <div className={`overflow-hidden transition-all duration-500 ease-out flex items-center bg-stone-900/80 backdrop-blur-xl border border-white/10 rounded-full mr-[-2rem] pr-10 pl-6 py-3 shadow-2xl ${isFabHovered ? 'max-w-xs opacity-100 translate-x-0' : 'max-w-0 opacity-0 translate-x-10'}`}>
           <span className="text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Atendimento Online</span>
        </div>
        
        <div className="relative">
            {/* Efeito de pulso/glow */}
            <div className="absolute inset-0 bg-green-500/40 rounded-full animate-ping scale-150 opacity-20 group-hover:bg-amber-600/40 transition-colors"></div>
            
            <div className={`relative h-16 w-16 bg-green-500 text-white rounded-full shadow-[0_15px_40px_-10px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-green-600 group-hover:shadow-green-500/50`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
                {/* Badge Online */}
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
      </a>
    </div>
  );
};

export default App;
