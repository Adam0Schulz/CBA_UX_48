import './FilterButton.css';
import { useState } from 'react';
import SortDropdown from './SortDropdown';

function FilterButton() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="filter-section">
      {/* Filter Button */}
      <div className="filter-button" onClick={toggleFilter}>
FILTERS
      </div>
      
      {/* Sort Dropdown */}
      <SortDropdown />

      {/* Filter Popup */}
      {isFilterOpen && (
        <>
          <div className="filter-backdrop" onClick={toggleFilter}></div>
          <div className="filter-popup">
            <div className="filter-header">
              <div className="filter-title">Filters</div>
              <div className="filter-close" onClick={toggleFilter}>
✕
              </div>
            </div>
            
            <div className="filter-content">
              {/* Price Range Filter */}
              <div className="filter-group">
                <div className="filter-label">Price Range</div>
                <div className="filter-options">
                  <div className="price-inputs">
                    <input type="text" className="price-input" placeholder="Min" />
                    <div className="price-separator">-</div>
                    <input type="text" className="price-input" placeholder="Max" />
                  </div>
                </div>
              </div>

              {/* Availability Filter */}
              <div className="filter-group">
                <div className="filter-label">Availability</div>
                <div className="filter-options">
                  <div className="filter-checkbox">
                    <div className="checkbox"></div>
                    <div className="checkbox-label">Available now</div>
                  </div>
                  <div className="filter-checkbox">
                    <div className="checkbox"></div>
                    <div className="checkbox-label">Available this week</div>
                  </div>
                </div>
              </div>

              {/* Skill Level Filter */}
              <div className="filter-group">
                <div className="filter-label">Skill Level</div>
                <div className="filter-options">
                  <div className="filter-checkbox">
                    <div className="checkbox"></div>
                    <div className="checkbox-label">Beginner</div>
                  </div>
                  <div className="filter-checkbox">
                    <div className="checkbox"></div>
                    <div className="checkbox-label">Intermediate</div>
                  </div>
                  <div className="filter-checkbox">
                    <div className="checkbox"></div>
                    <div className="checkbox-label">Advanced</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-actions">
              <div className="filter-action-button clear">
CLEAR ALL
              </div>
              <div className="filter-action-button apply">
APPLY
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FilterButton;
