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
          <Link to="/profile" className="back-link">← BACK</Link>
          <div className="page-title">Current Rentals</div>
        </div>
        
        {/* Current Rentals List */}
        <div className="rentals-list">
          <RentalCard
            image={grinder}
            toolName="Angle Grinder Pro"
            timeRemaining="2 days"
            overdue={false}
            onExtend={() => handleExtend('Angle Grinder Pro')}
            onReturn={() => handleReturn('Angle Grinder Pro')}
          />
          
          <RentalCard
            image={washer}
            toolName="Pressure Washer"
            timeRemaining="Overdue"
            overdue={true}
            onExtend={() => handleExtend('Pressure Washer')}
            onReturn={() => handleReturn('Pressure Washer')}
          />
          
          <RentalCard
            image={mower}
            toolName="Lawn Mower Electric"
            timeRemaining="4 days"
            overdue={false}
            onExtend={() => handleExtend('Lawn Mower Electric')}
            onReturn={() => handleReturn('Lawn Mower Electric')}
          />
          
          <RentalCard
            image={tileCutter}
            toolName="Tile Cutter"
            timeRemaining="3 days"
            overdue={false}
            onExtend={() => handleExtend('Tile Cutter')}
            onReturn={() => handleReturn('Tile Cutter')}
          />
          
          <RentalCard
            image={mixer}
            toolName="Concrete Mixer"
            timeRemaining="8 hours"
            overdue={false}
            onExtend={() => handleExtend('Concrete Mixer')}
            onReturn={() => handleReturn('Concrete Mixer')}
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
      
      <BottomNavigation activeTab="profile" />
      
      <ReturnPopup 
        isOpen={isReturnPopupOpen}
        onClose={closeReturnPopup}
        toolName={selectedTool}
      />
    </div>
  );
}

export default CurrentRentals;
