
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOURS, VEHICLES, COMPANY_PHONE, TRANSPORT_DETAILS, TRAVEL_SERVICES } from '../constants';
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
    setAiResponse(advise || "I'm here to help with your travel and transport needs. How can I assist you today?");
    setIsLoadingAi(false);
  };

  return (
    <div className="space-y-24 pb-20">
      <SEO 
        title="Travel & Transport Services in Daman" 
        description="Jalaram Enterprises by Amar Bhandari: Professional Transport, Logistics & Luxury Tours. Pan-India goods delivery and premium car rentals." 
      />
      
      {/* Hero Section */}
      <section id="main-content" className="relative h-[90vh] min-h-[750px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Using a high-quality online image that represents the dual-nature service */}
          <img 
            src="https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover brightness-[0.5]"
            alt="Jalaram Enterprises Transport and Logistics - Travel & Goods Services"
          />
          {/* Split Background Overlay - Visual separation for Travels vs Transport */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-blue-900/10" />
            <div className="flex-1 bg-orange-900/10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/95" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-xl">
               <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
               <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Managed by Amar Bhandari</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-tight drop-shadow-2xl">
              Jalaram <span className="text-blue-400">Enterprises</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
               <div className="flex flex-col items-center md:items-end">
                  <span className="text-blue-400 font-brand text-3xl md:text-4xl">Travels</span>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Passenger Services</span>
               </div>
               <div className="h-px w-20 md:h-12 md:w-px bg-white/20" />
               <div className="flex flex-col items-center md:items-start text-orange-500">
                  <span className="font-serif font-black text-3xl md:text-4xl uppercase tracking-tighter">Transport</span>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Logistics & Goods</span>
               </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Pan-India Tempo Transport & Luxury Tour Services. <br className="hidden md:block"/>
            <span className="text-orange-400 font-bold">Safe. Reliable. Personally Oversighted.</span>
          </p>
          
          <form onSubmit={handleAiSearch} className="max-w-2xl mx-auto pt-6">
            <div className="relative group">
              <label htmlFor="ai-inquiry" className="sr-only">Ask our travel assistant</label>
              <input 
                id="ai-inquiry"
                type="text" 
                placeholder="Need a Tempo for Logistics or a Car for Tours?"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="w-full pl-8 pr-36 py-6 rounded-2xl bg-white/95 backdrop-blur shadow-2xl focus:ring-4 focus:ring-blue-500/50 outline-none text-slate-800 text-lg transition-all"
              />
              <button 
                type="submit"
                disabled={isLoadingAi}
                className="absolute right-4 top-4 bottom-4 px-8 bg-slate-900 text-white rounded-xl font-black hover:bg-blue-600 transition-all disabled:opacity-50 shadow-lg"
              >
                {isLoadingAi ? '...' : 'Inquire'}
              </button>
            </div>
            {aiResponse && (
              <div className="mt-6 p-8 bg-white/95 backdrop-blur rounded-3xl shadow-2xl text-left border-l-[12px] border-orange-500 animate-in slide-in-from-top-4 duration-300">
                <p className="text-slate-800 leading-relaxed font-bold text-lg italic">"{aiResponse}"</p>
                <div className="mt-6 flex flex-wrap gap-4">
                   <a href={`https://wa.me/${COMPANY_PHONE}`} className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-transform">WhatsApp Amar Bhandari</a>
                   <Link to="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-transform">Get a Quote</Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl group hover:scale-[1.01] transition-transform">
            <h3 className="text-3xl font-brand mb-4">Travel Experiences</h3>
            <p className="opacity-80 mb-8 font-medium">Luxury tours and premium sedan rentals for your comfort in Daman and beyond.</p>
            <Link to="/tours" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest">Book a Trip</Link>
         </div>
         <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl group hover:scale-[1.01] transition-transform border border-slate-800">
            <h3 className="text-3xl font-serif font-black uppercase mb-4 tracking-tighter">Logistics & Goods</h3>
            <p className="opacity-80 mb-8 font-medium">Pan-India tempo services for safe delivery of industrial and commercial goods.</p>
            <Link to="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl">Inquire Transport</Link>
         </div>
      </section>

      {/* Featured Tours */}
      <section className="max-w-7xl mx-auto px-6" aria-labelledby="featured-tours-title">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-orange-500 font-black uppercase tracking-widest text-sm border-b-2 border-orange-200 pb-1">Handpicked Holidays</span>
            <h2 id="featured-tours-title" className="text-5xl font-serif font-black text-slate-900">Premium Tour Packages</h2>
          </div>
          <Link to="/tours" className="text-slate-900 font-black flex items-center space-x-2 group">
            <span>Explore All Destinations</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOURS.map((tour) => (
            <article key={tour.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={tour.image} alt={`${tour.title} in ${tour.location}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl shadow-lg border border-slate-100">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{tour.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-sm font-bold text-orange-400 mb-1">{tour.location}</p>
                    <h3 className="text-xl font-black leading-tight drop-shadow-md">{tour.title}</h3>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-slate-50/50">
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inquire for details</p>
                  <p className="text-lg font-black text-slate-900 leading-none">Best Price Guranteed</p>
                </div>
                <button 
                  aria-label={`Inquire about tour: ${tour.title}`}
                  onClick={() => setSelectedItem({name: tour.title, type: 'tour'})}
                  className="bg-[#F97316] text-white p-3.5 rounded-2xl hover:bg-orange-600 transition-all shadow-xl hover:scale-110 active:scale-95 ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            </article>
          ))}
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
