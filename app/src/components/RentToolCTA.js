import { Link } from 'react-router-dom';
import './RentToolCTA.css';

function RentToolCTA() {
  return (
    <div className="rent-tool-cta">
      <div className="cta-content">
        <div className="cta-text">
          Need more tools for your project?
        </div>
        <Link to="/tools" className="cta-button">
          Browse Tools
        </Link>
      </div>
    </div>
  );
}

export default RentToolCTA;
