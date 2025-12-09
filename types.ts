export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string; // We'll use a string identifier for icons
  category: 'frontend' | 'backend' | 'tools';
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}