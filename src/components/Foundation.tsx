import { useState } from "react";
import { Heart, Check, X, ShieldAlert, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Foundation() {
  const [showStoryDetail, setShowStoryDetail] = useState(false);

  const bulletPoints = [
    "Honest, straightforward assessments with no scare tactics",
    "Fair, transparent pricing that respects your family budget",
    "Treating every home as if it were our own — with respect and care",
    "Recommending only what's truly needed — never overselling",
    "Serving our community with humility, gratitude, and excellence"
  ];

  return (
    <section id="about-us" className="py-24 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      {/* Decorative subtle ambient radial light */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-radial-to-l from-[#C41230]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Image & Overlay) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://hvaccanadaltd.ca/wp-content/uploads/2025/04/AdobeStock_387071119.jpeg"
                alt="HVAC Specialist Servicing Fan Core"
                className="w-full h-auto object-cover aspect-[4/5] object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlaid Red Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute -bottom-6 right-6 bg-[#C41230] hover:bg-[#a80e27] rounded-2xl p-6 shadow-2xl text-center w-36 select-none border border-white/10 transition-colors"
            >
              <Heart className="w-5 h-5 text-white fill-white mx-auto mb-2 animate-pulse" />
              <p className="font-display font-extrabold text-3xl leading-none text-white tracking-wide">2024</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#ffebeb] mt-1.5 leading-tight font-sans">
                Serving NB <br /> Since
              </p>
            </motion.div>
          </div>

          {/* Right Column (Message & Commitments) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
            <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
              OUR FOUNDATION
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mt-1 leading-[1.12] tracking-normal mb-6">
              Serving Our Community with<br />
              <span className="text-[#C41230]">Faith, Integrity,</span> & Excellence
            </h2>

            <div className="space-y-5 text-[15px] sm:text-[16px] text-slate-650 leading-relaxed font-sans max-w-2xl">
              <p>
                E&A Affordable HVAC Services is built on a simple belief: every family deserves to
                live in comfort, and every customer deserves to be treated with honesty. Our Christian
                faith shapes how we run our business — not through sermons, but through actions.
              </p>
              <p>
                We show up on time, price our work fairly, and treat your home with the same care we'd give
                our own. No shortcuts. No gimmicks. Just honest work from people who genuinely care about
                keeping your family comfortable.
              </p>
            </div>

            {/* Checklists items */}
            <div className="mt-8 space-y-4 w-full max-w-2xl">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-[#C41230] stroke-[2.5]" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-slate-700 font-sans leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => setShowStoryDetail(true)}
              className="mt-10 inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 rounded-lg px-7 py-3.5 text-xs font-display font-bold text-slate-800 uppercase tracking-[0.18em] transition-all duration-300 bg-transparent hover:bg-slate-50 cursor-pointer"
            >
              <span>LEARN MORE ABOUT US</span>
              <span className="text-sm font-sans">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Faith & Story Modal */}
      <AnimatePresence>
        {showStoryDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStoryDetail(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white text-gray-900 border border-gray-100 max-w-xl w-full rounded-2xl p-6 sm:p-10 shadow-2xl z-10"
            >
              <button
                onClick={() => setShowStoryDetail(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer transition-all"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center sm:text-left mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-red-500/10 flex items-center justify-center border border-brand-red-500/20 mb-4 mx-auto sm:mx-0">
                  <Award className="w-6 h-6 text-brand-red-600" />
                </div>
                <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">
                  Our Story & Mission
                </h3>
                <p className="text-xs text-brand-red-650 uppercase font-bold tracking-widest mt-1 font-mono">
                  Honest Work, Rooted in Faith
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                <p>
                  E&A Affordable HVAC Services was founded with a mission to bridge the gap between
                  high-quality equipment maintenance and reasonable, honest pricing. After seeing many local
                  homeowners face high markup pricing, Anthony established E&A as an answer built on faith
                  and fair service.
                </p>
                <div className="bg-gray-50 border-l-4 border-brand-red-500 p-4 rounded-r-lg my-4 italic text-slate-900 font-sans text-xs">
                  "But he that is greatest among you shall be your servant." <br />
                  <span className="text-[10px] not-italic uppercase tracking-widest font-bold block mt-1.5 font-mono text-brand-red-600">— Matthew 23:11</span>
                </div>
                <p>
                  Today, we continue to fulfill that vow across Moncton, Riverview, and Dieppe. Every project
                  has the oversight of experienced pros who use certified tools. From single-split
                  cleanings to central heat pump installations, we provide complete reports and transparent
                  costs before doing any physical service.
                </p>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6 flex flex-wrap justify-end gap-3">
                <button
                  onClick={() => setShowStoryDetail(false)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-display text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg cursor-pointer transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
