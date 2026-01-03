import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, XCircle, Map, ClipboardList, Clock, Info, Tag } from 'lucide-react';
import { Tour } from '../types';

interface TourModalProps {
  tour: Tour;
  onClose: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ tour, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#5D4037]/60 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#5D4037] transition-all shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="flex-grow overflow-y-auto modal-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full min-h-[400px]">
              <img 
                src={tour.image} 
                alt={tour.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 lg:hidden">
                <h2 className="text-3xl font-bold text-white">{tour.name}</h2>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12">
              <div className="hidden lg:block mb-8">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">Tour Package</span>
                <h2 className="text-4xl font-bold text-[#5D4037] leading-tight">{tour.name}</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[#A1887F] text-lg leading-relaxed mb-4">
                    {tour.itinerarySummary}
                  </p>
                  
                  {/* Itemized Pricing Tiers */}
                  {tour.pricingTiers && (
                    <div className="mb-6 p-6 bg-[#FCFAF8] rounded-[2rem] border border-[#8B6F47]/10">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag size={18} className="text-[#D4AF37]" />
                        <h3 className="font-semibold text-[#5D4037]">Package Options:</h3>
                      </div>
                      <div className="space-y-3">
                        {tour.pricingTiers.map((tier, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-[#D7CCC8] last:border-0">
                            <span className="text-sm font-medium text-[#5D4037]">{tier.label}</span>
                            <span className="font-bold text-[#8B6F47]">₱{tier.price.toLocaleString()}/pax</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tour.notes && (
                    <div className="p-4 bg-[#FFF9F2] border border-[#D4AF37]/20 rounded-2xl text-sm text-[#8B6F47] italic flex items-start gap-3">
                      <Info size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{tour.notes}</span>
                    </div>
                  )}
                </div>

                {/* Destinations List */}
                {tour.destinationsList && tour.destinationsList.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Map size={20} className="text-[#2A9D8F]" />
                      <h3 className="text-lg font-semibold text-[#5D4037]">Itinerary Highlights:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinationsList.map((dest, i) => (
                        <span key={i} className="px-3 py-1 bg-[#F8F5F2] rounded-full text-xs text-[#5D4037] border border-[#8B6F47]/10">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ClipboardList size={18} className="text-[#2A9D8F]" />
                      <h3 className="font-semibold text-[#5D4037]">What's Included:</h3>
                    </div>
                    <ul className="space-y-2">
                      {tour.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#5D4037]">
                          <CheckCircle2 size={16} className="text-[#2A9D8F] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tour.exclusions && tour.exclusions.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#5D4037] mb-4">Exclusions:</h3>
                      <ul className="space-y-2">
                        {tour.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#A1887F]">
                            <XCircle size={16} className="text-red-300 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Fees */}
                {tour.environmentalFee && (
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#8B6F47]">Environmental / Lagoon Fee</span>
                    <span className="font-bold text-[#5D4037]">{tour.environmentalFee}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FCFAF8] p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#A1887F] font-bold uppercase tracking-widest mb-1">
               {tour.pricingTiers ? 'Prices from' : 'Total Rate Per Pax'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#5D4037]">₱{tour.price.toLocaleString()}</span>
              <span className="text-sm text-[#A1887F]">/ person</span>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="hidden md:flex flex-col items-end mr-2">
               <span className="text-xs text-[#2A9D8F] font-semibold flex items-center gap-1">
                 <Clock size={12} /> {tour.duration}
               </span>
               <span className="text-[10px] text-[#A1887F]">Daily Departure</span>
             </div>
             <Link to="/contact" className="flex-grow md:flex-grow-0 bg-[#8B6F47] text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#6B4E3D] transition-all shadow-xl shadow-[#8B6F47]/20 text-center">
                Book This Tour
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;