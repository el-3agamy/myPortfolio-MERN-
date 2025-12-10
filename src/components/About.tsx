// About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import { Code, Layout, Server, Database, Settings, Terminal } from 'lucide-react';
import { SiNextdotjs, SiReact, SiTypescript, SiRedux, SiReactquery, SiTailwindcss, SiMui, SiFormik, SiPyup, SiZod, SiDocker, SiGit, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrand4Chan } from 'react-icons/tb';

// Map skill name to actual icon component
const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'next.js': return <SiNextdotjs className="w-6 h-6 text-black" />;
    case 'react': return <SiReact className="w-6 h-6 text-blue-500" />;
    case 'typescript': return <SiTypescript className="w-6 h-6 text-blue-600" />;
    case 'redux toolkit': return <SiRedux className="w-6 h-6 text-purple-600" />;
    case 'react query': return <SiReactquery className="w-6 h-6 text-blue-400" />;
    case 'tailwind css': return <SiTailwindcss className="w-6 h-6 text-cyan-400" />;
    case 'material ui': return <SiMui className="w-6 h-6 text-blue-700" />;
    case 'shadcn': return <TbBrand4Chan className="w-6 h-6 text-orange-500" />;
    case 'formik': return <SiFormik className="w-6 h-6 text-purple-400" />;
    case 'yup': return <SiPyup className="w-6 h-6 text-green-400" />;
    case 'zod': return <SiZod className="w-6 h-6 text-indigo-400" />;
    case 'saas': return <Code className="w-6 h-6 text-pink-500" />;
    case 'node.js': return <SiTypescript className="w-6 h-6 text-green-500" />;
    case 'express': return <Server className="w-6 h-6 text-gray-500" />;
    case 'mongodb': return <SiMongodb className="w-6 h-6 text-green-600" />;
    case 'mongoose': return <SiMongodb className="w-6 h-6 text-green-800" />;
    case 'postgresql': return <SiPostgresql className="w-6 h-6 text-blue-400" />;
    case 'docker': return <SiDocker className="w-6 h-6 text-blue-500" />;
    case 'git': return <SiGit className="w-6 h-6 text-orange-500" />;
    default: return <Code className="w-6 h-6" />;
  }
};

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About me:</h3>
            <p className="text-gray-600 dark:text-white mb-6 leading-relaxed">
              I'm a <strong>versatile MERN Stack Developer </strong>
              passionate about building modern, high-performance web applications.
              With strong expertise in Next.js, React, Node.js, Express, and MongoDB, I create scalable and maintainable
              solutions that follow modern design principles and best practices.

              I thrive on crafting clean, efficient, and user-friendly applications,
              leveraging TypeScript, Redux Toolkit, React Query, and modern
               UI libraries like Tailwind CSS, Material UI, and SASS. I am experienced in
                implementing responsive design, accessibility, and Progressive Web Applications (PWAs),
                 ensuring my applications deliver seamless experiences across all devices.

              I also specialize in backend development, building RESTful APIs 
              with Express, handling authentication and authorization securely using JWT, 
              and managing data efficiently with MongoDB and Mongoose. 
              With a strong focus on unit testing using Jasmine, I ensure that my code is reliable and robust.

              Beyond technical skills, I bring strong communication, problem-solving,
               and teamwork abilities, allowing me to collaborate effectively in dynamic environments. 
               I am always eager to learn, grow, and contribute to impactful projects that make a difference.
            </p>
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">My Skills</h3>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-4">
              {SKILLS.map(skill => (
                <motion.div key={skill.name} variants={item} whileHover={{ scale: 1.05 }} className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow cursor-default">
                  {getIcon(skill.name)}
                  <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
