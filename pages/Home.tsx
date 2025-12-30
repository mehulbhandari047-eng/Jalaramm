
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
        title="Daman's Premium Travels & Transport | Jalaram Enterprises" 
        description="Book luxury tours in Daman, Goa, and Udaipur. Managed by Amar Bhandari, Jalaram Enterprises offers elite car rentals and Pan-India logistics." 
      />
      
      {/* Floating Action Hub */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
        <a 
          href={`https://wa.me/${COMPANY_PHONE}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
          aria-label="WhatsApp Us"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.305-3.654l.361.214c1.554.921 3.321 1.408 5.122 1.409 5.451 0 9.886-4.435 9.888-9.886 0-2.641-1.03-5.123-2.894-6.988-1.865-1.865-4.348-2.895-6.99-2.895-5.45 0-9.884 4.436-9.884 9.888 0 2.144.559 4.231 1.62 6.018l-.235.375-1.065 3.891 3.991-1.048z"/></svg>
        </a>
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover scale-105"
            alt="Premium Travel and Transport Daman"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-white" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-32">
          <div className="space-y-10 reveal">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-xl">
               <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
               <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Excellence Since 2012</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[1.05] tracking-tight">
              Crafting <br/> 
              <span className="text-orange-400">Luxury</span> <br/>
              Journeys.
            </h1>

            <p className="text-xl md:text-2xl text-slate-100 max-w-xl font-medium leading-relaxed drop-shadow-md">
              Daman's most trusted elite fleet for curated tours and Pan-India logistics, personally overseen by Amar Bhandari.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/tours" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center group">
                <span>Explore Tours</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all text-center">
                Transport Inquiry
              </Link>
            </div>
          </div>

          <div className="hidden lg:block reveal" style={{ animationDelay: '0.2s' }}>
             <div className="glass-dark p-12 rounded-[3.5rem] shadow-2xl space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-bold text-white">Travel Concierge</h3>
                  <span className="bg-blue-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest">AI Powered</span>
                </div>
                <p className="text-slate-300 font-medium">Get instant recommendations for your Daman stay or logistics needs.</p>
                <form onSubmit={handleAiSearch} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="e.g. Best car for family of 6?"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    className="w-full bg-white/10 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-500 font-medium"
                  />
                  <button className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black hover:bg-orange-600 transition-colors shadow-lg">
                    {isLoadingAi ? 'Consulting...' : 'Get Instant Advice'}
                  </button>
                </form>
                {aiResponse && (
                  <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-orange-500 animate-in fade-in zoom-in-95">
                    <p className="text-slate-100 italic font-bold leading-relaxed">"{aiResponse}"</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           {[
             { label: "Successful Tours", val: "5000+" },
             { label: "Fleet Vehicles", val: "25+" },
             { label: "India Coverage", val: "100%" },
             { label: "Safety Rating", val: "5.0" }
           ].map((stat, i) => (
             <div key={i} className="space-y-2 reveal" style={{ animationDelay: `${i * 0.1}s` }}>
               <p className="text-5xl font-serif font-black text-orange-400">{stat.val}</p>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <header className="text-center space-y-6 mb-24 reveal">
           <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Our Expertise</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900">Seamless Solutions</h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">From luxury car rentals for tourists to Pan-India industrial logistics.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRAVEL_SERVICES.map((s, i) => (
            <article key={i} className="group bg-slate-50 p-12 rounded-[3.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 reveal" style={{ animationDelay: `${i * 0.1}s` }}>
               <div className="text-7xl mb-10 group-hover:scale-110 transition-transform duration-500 inline-block">{s.icon}</div>
               <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{s.title}</h3>
               <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">{s.description}</p>
               <Link to="/contact" className="inline-flex items-center space-x-3 text-blue-600 font-black uppercase text-sm tracking-widest group-hover:translate-x-3 transition-all">
                 <span>Learn More</span>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Local Specialist Section (SEO booster) */}
      <section className="py-32 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
           <div className="space-y-8 reveal">
              <span className="text-orange-500 font-black uppercase tracking-widest text-sm">Daman's Local Experts</span>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-white leading-tight">Serving Nani Daman, Moti Daman & Industrial Hubs</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                Centrally located on Dunetha Road, we provide lightning-fast support for factory transport and heritage tours. Our knowledge of local routes ensures you never miss a flight or a deadline.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 {["School Falia Dunetha", "Daman Industrial Area", "Devka Beach Road"].map(loc => (
                   <span key={loc} className="bg-white/10 px-6 py-3 rounded-full text-white text-sm font-bold border border-white/10">{loc}</span>
                 ))}
              </div>
           </div>
           <div className="relative reveal" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80" 
                className="rounded-[4rem] shadow-3xl w-full h-[500px] object-cover border-8 border-white/5"
                alt="Local Daman Travel Service"
              />
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
                 <p className="text-2xl font-serif font-black text-slate-900">24/7 Support</p>
                 <p className="text-slate-500 font-bold">Reliable local expertise.</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl reveal">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-none">Ready for a <br/> Superior Journey?</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium">Contact Amar Bhandari today for a personalized premium transport quote.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a href={`https://wa.me/${COMPANY_PHONE}`} className="bg-green-500 hover:bg-green-400 text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
                 Quick WhatsApp
               </a>
               <Link to="/contact" className="bg-white text-blue-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
                 Get Custom Quote
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
