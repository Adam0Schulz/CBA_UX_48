import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ExtendRental.css';
import ReminderBanner from '../components/ReminderBanner';
import grinder from '../assets/angle_grinder.png';
import washer from '../assets/washer.jpg';

function ExtendRental() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(1);
  const [totalPrice, setTotalPrice] = useState(120);

  // Get today's date as start date
  const today = new Date().toISOString().split('T')[0];
  const todayFormatted = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Mock rental data - should match the rental being extended
  const rentalData = {
    'angle-grinder-pro': {
      name: 'Angle Grinder Pro',
      dailyPrice: 120,
      image: grinder,
      currentDueDate: '2025-08-20T12:00:00'
    },
    'pressure-washer': {
      name: 'Pressure Washer',
      dailyPrice: 95,
      image: washer,
      currentDueDate: '2025-08-20T08:00:00'
    }
  };

  const rental = rentalData[id] || rentalData['angle-grinder-pro'];

  const handleEndDateChange = (newEndDate) => {
    if (newEndDate) {
      const startDateObj = new Date(today);
      const endDateObj = new Date(newEndDate);
      const diffTime = Math.abs(endDateObj - startDateObj);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setDuration(diffDays);
      setTotalPrice(diffDays * rental.dailyPrice);
    }
  };

  const handleContinue = () => {
    if (endDate) {
      navigate(`/extend-checkout/${id}`, {
        state: {
          rental: rental,
          startDate: today,
          endDate,
          duration,
          totalPrice
        }
      });
    }
  };

  return (
    <div className="extend-rental-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to={`/rental/${id}`} className="back-link">← Back</Link>
          <h1 className="page-title">Extend Rental</h1>
        </div>

        {/* Tool Summary */}
        <div className="tool-summary">
          <div className="tool-image">
            <img src={rental.image} alt={rental.name} />
          </div>
          <div className="tool-info">
            <h2 className="tool-name">{rental.name}</h2>
            <div className="tool-price">{rental.dailyPrice} DKK/day</div>
            <div className="current-due">
              Currently due: {new Date(rental.currentDueDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="date-selection">
          <h3 className="section-title">Extension Period</h3>
          
          <div className="date-inputs">
            <div className="date-input-group">
              <label htmlFor="start-date">Extension Start Date</label>
              <input
                type="date"
                id="start-date"
                value={today}
                disabled
                className="disabled-input"
              />
              <small className="input-note">Extension starts today ({todayFormatted})</small>
            </div>
            
            <div className="date-input-group">
              <label htmlFor="end-date">New End Date</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  handleEndDateChange(e.target.value);
                }}
                min={today}
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="availability-status available">
            ✓ Extension available for selected dates
          </div>
        </div>

        {/* Price Preview */}
        <div className="price-preview">
          <h3 className="section-title">Price Summary</h3>
          <div className="price-breakdown">
            <div className="price-item">
              <span>Daily rate</span>
              <span>{rental.dailyPrice} DKK</span>
            </div>
            <div className="price-item">
              <span>Duration</span>
              <span>{duration} day{duration !== 1 ? 's' : ''}</span>
            </div>
            <div className="price-item total">
              <span>Total</span>
              <span>{totalPrice} DKK</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button 
          className="continue-button"
          onClick={handleContinue}
          disabled={!endDate}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ExtendRental;
