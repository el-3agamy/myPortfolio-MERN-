import { Experience, Project, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// constants.ts
export const SKILLS: Skill[] = [
  { name: 'Next.js', icon: 'next', category: 'frontend' },
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Redux Toolkit', icon: 'redux', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'React Query', icon: 'react-query', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  { name: 'Material UI', icon: 'material-ui', category: 'frontend' },
  { name: 'Shadcn', icon: 'shadcn', category: 'frontend' },
  { name: 'Formik', icon: 'formik', category: 'frontend' },
  { name: 'Yup', icon: 'yup', category: 'frontend' },
  { name: 'Zod', icon: 'zod', category: 'frontend' },
  { name: 'SAAS', icon: 'saas', category: 'frontend' },
  { name: 'Node.js', icon: 'node', category: 'backend' },
  { name: 'Express', icon: 'express', category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend' },
  { name: 'Mongoose', icon: 'mongoose', category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgres', category: 'backend' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
  { name: 'Git', icon: 'git', category: 'tools' },
];


export const PROJECTS: Project[] = [
  {
    title: 'FreshCart (E-commerce)',
    description: 'Developed e-commerce platform with React, Vite, Tailwind, React Query, Axios, featuring authentication, cart, API integration, and Stripe checkout.',
    tags: ['React', 'Vite', 'Tailwind', 'React Query', 'Stripe'],
    image: 'assets/Screenshot 2025-12-10 014044.png',
    demoUrl: 'https://ecommerce-sand-phi.vercel.app/',
    githubUrl: 'https://github.com/el-3agamy/ecommerce',
  },
  {
    title: 'Circle (Social Media App)',
    description: 'Social media app built with Next.js (App Router), TypeScript, Redux Toolkit, Formik, Yup, Axios, Material UI, integrated with real-world REST API.',
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Formik', 'Yup'],
    image: 'assets/Screenshot 2025-12-10 014006.png',
    demoUrl: 'https://x-rust.vercel.app/posts',
    githubUrl: 'https://github.com/el-3agamy/circle',
  },
  {
    title: 'Todo RESTful API',
    description: 'Secure, scalable Todo API using Express, TypeScript, Node.js, with JWT auth, Zod validation, bcrypt, Mongoose, CORS, and RESTful structure.',
    tags: ['Express', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Zod'],
    image: 'https://picsum.photos/seed/tecno/800/600', 
    demoUrl: '#',
    githubUrl: 'https://github.com/el-3agamy/todos_app_api',
  },
  {
    title: 'TECNO (Multi-Actor E-Commerce)',
    description: 'Developed e-commerce platform using JavaScript, Bootstrap with multi-role access, catalogue, search, cart, wishlist, orders, dashboards.',
    tags: ['JavaScript', 'Bootstrap', 'E-commerce', 'Multi-role'],
    image: 'assets/Screenshot 2025-12-10 013351.png',
    demoUrl: 'https://cst-project-xi.vercel.app/',
    githubUrl: 'https://github.com/MohamedFahim123/cst-project/',
  },
  {
    title: 'Notes App',
    description: 'Notes app with user authentication and CRUD operations using React, Vite, Formik, and Axios.',
    tags: ['React', 'Vite', 'Formik', 'Axios', 'CRUD', 'Authentication'],
    image: 'assets/Screenshot 2025-12-10 014203.png',
    demoUrl: 'https://notes-app-rho-three-42.vercel.app/',
    githubUrl: 'https://github.com/el-3agamy/Notes_App',
  },
  {
    title: 'Admin Dashboard',
    description: 'A modern Admin Dashboard web application built with React, Vite, React Router DOM, Material UI, Nivo Charts, and FullCalendar.',
    tags: ['React', 'Vite', 'Material UI', 'Nivo Charts', 'FullCalendar'],
    image: 'assets/Screenshot 2025-12-10 014239.png',
    demoUrl: 'https://dashboard-lime-tau.vercel.app/',
    githubUrl: 'https://github.com/el-3agamy/Dashboard',
  },
  {
    title: 'React Portfolio',
    description: 'Personal portfolio website built with React, Vite, React-Router DOM, featuring a sleek, modern, and fully responsive design.',
    tags: ['React', 'Vite', 'React Router DOM', 'Portfolio', 'CSS3'],
    image: 'assets/Screenshot 2025-12-10 014318.png',
    demoUrl: 'https://portfolio-react-sand-phi-21.vercel.app/',
    githubUrl: 'https://github.com/el-3agamy/PortfolioReact',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior MERN Developer',
    period: '2022 - Present',
    description: [
      'Led the migration of legacy monolith to microservices architecture.',
      'Improved application performance by 40% through code optimization.',
      'Mentored junior developers and conducted code reviews.',
    ],
  },
  {
    company: 'Creative Agency',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Developed custom e-commerce solutions for various clients.',
      'Integrated third-party APIs (Stripe, Twilio, SendGrid).',
      'Collaborated with designers to implement pixel-perfect UIs.',
    ],
  },
  {
    company: 'StartUp Hub',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    description: [
      'Built responsive web applications using React and Redux.',
      'Implemented automated testing using Jest and React Testing Library.',
    ],
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/el-3agamy',
  linkedin: 'https://www.linkedin.com/in/saeid-el-agamy/',
  twitter: 'https://twitter.com',
  email: 'mailto:selagamy25@gmail.com',
};

// Internships array
export const INTERNSHIPS = [
  {
    period: 'July 2025 – December 2025',
    role: 'Intensive Training Program - Full Stack MERN Developer track',
    company: 'Information Technology Institute (ITI), Tanta branch',
    description: ['Full-stack training including React, Node.js, MongoDB, Express, and deployment best practices.']
  },
  {
    period: 'September 2024 – March 2025',
    role: 'Frontend Diploma',
    company: 'Route Academy',
    description: ['Focused on React & Next.js development, building responsive web apps and components.']
  }
];