import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

function SocialLinks({ className }) {
  const labels = ["LinkedIn", "WhatsApp"];
  const hrefs = ["https://www.linkedin.com/in/pepertua-rojasi", "https://wa.me/254778426922"];

  return (
    <nav aria-label="Social media" className={className}
      >
      {socials.map((label, i) => (
        <a key={label}
          href={hrefs[i]}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {i === 0 ? <FaLinkedinIn size={18} aria-hidden="true" /> : <FaWhatsapp size={18} aria-hidden="true" />}
          <span>{label}</span>
        </a>
      ))
    </nav>
  );
}
