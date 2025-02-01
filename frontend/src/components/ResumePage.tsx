import React from 'react';
import { Download } from 'lucide-react';

const ResumePage: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">My Resume</h1>
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        <div className="w-full aspect-[8.5/11] overflow-hidden rounded-lg shadow-lg">
          <div className="w-full h-full overflow-hidden" style={{
            transform: 'scale(1.02)',
            transformOrigin: 'center',
            overflow: 'hidden',
            borderRadius: '0.5rem'
          }}>
            <iframe 
              src="/assets/resume.pdf#view=fit&pagemode=none&scrollbar=0&toolbar=0&navpanes=0" 
              width="100%" 
              height="100%" 
              title="Resume PDF"
              style={{
                border: 'none',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                borderRadius: '0.5rem'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
