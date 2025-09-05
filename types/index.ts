// Core business types
export interface ServiceArea {
    name: string;
    slug: string;
    population: string;
    growthRate: string;
    medianIncome: string;
    povertyRate: string;
    neighborhoods?: string[];
  }
  
  export interface Service {
    id: string;
    name: string;
    icon: string;
    description: string;
    fullDescription: string;
    pricing: string | PricingRange;
    features: string[];
    isFeatured?: boolean;
    savings?: string;
  }
  
  export interface PricingRange {
    min: number;
    max: number;
    unit: string;
    note?: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    service?: string;
    date?: string;
  }
  
  // Chat system types
  export interface ChatMessage {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    options?: ChatOption[];
    component?: React.ReactNode;
  }
  
  export interface ChatOption {
    id: string;
    text: string;
    value: string;
    featured?: boolean;
    badge?: string;
  }
  
  export interface UserData {
    service?: string;
    area?: string;
    size?: string;
    phone?: string;
    name?: string;
  }
  
  export type ChatState = 
    | 'welcome' 
    | 'service' 
    | 'area' 
    | 'size' 
    | 'pricing' 
    | 'contact' 
    | 'complete';
  
  export interface ChatSystemState {
    isOpen: boolean;
    messages: ChatMessage[];
    currentStep: ChatState;
    userData: UserData;
    isTyping: boolean;
  }
  
  // SEO and metadata types
  export interface PageMetadata {
    title: string;
    description: string;
    keywords: string[];
    openGraph?: {
      title: string;
      description: string;
      url: string;
      images?: string[];
    };
    twitter?: {
      title: string;
      description: string;
      images?: string[];
    };
    canonical?: string;
    robots?: string;
  }
  
  export interface LocalSEOData {
    businessName: string;
    address: {
      street?: string;
      city: string;
      state: string;
      zipCode?: string;
      country: string;
    };
    phone: string;
    email?: string;
    hours: {
      [key: string]: {
        open: string;
        close: string;
      } | 'closed';
    };
    services: string[];
    areasServed: string[];
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  }
  
  // Gallery and media types
  export interface GalleryImage {
    id: string;
    title: string;
    beforeImage: string;
    afterImage: string;
    location: string;
    description: string;
    alt: string;
  }
  
  export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category?: string;
  }
  
  // Form types
  export interface ContactForm {
    name: string;
    phone: string;
    email?: string;
    service: string;
    message: string;
    propertySize?: string;
    location?: string;
  }
  
  // Component prop types
  export interface HeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
    primaryCTA?: string;
    secondaryCTA?: string;
    onChatOpen: () => void;
  }
  
  export interface ServiceCardProps {
    service: Service;
    onClick?: () => void;
  }
  
  export interface TestimonialCardProps {
    testimonial: Testimonial;
  }
  
  export interface LocationPageProps {
    area: ServiceArea;
    services: Service[];
    testimonials: Testimonial[];
    faqs: FAQ[];
  }
  
  // Navigation types
  export interface NavLink {
    href: string;
    label: string;
    children?: NavLink[];
  }
  
  // Utility types
  export type Theme = 'light' | 'dark';
  export type DeviceType = 'mobile' | 'tablet' | 'desktop';
  export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
  
  // Analytics and tracking
  export interface AnalyticsEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
  }
  
  export interface ConversionData {
    source: string;
    medium: string;
    campaign?: string;
    content?: string;
    term?: string;
    value?: number;
  }