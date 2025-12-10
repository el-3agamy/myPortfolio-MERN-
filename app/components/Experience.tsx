// Internships.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { INTERNSHIPS } from '../../constants';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Internships
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {INTERNSHIPS.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

              <div className={`md:flex justify-between items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full items-center justify-center border-4 border-white dark:border-gray-800 z-10">
                  <Briefcase className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Mobile Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 ml-3"></div>
                <div className="md:hidden absolute left-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 z-10 ml-0">
                  <Briefcase className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="md:w-[45%] mb-4 md:mb-0">
                  <div
                    className={`p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors relative ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    {/* Arrow for Desktop */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 dark:bg-gray-700/50 border-t border-l border-gray-100 dark:border-gray-700 rotate-45 ${
                        index % 2 === 0 ? '-left-2 border-r-0 border-b-0' : '-right-2 border-l-0 border-t-0 rotate-[225deg]'
                      }`}
                    ></div>

                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-2">
                      {intern.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{intern.role}</h3>
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">{intern.company}</h4>
                    <ul
                      className={`space-y-2 text-gray-600 dark:text-gray-400 text-sm list-disc ${
                        index % 2 === 0 ? 'pl-5 md:pl-5' : 'pl-5 md:pr-5 md:pl-0 md:list-none'
                      }`}
                    >
                      {intern.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
