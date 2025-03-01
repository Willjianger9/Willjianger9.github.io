import React, { useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Add animation classes after a small delay to ensure they trigger after page load
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.hero-animate');
      elements.forEach((el) => {
        const group = el.getAttribute('data-group') || '0';
        setTimeout(() => {
          el.classList.remove('opacity-0');
          el.classList.add(el.getAttribute('data-animation') || 'animate-fade-up');
        }, parseFloat(group) * 200); // Support decimal groups for finer timing control
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-15rem)] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">
              <span className="hero-animate opacity-0 inline-block" data-animation="animate-fade-down" data-group="0">
                William Jiang
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hero-animate opacity-0 inline-block" data-animation="animate-fade-down" data-group="1">
                Software Developer
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto hero-animate opacity-0" data-group="2">
              I'm passionate about creating beautiful and functional web applications.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-md overflow-hidden hero-animate opacity-0 transition-none" 
                data-group="3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 hero-animate opacity-0" data-group="3.02">
                  View My Work
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 hero-animate opacity-0" data-group="3.04" />
              </Link>
              <Link
                to="/resume"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/20 text-white rounded-md overflow-hidden hero-animate opacity-0 transition-none"
                data-group="3"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 hero-animate opacity-0" data-group="3.02">
                  View My Resume
                </span>
                <FileText className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 hero-animate opacity-0" data-group="3.04" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
