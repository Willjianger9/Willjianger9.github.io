import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Codeium",
    location: "San Francisco, CA",
    period: "June 2023 - September 2023",
    description: [
      "Developed and maintained core features of the Codeium AI code completion tool",
      "Collaborated with team members to improve user experience and system performance",
      "Implemented new functionality using modern web technologies"
    ],
    technologies: ["TypeScript", "React", "Node.js"]
  },
  {
    title: "Software Development Intern",
    company: "Tech Company A",
    location: "Los Angeles, CA",
    period: "January 2023 - April 2023",
    description: [
      "Built and maintained full-stack web applications using modern frameworks",
      "Optimized database queries resulting in 40% faster load times",
      "Collaborated with cross-functional teams to implement new features"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React"]
  },
  {
    title: "Research Assistant",
    company: "UCLA Computer Science Department",
    location: "Los Angeles, CA",
    period: "September 2022 - December 2022",
    description: [
      "Conducted research on machine learning algorithms for computer vision",
      "Implemented and tested various neural network architectures",
      "Published findings in departmental research paper"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    title: "Web Development Intern",
    company: "Tech Startup B",
    location: "Remote",
    period: "June 2022 - August 2022",
    description: [
      "Developed responsive web interfaces using modern frameworks",
      "Implemented user authentication and authorization systems",
      "Created reusable component library for future projects"
    ],
    technologies: ["JavaScript", "Vue.js", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Software Engineering Project Lead",
    company: "University Project",
    location: "Los Angeles, CA",
    period: "January 2022 - May 2022",
    description: [
      "Led a team of 5 students in developing a full-stack web application",
      "Managed project timeline and deliverables using Agile methodology",
      "Implemented CI/CD pipeline for automated testing and deployment"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "GitHub Actions"]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-gradient-to-b from-blue-400/80 to-purple-500/80" />
          
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-4 border-black/50" />
              
              {/* Content */}
              <div className="flex-1 md:w-1/2">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:bg-black/40">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg text-blue-400 mb-4">
                    {experience.company}
                  </h4>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="flex-1 md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
