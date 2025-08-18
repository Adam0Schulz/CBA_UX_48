import './CurrentRentals.css';

function CurrentRentals() {
  // Mock data for current rentals - following wireframe guidelines
  const currentRentals = [
    {
      id: 1,
      toolName: "Power Drill XL",
      dueDate: "Jan 20, 2025",
      dueTime: "3:00 PM"
    },
    {
      id: 2,
      toolName: "Circular Saw",
      dueDate: "Jan 22, 2025", 
      dueTime: "11:00 AM"
    },
    {
      id: 3,
      toolName: "Angle Grinder",
      dueDate: "Jan 25, 2025",
      dueTime: "5:00 PM"
    }
  ];

  return (
    <div className="current-rentals">
      <div className="section-header">
        Current Rentals
      </div>
      
      <div className="rental-cards">
        {currentRentals.map(rental => (
          <div key={rental.id} className="rental-card">
            <div className="rental-image">
              [IMAGE]
            </div>
            
            <div className="rental-info">
              <div className="tool-name">
                {rental.toolName}
              </div>
              <div className="due-info">
                Due: {rental.dueDate} at {rental.dueTime}
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
    </div>
  );
}

export default CurrentRentals;
