
import React, { useState, useMemo } from 'react';
import { VEHICLES } from '../constants';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

const VehicleCarousel: React.FC<{ images: string[], name: string }> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full group overflow-hidden rounded-[2rem]">
      {/* Image */}
      <img 
        src={images[currentIndex]} 
        alt={`${name} - View ${currentIndex + 1} for car hire in Daman`} 
        className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105" 
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            aria-label="Previous vehicle image"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            aria-label="Next vehicle image"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} 
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const Fleet: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    'all', 
    'SUV', 
    'Sedan', 
    'Van', 
    'Toyota', 
    'Mahindra', 
    'Hyundai', 
    'Maruti Suzuki', 
    'Innova', 
    'Fortuner'
  ];

  const filteredVehicles = useMemo(() => {
    if (filter === 'all') return VEHICLES;
    
    const searchTerm = filter.toLowerCase();
    return VEHICLES.filter(car => {
      const name = car.name.toLowerCase();
      const type = car.type.toLowerCase();
      
      return type === searchTerm || name.includes(searchTerm);
    });
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <SEO 
        title="Car Rental & Transport Tempo Fleet Daman" 
        description="Hire Toyota Innova, Fortuner, Swift Dzire, and Tempos for Pan-India transport. Best car rental rates in Daman by Amar Bhandari." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm">Our Extensive Fleet</span>
            <h1 className="text-5xl md:text-6xl font-serif font-black text-slate-900 leading-tight">Daman Car Rental & Transport Solutions.</h1>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Managed by <span className="text-slate-900 font-black">Amar Bhandari</span>, our fleet caters to both luxury passenger travel and heavy-duty Pan India logistics. 
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
             {['Pan India Delivery', 'Reliable & Safe', 'On-time Guaranteed', 'All Types of Tempos'].map(feature => (
               <div key={feature} className="flex items-center space-x-2 bg-orange-50 text-orange-700 px-5 py-2.5 rounded-xl font-bold text-sm border border-orange-100">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                 <span>{feature}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="relative group">
          <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=800&q=80" className="rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" alt="Professional transport vehicle fleet - Jalaram Enterprises" />
          <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-3xl font-serif font-black tracking-tight italic">"Your goods are in safe hands."</p>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-orange-400">- Amar Bhandari</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="space-y-6" aria-labelledby="fleet-filter-title">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 id="fleet-filter-title" className="text-2xl font-black text-slate-900">Find the Perfect Vehicle</h2>
          <nav className="flex flex-wrap gap-2" aria-label="Filter vehicles">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                  filter === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((car) => (
              <article key={car.id} className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 animate-in fade-in zoom-in-95 duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-slate-50 p-2 relative">
                  <VehicleCarousel images={car.images} name={car.name} />
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-black text-slate-900 leading-tight">{car.name}</h3>
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-tighter border border-blue-100 whitespace-nowrap ml-2">{car.type}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                    <div className="flex items-center space-x-2 text-slate-600 text-sm font-bold">
                       <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                       <span>{car.passengers} Seats</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600 text-sm font-bold">
                       <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                       <span>{car.transmission}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <div className="flex justify-between items-end">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inquire for rates</span>
                          <span className="text-lg font-black text-slate-900 leading-none">Custom Quotes</span>
                       </div>
                       <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       </div>
                    </div>
                    <button 
                      aria-label={`Book ${car.name} for hire`}
                      onClick={() => setSelectedCar(car.name)}
                      className="w-full bg-slate-900 text-white font-black px-6 py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-xl"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
               <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                 <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-2xl font-bold text-slate-900">No vehicles found</h3>
               <button onClick={() => setFilter('all')} className="text-blue-600 font-black uppercase tracking-widest text-sm hover:underline">Show All Vehicles</button>
            </div>
          )}
        </div>
      </section>

      {/* Specialty Transport Banner */}
      <section className="bg-[#F97316] rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-black">All Types of Tempo Available</h2>
            <p className="text-xl font-medium max-w-2xl mx-auto opacity-90">
              From small cargo vans to heavy-duty transport tempos, we provide Pan India delivery for all your business needs from Daman. 
            </p>
            <div className="flex justify-center pt-4">
               <button 
                  onClick={() => setSelectedCar("General Transport Tempo")}
                  className="bg-white text-orange-600 px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-slate-100 transition-all shadow-xl"
               >
                  Inquire for Transportation
               </button>
            </div>
         </div>
      </section>

      <BookingModal 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
        itemName={selectedCar || ''} 
        itemType="car" 
      />
    </div>
  );
};

export default Fleet;
