// 'use client';

// import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { VideoLoader } from './VideoLoader';
// import { AccordionItem } from './AccordionItem';
// import { IOSVideoPlayer } from './IOSVideoPlayer';
// import { isIOS, isSafari } from './deviceDetection';
// import { StepCardProps, variants } from './types';

// let videoControllerInitialized = false;

// export function StepCard({
//   variant,
//   icon,
//   title,
//   description,
//   steps,
//   videoUrl: defaultVideoUrl,
//   thumbnail: defaultThumbnail,
//   className,
// }: StepCardProps) {
//   // States
//   const [openSteps, setOpenSteps] = useState<string>(steps[0].title);
//   const [isLoading, setIsLoading] = useState(true);
//   const [key, setKey] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [buffered, setBuffered] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [showThumbnail, setShowThumbnail] = useState(true);
//   const [isIOSorSafari, setIsIOSorSafari] = useState(false);

//   // Refs
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const iOSVideoRef = useRef<IOSVideoPlayerRef>(null);

//   // Styles and data
//   const style = variants[variant];
//   const currentStep = steps.find(step => step.title === openSteps);
//   const currentVideoUrl = currentStep?.videoUrl || defaultVideoUrl;
//   const currentThumbnail = currentStep?.thumbnail || defaultThumbnail;

//   // Check for iOS/Safari on mount
//   useEffect(() => {
//     setIsIOSorSafari(isIOS() || isSafari());
//   }, []);

//   useEffect(() => {
//     if (isIOSorSafari) {
//       iOSVideoRef.current?.cleanup();
//     } else if (videoRef.current) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//       setShowThumbnail(true);
//     }
//     setKey(prevKey => prevKey + 1);
//     setIsLoading(true);
//   }, [openSteps, isIOSorSafari]);

//   // Video cleanup function
//   const cleanupVideoResources = useCallback(() => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//       videoRef.current.onloadeddata = null;
//       videoRef.current.onerror = null;
//       videoRef.current.onplay = null;
//       videoRef.current.onpause = null;
//       videoRef.current.ontimeupdate = null;
//       videoRef.current.onfullscreenchange = null;
//       videoRef.current.removeAttribute('src');
//       videoRef.current.load();
      
//       setIsPlaying(false);
//       setCurrentTime(0);
//       setBuffered(0);
//       setIsLoading(true);
//       setShowThumbnail(true);
//     }
//   }, []);

