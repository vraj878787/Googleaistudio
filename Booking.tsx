import React from 'react';
import FadeIn from './ui/FadeIn';
import { Phone, MapPin, Clock } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-coffee-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <FadeIn>
              <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3 block">Reservations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mb-8">Book a Table</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether it's a romantic dinner, a family breakfast, or a casual meet-up, we are ready to serve you. Book your table now to ensure the best spot.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full text-gold-600 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <button className="text-gold-600 font-bold text-sm mt-1 hover:underline">CALL NOW</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full text-gold-600 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Location</h4>
                    <p className="text-gray-600">123 elegant Avenue, Food District, City, Country</p>
                    <button className="text-gold-600 font-bold text-sm mt-1 hover:underline">GET DIRECTIONS</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full text-gold-600 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 08:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 09:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12">
            <FadeIn delay={200} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                    <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Guests</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors">
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} placeholder="Special requests..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-coffee-900 text-white font-bold tracking-widest rounded-lg hover:bg-gold-500 hover:text-coffee-900 transition-all duration-300 shadow-lg">
                  CONFIRM BOOKING
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;