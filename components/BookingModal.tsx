
import React, { useState } from 'react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemType: 'tour' | 'car';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, itemName, itemType }) => {
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
    return `Hi, I'm interested in booking the ${itemName} ${itemType}.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date: ${formData.date}
Guests/Days: ${formData.guests}
Message: ${formData.message}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getBookingText());
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Booking Inquiry: ${itemName}`);
    const body = encodeURIComponent(getBookingText());
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Booking Inquiry</h3>
            <p className="text-sm text-slate-500 font-medium">{itemName}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Full Name</label>
              <input name="name" type="text" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Phone Number</label>
              <input name="phone" type="tel" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Email Address</label>
            <input name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Preferred Date</label>
              <input name="date" type="date" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">{itemType === 'tour' ? 'Guests' : 'Days'}</label>
              <select name="guests" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Special Requirements</label>
            <textarea name="message" onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-24 resize-none"></textarea>
          </div>
        </div>

        <div className="p-6 bg-slate-50 flex flex-col md:flex-row gap-3">
          <button 
            onClick={handleWhatsApp}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
          >
            <span className="text-lg">WhatsApp</span>
          </button>
          <button 
            onClick={handleEmail}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
          >
            <span className="text-lg">Email Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
