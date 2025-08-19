import './ToolCard.css';
import { useNavigate } from 'react-router-dom';

function ToolCard({ tool }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tool/${tool.id}`);
  };
  return (
    <div className="tool-card" onClick={handleCardClick} role="button" tabIndex={0} aria-label={`View details for ${tool.name}, ${tool.available ? 'available now' : `available ${tool.nextAvailable}`}, ${tool.price}`}>
      <div className="tool-image">
        {tool.image && <img src={tool.image} alt={`${tool.name} tool`} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px'}} />}
        {!tool.image && '[IMAGE]'}
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
