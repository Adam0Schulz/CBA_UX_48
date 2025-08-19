import './BottomNavigation.css';
import { Link } from 'react-router-dom';

function BottomNavigation({ activeTab = null }) {
  return (
    <nav className="bottom-navigation" role="navigation" aria-label="Main navigation">
      <Link to="/" className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} aria-label="Go to home page">
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="nav-label">HOME</div>
      </Link>
      <Link to="/catalogue" className={`nav-item ${activeTab === 'catalogue' ? 'active' : ''}`} aria-label="Go to tools catalogue">
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="nav-label">TOOLS</div>
      </Link>
      <Link to="/profile" className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} aria-label="Go to user profile">
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="nav-label">PROFILE</div>
      </Link>
    </nav>
  );
}

export default BottomNavigation;
