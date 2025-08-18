import './CategoryChips.css';
import { useState } from 'react';

function CategoryChips() {
  // Mock categories for hardware rental - following wireframe guidelines
  const [selectedCategory, setSelectedCategory] = useState(1);
  
  const categories = [
    { id: 1, name: "Power Tools" },
    { id: 2, name: "Garden" },
    { id: 3, name: "Cleaning" },
    { id: 4, name: "Construction" },
    { id: 5, name: "Automotive" }
  ];

  const handleChipClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="category-chips">
      <div className="chips-container">
        {categories.map(category => (
          <div 
            key={category.id} 
            className={`category-chip ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleChipClick(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryChips;
