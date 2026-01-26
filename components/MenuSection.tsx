
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
        <div className={`absolute inset-0 backdrop-blur-[2px] ${theme === 'dark' ? 'bg-stone-950/60' : 'bg-white/50'}`}></div>
      </div>
      
      <div className="relative z-10 py-20 px-6 flex flex-col items-center">
        <div className="text-center mb-10 animate-fade-in">
          <div className={`backdrop-blur-md border p-6 md:p-10 rounded-[2rem] shadow-2xl inline-block max-w-4xl ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-stone-200'}`}>
            <h2 className={`text-3xl md:text-5xl font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
            {subtitle && <p className={`text-sm md:text-base font-light opacity-80 ${theme === 'dark' ? 'text-stone-200' : 'text-stone-600'}`}>{subtitle}</p>}
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto">
          <div className={`backdrop-blur-xl border p-6 md:p-12 rounded-[2.5rem] shadow-2xl ${theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-white border-stone-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
              {items.map((item, idx) => (
                <div key={idx} className={`group flex flex-col sm:flex-row sm:items-center py-3 border-b transition-all duration-300 ${theme === 'dark' ? 'border-white/5' : 'border-stone-100'}`}>
                  <div className="flex-grow flex flex-col sm:flex-row sm:items-baseline gap-2 overflow-hidden mb-1 sm:mb-0">
                    <span className={`text-base md:text-lg font-serif transition-colors group-hover:text-amber-500 whitespace-nowrap overflow-hidden text-ellipsis ${theme === 'dark' ? 'text-white' : 'text-stone-800'}`}>
                      {item.name}
                    </span>
                    <div className={`hidden sm:block flex-grow border-b border-dotted mx-2 relative top-[-4px] opacity-20 ${theme === 'dark' ? 'border-white' : 'border-stone-900'}`}></div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="text-amber-600 font-mono font-bold text-base whitespace-nowrap shrink-0">
                      {formatCurrency(item.price)}
                    </span>
                    
                    <button 
                      onClick={() => handleAction(item.name)}
                      className="p-1.5 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-md"
                      title="Adicionar"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
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
