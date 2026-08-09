# React Portfolio Application

A fully functional, multi-page Single Page Application (SPA) built with React, React Router, and Vanilla CSS. This project demonstrates modern component architecture, advanced state management, and robust side-effect handling.

## Setup & Run Instructions

This project was bootstrapped using Vite. Follow these steps to run the application locally:

1. **Ensure Node.js is installed** (v16.0.0 or higher is recommended).
2. **Install Dependencies**:
   Open your terminal in the root directory of the project and run:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   *The console will provide a `localhost` URL (usually `http://localhost:5173`). Open this link in your browser.*

4. **Build for Production** (Optional):
   ```bash
   npm run build
   ```
   *This compiles the application into the `dist/` folder for deployment.*

---

## Component Tree Architecture

The application is structured into a clean `src/pages` and `src/components` hierarchy to strictly separate routing layers from reusable UI elements.

```
App (Shared Layout & BrowserRouter wrapper in main.jsx)
 ├── Navbar (Persistent Navigation)
 ├── Routes
 │    ├── Home (/)
 │    │    ├── Hero
 │    │    ├── Education
 │    │    └── Skills
 │    ├── AboutPage (/about)
 │    │    └── About
 │    ├── Projects (/projects)
 │    │    └── ProjectsPage
 │    │         └── ProjectList
 │    │              └── ProjectCard
 │    ├── ProjectDetail (/projects/:projectId)
 │    ├── Contact (/contact)
 │    │    └── ContactForm
 │    └── NotFound (*)
 └── Footer (Persistent Footer)
```

### State-Lifting Decisions

1. **Theme State (Dark/Light Mode)**
   - **Decision:** Lifted to the absolute top level (`App.jsx`).
   - **Why:** The theme affects global CSS variables applied to the document root. By holding `theme` in `App.jsx`, we can pass the `toggleTheme` function down exclusively to the `Navbar` (where the toggle button lives), while the state effect manages the actual `document.documentElement` natively.

2. **Accordion State (Legacy / Pre-Routing)**
   - **Decision:** Prior to implementing React Router dynamic pages, the expansion state for Project Details was hoisted from individual `ProjectCard`s up to `ProjectList`.
   - **Why:** If each `ProjectCard` managed its own `isExpanded` boolean independently, multiple cards could be expanded simultaneously. By hoisting a single `expandedId` integer state to the parent `ProjectList`, we mathematically guaranteed that only one card could be active at a time.

3. **Form State (Controlled Inputs)**
   - **Decision:** Confined locally within `ContactForm.jsx`.
   - **Why:** The form data (name, email, message) and validation logic are strictly isolated to the behavior of the form itself. No other part of the application needs access to this data, so it is kept as local `useState` objects.

---

## Side Effects (`useEffect`) Implemented

1. **Theme Synchronization (`App.jsx`)**
   - **Why it was necessary:** We needed the user's Dark/Light mode preference to persist across browser refreshes.
   - **Implementation:** The `useEffect` strictly listens to the `theme` dependency array. Whenever the state changes, it instantly executes `localStorage.setItem('portfolio-theme', theme)`.

2. **Simulated Initialization Loading (`Hero.jsx`)**
   - **Why it was necessary:** To simulate fetching external profile data and ensure the UI doesn't visually stutter while rendering heavy visual assets.
   - **Implementation:** An empty dependency array `[]` ensures this runs exactly once on mount. It utilizes a `setTimeout` to flip an `isLoading` boolean after 1.2 seconds. It crucially implements a **cleanup function** (`return () => clearTimeout(timer)`) to destroy the timer and prevent memory leaks if the user navigates away before the timeout finishes.

3. **Responsive Mobile Menu Listener (`Navbar.jsx`)**
   - **Why it was necessary:** If a user opens the mobile hamburger menu, then dynamically resizes their browser window to a desktop resolution, the mobile menu overlay would incorrectly remain open and break the desktop layout.
   - **Implementation:** Attached a `window.addEventListener('resize')` that checks the `innerWidth` and automatically forces `setIsOpen(false)` if the threshold is crossed. It implements a **cleanup function** (`return () => window.removeEventListener`) to cleanly detach the browser listener upon component unmount.
