import '../App.css';

function Catalogue() {
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
          <h1 className="section-title">Catalogue</h1>
        </div>
        
        {/* Filters - D) Filters / search */}
        <div className="filters-section">
          <div className="search-field">
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="filter-controls">
            <div className="filter-option">
              <input type="checkbox" id="filter1" />
              <label htmlFor="filter1">Option</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="filter2" />
              <label htmlFor="filter2">Option</label>
            </div>
            <select className="filter-select">
              <option>Filter</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <button className="outline-button">Apply filters</button>
        </div>
        
        {/* Results grid - E) Results grid / catalogue */}
        <div className="catalogue-results">
          <div className="results-row">
            <div className="result-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
            <div className="result-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
          </div>
          <div className="results-row">
            <div className="result-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
            <div className="result-card">
              <div className="card-image">[IMAGE]</div>
              <div className="item-title">Item title</div>
              <div className="card-meta">
                <span className="meta-text">Meta text</span>
                <span className="price">Price</span>
              </div>
              <button className="outline-button">Button</button>
            </div>
          </div>
          <div className="pagination">
            <span className="pagination-link">Prev</span>
            <span className="pagination-separator">·</span>
            <span className="pagination-link">1</span>
            <span className="pagination-separator">·</span>
            <span className="pagination-link">2</span>
            <span className="pagination-separator">·</span>
            <span className="pagination-link">Next</span>
            <span className="sort-link">Sort</span>
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

export default Catalogue;
