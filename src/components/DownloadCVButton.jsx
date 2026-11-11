import { Download } from "lucide-react";
import { cvUrl } from "../data/site";

export default function DownloadCVButton({ variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent"
      : variant === "outline"
        ? "border border-line bg-paper hover:border-ink"
        : variant === "light"
          ? "bg-paper text-ink hover:bg-accent hover:text-white"
          : variant === "navbar"
            ? "hidden border border-line bg-paper px-5 py-2 text-sm transition-colors hover:border-ink md:inline-flex"
            : "text-muted transition-colors hover:text-ink";

  return (
    <a
      href={cvUrl}
      download="Perpetual-Rojasi-CV.pdf"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${styles} ${className}`.trim()}
    >
      <Download size={16} /> Download CV
    </a>
  );
}
