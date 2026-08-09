import React from 'react';

const Skills = () => {
  return (
    <section className="section container" id="skills" aria-labelledby="skills-heading">
      <div className="section-heading">
        <h2 id="skills-heading">Technical Skills</h2>
        <p>Languages, architectural frameworks, databases, and tooling utilized in software builds.</p>
      </div>

      <div className="skills-grid">
        <article className="skill-group">
          <h3>Programming Languages</h3>
          <ul className="skill-list">
            <li><span className="tag">C++</span></li>
            <li><span className="tag">JavaScript (ES6+)</span></li>
            <li><span className="tag">Java</span></li>
            <li><span className="tag">SQL</span></li>
            <li><span className="tag">R</span></li>
            <li><span className="tag">TypeScript / Node</span></li>
          </ul>
        </article>

        <article className="skill-group">
          <h3>Frameworks &amp; Libraries</h3>
          <ul className="skill-list">
            <li><span className="tag">Next.js</span></li>
            <li><span className="tag">React</span></li>
            <li><span className="tag">Node.js</span></li>
            <li><span className="tag">Express.js</span></li>
            <li><span className="tag">Socket.io</span></li>
            <li><span className="tag">NextAuth.js</span></li>
            <li><span className="tag">BullMQ</span></li>
            <li><span className="tag">Razorpay SDK</span></li>
          </ul>
        </article>

        <article className="skill-group">
          <h3>Cloud &amp; Databases</h3>
          <ul className="skill-list">
            <li><span className="tag">MongoDB</span></li>
            <li><span className="tag">Oracle SQL</span></li>
            <li><span className="tag">Redis</span></li>
            <li><span className="tag">2dsphere Indexing</span></li>
            <li><span className="tag">BCNF Normalization</span></li>
            <li><span className="tag">ACID Transactions</span></li>
          </ul>
        </article>

        <article className="skill-group">
          <h3>Developer Tools</h3>
          <ul className="skill-list">
            <li><span className="tag">VS Code</span></li>
            <li><span className="tag">Git</span></li>
            <li><span className="tag">GitHub Actions</span></li>
            <li><span className="tag">Postman</span></li>
            <li><span className="tag">W3C Validator</span></li>
            <li><span className="tag">Chrome DevTools</span></li>
          </ul>
        </article>

        <article className="skill-group">
          <h3>Academic Coursework</h3>
          <ul className="skill-list">
            <li><span className="tag">Data Structures &amp; Algorithms</span></li>
            <li><span className="tag">Object-Oriented Programming</span></li>
            <li><span className="tag">Database Management Systems</span></li>
            <li><span className="tag">Relational Modeling</span></li>
          </ul>
        </article>

        <article className="skill-group">
          <h3>Core Competencies</h3>
          <ul className="skill-list">
            <li><span className="tag">Competitive Programming</span></li>
            <li><span className="tag">Full Stack Architecture</span></li>
            <li><span className="tag">Critical Thinking</span></li>
            <li><span className="tag">System Debugging</span></li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;
