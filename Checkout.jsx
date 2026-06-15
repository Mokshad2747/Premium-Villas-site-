import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  // If accessed directly without booking state
  if (!bookingDetails) {
    return (
      <div className="min-h-screen pt-32 px-margin-mobile flex flex-col items-center justify-center">
        <h1 className="font-headline-lg text-primary mb-4">No Booking Found</h1>
        <p className="font-body-md mb-8">Please start by selecting dates and a sanctuary.</p>
        <Link to="/book" className="bg-primary text-white px-8 py-3 rounded">Go to Booking</Link>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mocking payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-margin-mobile flex items-center justify-center bg-surface-container-lowest">
        <div className="bg-white p-12 rounded-xl shadow-2xl environmental-shadow text-center max-w-lg">
          <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
          <h1 className="font-headline-lg text-primary mb-4">Reservation Confirmed</h1>
          <p className="font-body-md text-on-surface-variant mb-8">
            Thank you, {formData.name}. Your sanctuary awaits. A detailed confirmation has been sent to {formData.email}.
          </p>
          <div className="bg-surface-container p-6 rounded-lg text-left mb-8 space-y-2">
            <p className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">Reservation Details</p>
            <p className="font-body-md"><strong>Dates:</strong> {bookingDetails.checkIn} to {bookingDetails.checkOut}</p>
            <p className="font-body-md"><strong>Sanctuary:</strong> {bookingDetails.villaType === 'overwater' ? 'Overwater Sanctuary' : 'Jungle Pavilion'}</p>
            <p className="font-body-md"><strong>Total Paid:</strong> ${bookingDetails.total.toLocaleString()}</p>
          </div>
          <Link to="/" className="inline-block bg-primary text-white font-label-sm px-8 py-4 rounded hover:bg-primary-container transition-colors duration-300 uppercase tracking-widest">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Payment Form */}
        <div className="md:col-span-7 bg-white p-8 md:p-10 rounded-xl shadow-2xl environmental-shadow border border-outline-variant/20">
          <div className="mb-8">
            <span className="font-label-sm text-label-sm text-tertiary-container tracking-widest uppercase mb-2 block">Secure Checkout</span>
            <h2 className="font-headline-lg text-primary">Payment Details</h2>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-surface border-b border-outline-variant pb-2 pt-2 focus:outline-none focus:border-primary font-body-md text-primary bg-transparent placeholder:text-outline-variant"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-surface border-b border-outline-variant pb-2 pt-2 focus:outline-none focus:border-primary font-body-md text-primary bg-transparent placeholder:text-outline-variant"
              />
            </div>

            <div className="pt-6 border-t border-outline-variant/20 relative">
              <div className="absolute top-0 right-0 pt-6">
                 <CreditCard className="text-outline" />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest">Card Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-2 focus:outline-none focus:border-primary font-body-md text-primary bg-transparent placeholder:text-outline-variant"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest">Expiry (MM/YY)</label>
                <input 
                  type="text" 
                  required
                  placeholder="12/25"
                  value={formData.expiry}
                  onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-2 focus:outline-none focus:border-primary font-body-md text-primary bg-transparent placeholder:text-outline-variant"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-widest">CVC</label>
                <input 
                  type="text" 
                  required
                  placeholder="123"
                  value={formData.cvc}
                  onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                  className="w-full bg-surface border-b border-outline-variant pb-2 pt-2 focus:outline-none focus:border-primary font-body-md text-primary bg-transparent placeholder:text-outline-variant"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full mt-8 bg-primary text-white font-label-sm px-8 py-4 rounded hover:bg-primary-container transition-colors duration-300 uppercase tracking-widest flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isProcessing ? (
                <span>Processing...</span>
              ) : (
                <>
                  <Lock size={16} /> Pay ${bookingDetails.total.toLocaleString()}
                </>
              )}
            </button>
            <p className="text-center font-label-sm text-[10px] text-outline mt-4 uppercase tracking-widest">
              Payments are secure and encrypted
            </p>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-5">
          <div className="bg-surface-container p-8 rounded-xl sticky top-28">
            <h3 className="font-headline-md text-primary mb-6">Reservation Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Check-in</p>
                  <p className="font-body-md text-primary">{bookingDetails.checkIn}</p>
                </div>
                <div className="text-right">
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Check-out</p>
                  <p className="font-body-md text-primary">{bookingDetails.checkOut}</p>
                </div>
              </div>
              
              <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                <p className="font-body-md text-primary">Sanctuary</p>
                <p className="font-body-md text-on-surface-variant">{bookingDetails.villaType === 'overwater' ? 'Overwater' : 'Jungle Pavilion'}</p>
              </div>
              
              <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                <p className="font-body-md text-primary">Guests</p>
                <p className="font-body-md text-on-surface-variant">{bookingDetails.guests}</p>
              </div>
            </div>

            <div className="flex justify-between items-end mt-8">
              <p className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant">Total Cost</p>
              <p className="font-headline-lg text-primary">${bookingDetails.total.toLocaleString()}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
