import React from 'react';
import FadeIn from './ui/FadeIn';
import { REVIEWS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-coffee-50 relative">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">What Our Guests Say</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <FadeIn key={review.id} delay={index * 200} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-6 right-8 text-gold-100 group-hover:text-gold-200 transition-colors">
                  <Quote size={60} />
                </div>
                
                <div className="flex gap-1 mb-6 text-gold-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed flex-grow">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-serif font-bold text-gray-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900">{review.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Verified Guest</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;