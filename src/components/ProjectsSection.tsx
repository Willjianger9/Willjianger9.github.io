import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeUrl: string;
  demoUrl?: string;
  researchRoute?: string;
}

const projects: Project[] = [
  {
    title: "Plant Portal",
    description: "Plant Portal is an interactive platform that encourages users to plant trees and greenery in real life while building a virtual 3D digital garden that mirrors their efforts. Users can upload images of their plants, which will be autonomously categorized into subtypes, and be able to track their carbon reduction impact.",
    technologies: ["React", "Three.js", "MongoDB", "Gemini API", "JWT"],
    image: "plant_portal.jpg",
    codeUrl: "https://github.com/dwu006/scuhacks",
    demoUrl: "https://devpost.com/software/plant-portal"
  },
  {
    title: "URIL Website",
    description: "Designed and developed UCLA Robot Intelligence Laboratory's website, showcasing research in robot learning, human-robot collaboration, and autonomous systems.The site features project descriptions, team profiles, and publication archives.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    image: "uril-full.png",
    codeUrl: "https://github.com/UCLA-Robot-Intelligence-Lab/UCLA-Robot-Intelligence-Lab.github.io",
    demoUrl: "https://ucla-robot-intelligence-lab.github.io/"
  },
  {
    title: "Unity Nonprofits",
    description: "A platform that allows users to discover local nonprofits by entering their zip code. Built with TypeScript, FastAPI, and Playwright, the project simplifies community engagement by providing instant access to nearby volunteer opportunities.",
    technologies: ["TypeScript", "FastAPI", "NodeJS", "NextJS", "MelissaAPI"],
    image: "Unity_Nonprofits.jpg",
    codeUrl: "https://github.com/toomzheng/unity-nonprofits",
    demoUrl: "https://devpost.com/software/unity-nonprofits?ref_content=user-portfolio&ref_feature=in_progress"
  },
  {
    title: "AI Hockey Analytics Platform",
    description: "Developed a hockey analytics system that predicts scoring probabilities in 1v1 situations using computer vision and XGBoost regression. The system analyzes player positioning through video footage, tracking spatial relationships to calculate a success metric to provide data-driven insights for defensive strategy optimization.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Pandas", "XGBoost"],
    image: "Hockey_Analytics.png",
    codeUrl: "https://github.com/Willjianger9/1v1-Success-Metric-Pipeline",
    researchRoute: "/research-paper"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = (project: Project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else if (project.researchRoute) {
      navigate(project.researchRoute);
    }
  };

  return (
    <section id="projects" className="py-20 bg-transparent">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          variants={projectVariants}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              variants={projectVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="aspect-video rounded-t-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.button
                    onClick={() => handleDemoClick(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.demoUrl ? 'Live Demo' : 'View Research'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
