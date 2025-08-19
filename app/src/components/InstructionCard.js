import React from 'react';
import './InstructionCard.css';

function InstructionCard({ type = 'pickup' }) {
  const isDropOff = type === 'dropoff';

  return (
    <div className="instruction-card">
      <div className="instruction-item">
        <div className="instruction-icon">📍</div>
        <div className="instruction-content">
          <div className="instruction-title">
            {isDropOff ? 'Drop-off Location' : 'Pickup Location'}
          </div>
          <div className="instruction-text">
            Johannes Fog Rødovre<br/>
            Rødovre Parkvej 190<br/>
            2610 Rødovre
          </div>
        </div>
      </div>
      
      <div className="instruction-item">
        <div className="instruction-icon">🕐</div>
        <div className="instruction-content">
          <div className="instruction-title">Opening Hours</div>
          <div className="instruction-text">
            Mon-Fri: 7:00 - 18:00<br/>
            Saturday: 8:00 - 16:00<br/>
            Sunday: 10:00 - 14:00
          </div>
        </div>
      </div>
      
      <div className="instruction-item">
        <div className="instruction-icon">{isDropOff ? '📦' : '🆔'}</div>
        <div className="instruction-content">
          <div className="instruction-title">What to Bring</div>
          <div className="instruction-text">
            {isDropOff ? (
              <>
                • The rented tool (clean & complete)<br/>
                • All accessories and attachments<br/>
                • Valid photo ID<br/>
                • Booking confirmation
              </>
            ) : (
              <>
                • Valid photo ID<br/>
                • Booking confirmation<br/>
                • Payment card used for booking
              </>
            )}
          </div>
        </div>
      </div>

      {isDropOff && (
        <div className="instruction-item">
          <div className="instruction-icon">⚠️</div>
          <div className="instruction-content">
            <div className="instruction-title">Important Notes</div>
            <div className="instruction-text">
              • Tools must be returned clean<br/>
              • Check for damage before leaving<br/>
              • Late returns incur additional charges<br/>
              • Get receipt confirmation
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructionCard;
