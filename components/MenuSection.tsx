
import React from 'react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  backgroundImage: string;
  theme: 'dark' | 'light';
  onOrderItem?: (itemName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ id, title, subtitle, items, backgroundImage, theme, onOrderItem }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-AO', { minimumFractionDigits: 0 }).format(val) + ' Kz';
  };

  const handleAction = (itemName: string) => {
    if (onOrderItem) {
      onOrderItem(itemName);
    }
  };

  return (
    <section id={id} className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${backgroundImage}")`, backgroundAttachment: 'fixed' }}
      >
        {/* Overlay mais escuro para garantir que as letras brancas/pretas "saltem" da tela */}
        <div className={`absolute inset-0 backdrop-blur-[2px] ${theme === 'dark' ? 'bg-stone-950/80' : 'bg-white/60'}`}></div>
      </div>
      
      <div className="relative z-10 py-24 px-6 flex flex-col items-center">
        <div className="text-center mb-16 animate-fade-in">
          <div className={`backdrop-blur-xl border p-8 md:p-12 rounded-[3rem] shadow-2xl inline-block max-w-4xl ${theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-white/90 border-stone-200 shadow-stone-200/50'}`}>
            <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
            {subtitle && <p className={`text-sm md:text-lg font-light tracking-[0.1em] opacity-70 ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>{subtitle}</p>}
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto">
          <div className={`backdrop-blur-2xl border p-8 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ${theme === 'dark' ? 'bg-stone-900/40 border-white/5' : 'bg-white/95 border-stone-100 shadow-stone-200/40'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              {items.map((item, idx) => (
                <div key={idx} className={`group flex flex-col sm:flex-row sm:items-center p-4 rounded-2xl transition-all duration-500 border-b border-transparent hover:bg-amber-600/5 ${theme === 'dark' ? 'hover:border-white/5' : 'hover:border-stone-200'}`}>
                  <div className="flex-grow flex flex-col sm:flex-row sm:items-baseline gap-3 overflow-hidden mb-2 sm:mb-0">
                    {/* Letras mais bonitas, visíveis e com maior peso */}
                    <span className={`text-xl md:text-2xl font-serif font-bold transition-all duration-300 group-hover:text-amber-600 group-hover:translate-x-1 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-900'}`}>
                      {item.name}
                    </span>
                    <div className={`hidden sm:block flex-grow border-b border-dotted mx-2 relative top-[-6px] opacity-10 transition-opacity group-hover:opacity-30 ${theme === 'dark' ? 'border-white' : 'border-stone-950'}`}></div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <span className="text-amber-600 font-mono font-black text-xl md:text-2xl whitespace-nowrap shrink-0 drop-shadow-sm">
                      {formatCurrency(item.price)}
                    </span>
                    
                    <button 
                      onClick={() => handleAction(item.name)}
                      className="p-2.5 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-lg hover:scale-110 active:scale-95"
                      title="Adicionar ao pedido"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
                <p className={`text-xs uppercase tracking-[0.4em] font-bold ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>
                   * Encomendas com 3 dias de antecedência para garantir a frescura.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
