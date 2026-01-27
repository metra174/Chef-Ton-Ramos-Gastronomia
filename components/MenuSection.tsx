
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
    <section id={id} className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden border-b border-amber-600/10">
      {/* Coluna de Imagem / Atmosfera */}
      <div className="relative w-full lg:w-2/5 h-[40vh] lg:h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/40' : 'bg-white/20'}`}></div>
        </div>
        
        {/* Título da Seção - Integrado à imagem no Desktop */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center backdrop-blur-[2px]">
          <div className={`p-8 md:p-12 rounded-[2rem] backdrop-blur-xl border ${theme === 'dark' ? 'bg-stone-950/60 border-white/10' : 'bg-white/70 border-stone-200'}`}>
            <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Especialidade</span>
            <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
            {subtitle && <p className={`text-xs md:text-sm font-light tracking-[0.2em] uppercase opacity-70 ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Coluna do Menu - Lista Editorial */}
      <div className={`relative w-full lg:w-3/5 py-20 px-6 md:px-16 lg:px-24 flex flex-col justify-center ${theme === 'dark' ? 'bg-stone-950' : 'bg-stone-50'}`}>
        <div className="max-w-3xl w-full mx-auto">
          <div className="grid grid-cols-1 gap-y-12">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col transition-all duration-500"
              >
                <div className="flex justify-between items-end mb-2">
                  <h3 className={`text-xl md:text-3xl font-serif font-bold transition-colors group-hover:text-amber-600 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-900'}`}>
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-6">
                    <span className="text-amber-600 font-mono font-black text-lg md:text-2xl whitespace-nowrap">
                      {formatCurrency(item.price)}
                    </span>
                    <button 
                      onClick={() => handleAction(item.name)}
                      className="p-2 md:p-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-lg hover:scale-110 active:scale-95 group/btn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
                
                {/* Linha decorativa minimalista */}
                <div className={`w-full h-[1px] transition-all duration-700 ${theme === 'dark' ? 'bg-white/10 group-hover:bg-amber-600/50 group-hover:w-full' : 'bg-stone-200 group-hover:bg-amber-600/50'}`}></div>
                
                {/* Elemento de fundo sutil no hover */}
                <div className="absolute -inset-x-6 -inset-y-4 rounded-2xl bg-amber-600/0 group-hover:bg-amber-600/[0.03] transition-colors -z-10"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-dashed border-stone-800 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full border border-amber-600/30 flex items-center justify-center text-amber-600 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
             </div>
             <p className={`text-xs uppercase tracking-[0.2em] font-medium italic ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>
                Reserva obrigatória com 72 horas de antecedência.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
