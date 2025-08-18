import './App.css';
import ReminderBanner from './components/ReminderBanner';
import BottomNavigation from './components/BottomNavigation';
import CurrentRentals from './components/CurrentRentals';
import RentToolCTA from './components/RentToolCTA';
import Recommendations from './components/Recommendations';

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
        
        {/* Recommendations Section */}
        <Recommendations />
        
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation activeTab="home" />
    </div>
  );
}


export default App;
