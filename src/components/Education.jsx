import React from 'react';

const Education = () => {
  return (
    <section className="section container" id="education" aria-labelledby="education-heading">
      <div className="section-heading">
        <h2 id="education-heading">Education &amp; Experience</h2>
        <p>Academic coursework and concise organizational experience.</p>
      </div>

      <div className="education-layout">
        <div className="edu-section">
          <h3 className="edu-section-title">Academic Credentials</h3>
          <article className="timeline-card">
            <div className="timeline-header">
              <h3>National Institute of Technology, Warangal</h3>
              <span className="timeline-date">2024 &mdash; 2028</span>
            </div>
            <div className="timeline-subtitle">B.Tech in Computer Science and Engineering</div>
            <ul>
              <li><strong>Current Standing:</strong> CGPA 7.93 / 10.00.</li>
              <li><strong>Core Coursework:</strong> Data Structures and Algorithms (C++), Object-Oriented Programming (Java), Database Management Systems (DBMS), and Computer Networks.</li>
            </ul>
          </article>
        </div>

        <div className="edu-section">
          <h3 className="edu-section-title">Leadership &amp; Responsibility</h3>
          <div className="leadership-list">
            <article className="leadership-item">
              <h3>Technozion 2025, NITW</h3>
              <p>PR &amp; Outreach Team Member &mdash; Coordinated external academic institute communication and guest speaker scheduling for the national tech symposium.</p>
            </article>

            <article className="leadership-item">
              <h3>Annual School Fest</h3>
              <p>Event Coordinator &mdash; Managed multi-day stage logistics, volunteer schedules, and time management protocols.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
