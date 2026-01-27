
import React, { useState, useEffect, useRef } from 'react';

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

const GalleryImage: React.FC<{ 
  src: string; 
  idx: number; 
  theme: 'dark' | 'light'; 
  onClick: () => void 
}> = ({ src, idx, theme, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[2rem] cursor-pointer group shadow-2xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        idx === 0 ? 'md:col-span-2 md:row-span-2' : 
        idx === 5 ? 'md:col-span-2' : 
        idx === 8 ? 'md:row-span-2' : ''
      }`}
      style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
    >
      {/* Placeholder / Skeleton */}
      {!isLoaded && (
        <div className={`absolute inset-0 animate-pulse ${theme === 'dark' ? 'bg-stone-900' : 'bg-stone-200'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-8 h-8 border-2 border-amber-600/20 border-t-amber-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      <img 
        src={isVisible ? src : ''} 
        alt={`Prato ${idx + 1}`} 
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover:scale-110`}
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <span className="text-white font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Ver detalhes
        </span>
      </div>
    </div>
  );
};

export const GallerySection: React.FC<GallerySectionProps> = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className={`py-32 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-stone-950' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Portfólio Gastronómico</span>
          <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            Nossas <span className="text-amber-600 italic">Criações</span>
          </h2>
          <p className={`max-w-2xl mx-auto font-light text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
            Cada prato é uma obra de arte pensada para surpreender. Explore nossa galeria de eventos recentes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <GalleryImage 
              key={idx} 
              src={img} 
              idx={idx} 
              theme={theme} 
              onClick={() => setSelectedImage(img)} 
            />
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/95 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="max-w-5xl max-h-full overflow-hidden rounded-[2rem] shadow-[0_0_100px_rgba(217,119,6,0.25)] border border-white/10">
              <img 
                src={selectedImage} 
                className="w-full h-full object-contain select-none animate-scale-up"
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
