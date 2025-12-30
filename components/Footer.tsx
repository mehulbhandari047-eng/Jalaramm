
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_PHONE_ALT, COMPANY_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 px-6 relative overflow-hidden border-t-4 border-orange-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Identity & Philosophy */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-4xl font-brand text-white transition-colors group-hover:text-blue-400">Jalaram</span>
              <span className="text-[11px] font-black tracking-[0.4em] text-orange-500 uppercase leading-none -mt-1 ml-1">Enterprises</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              Daman's premier travel agency and logistics partner. Personally managed by <span className="text-white font-bold">Amar Bhandari</span>, ensuring every journey and delivery meets world-class standards of safety and punctuality.
            </p>
            <div className="flex space-x-5">
               <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/10 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>
          
          {/* Useful Navigation Links */}
          <div className="space-y-8 lg:pl-10">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs flex items-center">
              <span className="w-8 h-[2px] bg-blue-600 mr-3"></span> Services
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/tours" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Holiday Packages</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Luxury Car Hire</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Goods Transport</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Airport Transfers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Logistics Inquiry</Link></li>
            </ul>
          </div>

          {/* Contact & Local SEO Support */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs flex items-center">
              <span className="w-8 h-[2px] bg-orange-500 mr-3"></span> Contact info
            </h4>
            <ul className="space-y-5 text-sm font-semibold">
              <li className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col">
                  <span className="text-white leading-tight">{COMPANY_ADDRESS}</span>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs mt-1 hover:underline">Get Directions on Maps</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={`tel:${COMPANY_PHONE}`} className="text-white hover:text-blue-400 transition-colors">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-white hover:text-blue-400 transition-colors lowercase truncate max-w-[200px]">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Local CTA */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs flex items-center">
              <span className="w-8 h-[2px] bg-blue-600 mr-3"></span> Travel Alerts
            </h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Subscribe for exclusive Daman tour offers & logistics updates.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-blue-900/40">
                Join
              </button>
            </form>
            
            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5">
               <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-[8px] font-black uppercase tracking-tighter text-center">All India Permit</span>
               </div>
               <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-xl">🛡️</span>
                  <span className="text-[8px] font-black uppercase tracking-tighter text-center">Safe Goods</span>
               </div>
               <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-xl">🕒</span>
                  <span className="text-[8px] font-black uppercase tracking-tighter text-center">24/7 Support</span>
               </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Legal & Secondary Navigation */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Jalaram Enterprises - Travels & Transport. All rights reserved.
            </p>
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.1em]">
              Licensed Travel Agency | Managed by Amar Bhandari | Serving Nani Daman & Pan-India
            </p>
          </div>
          
          <div className="flex items-center space-x-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
             <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
             <span className="text-slate-800">|</span>
             <a href="https://wa.me/9979338355" className="text-blue-500 hover:text-blue-400 flex items-center space-x-1">
               <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
               <span>Official Support</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
