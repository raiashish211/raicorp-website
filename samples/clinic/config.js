/* =====================================================================
   RAICORP CLINIC KIT — POORI WEBSITE SIRF IS FILE SE CHALTI HAI
   Naya clinic: ye folder copy karo → sirf ye file badlo.

   tier:  "basic"    -> 1 page: hero, about, treatments, doctor, timings, map, call/WhatsApp, enquiry form
          "advanced" -> + multiple doctors, treatment details & prices, first-visit guide, clinic gallery,
                          FAQ, reviews + "Rate us" QR, enquiry tracking (email/Google Sheet), mobile action bar
          "pro"      -> + appointment request with date & time slot, cost guide with EMI, before/after
                          slider, patient tips, announcement bar, video-consult option
   basic/, advanced/, pro/ folders demo ke liye hain (same config, alag tier).

   PRIVACY: form sirf naam, phone, treatment aur time leta hai. Medical reports / history kabhi mat maango.
   ===================================================================== */
window.SITE = {
  tier: "pro",
  sample: true,                       // true = "Sample website by RaiCorp" patti + WhatsApp RaiCorp ko jata hai
  agencyUrl: "https://raicorp.in",
  sampleMessage: "Hi RaiCorp, I saw the clinic sample website. I want a website like this for my clinic.",

  clinic: {
    name: "Pearl Smile Dental Studio",
    short: "Pearl Smile",
    specialty: "Dental clinic",
    icon: "tooth",                                      // logo/hero icon: tooth, spine, skin, heart ...
    doctorWord: "dentist",                              // basic plan heading: "Meet your dentist"                         // "Skin & hair clinic", "Physiotherapy clinic" ...
    tagline: "Family & cosmetic dentistry",
    logo: "",                                           // "img/logo.png" — khaali = auto logo
    city: "Mohali",
    address: "SCO 21, Sector 70, Mohali, Punjab 160071",
    mapUrl: "https://maps.google.com/?q=Sector+70+Mohali",
    phone: "+91 70151 73249",
    whatsapp: "917015173249",                           // 91 + number
    email: "frontdesk@example.com",
    hours: [["Mon – Sat", "10:00 am – 2:00 pm, 5:00 pm – 8:30 pm"], ["Sunday", "By appointment"]],
    reviewUrl: "https://www.google.com/maps",           // clinic ka Google review link (g.page/r/.../review)
    registration: "",                                   // e.g. "Reg. No. PDC/1234" — khaali = nahi dikhega
    established: "2014"
  },

  // ENQUIRY TRACKING: formEndpoint me Formspree ya Google Apps Script URL daalo → har enquiry email/Sheet me save.
  // Khaali = enquiry seedha clinic ke WhatsApp pe jati hai (koi data store nahi hota).
  formEndpoint: "",

  theme: {
    primary: "#0E4F5A",                 // main color (header, buttons)
    accent: "#2FB4A6",                  // highlights
    warm: "#F2B544",                    // small highlights, stars
    ink: "#10262B",
    paper: "#F5F8F8",
    display: "'Fraunces', Georgia, serif",
    body: "'Figtree', system-ui, sans-serif",
    fonts: "family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Figtree:wght@400;500;600;700"
  },

  sections: ["notice", "header", "hero", "trust", "treatments", "costs", "doctors", "visit", "beforeafter", "gallery", "reviews", "appointment", "tips", "faq", "contact", "footer"],

  notice: "Now open on Sundays by appointment · Free first consultation this month",

  hero: {
    eyebrow: "Dental clinic in Sector 70, Mohali",
    title: "Gentle dental care, *on time.*",
    lede: "Painless root canals, implants, aligners and family dentistry — explained clearly before we start, with prices you know upfront.",
    primary: "Book an appointment",
    points: ["Sterilised, single-use kits", "Digital X-ray on site", "Evening slots till 8:30 pm"]
  },

  trust: [["10+ years", "of practice"], ["Digital", "X-ray & records"], ["EMI", "on implants & aligners"], ["6 days", "a week"]],
  trustNote: "Sample figures — replace with the clinic's real details.",

  about: "Pearl Smile is a family dental clinic where every treatment is planned with you on screen — so you know the cost, time and options before we begin.",

  /* Treatments. price = "From ₹..." (advanced/pro me dikhta). icon: tooth, implant, braces, sparkle, child, shield, root, crown, skin, laser, hair, spine, knee, hand, heart */
  treatments: [
    { name: "Root canal treatment", icon: "root", text: "Single-sitting RCT with rotary instruments and local anaesthesia.", price: "From ₹3,500", time: "45–60 min" },
    { name: "Dental implants", icon: "implant", text: "Fixed replacement for missing teeth with a written warranty.", price: "From ₹22,000", time: "2–3 visits" },
    { name: "Braces & clear aligners", icon: "braces", text: "Metal, ceramic and clear aligners for teens and adults.", price: "From ₹30,000", time: "12–18 months" },
    { name: "Teeth whitening", icon: "sparkle", text: "In-clinic whitening, several shades brighter in one visit.", price: "From ₹6,000", time: "1 visit" },
    { name: "Crowns & bridges", icon: "crown", text: "Zirconia and metal-free crowns matched to your natural teeth.", price: "From ₹5,000", time: "2 visits" },
    { name: "Kids dentistry", icon: "child", text: "Fillings, fluoride and habit care in a calm, child-friendly room.", price: "From ₹800", time: "30 min" },
    { name: "Scaling & cleaning", icon: "shield", text: "Remove tartar and stains. Recommended every six months.", price: "From ₹1,200", time: "30–40 min" },
    { name: "Smile makeover", icon: "tooth", text: "Veneers, contouring and whitening planned together.", price: "Consultation", time: "Planned per case" }
  ],

  // Cost guide (pro). Sirf indicative — final quote check-up ke baad.
  costs: [
    ["Consultation", "₹300", "Free on first visit this month"],
    ["Digital X-ray (IOPA)", "₹250", ""],
    ["Tooth-coloured filling", "₹1,200 – ₹2,000", "Per tooth"],
    ["Root canal + crown", "₹8,500 – ₹14,000", "EMI available"],
    ["Single implant with crown", "₹22,000 – ₹38,000", "EMI available"],
    ["Clear aligners (full)", "₹65,000 – ₹1,40,000", "EMI available"]
  ],
  costNote: "Indicative ranges. Your exact cost is shared in writing after the check-up.",

  doctors: [
    { name: "Dr. Kavya Malhotra", role: "BDS, MDS (Prosthodontics)", note: "Implants & smile design · 12 years", photo: "", langs: "English, Hindi, Punjabi" },
    { name: "Dr. Arjun Sethi", role: "BDS, MDS (Orthodontics)", note: "Braces & clear aligners · 9 years", photo: "", langs: "English, Hindi" },
    { name: "Dr. Neha Bains", role: "BDS, MDS (Pedodontics)", note: "Kids dentistry · Visiting Tue & Sat", photo: "", langs: "English, Hindi, Punjabi" }
  ],

  visit: [
    ["Book a slot", "WhatsApp or the form below. We confirm within working hours."],
    ["Check-up & X-ray", "A 15-minute exam and digital X-ray if needed."],
    ["Clear plan & cost", "Options, number of visits and cost — in writing."],
    ["Treatment & follow-up", "On-time appointments and reminders on WhatsApp."]
  ],

  beforeafter: { title: "Smile makeover", note: "Illustration. Real before/after photos are shown only with patient consent." },

  gallery: ["Reception", "Treatment room", "Digital X-ray", "Sterilisation area", "Kids corner", "Waiting lounge"],
  // Real photos: gallery: [{ label: "Reception", image: "img/reception.jpg" }, ...]

  reviewsTitle: "What patients say",
  tipsTitle: "Small things that *save teeth.*",

  appointment: {
    days: 7,                             // aage kitne din dikhane hain
    closed: [0],                         // 0 = Sunday band (sirf by appointment)
    slots: ["10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm"],
    note: "This is an appointment request. The clinic confirms the final time on WhatsApp or call."
  },

  tips: [
    ["Bleeding gums while brushing?", "It is often the first sign of gum disease and is easy to treat early. Book a cleaning if it lasts more than a week."],
    ["Root canal is not painful anymore", "With modern anaesthesia most patients feel only mild pressure, similar to a filling."],
    ["When should kids first see a dentist?", "By their first birthday, or when the first tooth appears."]
  ],

  faq: [
    ["Do I need an appointment?", "Walk-ins are welcome, but booking means you will not wait."],
    ["Is root canal treatment painful?", "With local anaesthesia most patients feel only mild pressure. We check comfort at every step."],
    ["Do you offer EMI?", "Yes, for implants, braces and aligners above ₹20,000."],
    ["Do you treat children?", "Yes, from age three, in a separate kid-friendly room."],
    ["Is parking available?", "Yes, there is free parking in front of the clinic."]
  ]
};
