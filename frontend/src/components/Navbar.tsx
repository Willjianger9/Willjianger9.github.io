import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-sm rounded-b-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">William Jiang</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/experience" className="text-base text-gray-300 hover:text-white transition-colors">
              Experience
            </Link>
            <Link to="/projects" className="text-base text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/williamjiang9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-base font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Willjianger9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-base font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">My GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
