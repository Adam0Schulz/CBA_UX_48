import '../App.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import Hero from '../components/Hero';
import CurrentRentals from '../components/CurrentRentals';
import RentToolCTA from '../components/RentToolCTA';
import SustainabilityNudge from '../components/SustainabilityNudge';
import Recommendations from '../components/Recommendations';

function Home() {
  return (
    <div className="app">
      {/* Reminder Banner Component */}
      <ReminderBanner />

      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Area */}
      <main className="main-content" role="main" aria-label="Home page content">
        
        {/* Current Rentals Section */}
        <CurrentRentals />
        
        {/* Primary CTA - Rent a Tool */}
        <RentToolCTA />
        
        {/* Sustainability Nudge - Environmental Impact */}
        <SustainabilityNudge />
        
        {/* Recommendations Section */}
        <Recommendations />
        
      </main>

      {/* Bottom Navigation Component */}
      <BottomNavigation activeTab="home" />
    </div>
  );
}

export default Home;
