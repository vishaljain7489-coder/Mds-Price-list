// =========================================================================
// RONIN MEDIA - MASTER CONTENT CONFIGURATION
// All text, prices, links, numbers & labels are controlled in this single file.
// Edit anything here without touching React components.
// =========================================================================

export const BRAND = {
  name: "RONIN MEDIA", // Placeholder: Change brand name here in one place
  tagline: "Unbeatable Anime-Creator Media Advertising & Paid Growth Panel",
  heroSubtitle: "We run high-retention paid ad campaigns, viral reel shoots, and top professional page collaborations.",
  badgeText: "NOW BOOKING 2026 SLOTS",
  yearTag: "[2026]",
  whatsappNumber: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "partner@roninmedia.agency",
  address: "Cyber Hub, DLF Phase 2, Gurugram • Mumbai • Bengaluru",
  instagram: "https://instagram.com/roninmedia",
  youtube: "https://youtube.com/@roninmedia",
  twitter: "https://x.com/roninmedia"
};

// 0. PRELOADER INTRO
export const PRELOADER = {
  giantWord: "VIRAL",
  subLabel: "INITIALIZING PERFORMANCE ENGINE // 2026",
  durationMs: 2200
};

// 1. NAVBAR
export const NAVBAR = {
  logoText: BRAND.name,
  links: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Packages", href: "#packages" },
    { label: "Collabs", href: "#collabs" },
    { label: "Compare", href: "#compare" },
    { label: "Contact", href: "#contact" },
  ]
};

// 2. HERO SECTION
export const HERO = {
  pillTags: ["TOP RATED 2026", "VERIFIED ADS MANAGER", "ZERO FAKE BOTS"],
  statusLabel: "NOW BOOKING SLOTS",
  bracketTag: "[2026]",
  keyWords: ["Reels", "Meta Ads", "YouTube", "Influencers"],
  giantHeadline: "GO VIRAL",
  heroLead: "We engineer scroll-stopping 9:16 vertical hooks and laser-targeted Meta ad sets that convert cold viewers into paying customers.",
  ctaText: "Book Now ↗",
  rotatingBadgeText: "• RONIN MEDIA • 2026 CREATOR AGENCY • GO VIRAL •",
  marqueeTape: [
    "HIGH-RETENTION REELS",
    "HYPER-LOCAL META ADS",
    "15 REEL LAUNCHES",
    "TOP 3 CITY PAGES COLLAB",
    "DIRECT WHATSAPP INQUIRIES",
    "ZERO MARKUP SPEND",
    "CBO RETARGETING FUNNELS"
  ]
};

// 3. STATS CHIPS & PARTNER
export const STATS = {
  chips: [
    { label: "Clients Scaled", value: "250+", color: "bg-white text-[#0A0A0A]" },
    { label: "Total Views Engineered", value: "1.2B", color: "bg-[#C8102E] text-white" },
    { label: "Client Satisfaction", value: "4.9★", color: "bg-[#171919] text-[#CCC5C4] border border-white/10" }
  ],
  partnerLabel: "OFFICIAL PARTNER",
  partnerName: "NEXUS CREATOR NETWORK",
  partnerQuote: "Their 3-second pattern interrupt hooks consistently outperform standard agency creatives by 3.4x in local Meta ad tests.",
  partnerAuthor: "— Aryan Verma, Creator Lead (1.8M Followers)"
};

// 3B. FANNED PORTFOLIO CARDS (HERO CAROUSEL)
export const HERO_PORTFOLIO_CARDS = [
  {
    id: "card-1",
    tilt: "-8deg",
    title: "Luxury Pre-Owned Car Showroom",
    client: "Apex Motors Gurugram",
    niche: "Automotive",
    metrics: "34 Verified Test Drives • ₹48/Lead",
    views: "1.4M Views",
    badge: "34 Leads",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "card-2",
    tilt: "0deg",
    title: "Sensory Fine-Dine & Café Ambience",
    client: "Royal Heritage Café Jaipur",
    niche: "Food & Hospitality",
    metrics: "+38 Weekend Tables • ₹31 Cost/Inquiry",
    views: "890K Views",
    badge: "100% Booked",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "card-3",
    tilt: "8deg",
    title: "Aesthetics Clinic Hair & Skin",
    client: "Aura Aesthetics Bandra",
    niche: "Beauty & Wellness",
    metrics: "81 High-Ticket Bookings • 5.1% CTR",
    views: "2.1M Views",
    badge: "81 Clients",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  }
];

