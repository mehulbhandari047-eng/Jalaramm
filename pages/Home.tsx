import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, TRAVEL_SERVICES } from '../constants';
import { getTravelAdvise } from '../services/geminiService';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{name: string, type: 'tour' | 'car'} | null>(null);

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    setIsLoadingAi(true);
    const advise = await getTravelAdvise(aiQuery);
    setAiResponse(advise || "I'm ready to assist with your journey. How can I help?");
    setIsLoadingAi(false);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Daman's Best Travels & Transport | Jalaram Enterprises" 
        description="Book luxury tours in Daman, Goa, and Udaipur. Jalaram Enterprises offers premium car hire and Pan-India tempo logistics managed by Amar Bhandari. Top-rated reliable service." 
      />
      
      {/* Floating CTA Hub for UX/SEO signals */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
        <a 
          href={`tel:${COMPANY_PHONE}`}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
          aria-label="Call Amar Bhandari"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
        <a 
          href={`https://wa.me/${COMPANY_PHONE}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.305-3.654l.361.214c1.554.921 3.321 1.408 5.122 1.409 5.451 0 9.886-4.435 9.888-9.886 0-2.641-1.03-5.123-2.894-6.988-1.865-1.865-4.348-2.895-6.99-2.895-5.45 0-9.884 4.436-9.884 9.888 0 2.144.559 4.231 1.62 6.018l-.235.375-1.065 3.891 3.991-1.048z"/></svg>
        </a>
      </div>

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Jalaram Enterprises - Best Travel Agency in Daman"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <header className="space-y-10">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-2xl">
               <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">#1 Travels in Daman • Amar Bhandari</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-black text-white leading-tight tracking-tight">
              Premium <br/> 
              <span className="text-blue-400">Tours &</span> <br/>
              Transport
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-xl font-medium leading-relaxed">
              Serving Nani Daman, Moti Daman, and Pan-India. The most reliable fleet for luxury holidays and industrial logistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/tours" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all hover:-translate-y-1">
                Explore Packages
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all">
                Transport Inquiry
              </Link>
            </div>
          </header>

          <div className="hidden lg:block bg-white/10 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-8">
            <h2 className="text-3xl font-serif font-bold text-white">AI Trip Planner</h2>
            <p className="text-white/80 font-medium">Get instant travel advice or logistics quotes for Daman & beyond.</p>
            <form onSubmit={handleAiSearch} className="space-y-4">
              <input 
                type="text" 
                placeholder="e.g. Best car for Daman to Goa?"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="w-full bg-white/20 border-2 border-white/30 rounded-2xl px-6 py-4 outline-none focus:border-blue-400 transition-all text-white placeholder:text-white/60 font-medium"
              />
              <button className="w-full bg-blue-500 text-white py-4 rounded-2xl font-black hover:bg-blue-400 transition-colors shadow-lg">
                {isLoadingAi ? 'Consulting Gemini...' : 'Get Instant Advice'}
              </button>
            </form>
            {aiResponse && (
              <div className="bg-blue-600/30 p-6 rounded-2xl border-l-8 border-blue-400">
                <p className="text-white italic font-bold leading-relaxed">"{aiResponse}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Local Authority Section - CRITICAL FOR SEO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6 lg:col-span-1">
              <span className="text-orange-600 font-black uppercase tracking-widest text-sm">Local Daman Specialist</span>
              <h2 className="text-4xl font-serif font-black text-slate-900 leading-tight">Serving Nani Daman, Moti Daman & Dunetha</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                As a locally owned enterprise based on Dunetha Road, Jalaram Enterprises understands the unique transport needs of Daman's industrial zones and tourism hubs.
              </p>
              <ul className="space-y-3 font-bold text-slate-800">
                <li className="flex items-center space-x-2"><span className="text-blue-600">✓</span> <span>Nani Daman Airport Pickup</span></li>
                <li className="flex items-center space-x-2"><span className="text-blue-600">✓</span> <span>Moti Daman Fort Heritage Tours</span></li>
                <li className="flex items-center space-x-2"><span className="text-blue-600">✓</span> <span>Industrial Area Logistics Specialists</span></li>
              </ul>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80" className="rounded-3xl shadow-xl h-64 w-full object-cover" alt="Tourism in Nani Daman India" />
               <img src="https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&w=600&q=80" className="rounded-3xl shadow-xl h-64 w-full object-cover mt-8" alt="Transport Services in Daman Industrial Zone" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <header className="text-center space-y-6 mb-24">
           <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Premium Travel & Goods Solutions</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 leading-tight">Expert Transport Services</h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Reliable logistics and luxury passenger travel across India, personally overseen by Amar Bhandari.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRAVEL_SERVICES.slice(0,3).map((s, i) => (
            <article key={i} className="group bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
               <div className="text-6xl mb-8 group-hover:scale-125 transition-transform">{s.icon}</div>
               <h3 className="text-3xl font-black text-slate-900 mb-4">{s.title}</h3>
               <p className="text-slate-500 text-lg font-medium mb-8 leading-relaxed">{s.description}</p>
               <Link to="/contact" className="inline-flex items-center space-x-3 text-blue-600 font-black uppercase text-sm tracking-widest hover:translate-x-3 transition-transform">
                 <span>Book Now</span>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 pointer-events-none" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-none">Trust Your Journey <br/> with Amar Bhandari</h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">Join 5000+ satisfied clients who trust Jalaram Enterprises for Daman's best travels and transport.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a href={`https://wa.me/${COMPANY_PHONE}`} className="bg-green-500 hover:bg-green-400 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
                 WhatsApp Quick Booking
               </a>
               <Link to="/contact" className="bg-white text-slate-900 px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
                 Get A Quote
               </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        itemName={selectedItem?.name || ''} 
        itemType={selectedItem?.type || 'tour'} 
      />
    </div>
  );
};

export default Home;