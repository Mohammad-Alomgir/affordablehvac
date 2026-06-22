import { CheckCircle2, ArrowRight } from "lucide-react";

interface MaintenanceProps {
  onCtas: (action: "estimate" | "more") => void;
}

export default function Maintenance({ onCtas }: MaintenanceProps) {
  const points = [
    "Optimize energy efficiency with professional cleaning",
    "Improve indoor air quality — breathe cleaner, healthier air",
    "Extend equipment lifespan and protect your warranty",
    "Prevent costly breakdowns with early detection"
  ];

  const recommendations = [
    {
      title: "Mini Split Cleaning",
      desc: "Deep clean filters, coils & blower wheel"
    },
    {
      title: "Central Heat Pump Service",
      desc: "Coil cleaning, refrigerant check & airflow test"
    },
    {
      title: "Air Exchanger Maintenance",
      desc: "Core cleaning & filter replacement"
    },
    {
      title: "Dryer Vent Cleaning",
      desc: "Lint removal, airflow verification & fire safety check"
    }
  ];

  return (
    <section id="maintenance" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
              ANNUAL MAINTENANCE
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-normal leading-[1.12] mb-6">
              Protect Your Investment With <br />
              <span className="text-[#C41230]">Preventative Care</span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#4a5568] leading-relaxed font-sans max-w-xl">
              Annual maintenance is one of the most important investments you can make in your
              HVAC system. Regular cleaning and servicing help maximize efficiency, improve indoor
              air quality, extend equipment life, and prevent costly repairs.
            </p>

            {/* Bullets array */}
            <div className="mt-8 space-y-4 w-full">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C41230] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-[15px] text-[#4a5568] font-sans leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            {/* Quick CTAs */}
            <div className="mt-10 flex flex-nowrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onCtas("estimate")}
                className="bg-[#C41230] hover:bg-[#a80e27] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white px-8 py-4 rounded-xl text-xs font-display font-bold tracking-[0.18em] uppercase cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#C41230]/10 shrink-0"
              >
                <span>GET FREE ESTIMATE</span>
                <span className="text-sm font-sans">→</span>
              </button>

              <button
                onClick={() => onCtas("more")}
                className="bg-transparent border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 px-8 py-4 rounded-xl text-xs font-display font-bold tracking-[0.18em] uppercase cursor-pointer transition-all flex items-center justify-center shrink-0"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
              
              <h3 className="font-display font-bold text-xl text-slate-900 text-center mb-8 tracking-wide">
                What We Recommend Annually
              </h3>

              {/* Recommendations list */}
              <div className="space-y-4">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100/50 hover:shadow-xs transition-shadow text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C41230] shrink-0" />
                    <div>
                      <h4 className="font-display font-bold text-[16px] text-slate-900 leading-tight">
                        {rec.title}
                      </h4>
                      <p className="text-[12px] text-[#718096] font-sans mt-0.5 leading-tight">
                        {rec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Schedule link */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => onCtas("estimate")}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] uppercase tracking-[0.12em] cursor-pointer transition-colors"
                >
                  <span>Contact Us to Schedule</span>
                  <span className="text-sm font-sans">→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
