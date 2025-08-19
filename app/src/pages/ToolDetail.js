import './ToolDetail.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import ToolCard from '../components/ToolCard';
import { useState } from 'react';

function ToolDetail() {
  const [showRentalTerms, setShowRentalTerms] = useState(false);
  
  // Related tools data
  const relatedTools = [
    {
      id: 'drill-bits',
      name: 'Drill Bits Set',
      price: '25 DKK/day',
      available: true,
      nextAvailable: null
    },
    {
      id: 'safety-glasses',
      name: 'Safety Glasses',
      price: '10 DKK/day',
      available: true,
      nextAvailable: null
    },
    {
      id: 'dust-mask',
      name: 'Dust Mask',
      price: '8 DKK/day',
      available: false,
      nextAvailable: 'tomorrow'
    },
    {
      id: 'extension-cord',
      name: 'Extension Cord',
      price: '15 DKK/day',
      available: true,
      nextAvailable: null
    }
  ];
  
  return (
    <div className="tool-detail">
      {/* Banner Component */}
      <ReminderBanner />
      
      <div className="main-content">
        {/* Product Name */}
        <div className="product-name">
          Power Drill XL
        </div>
      
      {/* Product Images */}
      <div className="product-images">
        <div className="main-image">
          [MAIN IMAGE]
        </div>
        <div className="thumbnail-images">
          <div className="thumbnail">[THUMB 1]</div>
          <div className="thumbnail">[THUMB 2]</div>
          <div className="thumbnail">[THUMB 3]</div>
          <div className="thumbnail video-thumb">[VIDEO]</div>
        </div>
      </div>
      
      {/* Price Section */}
      <div className="price-section">
        <div className="price">120 DKK/day</div>
        <div className="price-links">
          <button onClick={() => setShowRentalTerms(true)} className="link-button">Rental terms</button>
          <a href="#specs" className="link">Full specs</a>
        </div>
      </div>
      
      {/* Availability Section */}
      <div className="availability-section">
        <div className="availability-status available">
          ✓ Available now
        </div>
      </div>
      
      {/* Book Button */}
      <div className="book-section">
        <button className="book-button">Book Now</button>
      </div>
      
      {/* CO2 Comparison */}
      <div className="co2-section">
        <div className="co2-title">Environmental Impact</div>
        <div className="co2-comparison">
          Renting saves <strong>15 kg CO₂</strong> vs buying
        </div>
      </div>
      
      {/* Safety and Usage Section */}
      <div className="safety-section">
        <div className="safety-title">Safety & Usage</div>
        <div className="safety-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>
      
      {/* Specs Section */}
      <div id="specs" className="specs-section">
        <div className="specs-title">Full Specifications</div>
        <div className="specs-table">
          <div className="specs-row">
            <div className="specs-label">Power</div>
            <div className="specs-value">750W</div>
          </div>
          <div className="specs-row">
            <div className="specs-label">Chuck Size</div>
            <div className="specs-value">13mm</div>
          </div>
          <div className="specs-row">
            <div className="specs-label">Max Torque</div>
            <div className="specs-value">50 Nm</div>
          </div>
          <div className="specs-row">
            <div className="specs-label">Weight</div>
            <div className="specs-value">2.1 kg</div>
          </div>
          <div className="specs-row">
            <div className="specs-label">Cable Length</div>
            <div className="specs-value">3m</div>
          </div>
          <div className="specs-row">
            <div className="specs-label">Speed Range</div>
            <div className="specs-value">0-2800 RPM</div>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-title">Customer Reviews</div>
        <div className="reviews-rating">
          <div className="rating-score">4.2/5</div>
          <div className="rating-stars">★★★★☆</div>
          <div className="rating-count">(24 reviews)</div>
        </div>
        <div className="reviews-quotes">
          <div className="review-quote">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perfect for weekend projects."</p>
            <div className="review-author">- Brian K.</div>
          </div>
          <div className="review-quote">
            <p>"Sed do eiusmod tempor incididunt ut labore. Great power and easy to handle."</p>
            <div className="review-author">- Maria S.</div>
          </div>
          <div className="review-quote">
            <p>"Ut enim ad minim veniam, quis nostrud exercitation. Reliable tool for home renovation."</p>
            <div className="review-author">- Thomas L.</div>
          </div>
        </div>
      </div>
      
      {/* Related/Compatible Tools Section */}
      <div className="related-tools-section">
        <div className="related-tools-title">Related & Compatible Tools</div>
        <div className="related-tools-grid">
          {relatedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
      </div> {/* End main-content */}
      
      {/* Rental Terms Popup */}
      {showRentalTerms && (
        <div className="popup-overlay" onClick={() => setShowRentalTerms(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Rental Terms</h3>
              <button className="close-button" onClick={() => setShowRentalTerms(false)}>×</button>
            </div>
            <div className="popup-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
        </div>
      )}
      
      <BottomNavigation />
    </div>
  );
}

export default ToolDetail;
