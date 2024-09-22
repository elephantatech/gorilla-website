import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GorillaSlides from './GorillaSlides';
import CurrentDayGorillas from './CurrentDayGorillas';
import HistoryOfGorillas from './HistoryofGorillas';
import GorillaCharities from './GorillaCharities';
import './App.css';

const App: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <Router>
      <div className="App">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isNavbarVisible ? '>' : '<'}
        </button>
        <nav className={`navbar ${isNavbarVisible ? '' : 'hidden'}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/current-day">Current Day Gorillas</Link></li>
            <li><Link to="/history">History of Gorillas</Link></li>
            <li><Link to="/charities">Gorilla Charities</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<GorillaSlides />} />
          <Route path="/current-day" element={<CurrentDayGorillas />} />
          <Route path="/history" element={<HistoryOfGorillas />} />
          <Route path="/charities" element={<GorillaCharities />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
