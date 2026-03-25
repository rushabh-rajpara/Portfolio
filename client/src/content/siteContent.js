/**
 * ServiceItem: { title, summary, outcome }
 * CaseStudyItem: { name, clientProblem, solution, outcome, techStack, liveUrl?, repoUrl?, image }
 * ProcessStep: { title, description }
 * CapabilityItem: { label }
 */

import financeDashboardImage from "../images/Personal_Finance_Dashboard.jpeg";
import marketplaceImage from "../images/Marketplace.jpeg";
import ecommerceImage from "../images/Ecommerce.jpg";

export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "MVP Development",
    summary: "I build focused MVPs that ship quickly with the right core features.",
    outcome: "Launch faster, validate earlier, and avoid overbuilding.",
  },
  {
    title: "Custom Web Applications",
    summary: "I deliver tailored web apps for operations, customer portals, and business workflows.",
    outcome: "Get dependable software aligned with how your business actually runs.",
  },
  {
    title: "White-Label Development for Agencies",
    summary: "I support agencies with reliable execution under your brand and delivery standards.",
    outcome: "Scale project capacity without adding permanent in-house overhead.",
  },
  {
    title: "Automation & Internal Tools",
    summary: "I automate repetitive processes and build internal systems that reduce manual effort.",
    outcome: "Improve team efficiency with faster, more consistent day-to-day operations.",
  },
];

export const caseStudies = [
  {
    name: "Finance Operations Dashboard",
    clientProblem:
      "A growing team needed a clearer way to track spending, budgets, and financial performance.",
    solution:
      "Built a centralized dashboard with budget controls, visual reporting, and secure user access.",
    outcome:
      "Improved visibility for decision-makers and made monthly financial reviews more consistent.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    repoUrl: "https://github.com/rushabh-rajpara/personal-finance-dashboard",
    image: financeDashboardImage,
  },
  {
    name: "Artisan Marketplace Platform",
    clientProblem:
      "An artisan business needed an online marketplace with better product approvals and catalog management.",
    solution:
      "Developed a marketplace with listing workflows, search support, and admin-level controls.",
    outcome:
      "Streamlined product publishing and improved the buying experience for end customers.",
    techStack: ["PHP", "AWS RDS", "Bootstrap", "Amazon S3"],
    liveUrl: "http://172.105.22.192/index.php",
    repoUrl: "https://github.com/rushabh-rajpara/Artisan_Marketplace",
    image: marketplaceImage,
  },
  {
    name: "Commerce Experience Rebuild",
    clientProblem:
      "A product-led business needed a more reliable commerce flow with cleaner UX and stronger backend coordination.",
    solution:
      "Reworked the storefront architecture with optimized frontend flows and integrated backend services.",
    outcome:
      "Reduced friction in the purchase journey and created a stronger foundation for scaling features.",
    techStack: ["React", "Node.js", "MongoDB"],
    repoUrl: "git@github.com:rushabh-rajpara/HappyBox_Php",
    image: ecommerceImage,
  },
];

export const processSteps = [
  {
    title: "Understand",
    description: "We clarify business goals, users, and technical constraints before writing code.",
  },
  {
    title: "Plan",
    description: "I define scope, timeline, and architecture so delivery stays predictable.",
  },
  {
    title: "Build",
    description: "I implement in focused milestones with clean communication and practical iteration.",
  },
  {
    title: "Deliver",
    description: "You receive production-ready software, documentation, and reliable handover support.",
  },
];

export const capabilities = [
  { label: "Web Applications" },
  { label: "MVPs" },
  { label: "SaaS Platforms" },
  { label: "API Integrations" },
  { label: "Automation Systems" },
  { label: "Full-Stack Development" },
];

export const contactDetails = {
  email: "rushabh4478@gmail.com",
  phone: "+1 548 398 0233",
  location: "Waterloo, Ontario, Canada",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  website: "https://rushabh-rajpara.github.io/Portfolio/",
};
