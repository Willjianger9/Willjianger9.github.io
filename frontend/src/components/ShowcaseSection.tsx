import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ShowcaseSection: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and TypeScript",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "Full-stack application with real-time features",
      tags: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.com",
    },
    {
      title: "Project 3",
      description: "Mobile-first responsive web application",
      tags: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.com",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-purple-500/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Featured Projects
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge
          and demonstrates different aspects of my skills.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
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

export default ShowcaseSection;
