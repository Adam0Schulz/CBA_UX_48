import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import './Checkout.css';
import ReminderBanner from '../components/ReminderBanner';

function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const bookingData = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCardChange = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = async () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const bookingNumber = 'JF' + Date.now().toString().slice(-6);
      navigate('/confirmation', {
        state: {
          ...bookingData,
          bookingNumber,
          paymentMethod
        }
      });
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to={`/booking-extras/${id}`} className="back-link">← Back</Link>
          <h1 className="page-title">Checkout</h1>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="section-title">Order Summary</h3>
          
          <div className="summary-content">
            <div style={{display: 'block'}} className="tool-summary">
              <h4 className="tool-name">{bookingData.tool?.name || 'Angle Grinder Pro'}</h4>
              <div className="rental-details">
                <div className="detail-item">
                  <span>Dates:</span>
                  <span>{bookingData.startDate} - {bookingData.endDate}</span>
                </div>
                <div className="detail-item">
                  <span>Duration:</span>
                  <span>{bookingData.duration} days</span>
                </div>
                <div className="detail-item">
                  <span>Pickup Location:</span>
                  <span>Johannes Fog Rødovre</span>
                </div>
              </div>
            </div>
            
            <div className="price-summary">
              <div className="price-item">
                <span>Tool rental</span>
                <span>{bookingData.basePrice || 120} DKK</span>
              </div>
              <div className="price-item">
                <span>Extras</span>
                <span>{bookingData.extrasPrice || 30} DKK</span>
              </div>
              <div className="price-item total">
                <span>Total</span>
                <span>{bookingData.totalPrice || 150} DKK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="payment-section">
          <h3 className="section-title">Payment Method</h3>
          
          <div className="payment-methods">
            <div 
              className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="payment-radio">
                <div className={`radio ${paymentMethod === 'card' ? 'checked' : ''}`}></div>
              </div>
              <div className="payment-info">
                <div className="payment-name">Credit/Debit Card</div>
                <div className="payment-desc">Visa, Mastercard, American Express</div>
              </div>
            </div>
            
            <div 
              className={`payment-method ${paymentMethod === 'mobilepay' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('mobilepay')}
            >
              <div className="payment-radio">
                <div className={`radio ${paymentMethod === 'mobilepay' ? 'checked' : ''}`}></div>
              </div>
              <div className="payment-info">
                <div className="payment-name">MobilePay</div>
                <div className="payment-desc">Pay with your mobile phone</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        {paymentMethod === 'card' && (
          <div className="payment-form">
            <h3 className="section-title">Card Details</h3>
            
            <div className="form-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={cardDetails.name}
                onChange={(e) => handleCardChange('name', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => handleCardChange('number', e.target.value)}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => handleCardChange('expiry', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => handleCardChange('cvv', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'mobilepay' && (
          <div className="mobilepay-info">
            <div className="mobilepay-message">
              <p>You will be redirected to MobilePay to complete your payment.</p>
            </div>
          </div>
        )}

        {/* Terms Acceptance */}
        <div className="terms-acceptance">
          <div className="checkbox-group" onClick={() => setTermsAccepted(!termsAccepted)}>
            <div className={`checkbox ${termsAccepted ? 'checked' : ''}`}>
              {termsAccepted && '✓'}
            </div>
            <label>
              I accept the <span className="terms-link">Terms & Conditions</span> and <span className="terms-link">Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Payment Button */}
        <button 
          className="payment-button"
          onClick={handlePayment}
          disabled={isProcessing || !termsAccepted}
        >
          {isProcessing ? 'Processing...' : `Pay & Confirm Booking - ${bookingData.totalPrice || 150} DKK`}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
