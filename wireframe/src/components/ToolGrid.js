import './ToolGrid.css';
import ToolCard from './ToolCard';

function ToolGrid() {
  // Mock data for 10 tools - following wireframe guidelines
  const tools = [
    { id: 1, name: "Power Drill XL", price: "$15/day", available: true, nextAvailable: "" },
    { id: 2, name: "Circular Saw", price: "$25/day", available: false, nextAvailable: "Jan 22" },
    { id: 3, name: "Angle Grinder", price: "$12/day", available: true, nextAvailable: "" },
    { id: 4, name: "Jigsaw", price: "$18/day", available: true, nextAvailable: "" },
    { id: 5, name: "Router", price: "$20/day", available: false, nextAvailable: "Jan 24" },
    { id: 6, name: "Orbital Sander", price: "$10/day", available: true, nextAvailable: "" },
    { id: 7, name: "Impact Driver", price: "$16/day", available: true, nextAvailable: "" },
    { id: 8, name: "Miter Saw", price: "$30/day", available: false, nextAvailable: "Jan 23" },
    { id: 9, name: "Belt Sander", price: "$22/day", available: true, nextAvailable: "" },
    { id: 10, name: "Reciprocating Saw", price: "$19/day", available: true, nextAvailable: "" }
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
