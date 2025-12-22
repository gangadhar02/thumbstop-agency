'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import VideoCard from '@/components/VideoCard';
import TrustedByLogos from '@/components/TrustedByLogos';
import StealthCreatives from '@/components/StealthCreatives';

import CaseStudyCard from '@/components/CaseStudyCard';
import ThumbstopMethod from '@/components/ThumbstopMethod';
import Testimonials from '@/components/Testimonials';
import BookACall from '@/components/BookACall';
import FAQ from '@/components/FAQ';


// Hero section video URLs
// Hero section video URLs
const heroVideos = [
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/9x16%20(1)_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Voxpop-Poolside-9_16%20(1)_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/9x16_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Australia-9_16_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/LinkedIn%209x16_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Voxpop-Beachside-9_16%20(1)_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/MM%20Outskill%20talking%20head%20_Vertical_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Nomad-Podcast-9-16%20(1)_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Script%2003%20(9_16)%20-%20B2B_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/StreetStyle-Nomad-9-16%20(2)_720p_10s_540w.mp4",
  "https://pub-0eb01a0190aa4eb588b4b11f19c469e8.r2.dev/Video%204%20new_720p_10s_540w.mp4",
];

// Showcase section video URLs (full versions)
const showcaseVideos = [
  "https://player.vimeo.com/video/1148660389?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660918?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660430?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660491?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660564?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660874?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660610?api=1&controls=0&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/1148660642?api=1&controls=0&title=0&byline=0&portrait=0",
];


