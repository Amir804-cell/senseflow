import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import InteractiveProduct from './components/InteractiveProduct';
import VideoDemo from './components/VideoDemo';
import ProductVideo from './components/ProductVideo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-navy-100 text-navy-900 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <InteractiveProduct />
      <VideoDemo />
      <ProductVideo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;