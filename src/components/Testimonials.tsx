import { Star, Quote, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialsProps {
  onViewAllClick: () => void;
}

export default function Testimonials({ onViewAllClick }: TestimonialsProps) {
  // Use the first 2 reviews from the reviews page
  const displayedReviews = [
    {
      id: "review-raghu",
      name: "Raghu Sharma",
      comment: "Anthony is great at what he does, very professional and thorough with his work 100% recommended!",
      rating: 5,
      location: "Greater Moncton Area"
    },
    {
      id: "review-krysta",
      name: "Krysta LeBlanc",
      comment: "Would highly recommend! Did a cleaning and servicing and explained all work done. Super personable and kind and great pricing! 10/10 ⭐️",
      rating: 5,
      location: "Greater Moncton Area"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-red-600 font-mono">
            TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue-900 mt-2 tracking-tight">
            What Our <span className="text-brand-red-650">Customers</span> Are Saying
          </h2>
          <div className="w-16 h-1 bg-brand-red-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Real reviews from real customers across the Greater Moncton area. Your comfort and trust drive everything we do.
          </p>
        </div>

        {/* Reviews Grid (Perfect centering with 2 cards) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {displayedReviews.map((review, index) => {
            const initials = review.name.split(" ").map(n => n[0]).join("").toUpperCase();
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-100 flex flex-col justify-between items-start text-left relative overflow-hidden shadow-sm hover:shadow-md transition-all group hover:border-brand-red-500/10"
              >
                {/* Decorative quote icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-200/50 group-hover:text-brand-red-500/5 transition-colors pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-gray-700 font-sans leading-relaxed mb-6 italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* User Info footer */}
                <div className="flex items-center gap-2.5 mt-auto border-t border-gray-200/40 pt-4 w-full">
                  <div className="w-9 h-9 rounded-full bg-brand-red-500/10 flex items-center justify-center text-brand-red-650 shrink-0 font-display font-black text-xs">
                    {initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-black text-xs text-brand-blue-900 leading-none">
                        {review.name}
                      </h4>
                      <span className="inline-flex items-center justify-center bg-[#1877F2]/10 p-0.5 rounded-full" title="Verified Facebook recommender">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-[#1877F2] fill-current">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 font-medium font-sans mt-1 leading-none">
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See All button */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center justify-center gap-2 bg-brand-blue-900 hover:bg-brand-blue-800 transition-all text-white font-display text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl cursor-pointer hover:shadow-lg shadow-sm active:scale-95"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 text-brand-red-650" />
          </button>
        </div>
      </div>
    </section>
  );
}

