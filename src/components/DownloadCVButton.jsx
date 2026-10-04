import { Download } from "lucide-react";
import { cvUrl } from "../data/site";

export default function DownloadCVButton({ className = "", label = "Download CV" }) {
  return (
    <a
      href={cvUrl}
      download="Perpetual-Rojasi-CV.pdf"
      className={`inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Download size={16} />
      {label}
    </a>
  );
}
