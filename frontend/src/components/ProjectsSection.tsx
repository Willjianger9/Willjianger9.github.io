import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Project 2",
    description: "Full-stack application with real-time features",
    technologies: ["Node.js", "Express", "MongoDB"],
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Project 3",
    description: "Mobile-first responsive web application",
    technologies: ["React Native", "Firebase", "Redux"],
    codeUrl: "#",
    demoUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and demonstrates different aspects of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all hover:bg-black/40"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
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
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
