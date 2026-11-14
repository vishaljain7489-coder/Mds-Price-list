import { PricingPlan, ServiceItem, CaseStudy, CreativeItem, QuizQuestion, Testimonial, FAQItem } from '../types';

export const AGENCY_CONFIG = {
  name: "OVERSIGHT MEDIA",
  tagline: "Performance Video Creatives & Hyper-Local Meta Ad Engineering.",
  heroLabel: "PERFORMANCE MARKETING & VIDEO CREATIVE AGENCY",
  heroHeadlinePrefix: "We Turn Local Offline Footfall",
  heroHeadlineHighlight: "Into Predictable Daily Sales.",
  heroSupportingCopy: "We engineer high-retention 9:16 vertical video hooks and hyper-local Meta Ads Manager campaigns for offline stores, showrooms, and local businesses.",
  whatsappNumber: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "partner@oversightmedia.in",
  instagram: "https://instagram.com/oversightmedia",
  facebook: "https://facebook.com/oversightmedia",
  address: "Cyber Hub, DLF Phase 2, Gurugram / Mumbai, India",
  meetingLink: "https://calendly.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export const MARQUEE_ITEMS = [
  "META ADS",
  "FACEBOOK ADVERTISING",
  "INSTAGRAM REELS ADS",
  "LEAD GENERATION",
  "CAMPAIGN OPTIMIZATION",
  "RETARGETING",
  "CREATIVE STRATEGY",
  "ROAS SCALING",
  "PIXEL & CAPI SETUP",
  "AUDIENCE RESEARCH"
];

export const INTRO_CARDS = [
  {
    number: "01",
    title: "Reach The Right Audience",
    description: "Laser-focused custom, lookalike, and interest-layered targeting. Stop burning ad budgets on users who will never purchase your services.",
    icon: "Target",
    highlight: "Laser Precision"
  },
  {
    number: "02",
    title: "Test Better Creatives",
    description: "Engineered hooks, compelling scroll-stoppers, and problem-solution video scripts specifically adapted for high-converting Meta formats.",
    icon: "Sparkles",
    highlight: "High CTR Angles"
  },
  {
    number: "03",
    title: "Optimize For Business Goals",
    description: "We don't optimize for vanity likes or clicks. We train Meta's machine learning for WhatsApp leads, phone enquiries, and booked revenue.",
    icon: "TrendingUp",
    highlight: "Revenue Focused"
  }
];

export const STATS_ITEMS = [
  { label: "Active Client Verticals", value: 8, suffix: "+", desc: "Gyms, Real Estate, Salons, D2C & Local Pros" },
  { label: "Ad Campaigns Built", value: 240, suffix: "+", desc: "Systematic multi-angle creative tests" },
  { label: "Managed Meta Spend", value: 35, suffix: "L+", prefix: "₹", desc: "Strict adherence to profitable unit economics" },
  { label: "Average Lead Cost Cut", value: 38, suffix: "%", desc: "Achieved via Ads Manager audience pruning" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "meta-management",
    number: "01",
    title: "META ADS MANAGEMENT",
    description: "End-to-end Facebook and Instagram campaign architecture, account hygiene, bid management, and continuous scaling.",
    iconName: "Flame",
    deliverables: ["Full Ads Manager Setup", "Campaign Budget Optimization (CBO)", "Daily Bid & Placement Monitoring", "Negative Audience Exclusion"],
    badge: "Core Service"
  },
  {
    id: "video-reels-ads",
    number: "02",
    title: "VIDEO ADS & REELS",
    description: "Turn existing business videos and raw footage into strategically structured, high-retention 9:16 vertical ad creatives.",
    iconName: "Video",
    deliverables: ["Pattern Interrupt Hooks", "Dynamic Subtitling & Motion Cues", "Direct Call-to-Actions", "A/B Hook Variations"],
    badge: "High Engagement"
  },
  {
    id: "lead-generation",
    number: "03",
    title: "LEAD GENERATION",
    description: "High-intent Instant Forms, Messenger/WhatsApp funnels, and landing page destination campaigns designed for instant enquiries.",
    iconName: "UserCheck",
    deliverables: ["Pre-qualifying Custom Questions", "Instant WhatsApp Direct Routing", "Spam & Bot Lead Filtration", "CRM / Sheet Webhook Integration"],
    badge: "Conversion Engine"
  },
  {
    id: "audience-targeting",
    number: "04",
    title: "AUDIENCE TARGETING",
    description: "Deep competitor research, geo-radius pinpointing, hyper-local demographics, and predictive lookalike segmentation.",
    iconName: "Crosshair",
    deliverables: ["Hyper-Local Radius Pinpointing", "Custom Affinity Audiences", "High-Net-Worth Household Targeting", "Audience Overlap Prevention"],
  },
  {
    id: "retargeting-funnels",
    number: "05",
    title: "RETARGETING",
    description: "Reconnect with warm prospects who watched your videos, visited your Instagram profile, or abandoned their enquiry forms.",
    iconName: "Repeat",
    deliverables: ["3-Second & 50% Video Viewers", "Instagram & FB Page Engagers", "Custom Pixel Custom Audiences", "FOMO & Objection-Handling Creatives"],
  },
  {
    id: "campaign-optimization",
    number: "06",
    title: "CAMPAIGN OPTIMIZATION",
    description: "Data-driven ad refreshes, weekly demographic audits, creative fatigue diagnosis, and transparent performance telemetry.",
    iconName: "BarChart3",
    deliverables: ["Weekly Transparent KPI Sheets", "Creative Fatigue Alerts", "Bid Adjustments for Peak Hours", "Continuous ROAS Tuning"],
  }
];

