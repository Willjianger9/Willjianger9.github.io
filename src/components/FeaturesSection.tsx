import React from 'react';
import { Code, Layout, Rocket } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using React, TypeScript, and other cutting-edge technologies.",
      icon: <Code className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility.",
      icon: <Layout className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Full Stack",
      description: "Developing end-to-end solutions with expertise in both frontend and backend technologies.",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-500/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            What I Do
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I specialize in creating modern web applications with a focus on performance,
            user experience, and clean code. Here are some of my core competencies:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
