import './ToolCard.css';
import { useNavigate } from 'react-router-dom';

function ToolCard({ tool }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tool/${tool.id}`);
  };
  return (
    <div className="tool-card" onClick={handleCardClick}>
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