export interface AdPackage {
  id: string;
  name: string;
  price: number;
  agencyFee: number;
  adBudget: number;
  testingBudget?: number;
  duration: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  options?: string[];
  businessSpecificOutcomes: Record<string, string>;
}

export const AGENCY_AD_PACKAGES: AdPackage[] = [
  {
    id: "starter-3000",
    name: "STARTER AD PACKAGE",
    price: 3000,
    agencyFee: 1500,
    adBudget: 1500,
    duration: "30 Days Service",
    tagline: "Sabse budget-friendly plan. Testing aur steady local inquiries ke liye best.",
    popular: false,
    features: [
      "30 Days Complete Agency Service (Fee: ₹1,500)",
      "Meta Direct Ad Budget (₹1,500 paid to Meta)",
      "Choice A: 15 Reels par ads run karein (~₹100/reel)",
      "Choice B: Top 3 High-Impact Videos par aggressive ads (~₹500/video)",
      "Targeted Audience Setup & City/Radius Pinpointing",
      "Weekly Performance & Lead Reporting on WhatsApp",
      "100% Client Ad Account Ownership"
    ],
    options: [
      "15 Reels Distributed Testing (₹100/reel ad budget)",
      "Top 3 High-Impact Focus Videos (₹500/video ad budget)"
    ],
    businessSpecificOutcomes: {
      retail: "Local area buyers aur store walk-ins ke liye targeted ads",
      food: "Near-by foodies ke liye Sunday & evening table inquiries",
      car: "Direct WhatsApp inquiries for test drive and quotes",
      gym: "Trial pass aur 7-day walk-in inquiries",
      other: "High-intent WhatsApp customer leads"
    }
  },
  {
    id: "performance-5000",
    name: "PERFORMANCE LEAD GEN PACKAGE",
    price: 5000,
    agencyFee: 2500,
    testingBudget: 1000,
    adBudget: 1500,
    duration: "30 Days Service",
    tagline: "Maximized Lead Generation. Sabse zyada business inquiries aur verified forms ke liye.",
    popular: true,
    features: [
      "Complete Agency Setup & Optimization (Fee: ₹2,500)",
      "A/B Campaign & Angle Testing Budget (₹1,000 for winning test)",
      "Pure Customer Acquisition / Lead Spend (₹1,500)",
      "Pre-qualified Instant Lead Forms & Spam Filtering",
      "Direct WhatsApp Lead Routing (Baat seedha aap karenge)",
      "Competitor Research & Hyper-Local Geo-fencing",
      "Pixel / Meta Conversions API & Retargeting Setup",
      "Continuous Bid Tuning & Weekly KPI Dashboard"
    ],
    businessSpecificOutcomes: {
      retail: "Retail Business: Zyada se zyada customer leads aur direct store inquiries",
      food: "Restaurant / Food: New customer footfall aur direct table orders",
      car: "Car / Dealership: Verified inquiry forms aur serious buyers ke WhatsApp contacts",
      gym: "Gym / Fitness: Trial pass bookings aur high-ticket membership signups",
      other: "Pre-qualified direct leads with name, phone and budget"
    }
  }
];

