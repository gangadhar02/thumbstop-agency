'use client';

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
    <section className="py-6 lg:py-12 overflow-hidden">
      <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8 text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Trusted By:</h3>

      <div className="relative w-full">
        <div className="flex animate-marquee-logos">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={`logo-${index}`} className="shrink-0 mx-6 lg:mx-12">
              <img src={logo.src} alt={logo.alt} className="h-10 lg:h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

