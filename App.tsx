
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListingPage from './pages/ListingPage';
import DetailsPage from './pages/DetailsPage';
import ContactPage from './pages/ContactPage';
import LocationCarRentalPage from './pages/LocationCarRentalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Listing Pages */}
            <Route path="/car-rental" element={<ListingPage type="car" />} />
            <Route path="/destinations" element={<ListingPage type="destination" />} />
            <Route path="/tours" element={<ListingPage type="tour" />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Location-based Car Rental Pages */}
            <Route path="/car-rental/el-nido" element={<LocationCarRentalPage location="el-nido" />} />
            <Route path="/car-rental/coron" element={<LocationCarRentalPage location="coron" />} />
            <Route path="/car-rental/puerto-princesa" element={<LocationCarRentalPage location="puerto-princesa" />} />
            
            {/* Details Pages */}
            <Route path="/car/:id" element={<DetailsPage type="car" />} />
            <Route path="/destination/:id" element={<DetailsPage type="destination" />} />
            <Route path="/tour/:id" element={<DetailsPage type="tour" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