export const REEL_PRODUCTION_PACKAGE = {
  id: "reels-5000",
  name: "DEDICATED REEL PACKAGE",
  price: 5000,
  tagline: "Separate Content Creation & Viral Hook Editing Package.",
  deliverables: [
    "15 High-Retention Strategic Reels (AI-assisted viral hooks)",
    "Pattern Interrupt 3-Second Openers & Kinetic Subtitling",
    "Direct Response Scriptwriting for Meta 9:16 vertical feeds",
    "Professional Color Grade, Sound Design & Music Sync",
    "Can be taken standalone or paired with any Ad Package"
  ]
};

export const COMPARISON_DATA = {
  boostPost: {
    title: "Boost Post (Instagram / Facebook App)",
    subtitle: "Built for quick casual engagement with limited controls",
    pros: ["Takes only 2 clicks from your mobile phone", "Good for getting vanity likes and profile visits"],
    cons: [
      "Extremely limited campaign objectives (mostly profile visits/post engagement)",
      "Very basic demographic and location radius controls",
      "No proper A/B creative testing or hook split tests",
      "Limited conversion tracking & no deep Pixel/CAPI optimization",
      "No full-funnel custom retargeting sequences",
      "Higher long-term cost per real qualified lead"
    ],
    features: [
      { name: "Campaign Objectives", value: "Basic 2-3 options (Profile visits, messages)", supported: false },
      { name: "Audience Controls", value: "Simple interest tags & broad location only", supported: false },
      { name: "Creative A/B Testing", value: "Cannot test multiple hooks on one budget", supported: false },
      { name: "Conversion Tracking", value: "Surface-level clicks only", supported: false },
      { name: "Retargeting Setup", value: "No segmented video viewer retargeting", supported: false },
      { name: "Cost Per Lead", value: "Typically ₹120 - ₹350+ for unverified contacts", supported: false },
      { name: "Analytics & Telemetry", value: "Basic mobile stats inside the app", supported: false },
    ]
  },
  adsManager: {
    title: "Meta Ads Manager (Professional Studio)",
    subtitle: "Enterprise-grade precision built for predictable customer acquisition",
    pros: [
      "Granular control over bidding, placements, and lead quality",
      "Custom questions to filter out time-wasters and wrong numbers",
      "Deep retargeting of 3s/50% video viewers & page engagers",
      "Conversion API (CAPI) prevents iOS ad tracking loss",
      "Continuous machine learning optimization on actual sales/leads"
    ],
    cons: ["Requires professional expertise to set up, monitor and avoid wasted ad spend"],
    features: [
      { name: "Campaign Objectives", value: "Leads, Sales, App Installs, WhatsApp, Conversions", supported: true },
      { name: "Audience Controls", value: "Custom, Lookalike, Pinpoint Radius & Exclusions", supported: true },
      { name: "Creative A/B Testing", value: "Dynamic Creative Optimization (DCO) testing 5+ hooks", supported: true },
      { name: "Conversion Tracking", value: "Meta Pixel + Conversions API server-side tracking", supported: true },
      { name: "Retargeting Setup", value: "Multi-stage warm retargeting funnels", supported: true },
      { name: "Cost Per Lead", value: "Consistently optimized down to ₹35 - ₹95 qualified", supported: true },
      { name: "Analytics & Telemetry", value: "Breakdown by placement, age, gender, device & ROAS", supported: true },
    ]
  }
};

