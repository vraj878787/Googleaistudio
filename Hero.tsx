import React from 'react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixed attachment or absolute positioning */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Cafe Interior"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <FadeIn delay={200} direction="up">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-6 rounded">
            Established 2025
          </span>
        </FadeIn>

        <FadeIn delay={400} direction="up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight">
            Where Taste <br className="md:hidden" />
            Meets <span className="text-gold-400 italic">Elegance</span>
          </h1>
        </FadeIn>

        <FadeIn delay={600} direction="up">
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Beautiful ambience, delicious dishes, <br className="hidden md:block" />
            unforgettable service.
          </p>
        </FadeIn>

        <FadeIn delay={800} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold tracking-widest hover:bg-white hover:text-coffee-900 transition-all duration-300 w-full sm:w-auto min-w-[160px]"
            >
              VIEW MENU
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-400 text-coffee-900 font-bold tracking-widest border-2 border-gold-400 hover:bg-transparent hover:text-gold-400 transition-all duration-300 w-full sm:w-auto min-w-[160px]"
            >
              BOOK A TABLE
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;