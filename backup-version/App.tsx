import React from 'react';
import { Wind } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import InteractiveProduct from './components/InteractiveProduct';
import VideoDemo from './components/VideoDemo';
import ProductVideo from './components/ProductVideo';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <InteractiveProduct />
      <VideoDemo />
      <ProductVideo />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">SenseFlow</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm">Smart climate control for Danish homes and care facilities. IoT-powered ventilation with Peltier cooling.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-slate-400">
                {['Home', 'Features', 'Product', 'About', 'Contact'].map(link => (
                  <button key={link} onClick={() => scrollTo(link.toLowerCase())} className="block hover:text-cyan-400 transition text-left w-full">{link}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>contact@senseflow.dk</p>
                <p>Odense, Denmark</p>
                <p>CVR: XX XX XX XX</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>© 2025 SenseFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;