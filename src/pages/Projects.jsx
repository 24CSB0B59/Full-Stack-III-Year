import React, { useState, useEffect } from 'react';
import ProjectsPage from '../components/ProjectsPage';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects from server');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError("Error: Backend server is unreachable. Please make sure the server is running.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Loading projects from server...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '2rem', borderRadius: '8px', border: '1px solid red' }}>
          <h2 style={{ color: 'red', marginBottom: '1rem' }}>Connection Failed</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProjectsPage data={projects} />
    </>
  );
};

export default Projects;
