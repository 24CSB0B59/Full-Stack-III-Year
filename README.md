# React Portfolio with Express Backend (Assignment 3)

A fully functional, full-stack Single Page Application (SPA) built with React, React Router, and a Node.js/Express backend API.

## Setup & Run Instructions

This project now contains two distinct applications: the React frontend and the Express backend. You will need **two terminal windows** to run them simultaneously.

### 1. Start the Express Backend
Open a terminal in the root directory and run:
```bash
cd server
npm install
npm run dev
```
*The backend server will start running on `http://localhost:5000`.*

### 2. Start the React Frontend
Open a second terminal in the root directory and run:
```bash
npm install
npm run dev
```
*The frontend will start running on `http://localhost:5173` and automatically communicate with the backend API.*

---

## API Endpoints Overview

All frontend static data logic has been successfully migrated to the new backend. 

### `GET /`
Health check endpoint to verify the server is running.
- **Response**: HTTP 200 `{ "status": "ok" }`

### `GET /api/projects`
Fetches the complete array of portfolio projects.
- **Response**: HTTP 200 with an array of project objects.

### `GET /api/projects/:id`
Fetches a specific project by its ID for the dynamic detail page (`/projects/:projectId`).
- **Response (Success)**: HTTP 200 with the matching project object.
- **Response (Failure)**: HTTP 404 `{ "error": "Project not found" }`

### `POST /api/contact`
Receives contact form submissions, validates them, and stores them in an in-memory array.
- **Request Body**: `{ "name": "...", "email": "...", "message": "..." }`
- **Response (Success)**: HTTP 201 with success payload.
- **Response (Failure)**: HTTP 400 for missing fields or invalid email formats.

### `GET /api/contact`
*Open Endpoint (No Authentication Required).* Returns all successfully stored contact submissions for verification purposes.
- **Response**: HTTP 200 with an array of submission objects.

---

## Storage & Implementation Details

- **Database**: To satisfy the assignment constraints without unnecessary overhead, project data and contact form submissions are persisted server-side using **in-memory arrays**.
- **CORS**: Enabled globally on the backend to accept requests strictly from the React dev server (`ALLOWED_ORIGIN`).
- **Error Handling**: A centralized global Express error-handling middleware is implemented to ensure the server never crashes on malformed requests, alongside a catch-all 404 handler for undefined API routes.
- **Frontend Fetching**: The React frontend uses native `fetch` within `useEffect` hooks to retrieve data, avoiding external data-fetching libraries like React Query as specified by the assignment constraints. Appropriate loading spinners and graceful error states have been introduced to the UI.
