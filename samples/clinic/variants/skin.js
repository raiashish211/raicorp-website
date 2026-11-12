/* SKIN variant — config.js ke upar ye values badal deta hai. Naye skin client ke liye config.js me hi ye values daal do. */
Object.assign(SITE, {
  sampleMessage: "Hi RaiCorp, I saw the skin clinic sample website. I want a website like this for my clinic.",
  notice: "Evening & Sunday consultations available · Free skin analysis on first visit this month",
  hero: { eyebrow: "Skin, hair & laser clinic in Zirakpur", title: "Clear skin, *honest advice.*", lede: "Acne, pigmentation, hair fall and laser treatments by a qualified dermatologist — with a plan that suits your skin and budget.", primary: "Book a consultation", points: ["MD dermatologist", "US-FDA approved lasers", "Evening slots till 8 pm"] },
  trust: [["MD", "dermatologist"], ["Laser", "& advanced care"], ["EMI", "on laser packages"], ["7 days", "by appointment"]],
  about: "Lumière is a dermatology clinic where every treatment starts with a skin analysis and an honest discussion of what will and won't help.",
  treatments: [
    { name: "Acne & acne scars", icon: "skin", text: "Medical treatment, peels and scar reduction.", price: "From ₹1,500", time: "30–45 min" },
    { name: "Pigmentation & melasma", icon: "sparkle", text: "Dark spots, tanning and uneven skin tone.", price: "From ₹2,000", time: "30 min" },
    { name: "Hair fall & PRP", icon: "hair", text: "Diagnosis, PRP and medical hair-loss treatment.", price: "From ₹4,000", time: "45 min" },
    { name: "Laser hair reduction", icon: "laser", text: "Long-lasting hair reduction for face and body.", price: "From ₹2,500 / session", time: "20–60 min" },
    { name: "Chemical peels", icon: "shield", text: "Glow, acne and pigmentation peels.", price: "From ₹1,800", time: "30 min" },
    { name: "Anti-ageing", icon: "heart", text: "Fine lines, skin tightening and boosters.", price: "Consultation", time: "Planned per case" },
    { name: "Hydrafacial", icon: "sparkle", text: "Deep cleansing and hydration for instant glow.", price: "From ₹3,500", time: "45 min" },
    { name: "Skin & nail infections", icon: "skin", text: "Fungal infections, eczema, psoriasis and allergies.", price: "From ₹700", time: "20 min" }
  ],
  costs: [["Consultation", "₹700", "Free skin analysis this month"], ["Chemical peel", "₹1,800 – ₹3,500", "Per session"], ["Laser hair reduction (full face)", "₹2,500 – ₹4,000", "Per session"], ["PRP for hair", "₹4,000 – ₹6,000", "Per session"], ["Laser package (6 sessions)", "₹12,000 – ₹30,000", "EMI available"]],
  costNote: "Indicative. Your plan and cost are shared after the consultation.",
  doctors: [
    { name: "Dr. Ritika Anand", role: "MBBS, MD (Dermatology)", note: "Acne, pigmentation & lasers · 10 years", photo: "", langs: "English, Hindi, Punjabi" },
    { name: "Dr. Kunal Mehra", role: "MBBS, MD (Dermatology)", note: "Hair & scalp · 7 years", photo: "", langs: "English, Hindi" }
  ],
  visit: [["Book a slot", "WhatsApp or the form. Choose a day and time."], ["Skin analysis", "Your concern, history and skin type — about 20 minutes."], ["Clear plan & cost", "Treatment options, sessions and cost — in writing."], ["Treatment & follow-up", "Sessions on time, with reminders on WhatsApp."]],
  beforeafter: { title: "Acne care results", note: "Illustration. Real before/after photos are shown only with patient consent." },
  gallery: ["Consultation room", "Laser suite", "Reception", "Procedure room", "Product corner", "Waiting lounge"],
  tips: [["Sunscreen every day", "Even indoors. It is the cheapest anti-pigmentation treatment there is."], ["Don't pop pimples", "It leaves marks that take months to fade. Get acne treated early."], ["Hair fall after illness?", "It is often temporary. A quick check-up tells you if treatment is needed."]],
  faq: [["Is laser hair reduction painful?", "Most people feel a mild snapping sensation. We use cooling to keep it comfortable."], ["How many laser sessions are needed?", "Usually 6–8, spaced 4–6 weeks apart."], ["Are the treatments safe for Indian skin?", "Yes. Settings are adjusted for your skin type by the dermatologist."], ["Do you offer EMI?", "Yes, on laser packages above ₹10,000."]]
});
SITE.tipsTitle = "Simple habits for *healthy skin.*";
SITE.treatmentsTitle = "Skin, hair & *laser care.*";
SITE.clinic = Object.assign({}, SITE.clinic, { icon: "skin", doctorWord: "dermatologist", name: "Lumière Skin & Laser Clinic", short: "Lumière", specialty: "Skin & hair clinic", tagline: "Dermatology · Hair · Laser", address: "SCO 12, VIP Road, Zirakpur, Punjab 140603", mapUrl: "https://maps.google.com/?q=VIP+Road+Zirakpur" });
SITE.sections = SITE.sections.filter(function (k) { return k !== "beforeafter"; });
SITE.theme = Object.assign({}, SITE.theme, { primary: "#5B2E4A", accent: "#C46A8F", warm: "#E9B872" });
