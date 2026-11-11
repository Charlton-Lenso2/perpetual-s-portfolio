import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Film, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

/**
 * Full-screen lightbox for a portfolio project. Shows the rendered pages,
 * plays the brand-kit video inline when present, and links out to the source
 * PDF. Controlled via the `project` prop (null = closed).
 */
export default function ProjectLightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  const gallery = [project?.image, ...(project?.pages ?? [])].filter(Boolean);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-80 flex items-start justify-center overflow-y-auto bg-ink/70 px-3 py-6 backdrop-blur-sm sm:px-6 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-[1.75rem] border border-line bg-paper p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-4"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="absolute -top-3 -right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-lg transition-colors hover:bg-ink hover:text-paper sm:-top-4 sm:-right-4"
            >
              <X size={19} />
            </button>

            <div className="px-2 pb-2 pt-6 sm:px-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="rounded-full border border-line bg-canvas px-3 py-1 font-medium text-ink">
                  {project.category}
                </span>
                {project.client && (
                  <span className="rounded-full border border-line px-3 py-1">
                    {project.client}
                  </span>
                )}
                {project.year && (
                  <span className="rounded-full border border-line px-3 py-1">
                    {project.year}
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {project.title}
              </h2>

              {project.result && (
                <p className="mt-2 text-sm font-medium text-accent">
                  {project.result}
                </p>
              )}

              {project.description && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
              )}

              {project.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-canvas px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.socialLinks?.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    Managed social channels
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                      >
                        {social.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {gallery.length > 1 && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    Inside the work
                  </p>
                  <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                    {gallery.map((src, index) => (
                      <img
                        key={src + index}
                        src={src}
                        alt={`${project.title} page ${index + 1}`}
                        className={`h-28 w-auto shrink-0 rounded-lg border border-line ${
                          project.imageFit === "contain"
                            ? "bg-white object-contain"
                            : "bg-canvas object-cover"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.video && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    Brand kit in motion
                  </p>
                  <video
                    src={project.video}
                    poster={project.videoPoster}
                    controls
                    playsInline
                    preload="metadata"
                    className="mt-3 w-full rounded-xl border border-line bg-canvas"
                  >
                    Your browser does not support embedded video.{" "}
                    <a href={project.video} target="_blank" rel="noreferrer">
                      Download the video
                    </a>
                    .
                  </video>
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                {project.pdf && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-accent"
                  >
                    View full document <ArrowUpRight size={16} />
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-accent"
                  >
                    {project.projectUrlLabel ?? "View full project on Canva"}{" "}
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-ink"
                  >
                    <Film size={16} /> Open video
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