//   // Progress Bar Mouse Events
//   useEffect(() => {
//     const handleMouseUp = () => {
//       if (isDragging) {
//         setIsDragging(false);
//         if (videoRef.current && isPlaying) {
//           videoRef.current.play();
//         }
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (isDragging && progressBarRef.current && videoRef.current) {
//         const rect = progressBarRef.current.getBoundingClientRect();
//         const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
//         const percentage = x / rect.width;
//         const newTime = percentage * duration;
        
//         videoRef.current.currentTime = newTime;
//         setCurrentTime(newTime);
//       }
//     };

//     document.addEventListener('mouseup', handleMouseUp);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [isDragging, duration, isPlaying]);

//   // Global video controller initialization
//   useEffect(() => {
//     if (videoControllerInitialized) return;
    
//     const handleGlobalPlay = (e: Event) => {
//       const videos = document.querySelectorAll('video');
//       videos.forEach(video => {
//         if (video !== e.target && !video.paused) {
//           video.pause();
//           if (video === videoRef.current) {
//             setIsPlaying(false);
//             setShowThumbnail(true);
//           }
//         }
//       });
//     };

//     document.addEventListener('play', handleGlobalPlay, true);
//     videoControllerInitialized = true;

//     return () => {
//       document.removeEventListener('play', handleGlobalPlay, true);
//       videoControllerInitialized = false;
//     };
//   }, []);

//   // Video handlers
//   const handlePlayPause = async () => {
//     if (!videoRef.current) return;
    
//     try {
//       if (videoRef.current.paused) {
//         setShowThumbnail(false);
//         await videoRef.current.play();
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     } catch (error) {
//       console.error('Error toggling play state:', error);
//       setShowThumbnail(true);
//     }
//   };

//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
//     const percentage = x / rect.width;
    
//     if (videoRef.current) {
//       const newTime = percentage * videoRef.current.duration;
//       videoRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   const handleProgressBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   // Handle step change
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//       setShowThumbnail(true);
//     }
//     setKey(prevKey => prevKey + 1);
//     setIsLoading(true);
//   }, [openSteps]);

//   const VideoPlayer = () => (
//     <>
//       <div className="w-full h-full rounded-tl-2xl rounded-tr-2xl overflow-hidden">
//         <video
//           key={key}
//           ref={videoRef}
//           className="w-full h-full object-contain bg-black"
//           playsInline={true}
//           webkit-playsinline="true"
//           x-webkit-airplay="allow"
//           preload="metadata"
//           controlsList="nodownload"
//           disablePictureInPicture
//           onLoadStart={() => setIsLoading(true)}
//           onLoadedData={() => {
//             setIsLoading(false);
//             if (videoRef.current) {
//               setDuration(videoRef.current.duration);
//             }
//           }}
//           onPlay={() => {
//             setIsPlaying(true);
//             setShowThumbnail(false);
//             setIsLoading(false);
//           }}
//           onPause={() => {
//             setIsPlaying(false);
//           }}
//           onTimeUpdate={(e) => {
//             if (!isDragging && e.target instanceof HTMLVideoElement) {
//               setCurrentTime(e.target.currentTime);
//               if (e.target.buffered.length > 0) {
//                 setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
//               }
//             }
//           }}
//         >
//           <source src={currentVideoUrl} type="video/mp4" />
//         </video>

//         <AnimatePresence>
//           {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
//         </AnimatePresence>

//         {showThumbnail && (
//           <div 
//             className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
//             style={{ backgroundImage: `url(${currentThumbnail})` }}
//             onClick={handlePlayPause}
//           />
//         )}
//       </div>

//       <div className="w-full flex items-center px-4 relative z-10 bg-[#fdf7f2]">
//         <button 
//           onClick={handlePlayPause}
//           className="w-8 h-8 flex items-center justify-center mr-4"
//         >
//           {!isPlaying ? (
//             <div 
//               className="w-0 h-0 ml-1"
//               style={{
//                 borderTop: '8px solid transparent',
//                 borderLeft: '16px solid #F26A1B',
//                 borderBottom: '8px solid transparent'
//               }}
//             />
//           ) : (
//             <div className="w-4 h-4 flex gap-1">
//               <div className="w-[2px] h-full bg-[#F26A1B]" />
//               <div className="w-[2px] h-full bg-[#F26A1B]" />
//             </div>
//           )}
//         </button>

//         <div 
//           ref={progressBarRef}
//           className="flex-1 h-6 flex items-center relative group cursor-pointer"
//           onClick={handleProgressClick}
//           onMouseDown={handleProgressBarMouseDown}
//         >
//           <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
//             <div 
//               className="absolute h-full bg-[#F26A1B] opacity-30"
//               style={{ 
//                 width: `${(buffered / (duration || 1)) * 100}%`,
//                 transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
//               }} 
//             />
//             <div 
//               className="absolute h-full bg-[#F26A1B]"
//               style={{ 
//                 width: `${(currentTime / (duration || 1)) * 100}%`,
//                 transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
//               }} 
//             />
//           </div>

//           <div 
//             className={`absolute h-4 w-4 rounded-full -ml-2 cursor-pointer transform ${
//               isDragging 
//                 ? 'scale-105 shadow-lg bg-[#F26A1B]' 
//                 : 'scale-100 opacity-0 group-hover:opacity-100 bg-[#F26A1B]'
//             }`}
//             style={{ 
//               left: `${(currentTime / (duration || 1)) * 100}%`,
//               transition: isDragging ? 'none' : 'all 0.15s ease-out',
//               boxShadow: '0 1px 3px rgba(242, 106, 27, 0.2)'
//             }}
//           >
//             <div className="absolute inset-[2px] bg-white rounded-full" />
//           </div>

//           <div 
//             className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
//               isDragging ? 'block' : 'hidden group-hover:block'
//             }`}
//             style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
//           >
//             {formatTime(currentTime)}
//           </div>
//         </div>

//         <div className="ml-4 text-sm text-gray-600 min-w-[80px] text-right">
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <div
//       className={`flex flex-col lg:flex-row gap-4 lg:gap-8 relative rounded-2xl overflow-hidden border border-[rgba(201,198,198,0.09)] ${className}`}
//       style={{
//         background: style.bgGradient,
//         backdropFilter: 'blur(45px)',
//         boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       {/* Left Content */}
//       <div className="flex-1 p-6 lg:p-[42px] flex flex-col">
//         <div className="flex items-center gap-[7px] mb-3">
//           <div className="w-6 h-6">
//             <Image src={icon} alt={title} width={24} height={24} />
//           </div>
//           <span
//             style={{ color: style.iconColor }}
//             className="text-base lg:text-lg font-bold uppercase leading-[27px] tracking-[0.72px]"
//           >
//             {title}
//           </span>
//         </div>

//         <h3 className="text-2xl lg:text-[32px] font-normal leading-tight lg:leading-[41.6px] mb-4 lg:mb-6">
//           {description}
//         </h3>

//         <div className="space-y-0">
//           {steps.map((step, index) => (
//             <AccordionItem
//               key={step.title}
//               title={step.title}
//               description={step.description}
//               isOpen={openSteps === step.title}
//               onToggle={() => {
//                 if (openSteps !== step.title) {
//                   setOpenSteps(step.title);
//                 }
//               }}
//               isLast={index === steps.length - 1}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Mobile Video Section */}
//       <div className="block sm:hidden w-full">
//   <div className="rounded-lg overflow-hidden bg-black relative">
//     {/* Main video container */}
//     <div className="w-full h-[250px] relative">
//       {isIOSorSafari ? (
//         <IOSVideoPlayer
//           ref={iOSVideoRef}
//           videoUrl={currentVideoUrl}
//           thumbnail={currentThumbnail}
//           variant={variant}
//           onTimeUpdate={(time) => setCurrentTime(time)}
//           onDurationChange={(dur) => setDuration(dur)}
//           onPlayingChange={(playing) => {
//             setIsPlaying(playing);
//             if (!playing) {
//               setShowThumbnail(true);
//             }
//           }}
//         />
//       ) : (
//         <>
//           {/* Video Element */}
//           <div className="absolute inset-0">
//             <video
//               key={key}
//               ref={videoRef}
//               className="w-full h-full object-contain"
//               playsInline={true}
//               webkit-playsinline="true"
//               x-webkit-airplay="allow"
//               preload="metadata"
//               controlsList="nodownload"
//               disablePictureInPicture
//               onLoadStart={() => setIsLoading(true)}
//               onLoadedData={() => {
//                 setIsLoading(false);
//                 if (videoRef.current) {
//                   setDuration(videoRef.current.duration);
//                 }
//               }}
//               onPlay={() => {
//                 setIsPlaying(true);
//                 setShowThumbnail(false);
//                 setIsLoading(false);
//               }}
//               onPause={() => {
//                 setIsPlaying(false);
//               }}
//               onTimeUpdate={(e) => {
//                 if (!isDragging && e.target instanceof HTMLVideoElement) {
//                   setCurrentTime(e.target.currentTime);
//                   if (e.target.buffered.length > 0) {
//                     setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
//                   }
//                 }
//               }}
//             >
//               <source src={currentVideoUrl} type="video/mp4" />
//             </video>
//           </div>

//           <AnimatePresence>
//             {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
//           </AnimatePresence>

//           {showThumbnail && (
//             <div 
//               className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
//               style={{ backgroundImage: `url(${currentThumbnail})` }}
//               onClick={handlePlayPause}
//             />
//           )}

//           {/* Controls Container */}
//           <div className="absolute bottom-0 left-0 right-0 z-30">
//             {/* Progress Bar */}
//             <div 
//               ref={progressBarRef}
//               className="w-full h-1 bg-black/30 cursor-pointer"
//               onClick={handleProgressClick}
//               onMouseDown={handleProgressBarMouseDown}
//               onTouchStart={handleProgressBarMouseDown}
//             >
//               <div 
//                 className="h-full bg-white"
//                 style={{ 
//                   width: `${(currentTime / (duration || 1)) * 100}%`,
//                   transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
//                 }} 
//               />
//             </div>

//             {/* Controls Row */}
//            <div className="h-10 flex items-center justify-between px-3 bg-gradient-to-t from-black/60 to-black/40">
//               {/* Left Side - Play/Time */}
//               <div className="flex items-center gap-3">
//                 <button 
//                   onClick={handlePlayPause}
//                   className="w-8 h-8 flex items-center justify-center"
//                 >
//                   {!isPlaying ? (
//                     <div 
//                       className="w-0 h-0 ml-0.5"
//                       style={{
//                         borderTop: '6px solid transparent',
//                         borderLeft: '10px solid white',
//                         borderBottom: '6px solid transparent'
//                       }}
//                     />
//                   ) : (
//                     <div className="w-4 h-4 flex gap-1">
//                       <div className="w-[2px] h-full bg-white" />
//                       <div className="w-[2px] h-full bg-white" />
//                     </div>
//                   )}
//                 </button>

//                 <div className="text-sm text-white">
//                   {formatTime(currentTime)} / {formatTime(duration)}
//                 </div>
//               </div>
//             </div> 
//           </div>
//         </>
//       )}
//     </div>
//   </div>
// </div>
//       {/* Desktop Video Section */}
//       <div className="hidden sm:block w-full h-[471px] lg:w-[742px] relative">
//         <div
//           className="absolute inset-0 overflow-hidden"
//           style={{
//             background: style.cardGradient,
//             borderTopRightRadius: '16px',
//             borderBottomLeftRadius: '0px',
//             borderBottomRightRadius: '16px',
//             borderTopLeftRadius: '0px'
//           }}
//         >
//           {/* Video Container */}
//           <div
//             className="absolute rounded-2xl overflow-hidden bg-[#fdf7f2]"
//             style={{
//               width: 'calc(100% - 56px)',
//               height: '414.73px',
//               left: '28px',
//               top: '28px',
//               boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//             }}
//           >
//             <div className="relative w-full h-full">
//               {isIOSorSafari ? (
//                 <IOSVideoPlayer
//                   ref={iOSVideoRef}
//                   videoUrl={currentVideoUrl}
//                   thumbnail={currentThumbnail}
//                   variant={variant}
//                   onTimeUpdate={(time) => setCurrentTime(time)}
//                   onDurationChange={(dur) => setDuration(dur)}
//                   onPlayingChange={(playing) => {
//                     setIsPlaying(playing);
//                     if (!playing) {
//                       setShowThumbnail(true);
//                     }
//                   }}
//                 />
//               ) : (
//                 <>
//                   <div className="w-full h-[325px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
//                     <video
//                       key={key}
//                       ref={videoRef}
//                       className="w-full h-full object-contain bg-black"
//                       playsInline={true}
//                       webkit-playsinline="true"
//                       x-webkit-airplay="allow"
//                       preload="metadata"
//                       controlsList="nodownload"
//                       disablePictureInPicture
//                       onLoadStart={() => setIsLoading(true)}
//                       onLoadedData={() => {
//                         setIsLoading(false);
//                         if (videoRef.current) {
//                           setDuration(videoRef.current.duration);
//                         }
//                       }}
//                       onPlay={() => {
//                         setIsPlaying(true);
//                         setShowThumbnail(false);
//                         setIsLoading(false);
//                       }}
//                       onPause={() => {
//                         setIsPlaying(false);
//                       }}
//                       onTimeUpdate={(e) => {
//                         if (!isDragging && e.target instanceof HTMLVideoElement) {
//                           setCurrentTime(e.target.currentTime);
//                           if (e.target.buffered.length > 0) {
//                             setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
//                           }
//                         }
//                       }}
//                     >
//                       <source src={currentVideoUrl} type="video/mp4" />
//                     </video>

//                     <AnimatePresence>
//                       {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
//                     </AnimatePresence>

//                     {showThumbnail && (
//                       <div 
//                         className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
//                         style={{ backgroundImage: `url(${currentThumbnail})` }}
//                         onClick={handlePlayPause}
//                       />
//                     )}
//                   </div>

//                   <div className="w-full h-[89.73px] bg-[#fdf7f2] flex items-center px-4 relative z-10">
//                     <button 
//                       onClick={handlePlayPause}
//                       className="w-8 h-8 flex items-center justify-center mr-4 hover:opacity-80 transition-opacity"
//                     >
//                       {!isPlaying ? (
//                         <div 
//                           className="w-0 h-0 ml-1"
//                           style={{
//                             borderTop: '8px solid transparent',
//                             borderLeft: '16px solid #F26A1B',
//                             borderBottom: '8px solid transparent'
//                           }}
//                         />
//                       ) : (
//                         <div className="w-4 h-4 flex gap-1">
//                           <div className="w-[2px] h-full bg-[#F26A1B]" />
//                           <div className="w-[2px] h-full bg-[#F26A1B]" />
//                         </div>
//                       )}
//                     </button>

//                     <div 
//                       ref={progressBarRef}
//                       className="flex-1 h-6 flex items-center relative group cursor-pointer"
//                       onClick={handleProgressClick}
//                       onMouseDown={handleProgressBarMouseDown}
//                     >
//                       <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
//                         <div 
//                           className="absolute h-full bg-[#F26A1B] opacity-30"
//                           style={{ 
//                             width: `${(buffered / (duration || 1)) * 100}%`,
//                             transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
//                           }} 
//                         />
//                         <div 
//                           className="absolute h-full bg-[#F26A1B]"
//                           style={{ 
//                             width: `${(currentTime / (duration || 1)) * 100}%`,
//                             transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
//                           }} 
//                         />
//                       </div>

//                       <div 
//                         className={`absolute h-4 w-4 rounded-full -ml-2 cursor-pointer transform ${
//                           isDragging 
//                             ? 'scale-105 shadow-lg bg-[#F26A1B]' 
//                             : 'scale-100 opacity-0 group-hover:opacity-100 bg-[#F26A1B]'
//                         }`}
//                         style={{ 
//                           left: `${(currentTime / (duration || 1)) * 100}%`,
//                           transition: isDragging ? 'none' : 'all 0.15s ease-out',
//                           boxShadow: '0 1px 3px rgba(242, 106, 27, 0.2)'
//                         }}
//                       >
//                         <div className="absolute inset-[2px] bg-white rounded-full" />
//                       </div>

//                       <div 
//                         className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
//                           isDragging ? 'block' : 'hidden group-hover:block'
//                         }`}
//                         style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
//                       >
//                         {formatTime(currentTime)}
//                       </div>
//                     </div>

//                     <div className="ml-4 text-sm text-gray-600 min-w-[80px] text-right">
//                       {formatTime(currentTime)} / {formatTime(duration)}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>{`
//         /* Base video styles */
//         video:fullscreen {
//           width: 100vw;
//           height: 100vh;
//           background: black;
//         }

//         /* iOS/Safari specific controls */
//         .ios-video-player::-webkit-media-controls-panel {
//           display: flex !important;
//           background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
//         }

//         .ios-video-player::-webkit-media-controls {
//           display: flex !important;
//           opacity: 1 !important;
//           background: none !important;
//         }

//         .ios-video-player::-webkit-media-controls-play-button,
//         .ios-video-player::-webkit-media-controls-timeline,
//         .ios-video-player::-webkit-media-controls-current-time-display,
//         .ios-video-player::-webkit-media-controls-time-remaining-display,
//         .ios-video-player::-webkit-media-controls-mute-button,
//         .ios-video-player::-webkit-media-controls-volume-slider,
//         .ios-video-player::-webkit-media-controls-fullscreen-button {
//           display: flex !important;
//           opacity: 1 !important;
//         }

//         /* Non-iOS/Safari specific controls */
//         video:not(.ios-video-player):not(:fullscreen)::-webkit-media-controls-panel {
//           display: none !important;
//         }

//         video:fullscreen::-webkit-media-controls-panel {
//           display: flex !important;
//           background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
//           padding: 12px 16px;
//           height: 64px;
//         }

//         video:fullscreen::-webkit-media-controls-timeline {
//           margin: 0 16px;
//           height: 4px;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { VideoLoader } from './VideoLoader';
import { AccordionItem } from './AccordionItem';
import { IOSVideoPlayer } from './IOSVideoPlayer';
import { isIOS, isSafari } from './deviceDetection';
import { StepCardProps, variants } from './types';

let videoControllerInitialized = false;

export function StepCard({
  variant,
  icon,
  title,
  description,
  steps,
  videoUrl: defaultVideoUrl,
  thumbnail: defaultThumbnail,
  className,
}: StepCardProps) {
  // States
  const [openSteps, setOpenSteps] = useState<string>(steps[0].title);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isIOSorSafari, setIsIOSorSafari] = useState(false);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const iOSVideoRef = useRef<IOSVideoPlayerRef>(null);

  // Styles and data
  const style = variants[variant];
  const currentStep = steps.find(step => step.title === openSteps);
  const currentVideoUrl = currentStep?.videoUrl || defaultVideoUrl;
  const currentThumbnail = currentStep?.thumbnail || defaultThumbnail;

  // Check for iOS/Safari on mount
  useEffect(() => {
    setIsIOSorSafari(isIOS() || isSafari());
  }, []);

  useEffect(() => {
    if (isIOSorSafari) {
      iOSVideoRef.current?.cleanup();
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowThumbnail(true);
    }
    setKey(prevKey => prevKey + 1);
    setIsLoading(true);
  }, [openSteps, isIOSorSafari]);

  // Video cleanup function
  const cleanupVideoResources = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.onloadeddata = null;
      videoRef.current.onerror = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current.ontimeupdate = null;
      videoRef.current.onfullscreenchange = null;
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
      
      setIsPlaying(false);
      setCurrentTime(0);
      setBuffered(0);
      setIsLoading(true);
      setShowThumbnail(true);
    }
  }, []);

  // Progress Bar Mouse Events
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (videoRef.current && isPlaying) {
          videoRef.current.play();
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressBarRef.current && videoRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = x / rect.width;
        const newTime = percentage * duration;
        
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, duration, isPlaying]);

  // Global video controller initialization
  useEffect(() => {
    if (videoControllerInitialized) return;
    
    const handleGlobalPlay = (e: Event) => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (video !== e.target && !video.paused) {
          video.pause();
          if (video === videoRef.current) {
            setIsPlaying(false);
            setShowThumbnail(true);
          }
        }
      });
    };

    document.addEventListener('play', handleGlobalPlay, true);
    videoControllerInitialized = true;

    return () => {
      document.removeEventListener('play', handleGlobalPlay, true);
      videoControllerInitialized = false;
    };
  }, []);

  // Video handlers
  const handlePlayPause = async () => {
    if (!videoRef.current) return;
    
    try {
      if (videoRef.current.paused) {
        setShowThumbnail(false);
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error toggling play state:', error);
      setShowThumbnail(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    
    if (videoRef.current) {
      const newTime = percentage * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleProgressBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle step change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowThumbnail(true);
    }
    setKey(prevKey => prevKey + 1);
    setIsLoading(true);
  }, [openSteps]);

  const VideoPlayer = () => (
    <>
      <div className="w-full h-full rounded-tl-2xl rounded-tr-2xl overflow-hidden">
        <video
          key={key}
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          playsInline={true}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="metadata"
          controlsList="nodownload"
          disablePictureInPicture
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => {
            setIsLoading(false);
            if (videoRef.current) {
              setDuration(videoRef.current.duration);
            }
          }}
          onPlay={() => {
            setIsPlaying(true);
            setShowThumbnail(false);
            setIsLoading(false);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
          onTimeUpdate={(e) => {
            if (!isDragging && e.target instanceof HTMLVideoElement) {
              setCurrentTime(e.target.currentTime);
              if (e.target.buffered.length > 0) {
                setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
              }
            }
          }}
        >
          <source src={currentVideoUrl} type="video/mp4" />
        </video>

        <AnimatePresence>
          {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
        </AnimatePresence>

        {showThumbnail && (
          <div 
            className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
            style={{ backgroundImage: `url(${currentThumbnail})` }}
            onClick={handlePlayPause}
          />
        )}
      </div>

      <div className="w-full flex items-center px-4 relative z-10 bg-[#fdf7f2]">
        <button 
          onClick={handlePlayPause}
          className="w-8 h-8 flex items-center justify-center mr-4"
        >
          {!isPlaying ? (
            <div 
              className="w-0 h-0 ml-1"
              style={{
                borderTop: '8px solid transparent',
                borderLeft: '16px solid #F26A1B',
                borderBottom: '8px solid transparent'
              }}
            />
          ) : (
            <div className="w-4 h-4 flex gap-1">
              <div className="w-[2px] h-full bg-[#F26A1B]" />
              <div className="w-[2px] h-full bg-[#F26A1B]" />
            </div>
          )}
        </button>

        <div 
          ref={progressBarRef}
          className="flex-1 h-6 flex items-center relative group cursor-pointer"
          onClick={handleProgressClick}
          onMouseDown={handleProgressBarMouseDown}
        >
          <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
            <div 
              className="absolute h-full bg-[#F26A1B] opacity-30"
              style={{ 
                width: `${(buffered / (duration || 1)) * 100}%`,
                transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
              }} 
            />
            <div 
              className="absolute h-full bg-[#F26A1B]"
              style={{ 
                width: `${(currentTime / (duration || 1)) * 100}%`,
                transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
              }} 
            />
          </div>

          <div 
            className={`absolute h-4 w-4 rounded-full -ml-2 cursor-pointer transform ${
              isDragging 
                ? 'scale-105 shadow-lg bg-[#F26A1B]' 
                : 'scale-100 opacity-0 group-hover:opacity-100 bg-[#F26A1B]'
            }`}
            style={{ 
              left: `${(currentTime / (duration || 1)) * 100}%`,
              transition: isDragging ? 'none' : 'all 0.15s ease-out',
              boxShadow: '0 1px 3px rgba(242, 106, 27, 0.2)'
            }}
          >
            <div className="absolute inset-[2px] bg-white rounded-full" />
          </div>

          <div 
            className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
              isDragging ? 'block' : 'hidden group-hover:block'
            }`}
            style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
          >
            {formatTime(currentTime)}
          </div>
        </div>

        <div className="ml-4 text-sm text-gray-600 min-w-[80px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:gap-8 relative rounded-2xl overflow-hidden border border-[rgba(201,198,198,0.09)] ${className}`}
      style={{
        background: style.bgGradient,
        backdropFilter: 'blur(45px)',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Left Content */}
      <div className="flex-1 p-6 lg:p-[42px] flex flex-col">
        <div className="flex items-center gap-[7px] mb-3">
          <div className="w-6 h-6">
            <Image src={icon} alt={title} width={24} height={24} />
          </div>
          <span
            style={{ color: style.iconColor }}
            className="text-base lg:text-lg font-bold uppercase leading-[27px] tracking-[0.72px]"
          >
            {title}
          </span>
        </div>

        <h3 className="text-2xl lg:text-[32px] font-normal leading-tight lg:leading-[41.6px] mb-4 lg:mb-6">
          {description}
        </h3>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <AccordionItem
              key={step.title}
              title={step.title}
              description={step.description}
              isOpen={openSteps === step.title}
              onToggle={() => {
                if (openSteps !== step.title) {
                  setOpenSteps(step.title);
                }
              }}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Mobile Video Section */}
      <div className="block sm:hidden w-full px-4 pb-4">
  <div className="rounded-lg overflow-hidden bg-black relative">
    {/* Main video container */}
    <div className="w-full h-[250px] relative ">
      {isIOSorSafari ? (
        <IOSVideoPlayer
          ref={iOSVideoRef}
          videoUrl={currentVideoUrl}
          thumbnail={currentThumbnail}
          variant={variant}
          onTimeUpdate={(time) => setCurrentTime(time)}
          onDurationChange={(dur) => setDuration(dur)}
          onPlayingChange={(playing) => {
            setIsPlaying(playing);
            if (!playing) {
              setShowThumbnail(true);
            }
          }}
        />
      ) : (
        <>
          {/* Video Element */}
          <div className="relative h-full">
          <div className="absolute inset-0">
            <video
              key={key}
              ref={videoRef}
              className="w-full h-full object-cover" // Changed from object-contain
              playsInline={true}
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              preload="metadata"
              controlsList="nodownload"
              controls={true}
              disablePictureInPicture
              onLoadStart={() => setIsLoading(true)}
              onLoadedData={() => {
                setIsLoading(false);
                if (videoRef.current) {
                  setDuration(videoRef.current.duration);
                }
              }}
              onPlay={() => {
                setIsPlaying(true);
                setShowThumbnail(false);
                setIsLoading(false);
              }}
              onPause={() => {
                setIsPlaying(false);
              }}
              onTimeUpdate={(e) => {
                if (!isDragging && e.target instanceof HTMLVideoElement) {
                  setCurrentTime(e.target.currentTime);
                  if (e.target.buffered.length > 0) {
                    setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
                  }
                }
              }}
            >
              <source src={currentVideoUrl} type="video/mp4" />
            </video>
          </div>

          <AnimatePresence>
            {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
          </AnimatePresence>

          {showThumbnail && (
  <div className="relative w-full h-full overflow-hidden flex flex-row-reverse">
    {/* Blurred background layer */}
    <div 
      className="absolute inset-0 z-10"
      style={{ 
        backgroundImage: `url(${currentThumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px) brightness(0.7)',
        transform: 'scale(1.1)', // Prevents blur edges from showing
      }}
    />
    <div 
      className="absolute inset-0 cursor-pointer z-20 bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${currentThumbnail})`,
        backgroundSize: 'contain',
        backgroundPosition: 'left center',
        width: 'max-w-[150%]',
        height: 'h-full',
        marginLeft: '-ml-[25%]',
      }}
      onClick={handlePlayPause}
    />
  </div>
)}
          {/* Controls Container */}
          <div className="absolute bottom-0 left-0 right-0 z-30">
            {/* Progress Bar */}
            <div 
              ref={progressBarRef}
              className="w-full h-1 bg-black/30 cursor-pointer"
              onClick={handleProgressClick}
              onMouseDown={handleProgressBarMouseDown}
              onTouchStart={handleProgressBarMouseDown}
            >
         {/* Buffered Progress - Mobile */}
         <div 
                className="absolute h-full bg-white/30"
                style={{ 
                  width: `${(buffered / (duration || 1)) * 100}%`
                }} 
              />
              {/* Playback Progress - Mobile */}
              <div 
                className="absolute h-full bg-white"
                style={{ 
                  width: `${(currentTime / (duration || 1)) * 100}%`,
                  transition: isDragging ? 'none' : 'width 0.15s ease-out'
                }} 
              />
            </div>
            </div>

            {/* Controls Row */}
           <div className="h-10 flex items-center justify-between px-3 bg-gradient-to-t from-black/60 to-black/40">
              {/* Left Side - Play/Time */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePlayPause}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  {!isPlaying ? (
                    <div 
                      className="w-0 h-0 ml-0.5"
                      style={{
                        borderTop: '6px solid transparent',
                        borderLeft: '10px solid white',
                        borderBottom: '6px solid transparent'
                      }}
                    />
                  ) : (
                    <div className="w-4 h-4 flex gap-1">
                      <div className="w-[2px] h-full bg-white" />
                      <div className="w-[2px] h-full bg-white" />
                    </div>
                  )}
                </button>

                <div className="text-sm text-white">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
            </div> 
          </div>
        </>
      )}
    </div>
  </div>
</div>
      {/* Desktop Video Section */}
      <div className="hidden sm:block w-full h-[471px] lg:w-[742px] relative">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: style.cardGradient,
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '16px',
            borderTopLeftRadius: '0px'
          }}
        >
          {/* Video Container */}
          <div
            className="absolute rounded-2xl overflow-hidden bg-[#fdf7f2]"
            style={{
              width: 'calc(100% - 56px)',
              height: '414.73px',
              left: '28px',
              top: '28px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className="relative w-full h-full">
              {isIOSorSafari ? (
                <IOSVideoPlayer
                  ref={iOSVideoRef}
                  videoUrl={currentVideoUrl}
                  thumbnail={currentThumbnail}
                  variant={variant}
                  onTimeUpdate={(time) => setCurrentTime(time)}
                  onDurationChange={(dur) => setDuration(dur)}
                  onPlayingChange={(playing) => {
                    setIsPlaying(playing);
                    if (!playing) {
                      setShowThumbnail(true);
                    }
                  }}
                />
              ) : (
                <>
                  <div className="w-full h-[325px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
                    <video
                      key={key}
                      ref={videoRef}
                      className="w-full h-full object-contain bg-black"
                      playsInline={true}
                      webkit-playsinline="true"
                      x-webkit-airplay="allow"
                      preload="metadata"
                      controlsList="nodownload"
                      disablePictureInPicture
                      onLoadStart={() => setIsLoading(true)}
                      onLoadedData={() => {
                        setIsLoading(false);
                        if (videoRef.current) {
                          setDuration(videoRef.current.duration);
                        }
                      }}
                      onPlay={() => {
                        setIsPlaying(true);
                        setShowThumbnail(false);
                        setIsLoading(false);
                      }}
                      onPause={() => {
                        setIsPlaying(false);
                      }}
                      onTimeUpdate={(e) => {
                        if (!isDragging && e.target instanceof HTMLVideoElement) {
                          setCurrentTime(e.target.currentTime);
                          if (e.target.buffered.length > 0) {
                            setBuffered(e.target.buffered.end(e.target.buffered.length - 1));
                          }
                        }
                      }}
                    >
                      <source src={currentVideoUrl} type="video/mp4" />
                    </video>

                    <AnimatePresence>
                      {isLoading && !showThumbnail && <VideoLoader variant={variant} />}
                    </AnimatePresence>

                    {showThumbnail && (
                      <div 
                        className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
                        style={{ backgroundImage: `url(${currentThumbnail})` }}
                        onClick={handlePlayPause}
                      />
                    )}
                  </div>

                  <div className="w-full h-[89.73px] bg-[#fdf7f2] flex items-center px-4 relative z-10">
                    <button 
                      onClick={handlePlayPause}
                      className="w-8 h-8 flex items-center justify-center mr-4 hover:opacity-80 transition-opacity"
                    >
                      {!isPlaying ? (
                        <div 
                          className="w-0 h-0 ml-1"
                          style={{
                            borderTop: '8px solid transparent',
                            borderLeft: '16px solid #F26A1B',
                            borderBottom: '8px solid transparent'
                          }}
                        />
                      ) : (
                        <div className="w-4 h-4 flex gap-1">
                          <div className="w-[2px] h-full bg-[#F26A1B]" />
                          <div className="w-[2px] h-full bg-[#F26A1B]" />
                        </div>
                      )}
                    </button>

                    <div 
                      ref={progressBarRef}
                      className="flex-1 h-6 flex items-center relative group cursor-pointer"
                      onClick={handleProgressClick}
                      onMouseDown={handleProgressBarMouseDown}
                    >
                      <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                        <div 
                          className="absolute h-full bg-[#F26A1B] opacity-30"
                          style={{ 
                            width: `${(buffered / (duration || 1)) * 100}%`,
                            transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                          }} 
                        />
                        <div 
                          className="absolute h-full bg-[#F26A1B]"
                          style={{ 
                            width: `${(currentTime / (duration || 1)) * 100}%`,
                            transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                          }} 
                        />
                      </div>

                      <div 
                        className={`absolute h-4 w-4 rounded-full -ml-2 cursor-pointer transform ${
                          isDragging 
                            ? 'scale-105 shadow-lg bg-[#F26A1B]' 
                            : 'scale-100 opacity-0 group-hover:opacity-100 bg-[#F26A1B]'
                        }`}
                        style={{ 
                          left: `${(currentTime / (duration || 1)) * 100}%`,
                          transition: isDragging ? 'none' : 'all 0.15s ease-out',
                          boxShadow: '0 1px 3px rgba(242, 106, 27, 0.2)'
                        }}
                      >
                        <div className="absolute inset-[2px] bg-white rounded-full" />
                      </div>

                      <div 
                        className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
                          isDragging ? 'block' : 'hidden group-hover:block'
                        }`}
                        style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
                      >
                        {formatTime(currentTime)}
                      </div>
                    </div>

                    <div className="ml-4 text-sm text-gray-600 min-w-[80px] text-right">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Base video styles */
        video:fullscreen {
          width: 100vw;
          height: 100vh;
          background: black;
        }

        /* iOS/Safari specific controls */
        .ios-video-player::-webkit-media-controls-panel {
          display: flex !important;
          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
        }

        .ios-video-player::-webkit-media-controls {
          display: flex !important;
          opacity: 1 !important;
          background: none !important;
        }

        .ios-video-player::-webkit-media-controls-play-button,
        .ios-video-player::-webkit-media-controls-timeline,
        .ios-video-player::-webkit-media-controls-current-time-display,
        .ios-video-player::-webkit-media-controls-time-remaining-display,
        .ios-video-player::-webkit-media-controls-mute-button,
        .ios-video-player::-webkit-media-controls-volume-slider,
        .ios-video-player::-webkit-media-controls-fullscreen-button {
          display: flex !important;
          opacity: 1 !important;
        }

        /* Non-iOS/Safari specific controls */
        video:not(.ios-video-player):not(:fullscreen)::-webkit-media-controls-panel {
          display: none !important;
        }

        video:fullscreen::-webkit-media-controls-panel {
          display: flex !important;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
          padding: 12px 16px;
          height: 64px;
        }

        video:fullscreen::-webkit-media-controls-timeline {
          margin: 0 16px;
          height: 4px;
        }
      `}</style>
    </div>
  );
}