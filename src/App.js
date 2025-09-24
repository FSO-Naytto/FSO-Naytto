import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Info from './pages/Info';
import Partners from './pages/Partners';
import WallOfChampions from './pages/WallOfChampions';
import ArsCup from './pages/ArsCup';
import ShuffleCup from './pages/ShuffleCup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/info" element={<Info />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/wall-of-champions" element={<WallOfChampions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;