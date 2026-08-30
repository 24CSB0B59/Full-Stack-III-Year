require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import mock data and storage
const { projects } = require('./data/projectsData');
const { submissions } = require('./data/submissions');

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

// B7: Enable CORS
app.use(cors({
  origin: ALLOWED_ORIGIN
}));

// Middleware to parse JSON bodies
app.use(express.json());

// ----------------------------------------------------
// B1. Express Server Setup & Health Check
// ----------------------------------------------------
app.get('/', (req, res) => {
  res.status(200).json({ status: "ok" });
});

// ----------------------------------------------------
// B2. GET /api/projects — Serve Project List
// ----------------------------------------------------
app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});

// ----------------------------------------------------
// B3. GET /api/projects/:id — Serve a Single Project
// ----------------------------------------------------
app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  res.status(200).json(project);
});

// ----------------------------------------------------
// B4. POST /api/contact — Handle Contact Form Submissions
// ----------------------------------------------------
app.post('/api/contact', (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, and message are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Persist valid submission in memory
    const newSubmission = {
      id: Date.now(),
      name,
      email,
      message,
      submittedAt: new Date().toISOString()
    };
    
    submissions.push(newSubmission);

    res.status(201).json({ message: "Submission successful", data: newSubmission });
  } catch (error) {
    next(error); // Pass to global error handler
  }
});

// ----------------------------------------------------
// B5. GET /api/contact — List Submissions
// ----------------------------------------------------
app.get('/api/contact', (req, res) => {
  res.status(200).json(submissions);
});

// ----------------------------------------------------
// B6. Centralized Error Handling & 404s
// ----------------------------------------------------

// Catch-all 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Express error-handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
