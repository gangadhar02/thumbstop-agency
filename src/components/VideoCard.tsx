'use client';

import { useRef, useState, useEffect } from 'react';

interface VideoCardProps {
  videoSrc: string;
  aspectRatio?: 'portrait' | 'square';
  tag?: string;
}

export default function VideoCard({
  videoSrc,
  aspectRatio = 'portrait',
  tag
}: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if source is a Vimeo URL
  const isVimeo = videoSrc.includes('vimeo.com');

  // Lazy load with IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(container);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading before visible
        threshold: 0.1,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayClick = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }

    if (isVimeo) {
      // Vimeo Player API via postMessage
      if (iframeRef.current && iframeRef.current.contentWindow) {
        if (isPlaying) {
          iframeRef.current.contentWindow.postMessage('{"method":"pause"}', '*');
          setIsPlaying(false);
        } else {
          iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
          setIsPlaying(true);
        }
      }
    } else {
      // Standard HTML5 Video
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
      {/* Placeholder before loading */}
      {!isVisible && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Video Background - Only load when visible */}
      {isVisible && (
        <>
          {isVimeo ? (
            <iframe
              ref={iframeRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              allow="autoplay; fullscreen; picture-in-picture"
              frameBorder="0"
              title="Vimeo Video"
              loading="lazy"
            />
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              loop
              playsInline
              preload="metadata"
              onEnded={handleVideoEnded}
              className="object-cover w-full h-full"
            />
          )}
        </>
      )}

      {/* Gradient Overlay - hidden when playing */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Tag Badge */}
      {tag && (
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg z-20 pointer-events-none">
          {tag}
        </div>
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
