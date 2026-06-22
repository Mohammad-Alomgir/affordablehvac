import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Foundation from "./components/Foundation";
import Maintenance from "./components/Maintenance";
import Testimonials from "./components/Testimonials";
import BeforeAfter from "./components/BeforeAfter";
import ServiceAreas from "./components/ServiceAreas";
import EstimateForm from "./components/EstimateForm";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import AboutUsPage from "./components/AboutUsPage";
import GalleryPage from "./components/GalleryPage";
import EducationPage from "./components/EducationPage";
import ReviewsPage from "./components/ReviewsPage";

export default function App() {
  const [view, setView] = useState<"home" | "services" | "about" | "gallery" | "education" | "reviews">("home");

  const scrollToSection = (id: string) => {
    if (id === "services") {
      setView("services");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "about-us") {
      setView("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "reviews") {
      setView("reviews");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "gallery") {
      setView("gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "maintenance") {
      setView("education");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        performScroll(id);
      }, 150);
    } else {
      performScroll(id);
    }
  };

  const performScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset scroll to account for sticking header height (~100px)
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "hero") {
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHeroActions = (action: "quote" | "gallery" | "phone") => {
    if (action === "quote") {
      scrollToSection("quote");
    } else if (action === "gallery") {
      scrollToSection("gallery");
    }
  };

  const handleMaintenanceActions = (action: "estimate" | "more") => {
    if (action === "estimate") {
      scrollToSection("quote");
    } else if (action === "more") {
      scrollToSection("services");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between selection:bg-brand-red-650 selection:text-white overflow-x-hidden">
      {/* 1. Sticky Navigation Header */}
      <Header onNavigate={scrollToSection} />

      <main className="grow">
        {view === "home" && (
          <>
            {/* 2. Hero Presentation Stage */}
            <Hero onCtas={handleHeroActions} />

            {/* 3. Core Values & Customer Anchors */}
            <WhyChooseUs />

            {/* 4. Complete Catalog of 8 Services & Modal Detail System */}
            <Services onQuoteClick={() => scrollToSection("quote")} />

            {/* 5. Faith-based Identity Story & Chrono-badge */}
            <Foundation />

            {/* 6. Multi-column Preventative Maintenance Schedules */}
            <Maintenance onCtas={handleMaintenanceActions} />

            {/* 7. Fully Interactive 5-star Slider/Grid Reviews */}
            <Testimonials onViewAllClick={() => scrollToSection("reviews")} />

            {/* 8. Drag-to-reveal Before & After Interactive Slides */}
            <BeforeAfter />

            {/* 9. Regional Dispatch Locations Map pin & directory panels */}
            <ServiceAreas />

            {/* 10. Intake Free Quote Form & Security check verification */}
            <EstimateForm />
          </>
        )}

        {view === "services" && (
          <>
            {/* Dedicated full Services Page matching the exact design and context in the specs */}
            <ServicesPage 
              onQuoteClick={() => scrollToSection("quote")}
              onCallClick={() => window.open("tel:5062910594")}
            />
            {/* Direct Intake Free Quote Form for high translation quality */}
            <EstimateForm />
          </>
        )}

        {view === "about" && (
          <>
            {/* Dedicated full About Us Page matching the exact design and context in specs */}
            <AboutUsPage 
              onQuoteClick={() => scrollToSection("quote")}
              onCallClick={() => window.open("tel:5062910594")}
            />
            {/* Direct Intake Free Quote Form for high translation quality */}
            <EstimateForm />
          </>
        )}

        {view === "gallery" && (
          <>
            {/* Dedicated full Gallery Page matching the exact photo before/after specs */}
            <GalleryPage 
              onQuoteClick={() => scrollToSection("quote")}
              onCallClick={() => window.open("tel:5062910594")}
            />
            {/* Direct Intake Free Quote Form for high translation quality */}
            <EstimateForm />
          </>
        )}

        {view === "reviews" && (
          <>
            {/* Dedicated full Reviews Page with 20 facebook reviews on a masonry grid */}
            <ReviewsPage 
              onQuoteClick={() => scrollToSection("quote")}
              onCallClick={() => window.open("tel:5062910594")}
            />
            {/* Direct Intake Free Quote Form for high translation quality */}
            <EstimateForm />
          </>
        )}

        {view === "education" && (
          <>
            {/* Dedicated full Education Page */}
            <EducationPage 
              onQuoteClick={() => scrollToSection("quote")}
              onCallClick={() => window.open("tel:5062910594")}
              onServicesClick={() => scrollToSection("services")}
            />
            {/* Direct Intake Free Quote Form for high translation quality */}
            <EstimateForm />
          </>
        )}
      </main>

      {/* 11. Multi-column Branding Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

