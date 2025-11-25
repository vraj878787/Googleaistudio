import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900 selection:bg-gold-400 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Reviews />
      <Menu />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;