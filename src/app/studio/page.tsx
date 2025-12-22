'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function StudioPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
            }, 3000); // Simulate submission feedback
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 lg:px-16 container mx-auto text-center relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
                    <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#3EFFC1] opacity-20 blur-[100px]" />
                    <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#ff09b8] opacity-15 blur-[100px]" />
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        ✨ JOIN THE WAITLIST
                    </span>
                </div>

                <h1
                    className="text-5xl lg:text-[80px] font-bold leading-[1.1] mb-6 tracking-tighter text-black max-w-5xl mx-auto"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                    Scale with <span className="text-white px-2 bg-blue-600 rounded-lg transform -rotate-1 inline-block">AI Speed</span>,<br />
                    Connect with <span className="text-white px-2 bg-orange-500 rounded-lg transform rotate-1 inline-block">Human Trust</span>
                </h1>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    The only platform that combines instant AI video generation with a vetted marketplace of top-tier UGC creators. Why compromise?
                </p>

                {/* Email Capture Form */}
                <div className="max-w-md mx-auto relative z-10">
                    {isSubmitted ? (
                        <div className="bg-[#3EFFC1] text-black border-2 border-black p-4 rounded-xl font-bold text-center shadow-[4px_4px_0px_0px_#000000]">
                            Thanks! You're on the list. 🚀
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="flex-1 px-5 py-4 rounded-xl border-2 border-black focus:outline-none focus:ring-0 text-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_#000000] transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 font-bold text-base uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_0px_#000000] bg-black text-white rounded-xl whitespace-nowrap active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                            >
                                Join Waitlist
                            </button>
                        </form>
                    )}
                    <p className="text-sm text-gray-500 mt-4">
                        🔥 Join 800+ marketers on the waitlist.
                    </p>
                </div>

            </section>

            {/* Footer */}
            <footer className="py-8 lg:py-16 px-8 border-t border-gray-200">
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

                        <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
                            <h4 className="font-bold mb-4 text-lg">Subscribe to our newsletter</h4>
                            <p className="text-gray-600 mb-4 text-sm w-full lg:text-right whitespace-nowrap">
                                Get creative and AI insights delivered to your inbox.
                            </p>
                            <form className="flex w-full max-w-sm items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-0 text-sm"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 font-bold text-sm uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_0px_#000000] bg-[#3EFFC1] text-black rounded-lg whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
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
            </footer>
        </div>
    );
}
