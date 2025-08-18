import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ToolDetail from './pages/ToolDetail';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/tool/:id" element={<ToolDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}


export default App;
