import '../App.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import SearchBar from '../components/SearchBar';

function Catalogue() {
  return (
    <div className="app">
      {/* Reminder Banner Component */}
      <ReminderBanner />
      
      {/* Page Header */}
      <div className="catalogue-header">
        <div className="page-header">
          FOG Hardware - Catalogue
        </div>
      </div>
      
      {/* Search Bar */}
      <SearchBar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Content will be added in next iteration */}
        <div className="content-placeholder">
          [CATALOGUE CONTENT - TO BE DEFINED]
        </div>
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation activeTab="catalogue" />
    </div>
  );
}

export default Catalogue;
