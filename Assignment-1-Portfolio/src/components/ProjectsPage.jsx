import React from 'react';
import ProjectList from './ProjectList';

// ProjectsPage acts as the section wrapper and receives the 'data' prop.
// It then drills this prop down into ProjectList.
const ProjectsPage = ({ data }) => {
  return (
    <section className="section container" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <h2 id="projects-heading">Featured Projects</h2>
        <p>Production systems and scalable applications designed and built from scratch.</p>
      </div>

      <ProjectList items={data} />
    </section>
  );
};

export default ProjectsPage;
