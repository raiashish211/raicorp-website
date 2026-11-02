/*
  SERVICES — har service ka apna detail page banta hai: service.html?id=<id>
  visual: { type: "image", src: "assets/img/x.jpg" }  ya  { type: "video", src: "..." }
          ya mockup (auto-generated preview) — asli image aate hi replace kar dena.
  startingFrom: region-wise starting price (site.js ke region ids).
*/
window.CONTENT = window.CONTENT || {};
CONTENT.services = {
  heading: "Everything your business needs to go digital — and grow",
  intro: "Pick one service or hand us the whole journey. Every layer is built to work with the next, so you never start from zero again.",
  groups: [
    { id: "build", name: "Build", blurb: "Websites, apps and software that run your business." },
    { id: "grow", name: "Grow", blurb: "Get found, get leads, build a brand people trust." },
    { id: "support", name: "Support & talent", blurb: "Keep it running, and scale your team when you need to." }
  ],
  items: [
    {
      id: "websites", group: "build", icon: "web", name: "Websites",
      short: "Fast, mobile-first business websites that rank on Google and turn visitors into enquiries.",
      intro: "Your website is the first meeting with most customers. We build sites that load fast, look right on every phone and make it easy to call, WhatsApp or book.",
      outcomes: ["More calls and WhatsApp enquiries from Google", "A site you can update yourself", "Built for local SEO from day one"],
      deliverables: ["Custom design (no generic templates)", "Up to 15 pages, mobile-first", "Contact, booking or enquiry forms", "Google Business Profile setup", "Speed, SEO and analytics setup", "Training video to edit content"],
      tech: ["Next.js", "React", "Headless CMS", "Vercel / AWS"],
      timeline: "2–4 weeks",
      startingFrom: { IN: 4999, INTL: 149, UK: 129, GCC: 549, CA: 199, AU: 229 },
      pricingTab: "websites",
      visual: { type: "mockup", variant: "home", mock: { id: "yourbusiness", title: "Your Business", theme: "#1B2440", accent: "#C9A45C", heroText: "A website that brings you customers", cta: "Book now" } }
    },
    {
      id: "mobile-apps", group: "build", icon: "mobile", name: "Mobile apps",
      short: "Android and iOS apps for customers, staff or field teams — from one codebase.",
      intro: "Apps for booking, ordering, loyalty or running your field team. Built cross-platform so you launch on Android and iOS together and maintain one codebase.",
      outcomes: ["Launch on Play Store and App Store together", "Push notifications that bring customers back", "Works with your existing website and data"],
      deliverables: ["UX flows and clickable prototype", "Android + iOS app", "Admin panel", "Push notifications & analytics", "Store listing and publishing", "3 months of post-launch fixes"],
      tech: ["React Native", "Flutter", "ASP.NET Core API", "Firebase"],
      timeline: "6–12 weeks",
      startingFrom: { IN: 149999, INTL: 4500, UK: 3800, GCC: 16500, CA: 6000, AU: 6800 },
      pricingTab: "software",
      visual: { type: "mockup", variant: "app", mock: { id: "yourapp", title: "Your App", theme: "#5B2A86", accent: "#FFC857", heroText: "Book in two taps", cta: "Book now" } }
    },
    {
      id: "custom-software", group: "build", icon: "software", name: "Custom software",
      short: "Web applications built around how your business actually works — not the other way round.",
      intro: "When spreadsheets, notebooks and five different apps stop scaling, we build one system that fits your process: bookings, inventory, billing, approvals, reporting.",
      outcomes: ["One system instead of scattered sheets", "Fewer manual errors and missed follow-ups", "Reports you can trust"],
      deliverables: ["Process mapping workshop", "Custom web application", "Role-based access", "Reports & exports", "Integrations (payments, WhatsApp, SMS, email)", "Documentation & handover"],
      tech: ["ASP.NET Core", "React / Next.js", "SQL Server", "PostgreSQL", "Azure / AWS"],
      timeline: "6–16 weeks",
      startingFrom: { IN: 99999, INTL: 3000, UK: 2500, GCC: 11000, CA: 4000, AU: 4500 },
      pricingTab: "software",
      visual: { type: "mockup", variant: "dashboard", mock: { id: "ops", title: "Operations", theme: "#34466B", accent: "#C9A45C", dashTitle: "Today's operations", menu: ["Overview", "Orders", "Inventory", "Billing", "Reports"], kpis: ["Open orders", "Low stock", "Pending bills", "Revenue"] } }
    },
    {
      id: "crm-erp", group: "build", icon: "erp", name: "CRM & ERP",
      short: "Lead tracking, sales pipelines, inventory, billing and HR — in one place.",
      intro: "Stop losing leads in WhatsApp chats and paper registers. We build CRMs and ERPs sized for small and growing businesses, with WhatsApp and payment integrations built in.",
      outcomes: ["Every lead tracked till it closes", "Automatic follow-up reminders", "Stock, billing and staff in one dashboard"],
      deliverables: ["Lead & customer management", "Sales pipeline & follow-ups", "Quotations and invoices (GST-ready)", "Inventory & purchase", "Staff roles & attendance", "Mobile-friendly dashboard"],
      tech: ["ASP.NET Core", "React", "PostgreSQL", "WhatsApp Business API"],
      timeline: "6–14 weeks",
      startingFrom: { IN: 79999, INTL: 2500, UK: 2100, GCC: 9000, CA: 3300, AU: 3800 },
      pricingTab: "software",
      visual: { type: "mockup", variant: "dashboard", mock: { id: "crm", title: "LeadDesk CRM", theme: "#1B2440", accent: "#C9A45C", dashTitle: "Sales pipeline", menu: ["Dashboard", "Leads", "Follow-ups", "Quotes", "Reports"], kpis: ["New leads", "Follow-ups due", "Won this month", "Pipeline value"] } }
    },
    {
      id: "saas-mvp", group: "build", icon: "rocket", name: "SaaS & MVP development",
      short: "Turn your product idea into a launch-ready MVP with subscriptions, billing and an admin panel.",
      intro: "For founders and businesses productising their know-how. We scope the smallest version worth launching, build it properly, and set it up to grow.",
      outcomes: ["A launchable product in weeks, not months", "Subscriptions and billing from day one", "Architecture that scales with users"],
      deliverables: ["Product scoping & roadmap", "Multi-tenant web app", "Subscription billing", "Admin & analytics", "Landing page", "Cloud deployment & CI/CD"],
      tech: ["Next.js", "ASP.NET Core", "PostgreSQL", "Stripe / Razorpay", "Docker"],
      timeline: "8–16 weeks",
      startingFrom: { IN: 199999, INTL: 6000, UK: 5000, GCC: 22000, CA: 8000, AU: 9000 },
      pricingTab: "software",
      visual: { type: "mockup", variant: "dashboard", mock: { id: "saas", title: "YourSaaS", theme: "#22303C", accent: "#F2C14E", dashTitle: "Workspace", menu: ["Home", "Projects", "Team", "Billing", "Settings"], kpis: ["Active users", "MRR", "Churn", "Trials"] } }
    },
    {
      id: "ecommerce", group: "build", icon: "cart", name: "E-commerce & online ordering",
      short: "Online stores and direct ordering that skip marketplace commissions.",
      intro: "Sell directly to customers with your own store or ordering system — payments, delivery tracking and WhatsApp updates included.",
      outcomes: ["Keep the commission marketplaces take", "Own your customer list", "Repeat orders with offers and reminders"],
      deliverables: ["Product catalog & cart", "Payment gateway (UPI, cards, Stripe)", "Order & delivery management", "Discounts and coupons", "WhatsApp order updates", "Sales reports"],
      tech: ["Next.js", "Shopify", "ASP.NET Core", "Razorpay / Stripe"],
      timeline: "3–8 weeks",
      startingFrom: { IN: 39999, INTL: 1200, UK: 1000, GCC: 4400, CA: 1600, AU: 1800 },
      pricingTab: "websites",
      visual: { type: "mockup", variant: "list", mock: { id: "yourstore", title: "Your Store", theme: "#8E2C2C", accent: "#F4A259", nav: ["Shop", "Offers", "Track order", "Cart"] } }
    },
    {
      id: "ui-ux", group: "build", icon: "design", name: "UI/UX design",
      short: "Research-led interface design and clickable prototypes before a line of code is written.",
      intro: "Good design is how people decide to trust you. We design screens, flows and design systems that make your product easy to use and easy to build.",
      outcomes: ["Validate ideas before spending on development", "Consistent look across web and app", "Faster development handover"],
      deliverables: ["User flows & wireframes", "High-fidelity screens", "Clickable prototype", "Design system", "Developer handover"],
      tech: ["Figma", "Design systems"],
      timeline: "1–4 weeks",
      startingFrom: { IN: 19999, INTL: 600, UK: 500, GCC: 2200, CA: 800, AU: 900 },
      pricingTab: "software",
      visual: { type: "mockup", variant: "detail", mock: { id: "design", title: "Design Studio", theme: "#3D5A80", accent: "#EE6C4D", heroText: "Screens people understand at a glance", cta: "View prototype" } }
    },
    {
      id: "seo", group: "grow", icon: "seo", name: "SEO & local search",
      short: "Rank on Google and Maps for the searches your customers actually make.",
      intro: "Local SEO, technical SEO and content that brings steady, free traffic — with monthly reports showing calls, enquiries and rankings.",
      outcomes: ["Show up in 'near me' searches and Google Maps", "Steady leads without paying per click", "Clear monthly reporting"],
      deliverables: ["SEO audit & keyword plan", "Google Business Profile optimisation", "On-page & technical SEO", "Location and service pages", "Monthly content", "Ranking & leads report"],
      tech: ["Google Search Console", "GA4", "Google Business Profile"],
      timeline: "Monthly, results build over 3–6 months",
      startingFrom: { IN: 9999, INTL: 299, UK: 249, GCC: 1100, CA: 400, AU: 450 },
      priceSuffix: "/month",
      pricingTab: "growth",
      visual: { type: "mockup", variant: "search", mock: { id: "seo", title: "Your Business", theme: "#1B2440", accent: "#C9A45C" } }
    },
    {
      id: "performance-marketing", group: "grow", icon: "megaphone", name: "Ads & social media",
      short: "Google and Meta ads plus social media management that bring measurable leads.",
      intro: "Campaigns set up around leads, not likes. We plan, design and run ads on Google, Instagram and Facebook, and manage your social pages so they stay active.",
      outcomes: ["Leads you can count, at a cost you can see", "Consistent posting without the effort", "Weekly optimisation"],
      deliverables: ["Campaign strategy", "Ad creatives & copy", "Google & Meta ads management", "Social media calendar & posts", "Lead tracking setup", "Monthly report"],
      tech: ["Google Ads", "Meta Ads", "GA4", "Canva / Figma"],
      timeline: "Monthly",
      startingFrom: { IN: 14999, INTL: 449, UK: 379, GCC: 1650, CA: 600, AU: 680 },
      priceSuffix: "/month + ad spend",
      pricingTab: "growth",
      visual: { type: "mockup", variant: "social", mock: { id: "ads", title: "Your Brand", theme: "#B0302A", accent: "#F4D35E", heroText: "Grand opening offer", cta: "Book now" } }
    },
    {
      id: "influencer-marketing", group: "grow", icon: "star", name: "Influencer marketing",
      short: "Campaigns with creators your customers already follow — local and national.",
      intro: "We find creators who fit your audience, handle briefs, contracts and content approvals, and track what each campaign brings in.",
      outcomes: ["Reach new customers through trusted voices", "Content you can reuse in ads", "Results tracked per creator"],
      deliverables: ["Creator shortlist & outreach", "Campaign brief", "Contracts & approvals", "Content calendar", "Tracking links & codes", "Campaign report"],
      tech: ["Instagram", "YouTube", "Tracking links"],
      timeline: "Per campaign, 2–6 weeks",
      startingFrom: { IN: 24999, INTL: 750, UK: 650, GCC: 2750, CA: 1000, AU: 1100 },
      priceSuffix: "/campaign + creator fees",
      pricingTab: "growth",
      visual: { type: "mockup", variant: "social", mock: { id: "creators", title: "Creator Campaign", theme: "#5B2A86", accent: "#FFC857", heroText: "New collab drop", cta: "Shop now" } }
    },
    {
      id: "branding", group: "grow", icon: "brand", name: "Branding & content",
      short: "Logo, brand identity, photography direction and content that make you look established.",
      intro: "A consistent brand makes a small business look as trustworthy as a big one. We create your identity and the content that carries it everywhere.",
      outcomes: ["A recognisable, consistent brand", "Ready-to-use templates for posts and print", "Content that explains what you do"],
      deliverables: ["Logo & brand identity", "Color & type system", "Social media templates", "Brochure / visiting card", "Website & ad copywriting", "Product / service photo direction"],
      tech: ["Figma", "Illustrator", "Canva templates"],
      timeline: "2–4 weeks",
      startingFrom: { IN: 14999, INTL: 450, UK: 380, GCC: 1650, CA: 600, AU: 680 },
      pricingTab: "growth",
      visual: { type: "mockup", variant: "brand", mock: { id: "brand", title: "Your Brand", theme: "#34466B", accent: "#C9A45C" } }
    },
    {
      id: "maintenance", group: "support", icon: "wrench", name: "Hosting, maintenance & support",
      short: "Hosting, backups, security updates and changes on call — so you never worry about it.",
      intro: "Launch is the start. We keep your website, app or software fast, secure and up to date, and make the small changes you need every month.",
      outcomes: ["No downtime surprises", "Changes done in days, not weeks", "Security and backups handled"],
      deliverables: ["Managed hosting & SSL", "Daily backups", "Security & framework updates", "Uptime monitoring", "Monthly content changes", "Priority WhatsApp support"],
      tech: ["AWS", "Azure", "Vercel", "Cloudflare"],
      timeline: "Monthly or yearly",
      startingFrom: { IN: 499, INTL: 15, UK: 12, GCC: 55, CA: 20, AU: 23 },
      priceSuffix: "/month",
      pricingTab: "support",
      visual: { type: "mockup", variant: "dashboard", mock: { id: "status", title: "Status", theme: "#22303C", accent: "#1E9E52", dashTitle: "All systems running", menu: ["Uptime", "Backups", "Security", "Requests", "Invoices"], kpis: ["Uptime", "Backups", "Open requests", "Response time"] } }
    },
    {
      id: "hire-talent", group: "support", icon: "hire", name: "Hire developers & talent",
      short: "Dedicated developers, designers and marketers for your team — or we recruit them for you.",
      intro: "Need people, not a project? Get pre-vetted developers, designers and marketers on a monthly contract, or let our recruitment partners hire full-time talent for you.",
      outcomes: ["Start in days, not months", "Pre-vetted, interviewed talent", "Replace or scale anytime"],
      deliverables: ["Dedicated developers (monthly)", "Designers & marketers", "Full-time recruitment", "Technical interview support", "Replacement guarantee"],
      tech: [".NET", "React", "Node.js", "Flutter", "Python", "DevOps"],
      timeline: "Profiles in 3–7 days",
      startingFrom: { IN: 59999, INTL: 1800, UK: 1500, GCC: 6600, CA: 2400, AU: 2700 },
      priceSuffix: "/month per developer",
      link: "recruitment/index.html",
      pricingTab: "support",
      visual: { type: "mockup", variant: "team", mock: { id: "talent", title: "Talent", theme: "#0D1321", accent: "#C9A45C" } }
    }
  ]
};
