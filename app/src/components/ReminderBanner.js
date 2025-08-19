import './ReminderBanner.css';

function ReminderBanner() {
  return (
    <div className="reminder-banner">
      <div className="banner-content">
        <div className="banner-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 14H11V10H13M13 18H11V16H13M1 21H23L12 2L1 21Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="banner-text">
          Rental due in 2 days
        </div>
        <button className="banner-action">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ReminderBanner;
