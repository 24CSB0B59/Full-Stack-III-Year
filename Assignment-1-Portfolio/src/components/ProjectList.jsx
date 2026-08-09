import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ items }) => {
  return (
    <div className="projects-grid">
      {items.map((project) => (
        <ProjectCard 
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
