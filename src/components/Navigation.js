import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <li onClick={() => setIsOpen(false)}><NavLink to="/info" activeClassName="active">INFO</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/paasarja" activeClassName="active">Pääsarja</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/shuffle-cup" activeClassName="active">SHUFFLE CUP</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/touge" activeClassName="active">TOUGE</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/hotlap-hontsa" activeClassName="active">HOTLAP & HÖNTSÄ</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/wall-of-champions" activeClassName="active">HALL OF FAME</NavLink></li>
        <li onClick={() => setIsOpen(false)}><NavLink to="/admin" activeClassName="active">ADMIN</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
