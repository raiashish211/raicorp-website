/*
  JOBS — har opening ek block. Naya job: koi block copy karo, id unique rakho.

  status:   "open"   -> site pe dikhega
            "closed" -> dikhega, "Closed" ke saath (apply band)
            "draft"  -> chhupa rahega (preview: jobs.html?preview=1)
  org:      "raicorp" -> RaiCorp ki apni team ke liye
            "client"  -> kisi aur company ke liye (company ka naam chhupa sakte ho: company: "Mohali-based SaaS company")
  applyUrl: optional — Google Form ka link do to Apply button wahan le jayega.

  Neeche ke dono jobs EXAMPLE hain (status "draft") — format samajhne ke liye. Apni asli opening daalo aur status "open" karo.
*/
window.R = window.R || {};
R.jobs = [
  {
    id: "frontend-intern-2026",
    status: "draft",
    org: "raicorp",
    company: "RaiCorp",
    title: "Frontend developer intern",
    team: "Development",
    location: "Remote",
    mode: "Remote",
    type: "Internship",
    experience: "0–1 year",
    salary: "Stipend: ₹8,000–12,000 / month",
    posted: "2026-10-29",
    skills: ["HTML", "CSS", "JavaScript", "React basics"],
    summary: "Build and ship business websites and demo pages for RaiCorp clients, working directly with the founder.",
    responsibilities: ["Build responsive pages from approved designs", "Turn client details into demo websites using our templates", "Fix bugs and test on mobile before every release"],
    requirements: ["Comfortable with HTML, CSS and JavaScript", "At least one project on GitHub or live online", "4–5 hours a day, Monday to Saturday"]
  },
  {
    id: "dotnet-dev-client-mohali",
    status: "draft",
    org: "client",
    company: "Mohali-based SaaS company",
    title: ".NET developer",
    team: "Engineering",
    location: "Mohali",
    mode: "On-site",
    type: "Full-time",
    experience: "2–4 years",
    salary: "₹6–9 LPA",
    posted: "2026-10-29",
    skills: ["C#", "ASP.NET Core", "SQL Server", "REST APIs"],
    summary: "Develop and maintain APIs and admin modules for a B2B SaaS product used by mid-size businesses.",
    responsibilities: ["Build and document REST APIs in ASP.NET Core", "Write efficient SQL queries and stored procedures", "Work with the frontend team on new features"],
    requirements: ["2+ years with C# and ASP.NET Core", "Good SQL Server fundamentals", "Can join within 30 days"]
  }
];
