import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main-nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li onClick={() => setIsOpen(false)}><Link to="/info">INFO</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/paasarja">Pääsarja</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/shuffle-cup">SHUFFLE CUP</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/touge">TOUGE</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/hotlap-hontsa">HOTLAP & HÖNTSÄ</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/wall-of-champions">HALL OF FAME</Link></li>
        <li onClick={() => setIsOpen(false)}><Link to="/admin">ADMIN</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
