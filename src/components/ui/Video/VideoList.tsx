// src/components/ui/video/VideoList.tsx
import { Video } from '@/data/videos';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};


export default VideoList;
