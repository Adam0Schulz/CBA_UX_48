import './BottomNavigation.css';
import { Link } from 'react-router-dom';

function BottomNavigation({ activeTab = 'home' }) {
  return (
    <div className="bottom-navigation">
      <Link to="/" className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: HOME]</div>
        <div className="nav-label">HOME</div>
      </Link>
      <Link to="/catalogue" className={`nav-item ${activeTab === 'catalogue' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: CATALOGUE]</div>
        <div className="nav-label">CATALOGUE</div>
      </Link>
      <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: PROFILE]</div>
        <div className="nav-label">PROFILE</div>
      </div>
    </div>
  );
}

export default BottomNavigation;
