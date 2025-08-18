import './BottomNavigation.css';

function BottomNavigation({ activeTab = 'home' }) {
  return (
    <div className="bottom-navigation">
      <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: HOME]</div>
        <div className="nav-label">HOME</div>
      </div>
      <div className={`nav-item ${activeTab === 'catalogue' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: CATALOGUE]</div>
        <div className="nav-label">CATALOGUE</div>
      </div>
      <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}>
        <div className="nav-icon">[ICON: PROFILE]</div>
        <div className="nav-label">PROFILE</div>
      </div>
    </div>
  );
}

export default BottomNavigation;
