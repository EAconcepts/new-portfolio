export const site = {
  name: "Emmanuel Amoo",
  role: "Full‑Stack Engineer",
  location: "Lagos, Nigeria",
  email: "amooemmanuel10@gmail.com",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "10k+", label: "Active Users Served" },
    { value: "6", label: "Person Team Led" },
    { value: "30+", label: "Devs Mentored" },
  ],
  socials: [
    { label: "GitHub",   icon: "FaGithub",   href: "https://github.com/EAconcepts" },
    { label: "LinkedIn", icon: "FaLinkedin",  href: "https://www.linkedin.com/in/emmanuel-amoo-9856b3209/" },
    { label: "Twitter",  icon: "FaXTwitter",  href: "https://x.com/emmycodes_" },
  ],
  tech: [
    // Languages
    "JavaScript", "TypeScript",
    // Frontend
    "React", "Next.js", "TailwindCSS",
    // Backend
    "Node.js", "NestJS", "Express",
    // Data & Infra
    "PostgreSQL", "MySQL", "Redis", "Docker",
    // Integrations & Tools
    "Paystack", "Cloudinary", "Sanity CMS",
  ],
  projects: [
    {
      title: "Bookivo",
      tagline: "Book publishing, reading & payment platform — wallets, payouts, and notifications for a growing user base",
      stack: ["React", "Node.js", "MySQL", "Redis", "Cloudinary", "Termii"],
      highlights: [
        "Secure manuscript delivery via credentialed backend streaming proxy",
        "Multi-channel OTP: Termii (Nigeria) + WhatsApp OTP with SMS fallback internationally",
        "Bot-aware SSR for Open Graph/social share previews, improving link click-through",
        "Cut infrastructure spend by migrating Redis to Upstash free tier",
      ],
      links: {
        live: null,
        repo: null,
      },
    },
    {
      title: "POSmart (Grocery POS)",
      tagline: "Multi‑store POS with inventory, alerts, and per‑store deployment. Later converted into a cross-platform desktop application using Electron.",
      stack: ["React", "Node.js", "MySQL", "Express", "Electron"],
      highlights: [
        "Converted the web system into a cross-platform desktop app with Electron for native local capabilities",
        "Real‑time inventory and low‑stock alerts",
        "Optimized backend queries and schema for fast, reliable sales record processing",
        "JWT auth with role-based access control",
      ],
      links: {
        live: "https://posmart.kyrosautomobile.com/",
        repo: "https://github.com/EAconcepts/posmart-frontend",
      },
    },
    {
      title: "KyrosAutomobile Raffle Draw",
      tagline: "Gamified raffle system with 1M+ numbers, payment integration, and secure admin dashboard",
      stack: ["React", "Node.js", "MySQL", "Express"],
      highlights: [
        "Fairness and transparency ensured across all draws",
        "Reference generation, verification & email notifications",
        "Robust audit trail and admin dashboard",
      ],
      links: {
        live: "https://kyrosautomobile.com/",
        repo: "https://github.com/EAconcepts/raffle-backend",
      },
    },
    {
      title: "Penstribe Publishing Automation",
      tagline: "Professional book publishing platform — Upload → Edit → Publish pipeline with Cloudinary",
      stack: ["React", "Node.js", "MySQL", "TypeScript"],
      highlights: [
        "Real-time chat between users and admin",
        "Admin dashboard: services, transactions, file uploads & analytics",
        "Automated emails, invoices & cron-job reminders",
      ],
      links: {
        live: "http://penstribeautomate.com/",
        repo: "https://github.com/EAconcepts/penstribe-automation",
      },
    },
    {
      title: "Morgan Capital Group",
      tagline: "Full-stack website rebuild for an NGX/SEC-licensed capital & investment firm",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Ngxpulse"],
      highlights: [
        "Designed and implemented complex, secure multi-step account opening forms & newsletters",
        "Integrated real-time live market data feeds powered by Ngxpulse",
        "NestJS + PostgreSQL API with Redis caching for fast content delivery",
        "Scoped and architected the full website rebuild with a cost-conscious hosting & CMS strategy",
      ],
      links: {
        live: "https://morgancapital.ng",
        repo: null,
      },
    },
    {
      title: "Sahara Marketplace",
      tagline: "E-commerce marketplace for authentic African products — admin workflows and scalable storage",
      stack: ["Next.js", "TailwindCSS"],
      highlights: [
        "Vendor dashboard for product and order management",
        "User dashboard for order tracking and history",
        "Shopping cart, checkout & payment gateway integration",
      ],
      links: {
        live: "https://sahara-markeplace.vercel.app/",
        repo: "https://github.com/EAconcepts/sahara-markeplace",
      },
    },
  ],
  experience: [
    {
      org: "Ditrop Inc. (Remote · Canada)",
      role: "Team Lead & Fullstack Developer",
      period: "Mar 2025 — Mar 2026",
      bullets: [
        "Built 5+ scalable web apps with React & Next.js, improving load time by 40%",
        "Designed NestJS/PostgreSQL backend for a ride-booking app (trip lifecycle, driver-matching, status & notification APIs)",
        "Led a cross-functional team of 6 devs, designers & PMs — reducing delivery cycle by 25%",
        "System supports 10k+ active users",
        "Championed Agile practices and code reviews, lowering bug reports by 25%",
      ],
    },
    {
      org: "Femtech Training Institute",
      role: "Software Developer & Instructor",
      period: "Feb 2024 — Feb 2025",
      bullets: [
        "Directed enterprise solution projects, improving client operations by 30%",
        "Trained and mentored 30+ developers — 80% completed production-ready projects",
        "Delivered interactive coding sessions on full-stack web development",
      ],
    },
    {
      org: "OIC Coding Hub Ltd",
      role: "Software Developer & Tutor",
      period: "Oct 2023 — Jan 2024",
      bullets: [
        "Mentored new developers in frontend technologies",
        "Guided trainees on real-world project builds",
      ],
    },
    {
      org: "365Life Media & Communication",
      role: "Software Developer",
      period: "Dec 2022 — Oct 2023",
      bullets: [
        "Developed and deployed multiple web apps using React.js and API integrations",
        "Ensured mobile responsiveness and performance optimization",
        "Reduced bounce rate by 20%",
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
