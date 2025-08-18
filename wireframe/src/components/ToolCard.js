import './ToolCard.css';

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-image">
        [IMAGE]
      </div>
      
      <div className="tool-info">
        <div className="tool-name">
          {tool.name}
        </div>
        
        
        <div className="tool-price">
          {tool.price}
        </div>
        
        <div className={`tool-availability ${tool.available ? 'available' : 'unavailable'}`}>
          {tool.available ? 'Available now' : `Available ${tool.nextAvailable}`}
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
