import React from 'react';

const About = () => {
  return (
    <section className="section container" id="about" aria-labelledby="about-heading">
      <div className="section-heading">
        <h2 id="about-heading">About Me</h2>
        <p>A structured approach to engineering production web systems and mastering computational algorithms.</p>
      </div>

      <div className="about-grid">
        <article className="about-text">
          <p>
            My development experience emphasizes building high-performance full stack platforms with modern JavaScript ecosystems. I have hands-on experience deploying modular applications utilizing React, Next.js, Express.js, MongoDB, Redis, and background queuing architectures.
          </p>
          <p>
            In competitive programming, I consistently solve complex algorithmic problems under tight constraints. With ratings of 1892 on LeetCode (Knight), 1510 on Codeforces (Specialist), and 1508 on CodeChef, I have a deep functional foundation in graph theory, dynamic programming, and data structure optimizations.
          </p>
        </article>

        <aside className="about-highlights" aria-label="Key highlights">
          <div className="highlight-card">
            <h3>Competitive Programming</h3>
            <p>Codeforces Specialist (1510) &middot; LeetCode Knight (1892) &middot; CodeChef 2-Star (1508).</p>
          </div>
          <div className="highlight-card">
            <h3>Core Technical Focus</h3>
            <p>Full Stack Architecture, WebSockets (Socket.io), Background Job Queues (Redis/BullMQ), and ACID Relational Database Design.</p>
          </div>
        </aside>
      </div>

      <ul className="stat-list" aria-label="Key metrics">
        <li className="stat-item">
          <strong>1892</strong>
          <span>LeetCode Rating (Knight)</span>
        </li>
        <li className="stat-item">
          <strong>1510</strong>
          <span>Codeforces (Specialist)</span>
        </li>
        <li className="stat-item">
          <strong>1508</strong>
          <span>CodeChef Rating (2-Star)</span>
        </li>
      </ul>
    </section>
  );
};

export default About;
