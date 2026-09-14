import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Removed IntersectionObserver as we are now using real routes

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">Rishabh Shukla</Link>

        <button
          className={`nav-toggle ${isOpen ? 'is-active' : ''}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Primary">
          <ul className="nav-list">
            <li><NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink className="nav-link" to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