// 4. ABOUT STATEMENT (WHITE SECTION RISE)
export const ABOUT_STATEMENT = {
  counter: "GALLERY 07/32",
  badge: "OUR PHILOSOPHY & MANIFESTO",
  titleBig: "CRAFTED",
  titleSmall: "by",
  bodyText: "We are an anime-inspired, Gen-Z performance agency that treats your advertising budget with unyielding fiduciary respect. We ended the mindless blue 'Boost Post' trap by pairing cinematic 9:16 vertical editing with enterprise Meta Ads Manager hyper-local geofencing."
};

// 5. WHAT WE DO & HOW WE DO (WHITE SECTION)
export const WHAT_WE_DO = {
  badge: "EXECUTION BLUEPRINT",
  heading: "HOW WE ENGINEER VIRAL ATTENTION INTO REVENUE",
  steps: [
    { num: "01", title: "Local Radius Audit", desc: "Auditing 5-10km trade area and competitor fatigue." },
    { num: "02", title: "3-Sec Pattern Interrupts", desc: "Scripting psychological AI hooks that stop mindless scrolling." },
    { num: "03", title: "Full 9:16 Video Production", desc: "Kinetic typography, motion cues, and sound design." },
    { num: "04", title: "Ads Manager Routing", desc: "Scaling winning reels and routing verified buyers to WhatsApp." }
  ],
  bookingCard: {
    planName: "15 REELS PERFORMANCE BATCH",
    platform: "Meta Ads Manager + Instagram 9:16",
    startDate: "Immediate Onboarding (Slot #3)",
    slotTime: "10:00 AM Call with Creative Director",
    price: "₹6,000",
    badge: "MOST REQUESTED",
    location: "Hyper-Local 5-10km Trade Radius"
  },
  columns: {
    reels: {
      label: "REELS PRODUCTION",
      text: "15 vertical reels engineered with 3-second pattern interrupts, retention color grading, dynamic kinetic subtitles, and audio sound cues. Every angle is scripted specifically to convert cold viewers into local walk-in buyers."
    },
    ads: {
      label: "META ADS SCALING",
      text: "15 individual ad sets running in Meta Ads Manager with pinpoint 5-10km geo-radius geofencing. We optimize machine learning daily to drive direct WhatsApp inquiries with zero hidden markup on your ad card."
    }
  }
};

// 6. FILTERABLE PORTFOLIO
export const PORTFOLIO_ITEMS = [
  {
    id: "p1",
    title: "Apex Luxury Motors Showroom Walkaround",
    category: "Reels",
    tag: "9:16 Reel",
    views: "1.4M",
    leads: "34 Verified Test Drives",
    cpl: "₹48/Lead",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4"
  },
  {
    id: "p2",
    title: "Royal Heritage Café Sensory Food Hook",
    category: "Ads",
    tag: "Meta Ad Campaign",
    views: "890K",
    leads: "+38 Weekend Tables",
    cpl: "₹31/Lead",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
  },
  {
    id: "p3",
    title: "Aura Aesthetics Keratin Hair Reveal",
    category: "Brand Campaigns",
    tag: "Brand Film",
    views: "2.1M",
    leads: "81 Treatment Bookings",
    cpl: "₹64/Lead",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-keyboard-41312-large.mp4"
  },
  {
    id: "p4",
    title: "Iron Core Strength Gym 7-Day Trial Pass",
    category: "Reels",
    tag: "9:16 Reel",
    views: "640K",
    leads: "28 Walk-in Memberships",
    cpl: "₹42/Lead",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4"
  },
  {
    id: "p5",
    title: "Vogue Ethnic Designer Bridal Showcase",
    category: "Ads",
    tag: "Meta Ad Campaign",
    views: "1.1M",
    leads: "52 WhatsApp Inquiries",
    cpl: "₹38/Lead",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
  },
  {
    id: "p6",
    title: "BlueStone Commercial Office Lease Tour",
    category: "Brand Campaigns",
    tag: "Brand Film",
    views: "420K",
    leads: "22 Site Visits",
    cpl: "₹110/Lead",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-keyboard-41312-large.mp4"
  }
];

