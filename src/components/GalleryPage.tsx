import { useState } from "react";
import { MapPin, Phone, ArrowRight, ArrowLeftRight } from "lucide-react";

interface GalleryPageProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function GalleryPage({ onQuoteClick, onCallClick }: GalleryPageProps) {
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    "dryer-vent-riverview": 50,
    "fantech-filter-moncton": 50,
    "mini-split-deep-clean-riverview": 50
  });

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const galleryItems = [
    {
      id: "dryer-vent-riverview",
      category: "AIR DUCT & VENT CLEANING",
      location: "Riverview, NB",
      title: "Dryer Vent Cleaning — Riverview Home",
      description: "A heavily clogged dryer vent packed with years of lint buildup — a serious fire hazard. We removed all debris and cleared the line end-to-end, restoring safe airflow and giving this homeowner real peace of mind.",
      beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/eacd28ee-f15b-4ce4-bb52-c79350297eaa_zqmpnt.avif",
      afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/dca342ef-806d-40bd-82d7-cf846a65c646_xaftcv.avif",
      beforeAlt: "Before: Heavily clogged dryer vent with lint",
      afterAlt: "After: Seamless pristine round metal exhaust tube"
    },
    {
      id: "fantech-filter-moncton",
      category: "INDOOR AIR QUALITY SOLUTIONS",
      location: "Greater Moncton, NB",
      title: "Fantech Air Filter Cleaning & Restoration",
      description: "This Fantech HRV/ERV filter was so clogged with dust and debris it was choking airflow and forcing the system to work overtime. We removed the core, hand-washed the mesh filter, and cleaned each compartment — restoring full efficiency and cleaner indoor air for the family.",
      beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/fb575d97-1568-4c5f-b10c-5c009b4868ad_ktgxok.avif",
      afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/62676504-2c8c-49a0-a653-812285614c8a_g4adbx.avif",
      beforeAlt: "Before: Dark, dusty and clogged ventilation ventilation mesh filter",
      afterAlt: "After: Bright clean white restored filter cell screen"
    },
    {
      id: "mini-split-deep-clean-riverview",
      category: "DUCTLESS MINI SPLIT SYSTEMS",
      location: "Riverview, NB",
      title: "Mini Split Deep Clean — Riverview Home",
      description: "This mini split head unit was caked with years of hidden dust, mold, and debris — choking airflow and impacting indoor air quality. We fully disassembled the unit, deep-cleaned the blower wheel, coils, and filters, then reassembled — restoring powerful, clean, and efficient cooling.",
      beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/18beebec-4bd3-4822-8a31-6a0dd3de4967_exzdfq.avif",
      afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099853/b0af0b41-6bd3-4a88-bac7-980386c553da_dw2pkr.avif",
      beforeAlt: "Before: Dark clogged split unit blower blades and mold spots",
      afterAlt: "After: Clean sanitized white spinning blower blade fan"
    }
  ];

  return (
    <div className="select-all font-sans text-neutral-800 bg-[#F8F9FA]">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-slate-100 text-slate-950 border-b border-slate-200 pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 overflow-hidden text-center">
        {/* Radar Concentric Circles matching theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-300 border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-slate-300 border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-slate-300 border-dashed rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            OUR WORK
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[46px] tracking-tight leading-none mb-6">
            Project <span className="text-[#C41230]">Gallery</span>
          </h1>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Real installations, real repairs, real results. See how we've helped homeowners and businesses across New Brunswick stay comfortable year-round.
          </p>
        </div>
      </section>

      {/* 2. GALLERY PROJECTS LIST - SIDE-BY-SIDE BEFORE / AFTER */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 space-y-24 sm:space-y-28">
          {galleryItems.map((item) => (
            <div key={item.id} className="text-center group">
              
              {/* Labels & Tags row */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="bg-[#C41230] text-white text-[10px] font-display font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-[4px] shadow-sm">
                  {item.category}
                </span>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-display font-bold px-2.5 py-1 rounded-[4px] flex items-center gap-1.5 border border-slate-200/50">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {item.location}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4 max-w-2xl mx-auto hover:text-[#C41230] transition-colors duration-200">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[#4a5568] text-sm sm:text-[15px] leading-relaxed max-w-3xl mx-auto font-sans mb-8">
                {item.description}
              </p>

              {/* Interactive Before/After slider built with native HTML attributes, fully keyboard-accessible and touch-friendly */}
              {(() => {
                const pos = sliderPositions[item.id] ?? 50;
                return (
                  <div className="relative aspect-[4/3] w-full max-w-[680px] mx-auto bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_15px_50px_rgba(0,0,0,0.03)] select-none touch-none group">
                    {/* AFTER IMAGE (Base Underlay) */}
                    <img
                      src={item.afterUrl}
                      alt={item.afterAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* After label */}
                    <div className="absolute top-4 right-4 z-20 bg-emerald-600/90 border border-emerald-500/30 text-white font-display text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      AFTER
                    </div>

                    {/* BEFORE IMAGE (Clipped Overlay matching slider) */}
                    <div
                      className="absolute inset-0 z-10 select-none pointer-events-none"
                      style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                    >
                      <img
                        src={item.beforeUrl}
                        alt={item.beforeAlt}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-95 saturate-70"
                        referrerPolicy="no-referrer"
                      />
                      {/* Before label */}
                      <div className="absolute top-4 left-4 z-20 bg-[#C41230] border border-red-500/30 text-white font-display text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                        BEFORE
                      </div>
                    </div>

                    {/* SLIDER VERTICAL SPLITTER LINE & GRABBER HANDLE */}
                    <div
                      className="absolute inset-y-0 z-20 pointer-events-none"
                      style={{ left: `${pos}%` }}
                    >
                      <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-2xl" />
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white text-slate-800 border border-neutral-200 shadow-xl flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-200">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* TRANSPARENT RANGE INPUT FOR DRAGGING */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pos}
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      aria-label={`Before and After visual comparison slider for ${item.title}`}
                    />
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      </section>

      {/* 3. LETS BUILD YOURS - CALL TO ACTION */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            LET'S BUILD YOURS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Ready to Start <span className="text-[#C41230]">Your Project?</span>
          </h2>
          <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans mb-10">
            Every project starts with a free estimate and honest advice. Let's talk about what your home or business needs.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
               onClick={onQuoteClick}
              className="bg-[#C41230] hover:bg-[#a80e27] active:scale-[0.98] hover:scale-[1.01] transition-all duration-200 text-white px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] cursor-pointer shadow-lg shadow-[#C41230]/10 flex items-center gap-2"
            >
              <span>GET FREE ESTIMATE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="tel:5062910594"
              className="border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 hover:scale-[1.01] active:scale-[0.98] px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
