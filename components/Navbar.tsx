
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center space-x-1">
            <span className={`text-4xl font-brand transition-colors duration-500 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>Jalaram</span>
          </div>
          <span className={`text-[10px] font-black tracking-[0.3em] uppercase leading-none -mt-1 ml-1 transition-colors duration-500 ${
            scrolled ? 'text-orange-500' : 'text-orange-400'
          }`}>Enterprises</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-black uppercase tracking-[0.2em] transition-all hover:scale-110 ${
                location.pathname === link.path 
                  ? 'text-blue-500 underline decoration-4 underline-offset-8' 
                  : scrolled ? 'text-slate-700' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-3 rounded-2xl transition-all ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[101] bg-slate-900 flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in-95">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-4">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-4xl font-serif font-black tracking-tighter transition-all ${
                location.pathname === link.path ? 'text-blue-400 scale-110' : 'text-white hover:text-blue-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl"
            onClick={() => setIsOpen(false)}
          >
            Book a Service
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
