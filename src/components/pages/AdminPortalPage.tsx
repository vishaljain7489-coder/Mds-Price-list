import React, { useState, useEffect } from 'react';
import { 
  Lock, ShieldCheck, ArrowLeft, Video, Star, Plus, 
  Trash2, CheckCircle2, AlertCircle, Sparkles, 
  Users, DollarSign, Briefcase, Phone, Mail, MapPin, 
  Edit3, Save, RotateCcw, TrendingUp, CreditCard, Award, 
  MessageSquare, ExternalLink, RefreshCw, X, ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';
import { Badge } from '../common/Badge';
import { CreativeItem, AgencyClient, TeamMemberSalary, AgencyPricing } from '../../types';

// Default initial CRM clients
const DEFAULT_CLIENTS: AgencyClient[] = [
  {
    id: "CLI-101",
    name: "Rohit Verma",
    businessName: "Royal Heritage Café & Dine",
    category: "Food & Hospitality",
    phone: "+91 98765 43210",
    email: "rohit@royalheritage.com",
    city: "Jaipur, C-Scheme",
    packageSubscribed: "15 Reels Advertisement Package (₹6,000)",
    totalBilled: 6000,
    amountPaid: 6000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: true,
    clientTemperament: "Very polite & enthusiastic. Focuses on weekend family footfall. Appreciates weekly video summaries and clear lead metrics.",
    reelsDelivered: 8,
    reelsTotal: 15,
    adsActive: 6,
    adsPending: 9,
    metaBudgetSpent: 1420,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "Reel #4 (Weekend Special Hook) is driving high conversions at ₹31/lead in 6km radius.",
    createdDate: "02 Nov 2026"
  },
  {
    id: "CLI-102",
    name: "Vikram Singhania",
    businessName: "Apex Motors (Pre-Owned Luxury Cars)",
    category: "Automotive",
    phone: "+91 98112 54321",
    email: "vikram@apexmotors.in",
    city: "Gurugram, Golf Course Rd",
    packageSubscribed: "Combo: 15 Reels + 15 Reels Ad Campaigns (₹12,000)",
    totalBilled: 12000,
    amountPaid: 12000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'Bank Transfer',
    isVip: true,
    clientTemperament: "Direct and results-oriented. Demands genuine test-drive buyers. Prefers cinematic color grading and premium luxury feel.",
    reelsDelivered: 12,
    reelsTotal: 15,
    adsActive: 10,
    adsPending: 5,
    metaBudgetSpent: 2600,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "34 genuine test drive inquiries booked this week with high buyer intent.",
    createdDate: "28 Oct 2026"
  },
  {
    id: "CLI-103",
    name: "Pooja Malhotra",
    businessName: "Aura Luxury Hair & Aesthetics Salon",
    category: "Beauty & Wellness",
    phone: "+91 98721 98765",
    email: "pooja@aurasalon.com",
    city: "Mumbai, Bandra West",
    packageSubscribed: "15 Reels Package (Production Only - ₹6,000)",
    totalBilled: 6000,
    amountPaid: 4000,
    amountDue: 2000,
    paymentStatus: 'Partial',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "Aesthetic-focused. High expectations on dynamic kinetic titles and trending viral music. Remaining ₹2,000 on final batch delivery.",
    reelsDelivered: 10,
    reelsTotal: 15,
    adsActive: 0,
    adsPending: 0,
    metaBudgetSpent: 0,
    metaBudgetTotal: 0,
    serviceStatus: 'In Production',
    notes: "Final 5 reels being edited. Balance clearance scheduled for next Monday.",
    createdDate: "05 Nov 2026"
  },
  {
    id: "CLI-104",
    name: "Anand Verma",
    businessName: "Iron Core Fitness Studio & Gym",
    category: "Fitness & Health",
    phone: "+91 94140 12345",
    email: "anand@ironcoregym.com",
    city: "Jaipur, Vaishali Nagar",
    packageSubscribed: "Starter Ad Package (₹3,000)",
    totalBilled: 3000,
    amountPaid: 3000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "High energy, fast communicator. Requires walk-in pass lead captures within 4km radius. Needs daily morning check-in.",
    reelsDelivered: 15,
    reelsTotal: 15,
    adsActive: 15,
    adsPending: 0,
    metaBudgetSpent: 1500,
    metaBudgetTotal: 1500,
    serviceStatus: 'Pending Renewal',
    notes: "30-day initial trial completed. Proposing upgrade to full 15 Reels Package for next month.",
    createdDate: "15 Oct 2026"
  }
];

// Default initial team members and salaries
const DEFAULT_SALARIES: TeamMemberSalary[] = [
  {
    id: "TEAM-01",
    name: "Aryan Sharma",
    role: "Senior Video Editor (Kinetic Subtitles & 9:16 Cuts)",
    salaryAmount: 15000,
    payoutStatus: 'Paid',
    payCycle: "Monthly (1st of month)",
    phone: "+91 98290 11223",
    notes: "Produces 15-reels batches, handles motion sound design and hook zooms."
  },
  {
    id: "TEAM-02",
    name: "Kavita Mehta",
    role: "Meta Ads Specialist & Media Buyer",
    salaryAmount: 12000,
    payoutStatus: 'Pending',
    payCycle: "Monthly (5th of month)",
    phone: "+91 98291 44556",
    notes: "Configures Meta Ads Manager campaigns, 5-10km radius geofencing, and WhatsApp routing."
  },
  {
    id: "TEAM-03",
    name: "Rahul Tyagi",
    role: "Direct-Response Scriptwriter & AI Hook Researcher",
    salaryAmount: 8000,
    payoutStatus: 'Paid',
    payCycle: "Monthly (1st of month)",
    phone: "+91 98292 77889",
    notes: "Researches viral pattern interrupts, writes 3-second scroll stoppers for client niches."
  },
  {
    id: "TEAM-04",
    name: "Sneha Patel",
    role: "Graphic & Video Thumbnail Specialist",
    salaryAmount: 6000,
    payoutStatus: 'Pending',
    payCycle: "Monthly (5th of month)",
    phone: "+91 98293 99001",
    notes: "Creates high-CTR reel cover art, motion graphic overlays, and promotional story assets."
  }
];

export const AdminPortalPage: React.FC = () => {
  const { 
    isAdminUnlocked, 
    setSecurityOpen, 
    setCurrentPage, 
    language, 
    t, 
    agencyPricing, 
    updateAgencyPricing, 
    resetAgencyPricing 
  } = useApp();

  // Active Admin Tabs
  const [activeAdminTab, setActiveAdminTab] = useState<'crm' | 'pricing' | 'finance' | 'sync' | 'media'>('crm');

  // 1. CRM CLIENT DATABASE STATE
  const [clients, setClients] = useState<AgencyClient[]>(() => {
    try {
      const saved = localStorage.getItem('agency_clients_crm');
      return saved ? JSON.parse(saved) : DEFAULT_CLIENTS;
    } catch (e) {
      return DEFAULT_CLIENTS;
    }
  });

  const [clientSearchQuery, setClientSearchQuery] = useState('');
  const [clientFilter, setClientFilter] = useState<'all' | 'vip' | 'due' | 'active'>('all');
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<AgencyClient | null>(null);

  // New Client Form State
  const [clientForm, setClientForm] = useState<Partial<AgencyClient>>({
    name: '',
    businessName: '',
    category: 'Retail Store',
    phone: '',
    email: '',
    city: '',
    packageSubscribed: '15 Reels Advertisement Package (₹6,000)',
    totalBilled: 6000,
    amountPaid: 6000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: '',
    reelsDelivered: 0,
    reelsTotal: 15,
    adsActive: 0,
    adsPending: 15,
    metaBudgetSpent: 0,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: ''
  });

  // Save clients to localStorage
  const saveClients = (newClients: AgencyClient[]) => {
    setClients(newClients);
    try {
      localStorage.setItem('agency_clients_crm', JSON.stringify(newClients));
    } catch (e) {}
  };

  const handleSaveClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientForm.name || !clientForm.businessName) return;

    if (editingClient) {
      // Update existing
      const updated = clients.map(c => c.id === editingClient.id ? { ...c, ...clientForm } as AgencyClient : c);
      saveClients(updated);
      setEditingClient(null);
    } else {
      // Add new
      const newClientObj: AgencyClient = {
        id: `CLI-${Date.now().toString().slice(-4)}`,
        name: clientForm.name || '',
        businessName: clientForm.businessName || '',
        category: clientForm.category || 'Retail',
        phone: clientForm.phone || '',
        email: clientForm.email || '',
        city: clientForm.city || '',
        packageSubscribed: clientForm.packageSubscribed || '15 Reels Advertisement Package (₹6,000)',
        totalBilled: Number(clientForm.totalBilled) || 6000,
        amountPaid: Number(clientForm.amountPaid) || 6000,
        amountDue: (Number(clientForm.totalBilled) || 6000) - (Number(clientForm.amountPaid) || 6000),
        paymentStatus: clientForm.paymentStatus || 'Paid',
        paymentMode: clientForm.paymentMode || 'UPI',
        isVip: !!clientForm.isVip,
        clientTemperament: clientForm.clientTemperament || 'Standard client profile.',
        reelsDelivered: Number(clientForm.reelsDelivered) || 0,
        reelsTotal: Number(clientForm.reelsTotal) || 15,
        adsActive: Number(clientForm.adsActive) || 0,
        adsPending: (Number(clientForm.reelsTotal) || 15) - (Number(clientForm.adsActive) || 0),
        metaBudgetSpent: Number(clientForm.metaBudgetSpent) || 0,
        metaBudgetTotal: Number(clientForm.metaBudgetTotal) || 3000,
        serviceStatus: clientForm.serviceStatus || 'Active & Optimizing',
        notes: clientForm.notes || '',
        createdDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      saveClients([newClientObj, ...clients]);
    }

    setIsAddClientModalOpen(false);
    resetClientForm();
  };

  const resetClientForm = () => {
    setClientForm({
      name: '',
      businessName: '',
      category: 'Retail Store',
      phone: '',
      email: '',
      city: '',
      packageSubscribed: '15 Reels Advertisement Package (₹6,000)',
      totalBilled: 6000,
      amountPaid: 6000,
      amountDue: 0,
      paymentStatus: 'Paid',
      paymentMode: 'UPI',
      isVip: false,
      clientTemperament: '',
      reelsDelivered: 0,
      reelsTotal: 15,
      adsActive: 0,
      adsPending: 15,
      metaBudgetSpent: 0,
      metaBudgetTotal: 3000,
      serviceStatus: 'Active & Optimizing',
      notes: ''
    });
  };

  const handleDeleteClient = (id: string) => {
    if (confirm(language === 'hi' ? 'क्या आप इस क्लाइंट को रिकॉर्ड से हटाना चाहते हैं?' : 'Are you sure you want to delete this client record?')) {
      const updated = clients.filter(c => c.id !== id);
      saveClients(updated);
    }
  };

  const handleEditClientOpen = (c: AgencyClient) => {
    setEditingClient(c);
    setClientForm({ ...c });
    setIsAddClientModalOpen(true);
  };

  // 1-Click Push Client to Live Portal (#customer)
  const [syncNotice, setSyncNotice] = useState<string | null>(null);
  const handlePushClientToLivePortal = (client: AgencyClient) => {
    const portalData = {
      businessName: client.businessName,
      ownerName: client.name,
      email: client.email,
      phone: client.phone,
      activePackage: client.packageSubscribed,
      status: client.serviceStatus,
      reelsDelivered: client.reelsDelivered,
      reelsTotal: client.reelsTotal,
      adsActive: client.adsActive,
      adsPending: client.adsPending,
      metaBudgetTotal: client.metaBudgetTotal,
      metaBudgetSpent: client.metaBudgetSpent,
      leadsGenerated: Math.round(client.metaBudgetSpent > 0 ? (client.metaBudgetSpent / 38) : 12),
      costPerLead: 37.36,
      videoViews: `${(client.reelsDelivered * 1850).toLocaleString('en-IN')}`,
      clickThroughRate: "4.8%",
      last24hUpdate: {
        timestamp: "Today, 10:30 AM (24h Live Meta Telemetry)",
        note: client.notes || `Reels delivered: ${client.reelsDelivered}/${client.reelsTotal}. Hyper-local geo-targeting active in 6km radius.`,
        metricHighlight: `+${Math.max(4, Math.round(client.adsActive * 1.8))} New WhatsApp Inquiries in last 24h`
      }
    };
    try {
      localStorage.setItem('agency_active_client_data', JSON.stringify(portalData));
      window.dispatchEvent(new Event('storage'));
      setSyncNotice(language === 'hi' ? `${client.name} का डेटा लाइव पोर्टल पर पब्लिश कर दिया गया है!` : `${client.name}'s data pushed to Customer Portal!`);
      setTimeout(() => setSyncNotice(null), 3500);
    } catch (e) {}
  };

  // 2. PRICING CONTROLLER STATE
  const [priceForm, setPriceForm] = useState<AgencyPricing>(agencyPricing);
  const [priceSuccess, setPriceSuccess] = useState(false);

  useEffect(() => {
    setPriceForm(agencyPricing);
  }, [agencyPricing]);

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    updateAgencyPricing(priceForm);
    setPriceSuccess(true);
    setTimeout(() => setPriceSuccess(false), 3000);
  };

  const handleResetPricing = () => {
    if (confirm(language === 'hi' ? 'डिफ़ॉल्ट ₹6,000 प्राइजिंग पर रीसेट करें?' : 'Reset to default ₹6,000 pricing?')) {
      resetAgencyPricing();
      setPriceSuccess(true);
      setTimeout(() => setPriceSuccess(false), 3000);
    }
  };

  // 3. TEAM SALARIES & FINANCIALS STATE
  const [salaries, setSalaries] = useState<TeamMemberSalary[]>(() => {
    try {
      const saved = localStorage.getItem('agency_team_salaries');
      return saved ? JSON.parse(saved) : DEFAULT_SALARIES;
    } catch (e) {
      return DEFAULT_SALARIES;
    }
  });

  const [toolsExpense, setToolsExpense] = useState<number>(3500);
  const [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false);
  const [teamForm, setTeamForm] = useState<Partial<TeamMemberSalary>>({
    name: '',
    role: '',
    salaryAmount: 10000,
    payoutStatus: 'Pending',
    payCycle: 'Monthly (1st to 5th)',
    phone: '',
    notes: ''
  });

  const saveSalaries = (newSalaries: TeamMemberSalary[]) => {
    setSalaries(newSalaries);
    try {
      localStorage.setItem('agency_team_salaries', JSON.stringify(newSalaries));
    } catch (e) {}
  };

  const handleToggleSalaryStatus = (id: string) => {
    const updated = salaries.map(s => {
      if (s.id === id) {
        return {
          ...s,
          payoutStatus: s.payoutStatus === 'Paid' ? 'Pending' : 'Paid'
        } as TeamMemberSalary;
      }
      return s;
    });
    saveSalaries(updated);
  };

  const handleAddTeamMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamForm.name || !teamForm.role) return;
    const newMember: TeamMemberSalary = {
      id: `TEAM-${Date.now().toString().slice(-4)}`,
      name: teamForm.name || '',
      role: teamForm.role || '',
      salaryAmount: Number(teamForm.salaryAmount) || 8000,
      payoutStatus: teamForm.payoutStatus || 'Pending',
      payCycle: teamForm.payCycle || 'Monthly',
      phone: teamForm.phone || '',
      notes: teamForm.notes || ''
    };
    saveSalaries([...salaries, newMember]);
    setIsAddTeamModalOpen(false);
    setTeamForm({
      name: '',
      role: '',
      salaryAmount: 10000,
      payoutStatus: 'Pending',
      payCycle: 'Monthly (1st to 5th)',
      phone: '',
      notes: ''
    });
  };

  const handleDeleteTeamMember = (id: string) => {
    if (confirm(language === 'hi' ? 'क्या आप इस टीम मेंबर को हटाना चाहते हैं?' : 'Remove this team member?')) {
      const updated = salaries.filter(s => s.id !== id);
      saveSalaries(updated);
    }
  };

  // Financial Calculations
  const grossRevenue = clients.reduce((acc, c) => acc + (c.amountPaid || 0), 0);
  const totalAmountDue = clients.reduce((acc, c) => acc + (c.amountDue || 0), 0);
  const totalDirectMetaAdSpend = clients.reduce((acc, c) => acc + (c.metaBudgetSpent || 0), 0);
  const totalTeamSalaries = salaries.reduce((acc, s) => acc + (s.salaryAmount || 0), 0);
  const salariesPaid = salaries.filter(s => s.payoutStatus === 'Paid').reduce((acc, s) => acc + s.salaryAmount, 0);
  const salariesPending = salaries.filter(s => s.payoutStatus === 'Pending').reduce((acc, s) => acc + s.salaryAmount, 0);
  const netAgencyProfit = grossRevenue - totalDirectMetaAdSpend - totalTeamSalaries - toolsExpense;
  const netProfitMargin = grossRevenue > 0 ? Math.round((netAgencyProfit / grossRevenue) * 100) : 0;

  // 4. 24h LIVE TELEMETRY STATE
  const [liveTelemetry, setLiveTelemetry] = useState(() => {
    try {
      const saved = localStorage.getItem('agency_active_client_data');
      return saved ? JSON.parse(saved) : {
        businessName: "Royal Heritage Café & Dine",
        ownerName: "Rohit Verma",
        email: "rohit@royalheritage.com",
        phone: "+91 98765 43210",
        activePackage: "15 Reels Advertisement Package (₹6,000)",
        status: "Active & Optimizing",
        reelsDelivered: 8,
        reelsTotal: 15,
        adsActive: 6,
        adsPending: 9,
        metaBudgetTotal: 3000,
        metaBudgetSpent: 1420,
        leadsGenerated: 38,
        costPerLead: 37.36,
        videoViews: "14,850",
        clickThroughRate: "4.8%",
        last24hUpdate: {
          timestamp: "Today, 10:30 AM (24h Live Meta Telemetry)",
          note: "Reel #4 (Weekend Special Hook) is driving the highest conversion rate at ₹31 per WhatsApp lead. Meta algorithm has optimized towards women aged 22-38 in 6km radius.",
          metricHighlight: "+11 New WhatsApp Inquiries in last 24 hours"
        }
      };
    } catch (e) {
      return {};
    }
  });
  const [telemetrySuccess, setTelemetrySuccess] = useState(false);

  const handleUpdateReelCount = (delta: number) => {
    setLiveTelemetry((prev: any) => {
      const nextCount = Math.max(0, Math.min(prev.reelsTotal || 15, (prev.reelsDelivered || 8) + delta));
      return { ...prev, reelsDelivered: nextCount };
    });
  };

  const handleUpdateAdsCount = (delta: number) => {
    setLiveTelemetry((prev: any) => {
      const nextActive = Math.max(0, Math.min(15, (prev.adsActive || 6) + delta));
      const nextPending = 15 - nextActive;
      return { ...prev, adsActive: nextActive, adsPending: nextPending };
    });
  };

  const handleSave24hTelemetry = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('agency_active_client_data', JSON.stringify(liveTelemetry));
      window.dispatchEvent(new Event('storage'));
      setTelemetrySuccess(true);
      setTimeout(() => setTelemetrySuccess(false), 3000);
    } catch (err) {}
  };

  // 5. MEDIA & SHOWCASE REELS STATE
  const [customReels, setCustomReels] = useState<CreativeItem[]>(() => {
    try {
      const saved = localStorage.getItem('agency_custom_reels');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [customReviews, setCustomReviews] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('agency_custom_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [newReel, setNewReel] = useState({
    title: '',
    handle: '',
    categoryLabel: 'Instagram Reel Ads',
    hookText: '',
    metrics: '',
    description: '',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    likes: '12.4K',
    comments: '340',
    shares: '1.2K',
    ctaBadge: 'Send WhatsApp Inquiry'
  });

  const [newReview, setNewReview] = useState({
    name: '',
    business: '',
    category: 'Retail',
    rating: 5,
    deliverable: '',
    result: '',
    quote: ''
  });

  const [reelSuccess, setReelSuccess] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleAddReel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReel.title.trim() || !newReel.hookText.trim()) return;

    const item: CreativeItem = {
      id: `custom-reel-${Date.now()}`,
      title: newReel.title,
      category: 'Reels',
      categoryLabel: newReel.categoryLabel,
      format: '9:16 Vertical Reel',
      metrics: newReel.metrics || '4.9% CTR • Verified Leads',
      description: newReel.description || 'Top rated direct-response reel engineered for customer acquisition.',
      thumbnailUrl: newReel.thumbnailUrl,
      videoUrl: newReel.videoUrl,
      hookText: newReel.hookText,
      handle: newReel.handle.startsWith('@') ? `${newReel.handle} • Sponsored` : `@${newReel.handle} • Sponsored`,
      likes: newReel.likes,
      comments: newReel.comments,
      shares: newReel.shares,
      audioTitle: 'Trending Direct-Response Hook',
      ctaBadge: newReel.ctaBadge,
      demoLabel: 'FEATURED / TOP RATED'
    };

    const updated = [item, ...customReels];
    setCustomReels(updated);
    try {
      localStorage.setItem('agency_custom_reels', JSON.stringify(updated));
    } catch (e) {}

    setReelSuccess(true);
    setTimeout(() => setReelSuccess(false), 3000);

    setNewReel({
      title: '',
      handle: '',
      categoryLabel: 'Instagram Reel Ads',
      hookText: '',
      metrics: '',
      description: '',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      likes: '12.4K',
      comments: '340',
      shares: '1.2K',
      ctaBadge: 'Send WhatsApp Inquiry'
    });
  };

  const handleDeleteReel = (id: string) => {
    const updated = customReels.filter(r => r.id !== id);
    setCustomReels(updated);
    try {
      localStorage.setItem('agency_custom_reels', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.quote.trim()) return;

    const item = {
      id: `custom-rev-${Date.now()}`,
      name: newReview.name,
      business: newReview.business,
      category: newReview.category,
      rating: Number(newReview.rating),
      deliverable: newReview.deliverable || 'Meta Ads Campaign',
      result: newReview.result || 'Verified ROI & Growth',
      quote: newReview.quote
    };

    const updated = [item, ...customReviews];
    setCustomReviews(updated);
    try {
      localStorage.setItem('agency_custom_reviews', JSON.stringify(updated));
    } catch (e) {}

    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 3000);

    setNewReview({
      name: '',
      business: '',
      category: 'Retail',
      rating: 5,
      deliverable: '',
      result: '',
      quote: ''
    });
  };

  const handleDeleteReview = (id: string) => {
    const updated = customReviews.filter(r => r.id !== id);
    setCustomReviews(updated);
    try {
      localStorage.setItem('agency_custom_reviews', JSON.stringify(updated));
    } catch (e) {}
  };

  // Filtered Clients for CRM
  const filteredClients = clients.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(clientSearchQuery.toLowerCase()) ||
      c.businessName.toLowerCase().includes(clientSearchQuery.toLowerCase()) ||
      c.phone.includes(clientSearchQuery) ||
      c.city.toLowerCase().includes(clientSearchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    if (clientFilter === 'vip') return c.isVip;
    if (clientFilter === 'due') return c.amountDue > 0;
    if (clientFilter === 'active') return c.serviceStatus === 'Active & Optimizing';
    return true;
  });

  // Security gate check
  if (!isAdminUnlocked) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-6 text-center">
        <div className="card-white max-w-md p-8 sm:p-10 rounded-[32px] shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#3C147A] dark:bg-[#D8FC38] text-[#D8FC38] dark:text-[#182C05] flex items-center justify-center mx-auto mb-4 shadow-lg font-bold">
            <Lock className="w-8 h-8" />
          </div>

          <Badge variant="lime" className="mb-3">
            {t.security.lockedBadge}
          </Badge>

          <h2 className="text-2xl font-black text-[#17092F] dark:text-white mb-3">
            {t.security.portalTitle}
          </h2>

          <p className="text-xs text-[#685984] dark:text-slate-300 mb-6 leading-relaxed">
            {t.security.portalSubtitle}
          </p>

          <button
            onClick={() => setSecurityOpen(true)}
            className="btn-purple dark:btn-lime w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer shadow-md"
          >
            {t.security.unlockBtn}
          </button>

          <button
            onClick={() => setCurrentPage('home')}
            className="text-xs text-[#685984] dark:text-slate-400 hover:text-[#3C147A] dark:hover:text-white font-bold cursor-pointer"
          >
            ← {language === 'hi' ? 'मुख्य वेबसाइट पर वापस जाएं' : 'Return to Public Website'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10">
      
      {/* Toast Notice */}
      {syncNotice && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-2xl bg-emerald-600 text-white shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">{syncNotice}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#3C147A]/15 dark:border-white/10 mb-8">
        <div>
          <button
            onClick={() => setCurrentPage('home')}
            className="text-xs font-bold text-[#685984] dark:text-slate-400 hover:text-[#3C147A] dark:hover:text-white flex items-center gap-1.5 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'मुख्य साइट पर जाएं' : 'Back To Website'}</span>
          </button>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-[#17092F] dark:text-white">
              {language === 'hi' ? 'एजेंसी कंट्रोल व मैनेजमेंट ओएस' : 'Agency Master Control & Operating System'}
            </h1>
            <span className="badge-lime-pill text-[10px] py-0.5 px-2">
              ● ADMIN ACTIVE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-[#D8FC38] text-xs font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>PIN: 2026 Master Access</span>
          </div>
        </div>
      </div>

      {/* Admin Navigation Pills - 5 Core Modules */}
      <div className="flex flex-wrap gap-2 mb-8">
        
        {/* Tab 1: CRM & Clients */}
        <button
          onClick={() => setActiveAdminTab('crm')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeAdminTab === 'crm'
              ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
              : 'card-white text-[#685984] dark:text-slate-300'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{language === 'hi' ? '1. कस्टमर CRM व क्लाइंट डेटा' : '1. Client CRM & Database'}</span>
          <span className="w-4 h-4 rounded-full bg-[#D8FC38] dark:bg-[#3C147A] text-[#182C05] dark:text-white text-[10px] font-bold flex items-center justify-center">
            {clients.length}
          </span>
        </button>

        {/* Tab 2: Pricing Manager */}
        <button
          onClick={() => setActiveAdminTab('pricing')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeAdminTab === 'pricing'
              ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
              : 'card-white text-[#685984] dark:text-slate-300'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>{language === 'hi' ? '2. पैकेज प्राइजिंग कंट्रोलर' : '2. Package Pricing Controller'}</span>
        </button>

        {/* Tab 3: Finance, Revenue & Salaries */}
        <button
          onClick={() => setActiveAdminTab('finance')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeAdminTab === 'finance'
              ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
              : 'card-white text-[#685984] dark:text-slate-300'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>{language === 'hi' ? '3. रेवेन्यू, सैलरी व प्रॉफिट' : '3. Revenue, Salaries & Profit'}</span>
        </button>

        {/* Tab 4: 24h Live Telemetry */}
        <button
          onClick={() => setActiveAdminTab('sync')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeAdminTab === 'sync'
              ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
              : 'card-white text-[#685984] dark:text-slate-300'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{language === 'hi' ? '4. 24h लाइव टेलीमेट्री सिंक' : '4. 24h Live Telemetry Sync'}</span>
        </button>

        {/* Tab 5: Reels & Reviews */}
        <button
          onClick={() => setActiveAdminTab('media')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeAdminTab === 'media'
              ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
              : 'card-white text-[#685984] dark:text-slate-300'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>{language === 'hi' ? '5. रील्स व रिव्यूज़ मैनेजमेंट' : '5. Reels & Reviews Manager'}</span>
          {(customReels.length + customReviews.length) > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#D8FC38] text-[#182C05] text-[10px] font-bold flex items-center justify-center">
              {customReels.length + customReviews.length}
            </span>
          )}
        </button>
      </div>

      {/* ========================================================== */}
      {/* MODULE 1: CLIENT CRM & CUSTOMER DATABASE                    */}
      {/* ========================================================== */}
      {activeAdminTab === 'crm' && (
        <div className="space-y-6">
          
          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="card-white p-4 rounded-2xl">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'कुल एक्टिव क्लाइंट्स' : 'Total Active Clients'}
              </span>
              <span className="text-2xl font-black text-[#3C147A] dark:text-white font-mono">{clients.length}</span>
            </div>
            <div className="card-white p-4 rounded-2xl">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? '⭐ VIP क्लाइंट्स' : '⭐ VIP Clients'}
              </span>
              <span className="text-2xl font-black text-amber-500 font-mono">
                {clients.filter(c => c.isVip).length}
              </span>
            </div>
            <div className="card-white p-4 rounded-2xl">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'कुल प्राप्त पेमेंट' : 'Total Collected'}
              </span>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                ₹{grossRevenue.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="card-white p-4 rounded-2xl">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'बाकी पेमेंट (Due)' : 'Pending Due Balance'}
              </span>
              <span className={`text-2xl font-black font-mono ${totalAmountDue > 0 ? 'text-red-500' : 'text-slate-400'}`}>
                ₹{totalAmountDue.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* CRM Controls Bar: Search, Filters & Add Client Button */}
          <div className="card-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder={language === 'hi' ? 'नाम, बिजनेस, शहर या फोन से खोजें...' : 'Search by name, business, city or phone...'}
                value={clientSearchQuery}
                onChange={(e) => setClientSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/10 text-xs text-[#17092F] dark:text-white w-full sm:w-72 focus:outline-none"
              />
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setClientFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    clientFilter === 'all' ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05]' : 'bg-[#EDE5FA] dark:bg-white/10 text-[#685984] dark:text-slate-300'
                  }`}
                >
                  {language === 'hi' ? 'सभी' : 'All'}
                </button>
                <button
                  onClick={() => setClientFilter('vip')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    clientFilter === 'vip' ? 'bg-amber-500 text-white' : 'bg-[#EDE5FA] dark:bg-white/10 text-[#685984] dark:text-slate-300'
                  }`}
                >
                  ⭐ VIP
                </button>
                <button
                  onClick={() => setClientFilter('due')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    clientFilter === 'due' ? 'bg-red-500 text-white' : 'bg-[#EDE5FA] dark:bg-white/10 text-[#685984] dark:text-slate-300'
                  }`}
                >
                  {language === 'hi' ? 'बाकी पेमेंट' : 'Due'}
                </button>
                <button
                  onClick={() => setClientFilter('active')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    clientFilter === 'active' ? 'bg-emerald-600 text-white' : 'bg-[#EDE5FA] dark:bg-white/10 text-[#685984] dark:text-slate-300'
                  }`}
                >
                  {language === 'hi' ? 'एक्टिव' : 'Active'}
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                resetClientForm();
                setEditingClient(null);
                setIsAddClientModalOpen(true);
              }}
              className="btn-purple dark:btn-lime py-2.5 px-5 text-xs font-bold flex items-center gap-2 shrink-0 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'hi' ? 'नया क्लाइंट जोड़ें' : 'Add New Client'}</span>
            </button>
          </div>

          {/* Clients List Cards */}
          <div className="space-y-4">
            {filteredClients.map((c) => (
              <div
                key={c.id}
                className="card-white p-5 sm:p-6 rounded-3xl border border-[#3C147A]/15 dark:border-white/10 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[#3C147A]/10 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center text-[#3C147A] dark:text-[#D8FC38] font-bold text-lg shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-base text-[#17092F] dark:text-white">
                          {c.name}
                        </h3>
                        <span className="text-xs text-[#685984] dark:text-slate-400">
                          ({c.businessName})
                        </span>
                        {c.isVip && (
                          <span className="bg-amber-400/20 text-amber-700 dark:text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                            ⭐ VIP CLIENT
                          </span>
                        )}
                        <span className="font-mono text-[10px] bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-slate-300 px-2 py-0.5 rounded">
                          {c.id}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#685984] dark:text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {c.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          {c.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          {c.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & WhatsApp */}
                  <div className="flex items-center gap-2 w-full lg:w-auto justify-end flex-wrap">
                    <button
                      onClick={() => handlePushClientToLivePortal(c)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                      title={language === 'hi' ? 'इस क्लाइंट का डेटा कस्टमर पोर्टल पर लाइव दिखाएं' : 'Push to Customer Portal'}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === 'hi' ? 'लाइव पोर्टल सिंक' : 'Push to Live Portal'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${c.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                        language === 'hi'
                          ? `नमस्ते ${c.name} जी, आपकी एजेंसी डिजिटल मार्केटिंग टीम से संपर्क कर रहे हैं।`
                          : `Hello ${c.name}, connecting regarding your active marketing campaign.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleEditClientOpen(c)}
                      className="p-2 rounded-xl bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-slate-300 hover:text-white hover:bg-[#3C147A] cursor-pointer"
                      title="Edit Client"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClient(c.id)}
                      className="p-2 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
                      title="Delete Client"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Client Delivery, Financials & Temperament Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  
                  {/* Column 1: Financial & Billing Details */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] space-y-1.5 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#685984] dark:text-slate-400 block mb-1">
                      {language === 'hi' ? 'फाइनेंशियल व पेमेंट स्टेटस' : 'Billing & Payment Details'}
                    </span>
                    <div className="flex justify-between">
                      <span className="text-[#685984] dark:text-slate-400">Package:</span>
                      <span className="font-bold text-[#17092F] dark:text-white">{c.packageSubscribed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#685984] dark:text-slate-400">Total Billed:</span>
                      <span className="font-mono font-bold text-[#17092F] dark:text-white">₹{c.totalBilled.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Paid ({c.paymentMode}):</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">₹{c.amountPaid.toLocaleString('en-IN')}</span>
                    </div>
                    {c.amountDue > 0 && (
                      <div className="flex justify-between">
                        <span className="text-red-500 font-bold">Pending Due:</span>
                        <span className="font-mono font-bold text-red-500">₹{c.amountDue.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Service Delivery Progress */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] space-y-2 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#685984] dark:text-slate-400 block mb-1">
                      {language === 'hi' ? 'सर्विस व रील्स डिलीवरी' : 'Service & Reels Delivery'}
                    </span>
                    
                    {/* Reels Progress */}
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-[#685984] dark:text-slate-400 font-medium">Reels Produced:</span>
                        <span className="font-bold text-[#3C147A] dark:text-[#D8FC38] font-mono">{c.reelsDelivered} / {c.reelsTotal}</span>
                      </div>
                      <div className="w-full bg-[#3C147A]/15 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-[#3C147A] dark:bg-[#D8FC38] h-1.5 rounded-full" 
                          style={{ width: `${Math.min(100, (c.reelsDelivered / (c.reelsTotal || 15)) * 100)}%` }} 
                        />
                      </div>
                    </div>

                    {/* Ads Progress */}
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-[#685984] dark:text-slate-400 font-medium">Active Ad Campaigns:</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{c.adsActive} Active ({c.adsPending} Pending)</span>
                      </div>
                      <div className="w-full bg-[#3C147A]/15 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(100, (c.adsActive / 15) * 100)}%` }} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Customer Temperament & Nature Notes */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5 text-xs">
                    <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'क्लाइंट का स्वभाव व जरूरतें (Temperament)' : 'Client Temperament & Behavior'}</span>
                    </span>
                    <p className="text-[11px] text-[#17092F] dark:text-slate-200 leading-relaxed italic">
                      "{c.clientTemperament || 'Standard client. No specific behavioral flags.'}"
                    </p>
                    {c.notes && (
                      <p className="text-[10px] text-[#685984] dark:text-slate-400 pt-1 border-t border-amber-500/20">
                        <span className="font-bold">Latest Note:</span> {c.notes}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE 2: PACKAGE PRICING CONTROLLER                        */}
      {/* ========================================================== */}
      {activeAdminTab === 'pricing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form: Edit Package Prices */}
          <div className="lg:col-span-7 card-white p-6 sm:p-8 rounded-[32px]">
            <div className="flex items-center justify-between pb-4 border-b border-[#3C147A]/15 dark:border-white/10 mb-6">
              <div>
                <span className="badge-lime-pill text-[10px] mb-1">
                  DYNAMIC AGENCY PRICING
                </span>
                <h3 className="text-xl font-black text-[#17092F] dark:text-white">
                  {language === 'hi' ? 'पैकेज प्राइजिंग कंट्रोलर' : 'Live Package Pricing Controller'}
                </h3>
              </div>

              <button
                onClick={handleResetPricing}
                className="text-xs font-bold text-[#685984] dark:text-slate-400 hover:text-red-500 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'डिफ़ॉल्ट रीसेट' : 'Reset Defaults'}</span>
              </button>
            </div>

            {priceSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'प्राइजिंग सफलतापूर्वक अपडेट हो गई है और वेबसाइट पर लाइव है!' : 'Pricing saved & synced live across the entire website!'}</span>
              </div>
            )}

            <form onSubmit={handleSavePricing} className="space-y-6">
              
              {/* 1. 15 Reels Package Price */}
              <div className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] border border-[#3C147A]/15 dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-[#17092F] dark:text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38]" />
                    <span>{language === 'hi' ? '1. 15 रील्स पैकेज की कीमत (₹)' : '1. 15 Reels Package Price (₹)'}</span>
                  </label>
                  <span className="text-[11px] font-mono font-bold text-[#685984] dark:text-slate-400">
                    Per Reel: ₹{Math.round(priceForm.reelsPackagePrice / 15)}
                  </span>
                </div>
                <input
                  type="number"
                  required
                  min={1000}
                  step={500}
                  value={priceForm.reelsPackagePrice}
                  onChange={(e) => setPriceForm({ ...priceForm, reelsPackagePrice: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#3C147A]/20 dark:border-white/20 text-sm font-mono font-bold text-[#17092F] dark:text-white focus:outline-none"
                />
                <p className="text-[11px] text-[#685984] dark:text-slate-400">
                  {language === 'hi' ? 'पूरी वीडियो प्रोडक्शन, AI हुक्स, और एडिटिंग। वर्तमान डिफ़ॉल्ट: ₹6,000' : 'Full 15 Reels production with AI hooks and retention editing. Default: ₹6,000'}
                </p>
              </div>

              {/* 2. 15 Reels Advertisement Package & Splits */}
              <div className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] border border-[#3C147A]/15 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-[#17092F] dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>{language === 'hi' ? '2. 15 रील्स ऐड कैंपेन पैकेज कुल कीमत (₹)' : '2. 15 Reels Ad Package Total Price (₹)'}</span>
                  </label>
                  <span className="badge-lime-pill text-[10px] py-0.5 px-2">RECOMMENDED</span>
                </div>

                <input
                  type="number"
                  required
                  min={1000}
                  step={500}
                  value={priceForm.adsPackagePrice}
                  onChange={(e) => {
                    const total = Number(e.target.value);
                    const half = Math.round(total / 2);
                    setPriceForm({ 
                      ...priceForm, 
                      adsPackagePrice: total,
                      adsServiceFee: half,
                      adsMetaSpend: total - half
                    });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#3C147A]/20 dark:border-white/20 text-sm font-mono font-bold text-[#17092F] dark:text-white focus:outline-none"
                />

                {/* Transparent Split Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-[#685984] dark:text-slate-400 mb-1">
                      {language === 'hi' ? '• एजेंसी सर्विस व मैनेजमेंट फीस (₹)' : '• Agency Service Fee (₹)'}
                    </label>
                    <input
                      type="number"
                      required
                      value={priceForm.adsServiceFee}
                      onChange={(e) => setPriceForm({ ...priceForm, adsServiceFee: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#685984] dark:text-slate-400 mb-1">
                      {language === 'hi' ? '• डायरेक्ट मेटा ऐड बजट (₹)' : '• Direct Meta Ad Budget (₹)'}
                    </label>
                    <input
                      type="number"
                      required
                      value={priceForm.adsMetaSpend}
                      onChange={(e) => setPriceForm({ ...priceForm, adsMetaSpend: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-[#685984] dark:text-slate-400">
                  {language === 'hi' 
                    ? `15 रील्स के लिए प्रति रील ऐड बजट: ~₹${Math.round(priceForm.adsMetaSpend / 15)}/रील` 
                    : `Average ad budget per reel: ~₹${Math.round(priceForm.adsMetaSpend / 15)} across 15 reels.`}
                </p>
              </div>

              {/* 3. Starter Ad Package Price */}
              <div className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] border border-[#3C147A]/15 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-[#17092F] dark:text-white">
                    {language === 'hi' ? '3. स्टार्टर 30-डे ऐड पैकेज (₹)' : '3. Starter 30-Day Ad Package (₹)'}
                  </label>
                  <span className="font-mono text-xs text-[#685984] dark:text-slate-400">
                    Split: ₹{priceForm.starterServiceFee} / ₹{priceForm.starterMetaSpend}
                  </span>
                </div>
                <input
                  type="number"
                  required
                  min={1000}
                  step={500}
                  value={priceForm.starterPrice}
                  onChange={(e) => {
                    const total = Number(e.target.value);
                    const half = Math.round(total / 2);
                    setPriceForm({
                      ...priceForm,
                      starterPrice: total,
                      starterServiceFee: half,
                      starterMetaSpend: total - half
                    });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#3C147A]/20 dark:border-white/20 text-sm font-mono font-bold text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-purple dark:btn-lime w-full py-3.5 px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>{language === 'hi' ? 'सेव करें और लाइव प्राइजिंग सिंक करें' : 'Save & Sync Live Pricing'}</span>
              </button>
            </form>
          </div>

          {/* Right Preview Card: Live Public Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-white p-6 rounded-[32px]">
              <span className="text-[11px] font-bold text-[#685984] dark:text-slate-400 uppercase block mb-3">
                {language === 'hi' ? 'लाइव वेबसाइट प्रिव्यू' : 'Live Website View Preview'}
              </span>

              {/* Preview 15 Reels */}
              <div className="card-purple p-5 rounded-2xl mb-4 text-white">
                <span className="text-[10px] text-[#D8FC38] font-bold block mb-1">RECOMMENDED FOR REEL PACKAGE</span>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black font-mono">₹{priceForm.reelsPackagePrice.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-purple-200">/ 15 Reels Batch</span>
                </div>
                <p className="text-xs text-purple-100">
                  ~₹{Math.round(priceForm.reelsPackagePrice / 15)} / strategic retention reel
                </p>
              </div>

              {/* Preview 15 Reels Ads */}
              <div className="card-purple p-5 rounded-2xl text-white">
                <span className="text-[10px] text-[#D8FC38] font-bold block mb-1">RECOMMENDED FOR ADVERTISEMENT PACKAGE</span>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black font-mono">₹{priceForm.adsPackagePrice.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-purple-200">/ 15 Reels Campaign</span>
                </div>
                <div className="text-[11px] font-mono text-purple-200 space-y-0.5 mt-2 pt-2 border-t border-white/20">
                  <div className="flex justify-between">
                    <span>Agency Service:</span>
                    <span className="text-[#D8FC38]">₹{priceForm.adsServiceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct Meta Spend:</span>
                    <span className="text-[#D8FC38]">₹{priceForm.adsMetaSpend.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE 3: REVENUE, TEAM SALARIES & NET PROFIT CALCULATOR   */}
      {/* ========================================================== */}
      {activeAdminTab === 'finance' && (
        <div className="space-y-8">
          
          {/* Big Master Profit & Revenue Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Gross Collections */}
            <div className="card-white p-5 rounded-2xl border-l-4 border-[#3C147A] dark:border-[#D8FC38]">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'सकल रेवेन्यू (Gross Revenue)' : 'Gross Client Collections'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#17092F] dark:text-white font-mono">
                ₹{grossRevenue.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-1">
                {clients.length} Active Accounts
              </span>
            </div>

            {/* Card 2: Direct Meta Ad Spend Pass-Through */}
            <div className="card-white p-5 rounded-2xl border-l-4 border-blue-500">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'मेटा ऐड बजट (Meta Ad Spend)' : 'Direct Meta Ad Spend'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-mono">
                ₹{totalDirectMetaAdSpend.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-[#685984] dark:text-slate-400 block mt-1">
                100% Client Card Pass-Through
              </span>
            </div>

            {/* Card 3: Team Salaries Total */}
            <div className="card-white p-5 rounded-2xl border-l-4 border-amber-500">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 font-bold block mb-1">
                {language === 'hi' ? 'टीम सैलरीज (Team Payroll)' : 'Team Salaries Total'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">
                ₹{totalTeamSalaries.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-1">
                Paid: ₹{salariesPaid.toLocaleString('en-IN')} • Due: ₹{salariesPending.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Card 4: Net Agency Profit & Margin */}
            <div className="card-white p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20">
              <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold block mb-1">
                {language === 'hi' ? 'शुद्ध एजेंसी मुनाफा (Net Profit)' : 'Net Agency Profit'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400 font-mono">
                ₹{netAgencyProfit.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block mt-1">
                Margin: {netProfitMargin}% (Net After Salaries & Meta)
              </span>
            </div>

          </div>

          {/* Team Salaries & Contractor Payroll Management */}
          <div className="card-white p-6 sm:p-8 rounded-[32px] shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#3C147A]/15 dark:border-white/10 mb-6">
              <div>
                <span className="badge-lime-pill text-[10px] mb-1">
                  PAYROLL & CONTRACTORS
                </span>
                <h3 className="text-xl font-black text-[#17092F] dark:text-white">
                  {language === 'hi' ? 'टीम मेंबर्स व सैलरी वितरण' : 'Team Member Salaries & Payout Schedule'}
                </h3>
                <p className="text-xs text-[#685984] dark:text-slate-400 mt-1">
                  {language === 'hi' 
                    ? 'एडिटर, मीडिया बायर और स्क्रिप्टराइटर की सैलरी ट्रैक करें। 1-क्लिक में पेड/पेंडिंग मार्क करें।' 
                    : 'Manage monthly contractor salaries for Video Editor, Media Buyer, and Scriptwriter.'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-[#685984] dark:text-slate-400">
                    {language === 'hi' ? 'टूल्स खर्च (₹):' : 'Tools Expense:'}
                  </label>
                  <input
                    type="number"
                    value={toolsExpense}
                    onChange={(e) => setToolsExpense(Number(e.target.value))}
                    className="w-24 px-3 py-1.5 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>

                <button
                  onClick={() => setIsAddTeamModalOpen(true)}
                  className="btn-purple dark:btn-lime py-2 px-4 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{language === 'hi' ? 'टीम मेंबर जोड़ें' : 'Add Team Member'}</span>
                </button>
              </div>
            </div>

            {/* Salaries Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#3C147A]/10 dark:border-white/10 text-[#685984] dark:text-slate-400 uppercase text-[10px]">
                    <th className="py-3 px-4">Member Name</th>
                    <th className="py-3 px-4">Role & Specialization</th>
                    <th className="py-3 px-4">Monthly Salary</th>
                    <th className="py-3 px-4">Payout Cycle</th>
                    <th className="py-3 px-4">Payout Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3C147A]/10 dark:divide-white/10">
                  {salaries.map((s) => (
                    <tr key={s.id} className="hover:bg-[#F5F1FD]/50 dark:hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-[#17092F] dark:text-white block">{s.name}</span>
                        <span className="text-[11px] text-[#685984] dark:text-slate-400">{s.phone}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-[#17092F] dark:text-slate-200">{s.role}</span>
                        {s.notes && (
                          <span className="text-[10px] text-[#685984] dark:text-slate-400 block">{s.notes}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-black text-sm text-[#17092F] dark:text-white">
                        ₹{s.salaryAmount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4 text-[#685984] dark:text-slate-300 font-medium">
                        {s.payCycle}
                      </td>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleToggleSalaryStatus(s.id)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                            s.payoutStatus === 'Paid'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {s.payoutStatus === 'Paid' ? '✓ PAID (भुगतान हो गया)' : '⏳ PENDING (बाकी है)'}
                        </button>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDeleteTeamMember(s.id)}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                          title="Remove Member"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE 4: 24h LIVE CLIENT TELEMETRY & SYNC                 */}
      {/* ========================================================== */}
      {activeAdminTab === 'sync' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 card-white p-6 sm:p-8 rounded-[32px]">
            <div className="flex items-center justify-between pb-4 border-b border-[#3C147A]/15 dark:border-white/10 mb-6">
              <div>
                <span className="badge-lime-pill text-[10px] mb-1">
                  LIVE PORTAL BROADCASTER
                </span>
                <h3 className="text-xl font-black text-[#17092F] dark:text-white">
                  {language === 'hi' ? '24h लाइव टेलीमेट्री सिंक' : '24h Live Meta Telemetry Push'}
                </h3>
              </div>
            </div>

            {telemetrySuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'टेलीमेट्री डेटा लाइव कस्टमर पोर्टल पर ब्रॉडकास्ट हो गया है!' : 'Live telemetry successfully pushed to Customer Portal!'}</span>
              </div>
            )}

            <form onSubmit={handleSave24hTelemetry} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={liveTelemetry.ownerName || ''}
                    onChange={(e) => setLiveTelemetry({ ...liveTelemetry, ownerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={liveTelemetry.businessName || ''}
                    onChange={(e) => setLiveTelemetry({ ...liveTelemetry, businessName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>
              </div>

              {/* Increments: Reels & Ads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Reels delivered counter */}
                <div className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] border border-[#3C147A]/15 dark:border-white/10">
                  <span className="text-[11px] font-bold text-[#685984] dark:text-slate-400 block mb-2">
                    {language === 'hi' ? 'रील्स डिलीवर (Delivered)' : 'Reels Delivered Counter'}
                  </span>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleUpdateReelCount(-1)}
                      className="w-9 h-9 rounded-xl bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-white font-black text-base flex items-center justify-center cursor-pointer"
                    >
                      -1
                    </button>
                    <span className="font-mono text-2xl font-black text-[#17092F] dark:text-white">
                      {liveTelemetry.reelsDelivered} / 15
                    </span>
                    <button
                      type="button"
                      onClick={() => handleUpdateReelCount(1)}
                      className="w-9 h-9 rounded-xl bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] font-black text-base flex items-center justify-center cursor-pointer"
                    >
                      +1
                    </button>
                  </div>
                </div>

                {/* Ads active counter */}
                <div className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.03] border border-[#3C147A]/15 dark:border-white/10">
                  <span className="text-[11px] font-bold text-[#685984] dark:text-slate-400 block mb-2">
                    {language === 'hi' ? 'सक्रिय ऐड कैंपेन (Active Ads)' : 'Active Ad Campaigns'}
                  </span>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleUpdateAdsCount(-1)}
                      className="w-9 h-9 rounded-xl bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-white font-black text-base flex items-center justify-center cursor-pointer"
                    >
                      -1
                    </button>
                    <span className="font-mono text-2xl font-black text-blue-600 dark:text-blue-400">
                      {liveTelemetry.adsActive} / 15
                    </span>
                    <button
                      type="button"
                      onClick={() => handleUpdateAdsCount(1)}
                      className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-base flex items-center justify-center cursor-pointer"
                    >
                      +1
                    </button>
                  </div>
                </div>

              </div>

              {/* Meta Spend & Leads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Meta Budget Spent (₹)
                  </label>
                  <input
                    type="number"
                    value={liveTelemetry.metaBudgetSpent || 0}
                    onChange={(e) => setLiveTelemetry({ ...liveTelemetry, metaBudgetSpent: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Leads Generated Count
                  </label>
                  <input
                    type="number"
                    value={liveTelemetry.leadsGenerated || 0}
                    onChange={(e) => setLiveTelemetry({ ...liveTelemetry, leadsGenerated: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>
              </div>

              {/* Daily Telemetry Note */}
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  {language === 'hi' ? 'आज का 24-घंटे का ऑप्टिमाइजेशन नोट (क्लाइंट पोर्टल पर दिखेगा)' : 'Today\'s 24h Optimization Note (Visible on Client Portal)'}
                </label>
                <textarea
                  rows={3}
                  value={liveTelemetry.last24hUpdate?.note || ''}
                  onChange={(e) => setLiveTelemetry({
                    ...liveTelemetry,
                    last24hUpdate: {
                      ...liveTelemetry.last24hUpdate,
                      note: e.target.value
                    }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              {/* Daily Metric Highlight */}
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Highlight Banner (e.g. +11 New WhatsApp Inquiries in last 24h)
                </label>
                <input
                  type="text"
                  value={liveTelemetry.last24hUpdate?.metricHighlight || ''}
                  onChange={(e) => setLiveTelemetry({
                    ...liveTelemetry,
                    last24hUpdate: {
                      ...liveTelemetry.last24hUpdate,
                      metricHighlight: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="btn-purple dark:btn-lime w-full py-3.5 px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>{language === 'hi' ? 'कस्टमर पोर्टल पर लाइव पुश करें' : 'Push Telemetry To Live Portal'}</span>
              </button>
            </form>
          </div>

          {/* Right: Quick View of Customer Portal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-white p-6 rounded-[32px]">
              <span className="text-[11px] font-bold text-[#685984] dark:text-slate-400 uppercase block mb-3">
                Live Customer Portal Preview
              </span>

              <div className="p-4 rounded-2xl bg-[#EDE5FA]/50 dark:bg-white/[0.04] border border-[#3C147A]/15 dark:border-white/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-sm text-[#17092F] dark:text-white">
                    {liveTelemetry.businessName}
                  </span>
                  <span className="badge-lime-pill text-[10px] py-0.5 px-2 font-mono">
                    {liveTelemetry.status}
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#685984] dark:text-slate-400">Reels Delivered:</span>
                    <span className="font-bold text-[#3C147A] dark:text-[#D8FC38] font-mono">{liveTelemetry.reelsDelivered} / 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#685984] dark:text-slate-400">Ad Campaigns Active:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{liveTelemetry.adsActive} Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#685984] dark:text-slate-400">Meta Ad Spend:</span>
                    <span className="font-bold text-[#17092F] dark:text-white font-mono">₹{liveTelemetry.metaBudgetSpent} / ₹3,000</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 text-white text-[11px] space-y-1">
                  <span className="text-[#D8FC38] font-bold block">{liveTelemetry.last24hUpdate?.metricHighlight}</span>
                  <p className="text-slate-300 text-[10px] leading-relaxed italic">
                    "{liveTelemetry.last24hUpdate?.note}"
                  </p>
                </div>

                <button
                  onClick={() => setCurrentPage('customer')}
                  className="w-full py-2 px-4 rounded-xl bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] text-xs font-bold text-center block cursor-pointer"
                >
                  {language === 'hi' ? 'क्लाइंट पोर्टल (#customer) खोलें' : 'Open Customer Portal (#customer)'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE 5: MEDIA REELS & REVIEWS MANAGEMENT                  */}
      {/* ========================================================== */}
      {activeAdminTab === 'media' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Add Reel Form */}
          <div className="lg:col-span-7 card-white p-6 sm:p-8 rounded-[32px]">
            <div className="mb-6">
              <span className="badge-lime-pill text-[10px] mb-2">
                SHOWCASE REELS
              </span>
              <h3 className="text-xl font-bold text-[#17092F] dark:text-white">
                {language === 'hi' ? 'नई रील वीडियो जोड़ें' : 'Add Showcase Reel Video'}
              </h3>
            </div>

            {reelSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'रील सफलतापूर्वक शोकेस में जोड़ दी गई है!' : 'Reel successfully added!'}</span>
              </div>
            )}

            <form onSubmit={handleAddReel} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Video Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Car Dealership Test Drive Walkaround"
                  value={newReel.title}
                  onChange={(e) => setNewReel({ ...newReel, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Handle
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@apex.motors"
                    value={newReel.handle}
                    onChange={(e) => setNewReel({ ...newReel, handle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={newReel.categoryLabel}
                    onChange={(e) => setNewReel({ ...newReel, categoryLabel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  3-Second Hook Text *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Wait! Don't buy a used car in Jaipur until you check this..."
                  value={newReel.hookText}
                  onChange={(e) => setNewReel({ ...newReel, hookText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Video MP4 URL
                </label>
                <input
                  type="url"
                  value={newReel.videoUrl}
                  onChange={(e) => setNewReel({ ...newReel, videoUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-purple dark:btn-lime w-full py-3.5 px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>{language === 'hi' ? 'रील शोकेस में जोड़ें' : 'Publish Reel to Showcase'}</span>
              </button>
            </form>
          </div>

          {/* Add Client Review Form */}
          <div className="lg:col-span-5 card-white p-6 sm:p-8 rounded-[32px]">
            <div className="mb-6">
              <span className="badge-lime-pill text-[10px] mb-2">
                TESTIMONIALS
              </span>
              <h3 className="text-xl font-bold text-[#17092F] dark:text-white">
                {language === 'hi' ? 'नया क्लाइंट रिव्यू जोड़ें' : 'Add Client Review'}
              </h3>
            </div>

            {reviewSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Review added successfully!</span>
              </div>
            )}

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Client Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Apex Luxury Motors"
                  value={newReview.business}
                  onChange={(e) => setNewReview({ ...newReview, business: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Client Review / Feedback Quote *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Within 10 days of launching the 15 Reels campaign, we booked 34 genuine test drives..."
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F1FD] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-purple dark:btn-lime w-full py-3.5 px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Star className="w-4 h-4" />
                <span>{language === 'hi' ? 'रिव्यू सेव करें' : 'Publish Client Review'}</span>
              </button>
            </form>
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* MODAL: ADD / EDIT CLIENT CRM MODAL                          */}
      {/* ========================================================== */}
      {isAddClientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="card-white w-full max-w-2xl p-6 sm:p-8 rounded-[32px] shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsAddClientModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-[#17092F] dark:text-white mb-2">
              {editingClient ? (language === 'hi' ? 'क्लाइंट डेटा एडिट करें' : 'Edit Client Profile') : (language === 'hi' ? 'नया क्लाइंट जोड़ें' : 'Add New Client Profile')}
            </h3>
            <p className="text-xs text-[#685984] dark:text-slate-400 mb-6">
              {language === 'hi' ? 'क्लाइंट की सारी इनफार्मेशन, पेमेंट, स्वभाव, और रील्स प्रोग्रेस सेव करें।' : 'Enter complete customer profile, billing, temperament notes, and reels quota.'}
            </p>

            <form onSubmit={handleSaveClient} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientForm.name || ''}
                    onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientForm.businessName || ''}
                    onChange={(e) => setClientForm({ ...clientForm, businessName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientForm.phone || ''}
                    onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={clientForm.city || ''}
                    onChange={(e) => setClientForm({ ...clientForm, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Industry / Vertical
                  </label>
                  <input
                    type="text"
                    value={clientForm.category || ''}
                    onChange={(e) => setClientForm({ ...clientForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>
              </div>

              {/* Package & VIP Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Package Subscribed
                  </label>
                  <input
                    type="text"
                    value={clientForm.packageSubscribed || ''}
                    onChange={(e) => setClientForm({ ...clientForm, packageSubscribed: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    VIP Client Status
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={!!clientForm.isVip}
                      onChange={(e) => setClientForm({ ...clientForm, isVip: e.target.checked })}
                      className="accent-amber-500 w-4 h-4"
                    />
                    <span className="font-bold text-amber-700 dark:text-amber-300">⭐ Mark as VIP</span>
                  </label>
                </div>
              </div>

              {/* Billing: Total Billed, Amount Paid, Payment Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Total Billed (₹)
                  </label>
                  <input
                    type="number"
                    value={clientForm.totalBilled || 6000}
                    onChange={(e) => setClientForm({ ...clientForm, totalBilled: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Amount Paid (₹)
                  </label>
                  <input
                    type="number"
                    value={clientForm.amountPaid || 6000}
                    onChange={(e) => {
                      const paid = Number(e.target.value);
                      const total = Number(clientForm.totalBilled || 6000);
                      const status = paid >= total ? 'Paid' : paid > 0 ? 'Partial' : 'Due';
                      setClientForm({ 
                        ...clientForm, 
                        amountPaid: paid, 
                        amountDue: total - paid,
                        paymentStatus: status as any
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Payment Mode
                  </label>
                  <select
                    value={clientForm.paymentMode || 'UPI'}
                    onChange={(e) => setClientForm({ ...clientForm, paymentMode: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  >
                    <option value="UPI">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="Bank Transfer">Bank Transfer (NEFT / IMPS)</option>
                    <option value="Cash">Cash Handover</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
              </div>

              {/* Service Delivery Progress */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Reels Delivered (0-15)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={15}
                    value={clientForm.reelsDelivered || 0}
                    onChange={(e) => setClientForm({ ...clientForm, reelsDelivered: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Ads Active (0-15)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={15}
                    value={clientForm.adsActive || 0}
                    onChange={(e) => setClientForm({ ...clientForm, adsActive: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Service Status
                  </label>
                  <select
                    value={clientForm.serviceStatus || 'Active & Optimizing'}
                    onChange={(e) => setClientForm({ ...clientForm, serviceStatus: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  >
                    <option value="Active & Optimizing">Active & Optimizing</option>
                    <option value="In Production">In Production</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending Renewal">Pending Renewal</option>
                  </select>
                </div>
              </div>

              {/* Customer Temperament & Behavior Notes */}
              <div>
                <label className="block text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                  {language === 'hi' ? 'क्लाइंट का स्वभाव व आवश्यकताएं (Temperament / Nature)' : 'Customer Temperament & Behavior Notes'}
                </label>
                <textarea
                  rows={2}
                  placeholder={language === 'hi' ? 'जैसे: बहुत सपोर्टिव क्लाइंट है, वीकेंड वॉक-इन्स पर फोकस है, डेली कॉल पसंद नहीं करता, हर सोमवार को रिपोर्ट चाहिए...' : 'e.g. Very supportive, demands weekly reports on Monday, prefers high energy video tone...'}
                  value={clientForm.clientTemperament || ''}
                  onChange={(e) => setClientForm({ ...clientForm, clientTemperament: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-amber-500/30 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              {/* Extra Campaign Notes */}
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Campaign / Creative Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Reel #4 driving highest conversions at ₹31/lead."
                  value={clientForm.notes || ''}
                  onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddClientModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-purple dark:btn-lime px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  {editingClient ? 'Update Client Record' : 'Save Client to Database'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* MODAL: ADD TEAM MEMBER SALARY MODAL                        */}
      {/* ========================================================== */}
      {isAddTeamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="card-white w-full max-w-lg p-6 sm:p-8 rounded-[32px] shadow-2xl relative">
            <button
              onClick={() => setIsAddTeamModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-[#17092F] dark:text-white mb-2">
              {language === 'hi' ? 'नया टीम मेंबर व सैलरी जोड़ें' : 'Add Team Member & Salary'}
            </h3>
            <p className="text-xs text-[#685984] dark:text-slate-400 mb-6">
              {language === 'hi' ? 'एडिटर, मीडिया बायर, या स्क्रिप्टराइटर की सैलरी व पेआउट साइकिल सेट करें।' : 'Set monthly contractor salary, role, and payout schedule.'}
            </p>

            <form onSubmit={handleAddTeamMember} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Member Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={teamForm.name || ''}
                  onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Role / Specialization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Video Editor (Kinetic Cuts & Subtitles)"
                  value={teamForm.role || ''}
                  onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Monthly Salary (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    step={500}
                    value={teamForm.salaryAmount || 10000}
                    onChange={(e) => setTeamForm({ ...teamForm, salaryAmount: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs font-mono font-bold text-[#17092F] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                    Payout Status
                  </label>
                  <select
                    value={teamForm.payoutStatus || 'Pending'}
                    onChange={(e) => setTeamForm({ ...teamForm, payoutStatus: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                  >
                    <option value="Pending">⏳ Pending (बाकी है)</option>
                    <option value="Paid">✓ Paid (भुगतान हो गया)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1">
                  Payout Cycle / Date
                </label>
                <input
                  type="text"
                  placeholder="Monthly (1st to 5th of month)"
                  value={teamForm.payCycle || ''}
                  onChange={(e) => setTeamForm({ ...teamForm, payCycle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F1FD] dark:bg-white/10 border border-[#3C147A]/15 dark:border-white/15 text-xs text-[#17092F] dark:text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddTeamModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-purple dark:btn-lime px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Save Team Member
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
