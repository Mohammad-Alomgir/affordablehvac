import { useState } from "react";
import {
  Thermometer,
  Flame,
  Wind,
  Sparkles,
  Settings,
  Filter,
  Zap,
  ArrowRight,
  X,
  Phone,
  CheckCircle,
  HelpCircle,
  Wrench
} from "lucide-react";
import { servicesData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Service } from "../types";

// Map service ID directly to Lucide React component for pixel-perfect matches
const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case "mini-split-installation":
      return Thermometer;
    case "central-heat-pump":
      return Flame;
    case "air-exchanger-installation":
      return Wind;
    case "mini-split-cleaning":
      return Sparkles;
    case "central-heat-pump-cleaning":
      return Settings;
    case "air-exchanger-cleaning":
      return Sparkles;
    case "dryer-vent-cleaning":
      return Filter;
    case "emergency-call-out":
      return Zap;
    default:
      return Wrench;
  }
};

interface ServicesProps {
  onQuoteClick: () => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  // Detailed points to enrich the modal view for each service
  const getServiceDetails = (serviceId: string) => {
    switch (serviceId) {
      case "mini-split-installation":
        return [
          "Professional calculations to ensure correct unit size matching your space",
          "Premium brand selection featuring durable, high-efficiency models",
          "Strict electrical and mount diagnostics from certified specialists",
          "Demonstration of remote controllers, heating modes, and weekly care guidelines",
          "Full post-run clean up — we leave your home cleaner than we found it!"
        ];
      case "central-heat-pump":
        return [
          "Complete air duct sizing verification for whole-home balance",
          "Removal and safe disposal of your old equipment",
          "Advanced smart thermostat configuration to streamline programming",
          "Pressure testing and diagnostic refrigeration verification",
          "Detailed homeowner review of safety shut-offs & seasonal switches"
        ];
      case "air-exchanger-installation":
        return [
          "Custom balanced layout of intake and stale exhaustion vents",
          "Elimination of excessive moisture buildup, indoor toxins, and odors",
          "High-efficiency core alignment with silent operation settings",
          "Professional explanation of seasonal damper requirements",
          "Clean aesthetics matching your architectural requirements"
        ];
      case "mini-split-cleaning":
        return [
          "Thorough chemical wash of indoor fins & heat exchangers",
          "Disinfection of the fan wheel/blower cell to remove mold spores",
          "Clearing and flushing of critical condensate drain pipes",
          "High-pressure wash of the outdoor protective shroud and coil cells",
          "Post-assembly diagnostic checklist to verify maximum static airflow"
        ];
      case "central-heat-pump-cleaning":
        return [
          "Outdoor coil sanitation to clear packed grass, dirt, and dust layers",
          "Indoor evaporator coil checkup and deep micro-bacterial cleanse",
          "Refrigerant diagnostic test and dynamic pressure scan",
          "Full structural lubrication of fans, belt alignment, and motor cores",
          "Electrical terminal monitoring to prevent short-circuiting"
        ];
      case "air-exchanger-cleaning":
        return [
          "Sanitizing dynamic core cells to remove black soot & airborne allergens",
          "Intake/exhaust cowl inspection and physical screen cleaning",
          "Filter frame cleaning and replacement of high-density media panels",
          "Motor blower calibration to ensure energy efficiency",
          "Internal system decontamination to protect air quality"
        ];
      case "dryer-vent-cleaning":
        return [
          "Removing compressed flammable fibers, lint clumps, and nests",
          "Rotary brush clearing from the dryer connection to extraction cap",
          "Static static pressure diagnostics to prove improved backpressure flow",
          "Exhaust termination valve checkout to ensure animals can't enter",
          "Complete peace of mind knowing your fire hazards are eliminated"
        ];
      case "emergency-call-out":
        return [
          "Fast-track response for cold-shock or critical high-heat periods",
          "Experienced diagnostics on any heat pump, mini-split, or exchanger unit",
          "Upfront pricing disclosures prior to executing repairs",
          "Loaded utility trucks with common replacement parts in inventory",
          "Faith-anchored support when you and your family need it most"
        ];
      default:
        return [
          "Professional customer service with a friendly attitude",
          "Upfront transparent quote options before executing work",
          "100% Satisfaction safety assurance checkups"
        ];
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
            OUR SERVICES
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-normal leading-[1.12]">
            Quality HVAC Solutions <span className="text-[#C41230]">For Your Home</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#4a5568] font-sans leading-relaxed max-w-2xl mx-auto">
            From installation to annual cleaning and emergency repairs — quality service at an affordable price.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative bg-[#F8F9FA] rounded-2xl p-7 border border-[#edf2f7] hover:border-brand-red-650/20 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between items-start text-left overflow-hidden min-h-[260px]"
                id={`service-card-${service.id}`}
              >
                {/* Custom top-right quarter-circle accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#C41230]/5 rounded-bl-full transition-transform duration-300 group-hover:scale-110 pointer-events-none" />

                <div className="w-full">
                  {/* Raw Outline Red Icon */}
                  <div className="mb-5 text-[#C41230] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-8 h-8 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-slate-900 mb-2 tracking-wide leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#4a5568] leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] cursor-pointer transition-colors uppercase tracking-[0.12em] mt-auto"
                >
                  <span>LEARN MORE</span>
                  <span className="text-sm font-sans transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout button banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center gap-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-slate-800 font-display text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-xl cursor-pointer shadow-md"
          >
            <span>VIEW ALL SERVICES</span>
            <span className="text-sm font-sans">→</span>
          </button>
        </div>
      </div>

      {/* Service Detailed Modal Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-blue-950/80 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white max-w-lg w-full rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-gray-100 z-10"
            >
              {/* Corner badge decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-red-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-red-500/10 flex items-center justify-center text-brand-red-650 border border-brand-red-500/15">
                  {(() => {
                    const ModalIcon = getServiceIcon(selectedService.icon);
                    return <ModalIcon className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-brand-blue-900 pr-6 select-all">
                    {selectedService.title}
                  </h3>
                  <span className="bg-brand-red-650/10 text-brand-red-600 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {selectedService.category} Care
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                Our technicians provide comprehensive care to keep your systems running at optimal
                efficiency. Here is what is included with our {selectedService.title} workflow:
              </p>

              {/* Service Details Points checklist */}
              <div className="space-y-3 mb-8">
                {getServiceDetails(selectedService.id).map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 font-sans leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onQuoteClick();
                  }}
                  className="flex-1 bg-brand-red-650 hover:bg-brand-red-700 text-white font-display text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl cursor-pointer text-center hover:shadow-lg hover:shadow-brand-red-500/10 transition-all"
                >
                  Book Quote Now
                </button>
                <a
                  href="tel:5062910594"
                  className="sm:px-6 bg-gray-50 hover:bg-gray-100 text-brand-blue-900 border border-gray-200 font-display text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl cursor-pointer text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red-500" />
                  <span>Call Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
