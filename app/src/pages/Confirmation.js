import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import ReminderBanner from '../components/ReminderBanner';
import InstructionCard from '../components/InstructionCard';

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};

  const handleDownloadReceipt = () => {
    // Simulate receipt download
    alert('Receipt downloaded successfully!');
  };

  const handleAddToCalendar = () => {
    // Simulate calendar integration
    alert('Rental dates added to your calendar!');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Success Header */}
        <div className="success-header">
          <div className="success-icon">✓</div>
          <h1 className="success-title">Booking Confirmed!</h1>
          <p className="success-message">Your rental has been successfully booked</p>
        </div>

        {/* Booking Details */}
        <div className="booking-details">
          <div className="booking-number">
            <span className="label">Booking Number:</span>
            <span className="number">{bookingData.bookingNumber || 'JF123456'}</span>
          </div>
          
          <div className="booking-summary">
            <h3 className="section-title">Rental Details</h3>
            
            <div className="detail-card">
              <div className="detail-item">
                <span className="detail-label">Tool:</span>
                <span className="detail-value">{bookingData.tool?.name || 'Angle Grinder Pro'}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Rental Period:</span>
                <span className="detail-value">
                  {bookingData.startDate} - {bookingData.endDate} ({bookingData.duration} days)
                </span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Total Cost:</span>
                <span className="detail-value price">{bookingData.totalPrice || 150} DKK</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Payment Method:</span>
                <span className="detail-value">
                  {bookingData.paymentMethod === 'card' ? 'Credit Card' : 'MobilePay'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Instructions */}
        <div className="pickup-instructions">
          <h3 className="section-title">Pickup Instructions</h3>
          <InstructionCard type="pickup" />
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button secondary" onClick={handleDownloadReceipt}>
            📄 Download Receipt
          </button>
          
          <button className="action-button secondary" onClick={handleAddToCalendar}>
            📅 Add to Calendar
          </button>
        </div>

        {/* Primary Action */}
        <button className="primary-action" onClick={handleGoHome}>
          Back to Home
        </button>

        {/* Additional Info */}
        <div className="additional-info">
          <p>
            📧 A confirmation email has been sent to your registered email address.<br/>
            📱 You will receive SMS reminders before your pickup date.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
