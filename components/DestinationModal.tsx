
import React, { useEffect } from 'react';
import { X, MapPin, Info, ArrowRight, Compass } from 'lucide-react';
import { Destination, Tour } from '../types';
import { TOURS } from '../data';

interface DestinationModalProps {
  destination: Destination;
  onClose: () => void;
  onViewTours?: () => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose, onViewTours }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Get all unique spots from tours belonging to this destination
  const relatedTours = TOURS.filter(t => t.destinationId === destination.id);
  const allSpots = Array.from(new Set(relatedTours.flatMap(t => t.destinationsList || [])));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10">
      <div 
        className="absolute inset-0 bg-[#5D4037]/60 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl max-h-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#5D4037] transition-all shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="flex-grow overflow-y-auto modal-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-full min-h-[450px]">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 lg:hidden">
                <h2 className="text-3xl font-bold text-white">{destination.name}</h2>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="hidden lg:block mb-8">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">{destination.highlight}</span>
                <h2 className="text-4xl font-bold text-[#5D4037] leading-tight">{destination.name}</h2>
                <p className="text-[#D4AF37] font-medium italic mt-1">{destination.tagline}</p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Info size={18} className="text-[#8B6F47]" />
                    <h3 className="font-semibold text-[#5D4037] uppercase text-xs tracking-widest">Overview</h3>
                  </div>
                  <p className="text-[#A1887F] text-lg leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {allSpots.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Compass size={18} className="text-[#2A9D8F]" />
                      <h3 className="font-semibold text-[#5D4037] uppercase text-xs tracking-widest">Iconic Spots & Attractions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {allSpots.map((spot, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#5D4037] bg-[#F8F5F2] p-3 rounded-xl border border-[#8B6F47]/5">
                          <MapPin size={14} className="text-[#2A9D8F] flex-shrink-0" />
                          <span className="truncate">{spot}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6 bg-[#FCFAF8] rounded-[2rem] border border-[#8B6F47]/10">
                   <h4 className="text-[#5D4037] font-bold text-sm mb-2">Traveler Tip</h4>
                   <p className="text-xs text-[#A1887F] leading-relaxed">
                     Best visited during the dry season (November to May). We recommend booking at least {destination.toursCount > 3 ? '4-5 days' : '2-3 days'} to fully enjoy the activities available.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FCFAF8] p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#A1887F] font-bold uppercase tracking-widest mb-1">Adventure Awaits</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#5D4037]">{destination.toursCount}</span>
              <span className="text-lg text-[#A1887F]">Exclusive Packages</span>
            </div>
          </div>
          <button 
            onClick={onViewTours}
            className="w-full md:w-auto bg-[#8B6F47] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#6B4E3D] transition-all shadow-xl shadow-[#8B6F47]/20 flex items-center justify-center gap-3"
          >
            Browse Tours <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
