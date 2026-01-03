import React, { useState, useMemo, useRef } from 'react';
import { CARS, DESTINATIONS, TOURS } from '../data';
import { CarCard, DestinationCard } from './Home';
import { TourCard } from './ToursPage';
import { ResourceType, Tour, Destination, Car } from '../types';
import TourModal from '../components/TourModal';
import DestinationModal from '../components/DestinationModal';
import CarModal from '../components/CarModal';
import SEO from '../components/SEO';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    reviewer: 'Yumi Zariah',
    review: '✨🌴 Absolutely unforgettable! 🌴✨\n\nOur Balabac tour was nothing short of magical crystal clear waters, stunning views, and the most welcoming people! From the smooth booking process to the friendly and knowledgeable guides thanks to our Tour Guide "Ben"💙, every moment felt special. 🏝️✨\n\nIf you\'re looking for a perfect blend of adventure, relaxation, and pure island beauty, this is the tour to take "Lakbay Palawan" is your best choice! Can\'t wait to come back for another round of paradise! 🌊🌞🌺\n\nSee you again Palawan!'
  },
  {
    id: 2,
    reviewer: 'Xena Bantugan',
    review: 'I highly recommend Lakbay Palawan 💯! Ms. Wena and her team are exceptional. Their accommodating nature and consistent, timely updates made our trip stress-free. They provided excellent alternative options due to unforeseen weather closures. Truly, they handle everything so well na pahinga at dinner na lang iisipin mo every after tour 😊'
  },
  {
    id: 3,
    reviewer: 'Kaye Pamintuan',
    review: '100/10 🌞🍲🏝️\n- Very Consistent sa pag-uupdate\n- Sobrang sarap ng food (Hindi tinipid)\n- Friendly tour guide\n- dabest'
  },
  {
    id: 4,
    reviewer: 'Ro Na',
    review: 'Thank you po sa napaka smooth na services. Our Balabac experience was truly memorable because of the hassle-free accommodation. From booking until makarating kami sa aming destination. Highly, 101% recommended! 🏝️🥥🌴'
  },
  {
    id: 5,
    reviewer: 'Mack Kuripotz',
    review: '1000/10. Sobrang bait ni mam. Hindi kasama sa tour namin ang PPS city tour pero sinamahan niya kami mag libot kasi 8pm pa flight namin. Napaka smooth din ng tour namin sa balabac. Lagi din kaming chcheck kung ok kami. Mabilis din magreply kada may queries kami kahit anong oras pa yun. Super recommended si Lakbay Palawan'
  },
  {
    id: 6,
    reviewer: 'Tin Tin',
    review: 'We Booked our 4D3N in Lakbay Palawan super Worth it ❤️ from Sundo s airport Van transfer to Our Balabac Escapade super duper smooth at napaka responsive ni ma\'am and also we book our Under ground River Tour & City tour..hndi kau magsisi❤️ asikasong asikaso Po tlga kme..thank u ma\'am Lakbay Palawan next tym upon Muna kme Coron nmn Po..thank u Po ulit and godbless'
  },
  {
    id: 7,
    reviewer: 'Lai Calucin',
    review: 'Highly Recommended Lakbay Palawan CaRental & DIY Tour. walang hassle Ang tour ko while in Palawan. Budget Friendly accommodation and tours 👍👍👍✔️'
  },
  {
    id: 8,
    reviewer: 'Bianca Servales',
    review: 'Highly recommended! Very accommodating and they were able to assist us with everything. Thank you, Ma\'am! Paabalik ulit namin!'
  }
];

