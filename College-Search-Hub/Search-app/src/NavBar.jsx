// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Ensure this CSS file includes your previous navbar styles

const Navbar = () => {
  return (
    <div>
      <header className="navbar-header">
        <div className="logo-text">Best Choice</div>
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
