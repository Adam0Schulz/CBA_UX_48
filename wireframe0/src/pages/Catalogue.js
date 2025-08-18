import '../App.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import SearchBar from '../components/SearchBar';
import CategoryChips from '../components/CategoryChips';
import FilterButton from '../components/FilterButton';
import ToolGrid from '../components/ToolGrid';

function Catalogue() {
  return (
    <div className="app">
      {/* Reminder Banner Component */}
      <ReminderBanner />
      
      {/* Page Header */}
      <div className="catalogue-header">
        <div className="page-header">
          FOG Hardware - Catalogue
        </div>
      </div>
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Category Chips */}
      <CategoryChips />
      
      {/* Filter Button */}
      <FilterButton />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Tool Grid */}
        <ToolGrid />
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation activeTab="catalogue" />
    </div>
  );
}

export default Catalogue;
