import React from 'react';
import '../components/NavBar.css';
import '../components/DashboardNavbar.css';

const NavBar = ({username}) => {
  return (
    <div className="navbar sticky-nav">
      <nav>
        <div className="menu-icon">
            <div><h1>MonetizeHub</h1></div>
            <div><h2>Welcome,{username}</h2></div>
        </div>

      </nav>
    </div>
  );
};

export default NavBar;
