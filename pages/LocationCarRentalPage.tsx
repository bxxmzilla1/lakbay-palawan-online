import React, { useState } from 'react';
import { CARS } from '../data';
import { CarCard } from './Home';
import { Car } from '../types';
import CarModal from '../components/CarModal';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LocationCarRentalPageProps {
  location: 'el-nido' | 'coron' | 'puerto-princesa';
}

const LOCATION_DATA = {
  'el-nido': {
    name: 'El Nido',
    displayName: 'El Nido',
    tagline: 'Explore limestone cliffs and pristine beaches with your own wheels',
    description: 'Rent a car in El Nido, Palawan for ultimate freedom exploring hidden lagoons, secret beaches, and scenic coastal roads. Self-drive and with-driver options available.',
    highlights: ['Access to Nacpan Beach', 'Scenic coastal drives', 'Island hopping tours', 'Beach exploration'],
    geo: { latitude: '11.1949', longitude: '119.4013' }
  },
  'coron': {
    name: 'Coron',
    displayName: 'Coron',
    tagline: 'Navigate island paradise at your own pace',
    description: 'Car rental in Coron, Palawan with flexible pickup options. Perfect for exploring Maquinit Hot Springs, Kayangan Lake viewpoints, and town attractions at your own pace.',
    highlights: ['Maquinit Hot Springs access', 'Town center convenience', 'Port transfers', 'Mountain viewpoints'],
    geo: { latitude: '12.0058', longitude: '120.2102' }
  },
  'puerto-princesa': {
    name: 'Puerto Princesa',
    displayName: 'Puerto Princesa',
    tagline: 'Your gateway to Palawan adventures starts here',
    description: 'Puerto Princesa car rental with airport pickup available. Explore the Underground River, Honda Bay, and drive through scenic countryside to El Nido or Port Barton.',
    highlights: ['Airport pickup/drop-off', 'Underground River tours', 'Honda Bay access', 'Cross-island drives'],
    geo: { latitude: '9.7392', longitude: '118.7353' }
  }
};

