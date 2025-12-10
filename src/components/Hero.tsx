import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiJest } from 'react-icons/si';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-primary-600 dark:text-cyan-100 font-semibold mb-2">
              Software Engineer.
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hello, I'm <span className="text-primary-600 dark:text-primary-400">Saeid <br /> El-Agamy.</span>
              <br />
              <span className="text-xl md:text-4xl text-gray-600 dark:text-gray-100 font-medium block mt-2">
                MERN Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Versatile MERN Stack Developer with strong expertise in Next.js, React, Node.js, Express,
              and MongoDB. Skilled in TypeScript, modern UI libraries, Redux Toolkit, and SASS,
              delivering clean, scalable, and high-performance web applications with modern design
              principles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary-500/30"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary-600 rounded-[2rem] rotate-6 opacity-20 blur-md"></div>

            {/* Profile Image */}
            <img
              src="./../assets/file.jpg"
              alt="Developer Profile"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800"
            />

            {/* Floating Skill Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <span className="text-2xl">⚛️</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">React</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-8 right-0 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <span className="text-2xl rounded-2xl p-1 bg-gray-400 dark:bg-black">N</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Next</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[190px] right-0 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <SiJest className="w-6 h-6 text-red-500" />
              <span className="font-semibold text-gray-800 dark:text-gray-200">Jest</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[150px] left-[-60px] bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <span className="text-2xl">🚀</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Express</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.7 }}
              className="absolute -bottom-4 right-8 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <span className="text-2xl">🟦</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">TypeScript</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0], x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 md:gap-2"
            >
              <span className="text-2xl">🟢</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Node.js</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;