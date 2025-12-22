'use client';

import { useEffect } from 'react';

export default function BookACall() {
    useEffect(() => {
        // Load Cal.com embed script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "performance-creatives-discovery-call", {origin:"https://app.cal.com"});
      
      Cal.ns["performance-creatives-discovery-call"]("inline", {
        elementOrSelector:"#my-cal-inline-performance-creatives-discovery-call",
        config: {"layout":"month_view","theme":"light"},
        calLink: "gangadhar.s/performance-creatives-discovery-call",
      });
      
      Cal.ns["performance-creatives-discovery-call"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    `;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="book" className="py-12 lg:py-24 px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="lg:sticky lg:top-32">
                        {/* Icon */}
                        <div className="mb-8">
                            <img
                                src="/book-doodle.svg"
                                alt="Book a call doodle"
                                className="w-16 h-16"
                            />
                        </div>

                        <h2
                            className="text-4xl lg:text-5xl font-black mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)', color: '#E91E8C' }}
                        >
                            Book a call, let&apos;s scale
                        </h2>

                        <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed">
                            In the call we&apos;ll discuss your brand&apos;s objectives and how we can help your brand grow with our creative process.
                        </p>

                        <button
                            className="px-8 py-4 font-bold text-base uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_#000000]"
                            style={{ backgroundColor: '#ff09b8', color: '#FFFFFF', borderRadius: '10px' }}
                        >
                            BOOK A CALL HERE
                        </button>
                    </div>

                    {/* Right Content - Calendar Embed */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden min-h-[600px]">
                        <div
                            id="my-cal-inline-performance-creatives-discovery-call"
                            style={{ width: '100%', height: '600px', overflow: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
