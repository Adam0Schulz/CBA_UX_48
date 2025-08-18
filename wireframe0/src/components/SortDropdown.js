import './SortDropdown.css';
import { useState } from 'react';

function SortDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Best match');

  const sortOptions = [
    'Best match',
    'Price: Low to High',
    'Price: High to Low',
    'Soonest available'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="sort-dropdown">
      <div className="sort-button" onClick={toggleDropdown}>
        [SORT: {selectedSort}] ▼
      </div>
      
      {isDropdownOpen && (
        <>
          <div className="sort-backdrop" onClick={toggleDropdown}></div>
          <div className="sort-options">
            {sortOptions.map((option, index) => (
              <div 
                key={index}
                className={`sort-option ${selectedSort === option ? 'selected' : ''}`}
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SortDropdown;
