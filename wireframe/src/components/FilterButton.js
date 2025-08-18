import './FilterButton.css';
import { useState } from 'react';

function FilterButton() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="filter-section">
      {/* Filter Button */}
      <div className="filter-button" onClick={toggleFilter}>
        [BUTTON: FILTERS]
      </div>

      {/* Filter Popup */}
      {isFilterOpen && (
        <>
          <div className="filter-backdrop" onClick={toggleFilter}></div>
          <div className="filter-popup">
            <div className="filter-header">
              <div className="filter-title">Filters</div>
              <div className="filter-close" onClick={toggleFilter}>
                [X]
              </div>
            </div>
            
            <div className="filter-content">
              {/* Price Range Filter */}
              <div className="filter-group">
                <div className="filter-label">Price Range</div>
                <div className="filter-options">
                  <div className="price-inputs">
                    <div className="price-input">[INPUT: Min]</div>
                    <div className="price-separator">-</div>
                    <div className="price-input">[INPUT: Max]</div>
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
                [BUTTON: CLEAR ALL]
              </div>
              <div className="filter-action-button apply">
                [BUTTON: APPLY]
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FilterButton;
