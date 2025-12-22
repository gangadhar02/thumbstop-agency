'use client';

import { cn } from "@/lib/utils";

const logos = [
  { src: '/logos/Acemath.png', alt: 'Acemath' },
  { src: '/logos/GS.png', alt: 'GS' },
  { src: '/logos/JustCallpng.png', alt: 'JustCall' },
  { src: '/logos/Logo.png', alt: 'Logo' },
  { src: '/logos/Spotify.png', alt: 'Spotify' },
  { src: '/logos/dojo.png', alt: 'Dojo' },
  { src: '/logos/jetpac.webp', alt: 'Jetpac' },
  { src: '/logos/outskill.png', alt: 'Outskill' },
  { src: '/logos/sivi.png', alt: 'Sivi' },
  { src: '/logos/toi.png', alt: 'Times of India' },
];

export default function TrustedByLogos() {
  return (
    <div className="w-full relative overflow-hidden py-12 lg:py-24">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto w-full">
        <h2 className="mb-8 text-center font-bold text-black text-3xl lg:text-5xl tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Trusted By
        </h2>

        <div className="mx-auto my-8 h-px max-w-sm bg-gray-200 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee-logos">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={`logo-${index}`} className="shrink-0 mx-6 lg:mx-12 flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-10 lg:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 mx-auto h-px max-w-sm bg-gray-200 mask-[linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}

