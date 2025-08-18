import './Profile.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import CurrentRentals from '../components/CurrentRentals';

function Profile() {
  return (
    <div className="profile">
      {/* Banner Component */}
      <ReminderBanner />
      
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          Profile
        </div>
        
        {/* Current Rentals Section */}
        <CurrentRentals />
        
      </div>
      
      <BottomNavigation activeTab="profile" />
    </div>
  );
}

export default Profile;
