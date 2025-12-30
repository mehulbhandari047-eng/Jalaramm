
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-8">
          <Link to="/" className="flex flex-col group">
            <span className="text-3xl font-brand text-blue-400">Jalaram</span>
            <span className="text-[10px] font-black tracking-[0.2em] text-[#F97316] uppercase leading-none -mt-1 ml-1">Enterprises</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 font-medium">
            Providing reliable travels and transport services in Daman and beyond since inception. Your safety and comfort are our top priority.
          </p>
          <div className="flex space-x-4">
             <div className="w-10 h-10 bg-slate-800 rounded-xl hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-all border border-slate-700">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </div>
             <div className="w-10 h-10 bg-slate-800 rounded-xl hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all border border-slate-700">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs border-l-4 border-orange-500 pl-3">Explore</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li><Link to="/tours" className="hover:text-blue-400 transition-colors">Best Selling Tours</Link></li>
            <li><Link to="/fleet" className="hover:text-blue-400 transition-colors">Fleet & Rental</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Booking Support</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Transport Logistics</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs border-l-4 border-blue-500 pl-3">Contact Details</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li className="flex items-start space-x-3">
              <span className="text-slate-500">Operation Managd By:</span>
              <span className="text-xs">Amar Bhandari</span>
            </li>
             <li className="flex items-start space-x-3">
              <span className="text-slate-500">Address:</span>
              <span className="text-xs">{COMPANY_ADDRESS}</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-slate-500">Call:</span>
              <span>{COMPANY_PHONE}</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-slate-500">Email:</span>
              <span className="lowercase truncate">{COMPANY_EMAIL}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs border-l-4 border-orange-500 pl-3">Newsletter</h4>
          <p className="text-xs text-slate-500 font-bold">Stay updated with travel offers</p>
          <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
            <input type="email" placeholder="Your Email" className="bg-transparent border-none outline-none px-4 py-2 text-sm flex-1 placeholder:text-slate-600" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] gap-6">
        <p>&copy; 2024 Jalaram Enterprises - Travels & Transport. All rights reserved.</p>
        <div className="flex space-x-8">
           <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
           <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
           <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
