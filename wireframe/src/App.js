import './App.css';
import ReminderBanner from './components/ReminderBanner';
import BottomNavigation from './components/BottomNavigation';
import CurrentRentals from './components/CurrentRentals';
import RentToolCTA from './components/RentToolCTA';

// home page
function App() {
  return (
    <div className="app">
      {/* Reminder Banner Component */}
      <ReminderBanner />

      {/* Main Content Area */}
      <div className="main-content">
        <div className="page-header">
          FOG Hardware - Dashboard
        </div>
        
        {/* Current Rentals Section */}
        <CurrentRentals />
        
        {/* Primary CTA - Rent a Tool */}
        <RentToolCTA />
        
        {/* Additional content will be added in next iteration */}
        <div className="content-placeholder">
          [ADDITIONAL CONTENT - TO BE DEFINED]
        </div>
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation activeTab="home" />
    </div>
  );
}


export default App;
