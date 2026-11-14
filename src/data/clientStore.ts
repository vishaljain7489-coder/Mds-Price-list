import { AgencyClient } from '../types';

export const ADMIN_CREDENTIALS = {
  email: "vishaljain74899@gmail.com",
  password: "7489640013"
};

export const isAdminUser = (email: string, pass: string): boolean => {
  return email.trim().toLowerCase() === ADMIN_CREDENTIALS.email.toLowerCase() &&
         pass.trim() === ADMIN_CREDENTIALS.password;
};

export interface ClientAccount extends AgencyClient {
  passwordHash: string;
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
  // User's Demo Customer Account
  {
    id: "CLI-100",
    name: "Vishal Jain",
    businessName: "Vishal Lifestyle Store & Café",
    category: "Clothing & Dining",
    phone: "+91 74896 40013",
    email: "vishaljain@gmail.com",
    city: "Jaipur, Rajasthan",
    packageSubscribed: "15 Reels Signature Growth Package (₹6,000)",
    totalBilled: 6000,
    amountPaid: 6000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: true,
    clientTemperament: "Verified Customer Demo Account.",
    reelsDelivered: 8,
    reelsTotal: 15,
    adsActive: 6,
    adsPending: 9,
    metaBudgetSpent: 1420,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "Reel #4 is driving highest conversions at ₹31/inquiry in 6km radius.",
    createdDate: "02 Nov 2026",
    passwordHash: "7489640013",
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
        title: "Chef Special Woodfire Pizza & Cold Brew",
        deliveredDate: "06 Nov 2026",
        views: "98K",
        leads: "19 Table Inquiries",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r3",
        title: "Festival Kurti & Partywear New Collection",
        deliveredDate: "09 Nov 2026",
        views: "210K",
        leads: "42 Bookings",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "r4",
        title: "Weekend Brunch & New Arrival Denim Fit",
        deliveredDate: "12 Nov 2026",
        views: "185K",
        leads: "35 Walk-ins",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
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
      name: "Aryan Verma (Creative Director)",
      phone: "+91 98765 43210",
      whatsapp: "919876543210"
    },
    deliveredReelsList: [
      {
        id: "r101",
        title: "Sensory Sizzler & Ambience 3-Sec Hook",
        deliveredDate: "04 Nov 2026",
        views: "140K",
        leads: "28 WhatsApp Chats",
        status: "Live & Scaling",
        videoThumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

const STORAGE_KEY = 'ronin_agency_clients_v3';

export const getClients = (): ClientAccount[] => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) {
      if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CLIENTS));
      return INITIAL_CLIENTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return INITIAL_CLIENTS;
    
    // Ensure vishaljain@gmail.com always exists with updated credentials
    const hasVishal = parsed.some(c => c.email.toLowerCase() === 'vishaljain@gmail.com');
    if (!hasVishal) {
      parsed.unshift(INITIAL_CLIENTS[0]);
    }
    return parsed;
  } catch {
    return INITIAL_CLIENTS;
  }
};

export const saveClients = (clients: ClientAccount[]) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    }
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

export const registerClient = (data: {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  password: string;
}): ClientAccount => {
  const clients = getClients();
  const newId = `CLI-${100 + clients.length + 1}`;

  const newAccount: ClientAccount = {
    id: newId,
    name: data.name,
    businessName: data.businessName,
    category: data.category || "Retail & Business",
    phone: data.phone,
    email: data.email,
    city: data.city || "India",
    packageSubscribed: "No Plan Activated Yet",
    totalBilled: 0,
    amountPaid: 0,
    amountDue: 0,
    paymentStatus: 'Due',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "New registered client.",
    reelsDelivered: 0,
    reelsTotal: 0,
    adsActive: 0,
    adsPending: 0,
    metaBudgetSpent: 0,
    metaBudgetTotal: 0,
    serviceStatus: 'Pending Renewal',
    notes: "Account created via portal registration. Ready to choose package.",
    createdDate: "Today",
    passwordHash: data.password,
    assignedManager: {
      name: "Aryan Verma (Lead Creative)",
      phone: "+91 98765 43210",
      whatsapp: "919876543210"
    },
    deliveredReelsList: []
  };

  clients.push(newAccount);
  saveClients(clients);
  return newAccount;
};
