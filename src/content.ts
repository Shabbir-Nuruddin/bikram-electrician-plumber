import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Bikram";
export const HOURS: Hours = [[9, 20], [9, 20], [9, 20], [9, 20], [9, 20], [9, 20], [9, 20]];
export const FLAP_IDLE = "";
export const SCENE: Scene = "spark";
export const VISIT_IMG = "/img/p8.jpg";
export const VISIT_ALT = "Ceiling star lights installed by Bikram Electrician & Plumber";
export const FALLBACK_IMG = "/img/p1.jpg";
export const ORDER: SectionKey[] = ["feature", "reviews", "map", "work", "visit"];

export const PHONE = "+917077670736";
export const PHONE_DISPLAY = "70776 70736";
export const WA = "917077670736";
export const SHOP = { lat: 28.4360753, lon: 77.0442393 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s38", "medi", "s39", "s40", "s45", "s46", "s47", "s50", "sohna", "s54"]);
export const DEFAULT_AREA = "medi";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "He was very quick and came at night, completed work. I am satisfied with his commitment.",
  "leaving you with a clean and tidy work area",
  "clearly explained the work, and completed it ahead of schedule and budget",
  "Chandler installation was smooth and perfect with highly skilled technicians",
  "Very good work in Camellias.",
  "Charged very less and reasonable.",
  "Great work , fastest response & trustable team...",
];

export const RATINGS = [
  { stars: 5, count: 52 },
  { stars: 4, count: 0 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 1 },
];

export const STATUSES = ["LIGHTS OUT", "PANEL CHECKED", "WIRED SAFE", "LIGHTS ON"];

export const FEATURE: Feature = {
  kind: "panels",
  title: { en: "Chandeliers to charging points.", hi: "झूमर से चार्जिंग पॉइंट तक।" },
  body: {
    en: "Bikram's photos read like a tour of a Golf Course Road home: the light in the hall, the panel in the utility, the charger in the basement.",
    hi: "Bikram की फ़ोटो किसी गोल्फ़ कोर्स रोड वाले घर की सैर जैसी हैं: हॉल का झूमर, यूटिलिटी का पैनल, बेसमेंट का चार्जर।",
  },
  panels: [
    { img: "/img/p1.jpg", label: { en: "Chandeliers", hi: "झूमर" }, body: { en: "Heavy fittings hung level and wired safely.", hi: "भारी फ़िटिंग सीधी टाँगी और सुरक्षित वायरिंग।" } },
    { img: "/img/p5.jpg", label: { en: "DB panels", hi: "DB पैनल" }, body: { en: "Distribution boards and changeover wiring.", hi: "डिस्ट्रीब्यूशन बोर्ड और चेंजओवर वायरिंग।" } },
    { img: "/img/p11.jpg", label: { en: "EV chargers", hi: "EV चार्जर" }, body: { en: "Wall chargers installed in basement parking.", hi: "बेसमेंट पार्किंग में वॉल चार्जर।" } },
  ],
  quote: "Chandler installation was smooth and perfect with highly skilled technicians",
};

