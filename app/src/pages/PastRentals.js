import React from 'react';
import { Link } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import './PastRentals.css';

function PastRentals() {
  return (
    <div className="past-rentals-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to="/profile" className="back-link">[← BACK]</Link>
          <div className="page-title">Past Rentals</div>
        </div>
        
        {/* Filter Options */}
        <div className="filter-section">
          <select className="filter-select">
            <option>All rentals</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <select className="sort-select">
            <option>Sort by date (newest)</option>
            <option>Sort by date (oldest)</option>
            <option>Sort by tool name</option>
          </select>
        </div>
        
        {/* Past Rentals List */}
        <div className="past-rentals-list">
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Power Drill XL</div>
              <div className="rental-period">Dec 15-17, 2024</div>
              <div className="rental-cost">DKK 180</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Circular Saw</div>
              <div className="rental-period">Dec 8-10, 2024</div>
              <div className="rental-cost">DKK 240</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Hedge Trimmer</div>
              <div className="rental-period">Nov 25-26, 2024</div>
              <div className="rental-cost">DKK 120</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Pressure Washer</div>
              <div className="rental-period">Nov 18-20, 2024</div>
              <div className="rental-cost">DKK 300</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Angle Grinder</div>
              <div className="rental-period">Nov 12-14, 2024</div>
              <div className="rental-cost">DKK 150</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Tile Cutter</div>
              <div className="rental-period">Oct 28-30, 2024</div>
              <div className="rental-cost">DKK 200</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Lawn Mower</div>
              <div className="rental-period">Oct 15-17, 2024</div>
              <div className="rental-cost">DKK 180</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
          
          <div className="past-rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-details">
              <div className="rental-name">Concrete Mixer</div>
              <div className="rental-period">Oct 8-10, 2024</div>
              <div className="rental-cost">DKK 350</div>
            </div>
            <div className="rental-actions">
              <button className="receipt-button">[RECEIPT]</button>
              <button className="rent-again-button">[RENT AGAIN]</button>
            </div>
          </div>
        </div>
        
        {/* Load More */}
        <div className="load-more-section">
          <button className="load-more-button">[LOAD MORE RENTALS]</button>
          <div className="showing-text">Showing 8 of 47 rentals</div>
        </div>
        
        {/* Summary */}
        <div className="rentals-summary">
          <div className="summary-item">
            <span className="summary-label">Total Past Rentals:</span>
            <span className="summary-value">47</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Spent:</span>
            <span className="summary-value">DKK 8,420</span>
          </div>
        </div>
        
      </div>
      
      <BottomNavigation activeTab="profile" />
    </div>
  );
}

export default PastRentals;
