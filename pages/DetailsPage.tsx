import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS, TOURS, DESTINATIONS } from '../data';
import { ResourceType, Car, Tour, Destination } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, Info, MapPin, Calendar, Users, Fuel, Settings2, ShieldCheck, Waves, ClipboardList, Map } from 'lucide-react';
import SEO from '../components/SEO';

interface DetailsPageProps {
  type: ResourceType;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ type }) => {
  const { id } = useParams<{ id: string }>();

  let content: any = null;
  if (type === 'car') content = CARS.find(c => c.id === id);
  if (type === 'tour') content = TOURS.find(t => t.id === id);
  if (type === 'destination') content = DESTINATIONS.find(d => d.id === id);

  if (!content) {
    return (
      <>
        <SEO title="Item Not Found" noindex />
        <div className="pt-32 text-center h-screen">
          <h2 className="text-2xl text-[#5D4037] mb-4">Item not found</h2>
          <Link to="/" className="text-[#8B6F47] hover:underline">Back to Home</Link>
        </div>
      </>
    );
  }

  // Generate dynamic SEO metadata based on content type
  const getSEOMetadata = () => {
    const baseUrl = 'https://bxxmzilla1.github.io/lakbay-palawan-online';
    
    if (type === 'car') {
      const car = content as Car;
      const price = typeof car.pricePerDay === 'number' ? car.pricePerDay : 0;
      
      // Determine vehicle-specific keyword based on car type
      const getVehicleKeyword = () => {
        const typeLower = car.type.toLowerCase();
        if (typeLower.includes('suv')) return 'suv rental palawan';
        if (typeLower.includes('van')) return 'van rental palawan';
        if (car.availability.toLowerCase().includes('self-drive') || car.availability.toLowerCase().includes('self drive')) {
          return 'self drive car rental palawan';
        }
        // Default to location-based keywords for other types
        return 'palawan car rental';
      };
      
      const vehicleKeyword = getVehicleKeyword();
      
      // Generate title (max 60 chars) - using "rent a car palawan" as primary
      const shortName = car.name.length > 25 ? car.name.split(' ').slice(0, 2).join(' ') : car.name;
      const title = `${shortName} | Rent a Car Palawan`;
      
      // Generate description (max 160 chars) - natural language with keywords
      const baseDesc = car.description.length > 80 ? car.description.substring(0, 77) + '...' : car.description;
      const description = `${baseDesc} Rent a car Palawan: ${car.seats} seats, ${car.transmission}. ${car.availability.toLowerCase()}.`;
      
      return {
        title: title,
        description: description.length > 160 ? description.substring(0, 157) + '...' : description,
        keywords: `rent a car palawan, ${vehicleKeyword}, ${car.name.toLowerCase()} palawan, car hire palawan`,
        canonical: `/car/${car.id}`,
        ogImage: car.image,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: car.name,
          description: car.description,
          image: car.image,
          category: 'Car Rental',
          brand: {
            '@type': 'Brand',
            name: 'Lakbay Palawan'
          },
          offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'PHP',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/#/car/${car.id}`,
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: price,
              priceCurrency: 'PHP',
              unitCode: 'DAY'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '150'
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Vehicle Type',
              value: car.type
            },
            {
              '@type': 'PropertyValue',
              name: 'Seating Capacity',
              value: car.seats.toString()
            },
            {
              '@type': 'PropertyValue',
              name: 'Fuel Type',
              value: car.fuel
            },
            {
              '@type': 'PropertyValue',
              name: 'Transmission',
              value: car.transmission
            }
          ]
        }
      };
    }
    
    if (type === 'tour') {
      const tour = content as Tour;
      return {
        title: `${tour.name} | Palawan Tour Package | ₱${tour.price.toLocaleString()}/pax`,
        description: `${tour.itinerarySummary} Duration: ${tour.duration}. Includes: ${tour.includes.slice(0, 3).join(', ')}. Book your Palawan adventure today.`,
        keywords: `${tour.name}, Palawan tour, ${tour.destinationId} tour, Palawan island hopping, Palawan tour package`,
        canonical: `/tour/${tour.id}`,
        ogImage: tour.image,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: tour.name,
          description: tour.itinerarySummary,
          image: tour.image,
          itinerary: {
            '@type': 'ItemList',
            itemListElement: tour.destinationsList?.map((dest, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: dest
            })) || []
          },
          offers: {
            '@type': 'Offer',
            price: tour.price,
            priceCurrency: 'PHP',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/#/tour/${tour.id}`
          },
          duration: tour.duration
        }
      };
    }
    
    if (type === 'destination') {
      const destination = content as Destination;
      return {
        title: `${destination.name} Palawan | Travel Guide & Tour Packages`,
        description: `${destination.description} ${destination.tagline}. Discover ${destination.toursCount} available tour packages. Best time to visit: November to May.`,
        keywords: `${destination.name} Palawan, ${destination.name} travel guide, ${destination.name} tours, Palawan ${destination.name}`,
        canonical: `/destination/${destination.id}`,
        ogImage: destination.image,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: destination.name,
          description: destination.description,
          image: destination.image,
          address: {
            '@type': 'PostalAddress',
            addressLocality: destination.name,
            addressRegion: 'Palawan',
            addressCountry: 'Philippines'
          },
          containsPlace: {
            '@type': 'TouristAttraction',
            name: destination.name,
            description: destination.tagline
          }
        }
      };
    }
    
    return null;
  };

  const seoMetadata = getSEOMetadata();

  return (
    <>
      {seoMetadata && (
        <SEO
          title={seoMetadata.title}
          description={seoMetadata.description}
          keywords={seoMetadata.keywords}
          canonical={seoMetadata.canonical}
          ogImage={seoMetadata.ogImage}
          structuredData={seoMetadata.structuredData}
        />
      )}
      <div className="animate-in fade-in duration-500 min-h-screen">
      {/* Banner Section matching the Listing Theme */}
      <div className="bg-[#5D4037] pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to={`/${type === 'car' ? 'car-rental' : type + 's'}`} className="inline-flex items-center gap-2 text-[#D4AF37] mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={16} />
            Back to {type === 'car' ? 'Car Rental' : type + 's'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight">{content.name}</h1>
        </div>
      </div>

      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Media Section */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[500px]">
             <img src={content.image} alt={content.name} className="w-full h-full object-cover" />
             {type === 'destination' && (
               <div className="absolute top-6 left-6">
                 <span className="bg-[#2A9D8F] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{content.highlight}</span>
               </div>
             )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="mb-8">
               <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">{type} Information</span>
               <p className="text-[#A1887F] text-xl leading-relaxed font-light mb-4">
                {type === 'car' ? content.description : content.itinerarySummary}
               </p>
               {content.notes && (
                 <div className="p-4 bg-white/50 border border-[#8B6F47]/10 rounded-2xl text-sm text-[#8B6F47] italic">
                   {content.notes}
                 </div>
               )}
            </div>

            {type === 'car' && (
              <>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <SpecItem icon={<Users size={20} />} label="Capacity" value={`${content.seats} Seaters`} />
                  <SpecItem icon={<Fuel size={20} />} label="Fuel Type" value={content.fuel} />
                  <SpecItem icon={<Settings2 size={20} />} label="Transmission" value={content.transmission} />
                  <SpecItem icon={<ShieldCheck size={20} />} label="Availability" value={content.availability} />
                </div>
                
                <div className="bg-[#FCFAF8] border border-[#8B6F47]/10 p-6 rounded-[2rem] mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Waves size={20} className="text-[#8B6F47]" />
                    <h3 className="font-medium text-[#5D4037]">Additional Fees</h3>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#A1887F]">Carwash Fee</span>
                    <span className="font-semibold text-[#5D4037]">₱{content.carwashFee.toLocaleString()}</span>
                  </div>
                </div>
              </>
            )}

            {type === 'tour' && (
              <div className="space-y-8 mb-10">
                {/* Destinations List */}
                {content.destinationsList && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Map size={20} className="text-[#2A9D8F]" />
                      <h3 className="text-lg font-semibold text-[#5D4037]">Places to Visit:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {content.destinationsList.map((dest: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-[#F8F5F2] rounded-full text-xs text-[#5D4037] border border-[#8B6F47]/10">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ClipboardList size={20} className="text-[#2A9D8F]" />
                    <h3 className="text-lg font-semibold text-[#5D4037]">Tour Inclusions:</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {content.includes.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#5D4037]">
                        <CheckCircle2 size={18} className="text-[#2A9D8F]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                {content.exclusions && (
                   <div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-4">Exclusions:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {content.exclusions.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-[#A1887F]">
                          <XCircle size={18} className="text-red-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Environmental Fee */}
                {content.environmentalFee && (
                  <div className="p-4 bg-[#FFF9F2] rounded-2xl border border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#8B6F47]">Environmental / Lagoon Fee</span>
                    <span className="font-bold text-[#5D4037]">{content.environmentalFee}</span>
                  </div>
                )}
              </div>
            )}

            {type === 'destination' && (
               <div className="mb-10 p-8 bg-[#FCFAF8] rounded-[2.5rem] border border-[#8B6F47]/10">
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">Visitor Insight</h3>
                  <p className="text-[#A1887F] leading-relaxed">{content.description}</p>
                  <p className="text-[#A1887F] mt-4 leading-relaxed italic">This location is best visited between November and May. Most travelers spend at least 3-4 days here to experience all local attractions and hidden gems.</p>
               </div>
            )}

            <div className="mt-auto pt-8 border-t border-[#8B6F47]/20 flex flex-col md:flex-row items-center justify-between gap-6">
               <div>
                  <span className="block text-xs uppercase tracking-widest text-[#A1887F] mb-1">
                    {type === 'destination' ? 'Tour Availability' : 'Starting Rate'}
                  </span>
                  <span className="text-4xl font-semibold text-[#5D4037]">
                    {type === 'destination' ? `${content.toursCount} Tours` : `₱${content.pricePerDay ? content.pricePerDay.toLocaleString() : content.price.toLocaleString()}`}
                    <span className="text-lg font-normal text-[#A1887F]">{type === 'car' ? ' / day' : (type === 'tour' ? ' / pax' : '')}</span>
                  </span>
               </div>
               <Link to="/contact" className="w-full md:w-auto bg-[#8B6F47] text-white px-12 py-5 rounded-2xl font-medium text-lg hover:bg-[#6B4E3D] transition-all shadow-xl shadow-[#8B6F47]/20 transform hover:-translate-y-1 text-center">
                  Book This {type.charAt(0).toUpperCase() + type.slice(1)} Now
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const SpecItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] border border-[#8B6F47]/5 shadow-sm">
    <div className="text-[#8B6F47] bg-[#F8F5F2] p-2.5 rounded-xl">{icon}</div>
    <div>
      <span className="block text-[10px] text-[#A1887F] uppercase tracking-widest font-medium mb-0.5">{label}</span>
      <span className="text-sm font-semibold text-[#5D4037]">{value}</span>
    </div>
  </div>
);

export default DetailsPage;