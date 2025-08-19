import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ToolDetail from './pages/ToolDetail';
import Profile from './pages/Profile';
import CurrentRentals from './pages/CurrentRentals';
import PastRentals from './pages/PastRentals';
import BookingDates from './pages/BookingDates';
import BookingExtras from './pages/BookingExtras';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/tools" element={<Catalogue />} />
          <Route path="/tool/:id" element={<ToolDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/current-rentals" element={<CurrentRentals />} />
          <Route path="/past-rentals" element={<PastRentals />} />
          <Route path="/booking-dates/:id" element={<BookingDates />} />
          <Route path="/booking-extras/:id" element={<BookingExtras />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
