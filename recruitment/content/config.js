/*
  RECRUITMENT — raicorp.in/recruitment/ (website ke andar apna alag project).
  Text, services, fees, email: yahi file.  Jobs: content/jobs.js.  Colors/fonts: assets/r.css ke upar :root.
*/
window.R = window.R || {};
R.site = {
  brand: "RaiCorp",
  product: "Recruitment",
  mainSite: "../index.html",
  developmentSite: "../index.html",
  // Group bar (upar ki patti) ke links
  groupLinks: { dev: "../index.html", rec: "index.html" },
  email: "raiashishhh@gmail.com",        // public email (phone number public nahi kiya)
  // Formspree (formspree.io) ka free endpoint daalo to applications seedha email pe aayengi.
  // Khaali chhodoge to form user ke email app me ready message khol dega.
  formEndpoint: "",
  locations: "Delhi NCR · Chandigarh Tricity · Remote",

  hero: {
    eyebrow: "RaiCorp Recruitment",
    title: "The right people, *hired properly.*",
    lede: "We hire for RaiCorp's own teams and help growing companies find pre-screened talent — tech and non-tech, permanent or contract."
  },

  // Employers page
  services: [
    { title: "Permanent placement", text: "Full-time hires on your payroll. We scope the role, source, screen and manage interviews until joining." },
    { title: "Contract staffing", text: "Developers, support and operations staff on monthly contracts — scale up or down without long-term cost." },
    { title: "Niche & tech hiring", text: "Hard-to-fill engineering, product and data roles, screened by an engineer before you see the profile." },
    { title: "Volume hiring", text: "Sales, customer support and operations teams hired in batches, with structured screening at scale." }
  ],
  industries: ["IT & SaaS", "Product startups", "BPO & customer support", "BFSI & fintech", "Healthcare & clinics", "Real estate", "Education & edtech", "Retail & D2C", "Manufacturing"],
  process: [
    ["Role brief", "A 20-minute call to define skills, budget, location and timelines. We write or sharpen the job description."],
    ["Sourcing & screening", "Job boards, referrals and our talent pool. Every profile is called and screened before it reaches you."],
    ["Shortlist", "3–5 pre-screened profiles, usually within 5–7 working days, each with a short screening note."],
    ["Interviews & offer", "We schedule rounds, collect feedback and help close the offer."],
    ["Joining & replacement", "Follow-up until the candidate joins, with a replacement period agreed upfront."]
  ],
  fees: [
    { title: "Permanent placement", price: "From 8.33% of annual CTC", note: "Success-based. No hire, no fee." },
    { title: "Contract staffing", price: "Monthly per person", note: "Quoted per role, billed monthly." },
    { title: "Volume hiring", price: "Per-hire pricing", note: "Fixed fee per joined candidate for batches of 10+." }
  ],
  promises: ["Every profile screened by phone before you see it", "Confidential searches for senior or replacement roles", "Replacement period agreed in writing", "One point of contact from brief to joining"]
};
