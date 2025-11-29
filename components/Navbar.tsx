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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-navy-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
            <Wind className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-navy-900 tracking-tight">SenseFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium text-navy-600">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-primary-600 transition-colors relative group/link"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover/link:w-full"></span>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-lg shadow-soft hover:bg-navy-800 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Get Demo
          </button>
        </div>

        <button className="md:hidden p-2 text-navy-600 hover:bg-navy-50 rounded-lg transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 flex flex-col gap-3 border-t border-navy-100 shadow-xl absolute w-full">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left text-navy-600 hover:text-primary-600 font-medium py-3 px-2 hover:bg-navy-50 rounded-lg transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2 w-full py-3 bg-navy-900 text-white font-semibold rounded-lg shadow-md active:scale-95 transition-transform"
          >
            Get Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;