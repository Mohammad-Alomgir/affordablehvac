import { Heart, ArrowRight, Phone, Shield, Star, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onCtas: (action: "quote" | "gallery" | "phone") => void;
}

export default function Hero({ onCtas }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const trustBadges = [
    { label: "Licensed & Insured", icon: Shield },
    { label: "Affordable Pricing", icon: Star },
    { label: "Fast Response Times", icon: Clock },
    { label: "Locally Owned", icon: MapPin },
    { label: "Christian-Owned Business", icon: Heart }
  ];

  return (
    <div id="hero" className="relative min-h-[90vh] bg-slate-100 overflow-hidden flex items-center pt-24 pb-16 lg:py-32">
      {/* 
        Technician Background Graphic on Right Side
        Blends seamlessly into the light gray background
      */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-3/5 h-full">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
            alt="Smiling HVAC Professional"
            className="w-full h-full object-cover object-center lg:object-left-top opacity-[0.15] select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* Gradients blending with background and giving exact premium feel */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left-Hand Side Copy and Forms */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-9 xl:col-span-8 flex flex-col items-start text-left"
          >
            
            {/* Christian faith badge customized layout */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 border border-brand-red-600/30 bg-brand-red-650/5 px-4 py-1.5 rounded-full text-brand-red-500 text-[11px] font-bold tracking-widest uppercase mb-6"
            >
              <Heart className="w-3.5 h-3.5 fill-brand-red-500 animate-pulse text-brand-red-500" />
              <span>Christian-Owned & Operated</span>
            </motion.div>

            {/* Headline with exact break points and high-impact emphasis */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl lg:text-[56px] text-slate-900 leading-tight sm:leading-[1.1] tracking-tight max-w-3xl"
            >
              Affordable HVAC Solutions <br className="hidden sm:inline" />
              Built on <span className="text-brand-red-500 font-black">Faith, Integrity</span> & <br className="hidden sm:inline" />
              Quality Service.
            </motion.h1>

            {/* Support Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm sm:text-base text-slate-650 leading-relaxed max-w-2xl font-sans"
            >
              Serving Riverview, Moncton, Dieppe, and surrounding New Brunswick communities with professional HVAC installation, annual cleaning, maintenance, and 24/7 emergency repair — quality service at an affordable price.
            </motion.p>

            {/* Call to arms buttons, styled identically */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto"
            >
              {/* PRIMARY RED CALL OUT */}
              <button
                onClick={() => onCtas("quote")}
                className="w-full sm:w-auto bg-brand-red-600 hover:bg-brand-red-700 hover:scale-101 border border-brand-red-600 px-6 py-3.5 rounded-lg text-xs font-extrabold tracking-widest uppercase font-display cursor-pointer transition-all text-white flex items-center justify-center gap-2 shadow-lg shadow-brand-red-600/10"
              >
                <span>Get Free Estimate</span>
              </button>

              {/* SECONDARY WORK LINK */}
              <button
                onClick={() => onCtas("gallery")}
                className="w-full sm:w-auto bg-slate-200/50 hover:bg-slate-200/80 border border-slate-300 px-6 py-3.5 rounded-lg text-xs font-extrabold tracking-widest uppercase font-display cursor-pointer transition-all text-slate-800 flex items-center justify-center gap-1.5"
              >
                <span>View Our Work</span>
                <span className="text-slate-500">→</span>
              </button>

              {/* PHONE ACT */}
              <a
                href="tel:5062910594"
                className="w-full sm:w-auto bg-slate-200/50 hover:bg-slate-200/80 border border-slate-300 px-6 py-3.5 rounded-lg text-xs font-extrabold tracking-widest uppercase font-display cursor-pointer transition-all text-slate-800 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Horizontal Trust Badges matching mockup style */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-y-4 gap-x-6 w-full"
            >
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-slate-600">
                    <Icon className="w-4 h-4 text-brand-red-500 shrink-0" />
                    <span className="text-xs font-medium tracking-wide font-sans">{badge.label}</span>
                  </div>
                );
              })}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
