import React, { useState } from 'react';
import { Wind, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = ['Home', 'Features', 'Product', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Wind className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">SenseFlow</span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm text-slate-600">
          {navItems.map(item => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())} 
              className="hover:text-cyan-600 transition font-medium"
            >
              {item}
            </button>
          ))}
        </div>
        
        <button className="md:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 flex flex-col gap-3 border-t border-slate-200 shadow-lg">
          {navItems.map(item => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())} 
              className="text-left text-slate-600 hover:text-cyan-600 font-medium py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;