const LocationCarRentalPage: React.FC<LocationCarRentalPageProps> = ({ location }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const locationInfo = LOCATION_DATA[location];

  // Generate location-specific SEO metadata
  const getSEOMetadata = () => {
    const geoCoords = locationInfo.geo;
    
    return {
      title: `Car Rental in ${locationInfo.displayName}, Palawan`,
      description: locationInfo.description,
      keywords: `car rental ${locationInfo.name.toLowerCase()}, ${locationInfo.name.toLowerCase()} car rental, rent a car ${locationInfo.name.toLowerCase()} palawan, ${locationInfo.name.toLowerCase()} palawan car hire, self drive ${locationInfo.name.toLowerCase()}`,
      canonical: `/car-rental/${location}`,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CarRental',
        '@id': `https://www.lakbaypalawan.online/car-rental/${location}`,
        name: `Lakbay Palawan Car Rental - ${locationInfo.displayName}`,
        description: locationInfo.description,
        url: `https://www.lakbaypalawan.online/#/car-rental/${location}`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.lakbaypalawan.online/#organization',
          name: 'Lakbay Palawan',
          sameAs: 'https://share.google/WGd7diPqVe0W7dkfq',
          url: 'https://www.lakbaypalawan.online',
          telephone: '+63 993 538 6606',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Puerto Princesa',
            addressRegion: 'Palawan',
            addressCountry: 'PH'
          }
        },
        areaServed: {
          '@type': 'City',
          name: locationInfo.displayName,
          containedInPlace: {
            '@type': 'State',
            name: 'Palawan',
            containedInPlace: {
              '@type': 'Country',
              name: 'Philippines'
            }
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: geoCoords.latitude,
            longitude: geoCoords.longitude
          }
        },
        serviceType: 'Car Rental',
        serviceOutput: {
          '@type': 'Product',
          name: `Car Rentals in ${locationInfo.displayName}`,
          category: 'Vehicle Rental',
          description: `Self-drive and with-driver car rental services in ${locationInfo.displayName}`
        },
        offers: [
          {
            '@type': 'Offer',
            name: `Car Rental Services in ${locationInfo.displayName}`,
            description: `Self-drive and with-driver car rental services in ${locationInfo.displayName}`,
            priceCurrency: 'PHP',
            price: '1500',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1500',
              priceCurrency: 'PHP',
              valueAddedTaxIncluded: false
            },
            availability: 'https://schema.org/InStock',
            url: `https://www.lakbaypalawan.online/#/car-rental/${location}`,
            availableAtOrFrom: {
              '@type': 'Place',
              name: locationInfo.displayName,
              address: {
                '@type': 'PostalAddress',
                addressLocality: locationInfo.displayName,
                addressRegion: 'Palawan',
                addressCountry: 'PH'
              }
            },
            seller: {
              '@type': 'Organization',
              name: 'Lakbay Palawan'
            }
          },
          ...CARS.slice(0, 10).map((car, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Car',
              name: car.name,
              description: car.description,
              image: car.image,
              vehicleConfiguration: car.type,
              fuelType: car.fuelType || 'Gasoline',
              numberOfDoors: 4,
              seatingCapacity: car.capacity
            },
            price: car.pricePerDay,
            priceCurrency: 'PHP',
            availability: 'https://schema.org/InStock',
            availableAtOrFrom: {
              '@type': 'Place',
              name: locationInfo.displayName,
              address: {
                '@type': 'PostalAddress',
                addressLocality: locationInfo.displayName,
                addressRegion: 'Palawan',
                addressCountry: 'PH'
              }
            }
          }))
        ]
      }
    };
  };

  const seoMetadata = getSEOMetadata();

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
        {/* Hero Banner */}
        <div className="bg-[#5D4037] pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/car-rental" className="hover:text-white transition-colors">Car Rental</Link>
              <span>/</span>
              <span className="text-white">{locationInfo.displayName}</span>
            </div>

            <span className="text-[#D4AF37] font-medium tracking-[0.2em] text-xs uppercase mb-3 block">
              Car Rental in {locationInfo.displayName}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">
              {locationInfo.displayName} Vehicle Rentals
            </h1>
            <p className="text-white/80 text-lg max-w-3xl leading-relaxed mb-8">
              {locationInfo.tagline}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {locationInfo.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight mb-3">
                  Available Vehicles in {locationInfo.displayName}
                </h2>
                <p className="text-[#A1887F] max-w-2xl leading-relaxed">
                  {locationInfo.description}
                </p>
              </div>
              <Link 
                to="/contact" 
                className="bg-[#5D4037] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 self-start md:self-auto hover:bg-[#4E342E] transition-colors"
              >
                Book Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CARS.map(car => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  onViewDetails={() => setSelectedCar(car)}
                />
              ))}
            </div>

            {/* Location Info Banner */}
            <div className="mt-16 bg-[#FCFAF8] rounded-[2.5rem] p-12 border border-[#8B6F47]/10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-medium text-[#5D4037] mb-4">
                  Why Choose Car Rental in {locationInfo.displayName}?
                </h3>
                <p className="text-[#A1887F] leading-relaxed mb-6">
                  Experience the freedom to explore {locationInfo.displayName} and surrounding areas at your own pace. 
                  Our fleet is available for self-drive or with professional drivers who know the best routes and hidden gems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/car-rental" 
                    className="bg-white text-[#5D4037] px-6 py-3 rounded-full text-sm font-medium border border-[#5D4037]/20 hover:border-[#5D4037]/40 transition-colors"
                  >
                    View All Locations
                  </Link>
                  <Link 
                    to="/contact" 
                    className="bg-[#5D4037] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#4E342E] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Car Modal */}
      {selectedCar && (
        <CarModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </>
  );
};

export default LocationCarRentalPage;
