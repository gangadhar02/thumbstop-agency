'use client';

interface CaseStudyStats {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  chartType?: 'line' | 'bar';
}

interface CaseStudyCardProps {
  title: string;
  description: string;
  mainStat: string;
  mainStatLabel: string;
  stats: CaseStudyStats[];
}

export default function CaseStudyCard({
  title,
  description,
  mainStat,
  mainStatLabel,
  stats
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-black flex flex-col md:flex-row gap-8 md:gap-16 w-full">
      {/* Visual / Dashboard Side */}
      <div className="w-full md:w-[55%] flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full shadow-inner">
          {/* Use a grid for the 4 stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">{stat.value}</span>
                    <span className={`text-[10px] font-bold ${stat.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} px-1.5 py-0.5 rounded`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                {/* Mini Chart Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-50">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d={idx % 2 === 0
                        ? "M0,35 Q25,10 50,30 T100,20 L100,40 L0,40 Z"
                        : "M0,30 Q30,35 60,10 T100,30 L100,40 L0,40 Z"}
                      fill={idx % 2 === 0 ? "#E0F2FE" : "#F3E8FF"}
                      stroke="none"
                    />
                    <path
                      d={idx % 2 === 0
                        ? "M0,35 Q25,10 50,30 T100,20"
                        : "M0,30 Q30,35 60,10 T100,30"}
                      fill="none"
                      stroke={idx % 2 === 0 ? "#38BDF8" : "#A855F7"}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {title}
        </h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
          {description}
        </p>

        <div className="mb-8">
          <div className="text-5xl font-black mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>{mainStat}</div>
          <div className="text-gray-500 font-medium">{mainStatLabel}</div>
        </div>

        <button
          className="w-fit px-5 py-2 font-bold text-base uppercase whitespace-nowrap transition-all border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          style={{ backgroundColor: '#FFD277', color: '#000000', fontFamily: 'var(--font-space-grotesk)', borderRadius: '10px' }}
        >
          READ CASE STUDY
        </button>
      </div>
    </div>
  );
}
