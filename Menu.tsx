import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';
import { MENU_ITEMS } from '../constants';

const CATEGORIES = ['All', 'Breakfast', 'Starters', 'Mains', 'Drinks'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3 block">Discover Taste</span>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mb-8">Our Menu</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-coffee-900 text-white shadow-lg scale-105' 
                    : 'bg-coffee-50 text-coffee-800 hover:bg-gold-100'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={index % 2 * 100} className="group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow w-full border-b border-gray-100 pb-6 sm:pb-0 sm:border-none">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-coffee-900 group-hover:text-gold-600 transition-colors font-serif">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-4 border-b border-dotted border-gray-300 hidden sm:block"></div>
                    <span className="text-lg font-bold text-gold-600">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 border border-coffee-900 text-coffee-900 font-bold hover:bg-coffee-900 hover:text-white transition-all duration-300 rounded"
          >
            BOOK A TABLE TO TASTE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;