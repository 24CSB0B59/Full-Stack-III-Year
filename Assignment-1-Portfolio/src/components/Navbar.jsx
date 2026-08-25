import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // IntersectionObserver for active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -45% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#introduction">Rishabh Shukla</a>

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
            <li><a className={`nav-link ${activeSection === 'introduction' ? 'is-active' : ''}`} href="#introduction" onClick={closeMenu}>Home</a></li>
            <li><a className={`nav-link ${activeSection === 'about' ? 'is-active' : ''}`} href="#about" onClick={closeMenu}>About</a></li>
            <li><a className={`nav-link ${activeSection === 'education' ? 'is-active' : ''}`} href="#education" onClick={closeMenu}>Education</a></li>
            <li><a className={`nav-link ${activeSection === 'skills' ? 'is-active' : ''}`} href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a className={`nav-link ${activeSection === 'projects' ? 'is-active' : ''}`} href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a className={`nav-link ${activeSection === 'contact' ? 'is-active' : ''}`} href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
