import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="section container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '400px' }}>
        The route you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