export const CREATIVE_SHOWCASE_ITEMS: CreativeItem[] = [
  {
    id: "creative-1",
    title: "Fitness Studio 7-Day Transformation Hook",
    category: "Reels",
    categoryLabel: "Instagram Reel Ads",
    format: "9:16 Vertical Reel",
    metrics: "4.8% CTR • ₹42 Cost/Lead",
    description: "Pattern-interrupt hook breaking down the 3 reasons gym members quit after week 2, driving users to claim a 7-day trial pass.",
    thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4",
    hookText: "Gurugram: Stop paying ₹25,000 for gym memberships before testing this 7-day pass.",
    handle: "@ironfit.gym • Sponsored",
    likes: "14.2K",
    comments: "482",
    shares: "1.8K",
    audioTitle: "Trending Direct-Response Hook #4",
    ctaBadge: "Send WhatsApp Message",
    demoLabel: "VERIFIED AD FORMAT"
  },
  {
    id: "creative-2",
    title: "Luxury Skin & Hair Clinic Keratin Treatment",
    category: "Local",
    categoryLabel: "Local Business Ads",
    format: "9:16 Vertical Reel",
    metrics: "5.2% CTR • 180+ Bookings",
    description: "Macro-lens gloss hair reveal with geo-fenced headline targeting women aged 22-45 within 6km radius.",
    thumbnailUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4",
    hookText: "The 1 keratin treatment mistake ruining 90% of salon visits (Watch before booking).",
    handle: "@elysian.aesthetics • Sponsored",
    likes: "18.9K",
    comments: "614",
    shares: "3.2K",
    audioTitle: "Original Audio • Salon Masterclass",
    ctaBadge: "Book Consultation (30% Off)",
    demoLabel: "VERIFIED AD FORMAT"
  },
  {
    id: "creative-3",
    title: "High-Ticket Real Estate 4BHK Penthouse Tour",
    category: "LeadGen",
    categoryLabel: "Lead Generation Creatives",
    format: "9:16 Vertical Reel",
    metrics: "₹85 Verified Lead • HNW Targeting",
    description: "Cinematic drone entrance transitioning to master bedroom view with automated instant pre-qualification form.",
    thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-camera-moving-around-a-modern-living-room-41584-large.mp4",
    hookText: "Is this the most beautiful penthouse in Golf Course Road? Step inside with us.",
    handle: "@skyline.luxury • Sponsored",
    likes: "24.5K",
    comments: "890",
    shares: "4.7K",
    audioTitle: "Cinematic Ambient • Drone Mix",
    ctaBadge: "Book Private Tour",
    demoLabel: "VERIFIED AD FORMAT"
  },
  {
    id: "creative-4",
    title: "Artisanal Specialty Coffee Direct Sale Bundle",
    category: "Product",
    categoryLabel: "Product Advertising",
    format: "9:16 Vertical Reel",
    metrics: "3.9x ROAS • High Repeat Orders",
    description: "Sensory macro pour-over extraction with direct comparison showing why roasted-to-order beats shelf coffee.",
    thumbnailUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-into-a-cup-40846-large.mp4",
    hookText: "Why your morning coffee tastes bitter (and how 2 small tweaks fix it instantly).",
    handle: "@roastlab.coffee • Sponsored",
    likes: "9.8K",
    comments: "320",
    shares: "890",
    audioTitle: "Sensory ASMR Pour • Original",
    ctaBadge: "Order Bundle (Free Shipping)",
    demoLabel: "VERIFIED AD FORMAT"
  },
  {
    id: "creative-5",
    title: "Executive Business Coaching Masterclass",
    category: "Promo",
    categoryLabel: "Promotional Videos",
    format: "9:16 Vertical Reel",
    metrics: "380+ Signups • Low CPA",
    description: "High-energy founder breakdown of agency cash flow bottlenecks with kinetic captions and direct seat reservation.",
    thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41122-large.mp4",
    hookText: "The exact pricing shift that took us from ₹3L to ₹15L/month without hiring more staff.",
    handle: "@growth.foundry • Sponsored",
    likes: "31.2K",
    comments: "1.2K",
    shares: "6.1K",
    audioTitle: "Founder Insights • Audio Track",
    ctaBadge: "Register Free Seat",
    demoLabel: "VERIFIED AD FORMAT"
  },
  {
    id: "creative-6",
    title: "Modern Dental Clinic Invisible Aligner Offer",
    category: "Local",
    categoryLabel: "Local Business Ads",
    format: "9:16 Vertical Reel",
    metrics: "64 Consultations • 3km Geo-fence",
    description: "Doctor-facing explainer comparing metal brackets vs clear aligners with transparent monthly EMI options.",
    thumbnailUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4",
    hookText: "Thinking about clear aligners? Here is what your dentist won't tell you on Instagram.",
    handle: "@smilesync.clinic • Sponsored",
    likes: "12.4K",
    comments: "410",
    shares: "1.1K",
    audioTitle: "Doctor Explainer • Clarity Mix",
    ctaBadge: "Chat on WhatsApp for 3D Scan",
    demoLabel: "VERIFIED AD FORMAT"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of business do you run?",
    options: [
      { label: "Local Business", description: "Clinic, retail, home services, repair", tag: "local" },
      { label: "Gym / Fitness", description: "Personal trainer, CrossFit, yoga studio", tag: "gym" },
      { label: "Restaurant", description: "Café, cloud kitchen, fine dining", tag: "restaurant" },
      { label: "Salon / Spa", description: "Beauty parlor, aesthetic clinic, wellness", tag: "salon" },
      { label: "Real Estate", description: "Agent, developer, property consultant", tag: "realty" },
      { label: "E-commerce", description: "D2C brand, physical products, Shopify", tag: "d2c" },
      { label: "Coach / Consultant", description: "Courses, agency, professional services", tag: "coach" },
      { label: "Other Business", description: "Custom business model or B2B", tag: "other" }
    ]
  },
  {
    id: 2,
    question: "What is your main goal right now?",
    options: [
      { label: "More enquiries & phone calls", description: "Book appointments and high-intent quotes", tag: "enquiries" },
      { label: "More direct WhatsApp messages", description: "Talk directly with customers on chat", tag: "whatsapp" },
      { label: "More product sales & orders", description: "Scale checkouts and catalog purchases", tag: "sales" },
      { label: "Brand awareness & local footfall", description: "Make sure everyone in your area knows you", tag: "awareness" },
      { label: "Website traffic & form fills", description: "Send qualified users to your landing page", tag: "traffic" }
    ]
  },
  {
    id: 3,
    question: "Have you run Meta Ads before?",
    options: [
      { label: "Never", description: "Starting fresh from square one", tag: "never" },
      { label: "Boosted posts on Instagram", description: "Spent some money on the blue Boost button", tag: "boosted" },
      { label: "Used Meta Ads Manager", description: "Ran structured campaigns or used an agency", tag: "ads_manager" }
    ]
  },
  {
    id: 4,
    question: "What is your monthly advertising budget?",
    options: [
      { label: "Below ₹5,000", description: "Testing the waters with low initial spend", tag: "budget_low" },
      { label: "₹5,000 – ₹10,000", description: "Healthy budget for local lead generation", tag: "budget_mid" },
      { label: "₹10,000 – ₹25,000", description: "Aggressive multi-creative scaling", tag: "budget_high" },
      { label: "₹25,000+", description: "Full-funnel saturation and expansion", tag: "budget_scale" }
    ]
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Deep Business & Audience Audit",
    description: "We dissect your business offer, target customer demographics, previous ad history, and local competitors to identify your strongest commercial angle.",
    deliverable: "Offer Blueprint & Audience Mapping",
    icon: "Search"
  },
  {
    step: "02",
    title: "STRATEGIZE",
    subtitle: "Creative Direction & Campaign Architecture",
    description: "We construct your campaign funnel in Ads Manager, draft high-converting video hooks, configure Instant Forms or WhatsApp routing, and prepare tracking.",
    deliverable: "Funnel Wireframe & Ad Script Angles",
    icon: "Compass"
  },
  {
    step: "03",
    title: "LAUNCH",
    subtitle: "Controlled Testing & Machine Learning Warm-Up",
    description: "We deploy live campaigns with structured A/B tests across multiple creative angles, monitoring early click-through rates, lead quality, and cost metrics.",
    deliverable: "Live Campaigns & Pixel Verification",
    icon: "Rocket"
  },
  {
    step: "04",
    title: "OPTIMIZE",
    subtitle: "Trimming Waste & Scaling Winners",
    description: "We eliminate underperforming ad sets, double down on winning hooks, launch custom retargeting sequences, and deliver transparent weekly performance reports.",
    deliverable: "Weekly KPI Sheet & Growth Adjustments",
    icon: "LineChart"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    client: "Pulse Fitness Studio (Sample Client)",
    industry: "Gym & Fitness Studio",
    objective: "Local Walk-ins & Annual Membership Trials",
    adBudget: "₹15,000 / mo (Sample Data)",
    duration: "30 Days",
    leadsOrConversions: "142 WhatsApp Leads",
    costPerResult: "₹48 per qualified lead",
    roas: "4.2x Est. Member Lifetime",
    insight: "Swapped generic gym photo posts with 9:16 member transformation reels targeting a 5km radius around the gym.",
    isDemo: true,
    badge: "Sample Case Study",
    tags: ["WhatsApp Ads", "Hyper-Local", "Gym"]
  },
  {
    id: "case-2",
    client: "Elysian Aesthetics (Sample Client)",
    industry: "Luxury Skin & Hair Clinic",
    objective: "Consultation Bookings for Skin Treatments",
    adBudget: "₹25,000 / mo (Sample Data)",
    duration: "45 Days",
    leadsOrConversions: "96 Pre-Qualified Enquiries",
    costPerResult: "₹82 per verified consultation",
    roas: "5.8x Treatment Value",
    insight: "Used Ads Manager Instant Forms with a mandatory question ('When are you looking to visit?'). Removed 80% of junk entries.",
    isDemo: true,
    badge: "Sample Case Study",
    tags: ["Instant Forms", "High Ticket", "Salon/Clinic"]
  },
  {
    id: "case-3",
    client: "The Copper Pot Bistro (Sample Client)",
    industry: "Weekend Dining & Sunday Brunch",
    objective: "Table Reservations & Weekend Footfall",
    adBudget: "₹10,000 / mo (Sample Data)",
    duration: "21 Days",
    leadsOrConversions: "310 Direct Table Inquiries",
    costPerResult: "₹18 per click-to-WhatsApp",
    roas: "6.1x Direct Bill Revenue",
    insight: "Ran Thursday to Saturday evening time-parted ads showing sizzling chef specials to foodies within 6km.",
    isDemo: true,
    badge: "Sample Case Study",
    tags: ["Time-Parting", "Restaurant", "Direct WhatsApp"]
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Personalized Strategy",
    description: "No boilerplate templates. Every campaign is engineered specifically for your local geography and margin profile.",
    icon: "Target"
  },
  {
    title: "Transparent Budget Breakdown",
    description: "Your ad budget is charged straight to Meta on your card. We never take hidden markups or obscure your real spend.",
    icon: "Eye"
  },
  {
    title: "Creative Hook Testing",
    description: "We don't just run 1 static photo. We guide and test multiple video hooks to discover what makes your audience stop scrolling.",
    icon: "Layers"
  },
  {
    title: "Continuous Campaign Monitoring",
    description: "We monitor fatigue, CPM spikes, and lead response daily so your ad spend is never running on autopilot.",
    icon: "Activity"
  },
  {
    title: "Regular Transparent Reporting",
    description: "No convoluted 50-page jargon PDFs. You receive concise weekly metrics showing spent rupees, leads, and cost per result.",
    icon: "FileSpreadsheet"
  },
  {
    title: "Direct WhatsApp Communication",
    description: "No clunky ticketing portals. You have direct access to our performance team on a dedicated WhatsApp group.",
    icon: "MessageCircle"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikram Malhotra",
    role: "Founder",
    business: "IronFit Arena (Sample Client)",
    quote: "Before this, we were boosting random gym photos on Instagram and getting zero calls. Within 3 weeks of their Ads Manager setup, we had 40+ people asking for trial passes.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    metric: "142 Leads Generated",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "test-2",
    name: "Dr. Ananya Sharma",
    role: "Lead Dermatologist",
    business: "Glow Aesthetics (Sample Client)",
    quote: "The pre-qualifying questionnaire in their Instant Forms was a game-changer. Our front desk only called people who were genuinely looking to book premium packages.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    metric: "₹82 Avg Cost / Consultation",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "test-3",
    name: "Rohan Khanna",
    role: "Co-Owner",
    business: "Urban Crust Pizzeria (Sample Client)",
    quote: "Clear split between what goes to Meta and what goes to the agency. Totally transparent and our weekend dinner rush has never been busier.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    metric: "310+ Table Inquiries",
    rating: 5,
    isPlaceholder: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 1,
    category: "Basics",
    question: "What is Meta Ads Management?",
    answer: "Meta Ads Management is the professional management of paid advertising campaigns across Facebook, Instagram, Messenger, and Meta Audience Network. Rather than casually clicking 'Boost Post', our team utilizes the enterprise Meta Ads Manager platform to conduct in-depth audience research, build dynamic creative split-tests, deploy conversion tracking (Pixel & CAPI), and optimize daily budgets to drive tangible customer enquiries, sales, and booked appointments."
  },
  {
    id: 2,
    category: "Basics",
    question: "Is Boost Post different from Ads Manager?",
    answer: "Yes, significantly. 'Boost Post' inside the Instagram/Facebook mobile app is designed for simple, quick engagement (like profile visits and post likes). Meta Ads Manager is Meta's professional suite that allows custom conversion objectives (such as high-intent Lead Forms, WhatsApp direct funnels, and catalog sales), granular geo-radius pinpointing, multi-stage video viewer retargeting, and server-side tracking."
  },
  {
    id: 3,
    category: "Pricing & Billing",
    question: "Is the advertising budget included in the service fee?",
    answer: "No. Your advertising budget is paid directly to Meta via your own debit/credit card or GST ad account. Our management fee covers campaign strategy, audience architecture, technical setup, continuous monitoring, and weekly performance reporting. This ensures 100% financial transparency—you always see exactly how every single rupee is spent inside your own Meta account."
  },
  {
    id: 4,
    category: "Budgeting",
    question: "How much should I spend on advertising?",
    answer: "For most local businesses (gyms, salons, clinics, restaurants), we recommend starting with a minimum ad budget of ₹200 to ₹500 per day (approx. ₹6,000 to ₹15,000 per month). This provides Meta's algorithm with sufficient daily impressions to exit the learning phase and generate steady inquiries. Higher ticket categories (like real estate or high-end coaching) typically benefit from ₹15,000 to ₹35,000+ monthly ad spend."
  },
  {
    id: 5,
    category: "Results",
    question: "How long does it take to see results?",
    answer: "Once the campaigns pass Meta's initial ad review (typically 6 to 24 hours), ads begin showing to your target audience immediately. Initial inquiries often start coming in within the first 48 to 72 hours. During the first 7 to 10 days, Meta's machine learning algorithm tests different creative variations and audience pockets to stabilize your cost-per-lead."
  },
  {
    id: 6,
    category: "Results",
    question: "Do you guarantee leads or sales?",
    answer: "We strictly guarantee honest, high-standard professional execution: precision audience research, tested copywriting hooks, proper conversion funnels, and continuous optimization. We do not make false promises of guaranteed sales because closing deals also depends on your product offer, pricing, local market demand, and how quickly your team contacts and follows up with generated leads."
  },
  {
    id: 7,
    category: "Creatives",
    question: "Can you use my existing Instagram videos?",
    answer: "Absolutely! In fact, authentic, organic-feeling vertical videos shot on a modern smartphone often outperform overly polished corporate commercials on Instagram Reels. You provide us with your raw videos, customer transformations, or facility tours, and we guide you on hooks, pattern-interrupts, and direct call-to-actions to maximize click-through rates."
  },
  {
    id: 8,
    category: "Account Ownership",
    question: "Will I own my advertising account?",
    answer: "Yes, 100%. We operate either directly inside your existing Meta Business Manager or help you set up an official Business Portfolio that you exclusively own. You grant our agency partner access to manage ads on your behalf. You retain complete ownership of your Pixel data, custom audiences, payment methods, and historical campaign records."
  },
  {
    id: 9,
    category: "Reporting",
    question: "How will I receive reports?",
    answer: "You will receive transparent weekly KPI summaries sent directly to our dedicated WhatsApp group and email, covering: total ad spend, impressions, link clicks, total leads/inquiries generated, and average cost-per-result. We also maintain a live Google Sheet dashboard so you can check your metrics anytime in real-time."
  },
  {
    id: 10,
    category: "Flexibility",
    question: "Can I change my advertising plan?",
    answer: "Yes. Our management services operate on flexible monthly cycles without lengthy lock-in contracts. You can upgrade, downgrade, or pause your management plan at the conclusion of any billing period with a simple 7-day advance notice."
  }
];
