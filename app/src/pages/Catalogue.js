import '../App.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryChips from '../components/CategoryChips';
import FilterButton from '../components/FilterButton';
import ToolGrid from '../components/ToolGrid';

function Catalogue() {
  return (
    <div className="app">
      {/* Reminder Banner Component */}
      <ReminderBanner />
      
      {/* Hero Component */}
      <Hero />
      
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
