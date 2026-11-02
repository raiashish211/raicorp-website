/* =====================================================================
   PRINTING & SIGNAGE WEBSITE — POORI SITE SIRF IS FILE SE CHALTI HAI
   Naya client: ye folder copy karo → sirf ye file badlo. Code chhune ki zarurat nahi.

   tier:  "basic"    -> 1 page: hero, services list, why us, contact            (₹4,999)
          "business" -> + catalog with prices, process, work gallery, FAQ, form   (₹7,999)
          "premium"  -> + instant price estimator, gallery filters, industries,
                          animated sign board, sticky mobile bar, ticker         (₹11,999)
   (basic/, business/, premium/ folders same config ko alag tier pe dikhate hain)

   Images: apni files img/ folder me daalo aur path likho, jaise image: "img/shop-front.jpg".
   Image khaali chhodoge to site khud brand colors me illustration bana degi.
   ===================================================================== */
window.SITE = {
  tier: "premium",
  sample: true,                       // true = upar "Sample website by RaiCorp" patti. Client ke liye false.
  agencyUrl: "https://raicorp.in",

  business: {
    name: "Inkline Prints & Signs",
    signText: "INKLINE",              // board pe jo bada naam chamakta hai
    tagline: "Printing · Signage · Branding",
    logo: "",                         // "img/logo.png" — khaali = auto logo
    city: "Faridabad",
    address: "Shop 14, Main Market, Sector 16, Faridabad, Haryana",
    mapUrl: "https://maps.google.com/?q=Sector+16+Faridabad",
    phone: "+91 95829 27207",
    whatsapp: "919582927207",         // 91 + number, bina + aur space
    email: "orders@example.com",
    hours: "Mon–Sat 9:30 am – 8:30 pm · Sun 11 am – 4 pm",
    since: "2011",
    gst: "",                          // "06ABCDE1234F1Z5" — khaali = nahi dikhega
    areas: "Faridabad · Palwal · South Delhi · Gurugram"
  },
  // sample:true hone pe saare WhatsApp buttons ye message bhejte hain
  sampleMessage: "Hi RaiCorp, I saw the printing & signage sample website. I want a website like this for my shop.",

  theme: {
    ink: "#0E0F13",                   // dark base (hero, footer)
    paper: "#F3F3F1",                 // page background
    surface: "#FFFFFF",
    accent: "#E6007E",                // main brand color (buttons, highlights)
    cyan: "#00A0E3",                  // CMYK set — print feel ke liye
    yellow: "#FFD200",
    glow: "#FF4FB0",                  // sign board ki LED glow
    display: "'Archivo', 'Arial Narrow', system-ui, sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
    fonts: "family=Archivo:wdth,wght@112..125,600..900&family=DM+Sans:wght@400;500;600;700"
  },

  // Sections ka order. Kisi ko hatana ho to line hata do. Har section apne tier se upar hi dikhta hai.
  sections: ["topbar", "header", "hero", "ticker", "stats", "services", "estimator", "process", "work", "industries", "why", "reviews", "faq", "cta", "contact", "footer"],

  hero: {
    eyebrow: "Printing & signage studio · Faridabad",
    title: "Print that gets *noticed.*",
    lede: "Visiting cards, flex banners, LED sign boards and complete shop branding — designed, printed and installed by one team. Most print jobs ready in 24 hours.",
    primary: "Get a quote on WhatsApp",
    secondary: ["See our work", "#work"],
    points: ["Free design help", "24-hour printing", "Installation included"]
  },

  ticker: ["Visiting cards", "Flex banners", "LED glow boards", "ACP cladding", "Acrylic 3D letters", "Neon signs", "Standees", "Vinyl stickers", "Vehicle branding", "Letterheads", "Brochures", "Wedding cards"],

  stats: [["15+", "years in print"], ["24 hr", "card & flex delivery"], ["2,500+", "boards installed"], ["4.8★", "Google rating"]],
  statsNote: "Sample figures — replace with the shop's real numbers.",

  /* Products / services. unit: "sqft" (rate per sq ft, size in feet) | "pcs" (qty slabs) | "inch" (3D letters per inch height per letter)
     from: card pe "Starting ₹..." text. art: illustration type (card, sign, flex, standee, letters, neon, sticker, stationery, vehicle, acp, brochure, gift) */
  categories: [["all", "All"], ["print", "Printing"], ["signage", "Sign boards"], ["branding", "Branding"]],
  products: [
    // pehla product price-check me default khulta hai
    { id: "cards", cat: "print", name: "Visiting cards", desc: "300–400 GSM, matte, gloss, velvet or spot UV finish.", from: "₹349 / 100", art: "card", image: "",
      unit: "pcs", slabs: [[100, 3.5], [500, 1.6], [1000, 1.1]] },
    { id: "flex", cat: "print", name: "Flex banners", desc: "Star & backlit flex with eyelets, for shops, events and hoardings.", from: "₹14 / sq ft", art: "flex", image: "",
      unit: "sqft", rate: 14, min: 300 },
    { id: "glow", cat: "signage", name: "LED glow sign boards", desc: "Backlit boxes that stay bright and readable all night.", from: "₹550 / sq ft", art: "sign", image: "",
      unit: "sqft", rate: 550, min: 4500 },
    { id: "acp", cat: "signage", name: "ACP shop front", desc: "Aluminium composite cladding with LED letters — premium, weatherproof.", from: "₹650 / sq ft", art: "acp", image: "",
      unit: "sqft", rate: 650, min: 9000 },
    { id: "letters", cat: "signage", name: "Acrylic 3D letters", desc: "Raised letters with optional LED backlight for reception and fronts.", from: "₹90 / inch", art: "letters", image: "",
      unit: "inch", rate: 90, min: 2500 },
    { id: "neon", cat: "signage", name: "Neon signs", desc: "Custom LED neon for cafés, salons, events and selfie walls.", from: "₹3,500", art: "neon", image: "",
      unit: "pcs", slabs: [[1, 3500]] },
    { id: "standee", cat: "branding", name: "Standees & roll-ups", desc: "Roll-up and X-banner standees with carry bag.", from: "₹1,200", art: "standee", image: "",
      unit: "pcs", slabs: [[1, 1200], [5, 1050], [10, 950]] },
    { id: "stickers", cat: "print", name: "Vinyl stickers & labels", desc: "Die-cut stickers, product labels and window graphics.", from: "₹2 / pc", art: "sticker", image: "",
      unit: "pcs", slabs: [[100, 6], [500, 3], [1000, 2]] },
    { id: "stationery", cat: "print", name: "Letterheads & bills", desc: "Letterheads, bill books, envelopes and ID cards.", from: "₹1.5 / pc", art: "stationery", image: "",
      unit: "pcs", slabs: [[500, 2.5], [1000, 1.8], [5000, 1.5]] },
    { id: "vehicle", cat: "branding", name: "Vehicle branding", desc: "Cars, vans and e-rickshaw wraps that advertise every trip.", from: "₹4,500", art: "vehicle", image: "",
      unit: "pcs", slabs: [[1, 4500]] },
    { id: "brochures", cat: "print", name: "Pamphlets & brochures", desc: "Flyers, menus and tri-fold brochures in bulk.", from: "₹1 / pc", art: "brochure", image: "",
      unit: "pcs", slabs: [[1000, 1.6], [5000, 1.1], [10000, 0.9]] },
    { id: "gifts", cat: "branding", name: "Corporate gifting", desc: "Printed mugs, diaries, T-shirts and welcome kits.", from: "₹180 / pc", art: "gift", image: "",
      unit: "pcs", slabs: [[10, 260], [50, 210], [100, 180]] }
  ],
  estimatorNote: "Indicative prices. Final quote depends on material, design and installation height.",

  process: [
    ["Share your idea", "Send size, text and a reference photo on WhatsApp — or just visit the shop."],
    ["Free design proof", "We send a digital proof within a few hours. Two rounds of changes included."],
    ["Print & fabricate", "Printed in-house on our own machines, checked before dispatch."],
    ["Deliver & install", "Doorstep delivery, and fitting at your shop by our own team."]
  ],

  /* Work gallery — image: "img/work-1.jpg" lagao. Khaali = illustration. */
  work: [
    { title: "Café front with neon", cat: "signage", art: "neon", image: "" },
    { title: "Clinic glow board", cat: "signage", art: "sign", image: "" },
    { title: "Wedding cards — gold foil", cat: "print", art: "stationery", image: "" },
    { title: "Showroom ACP elevation", cat: "signage", art: "acp", image: "" },
    { title: "Real-estate hoarding", cat: "print", art: "flex", image: "" },
    { title: "Startup welcome kits", cat: "branding", art: "gift", image: "" },
    { title: "Delivery van wrap", cat: "branding", art: "vehicle", image: "" },
    { title: "Premium visiting cards", cat: "print", art: "card", image: "" }
  ],

  industries: ["Shops & showrooms", "Clinics & hospitals", "Schools & coaching", "Restaurants & cafés", "Real estate", "Corporate offices", "Events & weddings", "Political & NGO"],

  why: [
    ["In-house machines", "Printing and fabrication under one roof — no middlemen, no delays."],
    ["Design included", "Our designers set your file right, free with every order."],
    ["Fitted by our team", "Boards installed safely with proper wiring and fixtures."],
    ["Bulk & corporate rates", "Better pricing for repeat orders and multiple branches."]
  ],

  reviews: { title: "Loved by local businesses", note: "The shop's real Google reviews appear here." },

  faq: [
    ["How fast can you print visiting cards?", "Standard cards are ready in 24 hours. Premium finishes take 2–3 days."],
    ["Do you design the artwork too?", "Yes. Basic design is free with every order. Logo and full branding are quoted separately."],
    ["Do you install sign boards?", "Yes, our team installs boards across the city. Height and wiring may change the final price."],
    ["Can I send my own design?", "Yes. Send a PDF, CDR or high-resolution image on WhatsApp or email."],
    ["Do you give GST bills?", "Yes, GST invoices are provided for all business orders."]
  ],

  cta: { title: "Your shop deserves a *better board.*", text: "Send a photo of your shop front. Get a free design mock-up on WhatsApp today." },

  contactForm: ["Your name", "Phone number", "What do you need?", "Size / quantity"],

  footerNote: "Printing · Signage · Branding"
};
