import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Rishabh Shukla. B.Tech CSE at NIT Warangal. Built with React &amp; ES6 JS.</p>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
