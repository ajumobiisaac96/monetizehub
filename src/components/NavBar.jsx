import React from 'react';
import '../components/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar sticky-nav">
      <nav>
        <div className="menu-icon">
        <h1>MonetizeHub</h1>
          <div className="bar">Home</div>
          <div className="bar">Features</div>
          <div className="bar">Project</div>
          <div className="bar">About us</div>
          <div className="bar">Contact Us</div>
          <div className="bar signup-btn">Get Started</div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
