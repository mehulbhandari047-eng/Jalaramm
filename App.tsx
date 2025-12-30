
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={
              <div className="max-w-7xl mx-auto py-24 px-6 space-y-32">
                <div className="text-center space-y-6">
                  <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">Our Heritage</div>
                  <h1 className="text-5xl md:text-8xl font-serif font-black text-slate-900">Trust & Reliability</h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                    Led by <span className="text-blue-600 font-black italic">Amar Bhandari</span>, Jalaram Enterprises has been Daman's gold standard for integrated travels and transport logistics.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    {/* Visual representation of the split identity */}
                    <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                       <img src="https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Transport Logistics Warehouse - Jalaram Enterprises" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                       <div className="absolute bottom-10 left-10 right-10 text-white">
                          <p className="text-3xl font-serif font-black leading-tight">Professional Logistics Since Day One</p>
                       </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500 rounded-[3rem] p-8 text-white shadow-2xl flex flex-col justify-center transform rotate-12 hidden md:flex">
                       <p className="text-4xl font-black">10+</p>
                       <p className="text-[10px] font-black uppercase tracking-widest">Years of Excellence</p>
                    </div>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-serif font-black text-slate-900 leading-tight">Passenger Comfort & Goods Security</h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        What started as a specialized local transport unit has expanded into a multi-faceted agency. Under Amar Bhandari's vision, Jalaram Enterprises handles Pan-India logistics with the same precision we apply to luxury family vacations.
                      </p>
                    </div>

                    <div className="space-y-8">
                       <div className="flex items-start space-x-6">
                          <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900">Passenger Travel</h4>
                             <p className="text-slate-500 font-medium mt-1">Airport transfers, corporate staff transport, and curated leisure tours across India.</p>
                          </div>
                       </div>
                       <div className="flex items-start space-x-6">
                          <div className="bg-orange-500 text-white p-4 rounded-2xl shadow-lg">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900">Logistics & Warehousing</h4>
                             <p className="text-slate-500 font-medium mt-1">Pan-India tempo services for safe and timely delivery of goods and industrial supplies.</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center space-y-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <h2 className="text-4xl md:text-6xl font-serif font-black relative z-10">Safe. Reliable. On-Time.</h2>
                  <p className="text-2xl text-slate-400 max-w-2xl mx-auto italic font-medium leading-relaxed">
                    "At Jalaram Enterprises, we don't just move people and goods; we move trust. Every activity is personally overseen to ensure the highest standard of safety for our clients."
                  </p>
                  <div className="pt-6">
                    <p className="font-black text-orange-400 tracking-[0.3em] uppercase text-sm">- Amar Bhandari</p>
                    <p className="text-slate-500 font-bold text-xs mt-2 uppercase tracking-widest">Proprietor, Jalaram Enterprises</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
