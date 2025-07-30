// src/components/ui/video/VideoPlayer.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, Maximize2 } from 'lucide-react';
import { VideoLoader } from './VideoLoader';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  videoType?: 'youtube' | 'vimeo';
}

export const VideoPlayer = ({ videoUrl, thumbnail, videoType = 'youtube' }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID based on type
  const getVideoId = (url: string, type: 'youtube' | 'vimeo'): string => {
    if (type === 'youtube') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : '';
    } else if (type === 'vimeo') {
      const regExp = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/;
      const match = url.match(regExp);
      return match ? match[1] : '';
    }
    return '';
  };

  const getEmbedUrl = (url: string, type: 'youtube' | 'vimeo'): string => {
    const videoId = getVideoId(url, type);
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
    } else if (type === 'vimeo') {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return '';
  };

  const embedUrl = getEmbedUrl(videoUrl, videoType);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <AnimatePresence>
        {isLoading && <VideoLoader />}
      </AnimatePresence>

      {isPlaying ? (
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-[#f26a1b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Controls - Only shown when not playing */}
      {/* {!isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-[89.73px] bg-white/90 flex items-center px-4">
          <button 
            onClick={() => setIsPlaying(true)}
            className="w-8 h-8 flex items-center justify-center mr-4"
          >
            <Play className="w-6 h-6 text-[#F26A1B]" />
          </button>
          
          <div className="flex-1 h-1.5 bg-[#E5E7EB] rounded-full mx-4" />
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-lg">
              <Volume2 className="w-5 h-5 text-[#F26A1B]" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-lg">
              <Maximize2 className="w-5 h-5 text-[#F26A1B]" />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};
