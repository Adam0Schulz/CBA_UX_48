import React from 'react';
import InstructionCard from './InstructionCard';
import './ReturnPopup.css';

function ReturnPopup({ isOpen, onClose, toolName }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2 className="popup-title">Return Instructions</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="popup-body">
          <div className="tool-info">
            <h3 className="tool-name">{toolName}</h3>
            <p className="return-message">Please follow these instructions to return your rental:</p>
          </div>
          
          <InstructionCard type="dropoff" />
        </div>
        
        <div className="popup-footer">
          <button className="close-popup-button" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturnPopup;
