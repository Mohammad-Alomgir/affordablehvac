import { 
  Heart, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Phone, 
  Star,
  Quote
} from "lucide-react";

interface AboutUsPageProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function AboutUsPage({ onQuoteClick, onCallClick }: AboutUsPageProps) {
  return (
    <div className="select-all font-sans text-neutral-800 bg-[#F8F9FA]">
      
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
            ABOUT US
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            A Company Built on <span className="text-[#C41230]">Faith, Integrity</span> & Family
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            We're more than an HVAC company — we're your neighbors, committed to keeping New Brunswick families comfortable with honest work and fair prices.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Story content */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
                OUR STORY
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-6">
                Family-Owned & <span className="text-[#C41230]">Locally Rooted</span>
              </h2>
              <div className="space-y-5 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed font-sans">
                <p>
                  E&A Affordable HVAC Services was founded right here in Riverview, New Brunswick, with a simple mission: provide honest, affordable heating and cooling services that families can actually count on.
                </p>
                <p>
                  As a Christian-owned, family-operated business, we believe the way we treat people matters. Every service call is an opportunity to serve our community — not just fix a furnace, but build a relationship of trust that lasts for years.
                </p>
                <p>
                  We live here. We work here. We raise our families here. And we're committed to keeping our neighbors comfortable through every season, with integrity at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Right Column Grid Stats Cards */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Stat card 1 */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-150/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="font-display font-bold text-3xl sm:text-4xl text-[#C41230] mb-1">
                      2024
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-[#4a5568] tracking-tight font-sans">
                      Serving NB Since
                    </div>
                  </div>

                  {/* Stat card 2 */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-150/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="font-display font-bold text-3xl sm:text-4xl text-[#C41230] mb-1">
                      200+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-[#4a5568] tracking-tight font-sans">
                      Happy Customers
                    </div>
                  </div>

                  {/* Stat card 3 */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-150/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="font-display font-bold text-3xl sm:text-4xl text-[#C41230] mb-1">
                      800+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-[#4a5568] tracking-tight font-sans">
                      Service Calls
                    </div>
                  </div>

                  {/* Stat card 4 */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-150/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-center items-center">
                    <div className="flex items-center gap-0.5 text-[#C41230] mb-2 scale-90 sm:scale-100">
                      <Star className="w-4 h-4 fill-current stroke-current" />
                      <Star className="w-4 h-4 fill-current stroke-current" />
                      <Star className="w-4 h-4 fill-current stroke-current" />
                      <Star className="w-4 h-4 fill-current stroke-current" />
                      <Star className="w-4 h-4 fill-current stroke-current" />
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-[#4a5568] tracking-tight font-sans">
                      5-Star Reviews
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES SECTION */}
      <section className="py-20 bg-[#F8F9FA] border-y border-gray-250/50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-3 block">
            OUR VALUES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#061830] tracking-normal mb-12">
            What We Stand For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-8 text-center">
            
            {/* Value card 1 */}
            <div className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C41230]/5 text-[#C41230] rounded-full flex items-center justify-center mb-5 shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#061830] mb-3">
                Faith in Action
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                We don't preach — we serve. Our Christian values come through in honest pricing, respectful service, and treating every home like it's our own.
              </p>
            </div>

            {/* Value card 2 */}
            <div className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C41230]/5 text-[#C41230] rounded-full flex items-center justify-center mb-5 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#061830] mb-3">
                Integrity First
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                No scare tactics. No unnecessary upsells. If it doesn't need fixing, we'll tell you. If it does, we'll explain why — clearly and honestly.
              </p>
            </div>

            {/* Value card 3 */}
            <div className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C41230]/5 text-[#C41230] rounded-full flex items-center justify-center mb-5 shrink-0">
                <Users className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#061830] mb-3">
                Family Focus
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                As a family-operated business, we understand what it means to protect the people you love. That's the standard we bring to every job.
              </p>
            </div>

            {/* Value card 4 */}
            <div className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C41230]/5 text-[#C41230] rounded-full flex items-center justify-center mb-5 shrink-0">
                <MapPin className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#061830] mb-3">
                Community Commitment
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed font-sans">
                We're proud to support local causes, sponsor community events, and give back to the neighborhoods that welcomed us into their homes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[950px] mx-auto px-4 text-center">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            OUR MISSION
          </span>
          
          <div className="relative inline-block mb-8">
            <Quote className="absolute -top-12 -left-12 w-16 h-16 text-neutral-100 rotate-180 pointer-events-none hidden sm:block" />
            <h2 className="font-display font-bold text-2xl sm:text-[34px] leading-[1.3] text-[#061830] tracking-normal max-w-4xl mx-auto px-2">
              “To help every family in New Brunswick live in <span className="text-[#C41230] font-extrabold">comfort</span>, by providing honest, affordable HVAC services rooted in <span className="text-[#C41230] font-extrabold">faith</span> and <span className="text-[#C41230] font-extrabold">integrity</span>.”
            </h2>
          </div>

          <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed font-sans max-w-3xl mx-auto mt-6">
            That's it. No corporate jargon, no grand promises we can't keep. Just a commitment to doing the right thing, every single time. Whether it's a routine maintenance check or an emergency repair in the middle of winter, you'll get the same honest service, fair pricing, and genuine care.
          </p>
        </div>
      </section>

      {/* 5. LET'S WORK TOGETHER CALL TO ACTION SECTION */}
      <section className="py-16 bg-[#061830] text-white px-4 text-center">
        <div className="max-w-[1000px] mx-auto bg-[#061830] py-4 rounded-3xl relative overflow-hidden">
          {/* Subtle decoration radar rings */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.03] border-dashed rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] border-dashed rounded-full" />
          </div>

          <div className="relative z-10 font-sans">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-300 text-sm sm:text-[15px] max-w-xl mx-auto leading-relaxed mb-8">
              Experience the difference of working with a company that genuinely cares. Get your free estimate today.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="bg-[#C41230] hover:bg-[#a80e27] hover:scale-[1.02] active:scale-[0.98] transition-all duration-205 text-white px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] cursor-pointer shadow-lg shadow-[#C41230]/10 shrink-0"
              >
                <span>GET FREE ESTIMATE</span>
                <span className="text-sm font-sans">→</span>
              </button>

              <a
                href="tel:5062910594"
                className="border border-white/20 hover:border-white/45 bg-transparent hover:bg-white/5 text-white hover:scale-[1.02] active:scale-[0.98] px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-black/10 cursor-pointer"
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
