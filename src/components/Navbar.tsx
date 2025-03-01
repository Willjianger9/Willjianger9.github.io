import React from 'react';
import { Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-sm rounded-b-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Name */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-white transition-all duration-300 transform group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">William Jiang</span>
          </a>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <a 
            href="/about" 
            className="group relative text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">About</span>
            <span className="absolute bottom-0 left-[-5%] right-[-5%] w-[110%] mx-auto h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
          <a 
            href="/experience" 
            className="group relative text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">Experience</span>
            <span className="absolute bottom-0 left-[-5%] right-[-5%] w-[110%] mx-auto h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
          <a 
            href="/projects" 
            className="group relative text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">Projects</span>
            <span className="absolute bottom-0 left-[-5%] right-[-5%] w-[110%] mx-auto h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
        </div>

        {/* Right side - Social Links */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
