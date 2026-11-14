export interface BrandConfig {
  name: string;
  tagline: string;
  heroSubtitle: string;
  badgeText: string;
  yearTag: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  instagram: string;
  youtube: string;
  twitter: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  pillTags: string[];
  statusLabel: string;
  bracketTag: string;
  keyWords: string[];
  giantHeadline: string;
  heroLead: string;
  ctaText: string;
  rotatingBadgeText: string;
  marqueeTape: string[];
}

export interface StatChip {
  label: string;
  value: string;
  color: string;
}

export interface HeroPortfolioCard {
  id: string;
  tilt: string;
  title: string;
  client: string;
  niche: string;
  metrics: string;
  views: string;
  badge: string;
  image: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'All' | 'Reels' | 'Ads' | 'Brand Campaigns' | string;
  tag: string;
  views: string;
  leads: string;
  cpl: string;
  image: string;
  videoUrl?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  popular: boolean;
  features: string[];
  cta: string;
}

export interface ComboPackageItem {
  id: string;
  name: string;
  badge: string;
  price: string;
  originalPrice: string;
  period: string;
  desc: string;
  deliverables: string[];
}

export interface CollabPageItem {
  name: string;
  niche: string;
  followers: string;
  typicalPrice: string;
  agencyPrice: string;
  savings: string;
}

export interface ComparisonRowItem {
  service: string;
  directPrice: string;
  throughUs: string;
  savings: string;
  note: string;
}

export interface TestimonialItem {
  name: string;
  business: string;
  location: string;
  quote: string;
  stars: number;
  result: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const BRAND: BrandConfig;
export const PRELOADER: {
  giantWord: string;
  subLabel: string;
  durationMs: number;
};
export const NAVBAR: {
  logoText: string;
  links: NavLink[];
};
export const HERO: HeroConfig;
export const STATS: {
  chips: StatChip[];
  partnerLabel: string;
  partnerName: string;
  partnerQuote: string;
  partnerAuthor: string;
};
export const HERO_PORTFOLIO_CARDS: HeroPortfolioCard[];
export const ABOUT_STATEMENT: {
  counter: string;
  badge: string;
  titleBig: string;
  titleSmall: string;
  bodyText: string;
};
export const WHAT_WE_DO: {
  badge: string;
  heading: string;
  steps: StepItem[];
  bookingCard: {
    planName: string;
    platform: string;
    startDate: string;
    slotTime: string;
    price: string;
    badge: string;
    location: string;
  };
  columns: {
    reels: {
      label: string;
      text: string;
    };
    ads: {
      label: string;
      text: string;
    };
  };
};
export const PORTFOLIO_ITEMS: PortfolioItem[];
export const PACKAGES: PackageItem[];
export const COMBO_PACKAGES: ComboPackageItem[];
export const COLLAB_PAGES: CollabPageItem[];
export const COMPARISON_ROWS: ComparisonRowItem[];
export const TESTIMONIALS: TestimonialItem[];
export const FAQS: FaqItem[];
export const FOOTER: {
  badge: string;
  bigTitle: string;
  leftSub: string;
  rightSub: string;
  rights: string;
  disclaimer: string;
};
