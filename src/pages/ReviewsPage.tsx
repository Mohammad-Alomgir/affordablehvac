import { Star, MessageSquare, MapPin, CheckCircle, Quote, ThumbsUp, Calendar, Phone, ArrowRight } from "lucide-react";

interface ReviewsPageProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function ReviewsPage({ onQuoteClick, onCallClick }: ReviewsPageProps) {
  // 20 reviews from Facebook
  const reviews = [
    {
      name: "Raghu Sharma",
      comment: "Anthony is great at what he does, very professional and thorough with his work 100% recommended!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Krysta LeBlanc",
      comment: "Would highly recommend! Did a cleaning and servicing and explained all work done. Super personable and kind and great pricing! 10/10 ⭐️",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Christianne Louise",
      comment: "Very professional and timely servicing and cleaning of my HVAC units. Explained key maintenance points and took the time to troubleshoot and fix a noise from my mini split. Worth every penny! 10/10",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Brad Woodward",
      comment: "Got our mini-splits, air exchange, and dryer duct cleaned. Anthony was super friendly and provided some excellent information that we didn’t know on how to maintain our units. Pricing was very competitive and the work was done in the time frame expected, with some extra cleaning of our outside fans at our request. Excellent work and Anthony and E&A Affordable HVAC Services will become our choice for annual cleanings.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Kara Sutherland",
      comment: "Anthony at E & A Affordable HVAC Services is great to work with. Super friendly, showed up on time, and got everything done quickly and efficiently. Pricing is very fair with no surprises. You can tell they know what they’re doing. Would definitely recommend!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Jihen Chemli",
      comment: "Very professional, nice and friendly. Great service.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Kellie Saarloos",
      comment: "Awesome service. Highly recommend. Thank you!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Rick Petros",
      comment: "I’m very happy with the service I received from this E&A company. From start to finish, Anthony and his partner were professional, responsive, and easy to deal with. The job was completed on time and within budget, with no surprises. Quality work and great customer service — I would definitely recommend them to anyone needing HVAC work.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Hass Imda",
      comment: "Anthony has done a fantastic job at the mini split servicing. The noise has gone away from the heat pump. He is a super nice guy that makes it even more wonderful to deal with him. He is very knowledgeable in HVAC, mini split and dry vent. All my future jobs will go to him for sure. I would recommend Anthony to anyone. AAA++++",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Jackie Killorn",
      comment: "Great service, friendly and extremely knowledgeable!! Highly recommend!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Nick Perry",
      comment: "Very friendly and easy to schedule time to come. Very clean and knowledgeable about products. Highly recommend.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Veronic Rioux",
      comment: "I had a really great experience with Anthony. The technician was extremely professional, arrived on time, and explained everything clearly before starting any work. You can tell they take pride in what they do — the job was done carefully and neatly, and they made sure everything was working perfectly before leaving. Good customer service like this is rare days, and it really stood out. On top of that, the pricing was very fair …",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Keith Benson",
      comment: "Got my two units cleaned this morning, fast reliable, friendly service! Would recommend to anyone in need of some heat pump work!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Ricky McLaughlin",
      comment: "Wow so happy with the work Anthony did on my mini splits today. Hesitated to call him today because there was a major snow storm. But I was not getting proper heat in the house so contacted him and asked that he stops by next time he is in the area. He responded right away and said he would be over as soon as he was done his job.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Joycie Peters",
      comment: "Extremely happy with E&A services! Very knowledgeable, efficient, professional. Definitely recommend and will be setting up their services for each year when my mini split needs cleaning.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Gilles Allain",
      comment: "Anthony was a pleasure to deal with, very prompt, on time. Goes above and beyond. Great work ethics. We will use him again for sure.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Danika Albert",
      comment: "Great service! Anthony was great to deal with and was able to get the work done very quickly. I called on a Friday and he booked me in for Monday. I work in property management so I will definitely be using his services again!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Kirk Henwood",
      comment: "Great service! Anthony is a great guy to deal with. Highly recommend.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Sue Robichaud",
      comment: "Excellent service! Anthony went above and beyond to show me the difference before and after. Yuck! Definitely my #1 go to from now on! Thank you for taking such great care of my home!",
      date: "Recent Review",
      location: "Greater Moncton Area"
    },
    {
      name: "Janaina Resende Ferreira de Faria",
      comment: "Excellent service! They were professional and did a very thorough job cleaning my heat pump. Everything was explained clearly, and the system is running much better now. I really appreciate the attention to detail and would definitely recommend their services.",
      date: "Recent Review",
      location: "Greater Moncton Area"
    }
  ];

