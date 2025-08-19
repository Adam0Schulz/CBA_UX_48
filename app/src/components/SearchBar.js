import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar" role="search" aria-label="Search tools">
      <input type="text" className="search-input" placeholder="Search tools..." aria-label="Search for tools by name or category" />
      <button className="search-button" aria-label="Submit search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
