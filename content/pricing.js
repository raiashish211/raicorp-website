/*
  PRICING — plans, region-wise prices.
  price: { IN: 14999, INTL: 399, UK: 349, GCC: 1499, CA: 549, AU: 599 }
         (missing region => INTL/USD). Text bhi de sakte ho: { IN: "Custom", INTL: "Custom" }
  highlight: true => "Most chosen" badge.
  Prices sirf starting points hain — apne hisaab se badal lena.
*/
window.CONTENT = window.CONTENT || {};
CONTENT.pricing = {
  heading: "Clear starting prices",
  intro: "Every business is different, so these are starting points. You get a fixed quote after a free 20-minute call — no surprises later.",
  notes: {
    IN: "Taxes extra where applicable. 50% advance after you approve the sample, 50% at launch. Domain is registered in your name.",
    default: "Prices in your local currency, excluding local taxes. 50% to start, 50% at launch. Billing via bank transfer, Stripe or PayPal."
  },
  tabs: [
    {
      id: "websites", label: "Websites & stores",
      plans: [
        {
          name: "Launch", for: "Get your business online this week",
          price: { IN: 4999, INTL: 149, UK: 129, GCC: 549, CA: 199, AU: 229 },
          features: ["One-page website", "Mobile-first design", "WhatsApp & call buttons", "Google Maps location", "Free sample before you pay", "Live in 2–3 days"],
          cta: "Start with Launch"
        },
        {
          name: "Business", for: "Small businesses that want enquiries", highlight: true,
          price: { IN: 7999, INTL: 249, UK: 199, GCC: 899, CA: 329, AU: 379 },
          features: ["Up to 5 pages", "Services & price list", "Photo gallery", "Enquiry form to WhatsApp/email", "Google Business Profile setup", "Basic SEO setup"],
          cta: "Choose Business"
        },
        {
          name: "Growth", for: "Businesses that want leads from Google",
          price: { IN: 11999, INTL: 399, UK: 329, GCC: 1450, CA: 529, AU: 599 },
          features: ["Up to 10 pages", "Location pages for local SEO", "Reviews & offers sections", "Speed & analytics setup", "Blog or updates section", "1 month free changes"],
          cta: "Choose Growth"
        },
        {
          name: "Store", for: "Sell products or take orders online",
          price: { IN: 39999, INTL: 1200, UK: 1000, GCC: 4400, CA: 1600, AU: 1800 },
          features: ["Product catalog & cart", "Payment gateway", "Order tracking", "Coupons and offers", "WhatsApp order updates", "Admin panel & sales reports"],
          cta: "Build my store"
        }
      ]
    },
    {
      id: "software", label: "Apps & software",
      plans: [
        {
          name: "CRM / Business system", for: "Replace registers and spreadsheets",
          price: { IN: 79999, INTL: 2500, UK: 2100, GCC: 9000, CA: 3300, AU: 3800 },
          features: ["Leads, customers & follow-ups", "Quotes & GST invoices", "Staff roles & permissions", "Reports & exports", "WhatsApp / SMS integration", "Mobile-friendly dashboard"],
          cta: "Plan my CRM"
        },
        {
          name: "Mobile app", for: "Customer or staff app on Android & iOS", highlight: true,
          price: { IN: 149999, INTL: 4500, UK: 3800, GCC: 16500, CA: 6000, AU: 6800 },
          features: ["Android + iOS from one codebase", "Admin panel", "Push notifications", "Payments & bookings", "Play Store & App Store publishing", "3 months post-launch fixes"],
          cta: "Discuss my app"
        },
        {
          name: "Custom software / SaaS", for: "Products and ERP-level systems",
          price: { IN: "From ₹1,99,999", INTL: "From $6,000", UK: "From £5,000", GCC: "From AED 22,000", CA: "From C$8,000", AU: "From A$9,000" },
          features: ["Product scoping & roadmap", "Multi-user, multi-branch", "Subscriptions & billing", "Integrations & APIs", "Cloud deployment & CI/CD", "Documentation & handover"],
          cta: "Get a scoped quote"
        }
      ]
    },
    {
      id: "growth", label: "Marketing & growth",
      plans: [
        {
          name: "Local SEO", for: "Rank on Google and Maps in your area", suffix: "/month",
          price: { IN: 9999, INTL: 299, UK: 249, GCC: 1100, CA: 400, AU: 450 },
          features: ["Google Business Profile management", "On-page SEO", "2 SEO pages / blogs a month", "Review strategy", "Monthly ranking & calls report"],
          cta: "Start SEO"
        },
        {
          name: "Growth", for: "SEO + ads + social, managed for you", suffix: "/month", highlight: true,
          price: { IN: 29999, INTL: 899, UK: 749, GCC: 3300, CA: 1200, AU: 1350 },
          features: ["Everything in Local SEO", "Google & Meta ads management", "12 social posts a month", "Ad creatives & copy", "Lead tracking dashboard", "Monthly strategy call"],
          cta: "Grow with us"
        },
        {
          name: "Brand & influencer", for: "Launches and brand-building campaigns", suffix: "/campaign",
          price: { IN: 49999, INTL: 1500, UK: 1250, GCC: 5500, CA: 2000, AU: 2250 },
          features: ["Brand identity refresh", "Creator shortlist & outreach", "Campaign brief & approvals", "Content calendar", "Tracking codes per creator", "Campaign report"],
          cta: "Plan a campaign"
        }
      ]
    },
    {
      id: "support", label: "Support & talent",
      plans: [
        {
          name: "Care", for: "Keep your site live and updated", suffix: "/month",
          price: { IN: 499, INTL: 15, UK: 12, GCC: 55, CA: 20, AU: 23 },
          features: ["Hosting & SSL", "Backups", "Uptime monitoring", "Small text & photo updates", "Priority WhatsApp support"],
          cta: "Add Care"
        },
        {
          name: "Dedicated developer", for: "A full-time developer on your team", suffix: "/month", highlight: true,
          price: { IN: 59999, INTL: 1800, UK: 1500, GCC: 6600, CA: 2400, AU: 2700 },
          features: ["Pre-vetted, interviewed developer", "Works in your tools and hours", "Weekly reports", "Replace anytime", "No long-term lock-in"],
          cta: "Hire a developer"
        },
        {
          name: "Recruitment", for: "We hire full-time talent for you",
          price: { IN: "8.33% of CTC", INTL: "Custom", UK: "Custom", GCC: "Custom", CA: "Custom", AU: "Custom" },
          features: ["Role scoping & job description", "Sourcing & screening", "Technical interviews", "Offer & joining support", "Replacement guarantee"],
          cta: "Start hiring"
        }
      ]
    }
  ]
};
