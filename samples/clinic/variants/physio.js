/* PHYSIO variant — config.js ke upar ye values badal deta hai. Naye physio client ke liye config.js me hi ye values daal do. */
Object.assign(SITE, {
  sampleMessage: "Hi RaiCorp, I saw the physiotherapy clinic sample website. I want a website like this for my clinic.",
  notice: "Home visits available across Mohali & Zirakpur · Free posture assessment this month",
  hero: { eyebrow: "Physiotherapy clinic in Sector 80, Mohali", title: "Move without pain, *again.*", lede: "Back pain, neck stiffness, knee problems and sports injuries — treated with a clear plan, hands-on therapy and exercises you can do at home.", primary: "Book a session", points: ["One-to-one sessions", "Home visits available", "Evening slots till 8:30 pm"] },
  trust: [["8+ years", "of practice"], ["1:1", "sessions, no sharing"], ["Home", "visits available"], ["6 days", "a week"]],
  about: "ActiveCare is a physiotherapy clinic where every patient gets a written recovery plan, one-to-one sessions and simple home exercises.",
  treatments: [
    { name: "Back & neck pain", icon: "spine", text: "Slip disc, sciatica, cervical pain and posture problems.", price: "From ₹600 / session", time: "45 min" },
    { name: "Knee & joint pain", icon: "knee", text: "Arthritis, ligament injuries and post-surgery knee rehab.", price: "From ₹600 / session", time: "45 min" },
    { name: "Sports injuries", icon: "heart", text: "Sprains, muscle tears and return-to-sport programmes.", price: "From ₹700 / session", time: "45–60 min" },
    { name: "Post-surgery rehab", icon: "shield", text: "Recovery after knee, hip or spine surgery.", price: "From ₹700 / session", time: "45 min" },
    { name: "Frozen shoulder", icon: "hand", text: "Pain relief and range-of-motion recovery for shoulders.", price: "From ₹600 / session", time: "45 min" },
    { name: "Neuro rehab", icon: "sparkle", text: "Stroke, Parkinson's and balance training.", price: "From ₹800 / session", time: "60 min" },
    { name: "Home physiotherapy", icon: "child", text: "Sessions at home for elderly and post-surgery patients.", price: "From ₹900 / visit", time: "45 min" },
    { name: "Posture & ergonomics", icon: "spine", text: "Desk-job posture correction and workplace advice.", price: "Consultation", time: "30 min" }
  ],
  costs: [["Assessment", "₹500", "Free this month"], ["Clinic session", "₹600 – ₹800", "Per session"], ["Home visit", "₹900 – ₹1,200", "Within 8 km"], ["10-session package", "₹5,500 – ₹7,000", "Pay in 2 parts"], ["Taping / dry needling", "₹300 – ₹600", "Add-on"]],
  costNote: "Indicative. Your plan and number of sessions are shared after the assessment.",
  doctors: [
    { name: "Dr. Aman Kaur", role: "BPT, MPT (Orthopaedics)", note: "Back, neck & joint pain · 9 years", photo: "", langs: "English, Hindi, Punjabi" },
    { name: "Dr. Rohit Verma", role: "BPT, MPT (Sports)", note: "Sports injuries & rehab · 6 years", photo: "", langs: "English, Hindi" },
    { name: "Dr. Simran Gill", role: "BPT, MPT (Neuro)", note: "Neuro & home physiotherapy", photo: "", langs: "English, Hindi, Punjabi" }
  ],
  visit: [["Book a slot", "WhatsApp or the form. Home visit? Tell us your area."], ["Assessment", "Pain, posture and movement tests — about 30 minutes."], ["Recovery plan", "Number of sessions, goals and cost — in writing."], ["Therapy & home exercises", "Hands-on sessions plus a simple home routine."]],
  gallery: ["Treatment area", "Exercise zone", "Reception", "Electrotherapy", "Private cubicles", "Waiting lounge"],
  tips: [["Sitting all day?", "Stand up for 2 minutes every 30 minutes. Your back will thank you."], ["Ice or heat?", "Ice for fresh injuries in the first 48 hours, heat for old stiffness."], ["Pain for more than 2 weeks?", "Get it assessed early — most back and neck problems settle faster with the right exercises."]],
  faq: [["Do I need a doctor's referral?", "No. You can book an assessment directly."], ["How many sessions will I need?", "Most patients need 6–10 sessions. We tell you after the first assessment."], ["Do you do home visits?", "Yes, within about 8 km of the clinic."], ["What should I wear?", "Loose, comfortable clothes."]],
  sections: ["notice", "header", "hero", "trust", "treatments", "costs", "doctors", "visit", "gallery", "reviews", "appointment", "tips", "faq", "contact", "footer"]
});
SITE.tipsTitle = "Small habits, *less pain.*";
SITE.treatmentsTitle = "Pain relief for *every age.*";
SITE.clinic = Object.assign({}, SITE.clinic, { icon: "spine", doctorWord: "physiotherapist", name: "ActiveCare Physiotherapy", short: "ActiveCare", specialty: "Physiotherapy clinic", tagline: "Pain relief & rehabilitation", address: "SCO 45, Sector 80, Mohali, Punjab 160055", mapUrl: "https://maps.google.com/?q=Sector+80+Mohali" });
SITE.theme = Object.assign({}, SITE.theme, { primary: "#1F3A68", accent: "#3F8EFC", warm: "#FFB84D" });
