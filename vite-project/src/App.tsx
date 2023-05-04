import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import DesktopNavBar from './components/DesktopNavBar';

function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function Inventory() {
  return (
    <div>
      <h1>Inventory</h1>
      <p>This is the inventory page.</p>
    </div>
  );
}

function Nutrition() {
  return (
    <div>
      <h1>Nutrition</h1>
      <p>This is the nutrition page.</p>
    </div>
  );
}

function Fitness() {
  return (
    <div>
      <h1>Fitness</h1>
      <p>This is the fitness page.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
      <DesktopNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
