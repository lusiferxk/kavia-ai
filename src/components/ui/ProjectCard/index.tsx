// src/components/ui/ProjectCard/index.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import type { Project } from '@/types/project';
import { projects } from '@/data/projects';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bgGradient?: boolean;
  darkFooter?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  bgGradient = false,
  darkFooter = false 
}: ProjectCardProps) => {
  return (
    <div className="w-full sm:w-[500px] lg:w-[608px] h-auto lg:h-[488px] bg-white/0 rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border border-[#c9c6c6]/20 backdrop-blur-[45px] cursor-pointer transition-transform hover:scale-[1.02]">
      {/* Image Container */}
      <div className="w-full h-[250px] sm:h-[300px] lg:h-[341.86px] rounded-t-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] backdrop-blur-[45px] flex justify-center items-center overflow-hidden relative">
        <div className="w-full h-full">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 z-10">
          <Image 
            src="/assets/icons/play_circle.svg"
            alt="Play"
            width={24}
            height={24}
          />
        </div>
      </div>
      
      {/* Content Container */}
      <div className={`w-full p-4 sm:p-6 bg-[#231F20] rounded-b-2xl flex flex-col gap-4`}>
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-xl sm:text-2xl font-semibold font-['Inter'] leading-[1.4] sm:leading-[33.6px]">
            {title}
          </h3>
          <p className="text-[#DEDCDD] text-sm sm:text-base font-normal font-['Inter'] leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectCardGrid = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);



  const handleClose = () => setSelectedProjectIndex(null);
  const handlePrev = () => setSelectedProjectIndex(prev => prev !== null ? Math.max(0, prev - 1) : null);
  const handleNext = () => setSelectedProjectIndex(prev => prev !== null ? Math.min(projects.length - 1, prev + 1) : null);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-12 lg:gap-x-16">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProjectIndex(index)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProjectIndex !== null ? projects[selectedProjectIndex] : projects[0]}
        isOpen={selectedProjectIndex !== null}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
        hasNext={selectedProjectIndex !== null && selectedProjectIndex < projects.length - 1}
      />
    </div>
  );
};

export default ProjectCardGrid;