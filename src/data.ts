import { Service, ValueCard, Review, BeforeAfterItem, ServiceArea } from "./types";

export const servicesData: Service[] = [
  {
    id: "mini-split-installation",
    title: "Mini Split Installation",
    description: "Energy-efficient mini split systems installed by certified pros — heating and cooling in one.",
    icon: "snowflake",
    category: "heating"
  },
  {
    id: "central-heat-pump",
    title: "Central Heat Pump Installation",
    description: "Whole-home comfort with a high-efficiency central heat pump system.",
    icon: "layers",
    category: "heating"
  },
  {
    id: "air-exchanger-installation",
    title: "Air Exchanger Installation",
    description: "Fresh air circulation for a healthier, more comfortable living environment.",
    icon: "wind",
    category: "cooling"
  },
  {
    id: "mini-split-cleaning",
    title: "Mini Split Cleaning",
    description: "Deep cleaning to remove mold, dust, and allergens — improving efficiency and air quality.",
    icon: "sparkles",
    category: "cleaning"
  },
  {
    id: "central-heat-pump-cleaning",
    title: "Central Heat Pump Cleaning",
    description: "Thorough cleaning and inspection to keep your system running at peak performance.",
    icon: "shield-check",
    category: "cleaning"
  },
  {
    id: "air-exchanger-cleaning",
    title: "Air Exchanger Cleaning",
    description: "Core cleaning, filter replacement, and airflow verification for cleaner indoor air.",
    icon: "filter",
    category: "cleaning"
  },
  {
    id: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning",
    description: "Remove dangerous lint buildup — reduce fire risk and improve dryer efficiency.",
    icon: "flame",
    category: "cleaning"
  },
  {
    id: "emergency-call-out",
    title: "Emergency Call-Out",
    description: "24/7 emergency response for urgent HVAC problems — nights, weekends & holidays.",
    icon: "phone-call",
    category: "emergency"
  }
];

export const valuesData: ValueCard[] = [
  {
    title: "Honest & Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what to expect before any work begins.",
    icon: "dollar-sign"
  },
  {
    title: "Faith-Based Values",
    description: "As a Christian-owned business, we treat every home with the respect, honesty, and care we'd give our own family. Integrity guides everything we do.",
    icon: "heart"
  },
  {
    title: "Experienced Technicians",
    description: "Our certified HVAC professionals bring years of hands-on expertise to every job — from routine maintenance to complex system installations.",
    icon: "wrench"
  },
  {
    title: "Residential & Commercial",
    description: "We serve both homeowners and businesses across the Greater Moncton area with tailored heating and cooling solutions for spaces of every size.",
    icon: "building"
  },
  {
    title: "Emergency Service Available",
    description: "HVAC emergencies don't wait for business hours. We offer prompt emergency service when you need it most — nights, weekends, and holidays.",
    icon: "clock"
  },
  {
    title: "Customer-First Approach",
    description: "Your comfort and satisfaction come first. We listen, explain your options clearly, and recommend only what's truly needed — never an unnecessary upsell.",
    icon: "users"
  }
];

export const reviewsData: Review[] = [
  {
    id: "review-1",
    name: "Ricky McLaughlin",
    rating: 5,
    title: "Showed Up in a Snowstorm - Wow",
    comment: "Wow, so happy with the work Anthony did on my mini splits today because there was a major snow storm. But I was not getting proper heat in the house so contacted him. He responded right away and said he would be over as soon as he was done his job. Man he showed up in a storm as if it was just a regular day of work."
  },
  {
    id: "review-2",
    name: "Brad Woodward",
    location: "Dieppe",
    rating: 5,
    title: "Excellent Work & Great Advice",
    comment: "Got our mini-splits, air exchange, and dryer duct cleaned. Anthony was super friendly and provided some excellent information that we didn't know on how to maintain our units. Pricing was very competitive and the work was done in the time frame expected."
  },
  {
    id: "review-3",
    name: "Veronic Rioux",
    rating: 5,
    title: "Honest, Trustworthy & Rare Service",
    comment: "I had a really great experience with Anthony. The technician was extremely professional, arrived on time, and explained everything clearly before starting any work. You can tell they take pride in what they do. Good customer service like this is rare these days, and it really stood out."
  }
];

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: "dryer-vent-deep-clean",
    title: "Dryer Vent Deep Clean",
    description: "Removing years of compacted flammable lint buildup to restore maximum dryer efficiency & ensure fire safety.",
    beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/eacd28ee-f15b-4ce4-bb52-c79350297eaa_zqmpnt.avif",
    afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/dca342ef-806d-40bd-82d7-cf846a65c646_xaftcv.avif",
    beforeAlt: "Extremely dirty dryer vent filled with thick lint layers",
    afterAlt: "Completely pristine and clean stainless dryer vent airway"
  },
  {
    id: "fantech-filter-restoration",
    title: "Fantech Filter Restoration",
    description: "Thorough electrostatic cell cleaning to remove persistent fine particulate, grease, and dust clogging airflow.",
    beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/fb575d97-1568-4c5f-b10c-5c009b4868ad_ktgxok.avif",
    afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/62676504-2c8c-49a0-a653-812285614c8a_g4adbx.avif",
    beforeAlt: "Clogged dark air filter cell block",
    afterAlt: "Bright and fully transparent restored mesh filter cell"
  },
  {
    id: "mini-split-deep-clean",
    title: "Mini Split Deep Clean",
    description: "Eliminating hazardous black mold spores and embedded dirt along the blower wheel, bringing fresh crisp air back.",
    beforeUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099852/18beebec-4bd3-4822-8a31-6a0dd3de4967_exzdfq.avif",
    afterUrl: "https://res.cloudinary.com/dmsdylx7q/image/upload/v1782099853/b0af0b41-6bd3-4a88-bac7-980386c553da_dw2pkr.avif",
    beforeAlt: "Neglected split system fan packed with mold and debris",
    afterAlt: "Sterilized split system fan looking brand new from factory"
  }
];

export const serviceAreasData: ServiceArea[] = [
  { name: "Riverview", isPrimary: true },
  { name: "Moncton", isPrimary: true },
  { name: "Dieppe", isPrimary: true },
  { name: "Salisbury", isPrimary: false },
  { name: "Shediac", isPrimary: false },
  { name: "Greater Moncton", isPrimary: false }
];
