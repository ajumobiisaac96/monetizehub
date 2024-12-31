import React from 'react';
import './DashboardNavbar.css';
import {Link} from 'react-router-dom'

const DashboardNavbar = ({ username }) => {
  return (
    <nav className="navbar sticky-nav">
      <div className="navbar-content">
      <div className="logo"><Link to={'/'} ><h1>MonetizeHub</h1></Link></div>
      <div className="welcome-message"><h2>Welcome, {username}</h2></div>
      </div>


    </nav>
  );
};

export default DashboardNavbar;
