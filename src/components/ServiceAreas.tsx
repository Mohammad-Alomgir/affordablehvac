import { useState } from "react";
import { Navigation, X, Phone, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { serviceAreasData } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ServiceAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const getAreaDetails = (name: string) => {
    switch (name) {
      case "Riverview":
        return {
          response: "Within 2 - 4 Hours",
          technicians: "Local On-Duty Team Available",
          status: "Fully Active",
          desc: "Our primary hub. We have service trucks circulating Riverview daily, ready to handle split cleanings, compressor repairs, and diagnostic checks with industry-best response times."
        };
      case "Moncton":
        return {
          response: "Within 2 - 4 Hours",
          technicians: "On-Call Emergency Squad",
          status: "Fully Active",
          desc: "Serving both residential neighborhoods and light commercial sites across Moncton. E&A is known for quick diagnostic appointments and transparent local rates here."
        };
      case "Dieppe":
        return {
          response: "Within 2 - 4 Hours",
          technicians: "Local Senior Techs",
          status: "Fully Active",
          desc: "Full heat pump installations and complete ventilation audits are available daily across Dieppe. We operate clean, tidy, and provide bilingually friendly diagnostics."
        };
      default:
        return {
          response: "Within 24 Hours / Scheduled",
          technicians: "Regional Dispatch System",
          status: "Standard Support",
          desc: "We regularly service active accounts in our outer New Brunswick communities. Our teams coordinate visits strategically to keep service costs transparent and competitive."
        };
    }
  };

  const currentDetails = activeArea ? getAreaDetails(activeArea) : null;

  const handleCtaClick = () => {
    const el = document.getElementById("quote");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="service-areas" className="py-24 bg-slate-100 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Concentric Radar Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-300/30 border-dashed rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-slate-300/30 border-dashed rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-slate-300/30 border-dashed rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border border-slate-300/30 border-dashed rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
            SERVICE AREAS
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-normal leading-[1.12]">
            Proudly Serving <span className="text-[#C41230]">New Brunswick</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
            We're local — and we're everywhere you need us. Fast response times across Riverview,
            Moncton, Dieppe, and the entire Greater Moncton area.
          </p>
        </div>

        {/* 3-Column Centered Pill Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {serviceAreasData.map((area) => (
            <button
              key={area.name}
              onClick={() => setActiveArea(area.name)}
              className="bg-slate-200/50 hover:bg-slate-200 hover:scale-[1.02] border border-slate-300/60 hover:border-slate-300 p-5 rounded-2xl flex items-center justify-between text-left group transition-all duration-300 cursor-pointer w-full select-all"
              id={`area-card-${area.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center">
                {/* Arrow Pointer Icon slanting up-right */}
                <Navigation 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    area.isPrimary ? "text-[#C41230]" : "text-slate-450 group-hover:text-slate-900"
                  }`} 
                />
                <span className="font-display font-bold text-[18px] text-slate-900 tracking-wide ml-4">
                  {area.name}
                </span>
              </div>

              {/* Primary Pill Badge */}
              {area.isPrimary && (
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C41230] bg-[#C41230]/10 border border-[#C41230]/20 px-2.5 py-1 rounded-md">
                  PRIMARY
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Centered CTA Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2.5 border border-slate-300 hover:border-slate-400 bg-slate-200/50 hover:bg-slate-200 text-slate-800 px-10 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>VIEW ALL SERVICE AREAS</span>
            <span className="text-sm font-sans">→</span>
          </button>
        </div>
      </div>

      {/* Fully Functional Detail Modal Dialog */}
      <AnimatePresence>
        {activeArea && currentDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left z-10 text-slate-900 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-[#C41230] to-red-650" />

              {/* Close Button */}
              <button
                onClick={() => setActiveArea(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C41230]/10 flex items-center justify-center text-[#C41230] border border-[#C41230]/20">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 tracking-wide">
                    {activeArea} Dispatch
                  </h3>
                  <p className="text-xs text-slate-555 mt-0.5">Coverage Station Details</p>
                </div>
              </div>

              {/* Sub-status tag */}
              <div className="mb-6 flex items-center justify-between bg-slate-100 py-1.5 px-3 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Network Status</span>
                <span className="text-[10px] uppercase font-mono font-bold text-[#C41230] bg-[#C41230]/10 px-2 py-0.5 rounded-sm">
                  {currentDetails.status}
                </span>
              </div>

              {/* Desc */}
              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                {currentDetails.desc}
              </p>

              {/* Structured Info */}
              <div className="space-y-3.5 mb-8">
                <div className="flex justify-between items-center bg-slate-100 px-4.5 py-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C41230]" />
                    <span className="text-xs text-slate-655 font-sans font-medium">Response Time</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 font-mono">{currentDetails.response}</span>
                </div>
                <div className="flex justify-between items-center bg-slate-100 px-4.5 py-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C41230]" />
                    <span className="text-xs text-slate-655 font-sans font-medium">Coverage Staff</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 font-mono">{currentDetails.technicians}</span>
                </div>
              </div>

              {/* Direct Booking action */}
              <div className="border-t border-slate-200 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-sans font-bold">Need Emergency Help?</p>
                  <a
                    href="tel:5062910594"
                    className="text-slate-900 hover:text-[#C41230] font-display font-bold text-[16px] tracking-wide block mt-1 transition-colors select-all"
                  >
                    (506) 291-0594
                  </a>
                </div>
                <button
                  onClick={() => {
                    setActiveArea(null);
                    handleCtaClick();
                  }}
                  className="bg-[#C41230] hover:bg-[#a80e27] text-white rounded-lg px-4 py-2.5 text-xs font-display font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Book Dispatch
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

