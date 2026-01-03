import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, Car as CarIcon, Search, ShieldCheck, Zap, Headphones, ArrowRight, ArrowUpRight, Fuel, Settings2, Users, Droplets } from 'lucide-react';
import { CARS, DESTINATIONS, TOURS } from '../data';
import { Car, Destination, Tour } from '../types';
import { TourCard } from './ToursPage';

const Home: React.FC = () => {
  // Curate top 3 best sellers representing different destinations
  // Specifically ensuring El Nido's best seller is included as requested
  const ppsBestSeller = TOURS.find(t => t.id === 'underground-river');
  const elNidoBestSeller = TOURS.find(t => t.id === 'el-nido-tour-a');
  const coronBestSeller = TOURS.find(t => t.id === 'coron-super-ultimate');

  // We take the top 3: El Nido (Requested), PPS (Iconic), and Coron
  const popularTours = [elNidoBestSeller, ppsBestSeller, coronBestSeller].filter(Boolean) as Tour[];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <header className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://github.com/bxxmzilla1/lakbay-palawan/blob/main/hero.jpg?raw=true" 
            alt="Palawan Coastal Road" 
            className="w-full h-full object-cover scale-105" 
            style={{ filter: 'brightness(0.85)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide mb-8 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0]"></span>
            Premium Self-Drive & Travel Services
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 drop-shadow-lg max-w-5xl leading-[0.95]">
            Explore Palawan <br /> on <span className="font-light italic font-serif">Your Terms</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light tracking-wide mb-12">
            Reliable car rentals and curated tours for the independent traveler.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/car-rental" 
              className="bg-[#8B6F47] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#6B4E3D] transition-all shadow-xl shadow-[#8B6F47]/20"
            >
              Browse Vehicles
            </Link>
            <Link 
              to="/tours" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </header>

      {/* Car Rentals Highlight */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#5D4037] tracking-tight">Choose Your Ride</h2>
            </div>
            <Link to="/car-rental" className="bg-[#5D4037] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 self-start md:self-auto">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CARS.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Highlight */}
      <section className="py-24 px-6 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#D4AF37] font-medium tracking-wider text-xs uppercase mb-2 block">Experience</span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#5D4037] tracking-tight">Tour Packages</h2>
            </div>
            <Link to="/tours" className="bg-[#8B6F47] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 self-start md:self-auto">
              View All Tours <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map(tour => (
              <TourCard key={tour.id} tour={tour} onViewDetails={() => window.location.hash = `/tour/${tour.id}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Highlight */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#2A9D8F] font-medium tracking-wider text-xs uppercase mb-2 block">Explore</span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#5D4037] tracking-tight">Curated Destinations</h2>
            </div>
            <Link to="/destinations" className="bg-[#5D4037] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 self-start md:self-auto hover:bg-[#4E342E] transition-colors">
              View All Destinations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map(dest => (
              <DestinationCard 
                key={dest.id} 
                destination={dest} 
                onViewDetails={() => window.location.hash = `/destination/${dest.id}`} 
                hideFooter={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Our Promise) */}
      <section className="py-24 px-6 bg-[#FCFAF8]">
        <div className="max-w-77xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight">Seamless Island Mobility</h2>
            </div>
            <p className="text-[#A1887F] max-w-md text-sm leading-relaxed">
              From reliable vehicles to organized tours, we handle the logistics so you can focus on the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FeatureCard icon={<CarIcon size={24} />} title="Premium Fleet" desc="Modern, clean, and well-maintained vehicles for safety." />
            <FeatureCard icon={<ShieldCheck size={24} />} title="Comprehensive Insurance" desc="Drive with peace of mind knowing you are covered." />
            <FeatureCard icon={<Zap size={24} />} title="Instant Booking" desc="Real-time confirmation for car rentals and tours." />
            <FeatureCard icon={<Headphones size={24} />} title="24/7 Support" desc="Always available assistance throughout your journey." />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group p-8 rounded-3xl bg-white border border-[#8B6F47]/10 hover:border-[#8B6F47]/30 transition-all hover:shadow-xl">
    <div className="w-12 h-12 rounded-2xl bg-[#F8F5F2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <div className="text-[#8B6F47]">{icon}</div>
    </div>
    <h3 className="text-lg font-medium text-[#5D4037] mb-2">{title}</h3>
    <p className="text-sm text-[#A1887F] leading-relaxed">{desc}</p>
  </div>
);

export const CarCard: React.FC<{ car: Car; onViewDetails?: () => void }> = ({ car, onViewDetails }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#5D4037]/5 hover:shadow-2xl transition-all group flex flex-col relative overflow-hidden">
      {/* Header section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-[#5D4037] tracking-tight mb-0.5">{car.name.split(' ')[0]} {car.name.split(' ')[1]}</h3>
          <p className="text-sm text-[#A1887F] font-medium uppercase tracking-wide">{car.type} • {car.seats} Seater</p>
        </div>
        {car.tags.map(tag => (
          <span key={tag} className="bg-[#E0F2F1] text-[#2A9D8F] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>

      {/* Image container */}
      <div className="relative mb-8 rounded-[1.8rem] overflow-hidden bg-gray-50 aspect-[4/3]">
        <img 
          src={car.image} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt={car.name} 
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.8rem]"></div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center gap-3">
          <Fuel size={16} className="text-[#A1887F]" />
          <span className="text-xs font-semibold text-[#5D4037]">{car.fuel}</span>
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center gap-3">
          <Settings2 size={16} className="text-[#A1887F]" />
          <span className="text-xs font-semibold text-[#5D4037]">{car.transmission.length > 5 ? 'Auto' : car.transmission}</span>
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center gap-3">
          <Users size={16} className="text-[#A1887F]" />
          <span className="text-xs font-semibold text-[#5D4037]">{car.seats} Pax</span>
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center gap-3">
          <Droplets size={16} className="text-[#A1887F]" />
          <span className="text-xs font-semibold text-[#5D4037]">Wash: ₱{car.carwashFee}</span>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8 px-1">
        <li className="flex items-center gap-3 text-sm text-[#A1887F] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#2A9D8F]"></span>
          {car.availability}
        </li>
        <li className="flex items-center gap-3 text-sm text-[#A1887F] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#2A9D8F]"></span>
          Strong AC
        </li>
        <li className="flex items-center gap-3 text-sm text-[#A1887F] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#2A9D8F]"></span>
          Comfortable Ride
        </li>
      </ul>

      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#5D4037]">₱{car.pricePerDay.toLocaleString()}</span>
          <span className="text-[10px] text-[#A1887F] font-bold uppercase tracking-widest mt-0.5">/ day published</span>
        </div>
        <div className="flex gap-2">
          {onViewDetails ? (
            <button 
              onClick={onViewDetails}
              className="bg-[#F8F5F2] text-[#5D4037] px-4 py-4 rounded-2xl text-sm font-bold border border-[#5D4037]/10 hover:bg-[#EFEBE9] transition-all"
            >
              Details
            </button>
          ) : (
            <Link 
              to={`/car/${car.id}`} 
              className="bg-[#F8F5F2] text-[#5D4037] px-4 py-4 rounded-2xl text-sm font-bold border border-[#5D4037]/10 hover:bg-[#EFEBE9] transition-all"
            >
              Details
            </Link>
          )}
          <Link 
            to="/contact" 
            className="bg-[#5D4037] text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-[#5D4037]/20 hover:bg-[#4E342E] transition-all transform active:scale-95"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DestinationCard: React.FC<{ 
  destination: Destination; 
  onViewDetails?: () => void;
  hideFooter?: boolean;
}> = ({ destination, onViewDetails, hideFooter }) => (
  <div 
    onClick={onViewDetails}
    className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer block"
  >
    <img src={destination.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={destination.name} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2 py-1 rounded">{destination.highlight}</span>
      </div>
      <h3 className="text-2xl font-medium text-white tracking-tight mb-1">{destination.name}</h3>
      <p className="text-white/80 text-xs font-light mb-6">{destination.tagline}</p>
      {!hideFooter && (
        <div className="flex items-center gap-2 text-white text-[10px] font-medium border-t border-white/20 pt-4">
          <span>View Details</span>
          <ArrowUpRight size={12} />
        </div>
      )}
    </div>
  </div>
);

export default Home;