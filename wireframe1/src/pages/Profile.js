import '../App.css';

function Profile() {
  return (
    <div className="app">
      {/* Reminder bar - replaces ReminderBanner */}
      <div className="lowfi-box utility-bar">
        Reminder bar
      </div>
      
      <div className="main-content">
        {/* Hero - replaces page header */}
        <div className="lowfi-box hero">
          Hero
        </div>
        
        {/* Content - replaces current rentals summary */}
        <div className="lowfi-box rental-summary">
          Current rentals
        </div>
        
        {/* Content - replaces past rentals summary */}
        <div className="lowfi-box rental-history">
          Rental history
        </div>
        
        {/* Form - replaces personal information */}
        <div className="lowfi-box profile-form">
          Personal info
        </div>
        
        {/* Content - replaces payment method */}
        <div className="lowfi-box payment-section">
          Payment method
        </div>
        
        {/* Content - replaces notification settings */}
        <div className="lowfi-box settings-section">
          Settings
        </div>
      </div>
      
      {/* Navigation bar - replaces BottomNavigation */}
      <div className="lowfi-box bottom-navigation">
        Navigation bar
      </div>
    </div>
  );
}

export default Profile;
