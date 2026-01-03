
export interface Car {
  id: string;
  name: string;
  type: string;
  seats: number | string;
  pricePerDay: number;
  image: string;
  fuel: string;
  transmission: string;
  tags: string[];
  description: string;
  carwashFee: number;
  availability: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  toursCount: number;
  highlight: string;
}

export interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  includes: string[];
  exclusions?: string[];
  image: string;
  itinerarySummary: string;
  destinationId: string;
  isPopular?: boolean;
  environmentalFee?: string;
  destinationsList?: string[];
  notes?: string;
  pricingTiers?: { label: string; price: number }[];
}

export type ResourceType = 'car' | 'destination' | 'tour';
