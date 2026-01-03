import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Users, Fuel, Settings2, Droplets, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { Car } from '../types';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
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
            <div className="relative h-[300px] lg:h-full min-h-[400px] bg-gray-50 flex items-center justify-center p-8">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-auto max-h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute top-8 left-8 flex gap-2">
                {car.tags.map(tag => (
                  <span key={tag} className="bg-[#E0F2F1] text-[#2A9D8F] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">{car.type} Rental</span>
                <h2 className="text-4xl font-bold text-[#5D4037] leading-tight">{car.name}</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[#5D4037] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Info size={16} className="text-[#8B6F47]" /> Overview
                  </h3>
                  <p className="text-[#A1887F] text-lg leading-relaxed mb-6">
                    {car.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <SpecItem icon={<Users size={20} />} label="Capacity" value={`${car.seats} Seaters`} />
                  <SpecItem icon={<Fuel size={20} />} label="Fuel Type" value={car.fuel} />
                  <SpecItem icon={<Settings2 size={20} />} label="Transmission" value={car.transmission} />
                  <SpecItem icon={<ShieldCheck size={20} />} label="Service" value={car.availability} />
                </div>

                {/* Features List */}
                <div className="pt-4">
                  <h3 className="text-sm font-bold text-[#5D4037] uppercase tracking-widest mb-4">Rental Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FeatureItem text="Unlimited Mileage" />
                    <FeatureItem text="Well-maintained Unit" />
                    <FeatureItem text="Comprehensive Insurance" />
                    <FeatureItem text="Strong Air-Conditioning" />
                    <FeatureItem text="Clean & Sanitized Interior" />
                    <FeatureItem text={`Carwash Fee: ₱${car.carwashFee}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FCFAF8] p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#A1887F] font-bold uppercase tracking-widest mb-1">Daily Rental Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#5D4037]">₱{car.pricePerDay.toLocaleString()}</span>
              <span className="text-sm text-[#A1887F]">/ day</span>
            </div>
          </div>
          <Link to="/contact" className="w-full md:w-auto bg-[#8B6F47] text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#6B4E3D] transition-all shadow-xl shadow-[#8B6F47]/20 text-center">
            Book This Car Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const SpecItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4 bg-[#F8F5F2] p-4 rounded-2xl border border-[#8B6F47]/5 shadow-sm">
    <div className="text-[#8B6F47]">{icon}</div>
    <div>
      <span className="block text-[9px] text-[#A1887F] uppercase tracking-widest font-bold">{label}</span>
      <span className="text-sm font-semibold text-[#5D4037]">{value}</span>
    </div>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm text-[#5D4037]">
    <CheckCircle2 size={16} className="text-[#2A9D8F]" />
    <span>{text}</span>
  </div>
);

export default CarModal;