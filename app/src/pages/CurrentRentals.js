import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import RentalCard from '../components/RentalCard';
import ReturnPopup from '../components/ReturnPopup';
import grinder from '../assets/angle_grinder.png';
import washer from '../assets/washer.jpg';
import mower from '../assets/mower.jpg';
import tileCutter from '../assets/tile_cutter.jpg';
import mixer from '../assets/mixer.jpg';
import './CurrentRentals.css';

function CurrentRentals() {
  const navigate = useNavigate();
  const [isReturnPopupOpen, setIsReturnPopupOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');

  const handleReturn = (toolName) => {
    setSelectedTool(toolName);
    setIsReturnPopupOpen(true);
  };

  const handleExtend = (toolName) => {
    // Navigate to booking flow for extending rental
    const toolId = toolName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/booking-dates/${toolId}`);
  };

  const closeReturnPopup = () => {
    setIsReturnPopupOpen(false);
    setSelectedTool('');
  };

  return (
    <div className="current-rentals-page">
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <Link to="/profile" className="back-link">← Back to Profile</Link>
          <div className="page-title">My Current Rentals</div>
        </div>
        
        {/* Current Rentals List */}
        <div className="rentals-list">
          <RentalCard
            image={grinder}
            toolName="Angle Grinder Pro"
            dueDate="2025-08-20T12:00:00"
          />
          
          <RentalCard
            image={washer}
            toolName="Pressure Washer"
            dueDate="2025-08-20T08:00:00"
          />
          
          <RentalCard
            image={mower}
            toolName="Lawn Mower Electric"
            dueDate="2025-08-25T14:00:00"
          />
          
          <RentalCard
            image={tileCutter}
            toolName="Tile Cutter"
            dueDate="2025-08-23T10:00:00"
          />
          
          <RentalCard
            image={mixer}
            toolName="Concrete Mixer"
            dueDate="2025-08-22T16:00:00"
          />
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
      
      <BottomNavigation activeTab={null} />
      
      <ReturnPopup 
        isOpen={isReturnPopupOpen}
        onClose={closeReturnPopup}
        toolName={selectedTool}
      />
    </div>
  );
}

export default CurrentRentals;
