import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './BookingDates.css';
import ReminderBanner from '../components/ReminderBanner';
import grinder from '../assets/grinder.jpg';

function BookingDates() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(1);
  const [totalPrice, setTotalPrice] = useState(120);

  const toolData = {
    name: "Angle Grinder Pro",
    dailyPrice: 120,
    image: grinder
  };

  const handleDateChange = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      const diffTime = Math.abs(endDateObj - startDateObj);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setDuration(diffDays);
      setTotalPrice(diffDays * toolData.dailyPrice);
    }
  };

  const handleContinue = () => {
    if (startDate && endDate) {
      navigate(`/booking-extras/${id}`, {
        state: {
          tool: toolData,
          startDate,
          endDate,
          duration,
          basePrice: totalPrice
        }
      });
    }
  };

  return (
    <div className="booking-dates-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to={`/tool/${id}`} className="back-link">← Back</Link>
          <h1 className="page-title">Select Dates</h1>
        </div>

        {/* Tool Summary */}
        <div className="tool-summary">
          <div className="tool-image">
            <img src={toolData.image} alt={toolData.name} />
          </div>
          <div className="tool-info">
            <h2 className="tool-name">{toolData.name}</h2>
            <div className="tool-price">{toolData.dailyPrice} DKK/day</div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="date-selection">
          <h3 className="section-title">Rental Period</h3>
          
          <div className="date-inputs">
            <div className="date-input-group">
              <label htmlFor="start-date">Start Date</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  handleDateChange(e.target.value, endDate);
                }}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="date-input-group">
              <label htmlFor="end-date">End Date</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  handleDateChange(startDate, e.target.value);
                }}
                min={startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="availability-status available">
            ✓ Available for selected dates
          </div>
        </div>

        {/* Price Preview */}
        <div className="price-preview">
          <h3 className="section-title">Price Summary</h3>
          <div className="price-breakdown">
            <div className="price-item">
              <span>Daily rate</span>
              <span>{toolData.dailyPrice} DKK</span>
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
          disabled={!startDate || !endDate}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BookingDates;
