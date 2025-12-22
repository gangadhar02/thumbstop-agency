'use client';

import { useRef, useState } from 'react';

interface VideoCardProps {
  videoSrc: string;
  aspectRatio?: 'portrait' | 'square';
}

export default function VideoCard({
  videoSrc,
  aspectRatio = 'portrait'
}: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayClick = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Play may be blocked by browser
        });
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      ref={containerRef}
      onClick={handlePlayClick}
      className={`video-card relative rounded-2xl overflow-hidden cursor-pointer group ${aspectRatio === 'portrait' ? 'aspect-[9/16]' : 'aspect-square'
        }`}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        playsInline
        preload="metadata"
        onEnded={handleVideoEnded}
        className="object-cover w-full h-full"
      />

      {/* Gradient Overlay - hidden when playing */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Play/Pause Button */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100 group-hover:scale-110'}`}>
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-lg">
          {isPlaying ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
