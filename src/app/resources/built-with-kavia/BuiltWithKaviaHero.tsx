'use client'

import React, { useState, useEffect } from 'react';
import VideoCard from '@/components/ui/Video/VideoCard';
import ProjectModal from '@/components/ui/ProjectCard/ProjectModal';
import { VideoProvider } from '@/components/ui/Video/VideoContext';
import { projects } from '@/data/projects';
import GradientBackground from './GradientBackground';
import Image from 'next/image';

export function BuiltWithKaviaHero() {
  const circlePositions = [302.91, 266.91, 233.56, 200.17, 166.83, 133.46, 100.09, 66.74, 33.35, 0];
  const [size, setSize] = useState('lg');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  // Function to get project index from hash
  const getProjectIndexFromHash = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projectId = hash.replace('#project-', '');
      return projects.findIndex(p => p.id.toString() === projectId);
    }
    return -1;
  };

  useEffect(() => {
    // Check for project hash on mount and handle modal
    const projectIndex = getProjectIndexFromHash();
    if (projectIndex !== -1) {
      setSelectedProjectIndex(projectIndex);
    }

    // Handle hash changes
    const handleHashChange = () => {
      const newProjectIndex = getProjectIndexFromHash();
      if (newProjectIndex !== -1) {
        setSelectedProjectIndex(newProjectIndex);
      }
    };

    // Handle scroll to section when hash is present
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
          }, 100);
        }
      }
    };

    // Initial scroll check
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let newSize;
      if (width >= 1536) {
        newSize = '2xl';
      } else if (width >= 1280) {
        newSize = 'xl';
      } else if (width >= 1024) {
        newSize = 'lg';
      } else if (width >= 768) {
        newSize = 'md';
      } else {
        newSize = 'sm';
      }
      setSize(newSize);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    setSelectedProjectIndex(null);
    // Remove hash when closing modal
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  const handlePrev = () => {
    const prevIndex = selectedProjectIndex !== null ? Math.max(0, selectedProjectIndex - 1) : null;
    if (prevIndex !== null) {
      setSelectedProjectIndex(prevIndex);
      // Update URL hash
      window.history.replaceState(
        null,
        document.title,
        `#project-${projects[prevIndex].id}`
      );
    }
  };

  const handleNext = () => {
    const nextIndex = selectedProjectIndex !== null ? Math.min(projects.length - 1, selectedProjectIndex + 1) : null;
    if (nextIndex !== null) {
      setSelectedProjectIndex(nextIndex);
      // Update URL hash
      window.history.replaceState(
        null,
        document.title,
        `#project-${projects[nextIndex].id}`
      );
    }
  };

  return (
    <VideoProvider>
      <section className="bg-[#231F20] relative overflow-hidden">
        <GradientBackground/>
        
        {/* Force hardware acceleration for better blur performance */}
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: '1000px',
            height: '1000px',
            backgroundColor: 'rgba(242, 106, 27, 0.15)',
            borderRadius: '50%',
            filter: 'blur(150px)',
            transform: 'translate(40%, 60%) translateZ(0)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Background Pattern Container */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 'clamp(400px, 50vw, 647.089px)',
            height: 'clamp(600px, 70vh, 950px)',
            left: 'calc(50% - min(947.089px, 90vw)/2)',
            top: '50px',
            transformOrigin: 'center',
            zIndex: 0,
          }}
        >
          {circlePositions.map((leftPosition, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: 'clamp(400px, 45vw, 647.09px)',
                height: 'clamp(400px, 45vw, 647.09px)',
                left: `${leftPosition}px`,
                top: '0px',
                transform: 'rotate(0deg)',
                transformOrigin: 'top left',
                borderRadius: '50%',
                border: '0.7px solid rgba(242,106,27,0.2)',
                mask: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
                WebkitMask: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
                padding: '0.7px',
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative px-4 sm:px-6 md:px-8 lg:px-20 pt-16 sm:pt-20 md:pt-32 lg:pt-48 flex flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-full md:max-w-2xl lg:max-w-4xl">
            {/* Badge */}
            <div className="px-2.5 py-0 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] flex items-center justify-center relative z-50 sm:z-10 mt-14 sm:mt-0">
              <div className="w-[17px] h-4 relative">
                <Image 
                  src="/assets/icons/rocket-white.svg"
                  alt="rocket icon"
                  width={17}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xs font-medium font-['Inter'] leading-6 tracking-[0.672px]">
                Built with KAVIA
              </span>
            </div>

            {/* Main Title */}
            <div className="text-center text-white text-[70px] font-bold font-['Inter'] leading-[91px]">
              Built with KAVIA
            </div>

            {/* Description */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[930px] lg:px-0 text-center mt-[0.5px]">
              <span className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-[30.60px]">
                {' '}Applications built rapidly with{' '}
                <span className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase">KAVIA</span>
                <span className="text-white text-base sm:text-lg font-bold font-['Inter']"> AI</span>
              </span>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={project.id} id={`project-${project.id}`}>
                  <VideoCard 
                    project={project}
                    isProject={true}
                    onProjectPlay={() => {
                      setSelectedProjectIndex(index);
                      // Update URL hash when clicking play
                      window.history.replaceState(
                        null,
                        document.title,
                        `#project-${project.id}`
                      );
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {selectedProjectIndex !== null && (
            <ProjectModal 
              project={projects[selectedProjectIndex]}
              isOpen={selectedProjectIndex !== null}
              onClose={handleClose}
              onPrev={handlePrev}
              onNext={handleNext}
              hasPrev={selectedProjectIndex > 0}
              hasNext={selectedProjectIndex < projects.length - 1}
            />
          )}
        </div>
      </section>
    </VideoProvider>
  );
}