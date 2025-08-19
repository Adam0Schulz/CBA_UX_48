import React from 'react';
import { Link } from 'react-router-dom';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import './Profile.css';

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
        <div className="profile-section">
          <div className="section-title">Current Rentals</div>
          <div className="rental-summary">
            <div className="summary-info">
              <div className="summary-count">5 active rentals</div>
              <div className="summary-status">1 overdue</div>
            </div>
            <Link to="/current-rentals" className="view-all-link">VIEW ALL</Link>
          </div>
        </div>
        
        {/* Past Rentals Section */}
        <div className="profile-section">
          <div className="section-title">Past Rentals</div>
          <div className="rental-summary">
            <div className="summary-info">
              <div className="summary-count">47 completed rentals</div>
              <div className="summary-status">Total spent: DKK 8,420</div>
            </div>
            <Link to="/past-rentals" className="view-all-link">VIEW ALL</Link>
          </div>
        </div>
        
        {/* Personal Information Section */}
        <div className="profile-section">
          <div className="section-title">Personal Information</div>
          <div className="personal-info">
            <div className="info-field">
              <div className="field-label">Name</div>
              <div className="field-value">Brian Bæk</div>
              <button className="edit-button">EDIT</button>
            </div>
            <div className="info-field">
              <div className="field-label">Email</div>
              <div className="field-value">brian.baek@email.dk</div>
              <button className="edit-button">EDIT</button>
            </div>
            <div className="info-field">
              <div className="field-label">Phone</div>
              <div className="field-value">+45 12 34 56 78</div>
              <button className="edit-button">EDIT</button>
            </div>
            <div className="info-field">
              <div className="field-label">Address</div>
              <div className="field-value">Nørrebrogade 123, 2200 København N</div>
              <button className="edit-button">EDIT</button>
            </div>
          </div>
        </div>
        
        {/* Saved Payment Method Section */}
        <div className="profile-section">
          <div className="section-title">Saved Payment Method</div>
          <div className="payment-info">
            <div className="payment-card">
              <div className="card-info">
                <div className="card-type">VISA</div>
                <div className="card-number">**** **** **** 1234</div>
                <div className="card-expiry">Expires 12/26</div>
              </div>
              <div className="card-actions">
                <button className="edit-button">EDIT</button>
                <button className="remove-button">REMOVE</button>
              </div>
            </div>
            <button className="add-payment-button">ADD NEW CARD</button>
          </div>
        </div>
        
        {/* Notification Settings Section */}
        <div className="profile-section">
          <div className="section-title">Notification Settings</div>
          <div className="notification-settings">
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-label">Email Reminders</div>
                <div className="setting-description">Get reminded before rental ends</div>
              </div>
              <div className="setting-control">
                <button className="toggle-button active">ON</button>
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-label">Reminder Timing</div>
                <div className="setting-description">When to send reminders</div>
              </div>
              <div className="setting-control">
                <select className="timing-select">
                  <option>2 hours before</option>
                  <option>4 hours before</option>
                  <option>1 day before</option>
                </select>
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-label">Marketing Emails</div>
                <div className="setting-description">Promotions and new tools</div>
              </div>
              <div className="setting-control">
                <button className="toggle-button">OFF</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <BottomNavigation activeTab="profile" />
    </div>
  );
}

export default Profile;
