
import React, { useState } from 'react';
import { COMPANY_PHONE, COMPANY_PHONE_ALT, COMPANY_EMAIL, COMPANY_ADDRESS } from '../constants';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tour Package Booking',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getInquiryText = () => {
    return `Inquiry from Jalaram Enterprises Website:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(getInquiryText());
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`General Inquiry: ${formData.service}`);
    const body = encodeURIComponent(getInquiryText());
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  const faqs = [
    {
      question: "How do I book a tour or a transport service?",
      answer: "Booking is simple! You can click the 'Book Now' or 'Inquire Now' buttons on any service to start a direct WhatsApp or Email conversation with our team. You can also call us directly at +91 9979338355."
    },
    {
      question: "What areas do your transport services cover?",
      answer: "We provide Pan India transportation services. From our base in Daman, we handle logistics and goods delivery to any state across the country, ensuring safe and on-time arrival."
    },
    {
      question: "What types of vehicles are available in your fleet?",
      answer: "Our diverse fleet includes luxury SUVs like Toyota Fortuner and Innova Crysta, Sedans for city travel, and a variety of Tempos (from small vans to heavy-duty transport vehicles) for logistics."
    },
    {
      question: "What is your cancellation policy?",
      answer: "For tour bookings, we offer free cancellation up to 48 hours before the scheduled departure. For transport services, terms vary based on the distance and type of cargo. Please speak with our coordinator for specific details."
    },
    {
      question: "Are your transport services safe for fragile goods?",
      answer: "Absolutely. Under the personal oversight of Amar Bhandari, we implement strict safety protocols. Our drivers are highly experienced in Pan India routes and trained in handling various types of cargo securely."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      <SEO 
        title="Contact Jalaram Enterprises Daman | Book Tours & Transport" 
        description="Contact Amar Bhandari for travel bookings, car rentals, and Pan-India goods transport in Daman. Fast WhatsApp and Email support." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-black text-slate-900 leading-tight">Your Journey, Our Priority.</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Based in Daman, Jalaram Enterprises provides top-tier travel and transport solutions. Reach out to us for bookings or specialized logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href={`https://wa.me/${COMPANY_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="flex items-center p-6 bg-green-50 rounded-[2rem] border border-green-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-green-500 text-white p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 uppercase tracking-widest">WhatsApp</p>
                <p className="text-lg font-black text-slate-900">{COMPANY_PHONE}</p>
              </div>
            </a>

            <a 
              href={`mailto:${COMPANY_EMAIL}`}
              aria-label="Email Jalaram Enterprises"
              className="flex items-center p-6 bg-blue-50 rounded-[2rem] border border-blue-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-blue-600 text-white p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Email</p>
                <p className="text-sm font-black text-slate-900 truncate">Official Email</p>
              </div>
            </a>
          </div>

          <address className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-6 not-italic">
            <h3 className="text-2xl font-bold border-b border-slate-800 pb-4">Our Presence in Daman</h3>
            <div className="space-y-6 text-slate-400">
               <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg" aria-hidden="true">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="leading-relaxed">{COMPANY_ADDRESS}</span>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="bg-orange-600/20 p-2 rounded-lg" aria-hidden="true">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span>{COMPANY_PHONE} / {COMPANY_PHONE_ALT}</span>
               </div>
            </div>
          </address>
        </div>

        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative h-fit" aria-labelledby="inquiry-form-title">
          {submitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-white rounded-[3rem] z-10 animate-in fade-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Request Ready!</h2>
              <p className="text-slate-500 font-medium">Please confirm the message in the app that opens to send your inquiry.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">New Inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
              <div className="flex flex-col mb-4">
                <h2 id="inquiry-form-title" className="text-3xl font-black text-slate-900">Direct Travel Inquiry</h2>
                <div className="h-1.5 w-20 bg-orange-500 rounded-full mt-2" aria-hidden="true"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user-name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input id="user-name" name="name" type="text" onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user-phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input id="user-phone" name="phone" type="tel" onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="9979338355" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="user-service" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Needed</label>
                <select id="user-service" name="service" onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-blue-100 transition-all appearance-none">
                  <option>Tour Package Booking</option>
                  <option>Car Rental Service</option>
                  <option>Goods Transport & Logistics</option>
                  <option>Airport Pickup/Drop</option>
                  <option>Corporate Transportation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="user-message" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message / Requirements</label>
                <textarea id="user-message" name="message" onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-blue-100 transition-all h-32 resize-none" placeholder="Details about your travel dates, passengers, or cargo..." required></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 bg-green-500 text-white font-black py-4 rounded-2xl hover:bg-green-600 transition-all shadow-xl flex items-center justify-center space-x-2">
                  <span>Inquire via WhatsApp</span>
                </button>
                <button type="button" onClick={handleSendEmail} className="flex-1 bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center space-x-2">
                  <span>Inquire via Email</span>
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      {/* FAQ Section */}
      <section className="space-y-12" aria-labelledby="faq-title">
        <div className="text-center space-y-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Quick Answers</span>
          <h2 id="faq-title" className="text-4xl md:text-5xl font-serif font-black text-slate-900">Travel & Transport FAQs</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Everything you need to know about our tours, transport, and booking policies in Daman.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                openFaq === index ? 'border-blue-500 shadow-xl' : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-xl font-bold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openFaq === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                hidden={openFaq !== index}
                className={`px-8 transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-64 py-6 opacity-100 border-t border-slate-50' : 'max-h-0 py-0 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-slate-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
           <p className="text-slate-500 font-medium">Still have questions for Amar Bhandari?</p>
           <button 
             onClick={() => window.open(`https://wa.me/${COMPANY_PHONE}`, '_blank')}
             className="mt-4 text-blue-600 font-black flex items-center justify-center space-x-2 mx-auto hover:underline"
           >
             <span>Chat with our support team on WhatsApp</span>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
