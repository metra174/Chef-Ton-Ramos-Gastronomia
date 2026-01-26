
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
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url("${backgroundImage}")`, backgroundAttachment: 'fixed' }}
      >
        <div className={`absolute inset-0 backdrop-blur-[2px] ${theme === 'dark' ? 'bg-stone-950/60' : 'bg-white/50'}`}></div>
      </div>
      
      <div className="relative z-10 py-24 px-6 flex flex-col items-center">
        <div className="text-center mb-12 animate-fade-in">
          <div className={`backdrop-blur-md border p-8 md:p-12 rounded-[2rem] shadow-2xl inline-block max-w-4xl ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-stone-200'}`}>
            <span className="text-amber-600 font-bold tracking-[0.3em] text-xs uppercase mb-3 block">Experiência Gastronómica</span>
            <h2 className={`text-4xl md:text-6xl font-serif mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
            {subtitle && <p className={`text-lg font-light max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-stone-200' : 'text-stone-600'}`}>{subtitle}</p>}
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto">
          <div className={`backdrop-blur-xl border p-8 md:p-16 rounded-[3rem] shadow-2xl ${theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-white border-stone-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
              {items.map((item, idx) => (
                <div key={idx} className={`group flex flex-col sm:flex-row sm:items-center py-4 border-b transition-all duration-300 ${theme === 'dark' ? 'border-white/5' : 'border-stone-100'}`}>
                  <div className="flex-grow flex flex-col sm:flex-row sm:items-baseline gap-2 overflow-hidden mb-2 sm:mb-0">
                    <span className={`text-lg md:text-xl font-serif font-medium transition-colors group-hover:text-amber-500 whitespace-nowrap overflow-hidden text-ellipsis ${theme === 'dark' ? 'text-white' : 'text-stone-800'}`}>
                      {item.name}
                    </span>
                    <div className={`hidden sm:block flex-grow border-b border-dotted mx-4 relative top-[-4px] ${theme === 'dark' ? 'border-white/10' : 'border-stone-200'}`}></div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <span className="text-amber-600 font-mono font-bold text-lg whitespace-nowrap shrink-0 transition-transform group-hover:scale-110">
                      {formatCurrency(item.price)}
                    </span>
                    
                    <button 
                      onClick={() => handleAction(item.name)}
                      className="p-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20"
                      title="Adicionar à Encomenda"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
