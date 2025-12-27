export default function StealthCreatives() {
    return (
        <section className="py-12 lg:py-24 px-8 lg:px-16 container-medium mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">

                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    {/* Star Icon */}
                    <div className="mb-6 text-[#E91E8C]">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-[#E91E8C] lg:whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Why AI Creatives<br className="lg:hidden" /> Are Essential
                    </h2>

                    <div className="space-y-6 text-base lg:text-lg text-black font-medium leading-relaxed mb-10">
                        <p>
                            In 2026, creative is no longer just an advantage. It is the growth engine on paid social. As CPMs rise and attention drops, AI powered creatives give you the speed, volume, and variation needed to scale without burning budget.
                        </p>
                        <p>
                            We can create podcast clips, street interviews, reactive moments, and native short form formats that feel organic, diverse, and endlessly fresh using AI. Exactly the kind of creative Andromeda is built to push.
                        </p>
                    </div>

                    <button
                        className="px-8 py-4 text-[15px] font-bold text-white transition-all hover:opacity-90 border-2 border-black shadow-[4px_4px_0px_0px_#000000]"
                        style={{ backgroundColor: '#ff09b8', borderRadius: '10px' }}
                    >
                        BOOK A CALL
                    </button>
                </div>

                {/* Right Content - Video Mockup */}
                <div className="w-full lg:w-1/2">
                    <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-black bg-gray-100 flex items-center justify-center relative bg-white p-4">
                        {/* Simple Browser/App Window Frame Decoration if feasible, or just the video container */}
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                            <video
                                src="/videos/Stealth.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
