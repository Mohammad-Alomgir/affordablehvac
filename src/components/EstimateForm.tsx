import React, { useState, useEffect } from "react";
import { CheckCircle, Phone, MessageSquare, Loader2, Send, ShieldCheck, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function EstimateForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaVerifying, setCaptchaVerifying] = useState(true);

  // Simulate Cloudflare Turnstile verification shortly after mounting / user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setCaptchaVerifying(false);
      setCaptchaVerified(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) {
      errors.phone = "Provide a valid phone number (e.g. (506) 291-0594)";
    }
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Provide a valid email address";
    }
    if (!formData.service) errors.service = "Please select a service";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!captchaVerified) {
      alert("Please wait for security verification to complete.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server side email transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const servicesOptionList = [
    { value: "mini-split-install", label: "Mini Split Installation" },
    { value: "central-heat-install", label: "Central Heat Pump Installation" },
    { value: "air-exchanger-install", label: "Air Exchanger Installation" },
    { value: "mini-split-clean", label: "Mini Split Cleaning" },
    { value: "central-heat-clean", label: "Central Heat Pump Cleaning" },
    { value: "air-exchanger-clean", label: "Air Exchanger Cleaning" },
    { value: "dryer-vent-clean", label: "Dryer Vent Cleaning" },
    { value: "emergency-callout", label: "Emergency Call-Out" },
    { value: "general-estimate", label: "General Estimate / Inquiry" }
  ];

  const bulletList = [
    "Free, no-obligation estimate",
    "Response within 24 hours — often same day",
    "Trusted by homeowners across New Brunswick"
  ];

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct info bullet list */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-red-650 font-mono">
              GET STARTED TODAY
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue-900 mt-2 leading-tight tracking-tight">
              Need HVAC Service <span className="text-brand-red-650">You Can Trust?</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red-500 mt-4 mb-6 rounded-full" />

            <p className="text-base text-gray-600 leading-relaxed font-sans max-w-xl">
              Get a free estimate today and experience the difference of working with a company that
              puts integrity, honesty, and customer care first. We're happy to discuss your heating and
              cooling needs with no pressure.
            </p>

            <div className="mt-8 space-y-4 w-full">
              {bulletList.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-red-650 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700 font-sans">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Direct phone CTA card */}
            <div className="mt-10 bg-gray-50 border border-gray-100 p-6 rounded-2xl w-full max-w-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red-500/10 flex items-center justify-center text-brand-red-650 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Have an Emergency? Call Now</p>
                <a
                  href="tel:5062910594"
                  className="font-mono text-xl sm:text-2xl font-black text-brand-blue-950 hover:text-brand-red-650 transition-colors block mt-0.5"
                >
                  (506) 291-0594
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Intake Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative" id="estimate-form-card">
              
              {/* Top status bar */}
              <div className="bg-brand-blue-900 px-6 sm:px-8 py-5 text-white text-left flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight select-all">Request Your Free Estimate</h3>
                  <p className="text-[10px] text-gray-300 font-sans mt-1">Response within 24 business hours</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-brand-red-500 fill-brand-red-500/10 hidden sm:block" />
              </div>

              <div className="p-6 sm:p-8 text-left">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {/* Name Row */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                              formErrors.name
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-brand-red-500/10 focus:border-brand-red-500"
                            }`}
                          />
                        </div>
                        {formErrors.name && (
                          <p className="text-[10px] text-red-500 font-bold font-sans mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Phone & Email Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(506) 555-0123"
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                              formErrors.phone
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-brand-red-500/10 focus:border-brand-red-500"
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[10px] text-red-500 font-bold font-sans mt-1">{formErrors.phone}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                              formErrors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-brand-red-500/10 focus:border-brand-red-500"
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[10px] text-red-500 font-bold font-sans mt-1">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <label htmlFor="service" className="block text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1.5">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            formErrors.service
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-brand-red-500/10 focus:border-brand-red-500"
                          }`}
                        >
                          <option value="">Select a service...</option>
                          {servicesOptionList.map((srv) => (
                            <option key={srv.value} value={srv.value}>
                              {srv.label}
                            </option>
                          ))}
                        </select>
                        {formErrors.service && (
                          <p className="text-[10px] text-red-500 font-bold font-sans mt-1">{formErrors.service}</p>
                        )}
                      </div>

                      {/* Message Optional field */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1.5">
                          Message / Job Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or issue..."
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-500/10 focus:border-brand-red-500 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      {/* Cloudflare turnstile captcha placeholder block */}
                      <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {captchaVerifying ? (
                            <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />
                          ) : (
                            <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                              <CheckCircle className="w-3 h-3 text-white fill-emerald-500 shrink-0" />
                            </div>
                          )}
                          <span className="text-xs text-gray-500 font-medium font-sans">
                            {captchaVerifying ? "Verifying secure browser connection..." : "Success! verified Secure connection"}
                          </span>
                        </div>
                        <div className="text-[9px] text-right font-mono text-gray-400 capitalize">
                          <span>cloudfare</span> <br />
                          <span className="text-[7px]">privacy - terms</span>
                        </div>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-red-650 hover:bg-brand-red-700 hover:shadow-lg disabled:opacity-75 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest font-display flex items-center justify-center gap-2 cursor-pointer transition-all mt-4"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Request</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    /* Elegant instant success feedback screen */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 flex flex-col items-center justify-center select-all"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                        <CheckCircle className="w-8 h-8 fill-emerald-500/5 stroke-[2.5]" />
                      </div>
                      
                      <h3 className="font-display font-black text-2xl text-brand-blue-900 leading-tight">
                        Estimate Request Sent!
                      </h3>
                      <p className="text-xs text-brand-red-650 uppercase font-bold tracking-widest mt-1 font-mono">
                        Ticket: E&A-{Math.floor(100000 + Math.random() * 900000)}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-sm mx-auto mt-4 px-4">
                        Thank you, <span className="font-bold text-brand-blue-950">{formData.name}</span>. 
                        Our team has received your service registration for standard{" "}
                        <span className="font-semibold text-brand-blue-950">
                          {servicesOptionList.find(s => s.value === formData.service)?.label || "Air Care"}
                        </span>
                        . We will review details and reach out to you shortly at{" "}
                        <span className="font-mono text-brand-red-600 font-bold">{formData.phone}</span>.
                      </p>

                      <div className="mt-8 bg-gray-50 border border-gray-150 rounded-xl p-4 text-left w-full max-w-md text-xs font-mono text-gray-500 space-y-1.5">
                        <p className="border-b border-gray-200 pb-1 font-bold text-[10px] text-gray-400 uppercase tracking-wider font-sans mb-1">Receipt Summary</p>
                        <p><span className="text-gray-400">Name:</span> {formData.name}</p>
                        <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                        <p><span className="text-gray-400">Time:</span> {new Date().toLocaleString()}</p>
                      </div>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                        }}
                        className="mt-8 text-xs font-bold text-brand-blue-900 hover:text-brand-red-600 font-display uppercase tracking-widest cursor-pointer transition-colors"
                      >
                        ← Register Another Estimate
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
