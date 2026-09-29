import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/", Icon: FaTiktok },
  { label: "WhatsApp", href: "https://wa.me/", Icon: FaWhatsapp },
];

export default function SocialLinks({ className = "" }) {
  return (
    <nav
      aria-label="Social media"
      className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}
    >
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
