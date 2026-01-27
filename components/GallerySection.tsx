
import React, { useState } from 'react';

interface GallerySectionProps {
  theme: 'dark' | 'light';
}

const images = [
  "https://i.imgur.com/LRpct6g.jpeg",
  "https://i.imgur.com/d3MPqbz.jpeg",
  "https://i.imgur.com/RK75A4r.jpeg",
  "https://i.imgur.com/2WfqmB6.jpeg",
  "https://i.imgur.com/ZyO2Cqc.jpeg",
  "https://i.imgur.com/fBUU6kI.jpeg",
  "https://i.imgur.com/nyJo6Z6.jpeg",
  "https://i.imgur.com/09ggnQa.jpeg",
  "https://i.imgur.com/Mli4nrn.jpeg",
  "https://i.imgur.com/jmen5De.jpeg",
  "https://i.imgur.com/izjHwCN.jpeg",
  "https://i.imgur.com/IgXlMFD.jpeg",
  "https://i.imgur.com/waKk7PK.jpeg",
  "https://i.imgur.com/e3aM6sk.jpeg",
  "https://i.imgur.com/vX4yrXm.jpeg"
];

export const GallerySection: React.FC<GallerySectionProps> = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className={`py-32 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-stone-950' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Portfólio Gastronómico</span>
          <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            Nossas <span className="text-amber-600 italic">Criações</span>
          </h2>
          <p className={`max-w-2xl mx-auto font-light text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
            Uma jornada visual pelos sabores e apresentações que tornam cada evento do Chef Ton Ramos uma experiência única.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative overflow-hidden rounded-[2rem] cursor-pointer group shadow-2xl transition-all duration-700 hover:scale-[0.98] ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : 
                idx === 5 ? 'md:col-span-2' : 
                idx === 8 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={img} 
                alt={`Prato ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Ver em detalhe
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/90 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="max-w-5xl max-h-full overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(217,119,6,0.2)]">
              <img 
                src={selectedImage} 
                className="w-full h-full object-contain select-none"
                alt="Visualização ampliada"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
