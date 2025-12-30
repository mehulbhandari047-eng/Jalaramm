
import React, { useState } from 'react';
import { TOURS } from '../constants';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const categories = ['all', 'luxury', 'adventure', 'cultural', 'nature'];

  const filteredTours = filter === 'all' 
    ? TOURS 
    : TOURS.filter(t => t.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <SEO 
        title="Daman Tour Packages & Holiday Deals" 
        description="Discover curated holiday tours in Daman, Goa, Saputara, and Udaipur. Best travel experiences and group packages by Jalaram Enterprises." 
      />
      
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif font-black text-slate-900">Daman & India Holiday Tours</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Hand-picked luxury, cultural, and adventure experiences managed by Amar Bhandari in Daman.</p>
      </div>

      <nav className="flex flex-wrap justify-center gap-4" aria-label="Filter tours by category">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${
              filter === c ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {c}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <article key={tour.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <div className="relative h-64 overflow-hidden">
              <img src={tour.image} alt={`Beautiful scenery of ${tour.title} travel destination`} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-lg">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{tour.duration}</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">{tour.location}</p>
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight">{tour.title}</h2>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed line-clamp-2">{tour.description}</p>
              <div className="pt-4 border-t border-slate-50 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Inquire for packages</span>
                   <span className="text-blue-600 font-black">Amar Bhandari Overseen</span>
                </div>
                <button 
                  aria-label={`Book experience for ${tour.title}`}
                  onClick={() => setSelectedTour(tour.title)}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-600 transition-colors shadow-xl"
                >
                  Book This Experience
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <BookingModal 
        isOpen={!!selectedTour} 
        onClose={() => setSelectedTour(null)} 
        itemName={selectedTour || ''} 
        itemType="tour" 
      />
    </div>
  );
};

export default Tours;
