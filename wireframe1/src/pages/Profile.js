import React from 'react';
import '../App.css';
import './Profile.css';
import BottomNavigation from '../components/BottomNavigation';

function Profile() {
  return (
    <div className="app">
      {/* Reminder bar - B) Reminder/utility bar */}
      <div className="reminder-bar">
        <div className="reminder-content">
          <div className="reminder-icon">[ICON]</div>
          <div className="reminder-text">Reminder text</div>
          <button className="outline-button">Button</button>
        </div>
      </div>

      <div className="main-content">
        {/* Page Header */}
        <h1 className="page-header">Profile</h1>
        
        {/* Current Rentals Section */}
        <div className="profile-section">
          <h2 className="section-title">Current Rentals</h2>
          <div className="rental-summary">
            <div className="summary-info">
              <div className="summary-count">Item count</div>
              <div className="summary-status">Status text</div>
            </div>
            <button className="view-all-button">Button</button>
          </div>
        </div>
        
        {/* Rental History Section */}
        <div className="profile-section">
          <h2 className="section-title">Rental History</h2>
          <div className="rental-summary">
            <div className="summary-info">
              <div className="summary-count">Item count</div>
              <div className="summary-status">Meta text</div>
            </div>
            <button className="view-all-button">Button</button>
          </div>
        </div>
        
        {/* Personal Information Section */}
        <div className="profile-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="personal-info">
            <div className="info-field">
              <div className="field-label">Field label</div>
              <div className="field-value">Field value</div>
              <button className="edit-button">Edit</button>
            </div>
            <div className="info-field">
              <div className="field-label">Field label</div>
              <div className="field-value">Field value</div>
              <button className="edit-button">Edit</button>
            </div>
            <div className="info-field">
              <div className="field-label">Field label</div>
              <div className="field-value">Field value</div>
              <button className="edit-button">Edit</button>
            </div>
            <div className="info-field">
              <div className="field-label">Field label</div>
              <div className="field-value">Field value</div>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        </div>
        
        {/* Payment Method Section */}
        <div className="profile-section">
          <h2 className="section-title">Payment Method</h2>
          <div className="payment-info">
            <div className="payment-card">
              <div className="card-info">
                <div className="card-type">[ICON] Card brand</div>
                <div className="card-number">•••• 0000</div>
                <div className="card-expiry">Expires MM/YY</div>
              </div>
              <div className="card-actions">
                <button className="edit-button">Edit</button>
                <button className="remove-button">Remove</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification Settings Section */}
        <div className="profile-section">
          <h2 className="section-title">Notification Settings</h2>
          <div className="notification-settings">
            <div className="setting-item">
              <div className="setting-info">
                <h2 className="setting-label">Setting title</h2>
                <div className="setting-description">Description lorem</div>
              </div>
              <div className="setting-control">
                <input type="checkbox" /> On/Off
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h2 className="setting-label">Setting title</h2>
                <div className="setting-description">Description lorem</div>
              </div>
              <div className="setting-control">
                <select className="timing-select">
                  <option>Timing</option>
                </select>
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h2 className="setting-label">Setting title</h2>
                <div className="setting-description">Description lorem</div>
              </div>
              <div className="setting-control">
                <input type="checkbox" /> On/Off
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Navigation - A) Navigation bar (mobile) */}
      <div className="bottom-navigation">
        <div className="nav-tabs">
          <div className="nav-tab">Home</div>
          <div className="nav-tab">Catalogue</div>
          <div className="nav-tab">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
