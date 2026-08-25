# Personal Portfolio — Rishabh Shukla (Assignment 1)

Fully responsive, production-ready personal portfolio website built for **Rishabh Shukla** (Full Stack Developer & Competitive Programmer). Designed and engineered strictly utilizing pure semantic HTML5, modular vanilla CSS3, and ES6 JavaScript modules, adhering to all Full Stack Development Coursework Assignment 1 specifications without external UI frameworks.

## Check Section (Specification Verification Checklist)

- [x] **Semantic HTML Structure**: Implements all required standard semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<form>`).
- [x] **Section Content Requirements**: Features structured core sections (Introduction, About Me, Education & Experience, Technical Skills, Projects with 3 entries, Contact).
- [x] **Valid & Accessible Forms**: Form inputs are explicitly paired with `<label>` tags via matching `for` and `id` attributes; accessible client-side validation is implemented cleanly.
- [x] **W3C HTML & CSS Compliance**: Structured to pass strict W3C validator checks with zero syntax errors, zero duplicate IDs, and standard HTML5 syntax.
- [x] **Strict Separation of Concerns**: Built using modular vanilla CSS layers; ZERO inline styles (`style=""`) and ZERO internal style blocks (`<style>`) exist in HTML markup.
- [x] **No External UI Frameworks**: Custom responsive design system built entirely from scratch without Bootstrap, Tailwind, or CSS preprocessors (SASS/LESS).
- [x] **CSS Custom Properties**: Design tokens established in `:root` (`variables.css`) to drive a consistent minimalist dark palette, clean typography, spacing, and transition tokens.
- [x] **Modern Responsive Layout**: Leverages CSS Grid for two-dimensional structures and Flexbox for one-dimensional linear component formatting.
- [x] **Two+ Responsive Breakpoints**: Verified mobile viewports (≤ 480px) and tablet viewports (≤ 768px) with graceful grid reflows and interactive mobile menu toggling.
- [x] **Interactive States & Micro-animations**: Integrates smooth hover border transitions, clean component lifts, custom focus rings, and professional button feedback.
- [x] **Image Accessibility**: Descriptive, context-aware `alt` attributes included on all illustrations, avatar graphics, and project mockups.
- [x] **WCAG AA Color Contrast**: Deep charcoal background (`#0e1117` / `#151921`) paired with high-luminance slate and white text (`#ededed` / `#8b949e`) far exceeds minimum accessibility contrast ratios.
- [x] **Logical Heading Hierarchy**: Maintains exactly one singular primary document heading (`<h1>`), descending logically to section titles (`<h2>`) and individual component cards (`<h3>`).
- [x] **Project GitHub Repository Links**: Each project entry (Supportly, FestFlow, MediQ) includes direct, interactive source-code repository action buttons (`https://github.com/shukla6767/...`).
- [x] **Exact Resume Accuracy**: Precisely incorporates B.Tech CSE credentials at NIT Warangal, competitive programming honors (LeetCode Knight 1892, Codeforces Specialist 1510, CodeChef 2-Star 1508), technical coursework, and concise leadership roles.

---

## Design Rationale

This portfolio embraces a clean, sophisticated minimalist developer dark theme inspired by modern engineering portfolios and documentation design systems (such as GitHub, Linear, and Stripe). A refined Deep Slate Charcoal (`#0e1117`) backdrop paired with subtle graphite surface containers (`#151921`) establishes an uncluttered visual hierarchy without distracting emoji clutter or gaudy gradient fills. Typography utilizes the Google Font *Share Tech Mono* universally across headings, body content, and technical tags, evoking a clean terminal developer aesthetic. Subdued, crisp card borders with smooth hover transitions ensure optimal WCAG AA legibility while delivering a responsive, elegant user experience without reliance on third-party design frameworks.

## Layout Technique Justification

A synthesis of CSS Grid and Flexbox structures the layout across viewports. CSS Grid handles two-dimensional alignments—such as the hero layout, side-by-side academic and leadership structures, three-column project grids, and multi-column statistic cards—ensuring clean alignment and seamless responsiveness. Flexbox powers one-dimensional alignments, including sticky header navigation, project tag lists, card action bars, and input-label pairings. This separation maximizes structural predictability. Targeted media queries at tablet (768px) and mobile (480px) breakpoints dynamically transform multi-column grids into clean vertical stacks and reflow desktop navigation into a responsive toggle menu.

## Known Limitations

Client-side form validation provides real-time accessibility feedback in the browser; live server endpoints and database message persistence will be integrated in subsequent Express/Node.js coursework assignments. External profiles and repository links open directly in secure secondary browser tabs (`noopener noreferrer`).

---

## Running Locally & Testing

To test ES module loading (`navigation.js`, `form-validation.js`) and explore the responsive layouts locally, serve the directory via any standard static HTTP server:

```bash
# Using Python
python -m http.server 8000

# OR using Node / npx
npx serve .
```

Validate HTML and CSS standards at [validator.w3.org](https://validator.w3.org/) and [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/).
