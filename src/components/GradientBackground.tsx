'use client';

import React from 'react';

export default function GradientBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-white pointer-events-none">
            {/* Main Shapes - Normal Blend */}
            <div className="absolute inset-0 filter blur-[120px] mix-blend-normal opacity-70">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
            </div>

            {/* Blending Group - Overlay Blend */}
            <div className="absolute inset-0 filter blur-[120px] mix-blend-overlay opacity-100">
                <div className="shape-4"></div>
                <div className="shape-5"></div>
                <div className="shape-6"></div>
                <div className="shape-7"></div>
                <div className="shape-8"></div>
                <div className="shape-9"></div>
            </div>

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                }}
            ></div>
        </div>
    );
}
