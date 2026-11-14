import { AgencyClient } from '../types';

export interface ClientAccount extends AgencyClient {
  passwordHash: string; // Plain password for demo portal
  assignedManager: {
    name: string;
    phone: string;
    whatsapp: string;
  };
  deliveredReelsList: {
    id: string;
    title: string;
    deliveredDate: string;
    views: string;
    leads: string;
    status: 'Live & Scaling' | 'Scheduled' | 'Reviewing';
    videoThumbnail: string;
  }[];
}

export const INITIAL_CLIENTS: ClientAccount[] = [
  {
    id: "CLI-101",
    name: "Rohit Verma",
    businessName: "Royal Heritage Café & Dine",
    category: "Food & Hospitality",
    phone: "+91 98765 43210",
    email: "rohit@royalheritage.com",
    city: "Jaipur, C-Scheme",
    packageSubscribed: "15 Reels Signature Growth Package (₹6,000)",
    totalBilled: 6000,
    amountPaid: 6000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: true,
    clientTemperament: "Very polite, prompt feedback on video drafts.",
    reelsDelivered: 8,
    reelsTotal: 15,
    adsActive: 6,
    adsPending: 9,
    metaBudgetSpent: 1420,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "Reel #4 is driving highest conversions at ₹31/table booking in 6km radius.",
    createdDate: "02 Nov 2026",
    passwordHash: "client123",
    assignedManager: {
      name: "Aryan Verma (Lead Creative)",
      phone: "+91 98765 43210",
      whatsapp: "919876543210"
    },
    deliveredReelsList: [
      {
        id: "r1",
        title: "Sensory Sizzler & Ambience 3-Sec Hook",
        deliveredDate: "04 Nov 2026",
        views: "140K",
        leads: "28 WhatsApp Chats",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r2",
        title: "Chef Special Woodfire Pizza Prep",
        deliveredDate: "06 Nov 2026",
        views: "98K",
        leads: "19 Table Inquiries",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r3",
        title: "Weekend Candlelight Date Night Offer",
        deliveredDate: "09 Nov 2026",
        views: "210K",
        leads: "42 Bookings",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r4",
        title: "Cold Coffee & Sunday Brunch Special",
        deliveredDate: "12 Nov 2026",
        views: "185K",
        leads: "35 Walk-ins",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "CLI-102",
    name: "Vikram Singhania",
    businessName: "Apex Luxury Motors (Pre-Owned)",
    category: "Automotive",
    phone: "+91 98112 54321",
    email: "vikram@apexmotors.in",
    city: "Gurugram, Golf Course Rd",
    packageSubscribed: "15 Reels + 15 Meta Ad Campaigns Combo (₹12,000)",
    totalBilled: 12000,
    amountPaid: 12000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'Bank Transfer',
    isVip: true,
    clientTemperament: "Direct & results-oriented. Wants test-drive leads.",
    reelsDelivered: 12,
    reelsTotal: 15,
    adsActive: 10,
    adsPending: 5,
    metaBudgetSpent: 4800,
    metaBudgetTotal: 6000,
    serviceStatus: 'Active & Optimizing',
    notes: "BMW 5-Series reel has 1.4M views with 34 test drives booked.",
    createdDate: "28 Oct 2026",
    passwordHash: "client123",
    assignedManager: {
      name: "Rohit Malhotra (Senior Media Buyer)",
      phone: "+91 98112 54321",
      whatsapp: "919811254321"
    },
    deliveredReelsList: [
      {
        id: "r101",
        title: "Mercedes C-Class Cinematic Walkaround",
        deliveredDate: "30 Oct 2026",
        views: "420K",
        leads: "14 Verified Test Drives",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r102",
        title: "BMW 530d M-Sport Sound & Exhaust Hook",
        deliveredDate: "03 Nov 2026",
        views: "680K",
        leads: "20 Test Drives",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "CLI-103",
    name: "Pooja Malhotra",
    businessName: "Aura Aesthetics Luxury Salon",
    category: "Beauty & Wellness",
    phone: "+91 99887 76655",
    email: "pooja@aurasalon.in",
    city: "Mumbai, Bandra West",
    packageSubscribed: "Starter Meta Local Inquiries Package (₹3,000)",
    totalBilled: 3000,
    amountPaid: 3000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "Happy with rapid WhatsApp appointment inquiries.",
    reelsDelivered: 5,
    reelsTotal: 5,
    adsActive: 3,
    adsPending: 0,
    metaBudgetSpent: 1500,
    metaBudgetTotal: 1500,
    serviceStatus: 'Delivered',
    notes: "Keratin treatment offer fully claimed. Ready for renewal.",
    createdDate: "15 Oct 2026",
    passwordHash: "client123",
    assignedManager: {
      name: "Sneha Kapoor (Account Specialist)",
      phone: "+91 99887 76655",
      whatsapp: "919988776655"
    },
    deliveredReelsList: [
      {
        id: "r201",
        title: "Keratin Treatment Transformation Reveal",
        deliveredDate: "18 Oct 2026",
        views: "340K",
        leads: "81 Appointments",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

const STORAGE_KEY = 'ronin_agency_clients_v2';

export const getClients = (): ClientAccount[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CLIENTS));
      return INITIAL_CLIENTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_CLIENTS;
  }
};

export const saveClients = (clients: ClientAccount[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
  } catch (e) {
    console.error("Failed to save client data", e);
  }
};

export const authenticateClient = (emailOrId: string, password: string): ClientAccount | null => {
  const clients = getClients();
  const normalized = emailOrId.trim().toLowerCase();
  
  const found = clients.find(c => 
    (c.email.toLowerCase() === normalized || c.id.toLowerCase() === normalized) &&
    c.passwordHash === password.trim()
  );

  return found || null;
};
