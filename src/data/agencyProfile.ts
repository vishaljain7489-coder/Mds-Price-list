export interface AgencyProfile {
  brandName: string;
  tagline: string;
  badge: string;
  experienceYears: string;
  founders: {
    title: string;
    description: string;
    role1: string;
    role2: string;
  };
  motive: {
    heading: string;
    subheading: string;
    story: string;
    whyBoostFails: string;
    ourSolution: string;
  };
  enhancements: {
    num: string;
    title: string;
    forWho: string;
    description: string;
    benefit: string;
  }[];
  portfolioCases: {
    id: string;
    client: string;
    category: string;
    location: string;
    hook: string;
    deliverables: string;
    resultMetric: string;
    resultDetail: string;
    image: string;
  }[];
  stats: {
    label: string;
    value: string;
    desc: string;
  }[];
}

export const INITIAL_AGENCY_PROFILE: AgencyProfile = {
  brandName: "Click and Craft",
  tagline: "Performance Video Creatives & Hyper-Local Meta Ad Engineering",
  badge: "2 PARTNERS · 2-3 YEARS BATTLE-TESTED PERFORMANCE MARKETING",
  experienceYears: "2-3 Years",
  founders: {
    title: "Founded by 2 Media Partners with 2-3 Years of Hardcore Ad Operations",
    description: "We are two creative & media buying partners who have spent the last 2-3 years deep in the trenches of Meta Ads Manager, creative hook scripting, and local offline business lead generation.",
    role1: "Creative Director (Viral 9:16 Scripting, Pattern Interrupts & On-Site Video Production)",
    role2: "Head of Media Buying (Hyper-Local 5-10km Meta Geofencing, CBO Funnels & CAPI Setup)"
  },
  motive: {
    heading: "WHY WE DO THIS & OUR CORE MOTIVE",
    subheading: "Stopping the mindless blue 'Boost Post' trap that burns money for local businesses.",
    story: "Over the past 2-3 years, we saw local shop owners, restaurants, car showrooms, and salons waste thousands of rupees hitting the blue 'Boost' button on Instagram. The result? Fake likes, bot comments, and zero real walk-in customers or WhatsApp calls.",
    whyBoostFails: "Instagram Boost only targets idle scrollers who double-tap without ever buying anything.",
    ourSolution: "Our motive is singular: We pair cinematic 9:16 vertical editing (high-retention hooks in the first 3 seconds) with enterprise Meta Ads Manager 5-10km trade-area geofencing. We optimize machine learning solely for direct WhatsApp chats and store footfall."
  },
  enhancements: [
    {
      num: "01",
      title: "Viral 3-Second Pattern Interrupts",
      forWho: "For Cafés, Restaurants & Food Brands",
      description: "We don't shoot boring panoramic view videos. We shoot high-contrast macro sizzles, ASMR audio, and curiosity hooks that force local viewers to stop scrolling.",
      benefit: "Guarantees 65%+ 3-second hold rate vs 20% industry standard."
    },
    {
      num: "02",
      title: "Pinpoint 5-10km Hyper-Local Radius",
      forWho: "For Showrooms, Offline Stores & Salons",
      description: "We geofence your exact neighborhood trade radius. People who live, work, and shop within 15 minutes of your location see your ad multiple times daily.",
      benefit: "Zero wasted spend outside your serviceable delivery/walk-in radius."
    },
    {
      num: "03",
      title: "Direct WhatsApp Deep Funnel Routing",
      forWho: "For High-Ticket Clinics, Cars & Boutiques",
      description: "When a potential buyer taps the ad, it doesn't send them to an abandoned website. It instantly opens a pre-filled WhatsApp chat with your sales counter.",
      benefit: "Direct customer phone numbers in your phone, ready for closing."
    },
    {
      num: "04",
      title: "100% Transparent Ad Card Ownership",
      forWho: "For Every Ethical Business Owner",
      description: "Traditional agencies mark up ad budgets by 30-40%. With us, every single rupee of ad spend is charged directly to your own card with 24h live telemetry.",
      benefit: "You own your customer pixel, audience data, and ad account forever."
    }
  ],
  portfolioCases: [
    {
      id: "case-1",
      client: "Apex Luxury Motors",
      category: "Automotive (Pre-Owned Cars)",
      location: "Gurugram, Golf Course Rd",
      hook: "BMW 530d M-Sport Sound & Luxury Cabin Walkaround",
      deliverables: "15 Custom 9:16 Reels + Meta Ads Radius Targeting",
      resultMetric: "34 Verified Test Drives",
      resultDetail: "Cost per qualified buyer dropped from ₹180 to ₹48/lead within 3 weeks.",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-2",
      client: "Royal Heritage Café & Dine",
      category: "Food & Hospitality",
      location: "Jaipur, C-Scheme",
      hook: "3-Sec Sensory Food Prep & Candlelight Ambience",
      deliverables: "15 Reels Campaign + Weekend Table Reservation Flow",
      resultMetric: "+38 Weekend Tables Booked",
      resultDetail: "Consistent ₹31 per WhatsApp table inquiry in 6km radius.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-3",
      client: "Aura Aesthetics Luxury Salon",
      category: "Beauty & Wellness",
      location: "Mumbai, Bandra West",
      hook: "Keratin Treatment Transformation & Kinetic Subtitles",
      deliverables: "Reel Video Batch + Appointment Ads Setup",
      resultMetric: "81 High-Ticket Bookings",
      resultDetail: "5.1% Click-Through Rate directly to WhatsApp booking catalog.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-4",
      client: "Iron Core Strength Fitness Gym",
      category: "Fitness & Gyms",
      location: "South Delhi, Greater Kailash",
      hook: "7-Day Trial Pass & Trainer Transformation Proof",
      deliverables: "10 Vertical Reels + Local Geofenced Campaign",
      resultMetric: "28 Walk-in Memberships",
      resultDetail: "Achieved ₹42 cost per walk-in inquiry with zero fake leads.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    }
  ],
  stats: [
    { label: "Co-Founders & Partners", value: "2 Partners", desc: "Creative & Media Buying Specialists" },
    { label: "Industry Ad Experience", value: "2-3 Years", desc: "Hundreds of thousands in ad spend managed" },
    { label: "Local Campaigns Scaled", value: "250+", desc: "Stores, Cafés, Salons & Showrooms" },
    { label: "Client Satisfaction", value: "4.9 / 5★", desc: "Transparent weekly reporting" }
  ]
};

const PROFILE_STORAGE_KEY = 'click_and_craft_agency_profile_v3';

export const getAgencyProfile = (): AgencyProfile => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(PROFILE_STORAGE_KEY) : null;
    if (!raw) {
      return INITIAL_AGENCY_PROFILE;
    }
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_AGENCY_PROFILE,
      ...parsed,
      stats: (Array.isArray(parsed.stats) && parsed.stats.length > 0) ? parsed.stats : INITIAL_AGENCY_PROFILE.stats,
      founders: parsed.founders || INITIAL_AGENCY_PROFILE.founders,
      motive: parsed.motive || INITIAL_AGENCY_PROFILE.motive,
      enhancements: (Array.isArray(parsed.enhancements) && parsed.enhancements.length > 0) ? parsed.enhancements : INITIAL_AGENCY_PROFILE.enhancements,
      portfolioCases: (Array.isArray(parsed.portfolioCases) && parsed.portfolioCases.length > 0) ? parsed.portfolioCases : INITIAL_AGENCY_PROFILE.portfolioCases,
    };
  } catch (e) {
    return INITIAL_AGENCY_PROFILE;
  }
};

export const saveAgencyProfile = (profile: AgencyProfile) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    }
  } catch (e) {
    console.error("Failed to save agency profile", e);
  }
};
