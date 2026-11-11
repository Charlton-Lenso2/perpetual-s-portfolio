import { Megaphone, PenTool, Target, Mail } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import campaignCover from "../assets/project-previews/campaign-01.jpg";
import campaignOverview from "../assets/project-previews/campaign-02.jpg";
import campaignPersona from "../assets/project-previews/campaign-03.jpg";
import pagombaCover from "../assets/project-previews/pagomba-profile.jpg";
import zimraCover from "../assets/project-previews/zimra-01.jpg";
import zimraSummary from "../assets/project-previews/zimra-02.jpg";
import zimraAudit from "../assets/project-previews/zimra-03.jpg";
import zimraPdf from "../assets/Presentation Format Request.pdf";
import googleCertificate from "../assets/WhatsApp Image 2026-11-06 at 10.37.56 (1).jpeg";
import talentCertificate from "../assets/certificate-previews/talent4startups.jpg";
import talentCertificatePdf from "../assets/Tofara certificate.pdf";

export const cvUrl = "/perpetual-rojasi-cv.pdf";


export const linkedin = "https://www.linkedin.com/in/pepertua-rojasi";

export const contact = {
  email: "pepertua.rojasi@gmail.com",
  phone: "+263 778 426 922",
  phoneHref: "tel:+263778426922 ",
  whatsapp: "https://wa.me/0778426922",
  location: "Harare, Zimbabwe",
  linkedin: "https://www.linkedin.com/in/pepertua-rojasi",
};

/**
 * Contact channels that are genuinely live. Instagram and TikTok are
 * intentionally absent — no verified accounts exist, so no links are shown.
 */
export const socials = [
  {
    label: "LinkedIn",
    href: contact.linkedin,
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
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
    isProfile: false,
  },
];

/** Social profiles only — used where a dedicated email row already exists. */
export const profiles = socials.filter((s) => s.isProfile);

export const services = [
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    text: "Platform-first strategies that build an engaged audience and a recognisable voice.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    text: "Stories, campaigns and content calendars that keep your brand top of mind.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    text: "Targeted ad campaigns focused on measurable returns, not vanity metrics.",
  },
  {
    icon: Mail,
    title: "Email & Automation",
    text: "Lifecycle emails and automations that turn subscribers into loyal customers.",
  },
];

// Real portfolio work. `image` is the project cover, `pages` are extra
// rendered spreads shown in the lightbox, and `pdf` / `projectUrl` open the
// full project.
// `result` states what the deliverable actually produced. Figures that were
// campaign targets (not measured outcomes) are labelled as such.
export const projects = [
  {
    id: 1,
    title: "Platinum Medical Centre Digital Marketing Campaign",
    client: "Platinum Medical Centre",
    category: "Digital Marketing Campaign",
    year: "2026",
    result: "13-page campaign strategy",
    description:
      "A digital marketing campaign for a private outpatient clinic in Chitungwiza. The strategy focuses on community awareness, trust and appointment bookings, and includes audience research, patient education, and plans for Facebook, WhatsApp Business, email and search.",
    tags: ["Campaign strategy", "Audience research", "Healthcare"],
    image: campaignCover,
    pages: [campaignOverview, campaignPersona],
    projectUrl: "https://canva.link/af27kci132ehcao",
    socialLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1FR4mQtNka/?mibextid=wwXIfr",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@platinum.medicalcentre?_r=1&_t=ZS-9B8zwz8HAJQ",
      },
    ],
  },
  {
    id: 2,
    title: "ZIMRA Website Audit",
    client: "Zimbabwe Revenue Authority",
    category: "SEO Audit",
    year: "2026",
    result: "12-page technical, backlink and traffic audit",
    description:
      "A technical, backlink and traffic audit of ZIMRA's public website, prepared from SEMrush reports. The document reviews site health, backlink quality, search visibility and traffic patterns, with findings and recommendations.",
    tags: ["Technical SEO", "SEMrush", "Website audit"],
    image: zimraCover,
    pages: [zimraSummary, zimraAudit],
    pdf: zimraPdf,
  },
  {
    id: 3,
    title: "Pagomba Imaging Centre Social Media",
    client: "Pagomba Imaging Centre",
    category: "Social Media Management",
    year: "2024–Present",
    result: "Social media content and channel management",
    description:
      "Ongoing social media management for Pagomba Imaging Centre, including audience-focused service information, content planning, branded creative, Facebook advertising and performance review.",
    tags: ["Social media", "Content planning", "Facebook advertising"],
    image: pagombaCover,
    imageFit: "contain",
    pages: [],
    socialLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/192mAMrePT/?mibextid=wwXIfr",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@pagomba.imaging?_r=1&_t=ZS-9B8zrv1QYhl",
      },
    ],
  },
];

export const certificates = [
  {
    title: "Foundations of Digital Marketing and E-commerce",
    provider: "Google · Coursera",
    issued: "September 2025",
    image: googleCertificate,
    document: googleCertificate,
  },
  {
    title: "Digital Marketing Course for Business and Career Development",
    provider: "Talent 4 Startups · Digital Africa",
    image: talentCertificate,
    document: talentCertificatePdf,
  },
];

/** Work history, from the CV. */
export const experience = [
  {
    role: "Digital Marketer",
    org: "Pagomba Imaging Centre",
    location: "Remote",
    period: "November 2024 – Present",
    points: [
      "Manage social media strategy and digital content, adapting service information into clear, audience-focused messaging.",
      "Develop monthly content calendars and write captions to support publishing schedules, service awareness and engagement.",
      "Create branded Canva graphics and educational campaigns covering pregnancy, women's health and men's health.",
      "Run Facebook advertising campaigns and review analytics to inform content and campaign decisions.",
      "Use AI tools to support content production while maintaining brand quality and consistency.",
    ],
  },
  {
    role: "Content Producer / CG Operator / News Writer",
    org: "Zimpapers Television Network",
    period: "January 2023 – December 2025",
    points: [
      "Research, script and produce documentaries, podcasts, television and social media content.",
      "Coordinate productions with clients and stakeholders to deliver against creative briefs and deadlines.",
      "Design promotional graphics and sponsorship visuals, and manage production schedules.",
    ],
  },
];
