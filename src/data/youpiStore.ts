export interface YoupiTransaction {
  id: string;
  orderId: string;
  customerName: string;
  businessName: string;
  customerEmail: string;
  customerPhone?: string;
  planName: string;
  amount: number;
  method: 'UPI_QR' | 'PHONEPE' | 'GPAY' | 'PAYTM' | 'MANUAL_UPI';
  utr: string;
  status: 'PENDING_REVIEW' | 'VERIFIED' | 'REJECTED';
  timestamp: string;
  notes?: string;
}

export interface YoupiSettings {
  upiId: string;
  merchantName: string;
  merchantId: string;
  apiKey: string;
  webhookSecret: string;
  autoVerify: boolean;
  isTestMode: boolean;
  dailyLimit: number;
}

const SETTINGS_STORAGE_KEY = 'click_and_craft_youpi_settings_v1';
const TXN_STORAGE_KEY = 'click_and_craft_youpi_transactions_v1';

export const DEFAULT_YOUPI_SETTINGS: YoupiSettings = {
  upiId: "7489640013@okaxis",
  merchantName: "Click and Craft Agency",
  merchantId: "MERCH-CC-9901",
  apiKey: "youpi_live_sec_7489640013",
  webhookSecret: "whsec_clickandcraft_2026_prod",
  autoVerify: false,
  isTestMode: false,
  dailyLimit: 200000
};

export const INITIAL_TRANSACTIONS: YoupiTransaction[] = [
  {
    id: "YOUPI-TXN-8091",
    orderId: "ORD-15R-6000",
    customerName: "Vishal Jain",
    businessName: "Vishal Lifestyle Store & Café",
    customerEmail: "vishaljain@gmail.com",
    customerPhone: "+91 74896 40013",
    planName: "15 Reels Signature Growth Package",
    amount: 6000,
    method: "UPI_QR",
    utr: "431980765432",
    status: "VERIFIED",
    timestamp: "17 Nov 2026, 04:15 PM",
    notes: "Verified against receiving bank account (HDFC Bank). 8/15 Reels in progress."
  },
  {
    id: "YOUPI-TXN-8092",
    orderId: "ORD-STR-3000",
    customerName: "Aman Gupta",
    businessName: "The Vintage Bean Café",
    customerEmail: "vintagebean@gmail.com",
    customerPhone: "+91 98290 12345",
    planName: "5 Reels Ad Campaign",
    amount: 3000,
    method: "PHONEPE",
    utr: "431981223984",
    status: "PENDING_REVIEW",
    timestamp: "18 Nov 2026, 01:45 AM",
    notes: "Customer submitted UTR. Awaiting admin bank reconciliation."
  }
];

export const getYoupiSettings = (): YoupiSettings => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(SETTINGS_STORAGE_KEY) : null;
    if (!raw) return DEFAULT_YOUPI_SETTINGS;
    return { ...DEFAULT_YOUPI_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_YOUPI_SETTINGS;
  }
};

export const saveYoupiSettings = (settings: YoupiSettings): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    }
  } catch (e) {
    console.error("Failed to save Youpi settings", e);
  }
};

export const getYoupiTransactions = (): YoupiTransaction[] => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(TXN_STORAGE_KEY) : null;
    if (!raw) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(TXN_STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
      }
      return INITIAL_TRANSACTIONS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return INITIAL_TRANSACTIONS;
    return parsed;
  } catch {
    return INITIAL_TRANSACTIONS;
  }
};

export const saveYoupiTransactions = (txns: YoupiTransaction[]): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TXN_STORAGE_KEY, JSON.stringify(txns));
    }
  } catch (e) {
    console.error("Failed to save Youpi transactions", e);
  }
};

export const recordNewTransaction = (data: {
  planName: string;
  amount: number;
  utr: string;
  customerName?: string;
  businessName?: string;
  customerEmail?: string;
  method?: 'UPI_QR' | 'PHONEPE' | 'GPAY' | 'PAYTM' | 'MANUAL_UPI';
}): YoupiTransaction => {
  const current = getYoupiTransactions();
  const newTxn: YoupiTransaction = {
    id: `YOUPI-TXN-${Math.floor(1000 + Math.random() * 9000)}`,
    orderId: `ORD-${Date.now().toString().slice(-6)}`,
    customerName: data.customerName || "Customer",
    businessName: data.businessName || "Store Client",
    customerEmail: data.customerEmail || "client@store.com",
    planName: data.planName,
    amount: data.amount,
    method: data.method || "UPI_QR",
    utr: data.utr,
    status: "PENDING_REVIEW",
    timestamp: new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    }),
    notes: `Submitted via YouPI-PG Gateway. UTR: ${data.utr}`
  };

  const updated = [newTxn, ...current];
  saveYoupiTransactions(updated);
  return newTxn;
};
