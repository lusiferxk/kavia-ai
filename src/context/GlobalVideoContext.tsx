// src/context/GlobalVideoContext.tsx
'use client';

import React, { createContext, useContext, useState, useRef } from 'react';

interface GlobalVideoContextType {
  playingVideoId: string | null;
  setPlayingVideoId: (id: string | null, videoElement?: HTMLIFrameElement | null) => void;
  activeVideoElement: HTMLIFrameElement | null;
}

const GlobalVideoContext = createContext<GlobalVideoContextType | undefined>(undefined);

export function GlobalVideoProvider({ children }: { children: React.ReactNode }) {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const activeVideoRef = useRef<HTMLIFrameElement | null>(null);

  const handleVideoChange = (id: string | null, videoElement?: HTMLIFrameElement | null) => {
    // If there's an active video and we're playing a different one, remove the current one
    if (activeVideoRef.current && id !== playingVideoId) {
      // Remove the current iframe
      activeVideoRef.current.src = '';
    }

    // Update the active video reference and ID
    if (videoElement) {
      activeVideoRef.current = videoElement;
    }
    setPlayingVideoId(id);
  };

  return (
    <GlobalVideoContext.Provider 
      value={{ 
        playingVideoId, 
        setPlayingVideoId: handleVideoChange,
        activeVideoElement: activeVideoRef.current
      }}
    >
      {children}
    </GlobalVideoContext.Provider>
  );
}

export function useGlobalVideo() {
  const context = useContext(GlobalVideoContext);
  if (context === undefined) {
    throw new Error('useGlobalVideo must be used within a GlobalVideoProvider');
  }
  return context;
}