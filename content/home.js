/*
  HOME page sections: hero, trust bar, journey (0 to 100), showcase, process, why-us, CTA band.
*/
window.CONTENT = window.CONTENT || {};
CONTENT.home = {
  hero: {
    title: "Websites and software that *bring you customers.*",
    lede: "{company} designs and builds websites, apps and business software for growing companies. See a free sample of your website first. Pay only when you like it.",
    primaryCta: { label: "Get a free sample", href: "contact.html" },
    secondaryCta: { label: "See our work", href: "work.html" },
    chips: ["websites", "mobile-apps", "crm-erp", "custom-software", "seo", "hire-talent"], // service ids
    /* Hero visual:
       { type: "stack" }  -> website + dashboard + app preview (default)
       { type: "image", src: "assets/img/hero.jpg" }
       { type: "video", src: "assets/video/hero.mp4", poster: "assets/img/hero.jpg" } */
    media: { type: "stack" }
  },

  trust: {
    items: [
      { value: "{exp}+ years", label: "building production software" },
      { value: "Free sample", label: "before you pay anything" },
      { value: "{services}", label: "services under one roof" },
            { value: "India + 5 regions", label: "pricing in your currency" }
    ]
  },

  journey: {
    heading: "From zero to a business that runs online",
    intro: "Start at any stage. Every layer connects to the next — your website feeds your CRM, your CRM feeds your marketing.",
    stages: [
      { name: "Plan & brand", text: "Strategy call, brand identity and screens you can click through before building.", services: ["ui-ux", "branding"] },
      { name: "Build", text: "Website, app or software — built by engineers, shown to you every week.", services: ["websites", "mobile-apps", "custom-software", "ecommerce"] },
      { name: "Launch", text: "Domain, hosting, Google profile, app store listings. Live, fast and secure.", services: ["maintenance"] },
      { name: "Grow", text: "SEO, ads, social and creators that bring measurable leads.", services: ["seo", "performance-marketing", "influencer-marketing"] },
      { name: "Scale", text: "CRM and ERP to handle the volume, and talent when you need more hands.", services: ["crm-erp", "saas-mvp", "hire-talent"] }
    ]
  },

  showcase: {
    heading: "Pick your business. Open a live sample.",
    intro: "Working sample websites built for real kinds of businesses. Open one live on your phone.",
    picks: ["smilecraft-dental", "vector-classes", "aravali-homes", "blueroute-visa", "leaddesk-crm", "coolfix-field"] // portfolio ids
  },

  process: {
    heading: "How a project runs",
    intro: "You see real progress every week — and a fixed quote before anything starts.",
    steps: [
      { title: "Free discovery call", text: "20 minutes on call or WhatsApp. We understand your business, customers and goals." },
      { title: "Free sample & fixed quote", text: "A working sample of your website and a written price within 48 hours. Pay only if you like it." },
      { title: "Build with weekly demos", text: "A live preview link from week one. You review, we refine." },
      { title: "Launch & grow", text: "Go live, train your team, then SEO, marketing and support as you need." }
    ]
  },

  why: {
    heading: "Why businesses choose {company}",
    items: [
      { icon: "software", title: "Engineers, not resellers", text: "The people who quote your project are the people who build it — on ASP.NET Core, React/Next.js, SQL Server and PostgreSQL." },
      { icon: "lock", title: "You own everything", text: "Code, domain, data and accounts are in your name. No lock-in." },
      { icon: "chart", title: "Built to grow", text: "Every website is ready for SEO, CRM and marketing — so you never rebuild from scratch." },
      { icon: "clock", title: "Fixed quotes, weekly demos", text: "Price agreed upfront. Progress you can click every week." },
      { icon: "globe", title: "Founder-led, in your time zone", text: "You talk directly to the engineer building your project — on calls that fit India, the UK, Canada, the US, the Gulf or Australia." },
      { icon: "shield", title: "Support after launch", text: "Hosting, backups, security and changes handled on a simple monthly plan." }
    ]
  },

  cta: {
    title: "Tell us what you want to build",
    text: "Free consultation and a fixed quote within 48 hours.",
    primary: { label: "Get a free quote", href: "contact.html" },
    whatsapp: "Chat on WhatsApp"
  }
};
