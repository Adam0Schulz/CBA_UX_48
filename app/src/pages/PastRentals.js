import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PastRentals.css';
import grinder from '../assets/grinder.jpg';
import washer from '../assets/washer.jpg';
import drill from '../assets/drill.jpg';
import saw from '../assets/rundsav.jpg';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';

function PastRentals() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Tools');
  const [selectedSort, setSelectedSort] = useState('Most Recent');

  const filterOptions = ['All Tools', 'Power Tools', 'Hand Tools', 'Garden Tools'];
  const sortOptions = ['Most Recent', 'Oldest First', 'Price: High to Low', 'Price: Low to High'];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsSortOpen(false);
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
    setIsFilterOpen(false);
  };

  const handleFilterSelect = (option) => {
    setSelectedFilter(option);
    setIsFilterOpen(false);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  const pastRentals = [
    {
      id: 1,
      toolName: "Angle Grinder Pro",
      period: "Jan 15-20, 2025",
      cost: "450 DKK",
      image: grinder
    },
    {
      id: 2,
      toolName: "Pressure Washer",
      period: "Dec 10-15, 2024",
      cost: "320 DKK",
      image: washer
    },
    {
      id: 3,
      toolName: "Cordless Drill Set",
      period: "Nov 5-8, 2024",
      cost: "280 DKK",
      image: drill
    },
    {
      id: 4,
      toolName: "Circular Saw",
      period: "Oct 22-25, 2024",
      cost: "380 DKK",
      image: saw
    },
    {
      id: 5,
      toolName: "Impact Driver",
      period: "Sep 12-16, 2024",
      cost: "250 DKK",
      image: drill
    }
  ];

  return (
    <div className="past-rentals-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div style={{marginBottom: '0px'}} className="page-header">
          <Link to="/profile" className="back-link">← Back to Profile</Link>
          <h1 className="page-title">My Past Rentals</h1>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <div className="custom-dropdown">
            <div className="dropdown-button" onClick={toggleFilter}>
              {selectedFilter} ▼
            </div>
            {isFilterOpen && (
              <>
                <div className="dropdown-backdrop" onClick={toggleFilter}></div>
                <div className="dropdown-options">
                  {filterOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`dropdown-option ${selectedFilter === option ? 'selected' : ''}`}
                      onClick={() => handleFilterSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="custom-dropdown">
            <div className="dropdown-button" onClick={toggleSort}>
              {selectedSort} ▼
            </div>
            {isSortOpen && (
              <>
                <div className="dropdown-backdrop" onClick={toggleSort}></div>
                <div className="dropdown-options">
                  {sortOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`dropdown-option ${selectedSort === option ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Past Rentals List */}
        <div className="past-rentals-list">
          {pastRentals.map((rental) => (
            <div key={rental.id} className="past-rental-item">
              <div className="rental-image">
                <img src={rental.image} alt={rental.toolName} />
              </div>
              <div className="rental-details">
                <div className="rental-name">{rental.toolName}</div>
                <div className="rental-period">{rental.period}</div>
                <div className="rental-cost">{rental.cost}</div>
              </div>
              <div className="rental-actions">
                <button className="receipt-button">Receipt</button>
                <button className="rent-again-button">Rent Again</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Section */}
        <div className="load-more-section">
          <div className="showing-text">Showing 5 of 23 rentals</div>
          <button className="load-more-button">Load More Rentals</button>
        </div>
        
        {/* Summary */}
        <div className="rentals-summary">
          <div className="summary-item">
            <span className="summary-label">Total Rentals</span>
            <span className="summary-value">23</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Spent</span>
            <span className="summary-value">6,840 DKK</span>
          </div>
        </div>
        
      </div>
      
      <BottomNavigation activeTab={null} />
    </div>
  );
}

export default PastRentals;
