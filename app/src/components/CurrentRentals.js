import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CurrentRentals.css';
import RentalCard from './RentalCard';
import ReturnPopup from './ReturnPopup';
import grinder from '../assets/angle_grinder.png';
import washer from '../assets/washer.jpg';
import mower from '../assets/mower.jpg';
import tileCutter from '../assets/tile_cutter.jpg';
import mixer from '../assets/mixer.jpg';

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

  // Mock data for current rentals - following wireframe guidelines
  const allCurrentRentals = [
    {
      id: 1,
      toolName: "Angle Grinder Pro",
      timeRemaining: "2 days",
      image: grinder
    },
    {
      id: 2,
      toolName: "Pressure Washer",
      timeRemaining: "Overdue",
      overdue: true,
      image: washer
    },
    {
      id: 3,
      toolName: "Lawn Mower Electric",
      timeRemaining: "4 days",
      image: mower
    },
    {
      id: 4,
      toolName: "Tile Cutter",
      timeRemaining: "3 days",
      image: tileCutter
    },
    {
      id: 5,
      toolName: "Concrete Mixer",
      timeRemaining: "8 hours",
      image: mixer
    }
  ];

  // Show only first 3 rentals on home page
  const displayedRentals = allCurrentRentals.slice(0, 3);
  const remainingCount = allCurrentRentals.length - displayedRentals.length;

  return (
    <div className="current-rentals">
      <div className="section-header">
        Current Rentals
      </div>
      
      <div className="rental-cards">
        {displayedRentals.map(rental => (
          <RentalCard
            key={rental.id}
            image={rental.image}
            toolName={rental.toolName}
            timeRemaining={rental.timeRemaining}
            overdue={rental.overdue}
            onExtend={() => handleExtend(rental.toolName)}
            onReturn={() => handleReturn(rental.toolName)}
          />
        ))}
      </div>
      
      {remainingCount > 0 && (
        <div className="more-rentals">
          <div className="more-rentals-text">
            + {remainingCount} more rental{remainingCount > 1 ? 's' : ''}
          </div>
          <Link to="/current-rentals" className="view-all-button">
            View All
          </Link>
        </div>
      )}
      
      <ReturnPopup 
        isOpen={isReturnPopupOpen}
        onClose={closeReturnPopup}
        toolName={selectedTool}
      />
    </div>
  );
}

export default CurrentRentals;
