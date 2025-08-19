import './ToolGrid.css';
import ToolCard from './ToolCard';
import drill from '../assets/drill.jpg';
import rundsav from '../assets/rundsav.jpg';
import grinder from '../assets/grinder.jpg';
import jigsaw from '../assets/jigsaw.jpg';
import mixer from '../assets/mixer.jpg';
import sander from '../assets/sander.jpg';
import driver from '../assets/driver.jpg';
import miter from '../assets/miter.jpg';
import beltSander from '../assets/belt_sander.jpg';
import reciprocatingSaw from '../assets/reciprocating_saw.jpg';

function ToolGrid() {
  // Mock data for 10 tools - following wireframe guidelines
  const tools = [
    { id: 1, name: "Power Drill XL", price: "120 DKK/day", available: true, nextAvailable: "", specs: ["18V", "Compact", "DIY"], image: drill },
    { id: 2, name: "Circular Saw", price: "200 DKK/day", available: false, nextAvailable: "Jan 22", specs: ["1400W", "190mm", "Pro"], image: rundsav },
    { id: 3, name: "Angle Grinder", price: "95 DKK/day", available: true, nextAvailable: "", specs: ["125mm", "900W", "Metal"], image: grinder },
    { id: 4, name: "Jigsaw", price: "145 DKK/day", available: true, nextAvailable: "", specs: ["650W", "Variable", "Wood"], image: jigsaw },
    { id: 5, name: "Router", price: "160 DKK/day", available: false, nextAvailable: "Jan 24", specs: ["1200W", "6mm", "Pro"], image: mixer },
    { id: 6, name: "Orbital Sander", price: "80 DKK/day", available: true, nextAvailable: "", specs: ["230W", "125mm", "Finish"], image: sander },
    { id: 7, name: "Impact Driver", price: "130 DKK/day", available: true, nextAvailable: "", specs: ["18V", "150Nm", "Fast"], image: driver },
    { id: 8, name: "Miter Saw", price: "240 DKK/day", available: false, nextAvailable: "Jan 23", specs: ["1800W", "254mm", "Pro"], image: miter },
    { id: 9, name: "Belt Sander", price: "175 DKK/day", available: true, nextAvailable: "", specs: ["950W", "76mm", "Heavy"], image: beltSander },
    { id: 10, name: "Reciprocating Saw", price: "155 DKK/day", available: true, nextAvailable: "", specs: ["1100W", "28mm", "Demo"], image: reciprocatingSaw }
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
