/*
  SITE — company ki basic info, contact, navigation, regions (pricing currency).
  Text me {company}, {years}, {founded}, {exp} likhoge to automatic value aa jayegi.
*/
window.CONTENT = window.CONTENT || {};
CONTENT.site = {
  company: "RaiCorp",
  tagline: "Software, apps and growth for ambitious businesses",
  description: "{company} builds websites, mobile apps, CRMs, ERPs and custom software — and handles SEO, marketing and hiring so your business grows after launch.",
  foundedYear: 2026,                 // RaiCorp kab bani (Udyam). {founded}
  experienceSince: 2022,             // Ashish ka professional experience kab se. {exp} = 2026 me 4
  recruitmentUrl: "recruitment/index.html",   // recruitment ka apna project: /recruitment folder
  founder: "Ashish Rai",
  founderRole: "Founder & lead engineer",
  founderUrl: "ashish/index.html",   // founder ka portfolio: raicorp.in/ashish

  whatsapp: "919582927207",          // 91 + number, bina + aur space
  phoneDisplay: "+91 95829 27207",
  email: "hello@raicorp.in",
  hours: "Mon–Sat, 10am–7pm IST",
  responseTime: "Reply within one working day",

  // Hum kahan se kaam karte hain (serving areas — office address nahi)
  locations: [
    { city: "Faridabad", region: "Delhi NCR", note: "Faridabad, Gurugram, Noida, Delhi" },
    { city: "Mohali", region: "Chandigarh Tricity", note: "Mohali, Chandigarh, Panchkula, Zirakpur" },
    { city: "Remote", region: "Worldwide", note: "UK, Canada, US, UAE, Australia" }
  ],

  // Formspree endpoint (optional). Khaali = forms WhatsApp pe jayenge.
  formEndpoint: "",

  socials: [
    // { name: "LinkedIn", url: "https://www.linkedin.com/company/raicorp" },
    // { name: "Instagram", url: "https://www.instagram.com/raicorp" },
    // { name: "GitHub", url: "https://github.com/raicorp" }
  ],

  /* Header menu. "children" doge to dropdown banega. */
  nav: [
    { label: "Services", href: "services.html", children: "services" },
    { label: "Work", href: "work.html" },
    { label: "Pricing", href: "pricing.html" },
    { label: "Hire talent", href: "recruitment/index.html" },
    { label: "About", href: "about.html" }
  ],
  headerCta: { label: "Get a free quote", href: "contact.html" },

  /* Footer columns */
  footer: {
    blurb: "Websites, apps and software for growing businesses — built by engineers, shown to you before you pay.",
    columns: [
      { title: "Build", links: [["Websites", "service.html?id=websites"], ["Mobile apps", "service.html?id=mobile-apps"], ["Custom software", "service.html?id=custom-software"], ["CRM & ERP", "service.html?id=crm-erp"], ["E-commerce", "service.html?id=ecommerce"]] },
      { title: "Grow", links: [["SEO", "service.html?id=seo"], ["Performance marketing", "service.html?id=performance-marketing"], ["Influencer marketing", "service.html?id=influencer-marketing"], ["Branding & content", "service.html?id=branding"]] },
      { title: "Company", links: [["Our work", "work.html"], ["Pricing", "pricing.html"], ["Hire talent", "recruitment/index.html"], ["About", "about.html"], ["Founder — Ashish Rai", "ashish/index.html"], ["Contact", "contact.html"]] }
    ],
    legal: "© {year} {company}. All rights reserved."
  },

  /*
    REGIONS — pricing kis currency me dikhe. Visitor ke timezone se auto-detect hota hai,
    aur header me dropdown se badal bhi sakta hai.
    Pricing file me har plan ke price inhi ids se likho: { IN: 14999, INTL: 399, UK: 349 }
    Jo region ka price nahi likha, wahan INTL (USD) dikhega.
  */
  regions: [
    { id: "IN", label: "India (₹)", currency: "INR", locale: "en-IN", timezones: ["Asia/Kolkata", "Asia/Calcutta"] },
    { id: "GCC", label: "UAE & Gulf (AED)", currency: "AED", locale: "en-AE", timezones: ["Asia/Dubai", "Asia/Muscat", "Asia/Qatar", "Asia/Bahrain", "Asia/Kuwait", "Asia/Riyadh"] },
    { id: "UK", label: "United Kingdom (£)", currency: "GBP", locale: "en-GB", timezones: ["Europe/London"] },
    { id: "CA", label: "Canada (C$)", currency: "CAD", locale: "en-US", timezones: ["America/Toronto", "America/Vancouver", "America/Edmonton", "America/Winnipeg", "America/Halifax", "America/Regina", "America/St_Johns"] },
    { id: "AU", label: "Australia (A$)", currency: "AUD", locale: "en-US", timezones: ["Australia/*"] },
    { id: "INTL", label: "US & others ($)", currency: "USD", locale: "en-US", default: true }
  ]
};
