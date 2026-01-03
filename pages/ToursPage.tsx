
import React from 'react';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Tour } from '../types';

export const TourCard: React.FC<{ tour: Tour; onViewDetails?: () => void }> = ({ tour, onViewDetails }) => (
  <div className={`bg-white rounded-[2rem] p-5 border border-[#8B6F47]/10 hover:shadow-2xl transition-all group flex flex-col ${tour.isPopular ? 'ring-2 ring-[#8B6F47]' : ''}`}>
    <div className="relative mb-5 h-48 rounded-[1.5rem] overflow-hidden">
        <img src={tour.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={tour.name} />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${tour.isPopular ? 'bg-[#D4AF37] text-[#5D4037]' : 'bg-white/80 backdrop-blur-sm text-[#5D4037]'}`}>
            {tour.isPopular ? 'Best Seller' : tour.duration}
          </div>
          <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#A1887F] hover:text-red-400 transition-colors shadow-sm">
            <Heart size={16} />
          </button>
        </div>
    </div>
    
    <div className="px-1 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-[#5D4037] mb-2 leading-tight">{tour.name}</h3>
      <p className="text-xs text-[#A1887F] mb-5 line-clamp-2 leading-relaxed">{tour.itinerarySummary}</p>
      
      <div className="flex flex-col gap-2 mb-6 mt-auto">
         {tour.destinationsList && tour.destinationsList.length > 0 ? (
           <div className="flex items-center gap-2 text-[0.7rem] text-[#8B6F47] font-medium">
              <MapPin size={12} className="text-[#2A9D8F]" />
              <span className="truncate">{tour.destinationsList.length} Stops • {tour.destinationsList[0]}...</span>
           </div>
         ) : null}
         <div className="flex items-center gap-2 text-[0.7rem] text-[#8B6F47] font-medium">
            <Clock size={12} className="text-[#2A9D8F]" />
            <span>{tour.duration} Duration</span>
         </div>
      </div>
      
      <div className="flex items-center justify-between pt-5 border-t border-dashed border-[#D7CCC8]">
        <div className="flex flex-col">
          <span className="text-[9px] text-[#A1887F] uppercase tracking-[0.15em] font-bold">Start from</span>
          <span className="text-xl font-bold text-[#5D4037]">₱{tour.price.toLocaleString()}</span>
        </div>
        <button 
          onClick={onViewDetails}
          className="bg-[#5D4037] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#8B6F47] transition-all transform active:scale-95 shadow-md shadow-[#5D4037]/10"
        >
          Details
        </button>
      </div>
    </div>
  </div>
);

const ToursPage: React.FC = () => {
    return null; // Logic handled in ListingPage
};

export default ToursPage;
