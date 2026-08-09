import React, { useState, useEffect } from 'react';
import profileImg from '../assets/images/profile.svg';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading sequence on component mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2 second delay

    // Cleanup function to prevent memory leaks if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means it runs exactly once on mount

  if (isLoading) {
    return (
      <section className="section hero container" id="introduction" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner" style={{ 
            border: '4px solid var(--color-border)', 
            borderTop: '4px solid var(--color-primary)', 
            borderRadius: '50%', 
            width: '40px', 
            height: '40px', 
            animation: 'spin 1s linear infinite', 
            margin: '0 auto 1rem auto' 
          }}></div>
          <p style={{ color: 'var(--color-text-muted)' }}>Initializing environment...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </section>
    );
  }

  return (
    <section className="section hero container" id="introduction" aria-labelledby="intro-heading">
      {/* Left Column: Biography Summary and Primary Action Buttons */}
      <div className="hero-content">
        <p className="hero-subtitle">Full Stack Developer & Competitive Programmer</p>
        <h1 className="hero-title" id="intro-heading">Rishabh Shukla</h1>
        <p>
          I architect resilient web applications and systems with clean, reliable code. Focused on scalable payment workflows, real-time data pipelines, normalized relational database modeling, and competitive algorithm design.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">Explore Projects</a>
          <a className="btn btn-secondary" href="#contact">Get In Touch</a>
        </div>
      </div>

      {/* Right Column: Developer Avatar Framing */}
      <div className="hero-image-container">
        <img
          className="hero-image"
          src={profileImg}
          width="320"
          height="320"
          alt="Minimal developer avatar representing Rishabh Shukla"
        />
      </div>
    </section>
  );
};

export default Hero;