const caseStudies = [
  {
    title: 'AI SaaS $80k to $1M/month in less than a year',
    description: 'In less than a year, we scaled our AI SaaS client from past $1M/month in ad spend while staying profitable.',
    mainStat: '+1200%',
    mainStatLabel: 'Ad Spend',
    stats: [
      { label: 'Spend', value: '$1.05M', change: '+44.68%', isPositive: true },
      { label: 'Trials Started', value: '16.63K', change: '+37.26%', isPositive: true },
      { label: 'Cost per trial started', value: '$62.95', change: '+5.41%', isPositive: false },
      { label: 'Click to trial started', value: '3.87%', change: '-26.91%', isPositive: false },
    ]
  },
  {
    title: 'E-commerce Brand 3x Revenue Growth',
    description: 'We helped this e-commerce brand triple their revenue through strategic ad creative optimization.',
    mainStat: '+300%',
    mainStatLabel: 'Revenue Growth',
    stats: [
      { label: 'Total Revenue', value: '$2.4M', change: '+156%', isPositive: true },
      { label: 'ROAS', value: '4.2x', change: '+89%', isPositive: true },
      { label: 'CPA', value: '$28.50', change: '-42%', isPositive: true },
      { label: 'CTR', value: '2.8%', change: '+67%', isPositive: true },
    ]
  },
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || container.clientWidth;
      const gap = 16; // gap-4 is 1rem = 16px
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 lg:pt-0 lg:pb-16 px-6 lg:px-16 min-h-screen overflow-hidden flex flex-col lg:flex-row items-center">
        {/* Right Video Grid - Vertical Scrolling Marquee - Positioned Absolutely (Desktop Only) */}
        <div className="hidden lg:flex absolute top-[-10%] right-4 lg:right-8 w-[48%] h-[120vh] overflow-hidden gap-4 transform skew-x-0">
          {/* Left Column - Scrolling Down */}
          <div
            className="w-1/2 relative"
            style={{ transform: 'translate3d(0px, -10%, 0px)' }}
          >
            <div className="space-y-4 animate-scroll-down">
              {[...heroVideos.slice(0, 3), ...heroVideos.slice(0, 3)].map((video, index) => (
                <div key={`left-${index}`} className="w-full relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Up */}
          <div
            className="w-1/2 relative"
            style={{ transform: 'translate3d(0px, -5%, 0px)' }}
          >
            <div className="space-y-4 animate-scroll-up">
              {[...heroVideos.slice(3, 6), ...heroVideos.slice(3, 6)].map((video, index) => (
                <div key={`right-${index}`} className="w-full relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overlay Gradient for smooth edge fading */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-transparent to-white/0"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative w-full z-10">
          {/* Content Wrapper */}
          <div className="w-full lg:w-[45%] relative">
            {/* Star Icons */}
            <div className="flex items-start gap-1 mb-8">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" fill="#C9A227" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none" className="mt-3">
                <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" fill="#C9A227" />
              </svg>
            </div>

            <h1
              className="text-3xl lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-tighter text-black"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Get Banger Ads<br />
              That Scale Your Brand
            </h1>

            <p className="text-[18px] text-black mb-8 leading-relaxed font-medium">
              Get high-performing ads that slash your CPA in half.<br />
              Forget about Boring UGC testimonials.<br />
              Get Ads that actually work in 2025.
            </p>

            <div className="flex gap-3 items-center w-full lg:w-auto">
              <a
                href="#book"
                className="flex-1 lg:flex-none px-4 py-3 md:px-8 md:py-4 text-xs md:text-[15px] font-semibold text-white transition-all hover:opacity-90 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center whitespace-nowrap"
                style={{ backgroundColor: '#ff09b8', color: '#FFFFFF', borderRadius: '10px' }}
              >
                BOOK A CALL
              </a>
              <button
                className="flex-1 lg:flex-none px-4 py-3 md:px-8 md:py-4 text-xs md:text-[15px] font-semibold border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#000000] text-center whitespace-nowrap"
                style={{ borderRadius: '10px' }}
              >
                CASE STUDIES
              </button>
            </div>

            {/* Mobile-Only Hero Video Marquee */}
            <div className="lg:hidden w-[calc(100%+3rem)] -mx-6 mt-10 overflow-hidden relative">
              <div className="flex gap-4 animate-scroll-left w-max">
                {[...heroVideos, ...heroVideos].map((video, index) => (
                  <div key={`mobile-marquee-${index}`} className="w-[180px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-2 border-black relative">
                    <div className="absolute inset-0 bg-transparent z-10"></div> {/* Overlay to prevent interaction */}
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Green Star Desktop Position */}
            <div className="hidden lg:block mt-12 ml-[320px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" fill="#3EFFC1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Border */}
      < div className="w-full border-t border-black" ></div >

      {/* Trusted By Section */}
      < TrustedByLogos />

      {/* Stealth Creatives Section */}
      < StealthCreatives />

      {/* Video Showcase Grid */}
      <section className="py-8 lg:py-16 px-4 md:px-8 relative">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[...showcaseVideos, ...showcaseVideos].slice(0, 8).map((video, index) => (
                <div key={`showcase-${index}`}>
                  <VideoCard
                    videoSrc={video}
                    aspectRatio="portrait"
                  />
                </div>
              ))}
            </div>

            {/* Frosted Fade Overlay - Smooth gradient at bottom with rounded corners */}
            <div
              className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)',
              }}
            ></div>
          </div>

          {/* Watch All Videos Button */}
          <div className="flex justify-center mt-4 relative z-20">
            <button
              className="px-8 py-4 font-bold text-base uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_#000000]"
              style={{ backgroundColor: '#3EFFC1', color: '#000000', borderRadius: '10px' }}
            >
              WATCH ALL VIDEOS
            </button>
          </div>
        </div>
      </section >

      {/* Case Studies Section - Hidden for now */}
      {/*
      <section className="py-8 lg:py-16 px-0 md:px-8 relative">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 text-black px-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Latest Case Studies</h2>

        <div className="relative max-w-[1400px] mx-auto">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto lg:overflow-hidden snap-x snap-mandatory gap-4 px-4 md:px-0 pb-8 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {caseStudies.map((study, index) => (
              <div key={index} className="w-[85vw] md:w-full flex-shrink-0 snap-center">
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center px-4 md:px-0">
            <div className="flex gap-4 w-full justify-end">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-14 h-14 rounded-full bg-black text-white border-2 border-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#000000] hover:bg-[#3EFFC1] hover:text-black group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7 7-7 M3 12h18" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-14 h-14 rounded-full bg-black text-white border-2 border-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#000000] hover:bg-[#3EFFC1] hover:text-black group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7 M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Thumbstop Method Section */}
      < ThumbstopMethod />

      {/* Testimonials Section */}
      < Testimonials />

      {/* Book A Call Section */}
      < BookACall />

      {/* FAQ Section */}
      < FAQ />

      {/* Footer */}
      < footer className="py-8 lg:py-16 px-8 border-t border-gray-200" >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10 lg:gap-0">
            <div className="w-full lg:w-auto">
              <img
                src="/logos/thumbstop.png"
                alt="Thumbstop logo"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-600 max-w-md mb-6">
                Get high-performing ads that scale your brand.
                We create stealth creatives that convert.
              </p>
              <a
                href="#book"
                className="inline-block px-6 py-3 font-bold text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_#000000]"
                style={{ backgroundColor: '#ff09b8', color: '#FFFFFF', borderRadius: '10px' }}
              >
                BOOK A CALL
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 w-full lg:w-auto">
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Ad Creatives</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Paid Advertising</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Strategy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">© 2025 Thumbstop. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}
