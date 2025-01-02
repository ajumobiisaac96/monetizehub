import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the FaBars icon for the hamburger
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10%;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 575px) {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 10px 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &.open {
      display: flex;
    }
  }
`;

const Bar = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 1rem;

  &:hover {
    color: #ff4500;
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 575px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <Navbar>
      <NavBarLogo>
        <Link to={'/'}><Logo>MonetizeHub</Logo></Link>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>
      </NavBarLogo>

      {/* Full navbar for large screens */}
      <Menu className={menuOpen ? 'open' : ''}>
        <Bar to="/home">Home</Bar>
        <Bar to="/features">Features</Bar>
        <Bar to="/project">Project</Bar>
        <Bar to="/about">About us</Bar>
        <Bar to="/contact">Contact Us</Bar>
        <Bar to="/signup" className="signup-btn">Get Started</Bar>
      </Menu>
    </Navbar>
  );
};

export default NavBar;
