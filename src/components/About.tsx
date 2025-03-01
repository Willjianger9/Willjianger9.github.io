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
  const profilePicRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryInnerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(1); 
  const [isHovering, setIsHovering] = useState(false);
  const [galleryWidth, setGalleryWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.about-animate');
            elements.forEach((el) => {
              const group = el.getAttribute('data-group') || '0';
              const animation = el.getAttribute('data-animation') || 'animate-fade-up';
              
              setTimeout(() => {
                el.classList.remove('opacity-0');
                el.classList.add(animation);
              }, parseFloat(group) * 200);
            });
            
            // Handle special animation for profile picture
            if (profilePicRef.current) {
              setTimeout(() => {
                animateProfilePic();
              }, 100);
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateProfilePic = () => {
      if (!profilePicRef.current) return;
      
      const profilePic = profilePicRef.current;
      
      // Create smoother animation with keyframes
      profilePic.animate([
        { transform: 'scale(0)', opacity: '0' },
        { transform: 'scale(0.6)', opacity: '0.7', offset: 0.4 },
        { transform: 'scale(1.06)', opacity: '1', offset: 0.7 },
        { transform: 'scale(0.98)', opacity: '1', offset: 0.85 },
        { transform: 'scale(1.01)', opacity: '1', offset: 0.92 },
        { transform: 'scale(1)', opacity: '1' }
      ], {
        duration: 2400,
        easing: 'cubic-bezier(0.18, 1, 0.32, 1)',
        fill: 'forwards'
      });
    };

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Initialize and update gallery dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (galleryRef.current && galleryInnerRef.current) {
        const containerWidth = galleryRef.current.clientWidth;
        setGalleryWidth(containerWidth);
        
        // Calculate the width of a single gallery item including margins
        const galleryItem = galleryRef.current.querySelector('.gallery-item') as HTMLElement;
        if (galleryItem) {
          const computedStyle = window.getComputedStyle(galleryItem);
          const marginLeft = parseFloat(computedStyle.marginLeft || '0');
          const marginRight = parseFloat(computedStyle.marginRight || '0');
          const singleItemWidth = galleryItem.offsetWidth + marginLeft + marginRight;
          setItemWidth(singleItemWidth);
          
          // Calculate total width of all original images
          const totalOriginalWidth = singleItemWidth * imageFiles.length;
          setTotalWidth(totalOriginalWidth);
        }
      }
    };

    // Initial update
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Handle the infinite scrolling animation
  useEffect(() => {
    if (totalWidth === 0) return; // Wait until we have dimensions
    
    const animate = () => {
      if (!isHovering && totalWidth > 0) {
        setOffset(prevOffset => {
          // When we've scrolled past one complete set, reset to create seamless loop
          const newOffset = prevOffset + scrollSpeedRef.current;
          return newOffset >= totalWidth ? 0 : newOffset;
        });
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering, totalWidth]);

  // Create three sets of images to ensure seamless looping
  const repeatedImages = [...imageFiles, ...imageFiles, ...imageFiles];

  return (
    <section id="about" className="relative py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Picture */}
          <div 
            ref={profilePicRef}
            className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out opacity-0" 
            data-group="0"
          >
            <img 
              src="assets/William Jiang.jpg" 
              alt="William Jiang" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* About Description */}
          <div className="flex-grow max-w-2xl bg-transparent backdrop-blur-lg p-8 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent about-animate opacity-0 transform transition-all duration-700" data-animation="animate-fade-down" data-group="0.2">
              About Me
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed text-lg">
              <p className="about-animate opacity-0 transform transition-all duration-700" data-animation="animate-fade-up" data-group="0.3">
                I'm a Computer Science and Engineering student at UCLA, with a passion for software engineering, 
                computer vision, and machine learning. I'm currently on the lookout for a Summer 2025 internship 
                to build on what I've learned and dive deeper into new challenges.
              </p>
              <p className="about-animate opacity-0 transform transition-all duration-700" data-animation="animate-fade-up" data-group="0.4">
                At the moment, I'm doing research at the UCLA Robot Intelligence Lab, where I'm helping develop 
                cutting-edge AI-driven robotic systems, and at the Interconnected & Integrated Bioelectronics Lab, 
                where I apply machine learning to metabolic panel analysis for healthcare.
              </p>
              <p className="about-animate opacity-0 transform transition-all duration-700" data-animation="animate-fade-up" data-group="0.5">
                Before that, I worked as a research assistant at the Vision and Image Processing Lab, where I 
                created machine learning algorithms to push the boundaries of hockey analytics. When I'm not 
                immersed in tech, you can find me playing for UCLA's Division II hockey team!
              </p>
            </div>
          </div>
        </div>

        {/* Personal Gallery */}
        <div className="mt-16 relative">
          {/* Image Gallery */}
          <div 
            ref={galleryRef}
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              ref={galleryInnerRef}
              className="flex"
              style={{ 
                transform: `translateX(-${offset}px)`,
                transition: isHovering ? 'transform 0.2s ease-out' : 'none'  // Smooth pause on hover
              }}
            >
              {repeatedImages.map((imageName, index) => (
                <div 
                  key={`${imageName}-${index}`}
                  className="gallery-item relative flex-shrink-0 mx-3 sm:mx-4 md:mx-6"  // Responsive margins
                  style={{ width: 'auto' }} // Let the image container size itself
                >
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
                      className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-lg" // Responsive image sizing
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