'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Player from '@vimeo/player';
import type { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onPrev, 
  onNext,
  hasPrev,
  hasNext 
}: ProjectModalProps) => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.destroy();
      }
    };
  }, [isOpen]);

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

      const handleThumbnailClick = (videoId: string) => {
    if (!playerContainerRef.current) return;

    // Set loading state immediately when play is clicked
    setIsVideoLoading(true);
    setIsPlaying(true);

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
      loading: false, // Hide default Vimeo loader
      playsinline: true,
      muted: false,
    };

    try {
      console.log('Initializing Vimeo player...');
      const player = new Player(playerContainerRef.current, options);
      vimeoPlayerRef.current = player;

      player.ready().then(() => {
        console.log('Vimeo player ready');
        player.setVolume(1);
        player.element.style.width = '100%';
        player.element.style.height = '100%';
        
        const iframe = player.element as HTMLIFrameElement;
        iframe.style.cssText = `
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border: none !important;
          opacity: 0; // Hide iframe until video is loaded
          transition: opacity 0.3s;
        `;
      });

      // Listen for the actual video load completion
      player.on('loaded', () => {
        console.log('Video content loaded');
        const iframe = player.element as HTMLIFrameElement;
        iframe.style.opacity = '1'; // Show video
        setIsVideoLoading(false);
      });

      player.on('play', () => {
        console.log('Video started playing');
        setIsPlaying(true);
      });

      player.on('error', (error) => {
        console.error('Vimeo player error:', error);
        setIsVideoLoading(false);
        setIsPlaying(false);
      });
    } catch (error) {
      console.error('Error initializing Vimeo player:', error);
      setIsVideoLoading(false);
      setIsPlaying(false);
    }
  };

  const renderVideo = () => {
    const videoUrl = project.videoUrl;
    const vimeoId = videoUrl ? getVimeoVideoId(videoUrl) : null;
    
    console.log('Video states:', { isPlaying, isVideoLoading, videoUrl, vimeoId });

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
            className={`absolute inset-0 w-full h-full z-20 transition-opacity duration-300 bg-black flex items-center justify-center
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

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 ${isLandingPage ? 'top-[82px] h-[calc(100vh-82px)]' : 'h-screen'} z-[999999] bg-black/50`}>
      <div className="w-full sm:w-[90%] h-full sm:max-w-[990px] mx-auto relative">
        <div className="w-full h-full bg-[#fff1ea] sm:rounded-[9px] shadow-[4px_4px_28px_2px_rgba(0,0,0,0.24)] border border-[#c9c6c6] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="px-6 sm:px-12 pt-6 sm:pt-8 bg-[#fff1ea]">
            <h2 className="text-2xl sm:text-[28px] font-semibold text-[#231f20] font-['Inter'] leading-[36px] sm:leading-[42px]">
              {project.title}
            </h2>
            <p className="text-[#111928] text-[13px] font-medium font-['Inter'] leading-tight">
              Built with KAVIA
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-12 pt-5 pb-[88px]">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute right-1.5 top-0 hidden sm:block">
                <Image
                  src="/assets/icons/logo-opacity.png"
                  alt="Logo"
                  width={221}
                  height={250}
                />
              </div>
              <div className="w-[195px] sm:w-[295px] h-[195px] sm:h-[295px] left-[24px] sm:left-[48px] top-[96px] absolute bg-[#e15e0d] rounded-full blur-[474px]" />
              <div className="w-[195px] sm:w-[295px] h-[195px] sm:h-[295px] right-[24px] sm:right-[48px] top-[252px] absolute bg-[#ff9358] rounded-full blur-[514px]" />
            </div>

            {/* Main Content */}
            <div className="relative space-y-6 sm:space-y-8">
              {/* Video Container */}
              <div className="flex flex-col w-full h-full">
                {/* Video Section with fixed aspect ratio */}
                <div className="w-full relative" style={{ paddingTop: '56.25%' }}>
                  <div className="absolute top-0 left-0 w-full h-full">
                    {renderVideo()}
                  </div>
                </div>
              </div>

              {/* Tech Details */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
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
              <div className="space-y-6 sm:space-y-8">
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

          {/* Footer */}
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
        </div>

        {/* Close Button */}
        <div className="absolute right-4 top-4 sm:right-auto sm:left-[998px] sm:top-0">
          <div className="h-9 bg-white rounded-[36px] justify-end items-center gap-3 inline-flex shadow-sm">
            <button 
              onClick={() => {
                if (vimeoPlayerRef.current) {
                  vimeoPlayerRef.current.destroy();
                }
                onClose();
              }}
              className="p-2 rounded-md justify-center items-center flex"
            >
              <div className="w-5 h-5 relative">
                <X className="w-5 h-5 text-[#231f20]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;