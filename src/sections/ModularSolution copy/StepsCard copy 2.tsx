'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'


interface CachedVideo {
  blob: Blob
  url: string
  loaded: boolean
}

interface VideoCache {
  [key: string]: CachedVideo
}

interface StepItem {
  title: string
  description?: string
  videoUrl?: string
  thumbnail?: string
}

interface StepCardProps {
  variant: 'inspect' | 'plan' | 'build'
  icon: string
  title: string
  description: string
  steps: StepItem[]
  videoUrl: string
  thumbnail: string
  className?: string
}

interface VideoLoaderProps { 
  variant: 'inspect' | 'plan' | 'build'
  progress?: number  // New prop for loading percentage
}

const variants = {
  inspect: {
    iconColor: '#f4682c',  // Changed to match the "INSPECT" text color
  cardGradient: 'linear-gradient(135deg, #f4682c 0%, #D35A1B 100%)',  
    bgGradient: 'linear-gradient(118deg, rgba(0, 212, 255, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient: 'linear-gradient(225deg, #f4682c 0%, #6d1d00 150%)',  // Matches circle gradient
    circleBorder: '1px solid #f17070',  // Kept the same as it matches
    circlePosition: { left: '383px', top: '18px' },  // Kept the same as it matches
  },
  plan: {
    iconColor: '#009CA6',
    cardGradient: 'linear-gradient(54deg, #0F88A1 0%, #00D4FF 100%)',
    bgGradient: 'linear-gradient(118deg, rgba(0, 212, 255, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient:
      'linear-gradient(241deg, rgba(13.78, 202.97, 242.38, 0.30) 0%, rgba(2.24, 18.51, 21.87, 0.30) 100%)',
    circleBorder: '1px solid rgba(112.40, 223.99, 246.16, 0.70)',
    circlePosition: { left: '-338px', top: '-347px' },
  },
  build: {
    iconColor: '#F1B434',
    cardGradient: 'linear-gradient(54deg, #996B0B 0%, #F1B434 100%)',
    bgGradient: 'linear-gradient(118deg, rgba(241, 180, 52, 0.04) 0%, rgba(35, 31, 32, 0.04) 96%)',
    circleGradient:
      'linear-gradient(241deg, rgba(241, 180, 52, 0.30) 0%, rgba(2, 19, 22, 0.30) 100%)',
    circleBorder: '1px solid rgba(241, 180, 52, 0.70)',
    hasDoubleCircle: true,
    circlePositions: [
      { left: '283px', top: '328px' },
      { left: '-389px', top: '-418px' },
    ],
  },
} as const

// VideoLoader Component
const VideoLoader = ({ variant, progress }: VideoLoaderProps) => {
  const style = variants[variant]
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-10"
    >
      <motion.div
        className="relative w-24 h-24 mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              border: `2px solid ${style.iconColor}`,
              borderRadius: '50%',
              borderRightColor: 'transparent',
              borderBottomColor: 'transparent',
              transform: `rotate(${i * 120}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
          />
        ))}
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full"
          style={{ backgroundColor: style.iconColor }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      {typeof progress === 'number' && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-white text-sm mt-4"
  >
    {progress === -1 ? (
      'Loading video...'
    ) : progress === 0 ? (
      'Preparing video...'
    ) : (
      `${Math.round(progress)}% loaded`
    )}
  </motion.div>
)}
      {/* {attempt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-sm"
        >
          {attempt}
        </motion.div>
      )} */}
    </motion.div>
  )
}

const AccordionItem = ({
  title,
  description,
  isOpen,
  onToggle,
  isLast,
}: {
  title: string
  description?: string
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
}) => {
  return (
    <div>
      <div onClick={onToggle} className="cursor-pointer">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <span
            style={{
              color: isOpen ? '#FFFFFF' : '#DEDCDD',
              transition: 'color 0.2s ease',
            }}
            className="text-sm lg:text-base font-semibold leading-snug"
          >
            {title}
          </span>
          <div className="w-6 h-6 flex items-center justify-center">
            {isOpen ? (
              <div className="w-3 h-0.5 bg-[#DEDCDD]" />
            ) : (
              <div className="relative">
                <div className="w-[18px] h-0.5 bg-[#DEDCDD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-0.5 h-[18px] bg-[#DEDCDD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && description && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: 'auto', opacity: 1, marginBottom: 16 }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-[#DEDCDD] text-sm lg:text-[15px] font-normal leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isLast && <div className="h-px bg-white/[0.06]" />}
    </div>
  )
}

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
  // State Management
  const [openSteps, setOpenSteps] = useState<string>(steps[0].title)
  const [isLoading, setIsLoading] = useState(true)
  const [key, setKey] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasError, setHasError] = useState(false)

  const [isInitialized, setIsInitialized] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false)

  const [videosCache, setVideosCache] = useState<VideoCache>({})
const [currentLoadingVideo, setCurrentLoadingVideo] = useState<string | null>(null)
const [showPlayer, setShowPlayer] = useState(false)

const backgroundLoaderRef = useRef<{
  [key: string]: { xhr: XMLHttpRequest; promise: Promise<Blob> }
}>({})

  const [loadingProgress, setLoadingProgress] = useState<number>(0)

  const currentRequestRef = useRef<XMLHttpRequest | null>(null)

  const [preloadedVideos, setPreloadedVideos] = useState<{ [key: string]: string }>({})

    // Add new states for loading management
    const [loadAttempts, setLoadAttempts] = useState(0)
    const playRequestRef = useRef<boolean>(false)

    const loadTimeoutRef = useRef<NodeJS.Timeout>()
    const MAX_LOAD_ATTEMPTS = 3

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef(null)

  // Style
  const style = variants[variant]

  // Get current step's video URL and thumbnail
  const currentStep = steps.find(step => step.title === openSteps)
  const currentVideoUrl = currentStep?.videoUrl || defaultVideoUrl
  const currentThumbnail = currentStep?.thumbnail || defaultThumbnail


  const loadVideoInBackground = useCallback((url: string): Promise<Blob> => {
    if (backgroundLoaderRef.current[url]) {
      return backgroundLoaderRef.current[url].promise
    }
  
    const promise = new Promise<Blob>((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      
      xhr.onprogress = (event) => {
        if (event.lengthComputable && url === currentLoadingVideo) {
          const progress = (event.loaded / event.total) * 100
          setLoadingProgress(progress)
        }
      }
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: 'video/mp4' })
          resolve(blob)
        } else {
          reject(new Error(`Failed to load video: ${xhr.status}`))
        }
      }
  
      xhr.onerror = () => {
        reject(new Error('Network error while loading video'))
      }
  
      xhr.send()
      
      backgroundLoaderRef.current[url] = { xhr, promise }
    })
  
    return promise
  }, [currentLoadingVideo])

  
// Add this effect to initialize video loading
useEffect(() => {
  const loadVideos = async () => {
    const videoUrls = steps.map(step => step.videoUrl || defaultVideoUrl)
    
    for (const url of videoUrls) {
      if (!videosCache[url]?.loaded) {
        try {
          const blob = await loadVideoInBackground(url)
          const blobUrl = URL.createObjectURL(blob)
          
          setVideosCache(prev => ({
            ...prev,
            [url]: {
              blob,
              url: blobUrl,
              loaded: true
            }
          }))
        } catch (error) {
          console.error('Error loading video:', error)
          setVideosCache(prev => ({
            ...prev,
            [url]: {
              blob: null,
              url: url, // fallback to original URL
              loaded: false
            }
          }))
        }
      }
    }
  }

  loadVideos()

  // Cleanup
  return () => {
    Object.values(videosCache).forEach(cache => {
      if (cache.url.startsWith('blob:')) {
        URL.revokeObjectURL(cache.url)
      }
    })
    // Cancel any ongoing loads
    Object.values(backgroundLoaderRef.current).forEach(({ xhr }) => xhr.abort())
  }
}, [steps, defaultVideoUrl, loadVideoInBackground])
  // Add this new effect for preloading
useEffect(() => {
  // Preload all videos when component mounts
  const preloadVideos = async () => {
    const videoUrls = steps.map(step => step.videoUrl || defaultVideoUrl)
    
    for (const url of videoUrls) {
      if (!preloadedVideos[url]) {
        try {
          const xhr = new XMLHttpRequest()
          xhr.open('GET', url, true)
          xhr.responseType = 'blob'
          
          xhr.onload = () => {
            if (xhr.status === 200) {
              const blob = new Blob([xhr.response], { type: 'video/mp4' })
              const blobUrl = URL.createObjectURL(blob)
              setPreloadedVideos(prev => ({ ...prev, [url]: blobUrl }))
            }
          }
          
          xhr.send()
        } catch (error) {
          console.error('Error preloading video:', error)
        }
      }
    }
  }

  preloadVideos()
  
  // Cleanup blob URLs on unmount
  return () => {
    Object.values(preloadedVideos).forEach(blobUrl => {
      URL.revokeObjectURL(blobUrl)
    })
  }
}, [steps, defaultVideoUrl])

  // Video Resource Cleanup
  const cleanupVideoResources = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
      setCurrentTime(0)
      setBuffered(0)
      setIsInitialized(false)
    }
  }, [])

  // Progress Bar Mouse Events
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.play()
      }
    }

    const handleMouseMove = (e) => {
      if (isDragging && progressBarRef.current && videoRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const percentage = x / rect.width
        const newTime = percentage * duration
        
        videoRef.current.currentTime = newTime
        setCurrentTime(newTime)
        
        if (videoRef.current.buffered.length > 0) {
          setBuffered(videoRef.current.buffered.end(videoRef.current.buffered.length - 1))
        }
      }
    }

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDragging, duration])

  // Global Video Controller
  useEffect(() => {
    if (videoControllerInitialized) return
    
    const handleGlobalPlay = (e: Event) => {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => {
        if (video !== e.target && !video.paused) {
          video.pause()
          if (video === videoRef.current) {
            setIsPlaying(false)
          }
        }
      })
    }

    document.addEventListener('play', handleGlobalPlay, true)
    videoControllerInitialized = true

    return () => {
      document.removeEventListener('play', handleGlobalPlay, true)
      videoControllerInitialized = false
    }
  }, [])


  const isExternalUrl = (url: string) => {
    try {
      const urlObj = new URL(url)
      return urlObj.origin !== window.location.origin
    } catch {
      return false
    }
  }
  
   // Add new function to handle video loading with progress
   const loadVideoWithProgress = useCallback((url: string) => {
    // Cancel any existing request
    if (currentRequestRef.current) {
      currentRequestRef.current.abort()
    }
  
    setIsLoading(true)
    setLoadingProgress(0)
  
    // If it's an external URL that might have CORS issues, try direct video loading
    if (isExternalUrl(url)) {
      if (videoRef.current) {
        videoRef.current.src = url
        // Start tracking loading through video events instead of XHR
        const trackVideoLoading = () => {
          if (!videoRef.current) return
          
          const buffered = videoRef.current.buffered
          if (buffered.length > 0) {
            const progress = (buffered.end(0) / videoRef.current.duration) * 100
            setLoadingProgress(Math.min(progress, 99)) // Cap at 99% until fully loaded
          }
        }
  
        videoRef.current.addEventListener('progress', trackVideoLoading)
        videoRef.current.addEventListener('loadeddata', () => {
          setLoadingProgress(100)
          setIsLoading(false)
        })
  
        // Cleanup
        return () => {
          if (videoRef.current) {
            videoRef.current.removeEventListener('progress', trackVideoLoading)
          }
        }
      }
      return () => {}
    }
  
    // For local URLs or when CORS is properly configured
    const xhr = new XMLHttpRequest()
    currentRequestRef.current = xhr
  
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
  
    // Track loading progress
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100
        setLoadingProgress(progress)
      } else {
        // If progress is not computable, show indeterminate progress
        setLoadingProgress(-1)
      }
    }
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        const videoBlob = new Blob([xhr.response], { type: 'video/mp4' })
        const videoUrl = URL.createObjectURL(videoBlob)
        
        if (videoRef.current) {
          videoRef.current.src = videoUrl
          setLoadingProgress(100)
          setIsLoading(false)
        }
      }
    }
  
    xhr.onerror = () => {
      // If XHR fails, fallback to direct video loading
      if (videoRef.current) {
        videoRef.current.src = url
      }
    }
  
    xhr.send()
  
    return () => {
      if (xhr) {
        xhr.abort()
      }
    }
  }, [])

  // Video Source Change Handler
  useEffect(() => {
    if (!currentVideoUrl) return
    
    // If we have a preloaded version, use it
    if (preloadedVideos[currentVideoUrl]) {
      if (videoRef.current) {
        videoRef.current.src = preloadedVideos[currentVideoUrl]
        // Start at minimal loading state
        setLoadingProgress(20)
      }
    } else {
      // Fallback to normal loading if not preloaded
      const cleanup = loadVideoWithProgress(currentVideoUrl)
      return () => {
        cleanup()
        if (videoRef.current?.src.startsWith('blob:')) {
          URL.revokeObjectURL(videoRef.current.src)
        }
      }
    }
  }, [currentVideoUrl, preloadedVideos])

  // Step Change Handler
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
    
    // Don't reset loading if we have the video preloaded
    if (!preloadedVideos[currentVideoUrl]) {
      setLoadingProgress(0)
    }
    
    setIsInitialized(false)
  }, [openSteps, currentVideoUrl, preloadedVideos])


  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!videoRef.current || !progressBarRef.current) return

    const rect = progressBarRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = x / rect.width
    const newTime = percentage * duration
      
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)

    if (!isPlaying) {
      handlePlayPause()
    }
  }


  const handleProgress = () => {
    if (!videoRef.current) return
    
    try {
      if (videoRef.current.buffered.length > 0) {
        const bufferedEnd = videoRef.current.buffered.end(0)
        const duration = videoRef.current.duration
        const progress = (bufferedEnd / duration) * 100
        setLoadingProgress(progress)
        
        // If fully buffered, ensure loading is complete
        if (progress >= 99.9) {
          setIsLoading(false)
          setLoadingProgress(100)
        }
      }
    } catch (error) {
      console.error('Error calculating buffer progress:', error)
    }
  }


  // Utility Functions
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlayPause = async () => {
    if (!videoRef.current) return

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play()
        setIsPlaying(true)
        setIsInitialized(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Error toggling play state:', error)
      setIsPlaying(false)
    }
  }

  const handleLoadedData = () => {
    setIsLoading(false)
    setLoadingProgress(100) // Add this line
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }


  const handleTimeUpdate = () => {
    if (!isDragging && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      if (videoRef.current.buffered.length > 0) {
        setBuffered(videoRef.current.buffered.end(videoRef.current.buffered.length - 1))
      }
    }
  }


  const handleFullscreen = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.controls = true
        await videoRef.current.requestFullscreen()
        
        const handleFullscreenChange = () => {
          if (!document.fullscreenElement) {
            videoRef.current.controls = false
          }
        }
        
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        videoRef.current.addEventListener('fullscreenchange', () => {
          document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }, { once: true })
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err)
      }
    }
  }

  // Add these with other utility functions before the return statement

  const handleVideoLoad = () => {
    if (!videoRef.current) return;
  
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = undefined;
    }
  
    if (videoRef.current.readyState >= 2) {
      setIsLoading(false);
      setHasError(false);
      setIsVideoReady(true);
      setDuration(videoRef.current.duration);
      
      if (videoRef.current.buffered.length > 0) {
        setBuffered(videoRef.current.buffered.end(videoRef.current.buffered.length - 1));
      }
    }
  };
  

  const handleVideoError = (e: Event) => {
    console.error('Video loading error:', e)
    
    if (loadAttempts < MAX_LOAD_ATTEMPTS) {
      setLoadAttempts(prev => prev + 1)
      retryVideoLoad()
    } else {
      setIsLoading(false)
      setHasError(true)
      cleanupVideoResources()
    }
  }

  // Add retry function
  const retryVideoLoad = () => {
    if (videoRef.current) {
      setIsLoading(true)
      setHasError(false)
      
      // Clear previous timeout
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
      }
      
      // Set timeout for loading
      loadTimeoutRef.current = setTimeout(() => {
        if (isLoading) {
          handleVideoError(new Error('Loading timeout'))
        }
      }, 10000) // 10 second timeout
      
      try {
        videoRef.current.load()
      } catch (error) {
        console.error('Error retrying video load:', error)
        handleVideoError(error)
      }
    }
  }


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
                    setOpenSteps(step.title)
                  }
                }}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
  
        {/* Right Video Section */}
        <div className="w-full h-[471px] lg:w-[742px] relative">
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
            {/* Circular Gradient - Hidden on mobile */}
            <div className="hidden lg:block">
              {variant === 'build' ? (
                <>
                  <div
                    className="absolute w-[651px] h-[651px]"
                    style={{
                      ...style.circlePositions[0],
                      background: style.circleGradient,
                      borderRadius: '9999px',
                      border: style.circleBorder,
                    }}
                  />
                  <div
                    className="absolute w-[651px] h-[651px]"
                    style={{
                      ...style.circlePositions[1],
                      background: style.circleGradient,
                      borderRadius: '9999px',
                      border: style.circleBorder,
                    }}
                  />
                </>
              ) : (
                <div
                  className="absolute w-[651px] h-[651px]"
                  style={{
                    ...style.circlePosition,
                    background: style.circleGradient,
                    borderRadius: '9999px',
                    border: style.circleBorder,
                  }}
                />
              )}
            </div>
  
            {/* Video Container */}
            <div
              className="absolute rounded-2xl overflow-hidden bg-[#fdf7f2]"
              style={{
                width: 'calc(100% - 56px)',
                height: '414.73px',
                left: '28px',
                right: '28px',
                top: '28px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
          <AnimatePresence>
      {isLoading && (
        <VideoLoader 
          variant={variant} 
          progress={loadingProgress}

        />
      )}
    </AnimatePresence>
  
              {/* Main Container */}
              <div className="relative w-full h-full">
                {/* Video Section */}
                <div className="w-full h-[325px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
<video
  key={currentVideoUrl}
  ref={videoRef}
  className={`w-full h-full object-contain ${isPlaying ? 'z-20' : 'z-0'}`}
  loop
  playsInline
  webkit-playsinline="true"
  preload="auto"
  onLoadedData={() => {
    setIsLoading(false)
    setLoadingProgress(100)
    setIsVideoReady(true)
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }}
  onCanPlayThrough={() => {
    // Video can play without buffering
    setIsLoading(false)
    setLoadingProgress(100)
  }}
  onLoadedMetadata={() => {
    // Show higher initial progress when metadata is loaded
    setLoadingProgress(prev => Math.max(prev, 40))
  }}
  onCanPlay={() => {
    // Can start playing
    setLoadingProgress(prev => Math.max(prev, 80))
    setIsLoading(false)
  }}
  onProgress={(e) => {
    if (videoRef.current) {
      const buffered = videoRef.current.buffered
      if (buffered.length > 0) {
        const progress = (buffered.end(0) / videoRef.current.duration) * 100
        setLoadingProgress(Math.min(progress, 99))
      }
    }
  }}
  onError={(e) => {
    console.error('Video error:', e)
    setIsLoading(false)
    setLoadingProgress(0)
  }}
      style={{
        WebkitPlaysinline: "true",
        playsInline: "true",
        WebkitAllowsInlineMediaPlayback: "true",
        WebkitEnterFullscreen: "true",
        WebkitAirplay: "allow",
        objectFit: "contain",
        backgroundColor: "#000"
      }}
    >
      <source src={currentVideoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

                </div>
  
                {/* Custom Controls Section */}
                <div className="w-full h-[89.73px] bg-[#fdf7f2] flex items-center px-4">
                  {/* Play/Pause Button */}
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
  
                  {/* Progress Bar */}
                  <div 
                    ref={progressBarRef}
                    className="flex-1 h-6 flex items-center relative group cursor-pointer"
                    onClick={handleProgressBarClick}
                    onMouseDown={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      setIsDragging(true);
                      if (videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause();
                      }
                    }}
                  >
                    {/* Progress Bar Track */}
                    <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                      {/* Buffered Progress */}
                      <div 
                        className="absolute h-full bg-[#F26A1B] opacity-30"
                        style={{ 
                          width: `${(buffered / (duration || 1)) * 100}%`,
                          transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} 
                      />
                      {/* Progress Bar Fill */}
                      <div 
                        className="absolute h-full bg-[#F26A1B]"
                        style={{ 
                          width: `${(currentTime / (duration || 1)) * 100}%`,
                          transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} 
                      />
                    </div>
  
                    {/* Slider Handle */}
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
                      <div 
                        className="absolute inset-[2px] bg-white rounded-full"
                        style={{
                          transition: isDragging ? 'none' : 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    </div>
  
                    {/* Time Preview */}
                    <div 
                      className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
                        isDragging ? 'block' : 'hidden group-hover:block'
                      }`}
                      style={{ 
                        left: `${(currentTime / (duration || 1)) * 100}%`
                      }}
                    >
                      {formatTime(currentTime)}
                    </div>
                  </div>
  
                  {/* Fullscreen Button */}
                  <button 
                    onClick={handleFullscreen}
                    className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity ml-4"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 17V13H4.5V15.5H7V17H3ZM13 17V15.5H15.5V13H17V17H13ZM3 7V3H7V4.5H4.5V7H3ZM15.5 7V4.5H13V3H17V7H15.5Z" fill="#F26A1B"/>
                    </svg>
                  </button>
                </div>
  
                {/* Thumbnail Overlay */}
                {!isPlaying && !isDragging && !isInitialized && (
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handlePlayPause}
        style={{
          backgroundImage: `url(${currentThumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    )}

              </div>
            </div>
          </div>
        </div>
  
        <style jsx global>{`
          video:fullscreen {
            width: 100vw;
            height: 100vh;
            background: black;
          }
  
          video:not(:fullscreen)::-webkit-media-controls-panel {
            display: none !important;
          }
  
          video:fullscreen::-webkit-media-controls {
            padding-bottom: 0px;
          }
  
          video:fullscreen::-webkit-media-controls-panel {
            display: flex !important;
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
            padding: 12px 16px;
            height: 64px;
          }
  
          video:fullscreen::-webkit-media-controls-play-button,
          video:fullscreen::-webkit-media-controls-timeline,
          video:fullscreen::-webkit-media-controls-current-time-display,
          video:fullscreen::-webkit-media-controls-time-remaining-display,
          video:fullscreen::-webkit-media-controls-mute-button,
          video:fullscreen::-webkit-media-controls-volume-slider,
          video:fullscreen::-webkit-media-controls-fullscreen-button {
            display: flex !important;
          }
  
          video:not(:fullscreen)::-webkit-media-controls-panel {
            display: none !important;
            margin: 0 6px;
          }
  
          video:fullscreen::-webkit-media-controls-timeline {
            margin: 0 16px;
            height: 4px;
          }
        `}</style>
      </div>
    )
  }