// 6B. PACKAGES
export const PACKAGES = [
  {
    id: "starter",
    name: "STARTER ADS",
    price: "₹3,000",
    period: "/ 30 Days",
    tagline: "Testing & Initial Local Inquiries",
    popular: false,
    features: [
      "Targeted 5-10km local trade radius",
      "₹1,500 Agency Management + ₹1,500 Meta Ad Spend",
      "Direct WhatsApp inquiries routing",
      "Weekly performance summary report",
      "100% Client pixel & account ownership"
    ],
    cta: "Select Starter"
  },
  {
    id: "growth",
    name: "15 REELS AD CAMPAIGN",
    price: "₹6,000",
    period: "/ 15 Reels",
    tagline: "Our Signature Hyper-Local Inquiries Engine",
    popular: true,
    features: [
      "15 Individual ad sets promoting 15 Reels",
      "₹3,000 Setup & Management + ₹3,000 Direct Ad Budget",
      "~₹200 per reel ad budget distribution",
      "Direct WhatsApp lead capture & store footfall",
      "Video viewer retargeting funnels",
      "Daily 24h live optimization telemetry"
    ],
    cta: "Lock In 15 Reels Plan"
  },
  {
    id: "pro",
    name: "15 REELS VIDEO PRODUCTION",
    price: "₹6,000",
    period: "/ Batch",
    tagline: "Full High-Retention Video Production",
    popular: false,
    features: [
      "15 Strategic 9:16 vertical reels",
      "AI viral pattern interrupt hook scripting",
      "Kinetic typography subtitles & sound design",
      "On-location director shooting guidance",
      "Delivered in ready-to-run 9:16 vertical batch",
      "Can be bundled with ₹6,000 Ad Package"
    ],
    cta: "Book Production"
  }
];

// 6C. COMBO PACKAGES
export const COMBO_PACKAGES = [
  {
    id: "combo-1",
    name: "FULL POWER VIRAL COMBO",
    badge: "SAVE 25% OFF SEPARATE BOOKING",
    price: "₹10,500",
    originalPrice: "₹14,000",
    period: "/ Complete 15 Batch",
    desc: "15 High-Retention Reels Production + 15 Meta Ad Campaigns (~₹200/reel direct ad budget) bundled together.",
    deliverables: [
      "Full video production for 15 vertical reels",
      "15 Individual Meta Ads Manager campaign sets",
      "₹3,000 direct Meta ad budget included",
      "Direct WhatsApp routing & weekly founder review"
    ]
  },
  {
    id: "combo-2",
    name: "ENTERPRISE CITY VIRAL COMBO",
    badge: "SAVE 30% OFF",
    price: "₹21,000",
    originalPrice: "₹30,000",
    period: "/ Month",
    desc: "15 Reels Production + 15 Ad Campaigns + Collab with City Top 3 Pages.",
    deliverables: [
      "15 High-retention reels batch",
      "₹6,000 Meta ad budget allocated across radius",
      "Collaborative joint post with verified city page",
      "Story swipe-ups directly to WhatsApp catalog"
    ]
  }
];

// 6D. TOP PROFESSIONAL PAGES COLLAB
export const COLLAB_PAGES = [
  {
    name: "Jaipur Foodie Culture",
    niche: "Food & Cafes",
    followers: "420K",
    typicalPrice: "₹18,000",
    agencyPrice: "₹9,500",
    savings: "Save ₹8,500"
  },
  {
    name: "Delhi NCR Auto Trends",
    niche: "Cars & Showrooms",
    followers: "680K",
    typicalPrice: "₹25,000",
    agencyPrice: "₹14,000",
    savings: "Save ₹11,000"
  },
  {
    name: "Mumbai Luxury & Glamour",
    niche: "Salons & Fashion",
    followers: "510K",
    typicalPrice: "₹22,000",
    agencyPrice: "₹11,500",
    savings: "Save ₹10,500"
  },
  {
    name: "Bengaluru Fitness & Lifestyle",
    niche: "Gyms & Wellness",
    followers: "390K",
    typicalPrice: "₹16,000",
    agencyPrice: "₹8,000",
    savings: "Save ₹8,000"
  }
];

