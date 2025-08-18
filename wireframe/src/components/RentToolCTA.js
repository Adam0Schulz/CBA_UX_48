import { Link } from 'react-router-dom';
import './RentToolCTA.css';

function RentToolCTA() {
  return (
    <div className="rent-tool-cta">
      <div className="cta-content">
        <div className="cta-text">
          Need more tools?
        </div>
        <Link to="/catalogue" className="cta-button">
          [BUTTON: RENT A TOOL]
        </Link>
      </div>
    </div>
  );
}

export default RentToolCTA;
