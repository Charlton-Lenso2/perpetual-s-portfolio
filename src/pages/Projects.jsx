import { useState } from "react";
import { ArrowUpRight, Film } from "lucide-react";
import { Link } from "react-router";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import ProjectLightbox from "../components/ProjectLightbox";
import { projects } from "../data/site";

const filters = [
  "All work",
  ...new Set(projects.map((project) => project.category)),
];

function ProjectCard({ project, index, onOpen }) {
  return (
    <Reveal delay={index * 0.06}>
      <article
        onClick={() => onOpen(project)}
        className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-canvas">
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              project.imageFit === "contain"
                ? "bg-white object-contain"
                : "object-cover"
            }`}
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-paper/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            {project.category}
          </span>
          {project.video && (
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-paper backdrop-blur-sm">
              <Film size={13} /> Video
            </span>
          )}
        </div>

        <div className="flex h-full flex-col p-5 sm:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
            {project.client} · {project.year}
          </p>
          <h2 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
            {project.title}
          </h2>
          {project.description && (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          )}
          <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-4">
            <div>
              <p className="text-xs text-muted">Highlight</p>
              <p className="mt-1 text-sm font-medium">{project.result}</p>
            </div>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:bg-ink group-hover:text-paper"
            >
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [activeProject, setActiveProject] = useState(null);
  const visibleProjects =
    activeFilter === "All work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pb-20 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <section className="border-b border-line pb-10 md:pb-14">
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
                  Ideas made to{" "}
                  <span className="font-serif font-normal italic text-accent">
                    connect.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl leading-relaxed text-muted">
                  A collection of campaign concepts and digital marketing work
                  across social, paid media, and content.
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted">
                {String(visibleProjects.length).padStart(2, "0")} projects
              </p>
            </div>
          </section>
        </Reveal>

        <section className="pt-8 md:pt-10" aria-label="Project gallery">
          <div
            className="mb-7 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeFilter === filter
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:gap-5">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
                onOpen={setActiveProject}
              />
            ))}
          </div>
        </section>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-line pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
              Have something in mind?
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Let’s talk about your project.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>

      <ProjectLightbox
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
