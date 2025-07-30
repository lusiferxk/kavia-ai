//src/components/ui/Video/VideoCard.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Share2, Play } from 'lucide-react';
import Player from '@vimeo/player';
import { Video } from '@/data/videos';
import { Project } from '@/types/project';
import { useVideo } from './VideoContext';
import { toast } from 'sonner';

interface VideoCardProps {
  video?: Video;
  project?: Project;
  isProject?: boolean;
  onProjectPlay?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, project, isProject = false, onProjectPlay }) => {
  const { playingVideoId, setPlayingVideoId, pauseAllVideos } = useVideo();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const item = isProject ? project : video;
  const videoId = !isProject ? video?.id : null;

  // Pause event handler
  useEffect(() => {
    const handlePauseAll = () => {
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('pause-all-videos', handlePauseAll);
    
    return () => {
      window.removeEventListener('pause-all-videos', handlePauseAll);
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.destroy();
      }
    };
  }, []);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.destroy();
      }
    };
  }, []);

  if (!item) return null;

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

  const handleThumbnailClick = (vimeoId: string) => {
    if (!playerContainerRef.current) {
      console.error('Player container ref is not available');
      return;
    }

    // Pause all other videos first
    pauseAllVideos();

    // Set this video as the currently playing video
    setPlayingVideoId(vimeoId);
    setIsVideoLoading(true);
    setIsPlaying(true);

    const options = {
      id: parseInt(vimeoId),
      autopause: true,
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
      width: playerContainerRef.current.clientWidth,
      height: playerContainerRef.current.clientHeight,
      branding: true,
  logo: true, // Set to true to show your custom logo
  playsinline: true
    };

    try {
      const player = new Player(playerContainerRef.current, options);
      vimeoPlayerRef.current = player;

      player.ready().then(() => {
        setIsVideoLoading(false);
        player.setVolume(1);
        
        const iframe = player.element as HTMLIFrameElement;
        iframe.style.cssText = `
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border: none !important;
          border-radius: 16px 0 0 16px !important;
        `;
        
        if (iframe.parentElement) {
          iframe.parentElement.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
          `;
        }
      });

      player.on('play', () => {
        setIsPlaying(true);
        setIsVideoLoading(false);
      });

      player.on('pause', () => {
        setIsPlaying(false);
        setPlayingVideoId(null);
      });

      player.on('ended', () => {
        setIsPlaying(false);
        setPlayingVideoId(null);
      });

      player.on('error', () => {
        setIsVideoLoading(false);
        setIsPlaying(false);
        setPlayingVideoId(null);
      });
    } catch (error) {
      console.error('Error initializing Vimeo player:', error);
      setIsVideoLoading(false);
      setIsPlaying(false);
      setPlayingVideoId(null);
    }
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isProject) {
      onProjectPlay?.();
      return;
    }

    const videoUrl = video?.videoUrl;
    
    if (!videoUrl) {
      console.error('No video URL provided');
      return;
    }

    const vimeoId = getVimeoVideoId(videoUrl);
    
    if (vimeoId) {
      handleThumbnailClick(vimeoId);
    } else {
      console.error('Invalid video URL format');
    }
  };

  const handleShare = async () => {
    const sectionId = `${isProject ? 'project' : 'video'}-${item.id}`;
    const pageUrl = isProject ? 'built-with-kavia' : 'videos';
    const url = `${window.location.origin}/resources/${pageUrl}#${sectionId}`;
    
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
      });
    } catch (err) {
      toast.error('Failed to copy link', {
        duration: 2000,
        position: 'bottom-right',
      });
    }
  };

  const renderVideo = () => {
    const videoUrl = video?.videoUrl;
    const vimeoId = videoUrl ? getVimeoVideoId(videoUrl) : null;
    const imageUrl = isProject ? project?.imageUrl : video?.thumbnail;

    return (
      <div className="relative w-full h-full">
        {/* Thumbnail Layer */}
        <div 
          className={`absolute inset-0 z-20 transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 invisible' : 'opacity-100 visible'
          }`}
        >
          <img 
            src={imageUrl}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
          />
<div className="absolute inset-0 hover:bg-black/5 transition-colors">
<div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlay}
                className="w-12 h-12 md:w-16 md:h-16 bg-[#f26a1b] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Loading Layer */}
        {isVideoLoading && (
          <div className="absolute inset-0 z-30 bg-black flex items-center justify-center rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
            </div>
          </div>
        )}

        {/* Vimeo Player Container */}
        <div 
          ref={playerContainerRef}
          className={`absolute inset-0 z-10 overflow-hidden rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl ${
            isPlaying ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        />
      </div>
    );
  };

  return (
    <div
      id={`${isProject ? 'project' : 'video'}-${item.id}`}
      className="flex flex-col lg:flex-row h-auto lg:h-[372px] rounded-2xl shadow-[0px_10px_25px_0px_rgba(0,0,0,0.12)] border backdrop-blur-[45px] scroll-mt-24 w-full"
    >
      <div className="w-full lg:w-[780px] h-[215px] lg:h-[372px] rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] backdrop-blur-[45px] relative">
        <div className="absolute inset-0">
          {renderVideo()}
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="flex-1 p-4 md:p-5 lg:p-6 flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold font-['Inter'] leading-tight">
                {item.title}
              </h3>
              <button 
                onClick={handleShare}
                className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-duration-200 flex-shrink-0"
              >
                <Share2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <p className="text-[#dedcdd] text-sm md:text-base font-normal font-['Inter'] leading-normal line-clamp-3 md:line-clamp-none">
                {item.description}
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-auto">
            <p className="text-[#dedcdd] text-sm md:text-base font-normal font-['Inter']">
              {isProject ? 
                `Time Taken: ${(item as Project).timeTaken}` : 
                (item as Video).duration ? 
                  `Duration: ${(item as Video).duration}` : 
                  null
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;