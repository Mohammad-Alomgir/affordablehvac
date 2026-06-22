import { useState } from "react";
import { 
  Wrench, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Plus, 
  Minus,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesPageProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function ServicesPage({ onQuoteClick, onCallClick }: ServicesPageProps) {
  // Frequently Asked Questions states
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How often should I have my mini split cleaned?",
      a: "We recommend professional deep cleaning once a year to prevent mold buildup, restore airflow efficiency, and keep filters running optimally."
    },
    {
      q: "Why is annual HVAC maintenance important?",
      a: "Annual maintenance keeps your heating & cooling running efficiently, prevents sudden failures during intense weather, secures your manufacturer warranty, and keeps indoor air clean."
    },
    {
      q: "How quickly can you respond to an emergency?",
      a: "We offer rapid 24/7 service all year long. For emergency heating/cooling failures, we can often dispatch local technicians to your door within 2-4 hours."
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes, absolutely. We provide completely transparent, 100% free virtual and on-site estimates with zero obligation."
    },
    {
      q: "What brands do you service?",
      a: "We service all major heat pump, furnace, air conditioner, and air exchanger brands, including Mitsubishi, LG, Daikin, Fujitsu, Carrier, Lennox, and more."
    },
    {
      q: "How often should dryer vents be cleaned?",
      a: "Dryer vents should be cleaned annually for average households, and up to twice a year for large families, to protect against fire hazards and improve drying speeds."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="select-all font-sans text-neutral-800 bg-[#F8F9FA]">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#061830] text-white pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 overflow-hidden">
        {/* Radar Concentric Circles matching theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/[0.03] border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/[0.03] border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-white/[0.03] border-dashed rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            Quality HVAC Service <span className="text-[#C41230]">At an Affordable Price</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            From professional installation to annual cleaning and emergency repairs — we keep your home comfortable, efficient, and safe year-round.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1: INSTALLATION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          
          {/* Header element */}
          <div className="mb-12">
            <div className="w-14 h-14 bg-[#C41230] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C41230]/20">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-2">
              Installation
            </h2>
            <p className="text-[#4a5568] text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed font-sans mt-3">
              Professional installation of high-quality HVAC equipment — done right the first time.
            </p>
          </div>

          {/* Cards Area Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left mt-12">
            
            {/* Card 1 */}
            <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Mini Split Installation
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Energy-efficient, whisper-quiet heating and cooling for any room — perfect for home additions, older homes without ductwork, or zoned comfort.
                </p>
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Zone-by-zone temperature control</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Year-round heating & cooling</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">No ductwork required</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] uppercase tracking-[0.15em] cursor-pointer mt-6 transition-colors"
              >
                <span>LEARN MORE</span>
                <span className="text-sm font-sans">→</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Central Heat Pump Installation
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Whole-home comfort with a high-efficiency central heat pump system. Ideal for new builds and full-home retrofits.
                </p>
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Whole-home heating & cooling</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Up to 50% energy savings</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Smart thermostat compatible</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] uppercase tracking-[0.15em] cursor-pointer mt-6 transition-colors"
              >
                <span>LEARN MORE</span>
                <span className="text-sm font-sans">→</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Air Exchanger Installation
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Improve indoor air quality with a professionally installed air exchanger. Fresh air circulation without losing heat in winter or cool air in summer.
                </p>
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Better indoor air quality</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Reduced humidity & condensation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Healthier living environment</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] uppercase tracking-[0.15em] cursor-pointer mt-6 transition-colors"
              >
                <span>LEARN MORE</span>
                <span className="text-sm font-sans">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: CLEANING & MAINTENANCE */}
      <section className="py-20 bg-[#F8F9FA] border-y border-gray-250/50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          
          {/* Header elements */}
          <div className="mb-12">
            <div className="w-14 h-14 bg-[#C41230] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C41230]/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-2">
              Cleaning & Maintenance
            </h2>
            <p className="text-xs font-display font-bold tracking-[0.12em] text-[#C41230] uppercase mb-4 block mt-3">
              Quality service at an affordable price. Protect your investment with professional annual cleaning and preventative maintenance.
            </p>
            <p className="text-[#4a5568] text-sm sm:text-[15px] max-w-3xl mx-auto leading-relaxed font-sans mt-3">
              Annual cleaning is one of the most important investments you can make in your HVAC system. Regular maintenance helps optimize efficiency, improve air quality, extend equipment lifespan, reduce energy consumption, and prevent costly breakdowns. We recommend scheduling cleaning at least once a year for all major systems.
            </p>
          </div>

          {/* Cards Grid of Four, including a specialized highlighted dark split card! */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left mt-12 max-w-[1100px] mx-auto">
            
            {/* Card 1: Highlighted Dark Slate Card */}
            <div className="bg-[#061830] text-white rounded-3xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(4,17,34,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none rounded-bl-full" />
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <span>Mini Split Cleaning</span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#C41230] bg-[#C41230]/10 border border-[#C41230]/20 px-2.5 py-0.5 rounded">
                    POPULAR
                  </span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  Deep cleaning of your mini split's filters, coils, blower wheel, and housing. Removes mold, bacteria, dust, and allergens — improving efficiency and air quality.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-sans">Eliminates mold & bacteria buildup</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-sans">Improves cooling/heating efficiency</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-sans">Extends unit lifespan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Central Heat Pump Cleaning
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Thorough cleaning and inspection of your central heat pump system including coils, filters, drain pans, and airflow components.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Optimizes energy efficiency</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Prevents costly breakdowns</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Protects your investment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Air Exchanger Cleaning
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Complete air exchanger cleaning including core cleaning, filter replacement, and airflow verification to ensure your family breathes the cleanest air possible.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Better indoor air quality</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Improved ventilation efficiency</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Reduced allergens & pollutants</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Dryer Vent Cleaning
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  Professional dryer vent cleaning that removes lint buildup — reducing fire risk and improving dryer efficiency so clothes dry faster using less energy.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Fire prevention & safety</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Faster drying times</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Lower energy consumption</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Centered Trigger Button */}
          <div className="mt-12 text-center">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#061830] hover:bg-[#0c2a4f] text-white px-9 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg shadow-[#061830]/10"
            >
              <span>LEARN WHY MAINTENANCE MATTERS</span>
              <span className="text-sm font-sans">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: REPAIRS & SUPPORT */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          
          {/* Header */}
          <div className="mb-12">
            <div className="w-14 h-14 bg-[#C41230] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C41230]/20">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-2">
              Repairs & Support
            </h2>
            <p className="text-[#4a5568] text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed font-sans mt-3">
              Fast, reliable repairs when something goes wrong. We diagnose the problem, explain your options, and fix it right.
            </p>
          </div>

          {/* Pairs array */}
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12 max-w-[950px] mx-auto">
            
            {/* Pair Card 1 */}
            <div className="bg-[#F8F9FA] rounded-3xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Service & Repair
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  When your HVAC system isn't working properly, our certified technicians diagnose and fix the issue fast — with honest pricing and clear explanations.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">All major brands serviced</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Thorough diagnostics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Honest, transparent pricing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pair Card 2: Specialized highlighted boundary */}
            <div className="bg-white rounded-3xl border-[2.5px] border-[#C41230] p-6 sm:p-8 flex flex-col justify-between relative shadow-lg shadow-[#C41230]/5 overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C41230] text-white text-[8px] sm:text-[9px] font-black uppercase font-mono tracking-widest px-3 py-1.5 rounded-bl-xl leading-none">
                24/7 Service
              </div>
              <div>
                <span className="bg-[#C41230]/10 border border-[#C41230]/25 text-[#C41230] text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded mb-4 inline-block mt-1">
                  24/7 EMERGENCY
                </span>
                <h3 className="font-display font-bold text-xl text-[#061830] mb-4">
                  Emergency Call-Out Service
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed font-sans mb-6">
                  HVAC emergencies don't wait — and neither do we. Available 24/7 for urgent repairs when your comfort can't wait. Nights, weekends, and holidays included.
                </p>
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans font-semibold text-[#061830]">24/7 — nights, weekends & holidays</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">Fast response — often within hours</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4a5568] font-sans">No emergency price gouging</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. RED EMERGENCY BANNER */}
      <section className="bg-[#C41230] py-24 sm:py-28 text-white text-center relative select-all overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h2 className="font-display font-black text-3xl sm:text-[42px] tracking-tight leading-tight mb-4 text-white">
            Emergency? We're On Our Way.
          </h2>
          <p className="text-white/90 text-sm sm:text-[15px] font-sans max-w-2xl mx-auto leading-relaxed">
            Available 24/7 for urgent HVAC repairs across Riverview, Moncton & Dieppe.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
            <a
              href="tel:5062910594"
              className="bg-white hover:bg-neutral-50 text-[#C41230] active:scale-[0.98] px-8 sm:px-10 py-4 sm:py-4.5 rounded-[14px] text-xs font-display font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2.5 shadow-md shadow-black/5 shrink-0"
            >
              <Phone className="w-4 h-4 text-[#C41230] shrink-0 stroke-[2.5]" />
              <span>CALL NOW — 24/7</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="border-[1.5px] border-white/40 hover:border-white/70 text-white hover:bg-white/5 active:scale-[0.98] px-8 sm:px-10 py-4 sm:py-4.5 rounded-[14px] text-xs font-display font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>REQUEST CALLBACK</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
            HOW IT WORKS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-12">
            Our Simple 4-Step Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-8 text-left">
            
            {/* Step 1 */}
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-display font-black text-black/[0.04]">
                  01
                </span>
                <h3 className="font-display font-bold text-lg text-[#061830] mt-3 mb-2.5">
                  Request Service
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                  Call us or fill out our online form. We'll respond quickly — often same day.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-display font-black text-black/[0.04]">
                  02
                </span>
                <h3 className="font-display font-bold text-lg text-[#061830] mt-3 mb-2.5">
                  Get an Assessment
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                  Our certified tech arrives on time, diagnoses the issue, and explains your options clearly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-display font-black text-black/[0.04]">
                  03
                </span>
                <h3 className="font-display font-bold text-lg text-[#061830] mt-3 mb-2.5">
                  Receive Honest Pricing
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                  You get a transparent, written estimate before any work begins. No hidden fees.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-display font-black text-black/[0.04]">
                  04
                </span>
                <h3 className="font-display font-bold text-lg text-[#061830] mt-3 mb-2.5">
                  Enjoy Peace of Mind
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                  Expert service completed right — quality service at an affordable price, guaranteed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-[760px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-[#061830] hover:bg-neutral-50 cursor-pointer transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <div className="shrink-0 text-[#C41230]">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans border-t border-neutral-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. "READY TO GET STARTED?" BLOCK */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-[1000px] mx-auto bg-[#061830] text-white py-16 px-6 sm:px-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
          {/* Subtle decoration radar rings */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.03] border-dashed rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] border-dashed rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans mb-8">
              Get a free estimate today — quality service at an affordable price, no obligation, no pressure.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="bg-[#C41230] hover:bg-[#a80e27] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] cursor-pointer shadow-lg shadow-[#C41230]/10 shrink-0"
              >
                <span>GET FREE ESTIMATE</span>
                <span className="text-sm font-sans">→</span>
              </button>

              <a
                href="tel:5062910594"
                className="border border-white/20 hover:border-white/45 bg-transparent hover:bg-white/5 text-white hover:scale-[1.02] px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-black/10"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
