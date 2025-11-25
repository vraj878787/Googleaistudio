import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';
import { GALLERY_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-coffee-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <FadeIn>
            <span className="text-gold-400 font-bold tracking-widest text-sm uppercase mb-3 block">Visual Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Our Gallery</h2>
          </FadeIn>
          <FadeIn delay={200} className="mt-4 md:mt-0">
            <p className="text-gray-400 max-w-md text-right md:text-left">
              A glimpse into the warmth, elegance, and delicious details that make Cafe J’adore special.
            </p>
          </FadeIn>
        </div>

        {/* Masonry-like grid using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <FadeIn key={img.id} delay={index * 100} direction="up">
              <div 
                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn className="mx-auto text-white mb-2" size={32} />
                    <p className="font-serif text-xl italic">{img.category}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Fullscreen" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;