  return (
    <div className="select-all font-sans text-neutral-800 bg-[#F8F9FA]">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-100 text-slate-900 pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 overflow-hidden text-center border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-300/[0.2] border-dashed rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-slate-300/[0.2] border-dashed rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            SOCIAL PROOF
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[46px] text-slate-900 tracking-tight leading-none mb-6">
            Customer <span className="text-[#C41230]">Reviews</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Hear directly from your neighbors across New Brunswick. We take immense pride in our commitment to honest work, affordable pricing, and pristine completions.
          </p>
        </div>
      </section>

      {/* HIGHLIGHT FEEDBACK STATS BAR */}
      <section className="bg-white border-b border-gray-200 py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex justify-center items-center gap-1 text-[#C41230] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-[3]" />
              ))}
            </div>
            <div className="text-xl font-display font-black text-slate-900">5.0 Rating</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">On Facebook Reviews</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xl font-display font-black text-slate-900 mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Recommendation Rate</div>
            <div className="text-[10px] text-emerald-650 font-bold mt-1">Based on Facebook Activity</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xl font-display font-black text-slate-900 mb-1">20+</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Verifiable Comments</div>
            <div className="text-[10px] text-slate-500 mt-1">Direct Client Testimonials</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xl font-display font-black text-[#C41230] mb-1 flex justify-center items-center gap-1">
              <CheckCircle className="w-5 h-5 text-blue-600 fill-blue-50" />
              <span>Facebook</span>
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Highly Verified Auth</div>
            <div className="text-[10px] text-slate-500 mt-1">Authentic Community Growth</div>
          </div>
        </div>
      </section>

      {/* MASONRY REVIEWS GRID */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
            {reviews.map((item, idx) => {
              const initials = item.name.split(" ").map(n => n[0]).join("").toUpperCase();
              return (
                <div 
                  key={idx} 
                  className="break-inside-avoid inline-block w-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Faint Quote SVG in background */}
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100 group-hover:text-red-500/5 transition-colors duration-300 pointer-events-none" />

                  {/* Stars Row */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-750 text-sm leading-relaxed font-sans mb-6 relative z-10 whitespace-pre-line">
                    "{item.comment}"
                  </p>

                  {/* Customer author section */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 text-white flex items-center justify-center font-display font-black text-xs shadow-inner">
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-black text-xs text-slate-900 truncate">
                          {item.name}
                        </h4>
                        {/* Verified Blue Badge similar to Facebook style */}
                        <span className="inline-flex items-center justify-center bg-[#1877F2]/10 p-0.5 rounded-full" title="Verified Facebook recommender">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#1877F2] fill-current">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-slate-500 font-sans flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location}
                        </span>
                        <span className="text-[10px] text-blue-650 font-display font-bold px-1.5 py-0.5 rounded bg-blue-50 uppercase tracking-widest text-[8px]">
                          Facebook Rec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase mb-4 block">
            RESERVE YOUR SERVICE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Be Our Next <span className="text-[#C41230]">Happy Customer</span>
          </h2>
          <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans mb-10">
            Let E&A Affordable HVAC Services give your home the perfect treatment it deserves. Get in touch with us today for transparent pricing and incredible outcomes.
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
              className="border-2 border-slate-300 hover:border-slate-400 bg-slate-100 text-slate-800 hover:scale-[1.01] active:scale-[0.98] px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-red-500" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
