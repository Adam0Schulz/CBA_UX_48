import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RentalCard.css';

function RentalCard({ image, toolName, dueDate }) {
  // Calculate time difference
  const now = new Date();
  const due = new Date(dueDate);
  const timeDiff = due.getTime() - now.getTime();
  const hoursUntilDue = timeDiff / (1000 * 3600);
  
  // Determine styling based on time remaining
  let dueDateClass = '';
  if (hoursUntilDue < 0) {
    dueDateClass = 'overdue';
  } else if (hoursUntilDue <= 24) {
    dueDateClass = 'due-soon';
  }
  
  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    const toolId = toolName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/rental/${toolId}`);
  };
  
  return (
    <div className="rental-card" onClick={handleClick}>
      <div className="rental-image">
        {image ? (
          <img src={image} alt={toolName} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px'}} />
        ) : (
          'IMG'
        )}
      </div>
      
      <div className="rental-info">
        <div className="tool-name">
          {toolName}
        </div>
        <div className={`due-date ${dueDateClass}`}>
          Due: {formatDate(due)}
        </div>
      </div>
    </div>
  );
}

export default RentalCard;
