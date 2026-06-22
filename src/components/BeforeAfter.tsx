import { useState } from "react";
import { ArrowLeftRight, Sparkles, HelpCircle } from "lucide-react";
import { beforeAfterData } from "../data";
import { motion } from "motion/react";

export default function BeforeAfter() {
  // Store separate sliders values for the 3 blocks
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    "dryer-vent-deep-clean": 50,
    "fantech-filter-restoration": 50,
    "mini-split-deep-clean": 50
  });

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
            OUR WORK
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-normal leading-[1.12]">
            Real Results, <span className="text-[#C41230]">Real Transformations</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#4a5568] leading-relaxed font-sans max-w-2xl mx-auto">
            Take a look at some of our recent projects — from deep cleans to full installations,
            we bring honest craftsmanship to every job. Drag the slider inside any card to compare before versus after!
          </p>
        </div>

        {/* 3 cards comparison container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {beforeAfterData.map((item) => {
            const pos = sliderPositions[item.id] || 50;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between"
              >
                {/* Image slider frame */}
                <div className="relative aspect-4/3 w-full bg-gray-100 select-none overflow-hidden touch-none group">
                  {/* AFTER IMAGE (Underlay - acts as base) */}
                  <img
                    src={item.afterUrl}
                    alt={item.afterAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* AFTER indicator badge */}
                  <span className="absolute top-3 right-3 z-20 bg-emerald-600/90 border border-emerald-500/30 text-white font-display text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                    AFTER
                  </span>

                  {/* BEFORE IMAGE (Clipped overlay - maintains full size but gets inset-clipped from right) */}
                  <div
                    className="absolute inset-0 z-10 select-none pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                  >
                    <img
                      src={item.beforeUrl}
                      alt={item.beforeAlt}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-90 saturate-50 contrast-110"
                      referrerPolicy="no-referrer"
                    />
                    {/* BEFORE indicator badge */}
                    <span className="absolute top-3 left-3 z-20 bg-[#C41230] border border-red-500/30 text-white font-display text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      BEFORE
                    </span>
                  </div>

                  {/* SLIDER LINE & HANDLE SEPARATER */}
                  <div
                    className="absolute inset-y-0 z-20 pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-2xl" />
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white text-slate-800 border border-gray-250 shadow-xl flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* TRANSPARENT HTML OVERLAID INPUT RANGE FOR INTUITIVE DRAGGING */}
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

                {/* Card Descriptions */}
                <div className="p-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#C41230]" />
                    <h3 className="font-display font-bold text-[18px] text-slate-900 tracking-tight leading-tight select-all">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
