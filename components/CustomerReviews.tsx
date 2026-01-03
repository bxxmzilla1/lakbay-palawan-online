import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const CustomerReviews: React.FC = () => {
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

  return (
    <section className="py-24 px-6 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#8B6F47] font-medium tracking-wider text-xs uppercase mb-2 block">What Our Customers Say</span>
          <h2 className="text-3xl md:text-4xl font-medium text-[#5D4037] tracking-tight mb-3">Customer Reviews</h2>
          <p className="text-[#A1887F] max-w-2xl mx-auto">Real experiences from travelers who chose Lakbay Palawan</p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
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
    </section>
  );
};

export default CustomerReviews;
