import React from 'react';

const imageFiles = [
  'IMG_1453.jpg',
  'IMG_3748.JPG',
  'IMG_6128.JPG',
  'IMG_7433.JPG',
  'IMG_8725.JPG',
  'DSC05887.JPEG',
  'C74ECB18-483E-42B7-8A14-A30DBBF2CD60.JPG'
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img 
              src="/assets/William Jiang.jpg" 
              alt="William Jiang" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* About Description */}
          <div className="flex-grow max-w-2xl bg-transparent backdrop-blur-lg p-8 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed text-lg">
              <p>
                I'm a Computer Science and Engineering student at UCLA, with a passion for software engineering, 
                computer vision, and machine learning. I'm currently on the lookout for a Summer 2025 internship 
                to build on what I've learned and dive deeper into new challenges.
              </p>
              <p>
                At the moment, I'm doing research at the UCLA Robot Intelligence Lab, where I'm helping develop 
                cutting-edge AI-driven robotic systems, and at the Interconnected & Integrated Bioelectronics Lab, 
                where I apply machine learning to metabolic panel analysis for healthcare.
              </p>
              <p>
                Before that, I worked as a research assistant at the Vision and Image Processing Lab, where I 
                created machine learning algorithms to push the boundaries of hockey analytics. When I'm not 
                immersed in tech, you can find me playing for UCLA's Division II hockey team!
              </p>
            </div>
          </div>
        </div>

        {/* Personal Gallery */}
        <div className="mt-16 relative overflow-hidden">
          {/* Bulletin Board Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-purple-500/50 shadow-lg"></div>
          
          {/* Image Gallery */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-infinite-scroll flex">
              {/* Duplicate images for seamless looping */}
              {[...imageFiles, ...imageFiles].map((imageName, index) => (
                <div 
                  key={`${imageName}-${index}`}
                  className="relative flex-shrink-0 mx-6"
                >
                  {/* Pushpin */}
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md z-10"
                    style={{
                      transform: 'rotate(45deg)'
                    }}
                  />
                  
                  {/* Image Container */}
                  <div 
                    className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 p-2"
                    style={{
                      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                  >
                    <img 
                      src={`/images/${imageName}`} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;