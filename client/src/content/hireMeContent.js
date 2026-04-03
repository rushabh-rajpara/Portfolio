import financeDashboardImage from "../images/Personal_Finance_Dashboard.jpeg";
import marketplaceImage from "../images/Marketplace.jpeg";
import uiUxImage from "../images/UI_UX.jpeg";

export const hireMeNavigation = [
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech-stack" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const hireMeHero = {
  eyebrow: "Available for senior roles",
  supportingHeadline:
    "Building digital legibility into complex technical systems.",
  description:
    "Focused on React, Node.js, and full-stack systems with real authentication, APIs, and data handling. I care about structure, performance, and shipping things that actually work.",
  primaryCta: {
    label: "View Resume",
    href: "/Rushabh-Rajpara-Resume.pdf",
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
      proofChips: ["Readable UI", "Responsive layout", "Polished states"],
      lines: [
        { accent: "const", line: "Experience = () => {" },
        { accent: "//", line: "Compose responsive product surfaces" },
        { accent: "const", line: "layout = createInterface({" },
        { accent: "  ", line: "readability: 'high'," },
        { accent: "  ", line: "motion: 'subtle'," },
        { accent: "  ", line: "stateFlow: 'clear'," },
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
    image: uiUxImage,
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
        detail: "Essential for version control, safer iteration, and keeping project changes organized.",
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

export const hireMePhilosophy = {
  eyebrow: "Philosophy",
  title: "The philosphy of intent",
  description:
    "I believe code is not just a tool for execution, but the foundation of a product's digital presence. My process favors strong technical decisions, structured systems, and calm iteration that holds up in real use.",
  principles: [
    {
      title: "Technical Precision",
      text: "Clear, type-safe code built for maintainability, performance, and long-term product scale.",
    },
    {
      title: "Editorial Aesthetic",
      text: "Design-minded engineering that respects whitespace, hierarchy, and clean user experience.",
    },
  ],
  intentPanel: {
    title: "Intent Framework",
    centerLabel: "Intent",
    activeLabel: "Active Principle",
    decisionLabel: "Decision Map",
    principles: [
      {
        id: "clarity",
        name: "Clarity",
        shortLabel: "Clarity First",
        description: "Intent removes confusion by making systems easier to read, use, and move through.",
        decisionMapItems: ["hierarchy", "readable flow", "spacing rhythm", "reduced friction"],
        position: { desktop: { x: 50, y: 14 }, mobile: { x: 50, y: 12 } },
      },
      {
        id: "technical-precision",
        name: "Technical Precision",
        shortLabel: "Technical Precision",
        description: "Intent turns engineering choices into stable systems with fewer surprises and stronger long-term quality.",
        decisionMapItems: ["stable logic", "maintainable structure", "performance discipline", "reliable implementation"],
        position: { desktop: { x: 80, y: 28 }, mobile: { x: 84, y: 30 } },
      },
      {
        id: "editorial-aesthetic",
        name: "Editorial Aesthetic",
        shortLabel: "Editorial Aesthetic",
        description: "Intent shapes interfaces through restraint, composition, and visual hierarchy rather than decoration.",
        decisionMapItems: ["whitespace", "composition", "hierarchy", "visual restraint"],
        position: { desktop: { x: 80, y: 68 }, mobile: { x: 84, y: 68 } },
      },
      {
        id: "structure",
        name: "Structure",
        shortLabel: "Structure",
        description: "Intent gives products a reusable architecture that scales with less friction and less rework.",
        decisionMapItems: ["reusable systems", "modular thinking", "scalable patterns", "clear architecture"],
        position: { desktop: { x: 50, y: 82 }, mobile: { x: 50, y: 86 } },
      },
      {
        id: "real-use",
        name: "Real Use",
        shortLabel: "Real Use",
        description: "Intent keeps products grounded in actual workflows, edge cases, and implementation reality.",
        decisionMapItems: ["practical flows", "durable UX", "implementation realism", "product readiness"],
        position: { desktop: { x: 20, y: 68 }, mobile: { x: 16, y: 68 } },
      },
      {
        id: "restraint",
        name: "Restraint",
        shortLabel: "Restraint",
        description: "Intent often means knowing what not to add, so the important parts can carry more weight.",
        decisionMapItems: ["fewer distractions", "cleaner surfaces", "focused attention", "calm interaction"],
        position: { desktop: { x: 20, y: 28 }, mobile: { x: 16, y: 30 } },
      },
    ],
  },
  flow: [
    {
      id: "discover",
      label: "Discover",
      title: "Understand the system before changing it",
      text: "I map the user journey, business goal, existing constraints, and technical risks before making implementation decisions.",
    },
    {
      id: "structure",
      label: "Structure",
      title: "Design flows that stay coherent as features grow",
      text: "I think through component boundaries, API shape, data flow, and failure cases so the product scales with fewer rewrites.",
    },
    {
      id: "refine",
      label: "Refine",
      title: "Polish the interaction until it feels dependable",
      text: "Once the core works, I tighten clarity, performance, and usability so the interface feels intentional instead of merely functional.",
    },
    {
      id: "ship",
      label: "Ship",
      title: "Deliver something stable and production-minded",
      text: "I aim for practical release quality: tested flows, understandable logic, and enough discipline that future work is easier, not harder.",
    },
  ],
};

export const hireMeAbout = [
  "I'm a web developer focused on building practical, scalable applications.",
  "I enjoy working across the full stack - from frontend UI to backend logic and database design.",
  "I care about solving real problems, not just writing code.",
];

export const hireMeResume = {
  description:
    "Looking for a developer who can build beyond static demos? My work focuses on real application flows, backend logic, authentication, databases, and shipping complete products.",
  highlights: [
    "Full-stack application development",
    "Authentication, APIs, and database design",
    "Practical product thinking and debugging mindset",
  ],
  cta: {
    label: "View Resume",
    href: "/Rushabh-Rajpara-Resume.pdf",
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
