import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${projectId}`);
        if (response.status === 404) {
          setError("Project Not Found");
        } else if (!response.ok) {
          throw new Error('Failed to fetch project details');
        } else {
          const data = await response.json();
          setProject(data);
        }
      } catch (err) {
        setError("Error: Backend server is unreachable.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (isLoading) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Loading project details...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>{error === "Project Not Found" ? "Project Not Found" : "Connection Error"}</h2>
        <p style={{ margin: '2rem 0' }}>{error === "Project Not Found" ? "The requested project ID does not exist in our database." : error}</p>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="section container" id="project-detail" aria-labelledby="project-detail-heading">
      <Link to="/projects" className="btn btn-secondary" style={{ display: 'inline-block', marginBottom: '2rem' }}>
        &larr; Back to Projects
      </Link>
      
      <div className="project-detail-header" style={{ marginBottom: '2rem' }}>
        <h1 id="project-detail-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tag" style={{ fontSize: '1rem', padding: '0.4rem 0.8rem' }}>{tech}</span>
          ))}
        </div>
      </div>

      <img 
        src={project.image} 
        alt={`Screenshot of ${project.title}`}
        style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', border: '1px solid var(--color-border)' }}
      />

      <div className="project-detail-body" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <h2 style={{ marginBottom: '1rem' }}>Overview</h2>
        <p style={{ marginBottom: '2rem' }}>{project.description}</p>
        
        <a className="btn btn-github" href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}>
          <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View Source Code on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;
