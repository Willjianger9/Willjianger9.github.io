import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm py-8 rounded-t-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} William Jiang. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Willjianger9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Willjianger9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-white"
                style={{ color: 'currentColor' }}
              >
                <path 
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" 
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="mailto:jiangwil@g.ucla.edu"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;