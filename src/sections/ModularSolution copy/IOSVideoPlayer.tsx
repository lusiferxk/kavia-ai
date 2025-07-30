// IOSVideoPlayer.tsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoLoader } from './VideoLoader';

interface IOSVideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  variant: 'inspect' | 'plan' | 'build';
  onTimeUpdate?: (currentTime: number) => void;
  onDurationChange?: (duration: number) => void;
  onPlayingChange?: (isPlaying: boolean) => void;
}

export const IOSVideoPlayer: React.FC<IOSVideoPlayerProps> = ({
  videoUrl,
  thumbnail,
  variant,
  onTimeUpdate,
  onDurationChange,
  onPlayingChange,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle video URL changes and cleanup
  useEffect(() => {
    if (!mounted) return;
    
    setShowThumbnail(true);
    setHasInteracted(false);
    setIsLoading(true);

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [videoUrl, mounted]);

  const handlePlay = async () => {
    if (!videoRef.current || !mounted) return;

    try {
      setShowThumbnail(false);
      setIsLoading(true);
      
      videoRef.current.load();
      await videoRef.current.play();
      onPlayingChange?.(true);
      setHasInteracted(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error playing video:', error);
      setShowThumbnail(true);
      setIsLoading(false);
      onPlayingChange?.(false);
    }
  };

  // Return loading state during SSR
  if (!mounted) {
    return (
      <div className="relative w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full bg-black object-contain ios-video-player"
        playsInline
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        preload="metadata"
        muted={false}
        controls={hasInteracted}
        suppressHydrationWarning={true}
        onTimeUpdate={(e) => {
          if (e.target instanceof HTMLVideoElement) {
            onTimeUpdate?.(e.target.currentTime);
          }
        }}
        onDurationChange={(e) => {
          if (e.target instanceof HTMLVideoElement) {
            onDurationChange?.(e.target.duration);
          }
        }}
        onPlay={() => onPlayingChange?.(true)}
        onPause={() => onPlayingChange?.(false)}
        onEnded={() => {
          setShowThumbnail(true);
          setHasInteracted(false);
          onPlayingChange?.(false);
        }}
        onError={() => {
          setIsLoading(false);
          setShowThumbnail(true);
          onPlayingChange?.(false);
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <AnimatePresence>
        {isLoading && !showThumbnail && (
          <VideoLoader variant={variant} />
        )}
      </AnimatePresence>

      {showThumbnail && (
        <div
          className="absolute inset-0 cursor-pointer bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={handlePlay}
        />
      )}
    </div>
  );
};


// export const IOSVideoPlayer: React.FC<IOSVideoPlayerProps> = ({
//   videoUrl,
//   thumbnail,
//   variant,
//   onTimeUpdate,
//   onDurationChange,
//   onPlayingChange,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showThumbnail, setShowThumbnail] = useState(true);
//   const [hasInteracted, setHasInteracted] = useState(false);

//   useEffect(() => {
//     setShowThumbnail(true);
//     setHasInteracted(false);
//     setIsLoading(true);
//   }, [videoUrl]);

//   const handlePlay = async () => {
//     if (!videoRef.current) return;

//     try {
//       setShowThumbnail(false);
//       setIsLoading(true);
      
//       // For iOS, we need to load() first
//       videoRef.current.load();
      
//       // Wait for video to be ready
//       await new Promise<void>((resolve) => {
//         if (!videoRef.current) return;
        
//         const handleCanPlay = () => {
//           videoRef.current?.removeEventListener('canplay', handleCanPlay);
//           resolve();
//         };
        
//         videoRef.current.addEventListener('canplay', handleCanPlay);
//       });

//       await videoRef.current.play();
//       onPlayingChange?.(true);
//       setHasInteracted(true);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error playing video:', error);
//       setShowThumbnail(true);
//       setIsLoading(false);
//       onPlayingChange?.(false);
//     }
//   };

//   return (
//     <div className="relative w-full h-full">
//       <video
//         ref={videoRef}
//         className="w-full h-full bg-black object-contain"
//         playsInline
//         webkit-playsinline="true"
//         x-webkit-airplay="allow"
//         preload="metadata"
//         muted={false}
//         controls={hasInteracted}
//         onTimeUpdate={(e) => {
//           if (e.target instanceof HTMLVideoElement) {
//             onTimeUpdate?.(e.target.currentTime);
//           }
//         }}
//         onDurationChange={(e) => {
//           if (e.target instanceof HTMLVideoElement) {
//             onDurationChange?.(e.target.duration);
//           }
//         }}
//         onPlay={() => onPlayingChange?.(true)}
//         onPause={() => onPlayingChange?.(false)}
//         onEnded={() => {
//           setShowThumbnail(true);
//           setHasInteracted(false);
//           onPlayingChange?.(false);
//         }}
//         onError={() => {
//           setIsLoading(false);
//           setShowThumbnail(true);
//         }}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         <source src={videoUrl} type="video/mp4" />
//       </video>

//       <AnimatePresence>
//         {isLoading && !showThumbnail && (
//           <VideoLoader variant={variant} />
//         )}
//       </AnimatePresence>

//       {showThumbnail && (
//         <div
//           className="absolute inset-0 cursor-pointer bg-cover bg-center z-10"
//           style={{ backgroundImage: `url(${thumbnail})` }}
//           onClick={handlePlay}
//         />
//       )}
//     </div>
//   );
// };