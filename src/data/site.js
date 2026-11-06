import { Megaphone, PenTool, Target, Mail } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export const cvUrl = '/perpetual-rojasi-cv.pdf';

export const linkedin = "https://www.linkedin.com/in/pepertua-rojasi?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

export const contact = {
  email: "pepertua.rojasi@gmail.com",
  phone: "0778426922",
  phoneHref: "tel:+254778426922",
  whatsapp: "https://wa.me/254778426922",
  location: "Harare, Zimbabwe",
  linkedin: "https://www.linkedin.com/in/pepertua-rojasi?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
};

export const socials = [
  {
    label: "LinkedIn",
    href: linkedin,
    icon: FaLinkedinIn,
    external: true,
    isProfile: true,
  },
  {
    label: "WhatsApp",
    href: contact.whatsapp,
    icon: FaWhatsapp,
    external: true,
    isProfile: true,
  },
  {
    label: "Email",
    href: "mailto:" + contact.email,
    icon: Mail,
    external: false,
    isProfile: false,
  },
];
export const profiles = socials.filter((s) => s.isProfile);

export const services = [
  {
    icon: Megaphone,
    title: "Brand Strategy",
    text: "Positioning and messaging that makes a brand impossible to ignore.",
  },
  {
    icon: PenTool,
    title: "Paid Media",
    text: "Performance-driven ad campaigns across Meta, Google and TikTok.",
  },
  {
    icon: Target,
    title: "Content Systems",
    text: "Repeatable content engines that keep audiences engaged long-term.",
  },
  {
    icon: Mail,
    title: "Analytics & Reporting",
    text: "Clear, honest reporting so every dollar spent is accounted for.",
  },
];

// Portfolio projects with client, category, year, result, description, tags, image, pages, pdf
// Images are referenced from /work/ folder like the reference portfolio
export const projects = [
  {
    id: 1,
    title: "Mount St Mary's Campaign",
    client: "Healthcare Brand",
    category: "Brand + Paid Media",
    year: "2024",
    result: "Healthcare brand growth campaign",
    description:
      "A comprehensive marketing campaign for the healthcare brand featuring strategy, content creation, and performance-driven advertising.",
    tags: ["Strategy", "Content", "Paid Media"],
    image: "/work/img-01-project.jpg",
    pages: ["/work/img-01-project.jpg"],
    pdf: "/work/project1-report.pdf",
  },
  {
    id: 2,
    title: "Platinum Medical Centre",
    client: "Platinum Medical Centre",
    category: "Content + Social",
    year: "2024",
    result: "Social media presence management",
    description:
      "Social media strategy and management for the medical centre featuring content creation and community engagement.",
    tags: ["Social Media", "Content Strategy"],
    image: "/work/img-02-project.jpg",
    pages: ["/work/img-02-project.jpg"],
    pdf: "/work/project2-report.pdf",
  },
  {
    id: 3,
    title: "Pagomba Imaging",
    client: "Pagomba Imaging",
    category: "Full Funnel",
    year: "2024",
    result: "Imaging clinic marketing",
    description:
      "Full-funnel marketing campaign for the imaging clinic covering awareness, consideration, and conversion strategies.",
    tags: ["Full Funnel", "Marketing Campaign"],
    image: "/work/img-03-project.jpg",
    pages: ["/work/img-03-project.jpg"],
    pdf: "/work/project3-report.pdf",
  },
  {
    id: 4,
    title: "Healthcare Social Media Suite",
    client: "Healthcare Brand",
    category: "Paid Media",
    year: "2024",
    result: "Multi-platform healthcare campaign",
    description:
      "Integrated paid media campaign across multiple platforms for the healthcare brand.",
    tags: ["Paid Media", "Multi-platform"],
    image: "/work/img-04-project.jpg",
    pages: ["/work/img-04-project.jpg"],
    pdf: "/work/project4-report.pdf",
  },
];

/**
 * Certifications earned. Includes provider, issue date, and optional PDF/verify links.
 */
export const certificates = [
  {
    title: "Digital Marketing Foundations",
    provider: "Perpetual Rojasi",
    issued: "2024",
    image: "/work/certificate-placeholder.jpg",
    pdf: "/work/certificate-placeholder.pdf",
  },
  {
    title: "Social Media Strategy Certification",
    provider: "Perpetual Rojasi",
    issued: "2024",
    image: "/work/certificate-placeholder.jpg",
    pdf: "/work/certificate-placeholder.pdf",
  },
  {
    title: "Analytics & Measurement",
    provider: "Perpetual Rojasi",
    issued: "2024",
    image: "/work/certificate-placeholder.jpg",
    pdf: "/work/certificate-placeholder.pdf",
  },
];

/**
 * Work history and experience.
 */
export const experience = [
  {
    role: "Digital Marketer",
    organization: "Perpetual Rojasi",
    location: "Harare, Zimbabwe",
    period: "2024 - Present",
    points: [
      "Managing full-funnel marketing campaigns for growing brands.",
      "Developing strategic marketing plans and content systems.",
      "Performance tracking and ROI analysis for ad campaigns.",
      "Client communication and strategy iteration.",
    ],
  },
];

export const stats = [
  { value: '150+', label: 'Campaigns launched' },
  { value: '4.2x', label: 'Average ROAS' },
  { value: '38', label: 'Brands served' },
  { value: '6', label: 'Years in marketing' },
];

export const timeline = [
  { year: '2018', title: 'First Marketing Role', text: 'Started as a junior social media coordinator at a boutique agency.' },
  { year: '2020', title: 'Moved into Paid Media', text: 'Took ownership of ad budgets across several client accounts.' },
  { year: '2022', title: 'Went Independent', text: 'Started working directly with founders and brands as a consultant.' },
  { year: '2025', title: 'Today', text: 'Running full-funnel marketing strategy for growing brands.' },
];
