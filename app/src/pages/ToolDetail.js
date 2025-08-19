import './ToolDetail.css';
import ReminderBanner from '../components/ReminderBanner';
import BottomNavigation from '../components/BottomNavigation';
import ToolCard from '../components/ToolCard';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import drill from '../assets/drill.jpg';
import sander from '../assets/sander.jpg';
import driver from '../assets/driver.jpg';
import mixer from '../assets/mixer.jpg';

function ToolDetail() {
  const [showRentalTerms, setShowRentalTerms] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Related tools data
  const relatedTools = [
    {
      id: 'drill-bits',
      name: 'Drill Bits Set',
      price: '25 DKK/day',
      available: true,
      nextAvailable: null,
      specs: ['HSS', 'Set of 10', 'Metal'],
      image: driver
    },
    {
      id: 'safety-glasses',
      name: 'Safety Glasses',
      price: '10 DKK/day',
      available: true,
      nextAvailable: null,
      specs: ['Clear', 'Anti-fog', 'Safety'],
      image: sander
    },
    {
      id: 'dust-mask',
      name: 'Dust Mask',
      price: '8 DKK/day',
      available: false,
      nextAvailable: 'tomorrow',
      specs: ['FFP2', 'Disposable', 'Safety'],
      image: mixer
    },
    {
      id: 'extension-cord',
      name: 'Extension Cord',
      price: '15 DKK/day',
      available: true,
      nextAvailable: null,
      specs: ['10m', '16A', 'Outdoor'],
      image: drill
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
          <img src={drill} alt="Power Drill XL" className="product-image" />
        </div>
        <div className="thumbnail-images">
          <div className="thumbnail active">
            <img src={drill} alt="Drill view 1" />
          </div>
          <div className="thumbnail">
            <img src={drill} alt="Drill view 2" />
          </div>
          <div className="thumbnail">
            <img src={drill} alt="Drill view 3" />
          </div>
          <div className="thumbnail video-thumb">
            <div className="video-icon">▶</div>
          </div>
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
        <button 
          className="book-button"
          onClick={() => navigate(`/booking-dates/${id || 'angle-grinder'}`)}
        >
          Book Now
        </button>
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
          <p>Always wear safety glasses and hearing protection when operating this drill. Ensure the work area is well-lit and free from clutter. Check that drill bits are properly secured before use.</p>
          <p>Keep hands away from rotating parts and maintain a firm grip on the tool. Disconnect power when changing bits or making adjustments. Store in a dry location when not in use.</p>
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
              <p><strong>Rental Period:</strong> Tools can be rented for a minimum of 1 day up to a maximum of 30 days. Extensions are possible subject to availability.</p>
              
              <p><strong>Payment:</strong> Full payment is required at the time of booking. We accept cash, credit cards, and MobilePay. A security deposit may be required for high-value items.</p>
              
              <p><strong>Damage & Loss:</strong> Renter is responsible for any damage beyond normal wear and tear. Lost or stolen items will be charged at full replacement cost. Please inspect tools before taking them.</p>
              
              <p><strong>Return Policy:</strong> Tools must be returned clean and in the same condition as received. Late returns incur additional daily charges. Returns are accepted during business hours only.</p>
            </div>
          </div>
        </div>
      )}
      
      <BottomNavigation />
    </div>
  );
}

export default ToolDetail;
