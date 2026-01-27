
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
      {/* Coluna de Imagem / Atmosfera - Ocupa 35% da tela no desktop */}
      <div className="relative w-full lg:w-[35%] h-[40vh] lg:h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-stone-950/40' : 'bg-white/20'}`}></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[1px]">
          <div className={`p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl border shadow-2xl ${theme === 'dark' ? 'bg-stone-950/60 border-white/10' : 'bg-white/70 border-stone-200'}`}>
            <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Especialidade</span>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
            {subtitle && <p className={`text-xs md:text-sm font-light tracking-[0.2em] uppercase opacity-70 ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Coluna do Menu - Grid Editorial de 2 Colunas que preenche a tela */}
      <div className={`relative w-full lg:w-[65%] py-24 px-6 md:px-16 lg:px-20 flex flex-col justify-center ${theme === 'dark' ? 'bg-stone-950' : 'bg-stone-50'}`}>
        <div className="max-w-6xl w-full mx-auto">
          {/* Grid de Itens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex justify-between items-end mb-3">
                  <h3 className={`text-lg md:text-xl font-serif font-bold transition-colors group-hover:text-amber-600 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-900'}`}>
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-amber-600 font-mono font-bold text-base md:text-lg whitespace-nowrap">
                      {formatCurrency(item.price)}
                    </span>
                    <button 
                      onClick={() => handleAction(item.name)}
                      className="p-2 rounded-full bg-amber-600/10 text-amber-600 border border-amber-600/20 hover:bg-amber-600 hover:text-white transition-all shadow-sm group/btn"
                      title="Adicionar à encomenda"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
                
                {/* Linha decorativa minimalista */}
                <div className={`w-full h-[1px] transition-all duration-700 ${theme === 'dark' ? 'bg-white/5 group-hover:bg-amber-600/30' : 'bg-stone-200 group-hover:bg-amber-600/30'}`}></div>
              </div>
            ))}
          </div>

          {/* Footer da Seção */}
          <div className="mt-20 pt-10 border-t border-amber-600/10 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-amber-600/30 flex items-center justify-center text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <p className={`text-[10px] uppercase tracking-[0.2em] font-medium italic ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>
                    Reserva obrigatória com 72 horas de antecedência.
                </p>
             </div>
             <a href="#contato" className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] hover:underline underline-offset-8">Solicitar Orçamento Personalizado</a>
          </div>
        </div>
      </div>
    </section>
  );
};
