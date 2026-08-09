import supportlyImg from '../assets/images/project-supportly.png';
import festflowImg from '../assets/images/project-festflow.png';
import mediqImg from '../assets/images/project-mediq.png';

export const projects = [
  {
    id: 1,
    title: "Supportly",
    description: "A full-stack creator monetization platform where fans support creators through custom monetized profiles and seamless one-time payments. Engineered GitHub OAuth authentication via NextAuth.js featuring automatic unique-username generation and dynamic route protection. Integrated a signature-verified Razorpay payment flow with auto-synced transaction records.",
    techStack: ["Next.js", "React", "MongoDB", "NextAuth.js", "Razorpay"],
    image: supportlyImg,
    link: "https://github.com/shukla6767/supportly"
  },
  {
    id: 2,
    title: "FestFlow",
    description: "A BCNF-normalized relational database architecture designed to power large-scale festival operations. Features 27 independent tables, 40+ formal relationships, and 15+ enforced business rules covering event scheduling, team formation, logistics, and sponsorships. Built with robust stored procedures, SQL triggers, automated views, ACID-compliant transactions, and 50+ analytical queries with index-driven query optimization.",
    techStack: ["Oracle SQL", "BCNF Normalization", "Stored Procedures", "SQL Triggers", "Query Optimization"],
    image: festflowImg,
    link: "https://github.com/shukla6767/festflow"
  },
  {
    id: 3,
    title: "MediQ",
    description: "A real-time hospital triage and queue management system engineered with Socket.io for instantaneous token status updates. Resolved concurrent queue race conditions using atomic MongoDB operations and implemented secure JWT-based Role-Based Access Control (RBAC) across Patient, Doctor, Receptionist, and Admin workflows. Features Redis & BullMQ background task jobs for automated expired-token purging and scheduled notification triggers.",
    techStack: ["Next.js", "Express.js", "Socket.io", "Redis & BullMQ", "MongoDB 2dsphere"],
    image: mediqImg,
    link: "https://github.com/shukla6767/mediq"
  }
];
