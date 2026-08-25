import React from 'react';

const Hero = () => {
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
          src="assets/images/profile.svg"
          width="320"
          height="320"
          alt="Minimal developer avatar representing Rishabh Shukla"
        />
      </div>
    </section>
  );
};

export default Hero;
