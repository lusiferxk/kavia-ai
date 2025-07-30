//src/components/ui/ProjectCard/LandingPageModal.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import Player from '@vimeo/player';
import type { Project } from '@/types/project';

interface LandingPageModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const getVimeoVideoId = (url: string) => {
  if (!url) return null;
  const regexes = [
    /vimeo\.com\/([0-9]+)/,
    /vimeo\.com\/.*\/([0-9]+)/,
    /player\.vimeo\.com\/video\/([0-9]+)/
  ];
  
  for (const regex of regexes) {
    const match = url.match(regex);
    if (match) return match[1];
  }
  return null;
};

const ModalContent = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}: Omit<LandingPageModalProps, 'isOpen'>) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const handleThumbnailClick = (videoId: string) => {
    if (!playerContainerRef.current) return;

    const options = {
      id: parseInt(videoId),
      autopause: false,
      autoplay: true,
      controls: true,
      responsive: true,
      title: false,
      byline: false,
      portrait: false,
      dnt: true,
      speed: true,
      quality: true,
      background: false,
      transparent: false,
    };

    try {
      const player = new Player(playerContainerRef.current, options);
      vimeoPlayerRef.current = player;

      player.ready().then(() => {
        setIsVideoLoading(false);
        setIsPlaying(true);
        player.setVolume(1);
        player.element.style.width = '100%';
        player.element.style.height = '100%';
        const iframe = player.element as HTMLIFrameElement;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
      });

      player.on('loaded', () => {
        setIsVideoLoading(false);
      });

      player.on('error', () => {
        setIsVideoLoading(false);
      });
    } catch (error) {
      console.error('Error initializing Vimeo player:', error);
      setIsVideoLoading(false);
    }
  };

  const renderVideo = () => {
    const videoUrl = project.videoUrl;
    const vimeoId = videoUrl ? getVimeoVideoId(videoUrl) : null;

    if (vimeoId && project.imageUrl) {
      return (
        <div className="relative w-full h-full">
          {/* Thumbnail Layer */}
          <div 
            className={`absolute inset-0 w-full h-full z-20 transition-opacity duration-300 ${!isPlaying ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => handleThumbnailClick(vimeoId)}
          >
            <img 
              src={project.imageUrl}
              className="w-full h-full object-contain"
              alt="Video thumbnail"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
              <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all cursor-pointer hover:scale-105 transform duration-200 shadow-xl group-hover:shadow-2xl border-2 border-[#E4B7C5]">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-[#f4682c] border-b-[12px] border-b-transparent ml-2 group-hover:border-l-[#f4682c]"></div>
              </div>
            </div>
          </div>

          {/* Loading Layer */}
          <div 
            className={`absolute inset-0 w-full h-full z-15 transition-opacity duration-300 bg-black flex items-center justify-center
              ${isVideoLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
            </div>
          </div>

          {/* Vimeo Player Container */}
          <div 
            ref={playerContainerRef}
            className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      );
    }

    // If there's only an image
    if (project.imageUrl) {
      return (
        <img
          src={project.imageUrl}
          className="w-full h-full object-cover"
          alt={project.title}
        />
      );
    }

    return null;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-[99999] overflow-hidden"
      style={{ 
        position: 'fixed',
        pointerEvents: 'auto'
      }}
    >
      {/* Modal Container */}
      <div className="fixed inset-x-0 top-[82px] bottom-0 flex items-start justify-center">
        <div className="w-[90%] max-w-[990px] h-full my-4 relative">
          <div className="bg-[#fff1ea] rounded-[9px] shadow-[4px_4px_28px_2px_rgba(0,0,0,0.24)] border border-[#c9c6c6] overflow-hidden flex flex-col h-[calc(100vh-114px)]">
            {/* Modal Header - Fixed */}
            <div className="px-6 sm:px-12 pt-6 sm:pt-8 bg-[#fff1ea]">
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#231f20] font-['Inter'] leading-[36px] sm:leading-[42px]">
                {project.title}
              </h2>
              <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">
                Built with KAVIA
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 sm:px-12 pt-5 pb-[88px]">
                {/* Video Container with fixed aspect ratio */}
                <div className="w-full relative  rounded-[9px]" style={{ paddingTop: '56.25%' }}>
                  <div className="absolute top-0 left-0 w-full h-full  ">
                    {renderVideo()}
                  </div>
                </div>

                {/* Tech Details */}
                <div className="pt-9 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                  {/* Tech Stack */}
                  <div className="w-full sm:w-auto flex flex-col">
                    <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Tech stack Used</p>
                    <p className="text-[#111928] text-sm font-semibold font-['Inter'] capitalize mt-1">{project.techStack}</p>
                  </div>

                  {/* Time Taken */}
                  <div className="w-full sm:w-auto flex flex-col">
                    <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Time taken</p>
                    <p className="text-[#111928] text-sm font-semibold font-['Inter'] capitalize mt-1">{project.timeTaken}</p>
                  </div>

                  {/* Demo Link */}
                  <div className="w-full sm:w-auto flex flex-col">
                    <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Demo Link</p>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111928] text-sm font-semibold font-['Inter'] hover:underline mt-1"
                    >
                      {project.demoLink} ↗
                    </a>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8 mt-6">
                  {/* About Section */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">About</h3>
                    <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
                      {project.about || project.description}
                    </p>
                  </div>

                  {/* Scope Section */}
                  {project.scope && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Scope</h3>
                      <ul className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-relaxed list-disc pl-5 space-y-1 text-[#231f20]">
                        {project.scope.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Core Features Section */}
                  {project.coreFeatures && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Core Features</h3>
                      <ul className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-relaxed list-disc pl-5 space-y-1 text-[#231f20]">
                        {project.coreFeatures.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Objective Section */}
                  {project.objective && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Objective</h3>
                      <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
                        {project.objective}
                      </p>
                    </div>
                  )}

                  {/* Deployment Details Section */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Deployment Details</h3>
                    <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
                      {project.deploymentDetails || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer - Fixed */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-[72px] px-6 sm:px-12 py-4 shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.12)] border-t border-black/10 flex justify-between items-center bg-[#fff1ea]">
              <button 
                onClick={onPrev}
                className={`flex items-center gap-1.5 ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!hasPrev}
              >
                <ChevronLeft className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
                <div className="self-stretch flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Prev</div>
                </div>
              </button>
              <button 
                onClick={onNext}
                className={`flex items-center gap-1.5 ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!hasNext}
              >
                <div className="self-stretch flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Next</div>
                </div>
                <ChevronRight className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
              </button>
            </div> */}

            {/* Close Button */}
            <div className="absolute right-4 top-4 sm:right-auto sm:left-[calc(100%+8px)] sm:top-0 z-[999999]">
              <div className="h-9 bg-white rounded-[36px] justify-end items-center gap-3 inline-flex shadow-sm">
                <button 
                  onClick={() => {
                    if (vimeoPlayerRef.current) {
                      vimeoPlayerRef.current.destroy();
                    }
                    onClose();
                  }}
                  className="p-2 rounded-full justify-center items-center flex hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-[#231f20]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPageModal = (props: LandingPageModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      setMounted(false);
    };
  }, [props.isOpen]);

  if (!mounted || !props.isOpen) return null;

  return createPortal(
    <ModalContent {...props} />,
    document.body
  );
};

export default LandingPageModal;

// 'use client'
// import React, { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';
// import Image from 'next/image';
// import { X, ChevronRight, ChevronLeft } from 'lucide-react';
// import type { Project } from '@/types/project';

// interface LandingPageModalProps {
//   project: Project;
//   isOpen: boolean;
//   onClose: () => void;
//   onPrev: () => void;
//   onNext: () => void;
//   hasPrev: boolean;
//   hasNext: boolean;
// }

// const LandingPageModal = ({
//   project,
//   isOpen,
//   onClose,
//   onPrev,
//   onNext,
//   hasPrev,
//   hasNext
// }: LandingPageModalProps) => {
//   const modalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const modalRoot = document.getElementById('modal-root') || createModalRoot();
    
//     if (isOpen) {
//       // Save current page scroll position
//       const scrollY = window.scrollY;
//       document.body.style.position = 'fixed';
//       document.body.style.width = '100%';
//       document.body.style.top = `-${scrollY}px`;
//     } else {
//       // Restore scroll position
//       const scrollY = document.body.style.top;
//       document.body.style.position = '';
//       document.body.style.width = '';
//       document.body.style.top = '';
//       window.scrollTo(0, parseInt(scrollY || '0') * -1);
//     }

//     return () => {
//       document.body.style.position = '';
//       document.body.style.width = '';
//       document.body.style.top = '';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return createPortal(
//     <div 
//       ref={modalRef}
//       className="fixed inset-x-0 top-[82px] bottom-0 z-[99999]"
//       style={{
//         position: 'fixed',
//         pointerEvents: 'auto',
//         WebkitOverflowScrolling: 'touch',
//       }}
//     >
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={onClose}
//       />
      
//       {/* Modal Container */}
//       <div className="relative h-full overflow-auto">
//         <div className="w-[90%] max-w-[990px] mx-auto my-4">
//           <div className="bg-[#fff1ea] rounded-[9px] shadow-[4px_4px_28px_2px_rgba(0,0,0,0.24)] border border-[#c9c6c6] overflow-hidden flex flex-col relative">
//             {/* Header */}
//             <div className="px-6 sm:px-12 pt-6 sm:pt-8 bg-[#fff1ea]">
//               <h2 className="text-2xl sm:text-[28px] font-semibold text-[#231f20] font-['Inter'] leading-[36px] sm:leading-[42px]">
//                 {project.title}
//               </h2>
//               <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">
//                 Built with KAVIA
//               </p>
//             </div>

//             {/* Content */}
//             <div className="flex-1 px-6 sm:px-12 pt-5 pb-[88px] overflow-y-auto">
//               {/* Video Container */}
//               <div className="h-[250px] sm:h-[472px] rounded-[9px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] border-2 border-[#242020]/10 overflow-hidden">
//                 <video
//                   src={project.videoUrl || project.imageUrl}
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   controls={false}
//                 />
//               </div>

//               {/* Rest of your modal content... */}
//               {/* Tech Details and other sections remain the same */}
//                  {/* Tech Details */}
//                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
//                 <div className="w-full sm:w-[150px]">
//                   <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Tech stack Used</p>
//                   <div className="h-[18px] py-1">
//                     <p className="text-[#111928] text-sm font-semibold font-['Inter'] capitalize">{project.techStack}</p>
//                   </div>
//                 </div>
//                 <div className="w-full sm:w-[150px]">
//                   <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Time taken</p>
//                   <div className="h-[18px] py-1">
//                     <p className="text-[#111928] text-sm font-semibold font-['Inter'] capitalize">{project.timeTaken}</p>
//                   </div>
//                 </div>
//                 <div className="w-full sm:w-[180px]">
//                   <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">Demo Link</p>
//                   <div className="h-[18px] py-1">
//                     <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-[#111928] text-sm font-semibold font-['Inter'] hover:underline">
//                       {project.demoLink} ↗
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Sections */}
//               <div className="space-y-6 sm:space-y-8 mt-6">
//                 {/* About Section */}
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">About</h3>
//                   <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
//                     {project.about || project.description}
//                   </p>
//                 </div>

//                 {/* Rest of the sections... */}
//                 {/* Scope Section */}
//                 {project.scope && (
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Scope</h3>
//                     <ul className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-relaxed list-disc pl-5 space-y-1 text-[#231f20]">
//                       {project.scope.items.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Core Features Section */}
//                 {project.coreFeatures && (
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Core Features</h3>
//                     <ul className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-relaxed list-disc pl-5 space-y-1 text-[#231f20]">
//                       {project.coreFeatures.items.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Objective Section */}
//                 {project.objective && (
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Objective</h3>
//                     <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
//                       {project.objective}
//                     </p>
//                   </div>
//                 )}

//                 {/* Deployment Details Section */}
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold font-['Urbanist'] leading-7 mb-2 text-[#231f20]">Deployment Details</h3>
//                   <p className="text-[14px] sm:text-[15px] font-medium font-['Inter'] leading-snug text-[#231f20]">
//                     {project.deploymentDetails || "-"}
//                   </p>
//                 </div>
//               </div>
       
//             </div>

//             {/* Footer */}
//             <div className="absolute bottom-0 left-0 right-0 h-[72px] px-6 sm:px-12 py-4 shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.12)] border-t border-black/10 flex justify-between items-center bg-[#fff1ea]">
//               <button 
//                 onClick={onPrev}
//                 className={`flex items-center gap-1.5 ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={!hasPrev}
//               >
//                 <ChevronLeft className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
//                 <div className="self-stretch flex-col justify-center items-start inline-flex">
//                   <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Prev</div>
//                 </div>
//               </button>
//               <button 
//                 onClick={onNext}
//                 className={`flex items-center gap-1.5 ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={!hasNext}
//               >
//                 <div className="self-stretch flex-col justify-center items-start inline-flex">
//                   <div className="self-stretch text-[#231f20] text-sm sm:text-base font-bold font-['Urbanist'] leading-snug">Next</div>
//                 </div>
//                 <ChevronRight className="w-4 sm:w-[18px] h-4 sm:h-[18px] text-[#231f20]" />
//               </button>
//             </div>

//             {/* Close Button */}
//         <div 
//           style={{
//             position: 'absolute',
//             right: '16px',
//             top: '16px',
//             zIndex: 999999,
//             '@media (min-width: 640px)': {
//               right: 'auto',
//               left: 'calc(100% + 8px)',
//               top: '0'
//             }
//           }}
//         >
//           <div className="h-9 bg-white rounded-[36px] justify-end items-center gap-3 inline-flex shadow-sm">
//             <button 
//               onClick={onClose}
//               className="p-2 rounded-md justify-center items-center flex hover:bg-gray-100 transition-colors"
//             >
//               <X className="w-5 h-5 text-[#231f20]" />
//             </button>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// // Helper function to create modal root if it doesn't exist
// function createModalRoot() {
//   const modalRoot = document.createElement('div');
//   modalRoot.id = 'modal-root';
//   document.body.appendChild(modalRoot);
//   return modalRoot;
// }

// export default LandingPageModal;