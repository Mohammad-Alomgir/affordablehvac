import { Handshake, Heart, Wrench, Building, AlarmClock, Users } from "lucide-react";
import { motion } from "motion/react";

interface ValueCard {
  title: string;
  description: string;
  icon: any;
  highlighted?: boolean;
}

const values: ValueCard[] = [
  {
    title: "Honest & Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what to expect before any work begins.",
    icon: Handshake
  },
  {
    title: "Faith-Based Values",
    description: "As a Christian-owned business, we treat every home with the respect, honesty, and care we'd give our own family. Integrity guides everything we do.",
    icon: Heart,
    highlighted: true
  },
  {
    title: "Experienced Technicians",
    description: "Our certified HVAC professionals bring years of hands-on expertise to every job — from routine maintenance to complex system installations.",
    icon: Wrench
  },
  {
    title: "Residential & Commercial",
    description: "We serve both homeowners and businesses across the Greater Moncton area with tailored heating and cooling solutions for spaces of every size.",
    icon: Building
  },
  {
    title: "Emergency Service Available",
    description: "HVAC emergencies don't wait for business hours. We offer prompt emergency service when you need it most — nights, weekends, and holidays included.",
    icon: AlarmClock
  },
  {
    title: "Customer-First Approach",
    description: "Your comfort and satisfaction come first. We listen, explain your options clearly, and recommend only what's truly needed — never an unnecessary upsell.",
    icon: Users
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold tracking-[0.25em] text-[#C41230] uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mt-3 tracking-normal leading-[1.12]">
            Why Choose <span className="text-[#C41230]">E&A Affordable</span> HVAC<br />Services
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#4a5568] font-sans leading-relaxed max-w-2xl mx-auto">
            We're not just another HVAC company. We're your neighbors, committed to keeping your family comfortable year-round with honest work and fair prices.
          </p>
        </div>

        {/* 3x2 Grid */}
        <motion.div
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-80px" }}
         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col items-start text-left"
                id={`value-card-${idx}`}
              >
                {/* Icon Wrapper */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    item.highlighted 
                      ? "bg-[#C41230] text-white shadow-md shadow-[#C41230]/20" 
                      : "bg-[#C41230]/8 text-[#C41230]"
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a5568] font-sans leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

