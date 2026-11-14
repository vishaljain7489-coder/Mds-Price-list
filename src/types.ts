export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  badge?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  objective: string;
  adBudget: string;
  duration: string;
  leadsOrConversions: string;
  costPerResult: string;
  roas: string;
  insight: string;
  isDemo: boolean;
  badge: string;
  tags: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Reels' | 'Product' | 'Local' | 'LeadGen' | 'Promo';
  categoryLabel: string;
  format: '9:16 Vertical Reel' | '1:1 Square' | '4:5 Feed';
  metrics: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  hookText: string;
  handle: string;
  likes: string;
  comments: string;
  shares: string;
  audioTitle: string;
  ctaBadge: string;
  demoLabel: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    description?: string;
    icon?: string;
    tag?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  quote: string;
  avatar: string;
  metric: string;
  rating: number;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface AgencyPricing {
  reelsPackagePrice: number;     // e.g. 6000
  adsPackagePrice: number;       // e.g. 6000
  adsServiceFee: number;         // e.g. 3000
  adsMetaSpend: number;          // e.g. 3000
  starterPrice: number;          // e.g. 3000
  starterServiceFee: number;     // e.g. 1500
  starterMetaSpend: number;      // e.g. 1500
}

export interface AgencyClient {
  id: string;
  name: string;
  businessName: string;
  category: string;
  phone: string;
  email: string;
  city: string;
  packageSubscribed: string;
  totalBilled: number;
  amountPaid: number;
  amountDue: number;
  paymentStatus: 'Paid' | 'Partial' | 'Due';
  paymentMode: 'UPI' | 'Bank Transfer' | 'Cash' | 'Cheque';
  isVip: boolean;
  clientTemperament: string;
  reelsDelivered: number;
  reelsTotal: number;
  adsActive: number;
  adsPending: number;
  metaBudgetSpent: number;
  metaBudgetTotal: number;
  serviceStatus: 'Active & Optimizing' | 'In Production' | 'Delivered' | 'Pending Renewal';
  notes: string;
  createdDate: string;
}

export interface TeamMemberSalary {
  id: string;
  name: string;
  role: string;
  salaryAmount: number;
  payoutStatus: 'Paid' | 'Pending';
  payCycle: string;
  phone: string;
  notes?: string;
}
