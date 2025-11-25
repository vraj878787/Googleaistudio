import React from 'react';
import FadeIn from './ui/FadeIn';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/600/800?random=2" 
                  alt="Cafe J’adore Interior" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-100 rounded-full z-0 hidden md:block"></div>
              <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-gold-400 rounded-full z-0 hidden md:block opacity-30"></div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left" delay={200}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-12 bg-gold-400"></div>
                <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mb-8 leading-tight">
                Experience the <span className="italic text-gold-600">Perfect Blend</span> of <br/>Atmosphere & Taste
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={400}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Step into <span className="font-bold text-coffee-800">Cafe J’adore</span>, where a beautifully decorated interior meets a vibrant, welcoming vibe. Whether you're joining us for a relaxing breakfast or an elegant evening dinner, our atmosphere is designed to make you feel right at home.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our management and staff take personal care of every guest, ensuring attentive, friendly service that turns a simple meal into a memorable experience. With consistently excellent food quality, artful presentation, and great value, we promise a dining experience you’ll want to relive again and again.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={600}>
              <div className="flex flex-col sm:flex-row gap-8 mt-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-gold-400 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-coffee-900 text-xl">5-Star Quality</span>
                  <span className="text-gray-500 text-sm">Consistent Excellence</span>
                </div>
                <div className="w-px h-16 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-gold-600">2025</span>
                  <span className="font-bold text-coffee-900 text-xl">Established</span>
                  <span className="text-gray-500 text-sm">Serving Joy Daily</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;