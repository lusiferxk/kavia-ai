'use client'
import { useState } from 'react';
import { Carousel } from '@/components/ui/carousel';
import IntegrationSection from '@/sections/integration';
import NewsSection from "@/sections/news"
import Image from 'next/image';
import ProjectModal from '@/components/ui/ProjectCard/ProjectModal';
import { projects, getCarouselSlides } from '@/data/projects';
import CarouselSlider from '@/components/ui/3dCarousel/CarouselSlider';
export default function BuiltWithKavia() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const slides = getCarouselSlides();

  const handleSlideClick = (slideId: number) => {
    const index = projects.findIndex(project => project.id === slideId);
    setSelectedProjectIndex(index >= 0 ? index : 0);
  };

  const handleClose = () => setSelectedProjectIndex(null);
  const handlePrev = () => setSelectedProjectIndex(prev => prev !== null ? Math.max(0, prev - 1) : null);
  const handleNext = () => setSelectedProjectIndex(prev => prev !== null ? Math.min(projects.length - 1, prev + 1) : null);

  // Create a portal container for the modal if it doesn't exist
  if (typeof window !== 'undefined') {
    let portalContainer = document.getElementById('modal-root');
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = 'modal-root';
      portalContainer.style.position = 'fixed';
      portalContainer.style.left = '0';
      portalContainer.style.top = '0';
      portalContainer.style.width = '100%';
      portalContainer.style.height = '100%';
      portalContainer.style.zIndex = '99999';
      portalContainer.style.pointerEvents = 'none';
      document.body.appendChild(portalContainer);
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-[#070707] flex flex-col overflow-hidden">
      {/* Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          width: '295px',
          height: '295px',
          right: '80px',
          top: '-105px',
          backgroundColor: 'rgba(255, 147, 88, 1)',
          borderRadius: '50%',
          filter: 'blur(200px)',
          transform: 'scale(1.2)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '295px',
          height: '295px',
          right: '80px',
          top: '-100px',
          backgroundColor: 'rgba(225, 94, 13, 1)',
          borderRadius: '50%',
          filter: 'blur(200px)',
          zIndex: 0,
        }}
      />

      {/* Badge and Title First */}
      <div className="w-full flex flex-col items-center pt-[68px] mb-16 relative z-10">
        {/* Center Line with Dot */}
        {/* <div className="flex flex-col items-center mb-12"> */}
          {/* Gradient Line with Circle */}
          {/* <div className="relative mb-6">
            <div className="w-[1.5px] h-[120px] bg-gradient-to-b from-transparent from-0% via-[rgba(255,255,255,0.65)] via-30% to-[rgba(255,255,255,0.65)]" />
            <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 border border-white/70" />
          </div> */}
          
          {/* Badge */}
          {/* <div className="h-6 px-2.5 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] inline-flex items-center gap-[5px]">
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
        </div> */}

        {/* Title */}
        <div className="container mx-auto max-w-[745px]">
          <h2 className="text-center text-[48px] font-semibold font-['Inter'] leading-[62px] tracking-[0.96px] text-white">
            Built with KAVIA
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="">
      <CarouselSlider 
  autoplay={false} 
  onSlideClick={handleSlideClick} 
/>

        {/* <Carousel 
          slides={slides}
          autoPlay={false}
          interval={5000}
          onSlideClick={handleSlideClick}
        /> */}
      </div>
  <div className="modal-wrapper" style={{ isolation: 'isolate' }}>
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
      <style jsx global>{`
        .modal-wrapper {
          position: relative;
          z-index: 99999;
        }
        #modal-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 99999;
          pointer-events: none;
        }
        #modal-root > * {
          pointer-events: auto;
        }
      `}</style>

      {/* Integration Section */}
      <div className="relative w-full">
        {/* Gradient Orbs for Integration Section */}
        <div
          style={{
            position: 'absolute',
            width: '295px',
            height: '295px',
            left: '150px',
            top: '-80px',
            backgroundColor: 'rgba(255, 147, 88, 1)',
            borderRadius: '50%',
            filter: 'blur(200px)',
            transform: 'scale(1.2)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '295px',
            height: '295px',
            right: '150px',
            bottom: '-80px',
            backgroundColor: 'rgba(225, 94, 13, 1)',
            borderRadius: '50%',
            filter: 'blur(200px)',
            zIndex: 0,
          }}
        />
         {/* <div className="relative z-10">
          <IntegrationSection />
        </div> */}
      </div>
      <NewsSection/>
    </section>
  );
}