export const site = {
  name: "Emmanuel Amoo",
  role: "Full‑Stack Developer",
  location: "Ilorin, Nigeria",
  email: "amooemmanuel10@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/EAconcepts" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emmanuel-amoo-9856b3209/",
    },
    { label: "Twitter", href: "https://x.com/emmycodes_" },
  ],
  tech: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "mySQL",
    "Docker",
  ],
  projects: [
    {
      title: "POSmart (Grocery POS)",
      tagline:
        "Multi‑store POS with inventory, alerts, and per‑store deployment",
      stack: ["React", "Node", "mySQL", "Express"],
      highlights: [
        "Real‑time inventory and low‑stock alerts",
        "JWT auth, role‑based access",
      ],
      links: {
        live: "https://posmart.kyrosautomobile.com/",
        repo: "https://github.com/EAconcepts/posmart-frontend",
      },
    },
    {
      title: "Raffle Draw System",
      tagline:
        "1M raffle numbers, offline/online tickets, Paystack integration",
      stack: ["React", "Node", "MySQL", "Express"],
      highlights: [
        "Reference generation and verification",
        "Email notifications & admin dashboard",
        "Robust audit trail",
      ],
      links: {
        live: "https://kyrosautomobile.com/",
        repo: "https://github.com/EAconcepts/raffle-backend",
      },
    },
    {
      title: "Penstribe Publishing Automation",
      tagline: "Upload → Edit → Publish pipeline with Cloudinary",
      stack: ["Node", "Express", "MySQL", "ReactJs", "Typescript"],
      highlights: [
        "Admin workflow and status tracking",
        "Automated emails and invoices",
        "Scalable file storage",
        "Cron jobs for email reminders",
      ],
      links: {
        live: "http://penstribeautomate.com/",
        repo: "https://github.com/EAconcepts/penstribe-automation",
      },
    },
    {
      title: "Sahara Marketplace",
      tagline: "E-commerce marketplace for authentic African products, featuring admin workflows, automated emails, and scalable storage.",
      stack: ["NextJs", "Tailwind CSS",],
      highlights: [
        "Vendor dashboard for product and order management",
        "User dashboard for order tracking and history",
        "Shopping cart and checkout functionality",
        "Payment gateway integration"
      ],
      links: {
        live: "https://sahara-markeplace.vercel.app/",
        repo: "https://github.com/EAconcepts/sahara-markeplace",
      },
    },
  ],
  experience: [
    {
      org: "Ditrop Inc.",
      role: "Frontend Developer & Tech Lead",
      period: "March 2025 — Present",
      bullets: [
        "Built admin dashboards and client projects",
        "Led frontend architecture decisions",
        "Led code reviews and mentoring",
        "Improved performance and accessibility",
      ],
    },
    {
      org: "FITI",
      role: "Head, Enterprise Solution Dev & QA Officer",
      period: "February 2024 — February 2025",
      bullets: [
        "Led development of client solutions",
        "Authored QA processes and checklists",
        "Coordinated training and mentorship of web developers",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Delivers production‑ready features fast, with clean architecture.",
      author: "Client",
    },
  ],
};
