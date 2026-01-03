
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Key, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Car Rental', path: '/car-rental' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Tours', path: '/tours' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md h-16 md:h-20' : 'bg-white/70 h-20 md:h-24'
    } glass-panel border-b border-white/40`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group py-2">
          <img 
            src="https://github.com/bxxmzilla1/lakbay-palawan/blob/main/lakbay-palawan.png?raw=true" 
            alt="Lakbay Palawan" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="text-base md:text-xl font-bold tracking-tighter text-[#5D4037] uppercase">
              Lakbay <span className="text-[#8B6F47]">Palawan</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-semibold text-[#A1887F] uppercase tracking-[0.12em] mt-0.5 whitespace-nowrap">
              Car Rental & Travel Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path) ? 'text-[#8B6F47]' : 'text-[#A1887F] hover:text-[#8B6F47]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/car-rental" className="hidden lg:flex btn-primary bg-[#8B6F47] text-white px-6 py-2.5 rounded-full text-sm font-medium items-center gap-2 hover:bg-[#6B4E3D] transition-all shadow-md shadow-[#8B6F47]/10">
            <span>Rent a Car</span>
            <Key size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#5D4037]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 flex flex-col p-6 gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-[#8B6F47]' : 'text-[#5D4037]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/car-rental" 
            className="bg-[#8B6F47] text-white p-4 rounded-xl text-center font-bold mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Rent a Car
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
