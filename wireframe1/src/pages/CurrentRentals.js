import React from 'react';
import { Link } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import './CurrentRentals.css';

function CurrentRentals() {
  return (
    <div className="current-rentals-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to="/profile" className="back-link">[← BACK]</Link>
          <div className="page-title">Current Rentals</div>
        </div>
        
        {/* Current Rentals List */}
        <div className="rentals-list">
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Angle Grinder Pro</div>
              <div className="rental-period">Dec 18 - Dec 20, 2024</div>
              <div className="rental-status">Due in 2 days</div>
            </div>
            <div className="rental-actions">
              <button className="extend-button">[EXTEND]</button>
              <button className="return-button">[RETURN]</button>
            </div>
          </div>
          
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Pressure Washer</div>
              <div className="rental-period">Dec 17 - Dec 19, 2024</div>
              <div className="rental-status overdue">Overdue by 1 day</div>
            </div>
            <div className="rental-actions">
              <button className="extend-button">[EXTEND]</button>
              <button className="return-button urgent">[RETURN NOW]</button>
            </div>
          </div>
          
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Lawn Mower Electric</div>
              <div className="rental-period">Dec 16 - Dec 22, 2024</div>
              <div className="rental-status">Due in 4 days</div>
            </div>
            <div className="rental-actions">
              <button className="extend-button">[EXTEND]</button>
              <button className="return-button">[RETURN]</button>
            </div>
          </div>
          
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Tile Cutter</div>
              <div className="rental-period">Dec 15 - Dec 21, 2024</div>
              <div className="rental-status">Due in 3 days</div>
            </div>
            <div className="rental-actions">
              <button className="extend-button">[EXTEND]</button>
              <button className="return-button">[RETURN]</button>
            </div>
          </div>
          
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Concrete Mixer</div>
              <div className="rental-period">Dec 14 - Dec 20, 2024</div>
              <div className="rental-status">Due in 2 days</div>
            </div>
            <div className="rental-actions">
              <button className="extend-button">[EXTEND]</button>
              <button className="return-button">[RETURN]</button>
            </div>
          </div>
        </div>
        
        {/* Summary */}
        <div className="rentals-summary">
          <div className="summary-item">
            <span className="summary-label">Total Active Rentals:</span>
            <span className="summary-value">5</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Overdue:</span>
            <span className="summary-value overdue">1</span>
          </div>
        </div>
        
      </div>
      
      <BottomNavigation activeTab="profile" />
    </div>
  );
}

export default CurrentRentals;
