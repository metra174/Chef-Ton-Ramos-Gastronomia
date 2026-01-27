
import React from 'react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const logoUrl = "https://i.imgur.com/chdgwr9.png";
  const instagramUrl = "https://www.instagram.com/chef_tonramos?igsh=MTJnMW9hNTZpMzhpeg==";
  const facebookUrl = "https://www.facebook.com/share/1AjzZZDRbZ/";
  const emailAddress = "tonramos29@gmail.com";

  return (
    <footer id="footer" className={`pt-24 pb-12 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-stone-100 text-stone-900 border-t border-stone-200'}`}>
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b pb-20 ${theme === 'dark' ? 'border-white/10' : 'border-stone-200'}`}>
        {/* Sobre */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <img 
              src={logoUrl} 
              alt="Chef Ton Ramos Logo" 
              className={`h-20 w-20 object-contain rounded-full p-1.5 ${theme === 'dark' ? 'bg-white/5' : 'bg-white shadow-md'}`}
            />
            <div className="flex flex-col">
                <h3 className="text-2xl font-serif font-bold leading-tight">Chef Ton Ramos</h3>
                <span className="text-amber-600 text-[10px] tracking-[0.3em] font-black uppercase">Gastronomia</span>
            </div>
          </div>
          <p className={`font-light leading-relaxed text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
            Especialista em criar momentos memoráveis através do sabor. Levamos a excelência gastronómica para o seu evento em Luanda.
          </p>
          <div className="flex space-x-6">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all hover:scale-110 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-stone-200 text-stone-900 shadow-sm'}`} title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all hover:scale-110 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-stone-200 text-stone-900 shadow-sm'}`} title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={`mailto:${emailAddress}`} className={`p-3 rounded-full transition-all hover:scale-110 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-stone-200 text-stone-900 shadow-sm'}`} title="E-mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        {/* Localização e Horário */}
        <div>
          <h4 className="text-xl font-serif font-bold mb-8 text-amber-600 uppercase tracking-widest">Informações</h4>
          <div className="space-y-6">
            <div>
                <p className={`text-xs uppercase font-bold tracking-widest mb-2 ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>Localização</p>
                <p className={`text-lg ${theme === 'dark' ? 'text-stone-300' : 'text-stone-700'}`}>Luanda / Maianga, Angola</p>
            </div>
            <div>
                <p className={`text-xs uppercase font-bold tracking-widest mb-2 ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>Antecedência</p>
                <p className={`text-lg italic font-light ${theme === 'dark' ? 'text-stone-300' : 'text-stone-700'}`}>Mínimo de 3 dias para encomendas.</p>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-xl font-serif font-bold mb-8 text-amber-600 uppercase tracking-widest">Atendimento</h4>
          <div className="space-y-6">
            <div>
                <p className={`text-xs uppercase font-bold tracking-widest mb-2 ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>Telemóvel</p>
                <a href="tel:932815377" className="text-4xl font-serif font-bold hover:text-amber-600 transition-colors block">932 815 377</a>
            </div>
            <div>
                <p className={`text-xs uppercase font-bold tracking-widest mb-2 ${theme === 'dark' ? 'text-stone-500' : 'text-stone-400'}`}>E-mail Oficial</p>
                <a href={`mailto:${emailAddress}`} className={`text-lg hover:text-amber-600 transition-colors ${theme === 'dark' ? 'text-stone-300' : 'text-stone-700'}`}>{emailAddress}</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`max-w-7xl mx-auto mt-12 text-center text-[10px] uppercase tracking-[0.3em] font-bold ${theme === 'dark' ? 'text-stone-700' : 'text-stone-400'}`}>
        <p>&copy; {new Date().getFullYear()} Chef Ton Ramos Gastronomia. Arte em Servir.</p>
      </div>
    </footer>
  );
};
