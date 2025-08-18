import './ReminderBanner.css';

function ReminderBanner() {
  return (
    <div className="reminder-banner">
      <div className="banner-content">
        <div className="banner-text">
          [ICON: ALERT] Rental due in 2 days
        </div>
        <div className="banner-action">
          [BUTTON: VIEW]
        </div>
      </div>
    </div>
  );
}

export default ReminderBanner;
