'use client';

import { useRef, useEffect, useState } from 'react';

interface LazyVideoProps {
    src: string;
    className?: string;
    poster?: string;
}

export default function LazyVideo({ src, className = '', poster }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(video);
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading slightly before visible
                threshold: 0.1,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current && !hasLoaded) {
            videoRef.current.src = src;
            videoRef.current.load();
            setHasLoaded(true);
        }
    }, [isVisible, src, hasLoaded]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            className={className}
            preload="none"
        />
    );
}
