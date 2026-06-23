import { useState, useEffect } from "react";
import { Menu, X, Phone, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "SERVICES", id: "services" },
    { name: "ABOUT US", id: "about-us" },
    { name: "REVIEWS", id: "reviews" },
    { name: "GALLERY", id: "gallery" },
    { name: "EDUCATION", id: "maintenance" }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-50/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/60 text-slate-900"
            : "bg-slate-50 py-4 text-slate-900 border-b border-slate-200/40"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo area with identical styling */}
            <button
              onClick={() => handleItemClick("hero")}
              className="flex items-center cursor-pointer"
            >
              {/* Desktop Logo */}
              <img 
                src="https://res.cloudinary.com/dmsdylx7q/image/upload/v1782098776/577350330_122107627137069061_7501378454222694028_nn-removebg-preview_bg4ocb.png" 
                alt="E&A Affordable HVAC Services Logo" 
                className="hidden sm:block h-11 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              {/* Mobile Logo */}
              <img 
                src="https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099008/577350330_122107627137069061_7501378454222694028_nn-removebg-previeww_b0v9f3.png" 
                alt="E&A Affordable HVAC Services Logo Mobile" 
                className="block sm:hidden h-10 w-auto max-w-[170px] object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="font-display text-[11px] lg:text-xs font-bold text-slate-700 hover:text-brand-red-650 cursor-pointer transition-colors relative py-2 tracking-widest"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action Items */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8">
              {/* Call Number directly */}
              <a
                href="tel:5062910594"
                className="flex items-center gap-2 group hover:text-brand-red-650 transition-colors text-slate-800"
              >
                <Phone className="w-4 h-4 text-brand-red-500" />
                <span className="font-mono text-xs lg:text-sm font-bold tracking-tight">(506) 291-0594</span>
              </a>

              {/* ESTIMATE CTA */}
              <button
                onClick={() => handleItemClick("quote")}
                className="bg-brand-red-600 hover:bg-brand-red-700 hover:shadow-lg hover:shadow-brand-red-500/10 transition-all duration-300 text-white px-5 py-3 rounded-lg text-xs font-black tracking-widest uppercase font-display cursor-pointer"
              >
                GET MY FREE ESTIMATE
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:5062910594"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-200/50 hover:bg-brand-red-600/10 transition-all"
              >
                <Phone className="w-4 h-4 text-brand-red-500" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer text-slate-800"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed top-[75px] left-0 right-0 w-full bg-slate-50 border-b border-slate-200/80 z-40 shadow-2xl py-6 px-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="font-display text-left text-xs font-black tracking-widest text-slate-700 hover:text-brand-red-650 py-2.5 border-b border-slate-200/60 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:5062910594"
                  className="flex items-center justify-center gap-3 bg-slate-200/40 border border-slate-200 rounded-lg py-3 hover:bg-slate-200/85 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red-500" />
                  <span className="font-mono text-sm font-bold text-slate-800">(506) 291-0594</span>
                </a>
                <button
                  onClick={() => handleItemClick("quote")}
                  className="bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-lg py-3.5 text-center text-xs font-black tracking-widest uppercase font-display cursor-pointer"
                >
                  GET MY FREE ESTIMATE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
