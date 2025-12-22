'use client';

const testimonials = [
    {
        logo: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/65858d45864284f7b89df18f_fler%20logo.png',
        category: 'Beauty & Personal Care',
        quote: '"Working with Thumbstop has been amazing. They deliver creatives that actually work. Simple process, fast delivery, and our sales have gone up. Their ads make a difference and the cost is worth it. I\'d definitely recommend them."',
        clientImage: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/65858d9920a18a8e795a6923_Matteo%20Landi.jpg',
        clientName: 'Matteo Landi',
        clientTitle: 'Media Buyer, Fler'
    },
    {
        logo: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/656f388b065cec16cb63d4b5_logo%20bau.png',
        category: 'Pet',
        quote: '"We worked with the Thumbstop Team for our campaigns and we would highly recommend it. They got everything right, from creative strategy to finding the perfect talent and angles. They understood our brand messaging and were able to help us scale our revenue by 10x in just 3 months. Definitely the best creative agency out there."',
        clientImage: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/658590a5e542d333c49680ef_andrea%20bianchi.jpg',
        clientName: 'Andrea Bianchi',
        clientTitle: 'Founder & CEO of Bau Cosmesi'
    },
    {
        logo: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/66032d6ca7f1ea772a251acb_valkental%20logo.png',
        category: 'Sporting Goods',
        quote: '"Thumbstop has enabled me to dedicate more time to our product and site optimization. For those brand owners who struggle with media-buying and/or creatives, partnering with them is a must. They have saved me some much time while scaling my brand to another level."',
        clientImage: 'https://cdn.prod.website-files.com/6551f30727effbd696a2cc6b/66032eb02f452a1cbda4cce5_Antonio-Detering.png',
        clientName: 'Antonio Detering',
        clientTitle: 'Founder of Valkental'
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
                    What do they say?
                </h2>
                <p className="text-lg text-gray-700 font-semibold">
                    Hear From Our Satisfied Partners
                </p>
            </div>

            {/* Horizontal Scrolling Testimonials Marquee */}
            <div className="w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll-left w-max">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col"
                        >
                            {/* Logo & Category */}
                            <div className="mb-6">
                                <div className="mb-3">
                                    <img
                                        src={testimonial.logo}
                                        alt={`${testimonial.clientName} company logo`}
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    {testimonial.category}
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="flex-1 mb-8">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                                    <img
                                        src={testimonial.clientImage}
                                        alt={testimonial.clientName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p
                                        className="font-bold text-lg"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                    >
                                        {testimonial.clientName}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {testimonial.clientTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
