import React from 'react';
import './RentalCard.css';

function RentalCard({ image, toolName, timeRemaining, overdue = false, onExtend, onReturn }) {
  return (
    <div className={`rental-card ${overdue ? 'overdue' : ''}`}>
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
        <div className="due-info">
          {overdue ? timeRemaining : `${timeRemaining} remaining`}
        </div>
      </div>
      
      <div className="rental-actions">
        <button className="action-button extend" onClick={onExtend}>
          Extend
        </button>
        <button className={`action-button return ${overdue ? 'urgent' : ''}`} onClick={onReturn}>
          Return
        </button>
      </div>
    </div>
  );
}

export default RentalCard;
