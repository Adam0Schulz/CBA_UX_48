import './Recommendations.css';
import ToolCard from './ToolCard';
import goggles from '../assets/sander.jpg';
import extensionCord from '../assets/driver.jpg';
import gloves from '../assets/belt_sander.jpg';
import mowerRec from '../assets/mower.jpg';
import trimmer from '../assets/trimmer.jpg';
import washerRec from '../assets/washer.jpg';

function Recommendations() {
  // Mock data for recommendations - following wireframe guidelines
  const oftenRentedWith = [
    { 
      id: 'safety-goggles', 
      name: "Safety Goggles", 
      price: "12 DKK/day",
      available: true,
      nextAvailable: null,
      image: goggles
    },
    { 
      id: 'extension-cord-rec', 
      name: "Extension Cord", 
      price: "15 DKK/day",
      available: true,
      nextAvailable: null,
      image: extensionCord
    },
    { 
      id: 'work-gloves', 
      name: "Work Gloves", 
      price: "8 DKK/day",
      available: false,
      nextAvailable: "Monday",
      image: gloves
    }
  ];

  const popularThisWeekend = [
    { 
      id: 'lawn-mower', 
      name: "Lawn Mower", 
      price: "180 DKK/day",
      available: true,
      nextAvailable: null,
      image: mowerRec
    },
    { 
      id: 'hedge-trimmer', 
      name: "Hedge Trimmer", 
      price: "95 DKK/day",
      available: false,
      nextAvailable: "Sunday",
      image: trimmer
    },
    { 
      id: 'pressure-washer', 
      name: "Pressure Washer", 
      price: "150 DKK/day",
      available: true,
      nextAvailable: null,
      image: washerRec
    }
  ];

  return (
    <div className="recommendations">
      <div className="section-header">
        Recommendations
      </div>
      
      {/* Often Rented With Section */}
      <div className="recommendation-group">
        <div className="group-title">
          Often rented with your tools
        </div>
        <div className="recommendation-items">
          {oftenRentedWith.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* Popular This Weekend Section */}
      <div className="recommendation-group">
        <div className="group-title">
          Popular this weekend
        </div>
        <div className="recommendation-items">
          {popularThisWeekend.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
