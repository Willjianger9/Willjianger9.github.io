import React, { useEffect, useRef } from 'react';
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
    title: "Fullstack Developer",
    company: "Creative Labs",
    location: "Los Angeles, CA",
    period: "September 2024 - December 2024",
    description: [
      "Developed the SwipeSmart iOS app to help users maximize cashback rewards by tracking credit card offers.",
      "Redesigned the data structure for credit card reward categories to support unique colors and icons and integrated updates into the app using data-passing.",
      "Improved development with continuous integration to resolve bugs and enhance app performance.",
      "Integrated designer-created views into the application for a seamless, visually cohesive user experience."
    ],
    technologies: ["Swift", "UIKit", "CI/CD", "Xcode"]
  },
  {
    title: "Lead Website Developer",
    company: "UCLA Robot Intelligence Laboratory",
    location: "Los Angeles, CA", 
    period: "December 2024 - Present",
    description: [
      "Designed and launched the official website with a responsive interface to showcase research projects",
      "Leveraged HTML, CSS, and JavaScript to create dynamic, cross-browser compatible web pages",
      "Engineered responsive animations with engaging UI/UX elements and smooth animations",
      "Integrated version control using Git and created deployment workflows to streamline updates and maintenance"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git", "Web Development"]
  },
  {
    title: "Multimedia Designer",
    company: "YouTube",
    location: "Remote",
    period: "April 2021 – October 2023",
    description: [
      "Produced and edited 40+ videos, achieving over 140,000 views on YouTube",
      "Implemented search engine optimization strategies, generating over 1.2 million video impressions",
      "Developed and refined video content strategies to increase audience retention and grow channel visibility"
    ],
    technologies: ["Video Editing", "SEO", "Content Strategy"]
  }
];

const research: Experience[] = [
  {
    title: "Undergraduate Researcher",
    company: "UCLA Robot Intelligence Laboratory",
    location: "Los Angeles, CA",
    period: "September 2024 – Present",
    description: [
      "Extracted 3D gaze coordinates from Meta's Aria glasses to track movements from a mobile ego perspective",
      "Engineered a homography-based solution to align gaze data to a robot-mounted camera",
      "Improved robot policy learning by incorporating human visual attention to adapt behavior during tasks"
    ],
    technologies: ["Computer Vision", "Robotics", "Homography", "Meta Aria Glasses"]
  },
  {
    title: "Undergraduate Research Intern",
    company: "Interconnected & Integrated Bioelectronics Laboratory",
    location: "Los Angeles, CA",
    period: "December 2024 – Present",
    description: [
      "Contributed to development of a ferrobotic platform for automated viral detection in clinical samples",
      "Developed machine learning models to predict diseases from biomarkers using colorimetric RT-LAMP assays",
      "Evaluated machine learning models to determine performance in multi-class disease classification"
    ],
    technologies: ["Machine Learning", "Bioelectronics", "RT-LAMP", "Disease Prediction"]
  },
  {
    title: "Computer Vision Research Assistant",
    company: "University of Waterloo, Vision and Image Processing Laboratory",
    location: "Waterloo, ON",
    period: "July 2024 – August 2024",
    description: [
      "Annotated 100+ hockey games of footage to develop a robust dataset for training machine learning models",
      "Designed a YOLO-based object detection and tracking system to track player movements with 97% accuracy",
      "Developed an extreme gradient boosting algorithm using 150+ videos to evaluate performance",
      "Utilized homography techniques to map player positions and warp visualized data to original footage",
      "Integrated SAM2 to automate player mask creation to create precise overlay of masks on visualized data"
    ],
    technologies: ["YOLO", "Computer Vision", "Machine Learning", "SAM2", "Homography"]
  }
];

const ExperienceSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observers for both items and titles
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the content container and dot within this item
            const contentContainer = entry.target.querySelector('.content-container');
            const dot = entry.target.querySelector('.timeline-dot');
            
            // Animate the content container
            if (contentContainer) {
              contentContainer.classList.add('animate-fade-up', 'opacity-100');
            }
            
            // Animate the dot
            if (dot) {
              dot.classList.add('animate-scale-in');
            }
            
            itemObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up', 'opacity-100');
            titleObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe experience items
    const elements = document.querySelectorAll('.experience-item');
    elements.forEach((el) => itemObserver.observe(el));

    // Observe section titles
    const titles = document.querySelectorAll('.section-title');
    titles.forEach((el) => titleObserver.observe(el));

    return () => {
      itemObserver.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center opacity-0 section-title">
          Experience
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[18px] h-full w-[2px] bg-gradient-to-b from-blue-400/80 to-purple-500/80" />
          
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-8 mb-12 experience-item"
            >
              {/* Timeline dot */}
              <div className="absolute left-[8px] md:left-[8px] w-[20px] h-[20px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-4 border-black/50 scale-0 timeline-dot" />
              
              {/* Content */}
              <div className="flex-1 md:ml-[60px] opacity-0 content-container">
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
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white my-12 text-center opacity-0 section-title">
          Research
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[18px] h-full w-[2px] bg-gradient-to-b from-green-400/80 to-teal-500/80" />
          
          {research.map((researchItem, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-8 mb-12 experience-item"
            >
              {/* Timeline dot */}
              <div className="absolute left-[8px] md:left-[8px] w-[20px] h-[20px] rounded-full bg-gradient-to-r from-green-400 to-teal-500 border-4 border-black/50 scale-0 timeline-dot" />
              
              {/* Content */}
              <div className="flex-1 md:ml-[60px] opacity-0 content-container">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:bg-black/40">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {researchItem.title}
                  </h3>
                  <h4 className="text-lg text-green-400 mb-4">
                    {researchItem.company}
                  </h4>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {researchItem.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {researchItem.location}
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {researchItem.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  {researchItem.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {researchItem.technologies.map((tech, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
