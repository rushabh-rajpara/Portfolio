import financeDashboardImage from "../images/Personal_Finance_Dashboard.jpeg";
import marketplaceImage from "../images/Marketplace.jpeg";
import telegramBotImage from "../images/Telegram_bot.png";
import stockManagementImage from "../images/Stock_management.png";
import crmImage from "../images/CRM.png";
import digitalFarmingImage from "../images/Digital_Farming.png";

export const hireMeNavigation = [
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech-stack" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const hireMeHero = {
  eyebrow: "Available for developer roles",
  supportingHeadline:
    "Building scalable web applications from idea to production",
  description:
    "Focused on React, Node.js, and full-stack systems with authentication, APIs, and real data handling. I care about structure, performance, and building things that hold up in real use.",
  primaryCta: {
    label: "View Resume",
    href: "resume.html",
    isExternal: true,
  },
  secondaryCta: { label: "View Projects", href: "#projects" },
  availability: "Open to full-time roles and freelance opportunities.",
  highlights: [
    "Full-stack systems",
    "Authentication",
    "API design",
    "Database structure",
  ],
  codeWindowTitle: "ProjectRenderer.tsx",
  metricLabel: "98 Lighthouse",
  metricSubtext: "Performance Score",
  views: [
    {
      id: "frontend",
      label: "Frontend",
      title: "Interface Systems",
      metricLabel: "98 Lighthouse",
      metricSubtext: "Performance Score",
      proofChips: ["Scalable architecture", "Clean state management", "Production-ready UI"],
      lines: [
        { accent: "const", line: "Experience = () => {" },
        { accent: "//", line: "Compose responsive product surfaces" },
        { accent: "const", line: "layout = createInterface({" },
        { accent: "  ", line: "architecture: 'scalable'," },
        { accent: "  ", line: "stateFlow: 'predictable'," },
        { accent: "  ", line: "performance: 'optimized'," },
        { accent: "});", line: "" },
        { accent: "return", line: "(" },
        { accent: "  <", line: "Hero density=\"balanced\" />" },
        { accent: "  <", line: "Projects emphasis=\"scanable\" />" },
        { accent: ");", line: "" },
        { accent: "}", line: "" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      title: "Application Logic",
      metricLabel: "24 Routes",
      metricSubtext: "Structured API Surface",
      proofChips: ["Auth flows", "Validation", "Server structure"],
      lines: [
        { accent: "const", line: "service = buildServer({" },
        { accent: "//", line: "Coordinate auth, APIs, and persistence" },
        { accent: "  ", line: "auth: 'session-based'," },
        { accent: "  ", line: "validation: 'strict'," },
        { accent: "  ", line: "observability: 'enabled'," },
        { accent: "});", line: "" },
        { accent: "await", line: "service.connectDatabase();" },
        { accent: "return", line: "service.handle(request);" },
        { accent: "  ", line: "" },
        { accent: "  ", line: "" },
        { accent: "}", line: "" },
      ],
    },
    {
      id: "deployment",
      label: "Deployment",
      title: "Shipping Flow",
      metricLabel: "3 Environments",
      metricSubtext: "From dev to production",
      proofChips: ["Preview builds", "Release checks", "Rollback ready"],
      lines: [
        { accent: "const", line: "pipeline = deploy({" },
        { accent: "//", line: "Ship stable builds with controlled rollouts" },
        { accent: "  ", line: "preview: 'automatic'," },
        { accent: "  ", line: "checks: 'gated'," },
        { accent: "  ", line: "rollback: 'ready'," },
        { accent: "});", line: "" },
        { accent: "await", line: "pipeline.verify();" },
        { accent: "return", line: "pipeline.release('production');" },
        { accent: "  ", line: "" },
        { accent: "  ", line: "" },
        { accent: "}", line: "" },
      ],
    },
  ],
};

export const hireMeProjects = [
  {
    title: "Personal Finance Dashboard",
    role: "Full-stack dashboard with secure auth and real-time financial tracking.",
    summary:
      "A full-stack dashboard for tracking budgets, expenses, and financial goals with real-time updates.",
    stack: ["MERN Stack", "Tailwind CSS", "Data Visualization"],
    points: [
      "Built secure authentication flows using sessions and cookies",
      "Implemented charts, financial tracking, and goal progress logic",
      "Solved auth flow and data consistency issues across the app",
    ],
    challenge: "Keep authentication and live financial state consistent across connected views.",
    outcome: "Created a stable budgeting workflow with clear reporting and goal tracking.",
    image: financeDashboardImage,
    repoUrl: "https://github.com/rushabh-rajpara/personal-finance-dashboard",
  },
  {
    title: "Artisan Marketplace",
    role: "Multi-role commerce workflow with approval-based publishing.",
    summary:
      "A multi-role marketplace where artisans can upload products and admins approve listings before public visibility.",
    stack: ["PHP", "MySQL", "AWS RDS", "Bootstrap"],
    points: [
      "Built role-based product and order workflows",
      "Designed relational database structure with approval logic",
      "Solved schema and foreign key issues during development",
    ],
    challenge: "Model relational approval states cleanly without breaking order and listing flows.",
    outcome: "Built a dependable marketplace structure for admin review and artisan publishing.",
    image: marketplaceImage,
    repoUrl: "https://github.com/rushabh-rajpara/Artisan_Marketplace",
  },
  {
    title: "BroBot",
    role: "AI productivity bot with scheduling and conversational follow-through.",
    summary:
      "An AI-powered Telegram productivity bot with scheduled check-ins, goal tracking, and dynamic conversational responses.",
    stack: ["Python", "MongoDB", "AI Integration", "Scheduling System"],
    points: [
      "Built webhook-based bot flows and scheduling logic",
      "Handled timezone-sensitive reminders and session timing",
      "Designed dynamic response behavior for accountability workflows",
    ],
    challenge: "Coordinate reminder timing, message context, and bot behavior across changing schedules.",
    outcome: "Shipped a more adaptive accountability bot flow with reliable reminder handling.",
    image: telegramBotImage,
    repoUrl: "https://github.com/rushabh-rajpara/Brobot.git",
  },
  {
    title: "Shree Stocks Management",
    role: "Inventory and stock management platform with web and mobile workflows.",
    summary:
      "A stock management system for tracking inventory movement, item availability, and operational updates across admin and mobile usage.",
    stack: ["React", "Node.js", "MySQL", "Flutter"],
    points: [
      "Built stock tracking flows across web dashboards and mobile usage",
      "Managed inventory logic, operational updates, and data consistency",
      "Connected frontend, backend, and database workflows for daily usage",
    ],
    challenge: "Keep stock updates reliable across multiple entry points while maintaining accurate inventory data.",
    outcome: "Delivered a practical stock operations system designed for real business usage and day-to-day tracking.",
    image: stockManagementImage,
  },
  {
    title: "Parikrman CRM",
    role: "Sales tracking and order management CRM with cross-platform support.",
    summary:
      "A CRM system for managing sales activity, order workflows, and follow-through across web and mobile interfaces.",
    stack: ["React", "Node.js", "MySQL", "React Native"],
    points: [
      "Built CRM workflows for sales tracking and order management",
      "Structured backend flows for order updates and customer-facing records",
      "Supported both web operations and mobile accessibility for teams",
    ],
    challenge: "Design a CRM flow that keeps sales activity and order status aligned across multiple users and platforms.",
    outcome: "Created a cleaner sales and order workflow that helps teams track progress with less manual confusion.",
    image: crmImage,
    repoUrl: "https://play.google.com/store/apps/details?id=com.bytebran.parikraman&pcampaignid=web_share",
  },
  {
    title: "Krishikaran",
    role: "Farmer-focused e-commerce system with rewards and repeat-engagement logic.",
    summary:
      "An e-commerce platform for selling farmer-related products with reward points, user retention features, and mobile-ready buying flows.",
    stack: ["React", "Node.js", "MySQL", "React Native"],
    points: [
      "Built reward-point flows tied to purchasing and user activity",
      "Handled e-commerce product, order, and user account logic",
      "Connected web storefront behavior with mobile-friendly purchase flows",
    ],
    challenge: "Balance commerce workflows, reward logic, and user retention features without making the product flow feel heavy.",
    outcome: "Shaped a more practical e-commerce experience with loyalty mechanics that support repeat use and product discovery.",
    image: digitalFarmingImage,
    repoUrl: "https://play.google.com/store/apps/details?id=com.bytebran.krishikaran&pcampaignid=web_share",
  },
];

export const hireMeTechGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        detail: "My default choice for scalable component architecture, reusable UI patterns, and full application flow.",
      },
      {
        name: "Tailwind CSS",
        detail: "Used to move quickly while keeping spacing, typography, and responsive structure consistent.",
      },
      {
        name: "JavaScript",
        detail: "Core language for dynamic UI behavior, component logic, and application state handling.",
      },
      {
        name: "HTML",
        detail: "Used with semantic structure in mind so interfaces stay accessible and easier to maintain.",
      },
      {
        name: "CSS",
        detail: "Used for layout control, polish, responsive adjustments, and intentional visual hierarchy.",
      },
      {
        name: "GSAP",
        detail: "Applied selectively for smooth, controlled motion where basic transitions are not enough.",
      },
      {
        name: "Framer Motion",
        detail: "Useful for subtle UI animation, staged reveals, and interaction feedback in React projects.",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        detail: "Used for building application services, API layers, and full-stack products with shared JavaScript context.",
      },
      {
        name: "Express",
        detail: "My go-to for clean route structure, middleware control, and practical API delivery.",
      },
      {
        name: "Python",
        detail: "Used for automation, AI-adjacent tooling, bot workflows, and backend scripting.",
      },
      {
        name: "FastAPI",
        detail: "Helpful when I want fast Python APIs with structured request handling and clear docs.",
      },
      {
        name: "PHP",
        detail: "Used in production-style marketplace work involving relational data and admin workflows.",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        detail: "Used for flexible document-based data models, especially in dashboards, bots, and user-driven systems.",
      },
      {
        name: "MySQL",
        detail: "Preferred when relational structure, joins, approval logic, and schema discipline matter.",
      },
      {
        name: "AWS RDS",
        detail: "Used to host managed relational databases in a more production-aware environment.",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      {
        name: "Git",
        detail: "Building complete systems - from frontend UI to backend logic, APIs, and deployment - with a focus on maintainability and real-world usage.",
      },
      {
        name: "GitHub",
        detail: "Used for repository management, collaboration, visibility, and deployment-linked workflows.",
      },
      {
        name: "Postman",
        detail: "Helpful for testing APIs, debugging request flows, and verifying backend behavior quickly.",
      },
      {
        name: "Render",
        detail: "Used for fast deployment of full-stack projects and backend services with minimal setup friction.",
      },
      {
        name: "Railway",
        detail: "Useful for shipping app infrastructure quickly while keeping deployments practical.",
      },
      {
        name: "AWS",
        detail: "Used when projects need stronger infrastructure awareness beyond simple static hosting.",
      },
    ],
  },
];

