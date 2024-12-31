import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the FaBars icon for the hamburger
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <div className="navbar sticky-nav">
      <div className='nav-bar-logo'>
        <Link to={'/'} ><h1 className="logo">MonetizeHub</h1></Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars className="hamburger" />
        </div>
      </div>


      {/* Full navbar for large screens */}
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="bar">Home</div>
        <div className="bar">Features</div>
        <div className="bar">Project</div>
        <div className="bar">About us</div>
        <div className="bar">Contact Us</div>
        <Link to={'/signup'} ><div className="bar signup-btn">Get Started</div></Link>
      </nav>
    </div>
  );
};

export default NavBar;
