import React, { useState, useMemo } from 'react';
import { CARS, DESTINATIONS, TOURS } from '../data';
import { CarCard, DestinationCard } from './Home';
import { TourCard } from './ToursPage';
import { ResourceType, Tour, Destination, Car } from '../types';
import TourModal from '../components/TourModal';
import DestinationModal from '../components/DestinationModal';
import CarModal from '../components/CarModal';
import SEO from '../components/SEO';

interface ListingPageProps {
  type: ResourceType;
}

const TABS = [
  { id: 'all', label: 'All Tours' },
  { id: 'puerto-princesa', label: 'Puerto Princesa' },
  { id: 'el-nido', label: 'El Nido' },
  { id: 'coron', label: 'Coron' },
  { id: 'port-barton', label: 'Port Barton' },
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

  // Generate SEO metadata based on type
  const getSEOMetadata = () => {
    switch(type) {
      case 'car':
        return {
          title: 'Car Rental Palawan | Affordable Rates',
          description: 'Affordable car rental Palawan with self-drive options. Choose from compact cars, SUVs, and vans in Puerto Princesa, El Nido, and Coron.',
          keywords: 'car rental palawan, affordable car rental palawan, palawan car rental, rent a car palawan, el nido car rental, coron car rental, puerto princesa car rental, self drive car rental palawan',
          canonical: '/car-rental',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Car Rental',
            name: 'Car Rental Palawan',
            description: 'Affordable car rental Palawan with self-drive and driver options. Available in Puerto Princesa, El Nido, and Coron.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Lakbay Palawan',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Puerto Princesa',
                addressRegion: 'Palawan',
                addressCountry: 'Philippines'
              }
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Puerto Princesa'
              },
              {
                '@type': 'City',
                name: 'El Nido'
              },
              {
                '@type': 'City',
                name: 'Coron'
              }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Palawan Car Rental Fleet',
              itemListElement: CARS.slice(0, 10).map((car, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                  '@type': 'Product',
                  name: car.name,
                  description: car.description,
                  image: car.image
                },
                price: car.pricePerDay,
                priceCurrency: 'PHP',
                availability: 'https://schema.org/InStock'
              }))
            }
          }
        };
      case 'destination':
        return {
          title: 'Best Palawan Destinations | El Nido, Coron, Puerto Princesa Travel Guide',
          description: 'Discover the most beautiful destinations in Palawan. Explore El Nido, Coron, Puerto Princesa, and Balabac. Complete travel guide with tours and activities.',
          keywords: 'Palawan destinations, El Nido Palawan, Coron Palawan, Puerto Princesa, Palawan travel guide, Palawan islands, best places Palawan',
          canonical: '/destinations',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Palawan Destinations',
            description: 'Top destinations to visit in Palawan',
            itemListElement: DESTINATIONS.map((dest, index) => ({
              '@type': 'TouristDestination',
              position: index + 1,
              name: dest.name,
              description: dest.description,
              image: dest.image,
              address: {
                '@type': 'PostalAddress',
                addressLocality: dest.name,
                addressRegion: 'Palawan',
                addressCountry: 'Philippines'
              }
            }))
          }
        };
      case 'tour':
        return {
          title: 'Palawan Tour Packages | Island Hopping, El Nido, Coron Tours',
          description: 'Book the best Palawan tour packages including island hopping, El Nido tours, Coron tours, and Puerto Princesa Underground River. All-inclusive packages with expert guides.',
          keywords: 'Palawan tours, El Nido tours, Coron tours, island hopping Palawan, Palawan tour packages, Puerto Princesa tours, Palawan travel packages',
          canonical: '/tours',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Palawan Tour Packages',
            description: 'Curated tour packages for Palawan destinations',
            itemListElement: TOURS.slice(0, 10).map((tour, index) => ({
              '@type': 'TouristTrip',
              position: index + 1,
              name: tour.name,
              description: tour.itinerarySummary,
              image: tour.image,
              offers: {
                '@type': 'Offer',
                price: tour.price,
                priceCurrency: 'PHP',
                availability: 'https://schema.org/InStock'
              }
            }))
          }
        };
    }
  };

  const seoMetadata = getSEOMetadata();

  const renderContent = () => {
    switch(type) {
      case 'car':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CARS.map(car => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  onViewDetails={() => setSelectedCar(car)}
                />
              ))}
            </div>

            {/* Private Van Transfer Pricing Table */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">Additional Service</span>
                <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight mb-3">Private Van Transfer</h2>
                <p className="text-[#A1887F] max-w-2xl mx-auto">Door-to-door van service to popular destinations across Palawan</p>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-xl border border-[#5D4037]/5 overflow-hidden max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#5D4037]">
                        <th className="px-8 py-5 text-left text-white font-semibold tracking-wide text-base">Destination</th>
                        <th className="px-8 py-5 text-right text-white font-semibold tracking-wide text-base">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">El Nido</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱7,000.00</td>
                      </tr>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">Taytay</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱6,500.00</td>
                      </tr>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">San Vicente</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱6,500.00</td>
                      </tr>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">Roxas</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱6,000.00</td>
                      </tr>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">Narra</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱5,000.00</td>
                      </tr>
                      <tr className="border-b border-[#F8F5F2] hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">Brookes Point</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱6,000.00</td>
                      </tr>
                      <tr className="hover:bg-[#FCFAF8] transition-colors">
                        <td className="px-8 py-5 text-[#5D4037] font-medium">Buliluyan (Port to Balabac)</td>
                        <td className="px-8 py-5 text-right text-[#5D4037] font-bold text-lg">₱8,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#F8F5F2] px-8 py-4 text-center border-t border-[#5D4037]/10">
                  <p className="text-sm text-[#A1887F] italic">Prices are per van (not per person). Contact us for bookings and availability.</p>
                </div>
              </div>
            </div>
          </>
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
    <>
      <SEO
        title={seoMetadata.title}
        description={seoMetadata.description}
        keywords={seoMetadata.keywords}
        canonical={seoMetadata.canonical}
        structuredData={seoMetadata.structuredData}
      />
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
    </>
  );
};

export default ListingPage;