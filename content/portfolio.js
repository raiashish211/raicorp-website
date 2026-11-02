/*
  PORTFOLIO — samples / projects. Detail page: project.html?id=<id>
  type: "website" | "app" | "software"
  status: "concept" (humara sample) | "client" (asli client project)
  live: "https://..." ya "samples/<id>/"  -> "Live dekho" button card aur project page pe
  media (pehla item = main image, baaki 3-5 side thumbnails):
    Screenshots khud mat banao — chalao:  npm run snap -- <id> <url> #section1 #section2
    (tools/snap.js) — ye images bana ke yahan paste karne layak JSON de dega.
    { type: "image", src: "assets/img/x.jpg", label: "Home page" }
    { type: "video", src: "assets/video/x.mp4", poster: "assets/img/x.jpg", label: "Walkthrough" }
    { type: "youtube", id: "VIDEO_ID", label: "Demo" }
    { type: "mockup", variant: "home|list|detail|form|mobile|app|dashboard", label: "..." }  <- auto preview
*/
window.CONTENT = window.CONTENT || {};
CONTENT.portfolio = {
  heading: "Our work",
  intro: "Choose your business to see websites, apps and software made for it. Open any project to see every screen.",
  items: [
  {
    "type": "website",
    "id": "inkline-prints",
    "category": "printing-signage",
    "title": "Inkline Prints & Signs",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#0E0F13",
    "accent": "#E6007E",
    "heroText": "Print that gets noticed",
    "nav": [
      "Services",
      "Price check",
      "Our work",
      "Contact"
    ],
    "cta": "Get a quote",
    "summary": "A premium website for printing and sign-board shops: product catalog with starting prices, an instant price estimator and WhatsApp quotes.",
    "idealFor": "Printing presses, flex & sign-board makers, branding and gifting shops.",
    "pages": [
      "Home with lit sign-board hero",
      "Products & starting prices",
      "Instant price estimator (sq ft, letters, quantity)",
      "Work gallery with filters",
      "FAQ & contact"
    ],
    "features": [
      "Comes in 3 plans: Basic, Business, Premium",
      "One config file for name, logo, colours, prices and photos",
      "Price check by size or quantity, sent to WhatsApp",
      "Category filters and full-screen gallery",
      "Sticky Call / WhatsApp / Price bar on mobile"
    ],
    "tech": [
      "HTML/CSS/JS",
      "Config-driven",
      "WhatsApp enquiries",
      "Fast static hosting"
    ],
    "software": "Order tracker and job-card system for the print floor can be added later.",
    "live": "samples/printing/premium/",
    "tiers": [
      [
        "Basic",
        "samples/printing/basic/"
      ],
      [
        "Business",
        "samples/printing/business/"
      ],
      [
        "Premium",
        "samples/printing/premium/"
      ]
    ],
    "media": [
      {
        "type": "image",
        "src": "assets/img/work/inkline-prints/1-home.jpg",
        "label": "Home page"
      },
      {
        "type": "image",
        "src": "assets/img/work/inkline-prints/2-services.jpg",
        "label": "Products & prices"
      },
      {
        "type": "image",
        "src": "assets/img/work/inkline-prints/3-estimator.jpg",
        "label": "Instant price check"
      },
      {
        "type": "image",
        "src": "assets/img/work/inkline-prints/4-work.jpg",
        "label": "Work gallery"
      },
      {
        "type": "image",
        "src": "assets/img/work/inkline-prints/9-mobile.jpg",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "smilecraft-dental",
    "category": "clinics",
    "title": "SmileCraft Dental Studio",
    "location": "Mohali",
    "status": "concept",
    "theme": "#0F7B8A",
    "accent": "#FFB703",
    "heroText": "Painless dental care in Mohali Phase 7",
    "nav": [
      "Treatments",
      "Doctors",
      "Prices",
      "Book"
    ],
    "cta": "Book appointment",
    "summary": "A clinic website built around one job: getting a patient from Google search to a booked slot in under a minute.",
    "idealFor": "Dental, skin, physio and eye clinics with 1–3 doctors.",
    "pages": [
      "Home",
      "Treatments",
      "Treatment detail with price range",
      "Doctor profiles",
      "Online booking",
      "Contact & map"
    ],
    "features": [
      "Slot booking with doctor and time",
      "WhatsApp reminders before appointment",
      "Treatment price ranges",
      "Google reviews section",
      "Before/after gallery"
    ],
    "tech": [
      "HTML/CSS/JS",
      "WhatsApp enquiries",
      "Mobile-first",
      "Fast static hosting"
    ],
    "software": "Appointment and patient record system with automatic WhatsApp reminders.",
    "media": [
      {
        "type": "image",
        "src": "assets/img/work/smilecraft-dental/1-home.jpg",
        "label": "Home page"
      },
      {
        "type": "image",
        "src": "assets/img/work/smilecraft-dental/2-services.jpg",
        "label": "Treatments & prices"
      },
      {
        "type": "image",
        "src": "assets/img/work/smilecraft-dental/3-about.jpg",
        "label": "Doctor profile"
      },
      {
        "type": "image",
        "src": "assets/img/work/smilecraft-dental/9-mobile.jpg",
        "label": "On mobile"
      }
    ],
    "live": "samples/smilecraft-dental/"
  },
  {
    "type": "website",
    "id": "vector-classes",
    "category": "coaching",
    "title": "Vector Classes",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#5B2A86",
    "accent": "#FFC857",
    "heroText": "JEE & NEET coaching with weekly tests",
    "nav": [
      "Courses",
      "Results",
      "Faculty",
      "Admission"
    ],
    "cta": "Register for scholarship test",
    "summary": "A coaching institute website that leads with results and turns admission season traffic into registrations.",
    "idealFor": "JEE, NEET, SSC and banking coaching institutes.",
    "pages": [
      "Home",
      "Courses & batches",
      "Results / toppers",
      "Faculty",
      "Scholarship test registration",
      "Student login"
    ],
    "features": [
      "Batch timings and fee structure",
      "Toppers wall with photos and ranks",
      "Scholarship test registration form",
      "Student portal for notes and test scores"
    ],
    "tech": [
      "HTML/CSS/JS",
      "WhatsApp enquiries",
      "Mobile-first",
      "Fast static hosting"
    ],
    "software": "Student portal with fee tracking, attendance and online test series.",
    "media": [
      {
        "type": "image",
        "src": "assets/img/work/vector-classes/1-home.jpg",
        "label": "Home page"
      },
      {
        "type": "image",
        "src": "assets/img/work/vector-classes/2-courses.jpg",
        "label": "Courses & fees"
      },
      {
        "type": "image",
        "src": "assets/img/work/vector-classes/3-results.jpg",
        "label": "Teaching system"
      },
      {
        "type": "image",
        "src": "assets/img/work/vector-classes/9-mobile.jpg",
        "label": "On mobile"
      }
    ],
    "live": "samples/vector-classes/"
  },
  {
    "type": "website",
    "id": "aravali-homes",
    "category": "property-dealers",
    "title": "Aravali Homes & Realty",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#1D4E89",
    "accent": "#F2A900",
    "heroText": "Verified plots & flats in Greater Faridabad",
    "nav": [
      "Buy",
      "Rent",
      "Projects",
      "Contact"
    ],
    "cta": "Book a site visit",
    "summary": "A property dealer website where buyers filter listings by sector, budget and type, then book a site visit on WhatsApp.",
    "idealFor": "Property dealers, builders and channel partners with 10+ active listings.",
    "pages": [
      "Home",
      "Property listings with filters",
      "Property detail",
      "Projects",
      "Book a site visit",
      "About & contact"
    ],
    "features": [
      "Filter by sector, budget, BHK and type",
      "Photo gallery and video walkthrough per property",
      "EMI calculator",
      "WhatsApp enquiry with property name pre-filled",
      "Admin panel to add and mark properties sold"
    ],
    "tech": [
      "HTML/CSS/JS",
      "WhatsApp enquiries",
      "Mobile-first",
      "Fast static hosting"
    ],
    "software": "Lead CRM: every enquiry lands in one list with follow-up dates and site-visit status.",
    "media": [
      {
        "type": "image",
        "src": "assets/img/work/aravali-homes/1-home.jpg",
        "label": "Home page"
      },
      {
        "type": "image",
        "src": "assets/img/work/aravali-homes/2-listings.jpg",
        "label": "Property listings"
      },
      {
        "type": "image",
        "src": "assets/img/work/aravali-homes/3-process.jpg",
        "label": "Buying process"
      },
      {
        "type": "image",
        "src": "assets/img/work/aravali-homes/9-mobile.jpg",
        "label": "On mobile"
      }
    ],
    "live": "samples/aravali-homes/"
  },
  {
    "type": "website",
    "id": "blueroute-visa",
    "category": "immigration-ielts",
    "title": "BlueRoute Visa & IELTS",
    "location": "Mohali",
    "status": "concept",
    "theme": "#B0302A",
    "accent": "#F4D35E",
    "heroText": "Study in Canada, UK & Australia",
    "nav": [
      "Study visa",
      "IELTS / PTE",
      "Success stories",
      "Contact"
    ],
    "cta": "Check my eligibility",
    "summary": "A consultancy website that builds trust with visa success stories and qualifies leads with an eligibility form.",
    "idealFor": "Study visa consultants and IELTS/PTE coaching centres.",
    "pages": [
      "Home",
      "Country pages",
      "IELTS / PTE batches",
      "Visa success stories",
      "Eligibility check",
      "Contact"
    ],
    "features": [
      "Eligibility form that scores the lead",
      "Country-wise intake and cost pages",
      "IELTS batch booking",
      "Visa approval wall"
    ],
    "tech": [
      "Next.js",
      "ASP.NET Core API",
      "PostgreSQL"
    ],
    "software": "Student case tracker: documents pending, application stage and follow-ups.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Eligibility check"
      },
      {
        "type": "mockup",
        "variant": "detail",
        "label": "Country page"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "little-banyan",
    "category": "schools",
    "title": "Little Banyan Play School",
    "location": "Mohali",
    "status": "concept",
    "theme": "#D9661F",
    "accent": "#2A9D8F",
    "heroText": "Admissions open for Nursery & KG",
    "nav": [
      "Programs",
      "Our day",
      "Gallery",
      "Admissions"
    ],
    "cta": "Book a school visit",
    "summary": "A warm play school website that answers parents' first questions — safety, routine, fees — and books a visit.",
    "idealFor": "Play schools, preschools, daycares and small schools.",
    "pages": [
      "Home",
      "Programs",
      "A day at school",
      "Photo gallery",
      "Admission enquiry",
      "Contact"
    ],
    "features": [
      "Program-wise age and timing",
      "Photo and video gallery",
      "Admission enquiry form",
      "Parent testimonials"
    ],
    "tech": [
      "Next.js",
      "Headless CMS"
    ],
    "software": "Fee reminders, attendance and a parent app for daily updates.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Programs"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Admission enquiry"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "ironyard-fitness",
    "category": "gyms",
    "title": "IronYard Fitness",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#22303C",
    "accent": "#F2C14E",
    "heroText": "Train harder. First week free.",
    "nav": [
      "Memberships",
      "Classes",
      "Trainers",
      "Join"
    ],
    "cta": "Claim free trial",
    "summary": "A gym website with clear membership pricing and a free-trial form that feeds straight into the front desk.",
    "idealFor": "Gyms, CrossFit boxes, yoga and dance studios.",
    "pages": [
      "Home",
      "Memberships",
      "Class schedule",
      "Trainers",
      "Free trial",
      "Contact"
    ],
    "features": [
      "Membership plans with pricing",
      "Weekly class timetable",
      "Free-trial form",
      "Transformation gallery"
    ],
    "tech": [
      "Next.js",
      "ASP.NET Core API"
    ],
    "software": "Membership renewals, attendance and payment reminders on WhatsApp.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Membership plans"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Free trial"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "tandoor-street",
    "category": "restaurants-in",
    "title": "Tandoor Street",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#8E2C2C",
    "accent": "#F4A259",
    "heroText": "Order direct. Skip the app commission.",
    "nav": [
      "Menu",
      "Order",
      "Catering",
      "Visit"
    ],
    "cta": "Order now",
    "summary": "A restaurant website with a direct ordering menu so regulars order without the delivery-app commission.",
    "idealFor": "Restaurants, cafes and cloud kitchens.",
    "pages": [
      "Home",
      "Menu",
      "Online order & cart",
      "Catering enquiry",
      "Location & timings"
    ],
    "features": [
      "Menu with photos and veg/non-veg tags",
      "Direct ordering with WhatsApp confirmation",
      "QR menu for tables",
      "Catering enquiry form"
    ],
    "tech": [
      "Next.js",
      "ASP.NET Core API",
      "Payment gateway"
    ],
    "software": "Order dashboard for the kitchen and simple sales reports.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Menu"
      },
      {
        "type": "mockup",
        "variant": "detail",
        "label": "Dish & cart"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "northline-plumbing",
    "category": "trades",
    "title": "Northline Plumbing & Heating",
    "location": "Brampton, ON",
    "status": "concept",
    "theme": "#2C6E49",
    "accent": "#FFD166",
    "heroText": "24/7 plumbing across Brampton & Mississauga",
    "nav": [
      "Services",
      "Areas",
      "Reviews",
      "Get a quote"
    ],
    "cta": "Get a free quote",
    "summary": "A local trades website built to rank for 'plumber near me' and turn calls into booked jobs.",
    "idealFor": "Plumbers, HVAC, electricians and roofers.",
    "pages": [
      "Home",
      "Service pages",
      "Service-area pages",
      "Reviews",
      "Quote request",
      "Emergency call"
    ],
    "features": [
      "Click-to-call emergency button",
      "Separate page per service and area for local SEO",
      "Quote form with photo upload",
      "Google reviews feed"
    ],
    "tech": [
      "Next.js",
      "ASP.NET Core API"
    ],
    "software": "Job scheduling, technician assignment and invoicing.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Services"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Quote request"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "type": "website",
    "id": "maple-grove-dental",
    "category": "dentists-intl",
    "title": "Maple Grove Dental",
    "location": "Toronto, ON",
    "status": "concept",
    "theme": "#3D5A80",
    "accent": "#EE6C4D",
    "heroText": "New patients welcome — book online today",
    "nav": [
      "Services",
      "Our team",
      "Insurance",
      "Book online"
    ],
    "cta": "Book online",
    "summary": "A modern dental practice website with online booking and insurance info up front.",
    "idealFor": "Dental practices, chiropractors and med spas.",
    "pages": [
      "Home",
      "Services",
      "Team",
      "Insurance & payment",
      "New patient forms",
      "Book online"
    ],
    "features": [
      "Online booking",
      "Digital new-patient intake form",
      "Insurance and financing info",
      "Accessibility-first design"
    ],
    "tech": [
      "Next.js",
      "ASP.NET Core API",
      "SQL Server"
    ],
    "software": "Patient intake, appointment reminders and recall campaigns.",
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "home",
        "label": "Home page"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Online booking"
      },
      {
        "type": "mockup",
        "variant": "detail",
        "label": "Service page"
      },
      {
        "type": "mockup",
        "variant": "mobile",
        "label": "On mobile"
      }
    ]
  },
  {
    "id": "leaddesk-crm",
    "type": "software",
    "category": "property-dealers",
    "title": "LeadDesk CRM for property dealers",
    "appName": "LeadDesk CRM",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#1D4E89",
    "accent": "#F2A900",
    "dashTitle": "Sales pipeline",
    "menu": [
      "Dashboard",
      "Leads",
      "Site visits",
      "Properties",
      "Reports"
    ],
    "kpis": [
      "New leads",
      "Visits today",
      "Deals closed",
      "Pipeline value"
    ],
    "heroText": "Every lead, tracked till it closes",
    "cta": "Add lead",
    "summary": "A lead CRM where every enquiry from the website, WhatsApp and portals lands in one pipeline with follow-up reminders.",
    "idealFor": "Property dealers and builders handling 50+ enquiries a month.",
    "pages": [
      "Dashboard",
      "Leads & pipeline",
      "Site-visit calendar",
      "Property inventory",
      "Reports"
    ],
    "features": [
      "Leads from website, WhatsApp and portals in one list",
      "Follow-up reminders",
      "Site-visit scheduling",
      "Deal stages and commission tracking",
      "Team access by role"
    ],
    "software": "Can be paired with the Aravali Homes website so every website enquiry becomes a CRM lead automatically.",
    "tech": [
      "ASP.NET Core",
      "React",
      "PostgreSQL",
      "WhatsApp Business API"
    ],
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "dashboard",
        "label": "Pipeline dashboard"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Property inventory"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Add a lead"
      },
      {
        "type": "mockup",
        "variant": "app",
        "label": "Mobile app for agents"
      }
    ]
  },
  {
    "id": "coolfix-field",
    "type": "app",
    "category": "home-services",
    "title": "CoolFix Field Service App",
    "appName": "CoolFix",
    "location": "Mohali",
    "status": "concept",
    "theme": "#0F6E6E",
    "accent": "#FFD166",
    "heroText": "Today: 6 jobs, 2 AMC renewals",
    "cta": "Start job",
    "dashTitle": "Jobs today",
    "menu": [
      "Jobs",
      "Technicians",
      "Customers",
      "AMC",
      "Invoices"
    ],
    "kpis": [
      "Jobs today",
      "In progress",
      "AMC due",
      "Collected"
    ],
    "summary": "A technician app and office dashboard for AC/RO service businesses: assign jobs, track visits and collect payments on site.",
    "idealFor": "AC, RO, CCTV and pest control service businesses with field technicians.",
    "pages": [
      "Technician app",
      "Job assignment dashboard",
      "Customer history",
      "AMC renewals",
      "Invoices & payments"
    ],
    "features": [
      "Assign jobs to technicians",
      "Before/after photos per job",
      "Customer signature and UPI payment",
      "AMC renewal reminders",
      "Daily collection report"
    ],
    "software": "Includes the office dashboard and technician app.",
    "tech": [
      "Flutter",
      "ASP.NET Core API",
      "PostgreSQL"
    ],
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "app",
        "label": "Technician app"
      },
      {
        "type": "mockup",
        "variant": "dashboard",
        "label": "Office dashboard"
      },
      {
        "type": "mockup",
        "variant": "form",
        "label": "Book a service"
      }
    ]
  },
  {
    "id": "vector-portal",
    "type": "software",
    "category": "coaching",
    "title": "Vector Student Portal",
    "appName": "Vector Portal",
    "location": "Faridabad",
    "status": "concept",
    "theme": "#5B2A86",
    "accent": "#FFC857",
    "heroText": "Your tests, notes and fees in one place",
    "cta": "Start test",
    "dashTitle": "Batch overview",
    "menu": [
      "Overview",
      "Students",
      "Tests",
      "Fees",
      "Notes"
    ],
    "kpis": [
      "Students",
      "Avg. test score",
      "Fees due",
      "Attendance"
    ],
    "summary": "A student and admin portal for coaching institutes: online tests, notes, attendance and fee tracking.",
    "idealFor": "Coaching institutes with 100+ students across batches.",
    "pages": [
      "Admin dashboard",
      "Student profiles",
      "Online test series",
      "Fee tracking",
      "Notes library",
      "Parent view"
    ],
    "features": [
      "Online tests with auto-results",
      "Fee reminders on WhatsApp",
      "Batch-wise attendance",
      "Notes and video library",
      "Parent progress view"
    ],
    "software": "Pairs with the Vector Classes website for admissions.",
    "tech": [
      "React",
      "ASP.NET Core",
      "SQL Server"
    ],
    "demoUrl": "",
    "media": [
      {
        "type": "mockup",
        "variant": "dashboard",
        "label": "Admin dashboard"
      },
      {
        "type": "mockup",
        "variant": "app",
        "label": "Student app"
      },
      {
        "type": "mockup",
        "variant": "list",
        "label": "Test series"
      }
    ]
  }
]
};
