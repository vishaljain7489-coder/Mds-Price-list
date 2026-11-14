export type Language = 'hi' | 'en';

export interface TranslationContent {
  nav: {
    about: string;
    powers: string;
    enhancements: string;
    portfolio: string;
    loginSignUp: string;
    adminLogin: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    exploreBtn: string;
    portalBtn: string;
  };
  stats: {
    campaigns: { label: string; desc: string };
    experience: { label: string; desc: string };
    reach: { label: string; desc: string };
    rating: { label: string; desc: string };
  };
  powers: {
    badge: string;
    heading: string;
    subheading: string;
    power1: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    power2: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    power3: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    digitalMarketingBonus: {
      title: string;
      desc: string;
    };
  };
  motive: {
    badge: string;
    heading: string;
    story: string;
    boostTrapTitle: string;
    boostTrapDesc: string;
    ourSolutionTitle: string;
    ourSolutionDesc: string;
    conclusion: string;
  };
  enhancements: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      num: string;
      forWho: string;
      title: string;
      desc: string;
      benefit: string;
    }[];
  };
  portfolio: {
    badge: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterCafes: string;
    filterClothing: string;
    cases: {
      id: string;
      client: string;
      category: 'Cafes' | 'Clothing';
      categoryLabel: string;
      location: string;
      hook: string;
      deliverables: string;
      resultMetric: string;
      resultDetail: string;
      image: string;
      videoUrl?: string;
    }[];
  };
  cta: {
    badge: string;
    heading: string;
    desc: string;
    button: string;
  };
  footer: {
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  hi: {
    nav: {
      about: "हमारे बारे में",
      powers: "हमारी पावर्स",
      enhancements: "शॉप के लिए क्या देंगे",
      portfolio: "पोर्टफोलियो",
      loginSignUp: "लॉगिन व साइन अप",
      adminLogin: "एडमिन पोर्टल"
    },
    hero: {
      badge: "रील्स · पोस्ट्स · मेटा एडवर्टाइजमेंट का सम्पूर्ण पैकेज",
      headlinePart1: "लोकल स्टोर्स व कैफ़े की",
      headlineHighlight: "ग्राहकों से भरें भीड़",
      headlinePart2: "डेली सेल्स में बदलें।",
      description: "हम कैफ़े, रेस्टोरेंट्स और कपड़ों की दुकानों (क्लॉथ स्टोर्स) के लिए 3-सेकंड वायरल रील्स, हाई-कन्वर्टिंग पोस्ट्स और 5-10km मेटा ऐड्स का पूरा पैकेज देते हैं। सीधे व्हाट्सएप पर ग्राहकों की इन्क्वायरी लाते हैं।",
      exploreBtn: "पोर्टफोलियो व रील्स देखें ↓",
      portalBtn: "लॉगिन / अकाउंट बनाएं →"
    },
    stats: {
      campaigns: { label: "लोकल कैंपेन पूरे किए", desc: "कैफ़े, क्लॉथ स्टोर्स व लोकल शॉप्स" },
      experience: { label: "मार्केटिंग अनुभव", desc: "हार्डकोर मेटा ऐड्स व रील्स ऑपरेशंस" },
      reach: { label: "कुल वीडियो व्यूज", desc: "स्थानीय 5-10km में देखी गई रील्स" },
      rating: { label: "क्लाइंट संतुष्टि", desc: "पारदर्शी परिणाम व 100% ओनरशिप" }
    },
    powers: {
      badge: "• हमारी मुख्य शक्तियां (3-IN-1 PACKAGE)",
      heading: "रील्स + पोस्ट्स + एडवर्टाइजमेंट का फुल पैकेज",
      subheading: "डिजिटल मार्केटिंग में आपकी दुकान को जो भी चाहिए, सब कुछ हमारे इस पैकेज में शामिल है:",
      power1: {
        tag: "पावर 01 · 9:16 वर्टिकल वीडियो",
        title: "3-सेकंड वायरल रील्स प्रोडक्शन",
        desc: "हम कैफ़े के लज़ीज़ खाने और कपड़ों के स्टोर के नए कलेक्शंस की ऐसी रील्स बनाते हैं जो स्क्रोल करते हुए ग्राहक की उंगली रोक दें।",
        bullets: ["3-सेकंड पैटर्न इंटरप्ट हुक्स", "सिनेमैटिक 4K शूटिंग व ASMR ऑडियो", "काइनेटिक टेक्स्ट व ट्रेंडिंग बैकग्राउंड साउंड्स", "65%+ वॉच-टाइम रिटेंशन"]
      },
      power2: {
        tag: "पावर 02 · क्रिएटिव डिजाइनिंग",
        title: "हाई-कन्वर्टिंग पोस्ट्स व बैनर्स",
        desc: "डेली ऑफर्स, स्पेशल डिस्काउंट्स, फेस्टिवल पोस्ट्स और मेनू शोकेस के लिए हाई-कंट्रास्ट ग्राफिक्स और कैरोसेल डिज़ाइन्स।",
        bullets: ["ऑफर पोस्ट्स व डिस्काउंट कूपन डिज़ाइन्स", "इंस्टाग्राम ग्रिड व स्टोरी हाइलाइट्स", "प्रोडक्ट व क्लॉथिंग कैटलॉग शोकेस", "ब्रांड कलर पैलेट व थीम कंसिस्टेंसी"]
      },
      power3: {
        tag: "पावर 03 · हाइपर-लोकल ऐड्स",
        title: "5-10km मेटा एडवर्टाइजमेंट",
        desc: "आपकी दुकान के सिर्फ 5 से 10 किलोमीटर के दायरे में रहने वाले लोगों को विज्ञापन दिखाते हैं और सीधे व्हाट्सएप चैट पर लीड लाते हैं।",
        bullets: ["पिनपॉइंट 5-10km लोकल जियो-फेंसिंग", "सीधे व्हाट्सएप पर ग्राहकों की इन्क्वायरी", "क्लाइंट के अपने कार्ड से खर्च (जीरो मार्कअप)", "24 घंटे लाइव ऑप्टिमाइज़ेशन"]
      },
      digitalMarketingBonus: {
        title: "सम्पूर्ण डिजिटल मार्केटिंग सपोर्ट",
        desc: "मेटा पिक्सेल सेटअप, CAPI इंटीग्रेशन, गूगल मैप्स/लोकल बिजनेस प्रोफाइल ऑप्टिमाइजेशन और दोबारा खरीदारी के लिए रिटारगेटिंग।"
      }
    },
    motive: {
      badge: "• हमारा उद्देश्य व विज़न",
      heading: "बूस्ट पोस्ट के नुकसान से दुकानदारों को बचाना",
      story: "पिछले 2-3 वर्षों में हमने देखा कि कैफ़े और क्लॉथ स्टोर वाले इंस्टाग्राम का नीला 'Boost Post' बटन दबाकर हजारों रुपये बेकार कर देते हैं। परिणाम क्या मिलता है? सिर्फ फेक लाइक्स, लेकिन दुकान पर एक भी ग्राहक नहीं आता।",
      boostTrapTitle: "❌ बूस्ट पोस्ट का असली सच:",
      boostTrapDesc: "यह उन दूर-दराज के लोगों को दिखता है जो सिर्फ लाइक करके आगे बढ़ जाते हैं, आपकी दुकान पर कभी नहीं आते।",
      ourSolutionTitle: "✓ हमारी एडवर्टाइजमेंट प्रणाली:",
      ourSolutionDesc: "हम सिर्फ आपकी दुकान के 15 मिनट की दूरी में रहने वाले असली खरीदारों को विज्ञापन दिखाते हैं जो सीधे व्हाट्सएप पर ऑर्डर या वॉक-इन करते हैं।",
      conclusion: "हमारा उद्देश्य स्पष्ट है: आपके हर रुपये का हिसाब और आपकी दुकान पर असली ग्राहकों की भीड़।"
    },
    enhancements: {
      badge: "• आपकी दुकान में क्या बदलाव आएगा",
      heading: "हम आपकी शॉप या कैफ़े के लिए क्या एनहांस करेंगे",
      subheading: "जब आप हमारे साथ जुड़ते हैं, तो आपकी दुकान की पूरी ऑनलाइन ब्रांडिंग और बिक्री का स्तर बढ़ जाता है:",
      items: [
        {
          num: "01",
          forWho: "कैफ़े व रेस्टोरेंट्स के लिए",
          title: "फूड सेंसेशन व एंबिएंस रील्स",
          desc: "हम आपके खास व्यंजनों की मेकिंग और कैफ़े के खूबसूरत माहौल की ऐसी रील्स बनाते हैं जो वीकेंड टेबल्स फुल कर दें।",
          benefit: "प्रति व्हाट्सएप टेबल इन्क्वायरी लागत मात्र ₹25 - ₹35 तक लाई जाती है।"
        },
        {
          num: "02",
          forWho: "कपड़ों व फैशन स्टोर्स के लिए",
          title: "न्यू अराइवल क्लॉथिंग शोकेस",
          desc: "ट्रेंडिंग कुर्ती, सूट, शर्ट और जींस के नए स्टॉक की ट्राय-ऑन और फैब्रिक क्वालिटी रील्स जो सीधे वॉक-इन बढ़ाएं।",
          benefit: "आस-पास के 5-8km के खरीदार सीधे व्हाट्सएप पर प्राइस पूछकर दुकान आते हैं।"
        },
        {
          num: "03",
          forWho: "प्रत्येक स्थानीय व्यापारी के लिए",
          title: "डायरेक्ट व्हाट्सएप डीप फनल",
          desc: "विज्ञापन पर क्लिक करते ही ग्राहक की चैट सीधे आपके व्हाट्सएप पर खुलती है। कोई जटिल वेबसाइट नहीं, सीधा संपर्क।",
          benefit: "ग्राहक का सीधा फोन नंबर आपकी जेब में, तुरंत डील क्लोज करने के लिए।"
        },
        {
          num: "04",
          forWho: "ईमानदार बिजनेस ओनर के लिए",
          title: "100% पारदर्शी एड स्पेंड",
          desc: "हम एड बजट में कोई कमीशन या मार्कअप नहीं जोड़ते। आपके कार्ड से सीधे फेसबुक को पेमेंट जाती है।",
          benefit: "आपका पूरा ऐड अकाउंट और कस्टमर ऑडियंस हमेशा आपकी निजी संपत्ति रहती है।"
        }
      ]
    },
    portfolio: {
      badge: "• वास्तविक काम व परिणाम",
      heading: "हमारा काम व क्लाइंट पोर्टफोलियो",
      subheading: "कैफ़े और कपड़ों के स्टोर्स के लिए किए गए हमारे लाइव काम और रील्स देखें:",
      filterAll: "सभी (All)",
      filterCafes: "कैफ़े व रेस्टोरेंट्स (Cafés)",
      filterClothing: "कपड़ों की दुकानें (Clothing Stores)",
      cases: [
        {
          id: "p-cafe-1",
          client: "Royal Heritage Café & Dine",
          category: "Cafes",
          categoryLabel: "कैफ़े व डाइनिंग",
          location: "सी-स्कीम, जयपुर",
          hook: "3-सेकंड सैंडलवुड पिज़्ज़ा व सिज़लर ASMR हुक",
          deliverables: "15 रील्स + 15 पोस्ट्स + वीकेंड टेबल एड कैंपेन",
          resultMetric: "+38 वीकेंड टेबल्स बुक",
          resultDetail: "मात्र ₹31 प्रति व्हाट्सएप टेबल इन्क्वायरी में पूरा वीकेंड हाउसफुल।",
          image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
        },
        {
          id: "p-cloth-1",
          client: "Vogue Ethnic & Casual Wear",
          category: "Clothing",
          categoryLabel: "कपड़ों का स्टोर",
          location: "वैशाली नगर, जयपुर",
          hook: "फेस्टिवल कुर्ता व पार्टी वियर न्यू कलेक्शन वॉकथ्रू",
          deliverables: "12 क्लॉथिंग रीels + 18 ऑफर पोस्ट्स + 6km रेडियस ऐड्स",
          resultMetric: "142+ वॉक-इन ग्राहक",
          resultDetail: "त्योहारी सीजन में 48 घंटे के भीतर नए कलेक्शन का 70% स्टॉक खाली।",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4"
        },
        {
          id: "p-cafe-2",
          client: "The Coffee Bean & Bakery",
          category: "Cafes",
          categoryLabel: "बेकरी व कैफ़े",
          location: "एमआई रोड, जयपुर",
          hook: "चीज़-पुल गार्लिक ब्रेड व कोल्ड ब्रू मेकिंग रील",
          deliverables: "10 फूड रील्स + मेनू कैरोसेल पोस्ट्स + लोकल ऐड्स",
          resultMetric: "68 व्हाट्सएप टेकअवे ऑर्डर्स",
          resultDetail: "शाम 5 से 9 बजे के दौरान डेली ऑर्डर्स में 2.8 गुना की वृद्धि।",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
        },
        {
          id: "p-cloth-2",
          client: "Urban Trendz Men's Apparel",
          category: "Clothing",
          categoryLabel: "मेंस वियर स्टोर",
          location: "मालवीय नगर, जयपुर",
          hook: "बैगी डेनिम व ओवरसाइज्ड टी-शर्ट फिटिंग रील",
          deliverables: "15 फैशन रील्स + वीकली ऑफर पोस्ट्स + मेटा फनल्स",
          resultMetric: "89 व्हाट्सएप कैटलॉग चैट्स",
          resultDetail: "कॉलेज स्टूडेंट्स के 8km रेडियस में ₹22 प्रति स्टोर विज़िट लीड प्राप्त।",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-keyboard-41312-large.mp4"
        }
      ]
    },
    cta: {
      badge: "• अपनी दुकान को आगे बढ़ाएं",
      heading: "कस्टमर पोर्टल में प्रवेश करें",
      desc: "हमारे एक्सक्लूसिव पैकेजेस देखने, अपना पैकेज ऑनलाइन बुक करने और अपनी रील्स की डिलीवरी ट्रैक करने के लिए लॉगिन करें या नया खाता बनाएं।",
      button: "लॉगिन व साइन अप पोर्टल खोलें →"
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित। रील्स · पोस्ट्स · मेटा एडवर्टाइजमेंट ऑपरेशंस।"
    }
  },

  en: {
    nav: {
      about: "About Us",
      powers: "Our Powers",
      enhancements: "For Your Store",
      portfolio: "Portfolio",
      loginSignUp: "Login & Sign Up",
      adminLogin: "Admin Portal"
    },
    hero: {
      badge: "REELS · POSTS · META ADS COMPLETE GROWTH PACKAGE",
      headlinePart1: "WE TURN LOCAL STORE",
      headlineHighlight: "OFFLINE FOOTFALL",
      headlinePart2: "INTO DAILY REVENUE.",
      description: "We provide complete 3-in-1 packages of 3-Second Viral Reels, High-Converting Posts, and 5-10km Hyper-Local Meta Ads for Cafés, Restaurants, and Clothing Stores. Direct WhatsApp customer footfall guaranteed.",
      exploreBtn: "Explore Portfolio & Reels ↓",
      portalBtn: "Login / Create Account →"
    },
    stats: {
      campaigns: { label: "Local Campaigns Scaled", desc: "Cafés, Clothing Stores & Local Shops" },
      experience: { label: "Ad Operations Experience", desc: "Hardcore Meta Ads & Video Production" },
      reach: { label: "Local Video Views", desc: "Engineered in 5-10km trade area" },
      rating: { label: "Client Satisfaction", desc: "100% Transparent Billing & Results" }
    },
    powers: {
      badge: "• OUR 3-IN-1 CAPABILITIES",
      heading: "COMPLETE REELS + POSTS + ADS PACKAGE",
      subheading: "Everything your local offline store needs to dominate your trade radius:",
      power1: {
        tag: "POWER 01 · 9:16 VERTICAL VIDEO",
        title: "3-Second Viral Reels Production",
        desc: "We shoot dynamic 9:16 vertical reels for café dishes and store clothing collections that force local scrollers to stop.",
        bullets: ["3-Second Psychological Pattern Interrupts", "Cinematic 4K Video & ASMR Audio", "Kinetic Subtitles & Trending Music Beats", "65%+ Video Watch-Time Retention"]
      },
      power2: {
        tag: "POWER 02 · CREATIVE GRAPHICS",
        title: "High-Converting Posts & Banners",
        desc: "High-contrast promotional banners, discount coupons, festival graphics, and menu carousels designed to drive inquiries.",
        bullets: ["Discount & Offer Carousel Posts", "Instagram Grid & Story Highlights", "Product & Clothing Catalog Showcase", "Brand Visual Identity Consistency"]
      },
      power3: {
        tag: "POWER 03 · META PERFORMANCE ADS",
        title: "5-10km Hyper-Local Advertising",
        desc: "We geofence your exact 5-10km radius. Only people living within 15 minutes of your store see your ad, routing directly to WhatsApp.",
        bullets: ["Pinpoint 5-10km Local Radius Geofencing", "Direct WhatsApp Customer Inquiry Flow", "100% On Client's Own Card (Zero Markup)", "Daily 24h Telemetry Optimization"]
      },
      digitalMarketingBonus: {
        title: "Full Digital Marketing Ecosystem",
        desc: "Meta Pixel & CAPI setup, Google Business Profile local SEO optimization, and audience retargeting funnels."
      }
    },
    motive: {
      badge: "• OUR MISSION & PHILOSOPHY",
      heading: "Ending the 'Boost Post' Trap for Local Shop Owners",
      story: "Over the last 2-3 years, we saw local café and clothing store owners burn thousands of rupees pressing the blue 'Boost' button on Instagram. The result? Fake likes, bot comments, and zero paying walk-in customers.",
      boostTrapTitle: "❌ The Reality of 'Boost Post':",
      boostTrapDesc: "It only shows ads to idle scrollers who double-tap from hundreds of miles away and never step into your store.",
      ourSolutionTitle: "✓ Our Performance System:",
      ourSolutionDesc: "We only target real local buyers living within a 15-minute drive of your shop, driving direct chats into your WhatsApp inbox.",
      conclusion: "Our mission is simple: Total accountability for every rupee of ad spend and real daily footfall in your shop."
    },
    enhancements: {
      badge: "• VALUE DELIVERED TO YOUR BUSINESS",
      heading: "What We Bring to Your Shop or Café",
      subheading: "When you partner with us, your store's online branding and sales conversions are elevated to the next tier:",
      items: [
        {
          num: "01",
          forWho: "For Cafés & Restaurants",
          title: "Sensory Food & Ambience Reels",
          desc: "We shoot mouthwatering ASMR prep reels and romantic ambience tours that fill your weekend tables in advance.",
          benefit: "Brings cost per WhatsApp table booking down to ₹25 - ₹35."
        },
        {
          num: "02",
          forWho: "For Clothing & Fashion Stores",
          title: "New Arrival Clothing Showcases",
          desc: "Try-on showcases and fabric quality closeups for suits, kurtis, denim, and festival wear that bring immediate store walk-ins.",
          benefit: "Local shoppers directly ask for pricing on WhatsApp and walk into your store."
        },
        {
          num: "03",
          forWho: "For Every Local Business Owner",
          title: "Direct WhatsApp Deep Funnel",
          desc: "Tapping the ad immediately opens a pre-filled WhatsApp conversation with your sales team. No abandoned websites.",
          benefit: "Direct customer phone numbers in your phone, ready for quick closing."
        },
        {
          num: "04",
          forWho: "For Ethical Business Owners",
          title: "100% Transparent Ad Card Billing",
          desc: "We never take commission or markup on ad budgets. You pay Meta directly on your card with live 24h telemetry.",
          benefit: "You retain permanent ownership of your customer audience and pixel data."
        }
      ]
    },
    portfolio: {
      badge: "• DOCUMENTED LOCAL DELIVERIES",
      heading: "Our Work & Client Portfolio",
      subheading: "Explore real work and reels delivered for cafés and clothing stores:",
      filterAll: "All",
      filterCafes: "Cafés & Dining",
      filterClothing: "Clothing Stores",
      cases: [
        {
          id: "p-cafe-1",
          client: "Royal Heritage Café & Dine",
          category: "Cafes",
          categoryLabel: "Café & Dining",
          location: "C-Scheme, Jaipur",
          hook: "3-Sec Woodfire Sizzler & Ambience ASMR Hook",
          deliverables: "15 Reels + 15 Posts + Weekend Table Ad Campaign",
          resultMetric: "+38 Weekend Tables Booked",
          resultDetail: "Housefull weekends at ₹31 per WhatsApp table inquiry.",
          image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
        },
        {
          id: "p-cloth-1",
          client: "Vogue Ethnic & Casual Wear",
          category: "Clothing",
          categoryLabel: "Clothing Store",
          location: "Vaishali Nagar, Jaipur",
          hook: "Festive Kurta & Partywear New Collection Walkthrough",
          deliverables: "12 Clothing Reels + 18 Offer Posts + 6km Radius Ads",
          resultMetric: "142+ Walk-In Shoppers",
          resultDetail: "70% of new stock cleared within 48 hours during festive weekend.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-doing-biceps-curl-40813-large.mp4"
        },
        {
          id: "p-cafe-2",
          client: "The Coffee Bean & Bakery",
          category: "Cafes",
          categoryLabel: "Bakery & Café",
          location: "MI Road, Jaipur",
          hook: "Cheese-Pull Garlic Bread & Cold Brew Reel",
          deliverables: "10 Food Reels + Menu Carousel Posts + Local Ads",
          resultMetric: "68 WhatsApp Takeaway Orders",
          resultDetail: "2.8x increase in daily afternoon takeaway orders.",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-41527-large.mp4"
        },
        {
          id: "p-cloth-2",
          client: "Urban Trendz Men's Apparel",
          category: "Clothing",
          categoryLabel: "Men's Apparel Store",
          location: "Malviya Nagar, Jaipur",
          hook: "Baggy Denim & Oversized T-Shirt Fitting Reel",
          deliverables: "15 Fashion Reels + Weekly Offer Posts + Meta Funnels",
          resultMetric: "89 WhatsApp Catalog Chats",
          resultDetail: "Achieved ₹22 per store visit lead within 8km radius.",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-keyboard-41312-large.mp4"
        }
      ]
    },
    cta: {
      badge: "• GROW YOUR LOCAL STORE",
      heading: "Enter The Customer Portal",
      desc: "Log in or create a new client account to view our exclusive packages, book your custom plan, and track your deliverables live.",
      button: "Open Login & Sign Up Portal →"
    },
    footer: {
      rights: "All Rights Reserved. Reels · Posts · Meta Ads Performance Operations."
    }
  }
};
