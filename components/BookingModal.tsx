
import React, { useState } from 'react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemType: 'tour' | 'car';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, itemName, itemType }) => {
  const [status, setStatus] = useState<'idle' | 'preparing' | 'redirecting'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1',
    message: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getBookingText = () => {
    return `Hi Amar Bhandari,\n\nI am interested in booking the ${itemName} (${itemType}).\n\n--- INQUIRY DETAILS ---\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDate: ${formData.date}\nGuests/Days: ${formData.guests}\nMessage: ${formData.message}\n\nSent from Jalaram Enterprises Website.`;
  };

  const processAction = (action: () => void) => {
    setStatus('preparing');
    setTimeout(() => {
      setStatus('redirecting');
      action();
      setTimeout(() => setStatus('idle'), 2000);
    }, 800);
  };

  const handleWhatsApp = () => {
    processAction(() => {
      const text = encodeURIComponent(getBookingText());
      window.open(`https://wa.me/${COMPANY_PHONE}?text=${text}`, '_blank');
    });
  };

  const handleEmail = () => {
    processAction(() => {
      const subject = encodeURIComponent(`Booking Inquiry: ${itemName}`);
      const body = encodeURIComponent(getBookingText());
      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getBookingText());
    alert("Inquiry details copied to clipboard! You can now paste this into any message.");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white rounded-[3rem] w-full max-w-xl shadow-3xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
        <div className="p-10 border-b flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-3xl font-serif font-black text-slate-900">Book Your Trip</h3>
            <p className="text-sm text-blue-600 font-black uppercase tracking-widest mt-1">{itemName}</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-200 rounded-2xl transition-all">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-10 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
              <input name="name" type="text" placeholder="Your Name" onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
              <input name="phone" type="tel" placeholder="Mobile No." onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
            <input name="email" type="email" placeholder="email@example.com" onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Date</label>
              <input name="date" type="date" onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">{itemType === 'tour' ? 'No. of Guests' : 'Rental Days'}</label>
              <select name="guests" onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-medium appearance-none">
                {[1,2,3,4,5,6,7,8,9,10,12,15].map(n => <option key={n} value={n}>{n} {itemType === 'tour' ? 'Person(s)' : 'Day(s)'}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Special Requests</label>
            <textarea name="message" placeholder="Tell us more about your needs..." onChange={handleInputChange} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all h-32 resize-none font-medium"></textarea>
          </div>
        </div>

        <div className="p-10 bg-slate-50/50 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={handleWhatsApp}
              disabled={status !== 'idle'}
              className={`flex-1 ${status === 'idle' ? 'bg-green-500 hover:bg-green-600' : 'bg-slate-400'} text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-green-200 active:scale-95`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.305-3.654l.361.214c1.554.921 3.321 1.408 5.122 1.409 5.451 0 9.886-4.435 9.888-9.886 0-2.641-1.03-5.123-2.894-6.988-1.865-1.865-4.348-2.895-6.99-2.895-5.45 0-9.884 4.436-9.884 9.888 0 2.144.559 4.231 1.62 6.018l-.235.375-1.065 3.891 3.991-1.048z"/></svg>
              <span>{status === 'idle' ? 'WhatsApp' : status === 'preparing' ? 'Preparing...' : 'Opening App...'}</span>
            </button>
            <button 
              onClick={handleEmail}
              disabled={status !== 'idle'}
              className={`flex-1 ${status === 'idle' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-400'} text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-blue-200 active:scale-95`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>{status === 'idle' ? 'Send Email' : status === 'preparing' ? 'Preparing...' : 'Opening App...'}</span>
            </button>
          </div>
          <button 
            onClick={handleCopy}
            className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors py-2"
          >
            Or Click to Copy Inquiry Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
