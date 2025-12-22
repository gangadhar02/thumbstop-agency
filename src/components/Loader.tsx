'use client';

import { useState, useEffect } from 'react';

const quotes = [
    "Stop the Scroll.",
    "Make them Stare.",
    "Scale your Brand.",
    "Thumbstop."
];

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // 900ms per slide * 4 slides = 3600ms total
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                if (index < quotes.length - 1) {
                    setIndex((prev) => prev + 1);
                    setFade(true);
                } else {
                    clearInterval(interval);
                    // Start exit animation
                    setIsExiting(true);
                    // Unmount after fade out completes
                    setTimeout(() => {
                        onFinish();
                    }, 500);
                }
            }, 300);

        }, 900);

        return () => clearInterval(interval);
    }, [index, onFinish]);

    return (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            {/* Animated Text */}
            <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-500 transform ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                    }`}
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
                {/* Color accent for the last word (Brand Name) */}
                {index === quotes.length - 1 ? (
                    <span className="text-[#3EFFC1]">{quotes[index]}</span>
                ) : (
                    quotes[index]
                )}
            </h1>

            {/* Progress Bar (Creative Marketing Element) */}
            <div className="absolute bottom-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-linear-to-r from-[#ff09b8] to-[#3EFFC1] w-full origin-left animate-loader-progress"
                    style={{ animationDuration: '3600ms' }}
                />
            </div>
        </div>
    );
}
