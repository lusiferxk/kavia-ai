'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface VideoContextType {
  playingVideoId: string | null;
  pauseAllVideos: () => void;
  setPlayingVideoId: (id: string | null) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const pauseAllVideos = useCallback(() => {
    // This will trigger all video players to pause
    const event = new CustomEvent('pause-all-videos');
    window.dispatchEvent(event);
  }, []);

  const setPlayingVideoIdWrapper = useCallback((id: string | null) => {
    // If a new video is being played, pause all others first
    if (id) {
      pauseAllVideos();
    }
    setPlayingVideoId(id);
  }, [pauseAllVideos]);

  return (
    <VideoContext.Provider value={{ 
      playingVideoId, 
      setPlayingVideoId: setPlayingVideoIdWrapper,
      pauseAllVideos 
    }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}