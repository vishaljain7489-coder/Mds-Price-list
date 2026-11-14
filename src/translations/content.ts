export type Language = 'en' | 'hi';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Overview",
      packages: "Packages",
      order: "Book Campaign",
      portfolio: "Portfolio Hub",
      adInfo: "Boost vs Ads Manager",
      process: "How We Work",
      about: "About Us",
      faq: "FAQ",
      portal: "Admin Portal",
      contactWa: "Chat WhatsApp",
      searchPlaceholder: "Search services, packages, hooks...",
      quickPackages: "Quick Packages",
      exploreAll: "Explore Everything In One Tap",
    },
    search: {
      title: "What service or campaign are you looking for?",
      trendingHooksTitle: "Trending Search Hooks (Click to Explore):",
      hooks: [
        { label: "₹3,000 Starter Ad Package", page: "packages", query: "starter" },
        { label: "₹5,000 Performance Lead Gen Plan", page: "packages", query: "performance" },
        { label: "Dedicated 15 Reels Shoot Package", page: "packages", query: "reels" },
        { label: "Boost Post vs Meta Ads Manager Difference", page: "ad-info", query: "difference" },
        { label: "Car Dealership Leads & Test Drives", page: "order", query: "car" },
        { label: "Food / Restaurant Footfall & Orders", page: "order", query: "food" },
        { label: "Retail Store Walk-in Inquiries", page: "order", query: "retail" },
        { label: "15 Reels vs 3 High-Impact Videos", page: "packages", query: "options" },
      ],
      noResults: "No matching package found. Try searching for 'ads', 'reels', or 'leads'.",
    },
    hero: {
      badge: "META PERFORMANCE MARKETING FOR NEXT-GEN BUSINESSES",
      keyAdvantage: "KEY ADVANTAGE: STRATEGIC ACQUISITION",
      headlinePrefix: "Your Videos Deserve",
      headlineHighlight: "More Than Just Views.",
      supporting: "We help ambitious local businesses, car dealerships, restaurants, clinics, and retail stores turn Facebook & Instagram ads into a predictable customer acquisition machine.",
      exploreBtn: "Explore Growth Plans",
      calcBtn: "Book Campaign Now",
      pills: [
        { top: "100% OWNED", bottom: "Your Ad Account" },
        { top: "ZERO MARKUP", bottom: "Direct Meta Spend" },
        { top: "WEEKLY", bottom: "Real Telemetry" },
      ],
      visualTitle: "Live Meta Campaign Performance",
      activeBadge: "● ACTIVE",
      cprLabel: "Cost Per Result (CPR)",
      leadsLabel: "High-Intent Leads",
      thisMo: "This Month",
      trajectoryLabel: "Conversion Trajectory",
      roasBadge: "ROAS 4.6x",
      hookStep: "Hook Test",
      cboStep: "CBO Scale",
      retargetStep: "Retargeting",
      finalRoas: "4.6x ROAS",
      targetLabel: "Target: Pre-Qualified Inquiries",
      realData: "Real Meta Telemetry",
      reelBadge: "9:16 Video Hook",
      reelSub: "4.8% CTR • Scroll Stopper",
    },
    homeCards: {
      badge: "QUICK NAVIGATION",
      title: "Explore Everything In One Tap",
      c1Badge: "₹3,000 & ₹5,000",
      c1Title: "Advertising Packages",
      c1Desc: "Starter Ad Plan (₹3,000), Performance Lead Gen (₹5,000) & Dedicated 15 Reels Package (₹5,000).",
      c1Link: "View Transparent Plans",
      c2Badge: "INSTANT ONBOARDING",
      c2Title: "Book Campaign Form",
      c2Desc: "Select your business category (Retail, Food, Car Dealership, Gym) and route leads directly to WhatsApp.",
      c2Link: "Configure On WhatsApp",
      c3Badge: "WORK & PROOF",
      c3Title: "Digital Portfolio Hub",
      c3Desc: "Client reviews, top-rated reels, our systems, who we are, and real growth deliverables in one pitch.",
      c3Link: "Open Client Pitch Hub",
    },
    intro: {
      badge: "WHY YOUR BUSINESS NEEDS A STRATEGY",
      heading: "Stop Boosting Randomly.",
      headingHighlight: "Start Advertising Strategically.",
      supporting: "Advertising is more than putting money behind a post. It requires the right audience, creative strategy, campaign objectives and continuous optimization.",
      c1Highlight: "LASER TARGETING",
      c1Title: "Reach The Right Audience",
      c1Desc: "Laser-focused custom, lookalike, and interest-layered geo-targeting. Stop burning ad budgets on users who will never purchase your services.",
      c2Highlight: "HIGH CTR HOOKS",
      c2Title: "Test Better Creatives",
      c2Desc: "Engineered hooks, compelling scroll-stoppers, and problem-solution video scripts specifically adapted for high-converting Meta formats.",
      c3Highlight: "REVENUE FOCUSED",
      c3Title: "Optimize For Business Goals",
      c3Desc: "We don't optimize for vanity likes or clicks. We train Meta's machine learning for WhatsApp leads, phone enquiries, and booked revenue.",
      footerLink: "Enterprise Ads Manager",
    },
    stats: {
      badge: "100% HONEST & TRANSPARENT SYSTEM",
      heading: "Real, Authentic Numbers Built With Full Integrity",
      verifiedBadge: "Verified Live Data",
      footNote: "Starting fresh with complete transparency — zero fake metrics or inflated numbers",
      items: [
        { label: "Active Business Verticals", value: "3", desc: "Retail Stores, Restaurants & Car Dealerships" },
        { label: "Ad Campaigns Built", value: "2", desc: "Focused initial campaigns running live tests" },
        { label: "Managed Meta Spend", value: "₹500", desc: "Initial live ad test budget managed transparently" },
        { label: "Average Lead Cost Cut", value: "0", desc: "Setting baseline benchmarks with fresh honest data" },
      ]
    },
    whyUs: {
      badge: "THE AGENCY ADVANTAGE",
      heading: "Your Advertising Partner,",
      headingHighlight: "Not Just Another Service Provider.",
      supporting: "We treat your ad spend with the same rigor and unit economic discipline as our own business capital.",
      standardTag: "Standard In All Plans",
      items: [
        { title: "Personalized Strategy", desc: "No boilerplate templates. Every campaign is engineered specifically for your local geography and margin profile." },
        { title: "Transparent Budget Breakdown", desc: "Your ad budget is charged straight to Meta on your card. We never take hidden markups or obscure your real spend." },
        { title: "Creative Hook Testing", desc: "We don't just run 1 static photo. We guide and test multiple video hooks to discover what makes your audience stop scrolling." },
        { title: "Continuous Campaign Monitoring", desc: "We monitor fatigue, CPM spikes, and lead response daily so your ad spend is never running on autopilot." },
        { title: "Regular Transparent Reporting", desc: "No convoluted 50-page jargon PDFs. You receive concise weekly metrics showing spent rupees, leads, and cost per result." },
        { title: "Direct WhatsApp Communication", desc: "No clunky ticketing portals. You have direct access to our performance team on a dedicated WhatsApp group." }
      ]
    },
    packages: {
      titleBadge: "TRANSPARENT AD & CREATIVE PACKAGES",
      heading: "Simple, Honest Packages Built For Local Growth.",
      subheading: "Reels production, Meta ad campaigns, top city viral page collaborations, and on-camera models. Choose individual services or bundle them seamlessly.",
      categoryTabs: {
        all: "All Packages",
        reels: "🎬 15 Reels Package",
        ads: "🚀 Advertisement Packages",
        collab: "🌟 City Top 3 Pages Collab",
        models: "👥 10 Models Shoot",
        website: "💻 Website & Automation",
      },
      starter: {
        tag: "STARTER ADS",
        duration: "30 Days Service",
        name: "STARTER AD PACKAGE",
        price: "₹3,000",
        period: "/month",
        desc: "Best budget-friendly plan for local businesses starting with focused Meta ads testing and inquiries.",
        splitService: "30-Day Agency Service: ₹1,500",
        splitMeta: "Meta Direct Ad Budget: ₹1,500",
        choiceTitle: "Ad Budget Distribution Options:",
        choiceA: "Option A: 15 Reels Testing (~₹100/reel ad budget)",
        choiceB: "Option B: Top 3 High-Impact Videos (~₹500/video aggressive budget)",
        features: [
          "Targeted local radius pinpointing (5-10km)",
          "Weekly performance review on WhatsApp",
          "Ad campaign structure & bid monitoring",
          "Client owns 100% of pixel and account data",
        ],
        cta: "Select ₹3,000 Package",
      },
      performance: {
        popularBadge: "★ RECOMMENDED FOR ADVERTISEMENT PACKAGE",
        tag: "15 REELS AD CAMPAIGNS",
        duration: "15 Reels Campaign",
        name: "15 REELS ADVERTISEMENT PACKAGE",
        price: "₹6,000",
        period: "/ 15 Reels Campaign",
        desc: "Dedicated Meta ad campaigns across your 15 Reels (~₹200/reel ad budget) to maximize local store walk-ins and direct WhatsApp buyers.",
        splitSetup: "Ad Setup & Campaign Structure: ₹3,000",
        splitTesting: "15 Reels Angle Testing: Included",
        splitLeadSpend: "Direct Meta Ad Spend: ₹3,000 (~₹200/Reel)",
        tailoredTitle: "15 Reels Tailored Delivery:",
        tailoredDesc: "• 15 High-converting ad campaigns (1 per reel)\n• Laser 5-10km radius hyper-local geo-targeting\n• Verified WhatsApp leads & store footfall tracking",
        features: [
          "15 Individual ad sets promoting 15 high-converting Reels",
          "Direct WhatsApp lead routing (Instant buyer connection)",
          "Competitor research & hyper-local radius targeting",
          "Retargeting of video viewers & engaged profile visitors",
          "Transparent weekly spend & WhatsApp inquiry reports",
        ],
        cta: "Select ₹6,000 Advertisement Plan",
      },
      reels: {
        topBadge: "★ RECOMMENDED FOR REEL PACKAGE",
        tag: "15 REELS PACKAGE (SEPARATE)",
        duration: "Full Production",
        name: "15 HIGH-IMPACT REELS PACKAGE",
        price: "₹6,000",
        period: "/batch (15 Reels)",
        desc: "Complete video production with viral AI hook scripting, cinematic shooting guidance, and retention editing.",
        highlightBox: "15 High-Retention Strategic Reels (Full Production)",
        features: [
          "15 High-Retention Strategic Reels (AI viral hooks)",
          "3-Second Pattern Interrupt hooks designed for Meta feeds",
          "Dynamic kinetic subtitling & motion sound cues",
          "Direct Response copywriting tailored for high CTR",
          "Delivered in ready-to-run 9:16 vertical format",
          "Can be combined with the ₹6,000 Advertisement Package",
        ],
        cta: "Book 15 Reels Package (₹6,000)",
      },
      collab: {
        tag: "VIRAL REACH",
        badge: "EXCLUSIVE LOCAL TIE-UPS",
        duration: "City-Wide Buzz",
        name: "CITY TOP 3 VIRAL PAGES COLLAB",
        price: "Custom",
        period: "/collab campaign",
        desc: "Don't waste time chasing page admins. We have direct tie-ups with the Top 3 viral Instagram city pages for massive local exposure.",
        highlightBox: "Direct Partnership With Top 3 Verified City Pages",
        features: [
          "Joint Collaborative Post with verified city pages",
          "Hyper-local audience reach (100K to 500K+ local followers)",
          "Story shoutouts with direct WhatsApp & location swipe-ups",
          "Guaranteed local social proof & instant brand credibility",
          "Zero hassle of negotiations or admin chasing",
        ],
        cta: "Inquire For City Pages Collab",
      },
      models: {
        tag: "ON-CAMERA TALENT",
        badge: "10 VERIFIED MODELS",
        duration: "Male & Female Talent",
        name: "PROFESSIONAL MODEL SHOOT PACKAGE",
        price: "Flexible Add-on",
        period: "/shoot session",
        desc: "Camera-shy or need relatable actors? Choose from 10 verified male and female on-camera models to represent your brand.",
        highlightBox: "10 Verified Male & Female On-Screen Models",
        features: [
          "Curated roster of 10 expressive on-camera actors (Male & Female)",
          "Ideal for café tastings, clothing try-ons, salon demos & car reviews",
          "Professional dialogue delivery following high-converting scripts",
          "Includes usage rights for Meta ads & organic Instagram reels",
          "Eliminates business owner camera anxiety completely",
        ],
        cta: "Book Model Shoot Add-on",
      },
      website: {
        tag: "CONVERSION ASSET",
        badge: "HIGH-SPEED FUNNEL",
        duration: "One-Time Asset",
        name: "BUSINESS LANDING PAGE & AUTOMATION",
        price: "₹4,999",
        period: "/one-time",
        desc: "High-converting 1-page business website with direct WhatsApp lead capture, Google Map integration, and Meta Pixel setup.",
        highlightBox: "Fast, Mobile-First Website + Instant WhatsApp Leads",
        features: [
          "Lightning fast responsive landing page tailored for mobile users",
          "Direct 1-Click WhatsApp consultation buttons",
          "Google Maps, client reviews & photo gallery integration",
          "Meta Pixel & Conversion API tracking pre-installed",
          "Free hosting setup on high-speed global CDN",
        ],
        cta: "Order Website & Automation",
      },
      problemBox: {
        badge: "FREE PERSONALIZED CONSULTATION",
        title: "Tell Us Freely What Extra Help Your Business Needs!",
        subtitle: "Have a unique requirement, low footfall, or custom budget? Type your business challenge below and get free guidance directly from our founders on WhatsApp.",
        placeholder: "E.g., I run a unisex salon in Indore and want more haircut appointments on weekdays, budget is ₹4,000...",
        btnText: "Send My Requirement On WhatsApp",
        quickTags: ["Need More Footfall", "Low Ad Budget", "Need Shoot Help", "Influencer Collab", "Website Needed"]
      },
      disclaimerTitle: "Clarification & Flexibility:",
      disclaimerText: "All packages are modular. You can choose only Ad Management (₹3,000 or ₹5,000), only 15 Reels Production (₹6,000), or add City Pages Collab, Models, or Website according to your exact growth requirements."
    },
    order: {
      badge: "TRANSPARENT INTAKE & ORDER FORM",
      heading: "Select Your Package & Get Started On WhatsApp.",
      subheading: "Choose the Recommended Advertisement Package (₹6,000 for 15 Reels) and optionally add the separate 15 Reels Package (₹6,000). 100% transparent calculation.",
      step1Title: "1. Choose Advertisement Package:",
      starterOptTitle: "Ad Budget Distribution Option:",
      starterOptA: "Option A: Spread across 15 Reels (~₹100/reel budget)",
      starterOptB: "Option B: Top 3 High-Impact Videos (~₹500/video aggressive ads)",
      step2Badge: "SEPARATE CONTENT PACKAGE",
      step2Title: "Add Dedicated 15 Reels Production Package?",
      step2Desc: "If you don't have video footage: We handle 15 viral hook reels, AI scripts, captions, and professional editing.",
      includedText: "Included",
      addText: "Add Reel Pack (+₹6,000)",
      step3Title: "2. Select Your Business Category:",
      goalPrefix: "Campaign Goal For Your Business: ",
      step4Title: "3. Your Contact & Business Details:",
      fullNameLabel: "Your Full Name *",
      businessNameLabel: "Business / Brand Name *",
      whatsappLabel: "WhatsApp Number * (Where you want leads routed)",
      cityLabel: "City / Target Area (Where ads should show)",
      totalEstimated: "TOTAL ESTIMATED INVESTMENT",
      daysCount: "/ 30 Days",
      serviceFeeLabel: "Service Fee: ",
      metaSpendLabel: "Meta Spend: ",
      testingSpendLabel: "Testing: ",
      reassuranceText: "✓ No lock-in contracts • 100% Client ad account ownership • Direct WhatsApp group",
      submitBtnText: "Submit On WhatsApp",
      preparingText: "Preparing Order...",
      successTitle: "Form Successfully Prepared!",
      successDesc: "Thank you. Your entire campaign breakdown is ready to launch over WhatsApp.",
      openWaBtn: "Open WhatsApp Chat Directly",
      modifyBtn: "Modify Form",
      categoryOutcomes: {
        retail: { label: "Retail / Shop / E-commerce", outcome: "Local buyers, direct product inquiries and store walk-in campaigns." },
        food: { label: "Food / Restaurant / Café", outcome: "Table footfall, weekend rush, and direct dining orders." },
        car: { label: "Car Dealership / Automobile", outcome: "High-intent pre-qualified test drive forms and direct WhatsApp phone inquiries." },
        gym: { label: "Gym / Fitness Studio", outcome: "7-Day trial pass bookings and serious membership walk-in leads." },
        salon: { label: "Salon & Aesthetics Clinic", outcome: "Keratin, skin and aesthetic treatment appointment bookings." },
        realty: { label: "Real Estate & Builders", outcome: "Verified property inquiries, site visit bookings and high-ticket buyers." },
        other: { label: "Other Business / Professional", outcome: "Targeted direct customer leads tailored to your specific profit margins." }
      }
    },
    adInfo: {
      badge: "ESSENTIAL CLIENT EDUCATION",
      heading: "Boost Post vs Meta Ads Manager",
      headingHighlight: "Why 90% Of Businesses Waste Ad Budget",
      subheading: "Before spending a single rupee on ads, understand the stark financial and technical differences between clicking the mobile 'Boost' button and running structured Ads Manager campaigns.",
      simulatorTitle: "Spend Comparison Simulator (₹3,000 Ad Budget)",
      boostCardTitle: "Mobile App 'Boost Post'",
      boostBadge: "Casual Engagement",
      boostSpend: "₹3,000 Spend Output:",
      boostResult1: "150–250 Clicks / Profile Views",
      boostResult2: "Random Likes & Comments (Vanity)",
      boostResult3: "0 Verified Leads or Phone Numbers",
      boostResult4: "Zero Conversion Retargeting",
      boostVerdict: "Verdict: 80% Budget Wasted on non-buyers.",
      managerCardTitle: "Meta Ads Manager",
      managerBadge: "Strategic Business Engine",
      managerSpend: "₹3,000 Spend Output:",
      managerResult1: "15–30 Pre-Qualified Leads / WhatsApp Inquiries",
      managerResult2: "100% Direct Customer Phone Numbers & Names",
      managerResult3: "Laser 5-10km Local Radius Geofencing",
      managerResult4: "Warm Retargeting of 3-Sec Video Viewers",
      managerVerdict: "Verdict: Predictable Customer Acquisition & High ROI.",
      trapsTitle: "5 Fatal Traps Of Clicking 'Boost Post'",
      traps: [
        {
          num: "01",
          title: "Charges You For Clicks, Not Buyers",
          desc: "The mobile Boost button optimizes for anyone willing to tap a screen (often teenagers or accidental clickers), not people with purchasing intent."
        },
        {
          num: "02",
          title: "Zero Pre-Qualification Questions",
          desc: "You cannot add mandatory questions like 'When are you buying?' or 'What is your budget?'. You receive random junk inquiries."
        },
        {
          num: "03",
          title: "No Video Viewer Retargeting",
          desc: "If 5,000 people watch 50% of your video, Boost Post cannot show them a follow-up discount offer. Those warm prospects are lost forever."
        },
        {
          num: "04",
          title: "Blind Budget Burn",
          desc: "Boost Post burns your daily budget evenly across 24 hours, even at 3:00 AM when your shop or dealership is closed and no one will reply."
        },
        {
          num: "05",
          title: "No Server-Side Tracking (iOS Blindness)",
          desc: "Because Boost Post lacks Conversions API (CAPI), over 40% of iPhone users cannot be tracked, severely distorting ad algorithms."
        }
      ],
      superpowersTitle: "5 Superpowers Of Professional Ads Manager",
      superpowers: [
        {
          title: "Direct WhatsApp Click-to-Chat Funnel",
          desc: "Leads start an instant chat directly on your business WhatsApp phone without filling cumbersome website forms."
        },
        {
          title: "Dynamic Creative Optimization (DCO)",
          desc: "Meta's machine learning automatically tests 5 different video hooks and shifts your money into the top performing video."
        },
        {
          title: "Hyper-Local Radius Geofencing",
          desc: "Pinpoint ads to show strictly within 5 to 10 kilometers of your restaurant, showroom, or retail store."
        },
        {
          title: "Spam & Bot Lead Filtration",
          desc: "Custom verification questions eliminate wrong numbers and non-serious inquiries before they ever reach your phone."
        },
        {
          title: "100% Client Account Ownership",
          desc: "You retain all pixel data, custom audiences, and billing history inside your own official Meta Business Portfolio."
        }
      ]
    },
    portfolioPitch: {
      badge: "OFFICIAL DIGITAL MARKETING PORTFOLIO & CLIENT PITCH HUB",
      heading: "Everything You Need To Know Before Working With Us",
      subheading: "Shareable presentation for clients: Explore our packages, creative video showcases, client reviews, team credentials, and systematic workflows.",
      shareBtn: "Share Portfolio On WhatsApp",
      copyLinkBtn: "Copy Portfolio Link",
      copiedText: "Link Copied!",
      teamSectionTitle: "Meet Our Core Performance Team",
      teamSectionSub: "Hands-on specialists managing creative hook production, audience architecture, and campaign telemetry.",
      reviewsSectionTitle: "Client Reviews & Results",
      reviewsSectionSub: "Real feedback from local businesses, retail stores, and automobile partners who trusted our Meta Ads strategy.",
      reelsSectionTitle: "Top-Rated Reel Videos & Creative Formats",
      reelsSectionSub: "Engineered 9:16 vertical video hooks designed for high CTR and low cost per acquisition.",
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      heading: "Clear Answers To Common Questions.",
      subheading: "Everything you need to know about our Meta Ads setup, fee structure, account ownership, and timeline.",
      searchPlaceholder: "Search FAQs (e.g. ownership, budget, boost)...",
      items: [
        {
          id: 1,
          q: "What is Meta Ads Management?",
          a: "Meta Ads Management is the professional management of paid advertising campaigns across Facebook, Instagram, Messenger, and Meta Audience Network. Rather than casually clicking 'Boost Post', our team utilizes the enterprise Meta Ads Manager platform to conduct in-depth audience research, build dynamic creative split-tests, deploy conversion tracking (Pixel & CAPI), and optimize daily budgets to drive tangible customer enquiries, sales, and booked appointments."
        },
        {
          id: 2,
          q: "Is Boost Post different from Ads Manager?",
          a: "Yes, significantly. 'Boost Post' inside the Instagram/Facebook mobile app is designed for simple, quick engagement (like profile visits and post likes). Meta Ads Manager is Meta's professional suite that allows custom conversion objectives (such as high-intent Lead Forms, WhatsApp direct funnels, and catalog sales), granular geo-radius pinpointing, multi-stage video viewer retargeting, and server-side tracking."
        },
        {
          id: 3,
          q: "Is the advertising budget included in the service fee?",
          a: "No. Your advertising budget is paid directly to Meta via your own debit/credit card or GST ad account. Our management fee covers campaign strategy, audience architecture, technical setup, continuous monitoring, and weekly performance reporting. This ensures 100% financial transparency—you always see exactly how every single rupee is spent inside your own Meta account."
        },
        {
          id: 4,
          q: "How much should I spend on advertising?",
          a: "For local retail, dining, and dealerships, we recommend starting with our ₹3,000 package (₹1,500 service + ₹1,500 ad spend) or ₹5,000 Performance Lead Gen package (₹2,500 setup + ₹1,000 testing + ₹1,500 lead spend) to test audience resonance and establish your local baseline."
        },
        {
          id: 5,
          q: "Do you guarantee specific sales or leads?",
          a: "We guarantee 100% transparency, professional campaign architecture, daily optimization, and adherence to Meta best practices. Advertising creates targeted attention and customer inquiries; converting those inquiries into revenue depends on your product quality, pricing, and sales follow-up."
        },
        {
          id: 6,
          q: "Who creates the video ad creatives?",
          a: "We offer a dedicated 15 Reels Production Package (₹5,000 separate) where we handle viral hook copywriting, AI scripts, captions, and editing. Alternatively, you can supply your own footage, and we guide you on what to shoot."
        },
        {
          id: 7,
          q: "How long until we see our first inquiries?",
          a: "Typically within 48 to 72 hours of campaign launch once Meta's ad review approves the creatives and the machine learning explores your local target radius."
        },
        {
          id: 8,
          q: "Will I own my advertising account?",
          a: "Yes, 100%. We operate either directly inside your existing Meta Business Manager or help you set up an official Business Portfolio that you exclusively own. You grant our agency partner access to manage ads on your behalf."
        },
        {
          id: 9,
          q: "How will I receive reports?",
          a: "You will receive transparent weekly KPI summaries sent directly to our dedicated WhatsApp group, covering: total ad spend, impressions, link clicks, total leads/inquiries generated, and average cost-per-result."
        },
        {
          id: 10,
          q: "Can I change or pause my advertising plan?",
          a: "Yes. Our management services operate on flexible monthly cycles without lengthy lock-in contracts. You can upgrade, downgrade, or pause your management plan at any time with a simple 7-day advance notice."
        }
      ]
    },
    finalCta: {
      badge: "READY TO SCALE ADVERTISING?",
      headline: "Your Next Customer Could Be One Click Away.",
      supporting: "Let's create an advertising strategy that makes every campaign more intentional and profitable.",
      startBtn: "Start Your Campaign",
      waBtn: "Talk On WhatsApp",
      points: [
        "✓ Month-to-month flexibility",
        "✓ 100% Account ownership",
        "✓ Direct WhatsApp group"
      ]
    },
    footer: {
      bio: "We turn attention into predictable customer acquisition. Specializing in Meta Ads architecture, scroll-stopping video hooks, and conversion funnels for ambitious local brands.",
      rights: "All rights reserved. Meta™ is a registered trademark of Meta Platforms, Inc. This website is independently operated.",
      builtWith: "Built with precision for Meta Ads",
      topBtn: "Top",
    },
    security: {
      portalTitle: "Secure Client & Admin Portal",
      portalSubtitle: "Protected area for authorized agency personnel & authenticated clients.",
      pinPrompt: "Enter 4-Digit Security PIN to Access Client Inquiries:",
      unlockBtn: "Verify & Unlock",
      lockedBadge: "256-BIT ENCRYPTED ACCESS GATE",
      disclaimer: "Client contact information and lead databases are strictly isolated and never exposed publicly.",
    }
  },
  hi: {
    nav: {
      home: "ओवरव्यू",
      packages: "पैकेजेस",
      order: "कैंपेन बुक करें",
      portfolio: "डिजिटल पोर्टफोलियो",
      adInfo: "विज्ञापन जानकारी",
      process: "काम करने का तरीका",
      about: "एजेंसी के बारे में",
      faq: "सवालों के जवाब",
      portal: "एडमिन पोर्टल",
      contactWa: "व्हाट्सएप चैट",
      searchPlaceholder: "सर्विस, पैकेज या हुक्स सर्च करें...",
      quickPackages: "त्वरित पैकेजेस",
      exploreAll: "एक क्लिक में सब कुछ एक्सप्लोर करें",
    },
    search: {
      title: "आपको अपने बिजनेस के लिए कौन सी सर्विस चाहिए?",
      trendingHooksTitle: "ट्रेंडिंग सर्च हुक्स (देखने के लिए क्लिक करें):",
      hooks: [
        { label: "₹3,000 स्टार्टर एड पैकेज", page: "packages", query: "starter" },
        { label: "₹5,000 परफॉरमेंस लीड जेन प्लान", page: "packages", query: "performance" },
        { label: "अलग से 15 रील्स शूट व एडिट पैकेज", page: "packages", query: "reels" },
        { label: "बूस्ट पोस्ट बनाम मेटा एड्स मैनेजर अंतर", page: "ad-info", query: "difference" },
        { label: "कार डीलरशिप लीड्स व टेस्ट ड्राइव", page: "order", query: "car" },
        { label: "रेस्टोरेंट / कैफे फुटफॉल और कस्टमर ऑर्डर्स", page: "order", query: "food" },
        { label: "रिटेल शॉप कस्टमर और डायरेक्ट बिक्री", page: "order", query: "retail" },
        { label: "15 रील्स या 3 बेस्ट वीडियोज पर एड ऑप्शन", page: "packages", query: "options" },
      ],
      noResults: "कोई मैचिंग पैकेज नहीं मिला। 'ads', 'reels', या 'leads' सर्च करके देखें।",
    },
    hero: {
      badge: "नए जमाने के बिजनेस के लिए मेटा परफॉरमेंस मार्केटिंग",
      keyAdvantage: "खास फायदा: रणनीतिक कस्टमर अधिग्रहण",
      headlinePrefix: "आपके वीडियोज सिर्फ व्यूज नहीं,",
      headlineHighlight: "असली बिजनेस डिजर्व करते हैं।",
      supporting: "हम लोकल बिजनेस, कार डीलरशिप, रेस्टोरेंट, क्लीनिक और रिटेल स्टोर्स के फेसबुक और इंस्टाग्राम विज्ञापनों को एक सटीक कस्टमर और लीड मशीन में बदलते हैं।",
      exploreBtn: "ग्रोथ पैकेजेस देखें",
      calcBtn: "अभी कैंपेन बुक करें",
      pills: [
        { top: "100% आपका", bottom: "एड अकाउंट ओनरशिप" },
        { top: "जीरो छुपा खर्च", bottom: "सीधा मेटा एड स्पेंड" },
        { top: "साप्ताहिक", bottom: "व्हाट्सएप रिपोर्टिंग" },
      ],
      visualTitle: "लाइव मेटा कैंपेन परफॉरमेंस",
      activeBadge: "● लाइव चालू",
      cprLabel: "प्रति रिजल्ट लागत (CPR)",
      leadsLabel: "वेरिफाइड कस्टमर पूछताछ",
      thisMo: "इस महीने",
      trajectoryLabel: "कन्वर्जन ट्रैजेक्टरी",
      roasBadge: "ROAS 4.6x",
      hookStep: "हुक टेस्ट",
      cboStep: "CBO स्केल",
      retargetStep: "रिटारगेटिंग",
      finalRoas: "4.6x आरओएएस",
      targetLabel: "टारगेट: प्री-क्वालिफाइड ग्राहक पूछताछ",
      realData: "असली मेटा डेटा",
      reelBadge: "9:16 वीडियो हुक",
      reelSub: "4.8% सीटीआर • स्क्रॉल-स्टॉपर",
    },
    homeCards: {
      badge: "त्वरित नेविगेशन",
      title: "एक क्लिक में सब कुछ एक्सप्लोर करें",
      c1Badge: "₹3,000 व ₹5,000",
      c1Title: "विज्ञापन पैकेजेस",
      c1Desc: "स्टार्टर एड प्लान (₹3,000), परफॉरमेंस लीड जेन (₹5,000) और अलग से 15 रील्स पैकेज (₹5,000)।",
      c1Link: "पारदर्शी प्लान्स देखें",
      c2Badge: "तुरंत शुरुआत",
      c2Title: "कैंपेन बुकिंग फॉर्म",
      c2Desc: "अपना बिजनेस प्रकार (रिटेल, फूड, कार डीलरशिप, जिम) चुनें और सीधी व्हाट्सएप लीड्स प्राप्त करें।",
      c2Link: "व्हाट्सएप पर सेट करें",
      c3Badge: "काम और प्रमाण",
      c3Title: "डिजिटल पोर्टफोलियो हब",
      c3Desc: "क्लाइंट रिव्यूज, टॉप रेटेड वीडियोज, सिस्टम, टीम और काम करने का तरीका एक ही पेज पर।",
      c3Link: "क्लाइंट हब खोलें",
    },
    intro: {
      badge: "आपके बिजनेस को सही रणनीति की जरूरत क्यों है",
      heading: "बिना सोचे-समझे बूस्ट करना बंद करें।",
      headingHighlight: "रणनीतिक तरीके से विज्ञापन शुरू करें।",
      supporting: "विज्ञापन का मतलब सिर्फ पोस्ट के पीछे पैसे लगाना नहीं है। इसके लिए सही ऑडियंस, क्रिएटिव हुक्स, सही कैंपेन ऑब्जेक्टिव और लगातार टेस्टिंग की जरूरत होती है।",
      c1Highlight: "सटीक ऑडियंस",
      c1Title: "सही ग्राहकों तक पहुंचें",
      c1Desc: "सटीक कस्टम, लुकअलाइक और इंटरेस्ट-बेस्ड लोकल टारगेटिंग। उन लोगों पर अपना बजट बर्बाद न करें जो आपकी सर्विस कभी नहीं खरीदेंगे।",
      c2Highlight: "हाई CTR हुक्स",
      c2Title: "बेहतर क्रिएटिव्स टेस्ट करें",
      c2Desc: "3-सेकंड पैटर्न-इंटरप्ट, मजबूत हुक्स और प्रॉब्लम-सॉल्यूशन वीडियो स्क्रिप्ट्स जो मेटा के वर्टिकल फॉर्मेट पर सबसे ज्यादा बिकती हैं।",
      c3Highlight: "बिजनेस रेवेन्यू",
      c3Title: "बिजनेस गोल्स के लिए ऑप्टिमाइज़ करें",
      c3Desc: "हम सिर्फ दिखावटी लाइक्स या खाली क्लिक्स के लिए काम नहीं करते। हम मेटा की मशीन लर्निंग को व्हाट्सएप लीड्स, फोन कॉल्स और असली बिक्री के लिए ट्रेन करते हैं।",
      footerLink: "एंटरप्राइज एड्स मैनेजर",
    },
    stats: {
      badge: "100% ईमानदार व पारदर्शी सिस्टम",
      heading: "सच्चे और वास्तविक परिणाम पूरी ईमानदारी के साथ",
      verifiedBadge: "सत्यापित लाइव डेटा",
      footNote: "नए बिजनेस की शुरुआत पूरी पारदर्शिता से — कोई फर्जी आंकड़े या झूठे दावे नहीं",
      items: [
        { label: "सक्रिय बिजनेस कैटेगरीज", value: "3", desc: "रिटेल शॉप, रेस्टोरेंट और कार डीलरशिप" },
        { label: "तैयार किए गए कैंपेन्स", value: "2", desc: "शुरुआती लाइव टेस्ट कैंपेन्स पूरी पारदर्शिता के साथ" },
        { label: "मैनेज किया गया मेटा स्पेंड", value: "₹500", desc: "शुरुआती एड टेस्टिंग खर्च का 100% सही हिसाब" },
        { label: "औसत लीड कॉस्ट में कमी", value: "0", desc: "नए बिजनेस के लिए ईमानदार वास्तविक बेसलाइन डेटा" },
      ]
    },
    whyUs: {
      badge: "एजेंसी का खास फायदा",
      heading: "आपका सच्चा एडवरटाइजिंग पार्टनर,",
      headingHighlight: "सिर्फ एक और सर्विस प्रोवाइडर नहीं।",
      supporting: "हम आपके विज्ञापन बजट को उतनी ही सावधानी और जिम्मेदारी से चलाते हैं जैसे वह हमारी खुद की कंपनी की पूंजी हो।",
      standardTag: "सभी प्लान्स में शामिल",
      items: [
        { title: "व्यक्तिगत रणनीति", desc: "कोई बना-बनाया पुराना टेम्पलेट नहीं। हर कैंपेन आपके लोकल शहर, प्रतिस्पर्धा और मार्जिन के अनुसार तैयार किया जाता है।" },
        { title: "पारदर्शी बजट विभाजन", desc: "आपका एड बजट सीधे आपके कार्ड से मेटा को कटता है। हम कोई छुपा कमीशन या अतिरिक्त मार्कअप नहीं लेते।" },
        { title: "क्रिएटिव हुक टेस्टिंग", desc: "हम सिर्फ 1 फोटो नहीं चलाते। हम कई वीडियो हुक्स टेस्ट करते हैं ताकि पता चल सके कि किस वीडियो से लोग स्क्रॉल करना रोकते हैं।" },
        { title: "लगातार कैंपेन मॉनिटरिंग", desc: "हम विज्ञापन की थकान, सीपीएम के उतार-चढ़ाव और लीड रिस्पॉन्स को रोजाना मॉनिटर करते हैं ताकि बजट बर्बाद न हो।" },
        { title: "नियमित पारदर्शी रिपोर्टिंग", desc: "कोई 50-पन्नों का उलझा हुआ पीडीएफ नहीं। आपको हर हफ्ते व्हाट्सएप पर साफ जानकारी मिलती है: कुल खर्च, लीड्स, और प्रति रिजल्ट लागत।" },
        { title: "सीधा व्हाट्सएप संवाद", desc: "कोई धीमा सपोर्ट टिकट पोर्टल नहीं। एक डेडिकेटेड व्हाट्सएप ग्रुप पर सीधे हमारी परफॉरमेंस टीम से बात करें।" }
      ]
    },
    packages: {
      titleBadge: "पारदर्शी एड और क्रिएटिव पैकेजेस",
      heading: "सरल, ईमानदार पैकेजेस आपके लोकल बिजनेस के लिए।",
      subheading: "रील्स प्रोडक्शन, मेटा विज्ञापन, शहर के टॉप 3 वायरल इंस्टाग्राम पेजेस के साथ कोलैबोरेशन, और ऑन-कैमरा मॉडल्स। सब कुछ एक ही छत के नीचे पारदर्शी रूप से।",
      categoryTabs: {
        all: "सभी पैकेजेस",
        reels: "🎬 15 रील्स पैकेज",
        ads: "🚀 विज्ञापन पैकेजेस",
        collab: "🌟 शहर के टॉप 3 पेजेस कोलैब",
        models: "👥 10 मॉडल्स शूट",
        website: "💻 वेबसाइट व ऑटोमेशन",
      },
      starter: {
        tag: "स्टार्टर एड्स",
        duration: "30 दिन की सर्विस",
        name: "स्टार्टर एड पैकेज",
        price: "₹3,000",
        period: "/महीना",
        desc: "लोकल बिजनेस के लिए सबसे बजट-फ्रेंडली प्लान, जिसमें सटीक टेस्टिंग और कस्टमर इंक्वायरी मिलती है।",
        splitService: "30-दिन एजेंसी सर्विस: ₹1,500",
        splitMeta: "मेटा डायरेक्ट एड बजट: ₹1,500",
        choiceTitle: "एड बजट वितरण के विकल्प:",
        choiceA: "ऑप्शन A: 15 रील्स पर टेस्टिंग (~₹100 प्रति रील बजट)",
        choiceB: "ऑप्शन B: टॉप 3 बेस्ट वीडियोज पर एग्रेसिव एड्स (~₹500 प्रति वीडियो)",
        features: [
          "लोकल 5 से 10 किमी रेडियस में सटीक टारगेटिंग",
          "व्हाट्सएप पर हर हफ्ते परफॉरमेंस रिपोर्ट",
          "कैंपेन सेटअप और रोजाना बिड मॉनिटरिंग",
          "क्लाइंट के पास 100% पिक्सल और अकाउंट ओनरशिप",
        ],
        cta: "₹3,000 पैकेज चुनें",
      },
      performance: {
        popularBadge: "★ RECOMMENDED FOR ADVERTISEMENT PACKAGE",
        tag: "15 रील्स विज्ञापन कैंपेन",
        duration: "15 रील्स कैंपेन",
        name: "15 रील्स विज्ञापन पैकेज",
        price: "₹6,000",
        period: "/ 15 रील्स कैंपेन",
        desc: "आपकी 15 रील्स पर रणनीतिक मेटा विज्ञापन कैंपेन (~₹200 प्रति रील बजट) ताकि सीधे व्हाट्सएप पर खरीदार और दुकान पर ग्राहक आएं।",
        splitSetup: "एड सेटअप और कैंपेन संरचना: ₹3,000",
        splitTesting: "15 रील्स एंगल टेस्टिंग: शामिल है",
        splitLeadSpend: "मेटा डायरेक्ट एड स्पेंड: ₹3,000 (~₹200/रील)",
        tailoredTitle: "15 रील्स विशेष रणनीति:",
        tailoredDesc: "• 15 अलग-अलग हाई-कन्वर्टिंग एड सेट्स (हर रील के लिए विज्ञापन)\n• 5 से 10 किमी रेडियस में हाइपर-लोकल टारगेटिंग\n• सीधे व्हाट्सएप खरीदार व दुकान वॉक-इन्स ट्रैकिंग",
        features: [
          "15 रील्स के लिए व्यक्तिगत एड सेट्स और बिड मैनेजमेंट",
          "सीधी व्हाट्सएप लीड रूटिंग (आप सीधे खरीदार से बात करते हैं)",
          "प्रतिस्पर्धियों का रिसर्च और हाइपर-लोकल डेमोग्राफिक टारगेटिंग",
          "वीडियो देखने वालों और प्रोफाइल विजिटर्स की री-टारगेटिंग",
          "साप्ताहिक पारदर्शी एड स्पेंड और व्हाट्सएप इंक्वायरी रिपोर्ट",
        ],
        cta: "₹6,000 विज्ञापन प्लान चुनें",
      },
      reels: {
        topBadge: "★ RECOMMENDED FOR REEL PACKAGE",
        tag: "15 रील्स पैकेज (अलग से)",
        duration: "फुल प्रोडक्शन",
        name: "15 हाई-इम्पैक्ट रील्स पैकेज",
        price: "₹6,000",
        period: "/बैच (15 रील्स)",
        desc: "कंप्लीट वीडियो प्रोडक्शन: वायरल AI हुक स्क्रिप्टिंग, ऑन-साइट शूटिंग गाइडेंस और रिटेंशन एडिटिंग।",
        highlightBox: "15 हाई-अटेंशन रणनीतिक रील्स (फुल प्रोडक्शन)",
        features: [
          "15 रणनीतिक रील्स (AI-असिस्टेड वायरल हुक्स के साथ)",
          "मेटा फीड के लिए 3-सेकंड पैटर्न-इंटरप्ट हुक्स",
          "डायनामिक काइनेटिक सबटाइटल्स और मोशन साउंड क्यूज",
          "हाई-सीटीआर के लिए डायरेक्ट रिस्पॉन्स कॉपीराइटिंग",
          "रेडी-टू-रन 9:16 वर्टिकल फॉर्मेट में डिलीवरी",
          "₹6,000 विज्ञापन पैकेज के साथ जोड़ सकते हैं",
        ],
        cta: "15 रील्स पैकेज बुक करें (₹6,000)",
      },
      collab: {
        tag: "वायरल पहुंच",
        badge: "शहर के टॉप पेजेस से सीधा टाई-अप",
        duration: "पूरे शहर में चर्चा",
        name: "शहर के टॉप 3 वायरल पेजेस कोलैब पैकेज",
        price: "कस्टम बजट",
        period: "/कोलैब कैंपेन",
        desc: "पेज एडमिन्स के पीछे भागने और मोलभाव करने की जरूरत नहीं। शहर के टॉप 3 वायरल इंस्टाग्राम पेजेस के साथ हमारा सीधा टाई-अप है।",
        highlightBox: "टॉप 3 वेरिफाइड सिटी पेजेस के साथ डायरेक्ट पार्टनरशिप",
        features: [
          "वेरिफाइड सिटी पेजेस के साथ जॉइंट कोलैबोरेटिव पोस्ट",
          "हाइपर-लोकल ऑडियंस रीच (1 लाख से 5 लाख+ लोकल फॉलोअर्स)",
          "स्टोरी शाउटआउट्स सीधे व्हाट्सएप व लोकेशन स्वाइप-अप के साथ",
          "तुरंत लोकल ब्रांड क्रेडिबिलिटी और ग्राहकों का भरोसा",
          "एडमिन से बात करने या मोलभाव करने की कोई झंझट नहीं",
        ],
        cta: "सिटी पेजेस कोलैब की जानकारी लें",
      },
      models: {
        tag: "ऑन-स्क्रीन टैलेंट",
        badge: "10 वेरिफाइड मॉडल्स",
        duration: "लड़का और लड़की दोनों",
        name: "प्रोफेशनल मॉडल शूट पैकेज",
        price: "सुलभ ऐड-ऑन",
        period: "/शूट सेशन",
        desc: "कैमरे के सामने बोलने में झिझक है या प्रोफेशनल चेहरे चाहिए? हमारे पास 10 वेरिफाइड लड़के और लड़कियां मॉडल्स उपलब्ध हैं जो आपके ब्रांड का प्रतिनिधित्व करेंगे।",
        highlightBox: "10 वेरिफाइड मेल व फीमेल ऑन-स्क्रीन मॉडल्स",
        features: [
          "10 टैलेंटेड ऑन-कैमरा एक्टर्स व मॉडल्स (मेल और फीमेल दोनों)",
          "कैफे टेस्टिंग, कपड़ों के ट्रायल्स, सैलून डेमो व कार रिव्यूज के लिए परफेक्ट",
          "हाई-कन्वर्टिंग स्क्रिप्ट्स के अनुसार नेचुरल डायलॉग डिलीवरी",
          "मेटा एड्स और ऑर्गेनिक इंस्टाग्राम दोनों के लिए फुल राइट्स",
          "बिजनेस मालिक का कैमरा डर पूरी तरह खत्म",
        ],
        cta: "मॉडल शूट ऐड-ऑन बुक करें",
      },
      website: {
        tag: "कन्वर्जन एसेट",
        badge: "सुपर-फास्ट फनल",
        duration: "वन-टाइम एसेट",
        name: "बिजनेस वेबसाइट व ऑटोमेशन पैकेज",
        price: "₹4,999",
        period: "/एक बार",
        desc: "हाई-कन्वर्टिंग 1-पेज बिजनेस लैंडिंग पेज, जिसमें डायरेक्ट व्हाट्सएप लीड कैप्चर, गूगल मैप और मेटा पिक्सल पहले से सेटअप रहता है।",
        highlightBox: "फास्ट मोबाइल वेबसाइट + डायरेक्ट व्हाट्सएप लीड्स",
        features: [
          "मोबाइल यूजर्स के लिए सुपर-फास्ट और आकर्षक डिजाइन",
          "सीधे 1-क्लिक व्हाट्सएप बुकिंग बटन्स",
          "गूगल मैप्स, क्लाइंट रिव्यूज और फोटो गैलरी इंटीग्रेशन",
          "मेटा पिक्सल और कन्वर्जन API ट्रैकिंग रेडी",
          "हाई-स्पीड ग्लोबल सीडीएन पर फ्री होस्टिंग सेटअप",
        ],
        cta: "वेबसाइट व ऑटोमेशन ऑर्डर करें",
      },
      problemBox: {
        badge: "फ्री पर्सनलाइज्ड कंसल्टेशन",
        title: "फ्री में बताएं कि आपके बिजनेस को किस चीज की जरूरत है!",
        subtitle: "अगर आपकी कोई खास जरूरत है, वॉक-इन कम है, या बजट अलग है — अपनी समस्या नीचे लिखें और सीधे हमारे फाउंडर्स से व्हाट्सएप पर मुफ्त सलाह पाएं।",
        placeholder: "जैसे: मेरा इंदौर में यूनिसेक्स सैलून है और वीकडेज में ग्राहक कम आते हैं, बजट ₹4,000 है...",
        btnText: "अपनी जरूरत व्हाट्सएप पर भेजें",
        quickTags: ["दुकान पर ग्राहक चाहिए", "कम बजट है", "शूट में मदद चाहिए", "इन्फ्लुएंसर कोलैब", "वेबसाइट बनवानी है"]
      },
      disclaimerTitle: "स्पष्टीकरण व सुविधा:",
      disclaimerText: "सभी पैकेजेस मॉड्यूलर हैं। आप सिर्फ विज्ञापन (₹3,000 या ₹5,000) ले सकते हैं, सिर्फ 15 रील्स पैकेज (₹6,000) ले सकते हैं, या अपनी जरूरत के अनुसार सिटी पेजेस, मॉडल्स या वेबसाइट जोड़ सकते हैं।"
    },
    order: {
      badge: "पारदर्शी इन्टेक व ऑर्डर फॉर्म",
      heading: "अपना पैकेज चुनें और व्हाट्सएप पर शुरुआत करें।",
      subheading: "रिकमेंडेड विज्ञापन पैकेज (₹6,000 में 15 रील्स एड्स) चुनें और इच्छानुसार अलग से 15 रील्स प्रोडक्शन पैकेज (+₹6,000) जोड़ें। 100% पारदर्शी हिसाब।",
      step1Title: "1. विज्ञापन पैकेज चुनें:",
      starterOptTitle: "एड बजट वितरण का विकल्प:",
      starterOptA: "ऑप्शन A: 15 रील्स पर फैलाएं (~₹100/रील बजट)",
      starterOptB: "ऑप्शन B: टॉप 3 बेस्ट वीडियोज पर एग्रेसिव एड्स (~₹500/वीडियो)",
      step2Badge: "अलग कंटेंट पैकेज",
      step2Title: "क्या 15 रील्स प्रोडक्शन पैकेज भी जोड़ना चाहते हैं?",
      step2Desc: "अगर आपके पास वीडियो नहीं है: 15 वायरल हुक रील्स, स्क्रिप्ट्स, कैप्शन और प्रोफेशनल एडिटिंग हम संभालेंगे।",
      includedText: "शामिल है",
      addText: "रील पैक जोड़ें (+₹6,000)",
      step3Title: "2. अपने बिजनेस की कैटेगरी चुनें:",
      goalPrefix: "आपके बिजनेस के लिए मुख्य लक्ष्य: ",
      step4Title: "3. आपकी संपर्क व बिजनेस जानकारी:",
      fullNameLabel: "आपका पूरा नाम *",
      businessNameLabel: "बिजनेस / ब्रांड का नाम *",
      whatsappLabel: "व्हाट्सएप नंबर * (जहाँ आपको लीड्स चाहिए)",
      cityLabel: "शहर / टारगेट इलाका (जहाँ विज्ञापन दिखाना है)",
      totalEstimated: "कुल अनुमानित निवेश",
      daysCount: "/ 15 रील्स कैंपेन",
      serviceFeeLabel: "सर्विस फीस: ",
      metaSpendLabel: "मेटा खर्च: ",
      testingSpendLabel: "टेस्टिंग खर्च: ",
      reassuranceText: "✓ कोई लॉक-इन कॉन्ट्रैक्ट नहीं • 100% क्लाइंट एड अकाउंट ओनरशिप • सीधा व्हाट्सएप ग्रुप",
      submitBtnText: "व्हाट्सएप पर सबमिट करें",
      preparingText: "ऑर्डर तैयार हो रहा है...",
      successTitle: "फॉर्म सफलतापूर्वक तैयार हो गया!",
      successDesc: "धन्यवाद। आपका पूरा कैंपेन ब्रेकडाउन व्हाट्सएप पर लॉन्च के लिए तैयार है।",
      openWaBtn: "सीधे व्हाट्सएप चैट खोलें",
      modifyBtn: "फॉर्म में बदलाव करें",
      categoryOutcomes: {
        retail: { label: "रिटेल / दुकान / ई-कॉमर्स", outcome: "लोकल खरीदार, डायरेक्ट प्रोडक्ट पूछताछ और दुकान पर ग्राहकों के वॉक-इन्स।" },
        food: { label: "फूड / रेस्टोरेंट / कैफ़े", outcome: "टेबल फुटफॉल, वीकेंड की भीड़ और सीधे खाने के ऑर्डर्स।" },
        car: { label: "कार डीलरशिप / ऑटोमोबाइल", outcome: "वेरिफाइड टेस्ट ड्राइव फॉर्म्स और गंभीर खरीदारों के सीधे व्हाट्सएप नंबर।" },
        gym: { label: "जिम / फिटनेस स्टूडियो", outcome: "7-दिवसीय ट्रायल पास बुकिंग्स और गंभीर मेंबरशिप वॉक-इन्स।" },
        salon: { label: "सैलून व एस्थेटिक्स क्लीनिक", outcome: "केराटिन, स्किन और ब्यूटी ट्रीटमेंट अपॉइंटमेंट बुकिंग्स।" },
        realty: { label: "रियल एस्टेट व बिल्डर्स", outcome: "वेरिफाइड प्रॉपर्टी पूछताछ, फ्लोर प्लान डाउनलोड्स और हाई-टिकट खरीदार।" },
        other: { label: "अन्य बिजनेस / प्रोफेशनल", outcome: "आपके बिजनेस मार्जिन के अनुसार सटीक और टारगेटेड कस्टमर लीड्स।" }
      }
    },
    adInfo: {
      badge: "क्लाइंट के लिए जरूरी विज्ञापन जानकारी",
      heading: "बूस्ट पोस्ट बनाम मेटा एड्स मैनेजर",
      headingHighlight: "90% बिजनेस विज्ञापन में पैसे क्यों बर्बाद करते हैं?",
      subheading: "विज्ञापन में एक भी रुपया लगाने से पहले यह समझना जरूरी है कि मोबाइल ऐप में 'बूस्ट' बटन दबाने और एड्स मैनेजर से रणनीतिक कैंपेन चलाने में ज़मीन-आसमान का फर्क क्यों है।",
      simulatorTitle: "खर्च और परिणाम का सीधा तुलनात्मक सिमुलेटर (₹3,000 बजट)",
      boostCardTitle: "मोबाइल ऐप का 'बूस्ट पोस्ट'",
      boostBadge: "दिखावटी लाइक्स",
      boostSpend: "₹3,000 खर्च का परिणाम:",
      boostResult1: "150–250 खाली क्लिक्स / प्रोफाइल विजिट्स",
      boostResult2: "बेमतलब के लाइक्स और कमेंट्स (खाली दिखावा)",
      boostResult3: "0 वेरिफाइड कस्टमर लीड्स या फोन नंबर",
      boostResult4: "कन्वर्जन या री-टारगेटिंग की शून्य सुविधा",
      boostVerdict: "नतीजा: 80% बजट ऐसे लोगों पर जल गया जो कभी कुछ नहीं खरीदेंगे।",
      managerCardTitle: "मेटा एड्स मैनेजर",
      managerBadge: "रणनीतिक बिजनेस इंजन",
      managerSpend: "₹3,000 खर्च का परिणाम:",
      managerResult1: "15–30 वेरिफाइड लीड्स / सीधे व्हाट्सएप ग्राहक",
      managerResult2: "100% असली ग्राहक नाम और फोन नंबर्स",
      managerResult3: "दुकान/शोरूम के 5-10 किमी दायरे में सटीक टारगेटिंग",
      managerResult4: "3-सेकंड वीडियो देखने वालों की री-टारगेटिंग",
      managerVerdict: "नतीजा: पक्के ग्राहक, सही हिसाब और लगातार मुनाफा।",
      trapsTitle: "ऐप में 'बूस्ट पोस्ट' दबाने के 5 बड़े नुकसान",
      traps: [
        {
          num: "01",
          title: "मेटा सिर्फ क्लिक्स का पैसा काटता है, खरीदारों का नहीं",
          desc: "बूस्ट बटन एल्गोरिदम को ऐसे लोगों को ढूंढने कहता है जो बिना सोचे स्क्रीन पर क्लिक करते हैं (अक्सर बच्चे या खाली समय बिताने वाले लोग)।"
        },
        {
          num: "02",
          title: "कोई प्री-क्वालिफाइंग सवाल नहीं पूछ सकते",
          desc: "आप यह नहीं पूछ सकते कि 'आप कब खरीदना चाहते हैं?' या 'आपका बजट क्या है?'. नतीजा यह होता है कि फर्जी कॉल्स और गलत नंबर आते हैं।"
        },
        {
          num: "03",
          title: "वीडियो देखने वालों को दोबारा विज्ञापन नहीं दिखा सकते",
          desc: "अगर 5,000 लोगों ने आपकी रील आधी देखी, तो बूस्ट पोस्ट उन्हें दोबारा ऑफर नहीं दिखा सकता। वो गर्म ग्राहक हमेशा के लिए खो जाते हैं।"
        },
        {
          num: "04",
          title: "रात के समय भी अंधाधुंध बजट कटता रहता है",
          desc: "बूस्ट पोस्ट 24 घंटे बराबर पैसे काटता है, भले ही रात को 3 बजे आपकी दुकान बंद हो और कोई फोन उठाने वाला न हो।"
        },
        {
          num: "05",
          title: "सर्वर-साइड ट्रैकिंग न होना (iPhone यूजर्स का नुकसान)",
          desc: "बूस्ट पोस्ट में कन्वर्जन्स एपीआई (CAPI) नहीं होता, जिससे 40% से ज्यादा आईफोन यूजर्स का डेटा गायब हो जाता है।"
        }
      ],
      superpowersTitle: "प्रोफेशनल मेटा एड्स मैनेजर की 5 महाशक्तियां",
      superpowers: [
        {
          title: "सीधा व्हाट्सएप चैट फनल",
          desc: "ग्राहक बिना किसी झंझट के सीधे आपके बिजनेस व्हाट्सएप पर हाय लिखकर बात शुरू करता है।"
        },
        {
          title: "डायनामिक क्रिएटिव ऑप्टिमाइजेशन (AI)",
          desc: "मेटा का AI अपने आप 5 अलग-अलग वीडियो हुक टेस्ट करता है और जिस वीडियो पर सबसे सस्ती लीड आती है, उसी पर बजट लगाता है।"
        },
        {
          title: "हाइपर-लोकल 5 से 10 किमी रेडियस",
          desc: "विज्ञापन सिर्फ आपकी दुकान, रेस्टोरेंट या कार शोरूम के आसपास रहने वाले असली खरीदारों को ही दिखता है।"
        },
        {
          title: "फर्जी लीड्स और बॉट्स से सुरक्षा",
          desc: "कस्टम सवाल पूछकर गैर-गंभीर लोगों को पहले ही बाहर कर दिया जाता है ताकि आपका समय बर्बाद न हो।"
        },
        {
          title: "100% आपका अपना अकाउंट मालिकाना हक",
          desc: "सभी पिक्सल डेटा, कस्टम ऑडियंस और बिलिंग इतिहास हमेशा आपके अपने बिजनेस मैनेजर में सुरक्षित रहता है।"
        }
      ]
    },
    portfolioPitch: {
      badge: "ऑफिशियल डिजिटल मार्केटिंग पोर्टफोलियो व क्लाइंट हब",
      heading: "हमारे साथ काम शुरू करने से पहले सब कुछ जानें",
      subheading: "क्लाइंट्स के लिए शेयर करने योग्य हब: हमारे पैकेजेस, टॉप-रेटेड वीडियो रील्स, कस्टमर रिव्यूज, टीम और काम करने की पूरी प्रणाली देखें।",
      shareBtn: "व्हाट्सएप पर पोर्टफोलियो शेयर करें",
      copyLinkBtn: "पोर्टफोलियो लिंक कॉपी करें",
      copiedText: "लिंक कॉपी हो गया!",
      teamSectionTitle: "हमारी कोर परफॉरमेंस टीम से मिलें",
      teamSectionSub: "क्रिएटिव हुक प्रोडक्शन, ऑडियंस स्ट्रैटेजी और एड्स मैनेजर चलाने वाले विशेषज्ञ।",
      reviewsSectionTitle: "क्लाइंट रिव्यूज व असली परिणाम",
      reviewsSectionSub: "लोकल स्टोर्स, रेस्टोरेंट्स और कार डीलरशिप्स का हमारे मेटा विज्ञापनों पर सच्चा फीडबैक।",
      reelsSectionTitle: "टॉप रेटेड वीडियो रील्स और क्रिएटिव रिजल्ट्स",
      reelsSectionSub: "हाई सीटीआर और सस्ती लीड लागत के लिए खास तौर पर तैयार किए गए 9:16 वर्टिकल वीडियोज।",
    },
    faq: {
      badge: "अक्सर पूछे जाने वाले सवाल",
      heading: "आपके सवालों के स्पष्ट व सीधे जवाब।",
      subheading: "मेटा एड्स सेटअप, फीस स्ट्रक्चर, अकाउंट ओनरशिप और टाइमलाइन से जुड़ी हर जानकारी।",
      searchPlaceholder: "सवालों में खोजें (जैसे ओनरशिप, बजट, बूस्ट)...",
      items: [
        {
          id: 1,
          q: "मेटा एड्स मैनेजमेंट क्या होता है?",
          a: "मेटा एड्स मैनेजमेंट फेसबुक, इंस्टाग्राम, मैसेंजर और ऑडियंस नेटवर्क पर पेड विज्ञापनों का पेशेवर प्रबंधन है। साधारण 'बूस्ट पोस्ट' के बजाय, हमारी टीम एंटरप्राइज मेटा एड्स मैनेजर का उपयोग करके ऑडियंस रिसर्च, क्रिएटिव स्प्लिट-टेस्टिंग, पिक्सल कन्वर्जन ट्रैकिंग और दैनिक बजट ऑप्टिमाइजेशन करती है ताकि आपको असली खरीदार, कॉल और अपॉइंटमेंट्स मिलें।"
        },
        {
          id: 2,
          q: "क्या बूस्ट पोस्ट और एड्स मैनेजर में अंतर है?",
          a: "हाँ, बहुत बड़ा अंतर है। ऐप के अंदर 'बूस्ट पोस्ट' सिर्फ प्रोफाइल विजिट और दिखावटी लाइक्स के लिए बना है। जबकि 'मेटा एड्स मैनेजर' में डायरेक्ट व्हाट्सएप लीड फनल, सटीक 5 किमी रेडियस, वीडियो देखने वालों की री-टारगेटिंग और पिक्सल डेटा ट्रैकिंग की पेशेवर सुविधाएं होती हैं।"
        },
        {
          id: 3,
          q: "क्या विज्ञापन बजट सर्विस फीस में शामिल है?",
          a: "नहीं। आपका विज्ञापन बजट सीधे आपके डेबिट/क्रेडिट कार्ड से मेटा को कटता है। हमारी फीस कैंपेन रणनीति, ऑडियंस रिसर्च, तकनीकी सेटअप, दैनिक मॉनिटरिंग और साप्ताहिक रिपोर्टिंग की होती है। इससे 100% वित्तीय पारदर्शिता बनी रहती है।"
        },
        {
          id: 4,
          q: "मुझे विज्ञापन पर कितना बजट लगाना चाहिए?",
          a: "लोकल दुकान, रेस्टोरेंट या कार डीलरशिप के लिए, हम ₹3,000 वाले स्टार्टर पैकेज (₹1,500 सर्विस + ₹1,500 एड स्पेंड) या ₹5,000 वाले परफॉरमेंस पैकेज से शुरुआत करने की सलाह देते हैं ताकि आपकी लोकल ऑडियंस का रिस्पॉन्स टेस्ट हो सके।"
        },
        {
          id: 5,
          q: "क्या आप बिक्री या लीड्स की गारंटी देते हैं?",
          a: "हम 100% पारदर्शिता, पेशेवर कैंपेन सेटअप, दैनिक मॉनिटरिंग और मेटा के बेस्ट प्रैक्टिसेस की गारंटी देते हैं। विज्ञापन सही और गंभीर ग्राहक आपके व्हाट्सएप तक लाता है; उसे बिक्री में बदलना आपके प्रोडक्ट की क्वालिटी, कीमत और बातचीत पर निर्भर करता है।"
        },
        {
          id: 6,
          q: "वीडियो विज्ञापन कौन तैयार करेगा?",
          a: "हमारा 15 रील्स प्रोडक्शन पैकेज (अलग से ₹5,000) उपलब्ध है जिसमें हम वायरल हुक स्क्रिप्ट्स, कैप्शन और एडिटिंग करते हैं। यदि आपके पास पहले से वीडियोज हैं, तो हम उन्हें गाइड करके एड्स में उपयोग करते हैं।"
        },
        {
          id: 7,
          q: "पहली इंक्वायरी आने में कितना समय लगता है?",
          a: "आमतौर पर कैंपेन लाइव होने और मेटा द्वारा विज्ञापन अप्रूव होने के 48 से 72 घंटों के भीतर लोकल इंक्वायरी आनी शुरू हो जाती है।"
        },
        {
          id: 8,
          q: "क्या विज्ञापन अकाउंट का मालिकाना हक मेरा रहेगा?",
          a: "हाँ, 100% आपका रहेगा। हम आपके ही मेटा बिजनेस मैनेजर में काम करते हैं या आपको ऑफिशियल बिजनेस पोर्टफोलियो बनाकर देते हैं जिसके मालिक सिर्फ आप होते हैं। पिक्सल डेटा, कस्टम ऑडियंस और पेमेंट मेथड पर पूरा हक आपका रहता है।"
        },
        {
          id: 9,
          q: "मुझे विज्ञापन की रिपोर्ट कैसे मिलेगी?",
          a: "आपको एक डेडिकेटेड व्हाट्सएप ग्रुप में हर हफ्ते पूरी रिपोर्ट भेजी जाती है, जिसमें कुल खर्च, पहुंचे हुए लोग, मिली हुई लीड्स और प्रति रिजल्ट की लागत साफ लिखी होती है।"
        },
        {
          id: 10,
          q: "क्या मैं अपना पैकेज बदल या रोक सकता हूँ?",
          a: "हाँ, हमारी सर्विस महीने-दर-महीने चलती है और कोई लंबा लॉक-इन कॉन्ट्रैक्ट नहीं है। आप किसी भी महीने अपने प्लान को अपग्रेड, डाउनग्रेड या 7 दिन की पूर्व सूचना देकर रोक सकते हैं।"
        }
      ]
    },
    finalCta: {
      badge: "क्या आप विज्ञापन स्केल करने के लिए तैयार हैं?",
      headline: "आपका अगला ग्राहक बस एक क्लिक की दूरी पर है।",
      supporting: "आइए मिलकर एक ऐसा विज्ञापन कैंपेन बनाएं जो सिर्फ पैसे न बहाए बल्कि आपके बिजनेस के लिए लगातार कमाई लाए।",
      startBtn: "अपना कैंपेन शुरू करें",
      waBtn: "व्हाट्सएप पर बात करें",
      points: [
        "✓ महीने-दर-महीने लचीलापन",
        "✓ 100% एड अकाउंट ओनरशिप",
        "✓ सीधा व्हाट्सएप ग्रुप सपोर्ट"
      ]
    },
    footer: {
      bio: "हम लोगों का ध्यान खींचकर उसे पक्के ग्राहकों में बदलते हैं। लोकल बिजनेस और महत्वाकांक्षी ब्रांड्स के लिए मेटा एड्स और वायरल वीडियो फनल में विशेषज्ञता।",
      rights: "सर्वाधिकार सुरक्षित। मेटा™ मेटा प्लेटफॉर्म्स इंक का रजिस्टर्ड ट्रेडमार्क है। यह वेबसाइट स्वतंत्र रूप से संचालित है।",
      builtWith: "मेटा एड्स के लिए विशेष रूप से निर्मित",
      topBtn: "ऊपर जाएं",
    },
    security: {
      portalTitle: "सुरक्षित क्लाइंट और एडमिन पोर्टल",
      portalSubtitle: "अधिकृत एजेंसी स्टाफ और रजिस्टर्ड क्लाइंट्स के लिए सुरक्षित क्षेत्र।",
      pinPrompt: "क्लाइंट लीड्स देखने के लिए 4-अंकों का सुरक्षा पिन दर्ज करें:",
      unlockBtn: "पिन वेरिफाई करें और खोलें",
      lockedBadge: "256-बिट एन्क्रिप्टेड सुरक्षा द्वार",
      disclaimer: "क्लाइंट की जानकारी और लीड डेटा पूरी तरह सुरक्षित है और कभी भी सार्वजनिक यूआरएल पर लीक नहीं होता।",
    }
  }
};