const en = {
  banner: "Concept preview made for Bikram Electrician & Plumber by LocalLift. Not live yet.",
  brandSub: "Electrician and plumber, Sector 38",
  live: "Bikram's team, 9am to 8pm",
  shopLabel: "Bikram, Sector 38",
  call: "Call Bikram",
  callShort: "Call Bikram",
  whatsapp: "WhatsApp",
  waHello: "Hi Bikram ji, I need an electrician / plumber.",
  heroTitle: ["Lights, panels, pipes.", "Bikram's team."],
  heroProof: "4.9 stars from 53 Google reviews. Covering Sectors 38 to 46 and Medicity. 9am to 8pm daily.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "Fast when it matters.", body: "Reviewers mention a night call that got finished.", quote: REVIEWS[0] },
    { title: "Explained before he starts.", body: "You know the job and the budget up front.", quote: REVIEWS[2] },
    { title: "Left tidy.", body: "No wire offcuts, no dust trail.", quote: REVIEWS[1] },
  ],
  googleReview: "Google review",
  distTitle: "How far is Bikram's team?",
  distBody: "Pick your area. Straight-line distance from their base near Sector 38.",
  distUnit: "km from Sector 38",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi Bikram ji, I'm in ${area}. Can your team come?`,
  workTitle: "More from the job sites.",
  workBody: "Every photo here is from Bikram's own Google listing.",
  services: [
    { img: "/img/p2.jpg", title: "Chandelier fitting", body: "Hall and stairwell chandeliers." },
    { img: "/img/p8.jpg", title: "Ceiling star lights", body: "Fibre and LED ceiling effects." },
    { img: "/img/p3.jpg", title: "Changeover wiring", body: "Inverter and generator changeovers." },
    { img: "/img/p10.jpg", title: "Contactor panels", body: "Panels for pumps and heavy loads." },
    { img: "/img/p12.jpg", title: "EV charger points", body: "Dedicated circuits for car charging." },
    { img: "/img/p9.jpg", title: "Feature lighting", body: "Decorative fittings, hung and wired." },
  ],
  revTitle: "53 reviews. 52 of them five stars.",
  revTags: "",
  tags: [] as { label: string; n: number }[],
  stars: "stars",
  visitTitle: "Based near Sector 38.",
  address: "Serving Sectors 38, 39, 40, 45, 46 and Medicity, Gurugram",
  hours: "9am to 8pm, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Bikram Electrician & Plumber, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा बिक्रम इलेक्ट्रीशियन और प्लंबर के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "इलेक्ट्रीशियन और प्लंबर, सेक्टर 38",
  live: "बिक्रम की टीम, सुबह 9 से रात 8",
  shopLabel: "बिक्रम, सेक्टर 38",
  call: "बिक्रम जी को कॉल करें",
  callShort: "कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते बिक्रम जी, मुझे इलेक्ट्रीशियन / प्लंबर चाहिए।",
  heroTitle: ["लाइट, पैनल, पाइप।", "बिक्रम की टीम।"],
  heroProof: "53 गूगल रिव्यू में 4.9 स्टार। सेक्टर 38 से 46 और मेडिसिटी। रोज़ सुबह 9 से रात 8।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "ज़रूरत पर फुर्ती।", body: "ग्राहक रात की एक कॉल का ज़िक्र करते हैं जो पूरी हुई।", quote: REVIEWS[0] },
    { title: "शुरू करने से पहले समझाते हैं।", body: "काम और बजट पहले से पता।", quote: REVIEWS[2] },
    { title: "जगह साफ़।", body: "न तार के टुकड़े, न धूल।", quote: REVIEWS[1] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "बिक्रम की टीम कितनी दूर है?",
  distBody: "अपना इलाका चुनें। सेक्टर 38 के पास से सीधी दूरी।",
  distUnit: "किमी सेक्टर 38 से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते बिक्रम जी, मैं ${area} में हूँ। क्या आपकी टीम आ सकती है?`,
  workTitle: "साइट से और काम।",
  workBody: "यहाँ की हर फ़ोटो बिक्रम की अपनी गूगल लिस्टिंग से है।",
  services: [
    { img: "/img/p2.jpg", title: "झूमर फ़िटिंग", body: "हॉल और सीढ़ी के झूमर।" },
    { img: "/img/p8.jpg", title: "सीलिंग स्टार लाइट", body: "फ़ाइबर और LED सीलिंग।" },
    { img: "/img/p3.jpg", title: "चेंजओवर वायरिंग", body: "इन्वर्टर और जनरेटर चेंजओवर।" },
    { img: "/img/p10.jpg", title: "कॉन्टैक्टर पैनल", body: "पंप और भारी लोड के पैनल।" },
    { img: "/img/p12.jpg", title: "EV चार्जर पॉइंट", body: "कार चार्जिंग के लिए अलग सर्किट।" },
    { img: "/img/p9.jpg", title: "फ़ीचर लाइटिंग", body: "सजावटी फ़िटिंग, टाँगी और वायर की।" },
  ],
  revTitle: "53 रिव्यू। 52 पाँच स्टार।",
  revTags: "",
  tags: [] as { label: string; n: number }[],
  stars: "स्टार",
  visitTitle: "सेक्टर 38 के पास।",
  address: "सेक्टर 38, 39, 40, 45, 46 और मेडिसिटी, गुरुग्राम",
  hours: "सुबह 9 से रात 8, सातों दिन",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा बिक्रम इलेक्ट्रीशियन और प्लंबर, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
