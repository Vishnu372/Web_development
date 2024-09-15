
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <header className="navbar-header">
        <div className="logo-text">Search Hub</div>
        <nav className="navbar">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Login</a>
        </nav>
      </header>
      
    </div>
  );
};

export default Navbar;
