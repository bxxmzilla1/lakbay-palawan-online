import React from 'react';
import { Facebook, MessageCircle, ArrowRight, MapPin, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.591 5.976L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.032-5.396 12.035-12.03a11.81 11.81 0 00-3.617-8.53z" />
  </svg>
);

const ViberIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.57 21a24.1 24.1 0 01-6.73-1.68c-1.6-.68-2.98-1.6-4.14-2.76A13.84 13.84 0 013.94 12.4 14.12 14.12 0 012.26 5.68 4.2 4.2 0 015.68 2.26h4.51c.53 0 .97.38 1.04.91l.73 4.97c.07.5-.11.99-.48 1.35l-2.6 2.6c1.07 2.14 2.78 3.86 4.92 4.92l2.6-2.6a1.35 1.35 0 011.35-.48l4.97.73c.53.07.91.51.91 1.04v4.51c0 1.83-1.4 3.32-3.21 3.42h-.21zM7.06 4.09l-.49 1.59a12.03 12.03 0 001.37 6.42l1.6-1.6.35-.35a3.17 3.17 0 01-.19-1.22l-.73-4.97a.64.64 0 00-.63-.51H5.68a2.13 2.13 0 00-1.74 1.13c-.11.19-.11.4-.04.6l.01.03a11.9 11.9 0 001.16 3.01 1.06 1.06 0 01.3.83c0 .28-.11.55-.31.75l-1.3 1.3a11.86 11.86 0 002.3 4.28c.31.32.65.61 1.01.87l1.3-1.3c.2-.2.47-.31.75-.31.28 0 .55.11.75.31l1.6 1.6a12.03 12.03 0 006.42 1.37l1.59-.49c.2-.07.41-.07.6-.01l.03.01a2.13 2.13 0 001.13-1.74V17.57c0-.28-.21-.52-.51-.57l-4.97-.73c-.41-.06-.83.01-1.22.19l-.35.35-1.6 1.6a12.03 12.03 0 01-6.42-1.37l-.87-1.01c-.26-.36-.55-.7-.87-1.01z" />
  </svg>
);

const ContactPage: React.FC = () => {
  // Structured Data for Contact Page - LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lakbay Palawan',
    description: 'Premium car rentals and tour packages in Palawan, Philippines',
    url: 'https://bxxmzilla1.github.io/lakbay-palawan-online',
    telephone: '+63 993 538 6606',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Puerto Princesa',
      addressRegion: 'Palawan',
      addressCountry: 'Philippines'
    },
    openingHours: 'Mo-Su 08:00-22:00',
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: 'Palawan'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61580669355444'
    ]
  };

  return (
    <>
      <SEO
        title="Contact Us | Book Your Palawan Adventure"
        description="Contact Lakbay Palawan via Facebook Messenger, WhatsApp, or Viber. Get instant support for car rentals and tour bookings in Palawan. Available 7 days a week."
        keywords="contact Lakbay Palawan, Palawan booking, Palawan customer service, Palawan travel support, WhatsApp Palawan, Viber Palawan"
        canonical="/contact"
        structuredData={structuredData}
      />
      <div className="animate-in fade-in duration-500">
      {/* Premium Dark Banner */}
      <div className="bg-[#5D4037] pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#D4AF37] font-medium tracking-[0.2em] text-xs uppercase mb-3 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">Start Your Adventure</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Our team is ready to assist you via Facebook, WhatsApp, or Viber for real-time support.</p>
        </div>
      </div>

      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-[#5D4037]">Official Contact Channels</h2>
            <p className="text-[#A1887F] text-lg leading-relaxed">
              We've made it easy for you to reach us through your preferred messaging apps. Simply click a platform below to start a conversation with our island experts.
            </p>

            <div className="space-y-4">
              <ContactCard 
                icon={<Facebook size={24} />} 
                title="Facebook Messenger" 
                subtitle="Lakbay Palawan Page" 
                href="https://www.facebook.com/profile.php?id=61580669355444" 
                color="#1877F2" 
              />
              <ContactCard 
                icon={<WhatsAppIcon size={24} />} 
                title="WhatsApp Business" 
                subtitle="+63 993 538 6606" 
                href="https://wa.me/639935386606" 
                color="#25D366" 
              />
              <ContactCard 
                icon={<ViberIcon size={24} />} 
                title="Viber Chat" 
                subtitle="+63 993 538 6606" 
                href="viber://chat?number=639935386606" 
                color="#7360F2" 
              />
            </div>
          </div>

          {/* Business Info / Map Placeholder */}
          <div className="bg-[#FCFAF8] rounded-[3rem] p-10 border border-[#8B6F47]/10 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#5D4037] mb-6">Service Information</h3>
              <div className="space-y-6">
                <InfoItem icon={<MapPin size={20} />} label="Operational Hub" value="Puerto Princesa, Palawan, Philippines" />
                <InfoItem icon={<Clock size={20} />} label="Booking Support" value="Monday - Sunday, 8:00 AM - 10:00 PM" />
                <InfoItem icon={<ShieldCheck size={20} />} label="Reliability" value="DTI Registered & DOT Accredited" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const ContactCard = ({ icon, title, subtitle, href, color }: { icon: React.ReactNode, title: string, subtitle: string, href: string, color: string }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? "_blank" : "_self"} 
    rel="noopener noreferrer"
    className="flex items-center justify-between p-6 bg-white rounded-[2rem] border border-[#8B6F47]/5 shadow-sm hover:shadow-xl hover:border-[#8B6F47]/20 transition-all group"
  >
    <div className="flex items-center gap-5">
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110" 
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[#5D4037]">{title}</h4>
        <p className="text-sm text-[#A1887F]">{subtitle}</p>
      </div>
    </div>
    <div className="w-10 h-10 rounded-full bg-[#F8F5F2] flex items-center justify-center text-[#8B6F47] group-hover:bg-[#8B6F47] group-hover:text-white transition-all">
      <ArrowRight size={18} />
    </div>
  </a>
);

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-white rounded-xl border border-[#8B6F47]/10 text-[#8B6F47] shadow-sm">
      {icon}
    </div>
    <div>
      <span className="block text-[10px] text-[#A1887F] uppercase tracking-widest font-bold mb-0.5">{label}</span>
      <span className="text-base font-medium text-[#5D4037]">{value}</span>
    </div>
  </div>
);

export default ContactPage;