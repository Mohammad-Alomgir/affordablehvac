import { Heart, Phone, Mail, MapPin, Facebook } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  const servicesLinks = [
    { name: "Mini Split Installation", id: "services" },
    { name: "Central Heat Pump Installation", id: "services" },
    { name: "Mini Split Cleaning", id: "services" },
    { name: "Heat Pump Cleaning", id: "services" },
    { name: "Air Exchanger Cleaning", id: "services" },
    { name: "Dryer Vent Cleaning", id: "services" }
  ];

  const companyLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about-us" },
    { name: "Reviews", id: "reviews" },
    { name: "Project Gallery", id: "gallery" },
    { name: "Education", id: "maintenance" },
    { name: "Service Areas", id: "service-areas" },
    { name: "Contact", id: "quote" },
    { name: "Free Estimate", id: "quote" }
  ];

  const serviceAreasLinks = [
    { name: "Riverview", id: "service-areas" },
    { name: "Moncton", id: "service-areas" },
    { name: "Dieppe", id: "service-areas" },
    { name: "Salisbury", id: "service-areas" },
    { name: "Shediac", id: "service-areas" }
  ];

  return (
    <footer className="bg-[#041122] text-white font-sans select-all border-t border-white/5">
      {/* Top Black Bar Banner */}
      <div className="bg-[#030c18] border-b border-white/5 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-normal leading-tight">
              Ready to Get Comfortable?
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-400 font-sans mt-1">
              Free estimates — no obligation. Response within 24 hours.
            </p>
          </div>
          <button
            onClick={() => handleNavClick("quote")}
            className="w-full md:w-auto bg-[#C41230] hover:bg-[#a80e27] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white font-display text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl cursor-pointer shadow-lg shadow-[#C41230]/10 flex items-center justify-center gap-2"
          >
            <span>GET FREE ESTIMATE</span>
            <span className="text-sm font-sans">→</span>
          </button>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Company Profile Logo */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-3 group text-left cursor-pointer mb-6"
            >
              <svg className="w-12 h-12 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blades */}
                <path d="M50 50 C38 32, 28 38, 50 12 C52 12, 62 32, 50 50" fill="#64748b" />
                <path d="M50 50 C68 38, 62 28, 88 50 C88 52, 68 62, 50 50" fill="#1e3a8a" />
                <path d="M50 50 C62 68, 72 62, 50 88 C48 88, 38 68, 50 50" fill="#1d4ed8" />
                <path d="M50 50 C32 62, 38 72, 12 50 C12 48, 32 38, 50 50" fill="#475569" />
                
                {/* Core */}
                <circle cx="50" cy="50" r="16" fill="#0f172a" />
                
                {/* Cross */}
                <rect x="47.5" y="40" width="5" height="20" rx="1.5" fill="#ffffff" />
                <rect x="40" y="45.5" width="20" height="5" rx="1.5" fill="#ffffff" />
                <circle cx="50" cy="48" r="2.5" fill="#3b82f6" />
              </svg>
              <div>
                <div className="flex items-baseline leading-none font-display">
                  <span className="text-xl font-black mr-1" style={{ color: "#3b82f6" }}>E&amp;A</span>
                  <span className="text-xl font-black text-[#C41230]">AFFORDABLE</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-[#a1a1aa] font-black leading-none mt-1 font-sans">
                  HVAC SERVICES
                </div>
              </div>
            </button>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-sans max-w-sm mb-6">
              Christian-owned HVAC company serving Riverview, Moncton, Dieppe, and surrounding New Brunswick
              communities with honest, affordable heating and cooling solutions.
            </p>

            {/* Direct Contacts Row & Icons list */}
            <div className="space-y-4">
              <a
                href="tel:5062910594"
                className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-300 hover:text-[#C41230] transition-colors"
                aria-label="Call E&A Affordable HVAC"
              >
                <Phone className="w-4 h-4 text-[#C41230] shrink-0" />
                <span className="font-mono font-medium">(506) 291-0594</span>
              </a>

              <a
                href="mailto:anthonycasto1@gmail.com"
                className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-300 hover:text-[#C41230] transition-colors"
                aria-label="Email E&A Affordable HVAC"
              >
                <Mail className="w-4 h-4 text-[#C41230] shrink-0" />
                <span className="font-sans">anthonycasto1@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-300">
                <MapPin className="w-4 h-4 text-[#C41230] shrink-0" />
                <span className="font-sans">Riverview, New Brunswick</span>
              </div>
            </div>
          </div>

          {/* Column 2 Services Link list */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-base uppercase tracking-widest text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3 w-full">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-xs sm:text-[13px] text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li className="pt-2/5 mt-0.5">
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-xs font-display font-extrabold text-[#C41230] hover:text-[#9c0b23] cursor-pointer transition-colors uppercase tracking-[0.12em]"
                >
                  All Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 Company Link list */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-base uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3 w-full">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-xs sm:text-[13px] text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service locations & Social links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-base uppercase tracking-widest text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 w-full mb-7">
              {serviceAreasLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-xs sm:text-[13px] text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social media connection */}
            <a
              href="https://www.facebook.com/profile.php?id=61582071851342"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#132338] hover:bg-[#C41230] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-350 cursor-pointer shadow-sm"
              aria-label="Connect with E&A on Facebook"
            >
              <Facebook className="w-5 h-5 fill-current stroke-none" />
            </a>
          </div>
        </div>

        {/* Bottom copyright bars split */}
        <div className="mt-16 pt-8 border-t border-white/5 text-[12px] text-slate-400 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-center lg:text-left font-sans">
            © 2026 E&A Affordable HVAC Services. All rights reserved.
          </p>
          
          {/* Designer and LinkedIn credit with Mohammad Alomgir */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/alomgirwd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group text-slate-400 hover:text-white transition-colors"
            >
              {/* Custom refined round creator emblem */}
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-[#C41230] group-hover:border-[#C41230] group-hover:text-white transition-all text-[9px] font-bold font-display tracking-tight shrink-0">
                MA
              </div>
              <span className="font-sans text-[12px]">
                Website Created by <span className="font-bold text-white transition-colors group-hover:text-[#C41230]">Mohammad Alomgir</span>
              </span>
            </a>
          </div>

          <p className="flex items-center justify-center text-center font-sans">
            <span className="text-[#C41230] mr-1.5 text-base leading-none">✦</span>
            <span>Christian-Owned & Operated — Serving New Brunswick with Faith, Integrity & Quality</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
