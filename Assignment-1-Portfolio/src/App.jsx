import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectsPage from './components/ProjectsPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { projects } from './data/projects';

function App() {
  return (
    <>
      {/* Keyboard Accessible Bypass Link for Screen Readers and TAB navigation */}
      <a className="skip-link" href="#main-content">Skip to main content</a>
      
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        {/* Pass projects data to ProjectsPage to demonstrate prop drilling */}
        <ProjectsPage data={projects} />
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
