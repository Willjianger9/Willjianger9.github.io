import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 }, 
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative h-[calc(100vh-15rem)] flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              transition={{ duration: 0.8 }}
            >
              William Jiang
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Software Developer
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm passionate about creating beautiful and functional web applications.
              Let's build something amazing together.
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-100 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
              >
                View My Resume
                <FileText className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
