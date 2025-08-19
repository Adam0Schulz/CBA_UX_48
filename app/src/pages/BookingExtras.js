import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import './BookingExtras.css';
import ReminderBanner from '../components/ReminderBanner';

function BookingExtras() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const bookingData = location.state || {};
  
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showTerms, setShowTerms] = useState(false);

  const extras = [
    { id: 'protection', name: 'Tool Protection Insurance', price: 25, required: false },
    { id: 'delivery', name: 'Home Delivery', price: 50, required: false },
    { id: 'setup', name: 'Professional Setup', price: 75, required: false },
    { id: 'safety', name: 'Safety Equipment Kit', price: 30, required: true }
  ];

  const handleExtraToggle = (extraId) => {
    const extra = extras.find(e => e.id === extraId);
    if (extra.required) return;

    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculateTotal = () => {
    const basePrice = bookingData.basePrice || 120;
    const extrasPrice = extras
      .filter(extra => selectedExtras.includes(extra.id) || extra.required)
      .reduce((sum, extra) => sum + extra.price, 0);
    return basePrice + extrasPrice;
  };

  const handleContinue = () => {
    const requiredExtras = extras.filter(e => e.required).map(e => e.id);
    const allSelectedExtras = [...new Set([...selectedExtras, ...requiredExtras])];
    
    navigate(`/checkout/${id}`, {
      state: {
        ...bookingData,
        selectedExtras: allSelectedExtras,
        extrasPrice: extras
          .filter(extra => allSelectedExtras.includes(extra.id))
          .reduce((sum, extra) => sum + extra.price, 0),
        totalPrice: calculateTotal()
      }
    });
  };

  return (
    <div className="booking-extras-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to={`/booking-dates/${id}`} className="back-link">← Back</Link>
          <h1 className="page-title">Extras & Terms</h1>
        </div>

        {/* Tool Summary */}
        <div className="tool-summary">
          <div className="tool-info">
            <h2 className="tool-name">{bookingData.tool?.name || 'Angle Grinder Pro'}</h2>
            <div className="rental-dates">
              {bookingData.startDate} - {bookingData.endDate} ({bookingData.duration} days)
            </div>
          </div>
        </div>

        {/* Extras Selection */}
        <div className="extras-section">
          <h3 className="section-title">Add-ons & Services</h3>
          
          <div className="extras-list">
            {extras.map(extra => (
              <div 
                key={extra.id} 
                className={`extra-item ${selectedExtras.includes(extra.id) || extra.required ? 'selected' : ''} ${extra.required ? 'required' : ''}`}
                onClick={() => handleExtraToggle(extra.id)}
              >
                <div className="extra-checkbox">
                  <div className={`checkbox ${selectedExtras.includes(extra.id) || extra.required ? 'checked' : ''}`}>
                    {(selectedExtras.includes(extra.id) || extra.required) && '✓'}
                  </div>
                </div>
                <div className="extra-details">
                  <div className="extra-name">
                    {extra.name}
                    {extra.required && <span className="required-badge">Required</span>}
                  </div>
                  <div className="extra-price">+{extra.price} DKK</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Terms */}
        <div className="terms-section">
          <h3 className="section-title">Rental Terms</h3>
          
          <div className="terms-preview">
            <p>By continuing, you agree to our rental terms and conditions.</p>
            <button 
              className="terms-link"
              onClick={() => setShowTerms(true)}
            >
              Read Full Terms & Conditions
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="price-breakdown-section">
          <h3 className="section-title">Price Breakdown</h3>
          
          <div className="price-breakdown">
            <div className="price-item">
              <span>Tool rental ({bookingData.duration} days)</span>
              <span>{bookingData.basePrice || 120} DKK</span>
            </div>
            
            {extras
              .filter(extra => selectedExtras.includes(extra.id) || extra.required)
              .map(extra => (
                <div key={extra.id} className="price-item">
                  <span>{extra.name}</span>
                  <span>+{extra.price} DKK</span>
                </div>
              ))
            }
            
            <div className="price-item total">
              <span>Total</span>
              <span>{calculateTotal()} DKK</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button 
          className="continue-button"
          onClick={handleContinue}
        >
          Go to Checkout
        </button>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="terms-modal">
          <div className="terms-backdrop" onClick={() => setShowTerms(false)}></div>
          <div className="terms-content">
            <div className="terms-header">
              <h3>Rental Terms & Conditions</h3>
              <button className="close-button" onClick={() => setShowTerms(false)}>✕</button>
            </div>
            <div className="terms-body">
              <h4>1. Rental Period</h4>
              <p>Tools must be returned by the agreed end date. Late returns incur additional charges.</p>
              
              <h4>2. Tool Condition</h4>
              <p>Tools must be returned in the same condition as received. Damage fees may apply.</p>
              
              <h4>3. Safety Requirements</h4>
              <p>Renters must use appropriate safety equipment and follow all safety guidelines.</p>
              
              <h4>4. Liability</h4>
              <p>Renters are responsible for any damage or loss during the rental period.</p>
              
              <h4>5. Cancellation</h4>
              <p>Cancellations must be made at least 24 hours before pickup for full refund.</p>
            </div>
            <button className="terms-accept" onClick={() => setShowTerms(false)}>
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingExtras;
