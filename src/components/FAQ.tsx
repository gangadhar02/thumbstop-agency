'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'Why should we invest in ad creatives?',
        answer: 'Investing in professional ad creatives ensures your brand communicates its message effectively, engaging your audience with high-quality content that drives results by converting and scales your presence in the market.'
    },
    {
        question: 'How does the production process accommodate brand revisions?',
        answer: 'Our process is collaborative and flexible, allowing for revisions at multiple stages. We work closely with you to refine and perfect the creatives to ensure they align with your vision and objectives. This is helped by the initial objective setting stage, where we align our objectives.'
    },
    {
        question: 'What metrics do you use to assess the performance of the creatives?',
        answer: 'We take a look at both amount spent and ROAS. These help us indicate what ads are categorized as "winners" and ultimately are correlated to your revenue and profit. We use other metrics to create variations later on.'
    },
    {
        question: 'Is it possible to submit our own scripts or concepts for the ads?',
        answer: "Yes, we welcome your scripts, concepts, and previous customer research. Our team can polish and adapt your initial ideas to maximize impact and conversions while staying true to your brand's voice."
    },
    {
        question: 'Can we integrate influencer partnerships into our marketing strategy?',
        answer: 'Absolutely, we can seamlessly incorporate influencer collaborations into your marketing strategy to amplify your reach and resonate with your target audience authentically.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 lg:py-24 px-8">
            <div className="max-w-[800px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Squiggle Icon */}
                    <div className="flex justify-center mb-4">
                        <svg className="w-20 h-12" viewBox="0 0 80 40" fill="none" stroke="#3EFFC1" strokeWidth="4" strokeLinecap="round">
                            <path d="M5 20 Q15 5, 25 20 T45 20 T65 20 T75 15" />
                        </svg>
                    </div>

                    <h2
                        className="text-5xl lg:text-6xl font-black mb-4"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                        FAQs
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Explore our FAQs to quickly find answers to your questions about our creative services and processes
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
                            >
                                <h3
                                    className="text-base lg:text-lg font-bold pr-4"
                                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                >
                                    {faq.question}
                                </h3>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border-2 border-black transition-all duration-300 ${openIndex === index ? 'bg-[#3EFFC1] rotate-0' : 'bg-white rotate-0'
                                        }`}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer - Animated */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-8 pb-6">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
