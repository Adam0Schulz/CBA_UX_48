import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import './ExtendCheckout.css';
import ReminderBanner from '../components/ReminderBanner';

function ExtendCheckout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const extendData = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const extensionNumber = 'EXT' + Date.now().toString().slice(-6);
      navigate('/confirmation', {
        state: {
          ...extendData,
          extensionNumber,
          isExtension: true,
          paymentMethod
        }
      });
    }, 2000);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="extend-checkout-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to={`/extend-rental/${id}`} className="back-link">← Back</Link>
          <h1 className="page-title">Extension Payment</h1>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="section-title">Extension Summary</h3>
          
          <div className="summary-content">
            <div className="tool-summary">
              <h4 className="tool-name">{extendData.rental?.name}</h4>
              <div className="rental-details">
                <div className="detail-item">
                  <span>Extension Period</span>
                  <span>{formatDate(extendData.startDate)} - {formatDate(extendData.endDate)}</span>
                </div>
                <div className="detail-item">
                  <span>Duration</span>
                  <span>{extendData.duration} day{extendData.duration !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            <div className="price-summary">
              <div className="price-item">
                <span>Daily rate</span>
                <span>{extendData.rental?.dailyPrice} DKK</span>
              </div>
              <div className="price-item">
                <span>Extension duration</span>
                <span>{extendData.duration} day{extendData.duration !== 1 ? 's' : ''}</span>
              </div>
              <div className="price-item total">
                <span>Total extension cost</span>
                <span>{extendData.totalPrice} DKK</span>
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
                <div className="payment-name">💳 Credit/Debit Card</div>
                <div className="payment-desc">Pay securely with your card</div>
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
                <div className="payment-name">📱 MobilePay</div>
                <div className="payment-desc">Quick payment with MobilePay</div>
              </div>
            </div>
          </div>

        </div>

        {/* Payment Form */}
        {paymentMethod === 'card' && (
          <div className="payment-form">
            <h3 className="section-title">Card Details</h3>
            
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
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

        {/* Payment Button */}
        <button 
          className="payment-button"
          onClick={handlePayment}
          disabled={isProcessing || (paymentMethod === 'card' && (!cardNumber || !expiryDate || !cvv))}
        >
          {isProcessing ? 'Processing...' : `Pay ${extendData.totalPrice} DKK`}
        </button>
      </div>
    </div>
  );
}

export default ExtendCheckout;
