'use client';

import { useEffect } from 'react';

export default function BookACall() {
    useEffect(() => {
        // Load Cal.com embed script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "performance-creatives-discovery-call", {origin:"https://app.cal.com"});

      Cal.ns["performance-creatives-discovery-call"]("inline", {
        elementOrSelector:"#my-cal-inline-performance-creatives-discovery-call",
        config: {"layout":"month_view","theme":"dark"},
        calLink: "gangadhar.s/performance-creatives-discovery-call",
      });

      Cal.ns["performance-creatives-discovery-call"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    `;
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="book" className="py-12 lg:py-24 px-4 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Centered Header */}
                <div className="text-center mb-8">
                    <h2
                        className="text-4xl lg:text-5xl font-black mb-4 leading-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)', color: '#E91E8C' }}
                    >
                        Book a call, let&apos;s scale
                    </h2>

                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        In the call we&apos;ll discuss your brand&apos;s objectives and how we can help your brand grow with our creative process.
                    </p>
                </div>

                {/* Calendar Embed Below - No extra wrapper padding */}
                <div
                    id="my-cal-inline-performance-creatives-discovery-call"
                    style={{ width: '100%', height: '100%', overflow: 'scroll', minHeight: '650px' }}
                />
            </div>
        </section>
    );
}
