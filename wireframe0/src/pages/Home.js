import '../App.css';

function Home() {
  return (
    <div className="app">
      {/* Utility bar - replaces ReminderBanner */}
      <div className="lowfi-box utility-bar">
        Reminder bar
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Hero - replaces page header */}
        <div className="lowfi-box hero">
          Hero
        </div>
        
        {/* Content - replaces CurrentRentals */}
        <div className="lowfi-box content-section">
          Current rentals
        </div>
        
        {/* CTA band - replaces RentToolCTA */}
        <div className="lowfi-box cta-band">
          CTA band
        </div>
        
        {/* Content - replaces SustainabilityNudge */}
        <div className="lowfi-box sustainability-section">
          Sustainability
        </div>
        
        {/* Results grid - replaces Recommendations */}
        <div className="lowfi-box results-grid">
          Recommendations
        </div>
        
      </div>

      {/* Navigation bar - replaces BottomNavigation */}
      <div className="lowfi-box bottom-navigation">
        Navigation bar
      </div>
    </div>
  );
}

export default Home;
