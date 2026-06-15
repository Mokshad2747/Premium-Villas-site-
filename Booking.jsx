import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Home } from 'lucide-react';

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialVilla = queryParams.get('villa') || 'overwater';

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    villaType: initialVilla,
  });

  const prices = {
    overwater: 1200,
    jungle: 950,
  };

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const days = (end - start) / (1000 * 60 * 60 * 24);
    if (days <= 0) return 0;
    return days * prices[formData.villaType];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (calculateTotal() > 0) {
      navigate('/checkout', { state: { ...formData, total: calculateTotal() } });
    } else {
      alert('Please select valid dates.');
    }
  };

  return (
    <div className="bg-surface-container-low min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-tertiary-container tracking-widest uppercase mb-4 block">Reserve Your Sanctuary</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-6">Plan Your Escape</h1>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl environmental-shadow border border-outline-variant/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check-In */}
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <CalendarIcon size={16} /> Check-In
                </label>
                <input 
                  type="date" 
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-4 focus:outline-none focus:border-primary font-body-lg text-primary bg-transparent"
                />
              </div>

              {/* Check-Out */}
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <CalendarIcon size={16} /> Check-Out
                </label>
                <input 
                  type="date" 
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-4 focus:outline-none focus:border-primary font-body-lg text-primary bg-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Guests */}
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <Users size={16} /> Guests
                </label>
                <select 
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-4 focus:outline-none focus:border-primary font-body-lg text-primary bg-transparent"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Villa Type */}
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <Home size={16} /> Sanctuary Type
                </label>
                <select 
                  value={formData.villaType}
                  onChange={(e) => setFormData({...formData, villaType: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-4 focus:outline-none focus:border-primary font-body-lg text-primary bg-transparent"
                >
                  <option value="overwater">Overwater Sanctuary ($1,200/night)</option>
                  <option value="jungle">Jungle Pavilion ($950/night)</option>
                </select>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-surface-container p-6 rounded-lg mt-8 flex justify-between items-center">
              <div>
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">Estimated Total</span>
                <span className="font-headline-md text-primary">
                  ${calculateTotal().toLocaleString()}
                </span>
              </div>
              <button 
                type="submit" 
                className="bg-primary text-white font-label-sm px-8 py-4 rounded hover:bg-primary-container transition-colors duration-300 uppercase tracking-widest"
              >
                Proceed to Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
