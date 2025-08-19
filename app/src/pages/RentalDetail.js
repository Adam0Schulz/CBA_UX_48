import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import ReturnPopup from '../components/ReturnPopup';
import grinder from '../assets/angle_grinder.png';
import washer from '../assets/washer.jpg';
import './RentalDetail.css';

function RentalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isReturnPopupOpen, setIsReturnPopupOpen] = useState(false);

  // Mock rental data
  const rentalData = {
    'angle-grinder-pro': {
      name: 'Angle Grinder Pro',
      image: grinder,
      dueDate: '2025-08-20T12:00:00',
      description: 'Professional-grade angle grinder perfect for cutting, grinding, and polishing tasks.',
      specifications: [
        'Power: 2400W',
        'Disc Size: 230mm',
        'No-load Speed: 6500 rpm',
        'Weight: 5.2kg'
      ],
      safetyNotes: [
        'Always wear safety goggles and gloves',
        'Ensure proper ventilation when grinding',
        'Check disc condition before use',
        'Never remove safety guard'
      ]
    },
    'pressure-washer': {
      name: 'Pressure Washer',
      image: washer,
      dueDate: '2025-08-20T08:00:00',
      description: 'High-pressure washer ideal for cleaning driveways, patios, and outdoor surfaces.',
      specifications: [
        'Pressure: 150 bar',
        'Flow Rate: 8.5 L/min',
        'Motor: 2200W',
        'Hose Length: 8m'
      ],
      safetyNotes: [
        'Never point nozzle at people or animals',
        'Use appropriate nozzle for surface type',
        'Ensure electrical safety around water',
        'Check connections before starting'
      ]
    }
  };

  const rental = rentalData[id] || rentalData['angle-grinder-pro'];

  const handleExtend = () => {
    navigate(`/booking-dates/${id}`);
  };

  const handleReturn = () => {
    setIsReturnPopupOpen(true);
  };

  const closeReturnPopup = () => {
    setIsReturnPopupOpen(false);
  };

  // Calculate time difference for due date styling
  const now = new Date();
  const due = new Date(rental.dueDate);
  const timeDiff = due.getTime() - now.getTime();
  const hoursUntilDue = timeDiff / (1000 * 3600);
  
  let dueDateClass = '';
  if (hoursUntilDue < 0) {
    dueDateClass = 'overdue';
  } else if (hoursUntilDue <= 24) {
    dueDateClass = 'due-soon';
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="rental-detail-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to="/current-rentals" className="back-link">← Back</Link>
          <h1 className="page-title">Rental Details</h1>
        </div>

        {/* Tool Image */}
        <div className="tool-image-section">
          <Link to={`/tool/${id}`}>
            <img src={rental.image} alt={rental.name} className="tool-image-rental clickable" />
          </Link>
        </div>

        {/* Tool Info */}
        <div className="tool-info-section">
          <Link to={`/tool/${id}`} className="tool-name-link">
            <h2 className="tool-name clickable">{rental.name}</h2>
          </Link>
          <div className={`due-date ${dueDateClass}`}>
            Due: {formatDate(due)}
          </div>
          <p className="tool-description">{rental.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="extend-button" onClick={handleExtend}>
            Extend Rental
          </button>
          <button className="return-button" onClick={handleReturn}>
            How to Return
          </button>
        </div>

        {/* See Product Button */}
        <div className="see-product-section">
          <Link to={`/tool/${id}`} className="see-product-button">
            See Product Details
          </Link>
        </div>

        {/* Specifications */}
        <div className="specifications-section">
          <h3 className="section-title">Specifications</h3>
          <ul className="specifications-list">
            {rental.specifications.map((spec, index) => (
              <li key={index} className="specification-item">{spec}</li>
            ))}
          </ul>
        </div>

        {/* Video Guide */}
        <div className="video-section">
          <h3 className="section-title">Video Guide</h3>
          <div className="video-placeholder">
            <div className="video-content">
              <div className="play-button">▶</div>
              <div className="video-title">How to Use {rental.name}</div>
              <div className="video-duration">3:45</div>
            </div>
          </div>
        </div>

        {/* Safety Notes */}
        <div className="safety-section">
          <h3 className="section-title">Safety Guidelines</h3>
          <ul className="safety-list">
            {rental.safetyNotes.map((note, index) => (
              <li key={index} className="safety-item">{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <h3 className="section-title">Need further help? Contact us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+4570123456" className="contact-link">
                +45 70 12 34 56
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:support@johannesfog.dk" className="contact-link">
                support@johannesfog.dk
              </a>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
      
      <ReturnPopup 
        isOpen={isReturnPopupOpen}
        onClose={closeReturnPopup}
        toolName={rental.name}
      />
    </div>
  );
}

export default RentalDetail;
