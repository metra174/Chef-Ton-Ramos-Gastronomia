
import React from 'react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const logoUrl = "https://i.imgur.com/chdgwr9.png";

  return (
    <footer id="footer" className={`pt-20 pb-10 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-stone-100 text-stone-900 border-t border-stone-200'}`}>
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b pb-16 ${theme === 'dark' ? 'border-white/10' : 'border-stone-200'}`}>
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className={`h-16 w-16 object-contain rounded-full p-1 ${theme === 'dark' ? 'bg-white/5' : 'bg-white shadow-sm'}`}
            />
            <h3 className="text-3xl font-serif font-bold">Chef Ton Ramos</h3>
          </div>
          <p className={`font-light leading-relaxed mb-6 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
            Especialista em criar momentos memoráveis através do sabor. Levamos a excelência gastronómica para o seu evento ou para o aconchego do seu lar em Luanda.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ChefTonRamosGastronomia" className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-stone-200 text-stone-900 shadow-sm'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif mb-6 text-amber-600">Localização</h4>
          <p className={theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}>
            Luanda / Maianga<br />
            Angola
          </p>
          <div className="mt-8">
            <h4 className="text-xl font-serif mb-4 text-amber-600">Horário</h4>
            <p className={`italic font-light ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>Encomendas com 3 dias de antecedência.</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif mb-6 text-amber-600">Contatos & Reservas</h4>
          <p className={`font-light mb-2 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>Telemóvel:</p>
          <a href="tel:932815377" className="text-3xl font-serif hover:text-amber-600 transition-colors block mb-4">932 815 377</a>
          <p className={`mt-6 text-sm italic ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>
            * Garantimos a frescura e qualidade em cada cuba entregue.
          </p>
        </div>
      </div>
      
      <div className={`max-w-7xl mx-auto mt-10 text-center text-sm ${theme === 'dark' ? 'text-stone-600' : 'text-stone-400'}`}>
        <p>&copy; {new Date().getFullYear()} Chef Ton Ramos Gastronomia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
