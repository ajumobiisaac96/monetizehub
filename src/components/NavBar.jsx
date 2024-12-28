import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div>
      <nav className="navbar"> 
        <h1 className='logo'>MonetizeHub</h1>
        <ul className='menu'>
            <li>Home</li>
            <li>Features</li>
            <li>Project</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li className='signup-btn'>Get Started</li>
        </ul>
        <div className="menu-list">
          <div className="menu-icon">
            <div className="bar">Home</div>
            <div className="bar">Features</div>
            <div className="bar">Project</div>
            <div className="bar">About us</div>
            <div className="bar">Blog</div>
            <div className="bar">contact Us</div>
            <div className="bar signup-btn">Get Started</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar
