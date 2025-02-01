import React from 'react';
import { Code, Book, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      title: "Programming Languages",
      description: "Proficient in TypeScript, JavaScript, Python, and more",
      icon: <Code className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Education",
      description: "Computer Science graduate with focus on web development",
      icon: <Book className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Collaboration",
      description: "Experience working in agile teams and open source projects",
      icon: <Users className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm a passionate software developer with a focus on creating beautiful and functional web applications.
            I love learning new technologies and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;