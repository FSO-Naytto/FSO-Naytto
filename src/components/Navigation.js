import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/info">INFO</Link></li>
        <li><Link to="/paasarja">Pääsarja</Link></li>
        <li><Link to="/shuffle-cup">SHUFFLE CUP</Link></li>
        <li><Link to="/touge">TOUGE</Link></li>
        <li><Link to="/hotlap-hontsa">HOTLAP & HÖNTSÄ</Link></li>
        <li><Link to="/wall-of-champions">HALL OF FAME</Link></li>
        <li><Link to="/admin">ADMIN</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
