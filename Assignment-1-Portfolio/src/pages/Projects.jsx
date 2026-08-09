import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <>
      <ProjectsPage data={projects} />
    </>
  );
};

export default Projects;