// 6E. DIRECT VS THROUGH US COMPARISON
export const COMPARISON_ROWS = [
  {
    service: "15 Reels Video Production",
    directPrice: "₹15,000 (Freelancers)",
    throughUs: "₹6,000 (In-House Studio)",
    savings: "₹9,000",
    note: "High-retention kinetic subtitles & AI hooks included"
  },
  {
    service: "15 Meta Ad Campaigns Setup",
    directPrice: "₹12,000 (Traditional Agency)",
    throughUs: "₹3,000 (Service Split)",
    savings: "₹9,000",
    note: "Zero hidden markups, 100% on client's card"
  },
  {
    service: "Top 3 City Page Collab Post",
    directPrice: "₹25,000 (Direct Admin Price)",
    throughUs: "₹12,500 (Agency Direct Tie-up)",
    savings: "₹12,500",
    note: "Direct partnership with verified local admins"
  },
  {
    service: "Lead Gen & Pixel CAPI Integration",
    directPrice: "₹8,000 (Dev Agency)",
    throughUs: "FREE (Standard in all plans)",
    savings: "₹8,000",
    note: "Instant WhatsApp routing & CRM webhook setup"
  }
];

// 6F. TESTIMONIALS
export const TESTIMONIALS = [
  {
    name: "Vikram Singhania",
    business: "Apex Motors (Pre-Owned Luxury Cars)",
    location: "Gurugram, Golf Course Rd",
    quote: "Earlier we tried boosting reels ourselves and got nothing but spam DMs. RONIN MEDIA's 15 reels campaign delivered 34 genuine test drive bookings in 3 weeks.",
    stars: 5,
    result: "34 Luxury Test Drives"
  },
  {
    name: "Rohit Verma",
    business: "Royal Heritage Café & Fine Dine",
    location: "Jaipur, C-Scheme",
    quote: "Their 3-second hook videos brought our cost per WhatsApp table booking down to ₹31. Our weekend tables are now booked 2 days in advance.",
    stars: 5,
    result: "+38 Booked Tables"
  },
  {
    name: "Pooja Malhotra",
    business: "Aura Luxury Aesthetics Salon",
    location: "Mumbai, Bandra West",
    quote: "The kinetic subtitles and macro video aesthetic transformed how clients perceive our brand. We booked 81 high-ticket treatments directly from Meta ads.",
    stars: 5,
    result: "81 Appointments"
  }
];

// 6G. FAQ ACCORDION
export const FAQS = [
  {
    q: "How does the ₹6,000 15 Reels Advertisement Package work?",
    a: "The package is transparently divided: ₹3,000 covers our dedicated campaign architecture, A/B creative testing, and 24h telemetry optimization. The remaining ₹3,000 is distributed directly to Meta as ad spend (~₹200/reel) charged straight to your card with zero markup."
  },
  {
    q: "How quickly do our reels go live?",
    a: "After creative onboarding, scripts with 3-second AI pattern interrupts are locked in 48 hours. Batch 1 (first 5 reels) is edited and launched in Meta Ads Manager within 4-5 business days."
  },
  {
    q: "Do we retain 100% ownership of the ad account?",
    a: "Yes, absolutely. We configure everything inside your own Meta Business Manager. You own every pixel event, customer list, and video viewer audience forever."
  },
  {
    q: "How do customer inquiries reach our phone?",
    a: "Every ad set is linked with direct WhatsApp deep routing and instant lead forms. When a prospect taps the ad, their inquiry drops directly into your business WhatsApp inbox."
  }
];

// 7. FINAL CTA & FOOTER
export const FOOTER = {
  badge: "NOW BOOKING",
  bigTitle: BRAND.name,
  leftSub: "SLOTS: 4 REMAINING",
  rightSub: BRAND.yearTag,
  rights: "All Rights Reserved. Engineered with Unbeatable Anime-Creator Energy.",
  disclaimer: "100% Transparent Performance Agency. Zero Copyrighted Imagery."
};
