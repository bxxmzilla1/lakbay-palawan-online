import { Car, Destination, Tour } from './types';

export const CARS: Car[] = [
  {
    id: 'toyota-wigo',
    name: 'Toyota Wigo A/T',
    type: 'Compact',
    seats: '4-5',
    pricePerDay: 1500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_wigo.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Fuel Efficient'],
    description: 'A nimble and efficient compact car, perfect for navigating the city streets of Puerto Princesa.',
    carwashFee: 200,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-vios',
    name: 'Toyota Vios A/T',
    type: 'Sedan',
    seats: '4-5',
    pricePerDay: 1500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_vios.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Best Value'],
    description: 'The classic choice for comfort and reliability on any Palawan highway.',
    carwashFee: 200,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'mitsubishi-mirage',
    name: 'Mitsubishi Mirage G4 A/T',
    type: 'Sedan',
    seats: '4-5',
    pricePerDay: 1500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/mitsubishi_mirage_g4.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Economical'],
    description: 'Simple, easy to drive, and extremely fuel-efficient for long island traverses.',
    carwashFee: 200,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-raize',
    name: 'Toyota Raize A/T',
    type: 'Sub-Compact SUV',
    seats: '4-5',
    pricePerDay: 1800,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_raize.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Stylish'],
    description: 'A modern sub-compact SUV that blends style with extra ground clearance for Palawan roads.',
    carwashFee: 200,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova A/T',
    type: 'MPV',
    seats: '7-8',
    pricePerDay: 2800,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_innova.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Family Choice'],
    description: 'The ultimate family vehicle. Powerful diesel engine and spacious seating for your entire group.',
    carwashFee: 250,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-veloz',
    name: 'Toyota Veloz A/T',
    type: 'MPV',
    seats: '7-8',
    pricePerDay: 2800,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_veloz.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Modern'],
    description: 'Advanced features and high-tech interior for a premium multi-purpose vehicle experience.',
    carwashFee: 250,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'mitsubishi-xpander',
    name: 'Mitsubishi Xpander A/T',
    type: 'MPV',
    seats: '7-8',
    pricePerDay: 2800,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/mitsubishi_xpander.png?raw=true',
    fuel: 'Unleaded',
    transmission: 'Automatic',
    tags: ['Popular'],
    description: 'Versatile and spacious with a futuristic design that stands out on any road trip.',
    carwashFee: 250,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-hilux-g',
    name: 'Toyota Hilux 4x2',
    type: 'Pick-up',
    seats: 5,
    pricePerDay: 3000,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_hiux_g.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Workhorse'],
    description: 'Legendary durability. Ideal for carrying extra gear or tackling more challenging terrain.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'nissan-navara-silver',
    name: 'Nissan Navara 4x2',
    type: 'Pick-up',
    seats: 5,
    pricePerDay: 3000,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/nissan_navara_silver.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Smooth Ride'],
    description: 'A tough pickup with a surprisingly comfortable, car-like ride quality in sleek silver.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'nissan-navara-white',
    name: 'Nissan Navara 4x2',
    type: 'Pick-up',
    seats: 5,
    pricePerDay: 3000,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/nissan_navara_white.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Smooth Ride'],
    description: 'A tough pickup with a surprisingly comfortable, car-like ride quality in clean white.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-hilux-gr',
    name: 'Toyota Hilux GR 4x4',
    type: 'Pick-up',
    seats: 5,
    pricePerDay: 3500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_hilux_gr.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Premium Sport'],
    description: 'The Gazoo Racing edition of the Hilux, featuring sportier suspension and enhanced aesthetics.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'ford-ranger-4x4',
    name: 'Ford Ranger 4x4',
    type: 'Pick-up',
    seats: 5,
    pricePerDay: 3500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/ford_ranger.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['4x4 Capability'],
    description: 'Rugged capability meets high-tech features. Perfect for the off-road enthusiast.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'toyota-fortuner',
    name: 'SUV Toyota Fortuner',
    type: 'SUV',
    seats: '7-8',
    pricePerDay: 3500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/toyota_fortuner.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Automatic',
    tags: ['Luxury SUV'],
    description: 'Command the road with the powerful and prestigious Fortuner.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  },
  {
    id: 'van-commuter-deluxe',
    name: 'Van Commuter Deluxe',
    type: 'Van',
    seats: 15,
    pricePerDay: 3500,
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/commuter_deluxe.png?raw=true',
    fuel: 'Diesel',
    transmission: 'Manual',
    tags: ['Maximum Capacity'],
    description: 'The standard for large group transportation in Palawan. Room for everyone.',
    carwashFee: 300,
    availability: 'Self-drive or with driver'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'puerto-princesa',
    name: 'Puerto Princesa',
    tagline: 'City & Underground River',
    description: 'Home to the UNESCO World Heritage Underground River and a gateway to the rest of the island.',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/puerto-princesa.jpg?raw=true',
    toursCount: 4,
    highlight: 'Capital City'
  },
  {
    id: 'el-nido',
    name: 'El Nido',
    tagline: 'Lagoons & Limestone Cliffs',
    description: 'A world-renowned paradise featuring crystal-clear lagoons and towering limestone karst formations.',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/el-nido.jpg?raw=true',
    toursCount: 4,
    highlight: 'Best Seller'
  },
  {
    id: 'coron',
    name: 'Coron',
    tagline: 'Wrecks, Lakes & Reefs',
    description: 'Famous for its dramatic World War II shipwrecks and the emerald waters of Kayangan Lake.',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron.jpg?raw=true',
    toursCount: 7,
    highlight: 'Scuba Paradise'
  },
  {
    id: 'balabac',
    name: 'Balabac',
    tagline: 'The Last Frontier',
    description: 'Pristine, untouched paradise with pink sand beaches and crystal clear waters.',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-balabac.webp?raw=true',
    toursCount: 1,
    highlight: 'Untouched'
  }
];

export const TOURS: Tour[] = [
  // PUERTO PRINCESA
  {
    id: 'underground-river',
    name: 'Underground River Tour',
    duration: 'Full Day',
    price: 2700,
    includes: [
      'Hotel pick-up & drop-off',
      'Motorized boat transfer',
      'Use of life vest',
      'Buffet lunch',
      'Visitor entry permit',
      'Audio device fee',
      'Licensed tour guide'
    ],
    environmentalFee: 'P150 / pax',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-underground-river.jpg?raw=true',
    itinerarySummary: 'Explore one of the New 7 Wonders of Nature — a subterranean river flowing through spectacular limestone caves.',
    destinationId: 'puerto-princesa',
    isPopular: true
  },
  {
    id: 'honda-bay',
    name: 'Honda Bay Island Hopping',
    duration: 'Full Day',
    price: 1900,
    includes: [
      'Hotel pick-up/drop-off (within Puerto Princesa)',
      'Motorized boat w/ steward',
      'Use of life vest',
      'Picnic lunch on the island',
      'Entrance fees',
      'Shed rental',
      'Licensed tour guide'
    ],
    environmentalFee: 'P150 / pax',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-honda-bay.webp?raw=true',
    itinerarySummary: 'Hop across multiple pristine islands in Honda Bay for swimming and snorkeling.',
    destinationId: 'puerto-princesa'
  },
  {
    id: 'pps-city-tour',
    name: 'PPS City Tour',
    duration: 'Half Day',
    price: 800,
    includes: [
      'Hotel pick-up/drop-off',
      'Light snacks',
      'Licensed tour guide',
      'Visitors entry permit'
    ],
    destinationsList: [
      'Binuatan Creation',
      'Bakers Hill',
      'Mitra Ranch',
      'Plaza Cartel',
      'Baywalk',
      'Cathedral',
      'Souvenir Shops'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-city-tour.jpg?raw=true',
    itinerarySummary: 'A tour of Puerto Princesa’s historical sites, scenic viewpoints, and local shops.',
    destinationId: 'puerto-princesa'
  },
  {
    id: 'firefly-watching',
    name: 'Firefly Watching',
    duration: 'Night',
    price: 1800,
    includes: [
      'Hotel pick-up/drop-off (within Puerto Princesa)',
      'Motorized boat w/ boat steward',
      'Use of life vest',
      'Buffet dinner',
      'Licensed tour guide'
    ],
    environmentalFee: 'P150 / pax',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-firefly-watching.jpg?raw=true',
    itinerarySummary: 'Experience a magical night on the river surrounded by thousands of fireflies.',
    destinationId: 'puerto-princesa'
  },

  // BALABAC
  {
    id: 'balabac-joiners',
    name: 'Balabac Joiners Tour',
    duration: '2D1N - 5D4N',
    price: 11500, // Default display price for 3D2N
    includes: [
      'Based Camp Accommodation',
      'Roundtrip Van Transfer (PPS-Buliluyan Port-PPS)',
      'Speedboat/Passenger boat',
      'Full On Board Meals',
      'Environmental Fee',
      'Local Tour Guide',
      'Island Entrances',
      'Unli Coffee',
      'Boat Fees',
      'Island Hopping'
    ],
    exclusions: [
      'Meals during land travel',
      'Hotel in PPS',
      'Airfare'
    ],
    destinationsList: [
      'Onok Island', 'Canibungan Island', 'Candaraman Island', 'Mansalangan Sand bar',
      'Patawan Island', 'Canimeran Island', 'Tangkahan Island', 'Punta Sebaring',
      'Starfish Sand bar', 'Nasubata Reef', 'Timbayan Rock Formation', 'Eco Resort', 'Kabkabon'
    ],
    pricingTiers: [
      { label: '2 Days 1 Night', price: 9000 },
      { label: '3 Days 2 Nights', price: 11500 },
      { label: '4 Days 3 Nights', price: 13500 },
      { label: '5 Days 4 Nights', price: 16000 }
    ],
    notes: 'Open for joiners daily — no minimum number of participants. Add-on: Overnight in Onuk Island – ₱1,500/pax.',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/pps-balabac.webp?raw=true',
    itinerarySummary: 'Offers crystal lagoons, pink beaches, sandbars, and the clearest waters in the Philippines. The ultimate untouched paradise.',
    destinationId: 'balabac',
    isPopular: true
  },

  // CORON
  {
    id: 'coron-town-tour',
    name: 'Coron Town Tour',
    duration: '4 Hours',
    price: 800,
    includes: ['Transfers', 'Licensed Tour Guide'],
    destinationsList: [
      'Mt. Tapyas Viewdeck',
      'St. Augustine Church',
      'Lualhati Park',
      'Cashew House',
      'Souvenir Shop',
      'Coron Town Plaza',
      'Maquinit Hotspring'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-town-tour.webp?raw=true',
    itinerarySummary: 'A great introduction to the town of Coron, covering historical landmarks and relaxing hot springs.',
    destinationId: 'coron'
  },
  {
    id: 'coron-tour-a',
    name: 'Coron Island Tour A',
    duration: '9 Hours',
    price: 1200,
    includes: ['Picnic Lunch (White Sand Beach)', 'Boat Transfers', 'Entrance Fees', 'Life Vest'],
    destinationsList: [
      'Kayangan Lake',
      'CYC Beach',
      'Coral Garden',
      'Reef Garden',
      'Lunch Area (White Sand beach)'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-island-hopping-a.webp?raw=true',
    itinerarySummary: 'Visit the world-famous Kayangan Lake and diverse coral gardens.',
    destinationId: 'coron'
  },
  {
    id: 'coron-tour-b',
    name: 'Coron Island Tour B',
    duration: '9 Hours',
    price: 1400,
    includes: ['Picnic Lunch (White Sand Beach)', 'Boat Transfers', 'Entrance Fees', 'Life Vest'],
    destinationsList: [
      'Barracuda Lake',
      'Twin Lagoon',
      'Skeleton Wreck or Malwawey Reef',
      'Reef Garden',
      'Lunch Area (White Sand beach)'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-island-hopping-b.jpg?raw=true',
    itinerarySummary: 'Explore the mystical deep waters of Barracuda Lake and the breathtaking Twin Lagoon.',
    destinationId: 'coron'
  },
  {
    id: 'coron-super-ultimate',
    name: 'Coron Island Super Ultimate Tour',
    duration: '9 Hours',
    price: 1800,
    includes: ['Picnic Lunch (White Sand Beach)', 'Boat Transfers', 'Entrance Fees', 'Life Vest'],
    destinationsList: [
      'Kayangan Lake',
      'Twin Lagoon',
      'Barracuda Lake',
      'Skeleton Wreck or Malwaway Reef',
      'Reef Garden',
      'CYC beach',
      'Lunch area (white sand beach)'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-super-ultimate.jpg?raw=true',
    itinerarySummary: 'The definitive Coron experience covering all the famous lakes, lagoons and beaches in one day.',
    destinationId: 'coron',
    isPopular: true
  },
  {
    id: 'island-escapade',
    name: 'Island Escapade Tour',
    duration: '9 Hours',
    price: 1700,
    includes: ['Picnic Lunch', 'Boat Transfers', 'Entrance Fees', 'Life Vest'],
    destinationsList: [
      'Malcapuya Island',
      'Bulog Dos',
      'Banana Island or Sandbar Beach'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-island-escapade.avif?raw=true',
    itinerarySummary: 'Relax on the finest white sand beaches and sandbars of Coron.',
    destinationId: 'coron'
  },
  {
    id: 'reefs-and-wrecks',
    name: 'Coron Reefs and Wrecks Tour',
    duration: 'Full Day',
    price: 1700,
    includes: ['Picnic Lunch', 'Boat Transfers', 'Entrance Fees', 'Life Vest'],
    destinationsList: [
      'Pass Island',
      'Coral Garden',
      'Lusong Gunboat',
      'East Tangat Wreck'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-reef-and-wreck.webp?raw=true',
    itinerarySummary: 'Ideal for snorkelers wanting to see both colorful coral reefs and historical shipwrecks.',
    destinationId: 'coron'
  },
  {
    id: 'coron-calauit',
    name: 'Calauit Safari & Black Island',
    duration: 'Full Day',
    price: 2700,
    includes: ['Safari Entrance', 'Boat Transfers', 'Picnic Lunch', 'Life Vest'],
    destinationsList: [
      'Calauit Sanctuary',
      'Busuanga Town Proper',
      'Black Island or Ocam-Ocam'
    ],
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/coron-calauit-safari-and-black-island.jpg?raw=true',
    itinerarySummary: 'A unique mix of African wildlife safari and stunning island hopping.',
    destinationId: 'coron'
  },

  // EL NIDO
  {
    id: 'el-nido-tour-a',
    name: 'El Nido Tour A',
    duration: '9 Hours',
    price: 1200,
    includes: ['Picnic Lunch', 'Licensed Tour Guide', 'Life Vest'],
    destinationsList: [
      'Big Lagoon',
      'Secret Lagoon',
      'Shimizu Island',
      'Seven Commandos Beach',
      'Payon-Payon Island'
    ],
    environmentalFee: 'P400 + Lagoon Fee P200',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/elnido-tour-a.jpg?raw=true',
    itinerarySummary: 'The most popular tour in El Nido featuring the iconic lagoons and limestone formations.',
    destinationId: 'el-nido',
    isPopular: true
  },
  {
    id: 'el-nido-tour-b',
    name: 'El Nido Tour B',
    duration: '9 Hours',
    price: 1300,
    includes: ['Picnic Lunch', 'Licensed Tour Guide', 'Life Vest'],
    destinationsList: [
      'Snake Island',
      'Cudugnon Cave',
      'Cathedral Cave',
      'Entalula Island',
      'Pinagbuyutan Island'
    ],
    environmentalFee: 'P400 + Lagoon Fee P200',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/elnido-tour-b.webp?raw=true',
    itinerarySummary: 'Discover unique geological formations like the famous Snake Island sandbar.',
    destinationId: 'el-nido'
  },
  {
    id: 'el-nido-tour-c',
    name: 'El Nido Tour C',
    duration: '9 Hours',
    price: 1400,
    includes: ['Picnic Lunch', 'Licensed Tour Guide', 'Life Vest'],
    destinationsList: [
      'Hidden Beach',
      'Secret Beach',
      'Matinloc Shrine',
      'Helicopter Island',
      'Talisay Beach'
    ],
    environmentalFee: 'P400 + Lagoon Fee P200',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/elnido-tour-c.jpg?raw=true',
    itinerarySummary: 'Best for snorkeling and exploring hidden beaches tucked away behind cliffs.',
    destinationId: 'el-nido'
  },
  {
    id: 'el-nido-tour-d',
    name: 'El Nido Tour D',
    duration: '9 Hours',
    price: 1200,
    includes: ['Picnic Lunch', 'Licensed Tour Guide', 'Life Vest'],
    destinationsList: [
      'Small Lagoon',
      'Cadlao Lagoon',
      'Paradise Beach',
      'Bukal Beach',
      'Natnat Beach',
      'Pansandigan Beach'
    ],
    environmentalFee: 'P400 + Lagoon Fee P200',
    image: 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/el-nido-tour-d.webp?raw=true',
    itinerarySummary: 'Explore the quieter side of El Nido with serene lagoons and peaceful beaches.',
    destinationId: 'el-nido'
  }
];
