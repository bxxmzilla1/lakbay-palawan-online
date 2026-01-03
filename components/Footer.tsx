import React from 'react';
import { Facebook, Plane, Palmtree, Car } from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.591 5.976L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.032-5.396 12.035-12.03a11.81 11.81 0 00-3.617-8.53z" />
  </svg>
);

// Custom Viber Icon
const ViberIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.57 21a24.1 24.1 0 01-6.73-1.68c-1.6-.68-2.98-1.6-4.14-2.76A13.84 13.84 0 013.94 12.4 14.12 14.12 0 012.26 5.68 4.2 4.2 0 015.68 2.26h4.51c.53 0 .97.38 1.04.91l.73 4.97c.07.5-.11.99-.48 1.35l-2.6 2.6c1.07 2.14 2.78 3.86 4.92 4.92l2.6-2.6a1.35 1.35 0 011.35-.48l4.97.73c.53.07.91.51.91 1.04v4.51c0 1.83-1.4 3.32-3.21 3.42h-.21zM7.06 4.09l-.49 1.59a12.03 12.03 0 001.37 6.42l1.6-1.6.35-.35a3.17 3.17 0 01-.19-1.22l-.73-4.97a.64.64 0 00-.63-.51H5.68a2.13 2.13 0 00-1.74 1.13c-.11.19-.11.4-.04.6l.01.03a11.9 11.9 0 001.16 3.01 1.06 1.06 0 01.3.83c0 .28-.11.55-.31.75l-1.3 1.3a11.86 11.86 0 002.3 4.28c.31.32.65.61 1.01.87l1.3-1.3c.2-.2.47-.31.75-.31.28 0 .55.11.75.31l1.6 1.6a12.03 12.03 0 006.42 1.37l1.59-.49c.2-.07.41-.07.6-.01l.03.01a2.13 2.13 0 001.13-1.74V17.57c0-.28-.21-.52-.51-.57l-4.97-.73c-.41-.06-.83.01-1.22.19l-.35.35-1.6 1.6a12.03 12.03 0 01-6.42-1.37l-.87-1.01c-.26-.36-.55-.7-.87-1.01z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5D4037] pt-24 pb-12 px-6 text-white rounded-t-[3rem] mt-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Connect with Us</h2>
          <p className="text-white/60 mb-10 font-light text-lg max-w-lg mx-auto">Quick support via your favorite messaging apps for easy bookings and island inquiries.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <a 
              href="https://www.facebook.com/profile.php?id=61580669355444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md px-6 py-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
               <div className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-white/50 uppercase tracking-widest">Facebook</span>
                  <span className="text-sm font-medium">Lakbay Palawan</span>
                </div>
            </a>
            
            <a 
              href="https://wa.me/639935386606" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md px-6 py-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
               <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsAppIcon size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-white/50 uppercase tracking-widest">WhatsApp</span>
                  <span className="text-sm font-medium">+63 993 538 6606</span>
                </div>
            </a>

            <a 
              href="viber://chat?number=639935386606" 
              className="bg-white/5 backdrop-blur-md px-6 py-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
               <div className="w-12 h-12 rounded-full bg-[#7360F2] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ViberIcon size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-white/50 uppercase tracking-widest">Viber</span>
                  <span className="text-sm font-medium">+63 993 538 6606</span>
                </div>
            </a>
          </div>

          <p className="text-xs text-white/40 border-t border-white/10 pt-8">© 2025 Lakbay Palawan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;