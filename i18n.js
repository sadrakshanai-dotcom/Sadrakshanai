/**
 * i18n.js — Sadrakshan.AI
 * Language translation object + toggle logic
 * Supports: English (en), Hindi (hi), Marathi (mr)
 *
 * HOW TO USE:
 * 1. Add this script to the <head> of every page:
 *    <script src="i18n.js"></script>
 * 2. Mark every translatable element with a data-i18n attribute:
 *    <h1 data-i18n="home.hero.title">Strengthening Investigation, Station by Station</h1>
 * 3. Mark input placeholders with data-i18n-placeholder:
 *    <input data-i18n-placeholder="nav.search" placeholder="Search articles..." />
 * 4. Add the language switcher nav HTML (see nav-update.html) to each page.
 */

const translations = {

  en: {
    // ── NAVIGATION ──
    "nav.home":           "Home",
    "nav.blog":           "Articles",
    "nav.blog.goodwork":  "Good Work by SP / Commissionerate",
    "nav.blog.casestudy": "Case Studies",
    "nav.blog.public":    "Public Informative Articles",
    "nav.about":          "About",
    "nav.login":          "Login",
    "nav.myaccount":      "My Account",
    "nav.logout":         "Logout",
    "nav.search":         "Search articles...",
    "nav.admin":          "Admin Panel",

    // ── HOME PAGE ──
    "home.hero.title":    "Strengthening Investigation, Station by Station",
    "home.hero.subtitle": "A knowledge platform built by Maharashtra Police for officers, researchers, and the people we serve.",
    "home.hero.cta":      "Read Latest Articles",
    "home.hero.cta2":     "About This Platform",

    "home.categories.title":    "What You'll Find Here",
    "home.cat.goodwork.title":  "Good Work by SP / Commissionerate",
    "home.cat.goodwork.desc":   "Real initiatives, real results — documented so other districts can learn and replicate.",
    "home.cat.casestudy.title": "Case Studies",
    "home.cat.casestudy.desc":  "How investigations were conducted, what worked, what didn't — lessons from the field.",
    "home.cat.public.title":    "For the Public",
    "home.cat.public.desc":     "Understand your rights, how an FIR works, what the police can and cannot do — in plain language.",

    "home.newsletter.title":   "Stay Informed",
    "home.newsletter.desc":    "Get important updates from Sadrakshan.AI directly in your inbox. No spam. No marketing. Just relevant policing knowledge.",
    "home.newsletter.fname":   "First Name",
    "home.newsletter.email":   "Email Address",
    "home.newsletter.btn":     "Subscribe",
    "home.newsletter.success": "You're subscribed. Expect updates from Sadrakshan.AI in your inbox.",

    // ── BLOG PAGE ──
    "blog.title":         "Articles",
    "blog.filter.all":    "All",
    "blog.filter.good":   "Good Work",
    "blog.filter.case":   "Case Studies",
    "blog.filter.public": "Public Articles",
    "blog.search":        "Search by keyword...",
    "blog.readmore":      "Read More →",
    "blog.noresults":     "No articles match your search. Try different keywords.",
    "blog.prev":          "← Previous",
    "blog.next":          "Next →",

    // ── POST PAGE ──
    "post.share.whatsapp": "Share on WhatsApp",
    "post.share.twitter":  "Share on X",
    "post.share.copy":     "Copy Link",
    "post.share.copied":   "Link copied!",
    "post.related":        "Related Articles",
    "post.back":           "← Back to Articles",
    "post.by":             "By",

    // ── LOGIN PAGE ──
    "login.tab.login":    "Login",
    "login.tab.signup":   "Register",
    "login.email":        "Email Address",
    "login.password":     "Password",
    "login.btn":          "Login to Sadrakshan.AI",
    "login.google":       "Continue with Google",
    "login.name":         "Full Name",
    "login.mobile":       "Mobile Number",
    "login.designation":  "Designation",
    "login.district":     "District",
    "login.state":        "State",
    "login.signup.btn":   "Create My Account",

    // ── ABOUT PAGE ──
    "about.title":        "About Sadrakshan.AI",
    "about.subtitle":     "Why this platform exists and who built it.",

    // ── FOOTER ──
    "footer.tagline":     "A Maharashtra Police initiative for better policing and public trust.",
    "footer.links":       "Quick Links",
    "footer.rights":      "Maharashtra Police. All rights reserved.",
  },

  hi: {
    // ── NAVIGATION ──
    "nav.home":           "होम",
    "nav.blog":           "लेख",
    "nav.blog.goodwork":  "SP/कमिश्नरेट का अच्छा काम",
    "nav.blog.casestudy": "केस अध्ययन",
    "nav.blog.public":    "जनता के लिए जानकारी",
    "nav.about":          "हमारे बारे में",
    "nav.login":          "लॉगिन",
    "nav.myaccount":      "मेरा खाता",
    "nav.logout":         "लॉग आउट",
    "nav.search":         "लेख खोजें...",
    "nav.admin":          "एडमिन पैनल",

    // ── HOME PAGE ──
    "home.hero.title":    "जाँच को मज़बूत बनाएं, एक थाने से दूसरे थाने तक",
    "home.hero.subtitle": "महाराष्ट्र पुलिस द्वारा अधिकारियों, शोधकर्ताओं और जनता के लिए बनाया गया ज्ञान मंच।",
    "home.hero.cta":      "ताज़े लेख पढ़ें",
    "home.hero.cta2":     "इस मंच के बारे में",

    "home.categories.title":    "यहाँ क्या मिलेगा",
    "home.cat.goodwork.title":  "SP/कमिश्नरेट का अच्छा काम",
    "home.cat.goodwork.desc":   "असली पहल, असली नतीजे — ताकि दूसरे जिले सीख सकें।",
    "home.cat.casestudy.title": "केस अध्ययन",
    "home.cat.casestudy.desc":  "जाँच कैसे हुई, क्या काम किया, क्या नहीं — मैदान से सबक।",
    "home.cat.public.title":    "जनता के लिए",
    "home.cat.public.desc":     "अपने अधिकार समझें, FIR कैसे दर्ज होती है, पुलिस क्या कर सकती है — सरल भाषा में।",

    "home.newsletter.title":   "जुड़े रहें",
    "home.newsletter.desc":    "Sadrakshan.AI के अपडेट सीधे अपने इनबॉक्स में पाएं।",
    "home.newsletter.fname":   "पहला नाम",
    "home.newsletter.email":   "ईमेल पता",
    "home.newsletter.btn":     "सब्सक्राइब करें",
    "home.newsletter.success": "आप सब्सक्राइब हो गए। Sadrakshan.AI के अपडेट आपके इनबॉक्स में आएंगे।",

    // ── BLOG PAGE ──
    "blog.title":         "लेख",
    "blog.filter.all":    "सभी",
    "blog.filter.good":   "अच्छा काम",
    "blog.filter.case":   "केस अध्ययन",
    "blog.filter.public": "जनता के लेख",
    "blog.search":        "कीवर्ड से खोजें...",
    "blog.readmore":      "और पढ़ें →",
    "blog.noresults":     "कोई लेख नहीं मिला। अलग कीवर्ड आज़माएं।",
    "blog.prev":          "← पिछला",
    "blog.next":          "अगला →",

    // ── POST PAGE ──
    "post.share.whatsapp": "WhatsApp पर शेयर करें",
    "post.share.twitter":  "X पर शेयर करें",
    "post.share.copy":     "लिंक कॉपी करें",
    "post.share.copied":   "लिंक कॉपी हुआ!",
    "post.related":        "संबंधित लेख",
    "post.back":           "← लेखों पर वापस",
    "post.by":             "लेखक",

    // ── LOGIN PAGE ──
    "login.tab.login":    "लॉगिन",
    "login.tab.signup":   "रजिस्टर",
    "login.email":        "ईमेल पता",
    "login.password":     "पासवर्ड",
    "login.btn":          "Sadrakshan.AI में लॉगिन करें",
    "login.google":       "Google से जारी रखें",
    "login.name":         "पूरा नाम",
    "login.mobile":       "मोबाइल नंबर",
    "login.designation":  "पद",
    "login.district":     "जिला",
    "login.state":        "राज्य",
    "login.signup.btn":   "मेरा खाता बनाएं",

    "about.title":        "Sadrakshan.AI के बारे में",
    "about.subtitle":     "यह मंच क्यों बना और किसने बनाया।",

    "footer.tagline":     "बेहतर पुलिसिंग और जन-विश्वास के लिए महाराष्ट्र पुलिस की पहल।",
    "footer.links":       "त्वरित लिंक",
    "footer.rights":      "महाराष्ट्र पुलिस। सर्वाधिकार सुरक्षित।",
  },

  mr: {
    // ── NAVIGATION ──
    "nav.home":           "मुख्यपृष्ठ",
    "nav.blog":           "लेख",
    "nav.blog.goodwork":  "SP/आयुक्तालयाचे चांगले काम",
    "nav.blog.casestudy": "प्रकरण अभ्यास",
    "nav.blog.public":    "जनतेसाठी माहिती",
    "nav.about":          "आमच्याबद्दल",
    "nav.login":          "लॉगिन",
    "nav.myaccount":      "माझे खाते",
    "nav.logout":         "लॉग आउट",
    "nav.search":         "लेख शोधा...",
    "nav.admin":          "प्रशासक पॅनेल",

    // ── HOME PAGE ──
    "home.hero.title":    "तपासणी बळकट करा, एका ठाण्यातून दुसऱ्या ठाण्यात",
    "home.hero.subtitle": "महाराष्ट्र पोलिसांनी अधिकारी, संशोधक आणि जनतेसाठी तयार केलेले ज्ञान व्यासपीठ।",
    "home.hero.cta":      "ताजे लेख वाचा",
    "home.hero.cta2":     "या व्यासपीठाबद्दल",

    "home.categories.title":    "येथे काय मिळेल",
    "home.cat.goodwork.title":  "SP/आयुक्तालयाचे चांगले काम",
    "home.cat.goodwork.desc":   "खऱ्या उपक्रमांचे खरे परिणाम — इतर जिल्हे शिकू शकतात म्हणून नोंदवलेले।",
    "home.cat.casestudy.title": "प्रकरण अभ्यास",
    "home.cat.casestudy.desc":  "तपासणी कशी झाली, काय चाललं, काय नाही — क्षेत्रातील धडे.",
    "home.cat.public.title":    "जनतेसाठी",
    "home.cat.public.desc":     "तुमचे हक्क समजून घ्या, FIR कशी दाखल होते, पोलीस काय करू शकतात — साध्या भाषेत.",

    "home.newsletter.title":   "माहितीत राहा",
    "home.newsletter.desc":    "Sadrakshan.AI चे अपडेट थेट तुमच्या इनबॉक्समध्ये मिळवा.",
    "home.newsletter.fname":   "पहिले नाव",
    "home.newsletter.email":   "ईमेल पत्ता",
    "home.newsletter.btn":     "सदस्य व्हा",
    "home.newsletter.success": "तुम्ही सदस्य झालात. Sadrakshan.AI चे अपडेट तुमच्या इनबॉक्समध्ये येतील.",

    // ── BLOG PAGE ──
    "blog.title":         "लेख",
    "blog.filter.all":    "सर्व",
    "blog.filter.good":   "चांगले काम",
    "blog.filter.case":   "प्रकरण अभ्यास",
    "blog.filter.public": "जनता लेख",
    "blog.search":        "कीवर्डने शोधा...",
    "blog.readmore":      "अधिक वाचा →",
    "blog.noresults":     "कोणताही लेख आढळला नाही. वेगळा कीवर्ड वापरा.",
    "blog.prev":          "← मागील",
    "blog.next":          "पुढील →",

    // ── POST PAGE ──
    "post.share.whatsapp": "WhatsApp वर शेअर करा",
    "post.share.twitter":  "X वर शेअर करा",
    "post.share.copy":     "लिंक कॉपी करा",
    "post.share.copied":   "लिंक कॉपी झाली!",
    "post.related":        "संबंधित लेख",
    "post.back":           "← लेखांवर परत",
    "post.by":             "लेखक",

    // ── LOGIN PAGE ──
    "login.tab.login":    "लॉगिन",
    "login.tab.signup":   "नोंदणी",
    "login.email":        "ईमेल पत्ता",
    "login.password":     "पासवर्ड",
    "login.btn":          "Sadrakshan.AI मध्ये लॉगिन करा",
    "login.google":       "Google सह सुरू ठेवा",
    "login.name":         "पूर्ण नाव",
    "login.mobile":       "मोबाइल नंबर",
    "login.designation":  "पद",
    "login.district":     "जिल्हा",
    "login.state":        "राज्य",
    "login.signup.btn":   "माझे खाते तयार करा",

    "about.title":        "Sadrakshan.AI बद्दल",
    "about.subtitle":     "हे व्यासपीठ का तयार केले आणि कोणी तयार केले.",

    "footer.tagline":     "चांगल्या पोलिसिंग आणि जनविश्वासासाठी महाराष्ट्र पोलिसांचा उपक्रम.",
    "footer.links":       "द्रुत दुवे",
    "footer.rights":      "महाराष्ट्र पोलीस. सर्व हक्क राखीव.",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// CORE i18n ENGINE
// ─────────────────────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['en', 'hi', 'mr'];
const DEFAULT_LANG    = 'en';

function getLang() {
  const stored = localStorage.getItem('sai_lang');
  return SUPPORTED_LANGS.includes(stored) ? stored : DEFAULT_LANG;
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem('sai_lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;

  // Fire GA4 event
  if (typeof trackLanguageSwitch === 'function') {
    trackLanguageSwitch(lang);
  }
}

function t(key, lang) {
  const l = lang || getLang();
  return (translations[l] && translations[l][key]) || (translations[DEFAULT_LANG][key]) || key;
}

function applyTranslations(lang) {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key, lang);
  });
  // Placeholder text
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key, lang);
  });
  // HTML content (for rich text nodes)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key, lang);
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    btn.classList.toggle('active', btnLang === lang);
  });
}

// Auto-apply on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;
});

// Expose globally
window.setLang = setLang;
window.getLang = getLang;
window.t       = t;
