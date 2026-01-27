
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { OrderForm } from './components/OrderForm';
import { PACOTES_CUBAS, MINI_CUBAS, ENTRADAS, GUARNACOES } from './constants';
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
    
    // Scroll to contact section
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
        
        {/* Expanded Menu Sections */}
        <MenuSection 
          id="entradas"
          title="Entradas Premium" 
          subtitle="Para começar sua experiência da melhor forma"
          items={ENTRADAS} 
          backgroundImage="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="menu"
          title="Pacotes Cubas" 
          subtitle="A especialidade do Chef Ton Ramos (Para 10-12 pessoas)"
          items={PACOTES_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="mini-cubas"
          title="Mini Cubas" 
          subtitle="Versões reduzidas com o mesmo sabor excepcional"
          items={MINI_CUBAS} 
          backgroundImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        <MenuSection 
          id="guarnacoes"
          title="Guarnições Típicas" 
          subtitle="O acompanhamento perfeito para o seu prato principal"
          items={GUARNACOES} 
          backgroundImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000"
          theme={theme}
          onOrderItem={addItemToOrder}
        />

        {/* Order Form */}
        <OrderForm 
          theme={theme} 
          order={order} 
          setOrder={setOrder} 
        />
      </main>

      <Footer theme={theme} />

      {/* Floating Action Button */}
      <a 
        href="#contato"
        className="fixed bottom-8 right-8 z-50 p-5 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Pedir no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
      </a>
    </div>
  );
};

export default App;
