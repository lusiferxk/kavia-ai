'use client';

interface MobileVideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  variant: string;
  isPlaying: boolean;
  showThumbnail: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  videoRef: React.RefObject<HTMLVideoElement>;
  isDragging: boolean;
  onPlayPause: () => void;
  formatTime: (time: number) => string;
  onLoadStart: () => void;
  onLoadedData: () => void;
  onPlay: () => void;
  onPause: () => void;
  onTimeUpdate: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
}

export const MobileVideoPlayer: React.FC<MobileVideoPlayerProps> = ({ 
  videoUrl, 
  thumbnail,
  variant, 
  isPlaying, 
  showThumbnail,
  isLoading,
  currentTime,
  duration,
  videoRef,
  isDragging,
  onPlayPause,
  formatTime,
  onLoadStart,
  onLoadedData,
  onPlay,
  onPause,
  onTimeUpdate
}) => {
  return (
    <div className="w-full h-[280px] sm:hidden">
      <div className="w-full h-[200px] relative bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          playsInline={true}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="metadata"
          controlsList="nodownload"
          disablePictureInPicture
          onLoadStart={onLoadStart}
          onLoadedData={onLoadedData}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {isLoading && !showThumbnail && (
          <div className="absolute inset-0 flex items-center justify-center">
            <VideoLoader variant={variant} />
          </div>
        )}

        {showThumbnail && (
          <div 
            className="absolute inset-0 cursor-pointer bg-cover bg-center z-20"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={onPlayPause}
          />
        )}
      </div>

   
    </div>
  );
};