import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ToolDetail from './pages/ToolDetail';
import Profile from './pages/Profile';
import CurrentRentals from './pages/CurrentRentals';
import PastRentals from './pages/PastRentals';
import RentalDetail from './pages/RentalDetail';
import BookingDates from './pages/BookingDates';
import BookingExtras from './pages/BookingExtras';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import ExtendRental from './pages/ExtendRental';
import ExtendCheckout from './pages/ExtendCheckout';
import LanguageSelector from './components/LanguageSelector';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ScrollToTop />
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/tools" element={<Catalogue />} />
          <Route path="/tool/:id" element={<ToolDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/current-rentals" element={<CurrentRentals />} />
          <Route path="/past-rentals" element={<PastRentals />} />
          <Route path="/rental/:id" element={<RentalDetail />} />
          <Route path="/booking-dates/:id" element={<BookingDates />} />
          <Route path="/booking-extras/:id" element={<BookingExtras />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/extend-rental/:id" element={<ExtendRental />} />
          <Route path="/extend-checkout/:id" element={<ExtendCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
