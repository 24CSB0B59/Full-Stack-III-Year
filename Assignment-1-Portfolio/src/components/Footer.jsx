import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Rishabh Shukla. B.Tech CSE at NIT Warangal. Built with React &amp; ES6 JS.</p>
        <nav className="footer-links" aria-label="Footer">
          <a href="#introduction">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