const ListingPage: React.FC<ListingPageProps> = ({ type }) => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
          title: 'Car Rentals in Palawan | Airport & Self-Drive Options',
          description: 'Airport car rental in Palawan with self-drive options. Available at Puerto Princesa Airport, El Nido, and Coron. Affordable rates for SUVs, vans, and sedans.',
          keywords: 'car rental palawan, airport car rental palawan, palawan car rental, rent a car palawan, el nido car rental, coron car rental, puerto princesa airport car rental, self drive car rental palawan',
          canonical: '/car-rental',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CarRental',
            '@id': 'https://www.lakbaypalawan.online/car-rental',
            name: 'Lakbay Palawan Car Rentals',
            description: 'Affordable car rental service in Palawan with self-drive and with-driver options. Choose from compact cars, SUVs, and vans.',
            url: 'https://www.lakbaypalawan.online/#/car-rental',
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
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '9.7392',
                longitude: '118.7353'
              }
            },
            areaServed: {
              '@type': 'State',
              name: 'Palawan, Philippines',
              containsPlace: [
                { '@type': 'City', name: 'Puerto Princesa' },
                { '@type': 'City', name: 'El Nido' },
                { '@type': 'City', name: 'Coron' },
                { '@type': 'City', name: 'San Vicente' },
                { '@type': 'City', name: 'Taytay' },
                { '@type': 'City', name: 'Roxas' },
                { '@type': 'City', name: 'Narra' },
                {
                  '@type': 'Airport',
                  name: 'Puerto Princesa International Airport',
                  iataCode: 'PPS',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Puerto Princesa',
                    addressRegion: 'Palawan',
                    addressCountry: 'PH'
                  }
                }
              ]
            },
            serviceType: 'Car Rental',
            serviceOutput: {
              '@type': 'Product',
              name: 'Car Rentals in Palawan',
              category: 'Vehicle Rental',
              description: 'Self-drive and with-driver car rental services in Palawan'
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Car Rental Services',
                description: 'Self-drive and with-driver car rental services in Palawan',
                priceCurrency: 'PHP',
                price: '1500',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '1500',
                  priceCurrency: 'PHP',
                  valueAddedTaxIncluded: false
                },
                availability: 'https://schema.org/InStock',
                url: 'https://www.lakbaypalawan.online/#/car-rental',
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
                eligibleRegion: {
                  '@type': 'State',
                  name: 'Palawan'
                }
              }))
            ]
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

            {/* Private Transfer Pricing Table */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">Additional Service</span>
                <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight mb-3">Private Transfer</h2>
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

            {/* Customer Reviews Section */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">What Our Customers Say</span>
                <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight mb-3">Customer Reviews</h2>
                <p className="text-[#A1887F] max-w-2xl mx-auto">Real experiences from travelers who chose Lakbay Palawan</p>
              </div>

              {/* Reviews Carousel */}
              <div className="relative max-w-7xl mx-auto">
                {/* Navigation Buttons */}
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-xl border border-[#5D4037]/10 hover:bg-[#F8F5F2] transition-all hover:scale-110 hidden md:block"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft size={24} className="text-[#5D4037]" />
                </button>
                
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-xl border border-[#5D4037]/10 hover:bg-[#F8F5F2] transition-all hover:scale-110 hidden md:block"
                  aria-label="Next reviews"
                >
                  <ChevronRight size={24} className="text-[#5D4037]" />
                </button>

                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto no-scrollbar snap-x snap-mandatory"
                  style={{
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <div className="flex gap-6 pb-4 px-2">
                    {CUSTOMER_REVIEWS.map((review) => (
                      <div
                        key={review.id}
                        className="flex-none w-[85vw] md:w-[450px] snap-center"
                      >
                        <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-[#5D4037]/5 hover:shadow-xl transition-all h-full flex flex-col">
                          {/* Reviewer Name */}
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-[#5D4037]">{review.reviewer}</h3>
                          </div>

                          {/* Review Text */}
                          <div className="flex-1 overflow-y-auto">
                            <p className="text-[#6B5B4D] leading-relaxed whitespace-pre-wrap text-sm">
                              {review.review}
                            </p>
                          </div>

                          {/* Decorative Element */}
                          <div className="mt-6 pt-4 border-t border-[#F8F5F2]">
                            <div className="flex items-center gap-2">
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-[#D4AF37] text-lg">★</span>
                                ))}
                              </div>
                              <span className="text-xs text-[#A1887F] font-medium">Verified Customer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="text-center mt-6 md:hidden">
                  <p className="text-xs text-[#A1887F]">← Swipe to see more reviews →</p>
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