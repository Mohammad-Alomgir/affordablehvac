export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "heating" | "cooling" | "cleaning" | "emergency";
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  location?: string;
  rating: number;
  title: string;
  comment: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface ServiceArea {
  name: string;
  isPrimary: boolean;
}
