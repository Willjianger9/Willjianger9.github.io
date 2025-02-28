import React, { useEffect } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    description: "A virtual garden platform that combines AI and 3D visualization to promote environmental sustainability. Users can upload real plants, which are identified by Gemini and added to their personal 3D garden, while tracking their contribution to carbon reduction. Features secure authentication, real-time plant recognition, and an interactive 3D environment.",
    technologies: ["React/Vite", "Three.js", "TailwindCSS", "MongoDB", "JWT", "Gemini API"],
    image: "PlantPortal.jpg",
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

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.project-animate');
            elements.forEach((el) => {
              const group = el.getAttribute('data-group') || '0';
              const animation = el.getAttribute('data-animation') || 'animate-fade-up';
              setTimeout(() => {
                el.classList.remove('opacity-0');
                el.classList.add(animation);
              }, parseInt(group) * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleDemoClick = (project: Project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else if (project.researchRoute) {
      navigate(project.researchRoute);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 project-animate opacity-0" data-animation="animate-fade-down" data-group="0">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto project-animate opacity-0" data-group="1">
            Here are some of my recent projects. Each one represents a unique challenge and demonstrates different aspects of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all hover:bg-black/40 project-animate opacity-0"
              data-group={index + 2}
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
                  <button
                    onClick={() => handleDemoClick(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.demoUrl ? 'Live Demo' : 'View Research'}
                  </button>
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
