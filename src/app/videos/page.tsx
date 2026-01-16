'use client';

import Navbar from '@/components/Navbar';
import VideoCard from '@/components/VideoCard';

// All showcase video URLs
const allVideos = [
    "https://player.vimeo.com/video/1148660918?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149653449?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149654849?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1148660874?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1148660610?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1148660642?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149653493?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1148660491?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149654905?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149654881?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1149654860?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1154945747?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1154946200?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1154945943?api=1&controls=0&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1154946332?api=1&controls=0&title=0&byline=0&portrait=0",
];

export default function VideosPage() {
    return (
        <div className="min-h-screen gradient-bg">
            <Navbar />

            {/* Videos Grid Section */}
            <section className="pt-32 pb-16 px-6 lg:px-16">
                <div className="max-w-[1600px] mx-auto">
                    <h1
                        className="text-3xl lg:text-5xl font-bold text-center mb-12 text-black"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                        Our Work
                    </h1>

                    {/* 5 Column Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {allVideos.map((video, index) => (
                            <div key={`video-${index}`}>
                                <VideoCard
                                    videoSrc={video}
                                    aspectRatio="portrait"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
