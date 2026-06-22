import { 
  MapPin, 
  Phone, 
  ArrowRight, 
  Wind, 
  Flame, 
  RefreshCw, 
  Thermometer, 
  Check, 
  AlertTriangle,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ChevronRight
} from "lucide-react";

interface EducationPageProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
  onServicesClick: () => void;
}

export default function EducationPage({ onQuoteClick, onCallClick, onServicesClick }: EducationPageProps) {
  return (
    <div className="select-all font-sans text-neutral-800 bg-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#061830] text-white pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 overflow-hidden text-center">
        {/* Radar Concentric Circles matching theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/[0.03] border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/[0.03] border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-white/[0.03] border-dashed rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            EDUCATION
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[46px] tracking-tight leading-none mb-6">
            Understanding <span className="text-[#C41230]">Your HVAC Systems</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Knowledge is comfort. Learn how your heating and cooling systems work, why maintenance matters, and how to protect your investment year-round.
          </p>
        </div>
      </section>

      {/* 2. HVAC SYSTEMS IN-DEPTH SECTION */}
      <section className="py-20 lg:py-24 px-4 bg-white divide-y-2 divide-gray-100">
        <div className="max-w-[800px] mx-auto space-y-20 lg:space-y-24">
          
          {/* A. MINI SPLIT SYSTEMS */}
          <div className="space-y-8 pt-4">
            {/* Header Title with stylized visual Badge */}
            <div className="flex items-center gap-4 justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#C41230] text-white flex items-center justify-center shadow-md shadow-[#C41230]/10 shrink-0">
                <Thermometer className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#061830] tracking-tight">
                Mini Split Systems
              </h2>
            </div>

            {/* How They Work paragraph */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                How They Work
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                Mini split heat pumps consist of an outdoor compressor unit and one or more indoor air-handling units (heads) connected by a small conduit. They transfer heat — rather than generate it — making them incredibly energy-efficient. In winter, they extract heat from the outdoor air and move it inside. In summer, they reverse the process, removing heat from your home and releasing it outside.
              </p>
            </div>

            {/* Benefits of Annual Cleaning */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Benefits of Annual Cleaning
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                Mini splits circulate large volumes of air and act like filters — trapping dust, mold, bacteria, pollen, and pet dander. Over time, this buildup restricts airflow, reduces efficiency, and can lead to unpleasant odours or even health concerns.
              </p>
              
              {/* Checkbox checklist matching the exact picture style */}
              <ul className="grid gap-3 pl-1">
                {[
                  "Restores cooling and heating efficiency (lower energy bills)",
                  "Elimates mold, bacteria, and dusty odours",
                  "Improves indoor air quality for your family",
                  "Extends equipment life and protects your warranty",
                  "Prevents costly breakdowns and emergency repairs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2d3748]">
                    <span className="w-5 h-5 rounded-full border border-[#C41230] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C41230] stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signs Your Mini Split Needs Maintenance */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Signs Your Mini Split Needs Maintenance
              </h3>
              <ul className="grid gap-3 pl-1">
                {[
                  "Reduced heating or cooling output",
                  "Unusual odours when the unit runs",
                  "Excessively noisy operation",
                  "Visible dust or mold around the vents",
                  "Water leaks or excessive condensation",
                  "Higher than normal energy bills"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2d3748]">
                    <span className="w-5 h-5 rounded-full border border-[#C41230]/40 bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-3 h-3 text-[#C41230]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* B. CENTRAL HEAT PUMPS */}
          <div className="space-y-8 pt-16">
            {/* Header Title with stylized visual Badge */}
            <div className="flex items-center gap-4 justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#C41230] text-white flex items-center justify-center shadow-md shadow-[#C41230]/10 shrink-0">
                <Wind className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#061830] tracking-tight">
                Central Heat Pumps
              </h2>
            </div>

            {/* How They Operate paragraph */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                How They Operate
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                A central heat pump works on the same principle as a mini split but distributes conditioned air through ductwork to every room in your home. It's a whole-home solution that provides both heating and cooling from a single system. Modern cold-climate heat pumps can efficiently heat your home even when outdoor temperatures drop well below freezing — making them an excellent choice for New Brunswick winters.
              </p>
            </div>

            {/* Importance of Routine Cleaning & Servicing */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Importance of Routine Cleaning & Servicing
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                Central heat pumps work hard — often running year-round to keep your home comfortable. Without regular maintenance, coils become dirty, filters clog, and components wear down. Annual professional cleaning and servicing ensures peak performance season after season.
              </p>
              
              {/* Checkbox checklist */}
              <ul className="grid gap-3 pl-1">
                {[
                  "Keeps energy bills low by maintaining peak efficiency",
                  "Prevents compressor failure (the most expensive repair)",
                  "Ensures even heating and cooling throughout your home",
                  "Catches small issues before they become major problems",
                  "Extends system lifespan — protecting your investment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2d3748]">
                    <span className="w-5 h-5 rounded-full border border-[#C41230] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C41230] stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Energy-Efficiency Benefits */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Energy-Efficiency Benefits
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                A well-maintained heat pump can deliver up to three times more heat energy than the electrical energy it consumes — making it one of the most cost-effective ways to heat and cool a home. Regular cleaning and filter changes can improve efficiency by 10-20%, directly lowering your monthly utility bills.
              </p>
            </div>
          </div>


          {/* C. AIR EXCHANGERS */}
          <div className="space-y-8 pt-16">
            {/* Header Title with stylized visual Badge */}
            <div className="flex items-center gap-4 justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#C41230] text-white flex items-center justify-center shadow-md shadow-[#C41230]/10 shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#061830] tracking-tight">
                Air Exchangers
              </h2>
            </div>

            {/* Role in Indoor Air Quality */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Their Role in Indoor Air Quality
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                An air exchanger (HRV — Heat Recovery Ventilator, or ERV — Energy Recovery Ventilator) continuously brings fresh outdoor air into your home while exhausting stale indoor air. As air passes through the core, heat is transferred between the two streams — so you get fresh air without losing all the heat you've paid for in winter (or cool air in summer). This is especially important in modern, well-sealed homes where indoor air can become stale, humid, and full of pollutants without proper ventilation.
              </p>
            </div>

            {/* Importance of Regular Maintenance */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Importance of Regular Maintenance
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                Air exchangers work 24/7 filtering the air your family breathes. Over time, the core accumulates dust, debris, and even mold — reducing efficiency and compromising air quality. Annual cleaning is essential.
              </p>
              
              {/* Checkbox checklist */}
              <ul className="grid gap-3 pl-1">
                {[
                  "Core cleaning removes dust, pollen, and mold buildup",
                  "Filter replacement ensures clean, healthy airflow",
                  "Airflow verification confirms the system is balanced",
                  "Prevents stale, humid indoor air in winter months",
                  "Reduces allergens and respiratory irritants"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2d3748]">
                    <span className="w-5 h-5 rounded-full border border-[#C41230] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C41230] stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* D. DRYER VENTS */}
          <div className="space-y-8 pt-16 pb-4">
            {/* Header Title with stylized visual Badge */}
            <div className="flex items-center gap-4 justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#C41230] text-white flex items-center justify-center shadow-md shadow-[#C41230]/10 shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#061830] tracking-tight">
                Dryer Vents
              </h2>
            </div>

            {/* Fire Prevention Benefits */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Fire Prevention Benefits
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                Lint buildup in dryer vents is a leading cause of house fires. When vents become clogged, heat can't escape properly — and lint is highly flammable. Professional dryer vent cleaning removes this hidden fire hazard and gives you real peace of mind.
              </p>
            </div>

            {/* Improved Dryer Efficiency */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Improved Dryer Efficiency
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed font-sans">
                A clogged vent forces your dryer to work harder and longer, wasting energy and wearing out your appliance. After cleaning, clothes dry faster and your dryer uses less electricity — saving you money every load.
              </p>
            </div>

            {/* Recommended Cleaning Schedule */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-[#061830] tracking-tight uppercase">
                Recommended Cleaning Schedule
              </h3>
              <ul className="grid gap-3 pl-1">
                {[
                  "Annual professional cleaning for most households",
                  "Every 6 months for larger families (5+ people)",
                  "Immediately if you notice: clothes taking longer to dry, the dryer feeling unusually hot, a burning smell, or visible lint around the vent exterior"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2d3748]">
                    <span className="w-5 h-5 rounded-full border border-[#C41230] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C41230] stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY ANNUAL MAINTENANCE IS ESSENTIAL BENTO SECTION */}
      <section className="py-24 bg-[#F8F9FA] border-t border-b border-gray-200 px-4">
        <div className="max-w-[1100px] mx-auto text-center space-y-16">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase block">
              PREVENTATIVE MAINTENANCE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#061830] tracking-tight">
              Why Annual Maintenance <span className="text-[#C41230]">Is Essential</span>
            </h2>
            <p className="text-[#4a5568] text-sm sm:text-[15px] leading-relaxed font-sans">
              Annual maintenance is one of the most important investments you can make in your HVAC system. Regular cleaning and servicing help maximize efficiency, improve indoor air quality, extend equipment life, and prevent costly repairs.
            </p>
          </div>

          {/* 6 Grid Bento Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            
            {/* Card 1: Optimize Efficiency */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Optimize Efficiency
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  Clean systems use less energy. Annual maintenance keeps your equipment running at peak performance — lowering your monthly utility bills.
                </p>
              </div>
            </div>

            {/* Card 2: Improved Indoor Air Quality */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <Wind className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Improved Indoor Air Quality
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  Clean filters, coils, and vents mean cleaner air circulating through your home. Less dust, fewer allergens, healthier living.
                </p>
              </div>
            </div>

            {/* Card 3: Extended Equipment Life */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Extended Equipment Life
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  Regular maintenance can add years to your HVAC system's lifespan. It's far cheaper to maintain than to replace.
                </p>
              </div>
            </div>

            {/* Card 4: Prevent Costly Breakdowns */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Prevent Costly Breakdowns
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  Catching small issues early prevents them from becoming expensive emergencies. Annual inspections spot problems before they escalate.
                </p>
              </div>
            </div>

            {/* Card 5: Lower Energy Consumption */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Lower Energy Consumption
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  A well-maintained HVAC system uses significantly less energy. That means a lower carbon footprint and more money in your pocket.
                </p>
              </div>
            </div>

            {/* Card 6: Protect Your Warranty */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41230] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-[#061830] tracking-tight mb-2">
                  Protect Your Warranty
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  Many manufacturer warranties require proof of regular maintenance. Keep your warranty valid and your investment protected.
                </p>
              </div>
            </div>

          </div>

          {/* Hidden Cost skipped warning box */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#061830] text-left text-white p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="font-display font-black text-xl sm:text-2xl text-center md:text-left text-white tracking-tight leading-tight">
                The Hidden Cost of Skipping Maintenance
              </h3>
              <p className="text-slate-300/90 text-sm leading-relaxed font-sans">
                When maintenance is skipped, HVAC systems lose 5-10% efficiency per year as components get dirty and wear down. A neglected system works harder, uses more energy, breaks down more often, and can fail years earlier than a well-maintained one. The small investment in cleaning and servicing pays for itself many times over in avoided repair costs, lower energy bills, and longer equipment life.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <button
                  onClick={onQuoteClick}
                  className="bg-[#C41230] hover:bg-[#a80e27] active:scale-[0.98] hover:scale-[1.01] transition-all duration-200 text-white px-6 py-3.5 rounded-xl text-xs font-display font-black uppercase tracking-[0.15em] cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>SCHEDULE MAINTENANCE</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={onServicesClick}
                  className="bg-transparent hover:bg-white/5 active:scale-[0.98] text-white border-2 border-white/20 hover:border-white/40 px-6 py-3.5 rounded-xl text-xs font-display font-black uppercase tracking-[0.15em] cursor-pointer transition-all duration-200"
                >
                  VIEW ALL SERVICES
                </button>
              </div>
            </div>
            {/* Soft decorative visual light bloom */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-650/10 blur-[100px] rounded-full pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 4. READY TO PROTECT YOUR INVESTMENT CTA HEADER */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-[700px] mx-auto space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#061830] tracking-tight">
            Ready to Protect <span className="text-[#C41230]">Your Investment?</span>
          </h2>
          <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Schedule your annual HVAC maintenance today — quality service at an affordable price from Riverview's trusted local experts.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={onQuoteClick}
              className="bg-[#C41230] hover:bg-[#a80e27] active:scale-[0.98] hover:scale-[1.01] transition-all duration-200 text-white px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] cursor-pointer shadow-lg shadow-[#C41230]/10 flex items-center gap-2"
            >
              <span>GET FREE ESTIMATE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="tel:5062910594"
              className="border-2 border-[#061830]/85 hover:border-[#061830] bg-[#061830] text-white hover:bg-[#0c2a52] hover:scale-[1.01] active:scale-[0.98] px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
