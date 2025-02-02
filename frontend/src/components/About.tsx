import React, { useRef, useEffect, useState } from 'react';

const imageFiles = [
  'gallery_image_1.jpg',
  'gallery_image_2.jpg',
  'gallery_image_3.jpg',
  'gallery_image_4.jpg',
  'gallery_image_5.jpg',
  'gallery_image_6.jpg',
  'gallery_image_7.jpg',
  'gallery_image_8.jpg',
  'gallery_image_9.jpg'
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(1); // Pixels per frame
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.scrollWidth / 2; // Total width of one set of images

    const animate = () => {
      // Only update offset if not hovering
      if (!isHovering) {
        setOffset(prevOffset => {
          const newOffset = prevOffset + scrollSpeedRef.current;
          
          // Reset offset when it exceeds the container width
          return newOffset >= containerWidth ? 0 : newOffset;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  // Duplicate images to create seamless scroll
  const repeatedImages = [...imageFiles, ...imageFiles];

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
        <div className="mt-16 relative">
          {/* Bulletin Board Line */}
          <div className="absolute -top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-purple-500/50 shadow-lg"></div>
          
          {/* Image Gallery */}
          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              ref={containerRef}
              className="flex"
              style={{ 
                transform: `translateX(-${offset}px)`,
                transition: 'transform linear'
              }}
            >
              {repeatedImages.map((imageName, index) => (
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
                      src={`/images/converted/${imageName}`} 
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