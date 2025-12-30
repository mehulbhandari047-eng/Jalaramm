
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex flex-col group">
        <div className="flex items-center space-x-1">
          <span className="text-3xl font-brand text-[#3B82F6] group-hover:text-blue-700 transition-colors">Jalaram</span>
        </div>
        <span className="text-[10px] font-black tracking-[0.2em] text-[#F97316] uppercase leading-none -mt-1 ml-1">Enterprises</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
              location.pathname === link.path ? 'text-blue-600 underline decoration-2 underline-offset-8' : 'text-slate-600'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="bg-[#F97316] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-slate-700 focus:outline-none p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-8 space-y-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-bold ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#3B82F6] text-white px-5 py-4 rounded-2xl text-center font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Inquiry Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
