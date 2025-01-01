import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the FaBars icon for the hamburger
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <div className="navbar sticky-nav">
      <div className="nav-bar-logo">
        <Link to={'/'}><h1 className="logo">MonetizeHub</h1></Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars className="hamburger" />
        </div>
      </div>

      {/* Full navbar for large screens */}
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/home" className="bar">Home</Link>
        <Link to="/features" className="bar">Features</Link>
        <Link to="/project" className="bar">Project</Link>
        <Link to="/about" className="bar">About us</Link>
        <Link to="/contact" className="bar">Contact Us</Link>
        <Link to="/signup" className="bar signup-btn">Get Started</Link>
      </nav>
    </div>
  );
};

export default NavBar;
