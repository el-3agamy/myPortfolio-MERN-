import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">



          <div className="flex space-x-6 mx-auto justify-center">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <Twitter className="w-6 h-6" />
              </div>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-evenly items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Saeid El-Agamy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;