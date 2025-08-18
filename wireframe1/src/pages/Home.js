import '../App.css';

function Home() {
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

      {/* Main Content Area */}
      <div className="main-content">
        {/* Hero - C) Hero */}
        <div className="hero-section">
          <h1 className="section-title">Dashboard</h1>
          <div className="body-text">Body text</div>
        </div>
        
        {/* Current rentals - F) Current rentals / lists */}
        <div className="current-rentals-section">
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-info">
              <div className="item-title">Item title</div>
              <div className="status-text">Due text</div>
            </div>
            <div className="rental-actions">
              <button className="outline-button">Action</button>
            </div>
          </div>
          <div className="rental-item">
            <div className="rental-image">[IMAGE]</div>
            <div className="rental-info">
              <div className="item-title">Item title</div>
              <div className="status-text">Overdue</div>
            </div>
            <div className="rental-actions">
              <button className="outline-button">Action</button>
            </div>
          </div>
        </div>
        
        {/* CTA band - centered button */}
        <div className="cta-section">
          <button className="outline-button primary">Rent a tool</button>
        </div>
        
        {/* Sustainability - info card with icon */}
        <div className="sustainability-section">
          <div className="sustainability-content">
            <div className="sustainability-icon">[ICON]</div>
            <div className="sustainability-text">
              <div className="body-text">Lorem ipsum dolor sit amet consectetur.</div>
              <div className="body-text">Adipiscing elit sed do eiusmod.</div>
            </div>
          </div>
        </div>
        
        {/* Recommendations - E) Results grid / catalogue */}
        <div className="recommendations-section">
          <div className="recommendations-row">
            <div className="recommendation-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
            <div className="recommendation-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
          </div>
          <div className="recommendations-row">
            <div className="recommendation-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
            <div className="recommendation-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
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

export default Home;
