import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

export interface AndroidVideoPlayerRef {
  cleanup: () => void;
}

interface AndroidVideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  variant: string;
  onTimeUpdate?: (time: number) => void;
  onDurationChange?: (duration: number) => void;
  onPlayingChange?: (playing: boolean) => void;
}

// Dynamically import Video to prevent SSR issues
const VideoComponent = dynamic(
  () => import('next-video').then((mod) => {
    // Fallback to native video if next-video import fails
    return mod.Video || (({ src, ...props }) => (
      <video 
        src={src} 
        {...props} 
        controls 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: 'black'
        }}
      />
    ));
  }), 
  { 
    ssr: false,
    loading: () => <div style={{ 
      width: '100%', 
      paddingTop: '56.25%', 
      backgroundColor: 'black' 
    }} /> 
  }
);

export const AndroidVideoPlayer = forwardRef<AndroidVideoPlayerRef, AndroidVideoPlayerProps>(
  ({ 
    videoUrl, 
    thumbnail, 
    variant, 
    onTimeUpdate, 
    onDurationChange, 
    onPlayingChange 
  }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useImperativeHandle(ref, () => ({
      cleanup: () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    }));

    useEffect(() => {
      setIsClient(true);
    }, []);

    // Prevent hydration errors by only rendering on client
    if (!isClient) {
      return (
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 aspect ratio
          backgroundColor: 'black',
          overflow: 'hidden'
        }}>
          {thumbnail && (
            <img 
              src={thumbnail} 
              alt="Video Thumbnail" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          )}
        </div>
      );
    }

    return (
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect ratio
        backgroundColor: 'black',
        overflow: 'hidden'
      }}>
        {thumbnail && (
          <img 
            src={thumbnail} 
            alt="Video Thumbnail" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        )}
        <VideoComponent
          ref={videoRef}
          src={videoUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundColor: 'black'
          }}
          playsInline
          preload="metadata"
          onTimeUpdate={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
            const target = e.currentTarget;
            const time = target.currentTime;
            setCurrentTime(time);
            onTimeUpdate?.(time);
          }}
          onLoadedMetadata={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
            const target = e.currentTarget;
            const dur = target.duration;
            setDuration(dur);
            onDurationChange?.(dur);
          }}
          onPlay={() => {
            setIsPlaying(true);
            onPlayingChange?.(true);
          }}
          onPause={() => {
            setIsPlaying(false);
            onPlayingChange?.(false);
          }}
          onError={(e) => {
            console.error('Video error:', e);
          }}
        />
      </div>
    );
  }
);

AndroidVideoPlayer.displayName = 'AndroidVideoPlayer';