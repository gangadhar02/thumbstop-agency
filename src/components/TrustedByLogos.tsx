'use client';

export default function TrustedByLogos() {
  return (
    <section className="py-6 lg:py-12">
      <h3 className="text-center text-lg font-semibold mb-8">Trusted By:</h3>

      <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap px-8 opacity-90">

        {/* Nora */}
        <div className="text-3xl font-bold tracking-tight grayscale hover:grayscale-0 transition-all" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Nora</div>

        {/* Lamborghini */}
        <div className="w-12 h-14 grayscale hover:grayscale-0 transition-all">
          <svg viewBox="0 0 100 120" className="w-full h-full" fill="currentColor">
            <path d="M50 0 L90 15 L80 100 L50 120 L20 100 L10 15 Z" fill="#D4AF37" />
            <text x="50" y="60" fontSize="10" textAnchor="middle" fill="black">LOGO</text>
          </svg>
        </div>

        {/* Trimmer Buddy */}
        <div className="text-center grayscale hover:grayscale-0 transition-all leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          <div className="text-xl font-black tracking-tighter">TRIMMER</div>
          <div className="text-xl font-black tracking-tighter">BUDDY™</div>
        </div>

        {/* Swivy */}
        <div className="text-2xl font-bold tracking-tight italic text-blue-600 grayscale hover:grayscale-0 transition-all" style={{ fontFamily: 'var(--font-space-grotesk)' }}>SWIVY</div>

        {/* YouGlam */}
        <div className="flex items-center grayscale hover:grayscale-0 transition-all" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          <span className="text-2xl font-bold tracking-tight">YOU</span>
          <span className="text-2xl font-bold tracking-tight text-pink-500">GLAM</span>
        </div>

        {/* Chiara Ferragni */}
        <div className="flex flex-col items-center grayscale hover:grayscale-0 transition-all" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          <svg width="30" height="20" viewBox="0 0 40 25" className="mb-1">
            <path d="M0 12 Q20 25 40 12 Q20 -1 0 12" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="12" r="5" fill="currentColor" />
            <path d="M5 5 L35 5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" /> {/* Eyelashes abstract */}
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest text-center">Chiara<br />Ferragni</span>
        </div>
      </div>
    </section>
  );
}

