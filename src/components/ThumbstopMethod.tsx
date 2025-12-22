'use client';

import { useEffect, useRef, useState } from 'react';

const methodSteps = [
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
        ),
        title: 'Initial In-depth Research',
        description: 'We dissect every facet of your customer base and market space, creating a set of archetypes, personas, and avatars that ensure that our future creatives resonate deeply and drive brand growth.'
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
                <circle cx="17" cy="17" r="3" />
                <path d="M17 14v6M14 17h6" />
            </svg>
        ),
        title: 'Creative Strategy',
        description: 'We conceptualize creatives that are not just visually appealing, but strategically poised to sell. Using a mix of data and psychology, we develop concepts that motivate viewers to take action.'
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M2 8h20" />
            </svg>
        ),
        title: 'Real + AI Creative Methodology',
        description: "We use AI to rapidly test concepts and find what resonates—then double down on winners with full production. This test-first approach cuts your ad production costs by 50-60% while ensuring you only invest in creatives that actually perform."
    },

    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 4 4 5-5" />
                <circle cx="20" cy="9" r="2" />
            </svg>
        ),
        title: 'Analysis & Iterations',
        description: "Our creative strategist analyzes each ad using custom metrics to see what worked and what didn't. Based on the analysis, new briefs for iterations and new batches of creatives are prepared for testing."
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Scale',
        description: "By focusing on results, analyzing data, and optimizing for high conversions, we consistently find creatives that are ready to scale. You can relax and focus on your business while we do all the work."
    }
];

export default function ThumbstopMethod() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !timelineRef.current) return;

            const container = containerRef.current;
            const timeline = timelineRef.current;
            const containerRect = container.getBoundingClientRect();

            // Calculate how much of the section is scrolled
            const windowHeight = window.innerHeight;
            const sectionTop = containerRect.top;
            const sectionHeight = containerRect.height;

            // Start progress when section enters viewport
            // Complete when section is about to leave
            const scrollStart = windowHeight * 0.6; // Start when 60% of viewport
            const scrollEnd = -sectionHeight + windowHeight * 0.4; // End near bottom

            if (sectionTop <= scrollStart && sectionTop >= scrollEnd) {
                const totalScrollDistance = scrollStart - scrollEnd;
                const currentScroll = scrollStart - sectionTop;
                const newProgress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
                setProgress(newProgress);
            } else if (sectionTop > scrollStart) {
                setProgress(0);
            } else {
                setProgress(1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="py-12 lg:py-24 px-8 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Left Content */}
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <h2
                            className="text-3xl lg:text-6xl font-black mb-8 leading-[1.1]"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                            The<span className="lg:hidden"> </span><br className="hidden lg:block" />
                            Thumbstop<br />
                            Method
                        </h2>
                        <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed">
                            This is a sneak peek at how we help brands scale through our creatives. Our method strikes the perfect balance using AI for speed and volume, while relying on human judgment to shape the creative that actually connects.
                        </p>
                        <button
                            className="px-6 py-3 font-bold text-base uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_#000000]"
                            style={{ backgroundColor: '#3EFFC1', color: '#000000', borderRadius: '10px' }}
                        >
                            BOOK A CALL
                        </button>
                    </div>

                    {/* Right Content - Stepper Timeline */}
                    <div ref={timelineRef} className="relative">
                        {/* Background track line (gray) */}
                        <div
                            className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gray-200 rounded-full"
                        />

                        {/* Animated progress line (black) - grows on scroll */}
                        <div
                            className="absolute left-[23px] top-6 w-[2px] bg-black rounded-full transition-all duration-100 ease-out"
                            style={{
                                height: `calc(${progress * 100}% - 48px)`,
                                maxHeight: 'calc(100% - 48px)'
                            }}
                        />

                        {/* Steps */}
                        <div className="relative py-8">
                            {methodSteps.map((step, index) => {
                                const isActive = progress >= (index / methodSteps.length);

                                return (
                                    <div
                                        key={index}
                                        className={`relative flex items-start gap-10 pb-16 last:pb-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'
                                            }`}
                                    >
                                        {/* Icon Node */}
                                        <div
                                            className={`relative z-10 shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border-2 border-black transition-all duration-300 ${isActive ? 'scale-100' : 'scale-90'
                                                }`}
                                            style={{ backgroundColor: isActive ? '#3EFFC1' : '#e5e7eb' }}
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-0.5">
                                            <h3
                                                className="text-xl font-bold mb-3"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
