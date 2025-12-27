'use client';

import { useEffect, useRef, useState } from 'react';
import { Search } from '@/components/animate-ui/icons/search';
import { Lightbulb } from '@/components/animate-ui/icons/lightbulb';
import { Clapperboard } from '@/components/animate-ui/icons/clapperboard';
import { ChartColumnIncreasing } from '@/components/animate-ui/icons/chart-column-increasing';
import { ChartLine } from '@/components/animate-ui/icons/chart-line';

const methodSteps = [
    {
        iconType: 'search',
        title: 'Initial In Depth Research',
        description: 'We dissect every facet of your customer base and market landscape, building clear archetypes, personas, and messaging angles. This foundation ensures every AI generated creative resonates deeply and is rooted in proven conversion principles.'
    },
    {
        iconType: 'lightbulb',
        title: 'Creative Strategy',
        description: 'AI is the tool, not the strategy. With 4+ years of experience scaling brands on paid and organic channels, we design concepts based on what actually drives attention, clicks, and conversions. Every idea is grounded in human psychology, platform dynamics, and performance data.'
    },
    {
        iconType: 'clapperboard',
        title: 'AI Creative Production Methodology',
        description: "We use AI to rapidly produce, test, and iterate high volume creative variations at a fraction of traditional costs. This AI first approach allows us to explore more angles, formats, and hooks while maintaining quality and performance. You get faster learning cycles, lower production spend, and ads built to scale."
    },
    {
        iconType: 'chartColumn',
        title: 'Analysis & Iteration',
        description: "Each creative is analyzed using performance metrics that matter. Winning patterns are identified, refined, and redeployed into new AI generated iterations, ensuring constant improvement without creative fatigue."
    },
    {
        iconType: 'chartLine',
        title: 'Scale',
        description: "Once winning concepts are identified, we scale using AI generated creatives optimized for efficiency and consistency. You benefit from lower costs, faster execution, and a system designed to grow with your ad spend while we handle the creative engine."
    }
];

const IconComponent = ({ iconType, isActive }: { iconType: string; isActive: boolean }) => {
    const iconProps = {
        size: 28,
        className: "text-black",
        animate: isActive as boolean,
    };

    switch (iconType) {
        case 'search':
            return <Search {...iconProps} />;
        case 'lightbulb':
            return <Lightbulb {...iconProps} />;
        case 'clapperboard':
            return <Clapperboard {...iconProps} />;
        case 'chartColumn':
            return <ChartColumnIncreasing {...iconProps} />;
        case 'chartLine':
            return <ChartLine {...iconProps} />;
        default:
            return null;
    }
};

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
                                            <IconComponent iconType={step.iconType} isActive={isActive} />
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
