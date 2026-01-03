import React, { useState, useMemo } from 'react';
import { CARS, DESTINATIONS, TOURS } from '../data';
import { CarCard, DestinationCard } from './Home';
import { TourCard } from './ToursPage';
import { ResourceType, Tour, Destination, Car } from '../types';
import TourModal from '../components/TourModal';
import DestinationModal from '../components/DestinationModal';
import CarModal from '../components/CarModal';

interface ListingPageProps {
  type: ResourceType;
}

const TABS = [
  { id: 'all', label: 'All Tours' },
  { id: 'puerto-princesa', label: 'Puerto Princesa' },
  { id: 'el-nido', label: 'El Nido' },
  { id: 'coron', label: 'Coron' },
  { id: 'balabac', label: 'Balabac' }
];

const ListingPage: React.FC<ListingPageProps> = ({ type }) => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const getTitle = () => {
    switch(type) {
      case 'car': return 'Premium Rental Fleet';
      case 'destination': return 'Explore Palawan';
      case 'tour': return 'Our Signature Tours';
    }
  };

  const getSubtitle = () => {
    switch(type) {
      case 'car': return 'Rent a modern vehicle for self-drive or with a driver.';
      case 'destination': return 'Discover the most iconic spots across the archipelago.';
      case 'tour': return 'Curated experiences designed by local experts.';
    }
  };

  const filteredTours = useMemo(() => {
    if (type !== 'tour') return [];
    return activeTab === 'all' 
      ? TOURS 
      : TOURS.filter(tour => tour.destinationId === activeTab);
  }, [activeTab, type]);

  const renderContent = () => {
    switch(type) {
      case 'car':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map(car => (
              <CarCard 
                key={car.id} 
                car={car} 
                onViewDetails={() => setSelectedCar(car)}
              />
            ))}
          </div>
        );
      case 'destination':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DESTINATIONS.map(dest => (
              <DestinationCard 
                key={dest.id} 
                destination={dest} 
                onViewDetails={() => setSelectedDestination(dest)} 
              />
            ))}
          </div>
        );
      case 'tour':
        return (
          <div className="space-y-12">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeTab === tab.id
                      ? 'bg-[#8B6F47] text-white border-[#8B6F47] shadow-lg shadow-[#8B6F47]/20'
                      : 'bg-white text-[#8B6F47] border-[#8B6F47]/20 hover:border-[#8B6F47]/50 hover:bg-[#F8F5F2]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredTours.map(tour => (
                <TourCard 
                  key={tour.id} 
                  tour={tour} 
                  onViewDetails={() => setSelectedTour(tour)} 
                />
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#A1887F]">No tours found for this destination.</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Dark Theme Banner */}
      <div className="bg-[#5D4037] pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#D4AF37] font-medium tracking-[0.2em] text-xs uppercase mb-3 block">Lakbay Palawan</span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">{getTitle()}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{getSubtitle()}</p>
        </div>
      </div>

      <div className="py-24 px-6 max-w-7xl mx-auto">
        {renderContent()}
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <TourModal 
          tour={selectedTour} 
          onClose={() => setSelectedTour(null)} 
        />
      )}

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <DestinationModal 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)}
          onViewTours={() => {
            setSelectedDestination(null);
            window.location.hash = '/tours';
          }}
        />
      )}

      {/* Car Detail Modal */}
      {selectedCar && (
        <CarModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default ListingPage;