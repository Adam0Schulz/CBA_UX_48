import './SustainabilityNudge.css';

function SustainabilityNudge() {
  return (
    <div className="sustainability-nudge">
      <div className="nudge-content">
        <div className="nudge-icon">
          [ICON: LEAF]
        </div>
        <div className="nudge-text">
          <div className="impact-stat">
            You've saved 47 kg CO₂
          </div>
          <div className="impact-description">
            by renting instead of buying
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityNudge;
