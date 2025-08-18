import { Link } from 'react-router-dom';
import './CurrentRentals.css';

function CurrentRentals() {
  // Mock data for current rentals - following wireframe guidelines
  const allCurrentRentals = [
    {
      id: 1,
      toolName: "Angle Grinder Pro",
      dueDate: "Dec 20, 2024",
      dueTime: "3:00 PM"
    },
    {
      id: 2,
      toolName: "Pressure Washer",
      dueDate: "Dec 19, 2024", 
      dueTime: "11:00 AM",
      overdue: true
    },
    {
      id: 3,
      toolName: "Lawn Mower Electric",
      dueDate: "Dec 22, 2024",
      dueTime: "5:00 PM"
    },
    {
      id: 4,
      toolName: "Tile Cutter",
      dueDate: "Dec 21, 2024",
      dueTime: "2:00 PM"
    },
    {
      id: 5,
      toolName: "Concrete Mixer",
      dueDate: "Dec 20, 2024",
      dueTime: "4:00 PM"
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
          <div key={rental.id} className={`rental-card ${rental.overdue ? 'overdue' : ''}`}>
            <div className="rental-image">
              [IMAGE]
            </div>
            
            <div className="rental-info">
              <div className="tool-name">
                {rental.toolName}
              </div>
              <div className="due-info">
                {rental.overdue ? 'Overdue!' : `Due: ${rental.dueDate} at ${rental.dueTime}`}
              </div>
            </div>
            
            <div className="rental-actions">
              <div className="action-button return">
                [BUTTON: RETURN]
              </div>
              <div className="action-button extend">
                [BUTTON: EXTEND]
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {remainingCount > 0 && (
        <div className="more-rentals">
          <div className="more-rentals-text">
            + {remainingCount} more rental{remainingCount > 1 ? 's' : ''}
          </div>
          <Link to="/current-rentals" className="view-all-button">
            [VIEW ALL]
          </Link>
        </div>
      )}
    </div>
  );
}

export default CurrentRentals;
