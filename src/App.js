import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Info from './pages/Info';
import Partners from './pages/Partners';
import WallOfChampions from './pages/WallOfChampions';
import Paasarja from './pages/Paasarja';
import ShuffleCup from './pages/ShuffleCup';
import Touge from './pages/Touge';
import HotlapHontsa from './pages/HotlapHontsa';
import { AdminProvider } from './auth/AdminContext';
import AdminLogin from './components/AdminLogin';

const initialOptions = {
  "clientId": "test", // Korvaa tämä omalla Client ID:lläsi
  currency: "EUR",
  intent: "capture",
};

function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <AdminProvider>
        <Router>
          <div className="App">
            <Header />
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/info" element={<Info />} />
                <Route path="/paasarja" element={<Paasarja/>} />
                <Route path="/shuffle-cup" element={<ShuffleCup/>} />
                <Route path="/touge" element={<Touge/>} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/wall-of-champions" element={<WallOfChampions />} />
                <Route path="/hotlap-hontsa" element={<HotlapHontsa />} />
                <Route path="/admin" element={<AdminLogin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AdminProvider>
    </PayPalScriptProvider>
  );
}

export default App;