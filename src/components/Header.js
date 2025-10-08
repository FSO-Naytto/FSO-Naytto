import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src="/ars.png" alt="Arctic Racing Society Logo" className="logo" />
      <h1>
        <span className="full-title">🏁Arctic Racing Society🏁</span>
        <span className="short-title">🏁ARS🏁</span>
      </h1>
    </header>
  );
};

export default Header;