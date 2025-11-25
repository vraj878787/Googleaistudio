import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-white pt-20 pb-10 border-t border-coffee-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div className="max-w-xs mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Coffee className="text-gold-400" size={32} />
              <span className="font-serif text-3xl font-bold">Cafe J’adore</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Where every cup tells a story and every meal is a memory. Experience the elegance of taste.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-gold-400 hover:text-coffee-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-gold-400 hover:text-coffee-900 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-gold-400 hover:text-coffee-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-400">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>123 Elegant Avenue, City</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@cafejadore.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Cafe J’adore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;