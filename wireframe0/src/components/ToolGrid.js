import './ToolGrid.css';
import ToolCard from './ToolCard';

function ToolGrid() {
  // Mock data for 10 tools - following wireframe guidelines
  const tools = [
    { id: 1, name: "Power Drill XL", price: "120 DKK/day", available: true, nextAvailable: "", specs: ["18V", "Compact", "DIY"] },
    { id: 2, name: "Circular Saw", price: "200 DKK/day", available: false, nextAvailable: "Jan 22", specs: ["1400W", "190mm", "Pro"] },
    { id: 3, name: "Angle Grinder", price: "95 DKK/day", available: true, nextAvailable: "", specs: ["125mm", "900W", "Metal"] },
    { id: 4, name: "Jigsaw", price: "145 DKK/day", available: true, nextAvailable: "", specs: ["650W", "Variable", "Wood"] },
    { id: 5, name: "Router", price: "160 DKK/day", available: false, nextAvailable: "Jan 24", specs: ["1200W", "6mm", "Pro"] },
    { id: 6, name: "Orbital Sander", price: "80 DKK/day", available: true, nextAvailable: "", specs: ["230W", "125mm", "Finish"] },
    { id: 7, name: "Impact Driver", price: "130 DKK/day", available: true, nextAvailable: "", specs: ["18V", "150Nm", "Fast"] },
    { id: 8, name: "Miter Saw", price: "240 DKK/day", available: false, nextAvailable: "Jan 23", specs: ["1800W", "254mm", "Pro"] },
    { id: 9, name: "Belt Sander", price: "175 DKK/day", available: true, nextAvailable: "", specs: ["950W", "76mm", "Heavy"] },
    { id: 10, name: "Reciprocating Saw", price: "155 DKK/day", available: true, nextAvailable: "", specs: ["1100W", "28mm", "Demo"] }
  ];

  return (
    <div className="tool-grid">
      {tools.map(tool => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolGrid;
