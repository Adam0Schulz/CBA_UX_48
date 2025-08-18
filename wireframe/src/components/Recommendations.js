import './Recommendations.css';

function Recommendations() {
  // Mock data for recommendations - following wireframe guidelines
  const oftenRentedWith = [
    { id: 1, name: "Safety Goggles" },
    { id: 2, name: "Extension Cord" },
    { id: 3, name: "Work Gloves" }
  ];

  const popularThisWeekend = [
    { id: 4, name: "Lawn Mower" },
    { id: 5, name: "Hedge Trimmer" },
    { id: 6, name: "Pressure Washer" }
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
          {oftenRentedWith.map(item => (
            <div key={item.id} className="recommendation-card">
              <div className="recommendation-image">
                [IMAGE]
              </div>
              <div className="recommendation-name">
                {item.name}
              </div>
              <div className="recommendation-action">
                [BUTTON: ADD]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular This Weekend Section */}
      <div className="recommendation-group">
        <div className="group-title">
          Popular this weekend
        </div>
        <div className="recommendation-items">
          {popularThisWeekend.map(item => (
            <div key={item.id} className="recommendation-card">
              <div className="recommendation-image">
                [IMAGE]
              </div>
              <div className="recommendation-name">
                {item.name}
              </div>
              <div className="recommendation-action">
                [BUTTON: VIEW]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
