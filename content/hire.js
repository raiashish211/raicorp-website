/*
  HIRE TALENT page content.
*/
window.CONTENT = window.CONTENT || {};
CONTENT.hire = {
  rolesHeading: "Talent we provide",
  roles: [
    { icon: "software", name: "Backend developers", skills: [".NET / ASP.NET Core", "Node.js", "Python", "Java"] },
    { icon: "web", name: "Frontend developers", skills: ["React", "Next.js", "Angular", "Vue"] },
    { icon: "mobile", name: "Mobile developers", skills: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { icon: "erp", name: "Full-stack developers", skills: [".NET + React", "MERN", "Next.js + Node"] },
    { icon: "wrench", name: "DevOps & cloud", skills: ["AWS", "Azure", "Docker", "CI/CD"] },
    { icon: "design", name: "UI/UX designers", skills: ["Figma", "Design systems", "Prototyping"] },
    { icon: "megaphone", name: "Digital marketers", skills: ["SEO", "Google Ads", "Meta Ads", "Social media"] },
    { icon: "shield", name: "QA engineers", skills: ["Manual testing", "Automation", "Playwright"] }
  ],

  modelsHeading: "Ways to work with us",
  models: [
    {
      name: "Dedicated professional",
      text: "A developer, designer or marketer works only on your project, in your tools, on a monthly contract.",
      points: ["Start within a week", "Replace anytime", "Weekly reports"],
      price: { IN: 59999, INTL: 1800, UK: 1500, GCC: 6600, CA: 2400, AU: 2700 }, suffix: "/month onwards"
    },
    {
      name: "Hourly / part-time",
      text: "Flexible hours for smaller tasks, maintenance or extra hands during busy months.",
      points: ["Minimum 40 hours", "Use hours across roles", "Timesheet reports"],
      price: { IN: 699, INTL: 22, UK: 18, GCC: 80, CA: 30, AU: 33 }, suffix: "/hour onwards"
    },
    {
      name: "Full-time recruitment",
      text: "Our recruitment partners source, screen and interview candidates you hire directly on your payroll.",
      points: ["Shortlist in 7–10 days", "Technical interviews included", "Replacement guarantee"],
      price: { IN: "8.33% of annual CTC", INTL: "Custom quote" }, suffix: ""
    }
  ],

  stepsHeading: "How hiring works",
  steps: [
    { title: "Share the role", text: "Skills, experience, budget and start date — on a call or the form below." },
    { title: "Get profiles", text: "Pre-screened profiles within 3–7 days." },
    { title: "Interview", text: "You interview and choose. We can run the technical round for you." },
    { title: "Onboard", text: "Contract, NDA and onboarding handled. Start working." }
  ],

  formHeading: "Tell us who you need"
};
