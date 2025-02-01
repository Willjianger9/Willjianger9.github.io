import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import { InteractiveGrid } from './components/ui/interactive-grid';
import ResumePage from './components/ResumePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app w-full min-h-screen bg-black text-foreground relative overflow-hidden">
        <InteractiveGrid containerClassName="fixed inset-0" className="opacity-30" points={40} />
        <div className="relative z-10 w-full">
          <Navbar />
          
          <main className="w-full">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<ExperienceSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
