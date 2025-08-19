import React from 'react';
import { Link } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import RentalCard from '../components/RentalCard';
import grinder from '../assets/angle_grinder.png';
import washer from '../assets/washer.jpg';
import mower from '../assets/mower.jpg';
import tileCutter from '../assets/tile_cutter.jpg';
import mixer from '../assets/mixer.jpg';
import './CurrentRentals.css';

function CurrentRentals() {
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
            onExtend={() => console.log('Extend Angle Grinder Pro')}
            onReturn={() => console.log('Return Angle Grinder Pro')}
          />
          
          <RentalCard
            image={washer}
            toolName="Pressure Washer"
            timeRemaining="Overdue"
            overdue={true}
            onExtend={() => console.log('Extend Pressure Washer')}
            onReturn={() => console.log('Return Pressure Washer')}
          />
          
          <RentalCard
            image={mower}
            toolName="Lawn Mower Electric"
            timeRemaining="4 days"
            overdue={false}
            onExtend={() => console.log('Extend Lawn Mower Electric')}
            onReturn={() => console.log('Return Lawn Mower Electric')}
          />
          
          <RentalCard
            image={tileCutter}
            toolName="Tile Cutter"
            timeRemaining="3 days"
            overdue={false}
            onExtend={() => console.log('Extend Tile Cutter')}
            onReturn={() => console.log('Return Tile Cutter')}
          />
          
          <RentalCard
            image={mixer}
            toolName="Concrete Mixer"
            timeRemaining="8 hours"
            overdue={false}
            onExtend={() => console.log('Extend Concrete Mixer')}
            onReturn={() => console.log('Return Concrete Mixer')}
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
    </div>
  );
}

export default CurrentRentals;
