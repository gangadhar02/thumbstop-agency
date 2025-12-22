'use client';

import { useRef, useState, useEffect } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`video-card relative rounded-2xl overflow-hidden cursor-pointer group ${aspectRatio === 'portrait' ? 'aspect-[9/16]' : 'aspect-square'
        }`}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={isVisible ? videoSrc : undefined}
        muted
        loop
        playsInline
        preload="none"
        className="object-cover w-full h-full"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
