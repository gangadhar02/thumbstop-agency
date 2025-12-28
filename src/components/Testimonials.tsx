'use client';

import Image from 'next/image';

const testimonials = [
    {
        quote: "Most people wait for a brief. Gangadhar comes back with insights we hadn't even considered. His strategic thinking elevates the work before production even starts. We've seen a measurable lift in engagement, and the creative direction is always spot on.",
        clientName: 'Leepakshi',
        clientTitle: 'Marketing Strategist',
        logo: '/logos/180-degrees-consulting.png',
        clientImage: '/Avatars/Leepakshi.jpeg',
        category: 'Agency'
    },
    {
        quote: "Turnaround times that don't make sense for the quality he delivers. We stopped double-checking his work, it just lands. Working with him has simplified our entire process, allowing us to focus on scaling while he handles the heavy lifting on creative.",
        clientName: 'Avnee Gupta',
        clientTitle: 'Founder\'s Office',
        logo: '/logos/schbang.jpg',
        clientImage: '/Avatars/Avnee.jpeg',
        category: 'Agency'
    },
    {
        quote: "I've seen him pick up tools and workflows in days that take most people weeks. He stays ahead of the curve without making it a personality. The efficiency he brings to the table is unmatched, and the results speak for themselves. High-quality output at speed.",
        clientName: 'Ganesh Kanade',
        clientTitle: 'Head of Content Marketing',
        logo: '/logos/GS.png',
        clientImage: '/Avatars/Ganesh.png',
        category: 'EdTech'
    },
    {
        quote: "We ran his AI ads against our live-action creatives. Same ROAS. AI-generated video performing on par with traditional production. Let that sink in. It's completely changed how we view ad production, faster, cheaper, but without sacrificing any performance.",
        clientName: 'Rohit Kumar',
        clientTitle: 'Founder',
        logo: '/logos/dojo.png',
        clientImage: '/Avatars/Rohit.png',
        category: 'Agency'
    },
    {
        quote: "Gangadhar's AI-generated ads are actually performing better than a few of our real ads. The level of detail and realism is incredible. We've been able to test more angles and scale winning concepts much faster than with traditional shoots.",
        clientName: 'Mihir',
        clientTitle: 'Media Buyer',
        logo: '/logos/demandlane-logo-CREr587b.svg',
        clientImage: '/Avatars/mihir.jpeg',
        category: 'Media Buying'
    },
    {
        quote: "Damn, this looks unnaturally natural and non-AI. Generationally better than earlier. It's not just about the tech, it's the creative strategy behind it. We're seeing better retention and conversion rates because the content genuinely resonates with our audience.",
        clientName: 'Aryaman',
        clientTitle: 'Media Buyer',
        logo: '/logos/dojo.png',
        clientImage: '/Avatars/Aryaman.png',
        category: 'Agency'
    }
];

export default function Testimonials() {
    return (
        <section className="py-12 lg:py-24">
            {/* Section Header */}
            <div className="text-center mb-8 lg:mb-16 px-8">
                <h2
                    className="text-3xl lg:text-6xl font-black mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                    What do people say?
                </h2>
            </div>

            {/* Horizontal Scrolling Testimonials Marquee */}
            <div className="w-full overflow-hidden">
                <div className="flex gap-6 animate-marquee-testimonials pause-on-hover w-max">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[320px] md:w-[380px] shrink-0 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-start text-left"
                        >
                            {/* Logo & Category (only if logo exists) */}
                            {testimonial.logo ? (
                                <div className="mb-6 w-full">
                                    <div className="mb-3 h-10 flex items-center">
                                        <Image
                                            src={testimonial.logo}
                                            alt={`${testimonial.clientName} company logo`}
                                            width={120}
                                            height={40}
                                            className="h-full w-auto object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    {testimonial.category && (
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {testimonial.category}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                /* Spacer to keep alignment if needed, or remove to let content flow */
                                <div className="mb-6 w-full h-[68px]" />
                            )}

                            {/* Quote */}
                            <div className="flex-1 mb-8">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
                                    {testimonial.clientImage ? (
                                        <Image
                                            src={testimonial.clientImage}
                                            alt={testimonial.clientName}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {testimonial.clientName.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p
                                        className="font-bold text-lg leading-tight"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                    >
                                        {testimonial.clientName}
                                    </p>
                                    {testimonial.clientTitle && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {testimonial.clientTitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
