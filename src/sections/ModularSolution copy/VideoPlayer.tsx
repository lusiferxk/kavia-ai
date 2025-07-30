'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { variants } from './types'
import { VideoLoader } from './VideoLoader'

interface VideoPlayerProps {
  videoUrl: string
  thumbnail: string
  variant: keyof typeof variants
  onLoadingChange: (loading: boolean) => void
}

export const VideoPlayer = ({
  videoUrl,
  thumbnail,
  variant,
  onLoadingChange,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const [isBuffering, setIsBuffering] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [canPlay, setCanPlay] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Reset states when video URL changes
  useEffect(() => {
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setShowThumbnail(true)
    setHasInteracted(false)
    setCanPlay(false)
    setIsBuffering(true)
  }, [videoUrl])

  // Video Event Handlers
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => {
      setIsPlaying(true)
      setShowThumbnail(false)
      setHasInteracted(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
      if (!hasInteracted) {
        setShowThumbnail(true)
      }
    }

    const handleTimeUpdate = () => {
      if (!isDragging && video) {
        setCurrentTime(video.currentTime)
      }
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setCanPlay(true)
      onLoadingChange(false)
    }

    const handleWaiting = () => {
      setIsBuffering(true)
    }

    const handleCanPlay = () => {
      setIsBuffering(false)
      setCanPlay(true)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setShowThumbnail(true)
      setHasInteracted(false)
      video.currentTime = 0
    }

    const handleError = (e: ErrorEvent) => {
      console.error('Video error:', e)
      onLoadingChange(false)
      setIsBuffering(false)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('waiting', handleWaiting)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('waiting', handleWaiting)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [isDragging, onLoadingChange, hasInteracted, videoUrl])

  // Progress Bar Mouse Events
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        if (videoRef.current && hasInteracted) {
          videoRef.current.play().catch(console.error)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressBarRef.current && videoRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const percentage = x / rect.width
        const newTime = percentage * videoRef.current.duration
        videoRef.current.currentTime = newTime
        setCurrentTime(newTime)
      }
    }

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDragging, hasInteracted])

  const handlePlayPause = async () => {
    const video = videoRef.current
    if (!video || !canPlay) return

    try {
      if (video.paused) {
        await video.play()
      } else {
        video.pause()
      }
    } catch (error) {
      console.error('Error toggling play state:', error)
    }
  }

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const video = videoRef.current
    const progressBar = progressBarRef.current
    if (!video || !progressBar || !canPlay) return

    const rect = progressBar.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = x / rect.width
    const newTime = percentage * video.duration
    
    video.currentTime = newTime
    setCurrentTime(newTime)

    if (!isPlaying && hasInteracted) {
      handlePlayPause()
    }
  }

  const handleProgressBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!canPlay) return
    
    setIsDragging(true)
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause()
    }
  }

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.stopPropagation()
    handlePlayPause()
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-[325px] relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          onClick={handleVideoClick}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl.replace('.mp4', '.mov')} type="video/quicktime" />
          <source src={videoUrl.replace('.mp4', '.m4v')} type="video/x-m4v" />
          Your browser does not support the video tag.
        </video>

        {showThumbnail && (
          <div
            className="absolute inset-0 cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={handlePlayPause}
          />
        )}

        <AnimatePresence>
          {(isBuffering || !canPlay) && <VideoLoader variant={variant} />}
        </AnimatePresence>
      </div>

      <div className="w-full h-[89.73px] bg-[#fdf7f2] flex items-center px-4">
        <button
          onClick={handlePlayPause}
          disabled={!canPlay}
          className={`w-8 h-8 flex items-center justify-center mr-4 transition-opacity
            ${canPlay ? 'hover:opacity-80' : 'opacity-50 cursor-not-allowed'}`}
        >
          {!isPlaying ? (
            <div className="w-0 h-0 ml-1 border-t-8 border-t-transparent border-l-[16px] border-l-[#F26A1B] border-b-8 border-b-transparent" />
          ) : (
            <div className="w-4 h-4 flex gap-1">
              <div className="w-[2px] h-full bg-[#F26A1B]" />
              <div className="w-[2px] h-full bg-[#F26A1B]" />
            </div>
          )}
        </button>

        <div
          ref={progressBarRef}
          className={`flex-1 h-6 flex items-center relative cursor-pointer group
            ${!canPlay && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleProgressBarClick}
          onMouseDown={handleProgressBarMouseDown}
        >
          <div className="absolute h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-[#F26A1B] transition-all duration-150"
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
            />
          </div>
          
          <div
            className={`absolute h-4 w-4 rounded-full -ml-2 transform ${
              isDragging
                ? 'scale-105 shadow-lg bg-[#F26A1B]'
                : 'scale-100 opacity-0 group-hover:opacity-100 bg-[#F26A1B]'
            }`}
            style={{
              left: `${(currentTime / (duration || 1)) * 100}%`,
              top: '50%',
              transform: 'translateY(-50%)',
              transition: isDragging ? 'none' : 'all 0.15s ease-out',
            }}
          >
            <div className="absolute inset-[2px] bg-white rounded-full" />
          </div>

          <div
            className={`absolute top-[-24px] bg-black text-white text-xs px-2 py-1 rounded transform -translate-x-1/2 pointer-events-none ${
              isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            style={{ 
              left: `${(currentTime / (duration || 1)) * 100}%`
            }}
          >
            {formatTime(currentTime)}
          </div>
        </div>

        <div className="ml-4 text-sm text-gray-600 min-w-[80px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  )
}