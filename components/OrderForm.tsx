
import React, { useState, useMemo } from 'react';
import { CATERING_PACKAGES, PACOTES_CUBAS, MINI_CUBAS, ENTRADAS, GUARNACOES } from '../constants';
import { OrderState } from '../types';

interface OrderFormProps {
  theme: 'dark' | 'light';
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>;
}

export const OrderForm: React.FC<OrderFormProps> = ({ theme, order, setOrder }) => {
  const [step, setStep] = useState(1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-AO', { minimumFractionDigits: 0 }).format(val) + ' Kz';
  };

  const selectedPackage = useMemo(() => 
    CATERING_PACKAGES.find(p => p.id === order.selectedPackageId),
    [order.selectedPackageId]
  );

  const subtotalBuffet = (selectedPackage?.pricePerPerson || 0) * (order.peopleCount || 0);

  const allAvailableExtras = useMemo(() => [...PACOTES_CUBAS, ...MINI_CUBAS, ...ENTRADAS, ...GUARNACOES], []);

  const subtotalExtras = useMemo(() => {
    return Object.entries(order.extraItems).reduce((acc, [name, qty]) => {
      const item = allAvailableExtras.find(i => i.name === name);
      return acc + (item?.price || 0) * qty;
    }, 0);
  }, [order.extraItems, allAvailableExtras]);

  const total = subtotalBuffet + subtotalExtras;

  const updateExtra = (name: string, delta: number) => {
    setOrder(prev => {
      const current = prev.extraItems[name] || 0;
      const next = Math.max(0, current + delta);
      const newExtras = { ...prev.extraItems };
      if (next === 0) delete newExtras[name];
      else newExtras[name] = next;
      return { ...prev, extraItems: newExtras };
    });
  };

  const sendWhatsApp = () => {
    if (!order.customerName || !order.phoneNumber || !order.eventDate) {
      alert("Por favor, preencha todas as informações no Passo 1.");
      setStep(1);
      return;
    }

    const dateFormatted = order.eventDate.split('-').reverse().join('/');
    const extrasList = Object.entries(order.extraItems)
      .map(([name, qty]) => `${qty}x ${name}`)
      .join(', ');

    const message = `Olá, Chef Ton Ramos! Gostaria de fazer uma encomenda:
👤 Nome: ${order.customerName}
📞 Telefone: ${order.phoneNumber}
📅 Data: ${dateFormatted}
🍽️ Serviço: ${selectedPackage?.name || 'Apenas Extras'}
👥 Pessoas: ${order.peopleCount > 0 ? order.peopleCount : 'N/A'}
🥘 Extras: ${extrasList || 'Nenhum'}
💰 Valor Total Estimado: ${formatCurrency(total)}
Aguardo sua confirmação para prosseguir com o pagamento!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/244932815377?text=${encodedMessage}`, '_blank');
  };

  const isStep1Valid = order.customerName.trim() !== '' && order.phoneNumber.trim() !== '' && order.eventDate !== '';
  const isStep2Valid = order.selectedPackageId !== '' && order.peopleCount > 0;

  return (
    <section id="contato" className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 backdrop-blur-md ${theme === 'dark' ? 'bg-stone-950/90' : 'bg-stone-50/80'}`}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Protótipo do Formulário de Encomenda</span>
          <h2 className={`text-4xl md:text-6xl font-serif mb-6 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Formulário de Encomenda</h2>
          <div className="flex justify-center items-center space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-amber-600' : 'bg-stone-700/30'}`}></div>
            ))}
          </div>
        </div>

        <div className={`backdrop-blur-3xl border p-8 md:p-12 rounded-[2.5rem] shadow-2xl min-h-[550px] flex flex-col justify-between transition-all duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-stone-200 shadow-stone-200/50'}`}>
          
          <div className="flex-grow">
            {step === 1 && (
              <div className="animate-fade-in space-y-8">
                <div className="border-b pb-4 border-amber-600/20">
                    <h3 className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Passo 1: Identificação</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <label className={`block text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Nome</label>
                    <input 
                      type="text" 
                      value={order.customerName}
                      onChange={(e) => setOrder({...order, customerName: e.target.value})}
                      placeholder="[ Digite seu nome ]"
                      className={`w-full border rounded-2xl px-6 py-4 transition-all focus:border-amber-600 outline-none ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-900 placeholder:text-stone-400'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`block text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Número de Telefone</label>
                    <input 
                      type="tel" 
                      value={order.phoneNumber}
                      onChange={(e) => setOrder({...order, phoneNumber: e.target.value})}
                      placeholder="[ Digite seu contacto ]"
                      className={`w-full border rounded-2xl px-6 py-4 transition-all focus:border-amber-600 outline-none ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder:text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-900 placeholder:text-stone-400'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`block text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Data do Evento</label>
                    <input 
                      type="date" 
                      value={order.eventDate}
                      onChange={(e) => setOrder({...order, eventDate: e.target.value})}
                      className={`w-full border rounded-2xl px-6 py-4 transition-all focus:border-amber-600 outline-none ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-stone-50 border-stone-200 text-stone-900'}`}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="border-b pb-4 border-amber-600/20">
                    <h3 className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Passo 2: Escolha o seu Pacote (Buffet)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CATERING_PACKAGES.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`relative cursor-pointer p-6 rounded-2xl border transition-all flex items-start space-x-4 ${
                        order.selectedPackageId === pkg.id 
                          ? 'bg-amber-600/20 border-amber-600 ring-2 ring-amber-600/30' 
                          : (theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-white/30 shadow-sm' : 'bg-stone-50 border-stone-200 hover:border-stone-400')
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="package-choice"
                        checked={order.selectedPackageId === pkg.id}
                        onChange={() => setOrder({...order, selectedPackageId: pkg.id})}
                        className="w-6 h-6 mt-1 accent-amber-600 shrink-0"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline mb-1">
                          <p className={`text-xl font-serif font-bold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</p>
                          <p className="text-amber-600 font-bold">{formatCurrency(pkg.pricePerPerson)}/pessoa</p>
                        </div>
                        <p className={`text-sm italic font-light ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="space-y-4 flex-grow">
                    <label className={`block text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Quantidade de Pessoas</label>
                    <input 
                      type="number" 
                      min="0"
                      value={order.peopleCount || ''}
                      onChange={(e) => setOrder({...order, peopleCount: parseInt(e.target.value) || 0})}
                      placeholder="[ 00 ]"
                      className={`w-full max-w-[150px] border rounded-2xl px-8 py-4 transition-all text-3xl font-serif text-center focus:border-amber-600 outline-none ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-stone-50 border-stone-200 text-stone-900'}`}
                    />
                  </div>
                  <div className={`p-8 rounded-[2rem] text-right border-2 border-dashed ${theme === 'dark' ? 'bg-black/20 border-white/10' : 'bg-amber-50/50 border-amber-200'}`}>
                    <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>Subtotal Buffet</p>
                    <p className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
                        <span className="text-amber-600 font-bold">{formatCurrency(subtotalBuffet)}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-8">
                <div className="border-b pb-4 border-amber-600/20 flex justify-between items-end">
                    <h3 className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Passo 3: Adicionar Cubas Extras (Opcional)</h3>
                </div>
                <div className="max-h-[380px] overflow-y-auto pr-3 custom-scrollbar space-y-3">
                  {allAvailableExtras.map((item) => (
                    <div key={item.name} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-stone-50 border-stone-100 hover:bg-stone-200 shadow-sm'}`}>
                      <div>
                        <p className={`font-serif text-lg ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{item.name}</p>
                        <p className="text-amber-600 text-xs font-bold tracking-widest">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => updateExtra(item.name, -1)}
                          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : 'border-stone-300 text-stone-600 hover:bg-stone-100'}`}
                        >-</button>
                        <span className={`font-bold w-6 text-center font-mono text-lg ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{order.extraItems[item.name] || 0}</span>
                        <button 
                          onClick={() => updateExtra(item.name, 1)}
                          className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20"
                        >+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in space-y-8">
                <div className="border-b pb-4 border-amber-600/20">
                    <h3 className={`text-2xl font-serif ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>Passo 4: Resumo e Finalização</h3>
                </div>
                
                <div className={`p-8 md:p-10 rounded-[2.5rem] border shadow-2xl relative overflow-hidden ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-stone-50 border-stone-200 shadow-stone-200'}`}>
                    <div className="absolute top-0 right-0 p-4 bg-amber-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-bl-2xl">
                        Resumo
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-amber-600/10 pb-4">
                            <span className={`text-lg font-serif ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Serviço:</span>
                            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
                                {selectedPackage?.name || 'Apenas Extras'} ({order.peopleCount} pessoas)
                            </span>
                        </div>

                        {Object.entries(order.extraItems).length > 0 && (
                            <div className="space-y-3">
                                <span className={`text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>Itens Adicionais:</span>
                                <div className="space-y-2 pl-4 border-l-2 border-amber-600/20">
                                    {Object.entries(order.extraItems).map(([name, qty]) => (
                                        <div key={name} className="flex justify-between text-base italic">
                                            <span className={theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}>{qty}x {name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-8 border-t border-amber-600/40 flex flex-col md:flex-row justify-between items-center gap-4">
                            <span className={`text-2xl font-serif uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>TOTAL ESTIMADO</span>
                            <span className="text-4xl md:text-5xl font-serif text-amber-600 font-bold drop-shadow-xl">{formatCurrency(total)}</span>
                        </div>
                    </div>
                </div>

                <div className={`p-6 rounded-2xl border-l-4 border-amber-600 flex items-start space-x-4 text-sm ${theme === 'dark' ? 'bg-stone-900/50 text-stone-400' : 'bg-amber-50 text-stone-600 shadow-md'}`}>
                    <span className="text-2xl">📲</span>
                    <div>
                        <p className="font-bold mb-1">WhatsApp Prontinho!</p>
                        <p>Ao clicar no botão verde, abriremos o seu WhatsApp com o resumo completo para o Chef Ton Ramos.</p>
                    </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className={`w-full sm:w-auto px-12 py-5 border rounded-full transition-all uppercase tracking-widest font-bold text-xs flex items-center justify-center space-x-3 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200 shadow-sm'}`}
              >
                <span>&larr; Voltar</span>
              </button>
            )}
            <div className="flex-grow"></div>
            {step < 4 ? (
              <button 
                disabled={step === 1 ? !isStep1Valid : (step === 2 ? !isStep2Valid : false)}
                onClick={() => setStep(step + 1)}
                className={`w-full sm:w-auto px-14 py-5 rounded-full transition-all uppercase tracking-widest font-bold text-xs shadow-2xl ${
                  (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)
                    ? 'bg-stone-800 text-stone-600 cursor-not-allowed opacity-50' 
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30 transform hover:-translate-y-1'
                }`}
              >
                Próximo Passo &rarr;
              </button>
            ) : (
              <button 
                onClick={sendWhatsApp}
                className="w-full sm:w-auto px-12 py-6 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all shadow-2xl uppercase tracking-[0.1em] font-bold text-sm flex items-center justify-center space-x-4 shadow-green-900/40 transform hover:-translate-y-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
                <span>ENVIAR PEDIDO PARA O WHATSAPP DO CHEF</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
