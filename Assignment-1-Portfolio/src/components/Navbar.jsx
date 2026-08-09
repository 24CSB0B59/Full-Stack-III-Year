import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu automatically if window resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // CSS for active NavLink state mapping
  const navLinkClass = ({ isActive }) => isActive ? "nav-link is-active" : "nav-link";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>Rishabh Shukla</Link>

        <button 
          className="btn btn-secondary" 
          onClick={toggleTheme} 
          aria-label="Toggle dark/light theme"
          style={{ padding: '0.4rem 0.8rem', marginLeft: 'auto', marginRight: '1rem', fontSize: '1.2rem', background: 'transparent', border: 'none' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

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
            <li><NavLink className={navLinkClass} to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className={navLinkClass} to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink className={navLinkClass} to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink className={navLinkClass} to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
