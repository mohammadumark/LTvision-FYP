import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">welcome</div>
        <div className="search-form">
          <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button className="search-btn" type="submit">Search</button>
        </div>
        <div className="icons">
          <i className="notification-icon">🔔</i>
          <i className="settings-icon">⚙️</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