export const hireMeAbout = [
  "I'm a web developer focused on building practical, scalable applications - not just polished demos.",
  "I work across the full stack, from frontend interfaces to backend systems and database design.",
  "My focus is on building software that is structured, maintainable, and reliable in real-world use.",
];

export const hireMeAboutBlocks = [
  {
    title: "Approach",
    items: [
      "Clear system thinking over quick fixes",
      "API-first backend design",
      "Debugging across frontend, backend, and data",
      "Built for real usage, not demos",
    ],
  },
];

export const hireMeResume = {
  description:
    "Looking for a developer who can build beyond static demos?",
  highlights: [
    "Builds complete full-stack systems - from frontend UI to backend logic and deployment",
    "Strong with authentication, REST APIs, and database design (MongoDB & SQL)",
    "Debugs issues across the full application stack - frontend, backend, and data layer",
    "Writes structured, maintainable code designed for real-world usage and scaling",
  ],
  cta: {
    label: "View Resume",
    href: "resume.html",
    isExternal: true,
  },
  quickFacts: [
    "Builds complete full-stack systems from UI to deployment",
    "Strong with authentication, APIs, and relational or document databases",
    "Comfortable debugging product flow issues across multiple layers",
    "Balances technical rigor with clean, recruiter-friendly presentation",
  ],
};

export const hireMeContact = {
  description:
    "I'm open to developer roles, collaborations, and freelance opportunities.",
  primaryCta: { label: "Get in Touch", href: "mailto:rushabh4478@gmail.com" },
  items: [
    { label: "Email", value: "rushabh4478@gmail.com", href: "mailto:rushabh4478@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com", href: "https://www.linkedin.com" },
    {
      label: "GitHub",
      value: "github.com/rushabh-rajpara",
      href: "https://github.com/rushabh-rajpara",
    },
  ],
};

export const hireMeFooter = {
  name: "Rushabh.dev",
  role: "Web Developer",
  links: [
    { label: "GitHub", href: "https://github.com/rushabh-rajpara" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Email", href: "mailto:rushabh4478@gmail.com" },
  ],
};
