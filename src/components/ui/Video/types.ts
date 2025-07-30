// src/components/ui/video/types.ts
export interface VideoCardProps {
    video: Video;
  }
  
  export interface VideoListProps {
    videos: Video[];
    itemsPerPage?: number;
  }