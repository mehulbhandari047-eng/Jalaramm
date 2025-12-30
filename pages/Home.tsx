
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TOURS, VEHICLES, COMPANY_PHONE, TRANSPORT_DETAILS, TRAVEL_SERVICES, TESTIMONIALS } from '../constants';
import { getTravelAdvise } from '../services/geminiService';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  return (
    <div className="relative max-w-5xl mx-auto px-6">
      <div className="overflow-hidden py-16">
        <div 
          className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0 text-center px-4 md:px-12">
              <div className="space-y-10">
                <div className="relative inline-block">
                   <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                   <img src={t.avatar} alt={t.name} className="relative w-28 h-28 rounded-full object-cover border-8 border-white shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500" />
                   <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   </div>
                </div>
                <div className="space-y-6">
                  <blockquote className="text-2xl md:text-4xl font-serif font-medium text-slate-800 leading-tight italic max-w-3xl mx-auto">
                    "{t.text}"
                  </blockquote>
                  <div className="pt-6">
                    <p className="text-2xl font-black text-slate-900 tracking-tight">{t.name}</p>
                    <p className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mt-2">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-slate-300 hover:text-blue-600 transition-all hidden lg:block hover:scale-125" aria-label="Previous">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-slate-300 hover:text-blue-600 transition-all hidden lg:block hover:scale-125" aria-label="Next">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="flex justify-center space-x-4 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-blue-600' : 'w-2 bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

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
        title="Best Travels & Transport in Daman" 
        description="Jalaram Enterprises: Daman's premium tour agency and Pan-India logistics service. Luxury cars, expert drivers, and safe goods transport managed by Amar Bhandari." 
      />
      
      {/* Floating WhatsApp for UX Conversion */}
      <a 
        href={`https://wa.me/${COMPANY_PHONE}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.305-3.654l.361.214c1.554.921 3.321 1.408 5.122 1.409 5.451 0 9.886-4.435 9.888-9.886 0-2.641-1.03-5.123-2.894-6.988-1.865-1.865-4.348-2.895-6.99-2.895-5.45 0-9.884 4.436-9.884 9.888 0 2.144.559 4.231 1.62 6.018l-.235.375-1.065 3.891 3.991-1.048z"/></svg>
      </a>

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover scale-105"
            alt="Jalaram Enterprises Premium Transport"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-slate-900/90" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-2xl">
               <span className="flex h-2 w-2 rounded-full bg-blue-400">
                 <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
               </span>
               <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Verified Agency • Amar Bhandari</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[1.1] tracking-tight">
              Premium <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Travels &</span> <br/>
              Transport
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-xl font-medium leading-relaxed">
              Daman's elite fleet for luxury tours and Pan-India logistics. Experience reliability personally overseen by Amar Bhandari.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/tours" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3">
                <span>Book a Tour</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black shadow-2xl transition-all">
                Inquire Transport
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
             <div className="glass p-10 rounded-[3rem] shadow-2xl space-y-8 animate-in slide-in-from-right-12 duration-1000">
                <h3 className="text-2xl font-serif font-bold text-slate-900">AI Travel Assistant</h3>
                <p className="text-slate-600 font-medium">Get instant recommendations for your Daman trip or logistics needs.</p>
                <form onSubmit={handleAiSearch} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="e.g. Best car for family of 6?"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-medium"
                  />
                  <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-colors shadow-lg">
                    {isLoadingAi ? 'Consulting...' : 'Get Advice'}
                  </button>
                </form>
                {aiResponse && (
                  <div className="bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-500 animate-in fade-in zoom-in-95">
                    <p className="text-slate-800 italic font-bold leading-relaxed">"{aiResponse}"</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Years Experience", val: "10+" },
             { label: "Happy Clients", val: "5000+" },
             { label: "Fleet Vehicles", val: "25+" },
             { label: "Pan India Reach", val: "100%" }
           ].map((stat, i) => (
             <div key={i} className="text-center space-y-1">
               <p className="text-4xl font-serif font-black text-blue-400">{stat.val}</p>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Featured Services with High-End UX */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
           <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Excellence in Motion</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900">World-Class Solutions</h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">From luxury passenger travel to heavy industrial logistics, we deliver perfection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRAVEL_SERVICES.slice(0,3).map((s, i) => (
            <div key={i} className="group relative bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
               <div className="relative z-10 space-y-8">
                  <div className="text-6xl">{s.icon}</div>
                  <h3 className="text-3xl font-black text-slate-900 leading-tight">{s.title}</h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">{s.description}</p>
                  <Link to="/contact" className="inline-flex items-center space-x-3 text-blue-600 font-black uppercase text-sm tracking-widest group-hover:translate-x-3 transition-transform">
                    <span>Book Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tours Spotlight */}
      <section className="bg-slate-50 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
             <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Explore India</span>
             <h2 className="text-5xl md:text-6xl font-serif font-black text-slate-900">Curated Experiences</h2>
          </div>
          <Link to="/tours" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl">
             View All Destinations
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOURS.map((tour) => (
            <article key={tour.id} className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-2">
                   <p className="text-orange-400 font-black text-[10px] uppercase tracking-widest">{tour.location}</p>
                   <h3 className="text-2xl font-black leading-tight drop-shadow-lg">{tour.title}</h3>
                   <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-white/70">{tour.duration}</span>
                      <button 
                        onClick={() => setSelectedItem({name: tour.title, type: 'tour'})}
                        className="bg-white/20 backdrop-blur-md p-3 rounded-xl hover:bg-white text-white hover:text-slate-900 transition-all"
                      >
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                      </button>
                   </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials Carousel */}
      <section className="py-32 bg-white" aria-labelledby="testimonials-heading">
        <div className="text-center space-y-4 mb-20">
           <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Customer Love</span>
           <h2 id="testimonials-heading" className="text-5xl md:text-7xl font-serif font-black text-slate-900">Trusted by Thousands</h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-none">Ready to start your <br/> next journey?</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium">Contact Amar Bhandari today for a personalized quote on travels or Pan-India transport.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a href={`https://wa.me/${COMPANY_PHONE}`} className="bg-green-500 hover:bg-green-400 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
                 Quick WhatsApp Chat
               </a>
               <Link to="/contact" className="bg-white text-blue-900 px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:-translate-y-2">
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
